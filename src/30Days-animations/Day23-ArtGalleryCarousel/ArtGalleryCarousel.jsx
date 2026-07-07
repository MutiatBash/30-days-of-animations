import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import "./ArtGalleryCarousel.css";

const PALETTE = {
  ink: '#1B1E2B',
  rust: '#B5563C',
  mustard: '#D9A441',
  plum: '#4A2545',
  olive: '#6B7353',
  bone: '#EDE6D6',
};

const PLATES = [
  {
    title: 'Radius',
    medium: 'Ink, repetition',
    bg: `repeating-radial-gradient(circle at 30% 30%, ${PALETTE.bone} 0px, ${PALETTE.bone} 2px, transparent 2px, transparent 14px), ${PALETTE.ink}`,
  },
  {
    title: 'Spiral Notation',
    medium: 'Motion study',
    bg: `conic-gradient(from 90deg at 35% 65%, ${PALETTE.bone} 0deg 30deg, transparent 30deg 90deg, ${PALETTE.bone} 90deg 120deg, transparent 120deg 180deg, ${PALETTE.bone} 180deg 210deg, transparent 210deg 360deg), ${PALETTE.olive}`,
  },
  {
    title: 'Half-Light',
    medium: 'Gradient, two tones',
    bg: `radial-gradient(circle at 72% 28%, ${PALETTE.bone} 0 34px, transparent 35px), linear-gradient(125deg, ${PALETTE.mustard} 0% 50%, ${PALETTE.ink} 50% 100%)`,
  },
  {
    title: 'Three Orbits',
    medium: 'Layered transparency',
    bg: `radial-gradient(circle at 30% 40%, rgba(237,230,214,0.55) 0 60px, transparent 61px), radial-gradient(circle at 55% 55%, rgba(237,230,214,0.4) 0 60px, transparent 61px), radial-gradient(circle at 70% 35%, rgba(237,230,214,0.3) 0 60px, transparent 61px), ${PALETTE.plum}`,
  },
  {
    title: 'Vertical Chance',
    medium: 'Line and interval',
    bg: `repeating-linear-gradient(90deg, ${PALETTE.bone} 0 6px, transparent 6px 26px), ${PALETTE.rust}`,
  },
  {
    title: 'Tidal Line',
    medium: 'Wave, horizon',
    bg: `repeating-linear-gradient(4deg, rgba(237,230,214,0.5) 0 3px, transparent 3px 22px), linear-gradient(180deg, ${PALETTE.ink} 0% 45%, ${PALETTE.olive} 45% 100%)`,
  },
  {
    title: 'Trajectory',
    medium: 'Diagonal motion',
    bg: `repeating-linear-gradient(-38deg, rgba(27,30,43,0.5) 0 2px, transparent 2px 20px), ${PALETTE.bone}`,
  },
  {
    title: 'Folded Corner',
    medium: 'Paper, crease',
    bg: `linear-gradient(135deg, transparent 0 88%, rgba(27,30,43,0.35) 88% 100%), ${PALETTE.mustard}`,
  },
  {
    title: 'Suspended Weights',
    medium: 'Circle, gravity',
    bg: `radial-gradient(circle at 20% 82%, ${PALETTE.bone} 0 20px, transparent 21px), radial-gradient(circle at 50% 82%, ${PALETTE.bone} 0 20px, transparent 21px), radial-gradient(circle at 80% 82%, ${PALETTE.bone} 0 20px, transparent 21px), ${PALETTE.plum}`,
  },
  {
    title: 'Counterpoint',
    medium: 'Grid, negative space',
    bg: `repeating-linear-gradient(0deg, transparent 0 1px, ${PALETTE.bone} 1px 3px, transparent 3px 24px), repeating-linear-gradient(90deg, transparent 0 1px, ${PALETTE.bone} 1px 3px, transparent 3px 24px), ${PALETTE.rust}`,
    bgPosition: '-2px 2px',  
  },
];

const CARD_SIZE = 240;
const CENTER_SCALE = 1.15;
const SIDE_SCALE = 0.82;
const AUTOPLAY_MS = 2000;

const ArtGalleryCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const count = PLATES.length;
  const timerRef = useRef(null);

  const go = useCallback(
    (dir) => setIndex((prev) => (prev + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [go]);

  // Autoplay pauses on hover so it never fights manual browsing.
  const isHoveringRef = useRef(false);

  useEffect(() => {
    isHoveringRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      if (!isHoveringRef.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [isPlaying, go]);

  const restartTimer = () => {
    if (isPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!isHoveringRef.current) go(1);
      }, AUTOPLAY_MS);
    }
  };
  // Shortest circular distance from the selected card, so it always
  // rotates the "short way round" the loop rather than snapping back.
  const getOffset = (i) => {
    let diff = i - index;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  const styleForOffset = (offset) => {
    const abs = Math.abs(offset);
    const dir = Math.sign(offset);

    if (abs === 0) {
      return {
        transform: `translateX(0px) scale(${CENTER_SCALE})`,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
      };
    }
    if (abs === 1) {
      // plate's edge: halfCenter + halfSide - translateX = 0.25 * sideWidth
      const halfCenter = (CARD_SIZE * CENTER_SCALE) / 2;
      const halfSide = (CARD_SIZE * SIDE_SCALE) / 2;
      const translateX = dir * (halfCenter + halfSide * 0.5);
      return {
        transform: `translateX(${translateX}px) scale(${SIDE_SCALE})`,
        zIndex: 20,
        opacity: 1,
        filter: 'brightness(0.55)',
      };
    }
    return {
      transform: `translateX(${dir * (CARD_SIZE * 1.05)}px) scale(0.6)`,
      zIndex: 5,
      opacity: 0,
      filter: 'brightness(0.4)',
      pointerEvents: 'none',
    };
  };

  const current = PLATES[index];

  return (
    <div
      className="w-full min-h-full flex flex-col items-center justify-center gap-10 py-14 px-4 overflow-hidden bg-[#F5F1E8]"
      // style={{ background: `linear-gradient(180deg, #14151f 0%, #0a0b12 100%)` }}
      style={{
        background: "radial-gradient(circle at center, #1f2233 0%, #050608 60%, #000000 100%)"
      }}
      // style={{
      //   background: "radial-gradient(circle at top, #23263a 0%, #0a0b12 70%)"
      // }}
      // style={{ backgroundColor: '#0a0a12' }}
    >
      <div className="text-center">
        <p className="cf-mono text-[11px] tracking-[0.35em] uppercase" style={{ color: PALETTE.olive }}>
          Piece No. {String(index + 1).padStart(2, '0')}
        </p>
        <h2 className="cf-title text-3xl mt-1" style={{ color: PALETTE.bone }}>
          {current.title}
        </h2>
        <p className="cf-mono text-[11px] mt-1 tracking-wide" style={{ color: '#6d7086' }}>
          {current.medium}
        </p>
      </div>

      <div className="relative w-full flex items-center justify-center" style={{ height: CARD_SIZE + 40 }} 
      onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {PLATES.map((plate, i) => {
          const offset = getOffset(i);
          const style = styleForOffset(offset);
          const isClickable = Math.abs(offset) === 1;

          return (
            <button
              key={plate.title}
              onClick={() => {
                if (isClickable) go(offset);
              }}
              className={`cf-card absolute rounded-md shadow-2xl ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
              style={{
                width: CARD_SIZE,
                height: CARD_SIZE,
                background: plate.bg,
                // border: '1px solid rgba(27,30,43,0.08)',
                // boxShadow: '0 4px 16px rgba(27,30,43,0.12)',
                border: '1px solid rgba(237,230,214,0.08)',
                // boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                boxShadow: '0 0 24px rgba(122, 60, 200, 0.15), 0 6px 20px rgba(0,0,0,0.4)',
                backgroundPosition: plate.bgPosition || '0 0',
                ...style,
              }}
              aria-label={plate.title}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-4 w-full max-w-xs">
        <button
          onClick={() => setIsPlaying((p) => !p)}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          style={{ background: '#262838', color: PALETTE.bone }}
          aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        <div className="flex items-center gap-6 flex-1 justify-center">
          <button
            onClick={() => { go(-1); restartTimer(); }}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            style={{ background: '#262838', color: PALETTE.bone }}
            aria-label="Previous"
          >
            <ChevronLeft size={18}/>
          </button>

          <div className="flex gap-1.5">
            {PLATES.map((_, i) => (
              <button
                key={i}
                onClick={() =>{ setIndex(i); restartTimer()}}
                className="h-1.5 rounded-full transition-all cursor-pointer"
                style={{
                  width: i === index ? 20 : 6,
                  background: i === index ? PALETTE.bone : '#3d3f52',
                }}
                aria-label={`Go to plate ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => { go(1); restartTimer(); }}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            style={{ background: '#262838', color: PALETTE.bone }}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="w-9 shrink-0" />
      </div>
    </div>
  );
}
export default ArtGalleryCarousel;