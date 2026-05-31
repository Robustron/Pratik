'use client';
import dynamic from 'next/dynamic';

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), { ssr: false });

export function VideoBackground({ url, opacity = 0.6 }: { url: string; opacity?: number }) {
  // Extract the playback ID from the Mux URL
  // e.g. https://stream.mux.com/PLAYBACK_ID.m3u8 -> PLAYBACK_ID
  const playbackId = url.split('.mux.com/')[1]?.split('.m3u8')[0] || '';

  if (!playbackId) return null;

  return (
    <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none overflow-hidden bg-slate-950">
      <MuxPlayer
        playbackId={playbackId}
        autoPlay="muted"
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'scale(1.2)',
          opacity,
          '--media-object-fit': 'cover',
          '--media-object-position': 'center',
        } as React.CSSProperties}
      />
    </div>
  );
}
