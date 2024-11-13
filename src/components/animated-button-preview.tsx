import React from 'react';

const AnimatedButton = () => {
  return (
    <button 
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))',
        borderRadius: '100px',
        position: 'relative',
        overflow: 'hidden',
        padding: '16px 24px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
      className="hover:scale-105 hover:shadow-lg"
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'visible',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          aspectRatio: 1,
          animation: 'slide 1.5s ease-in-out infinite',
        }}>
          <div style={{
            position: 'absolute',
            inset: '-100%',
            width: 'auto',
            background: 'conic-gradient(from calc(270deg - (90deg * 0.5)), transparent 0, hsl(0 0% 100% / 1) 90deg, transparent 90deg)',
            animation: 'spinLinear 1.5s linear infinite',
          }} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        inset: '0.1em',
        background: 'inherit',
        borderRadius: 'inherit',
      }} />
      <span style={{
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(to bottom, white 30%, rgba(255, 255, 255, 0.7))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}>
        Get Started
      </span>
      <style jsx>{`
        @keyframes slide {
          to { transform: translate(100%, 0); }
        }
        @keyframes spinLinear {
          to { transform: rotate(1turn); }
        }
        button:hover {
          box-shadow: 0 0 40px 8px rgba(62, 61, 117, 0.7);
        }
      `}</style>
    </button>
  );
};

export default AnimatedButton;
