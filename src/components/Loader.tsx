import React from 'react';

interface LoaderProps {
  message?: string;
  fullscreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ message = 'Loading…', fullscreen = true }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={
        `${fullscreen ? 'fixed inset-0' : 'w-full h-full'} z-[60] grid place-items-center bg-white/90 backdrop-blur-sm`
      }
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 rounded-full border-4 border-orange-200" />
          {/* Animated arc */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-600 animate-spin" />
          {/* Logo */}
          <img
            src="/banner/vss-logo-removebg.png"
            alt="VSS"
            className="absolute inset-0 m-auto w-8 h-8 object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
        <p className="mt-4 text-sm font-medium text-gray-700">{message}</p>
        {/* Progress shimmer */}
        <div className="mt-3 w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-orange-600 rounded-full animate-[loaderSlide_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loaderSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
