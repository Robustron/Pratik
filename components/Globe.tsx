'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function GalacticRing() {
  const ringRef = useRef<THREE.Points>(null);
  
  const particlesCount = 3000;
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      // Ring inner radius 2.4, outer radius 3.5
      const radius = 2.4 + Math.random() * 1.1;
      const theta = Math.random() * 2 * Math.PI;
      
      // Slight vertical variation for a thick ring
      const y = (Math.random() - 0.5) * 0.2;

      positions[i * 3] = radius * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = radius * Math.sin(theta);

      // Color gradient from cyan to purple
      const mix = Math.random();
      const color = new THREE.Color().lerpColors(
        new THREE.Color('#00f0ff'),
        new THREE.Color('#8a2be2'),
        mix
      );
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [particlesCount]);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      ringRef.current.rotation.x = Math.PI * 0.1; // Tilted ring
    }
  });

  return (
    <points ref={ringRef} geometry={geometry}>
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function EarthParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const satellitesRef = useRef<THREE.Points>(null);

  const earthTexture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-water.png');

  const particlesCount = 40000;
  const earthGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const uvs = new Float32Array(particlesCount * 2);

    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(1 - (2 * i) / particlesCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = 2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const u = 0.5 + Math.atan2(x, z) / (2 * Math.PI);
      const v = 0.5 - Math.asin(y / r) / Math.PI;

      uvs[i * 2] = u;
      uvs[i * 2 + 1] = v;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    return geo;
  }, [particlesCount]);

  const satellitesCount = 1000;
  const satellitesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(satellitesCount * 3);
    const sizes = new Float32Array(satellitesCount);
    const colors = new Float32Array(satellitesCount * 3);

    for (let i = 0; i < satellitesCount; i++) {
      const r = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      sizes[i] = Math.random() * 2;
      
      // Mix of cyan and purple for satellites
      const color = new THREE.Color().lerpColors(
        new THREE.Color('#00f0ff'),
        new THREE.Color('#b537f2'),
        Math.random()
      );
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [satellitesCount]);

  const earthMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: earthTexture },
        uTime: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 3.0 * (10.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(uTexture, vUv);
          float isLand = 1.0 - texColor.r;
          
          if (isLand > 0.5) {
            gl_FragColor = vec4(0.1, 0.8, 1.0, 0.9);
          } else {
            gl_FragColor = vec4(0.0, 0.1, 0.3, 0.3);
          }
          
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, [earthTexture]);

  const satelliteMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 }
      },
      vertexShader: `
        attribute float aSize;
        attribute vec3 aColor;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vColor = aColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (15.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = 0.5 + 0.5 * sin(uTime * 2.0 + position.x * 10.0);
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(vColor, vAlpha * 0.8);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
      earthMaterial.uniforms.uTime.value = time;
    }
    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = time * 0.08;
      satellitesRef.current.rotation.z = time * 0.02;
      satelliteMaterial.uniforms.uTime.value = time;
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshBasicMaterial color="#000510" transparent opacity={0.6} />
      </mesh>
      
      <points ref={pointsRef} geometry={earthGeometry} material={earthMaterial} />
      <points ref={satellitesRef} geometry={satellitesGeometry} material={satelliteMaterial} />
      
      {/* Add the galactic ring */}
      <GalacticRing />
    </group>
  );
}

export function Globe() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {/* CSS Nebula effects for deep space galactic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15)_0%,rgba(0,0,0,0)_70%)] opacity-60 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,rgba(0,0,0,0)_50%)] opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,rgba(0,0,0,0)_50%)] opacity-50 mix-blend-screen" />

      <div className="w-full h-[120%] absolute opacity-80">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          
          {/* Deep Space Starfield */}
          <Stars radius={100} depth={50} count={7000} factor={4} saturation={1} fade speed={1.5} />
          
          <React.Suspense fallback={null}>
            <EarthParticles />
          </React.Suspense>
        </Canvas>
      </div>
    </div>
  );
}
