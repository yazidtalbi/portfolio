import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_25%] h-screen overflow-hidden">
      {/* LEFT: About */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-between p-8 lg:p-16 bg-white h-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-black uppercase tracking-tighter"
        >
          YAZID TALBI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[30px] leading-[1.2] font-medium text-gray-800 max-w-md"
        >
          Product Designer & Owner with 7+ years in UI/UX, specialized in high-fidelity redesigns.
        </motion.p>
      </motion.div>

      {/* CENTER: Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full overflow-hidden"
      >
        <img
          src="./enhanced.png"
          alt="Yazid Talbi"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* RIGHT: Animated Signature */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col justify-between items-center py-8 lg:py-16 h-full relative overflow-hidden bg-gray-50"
      >
        <img src="./gradient.png" className="absolute inset-0 w-full h-full object-cover z-0" alt="Background Gradient" />

        {/* Signature SVG container - Pushed to top by justify-between */}
        <div
          className="-rotate-[5deg] scale-150 relative z-20 mt-8 top-32"
        >
          <svg
            width="490"
            height="195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="path"
          >
            <mask
              id="a"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="-10"
              y="-10"
              width="500"
              height="193"
            >
              <path
                d="m483 39-8 18-1 15c0 6 14 8 3 22-8 8-26 21-34 16s-4 0-11-9c-15-18 3-46 10-56l30 78-11 8-16 3-24-30-26-63-12 28c-1 4-4 12-12 13-9 1-20 7-25 12-4 5-27 28-34 31l-20 10 59-13 51-1-3-28-13 4-22 7 6-41s-7-11-14 0c-8 10-16 0-16 0l-23-19-4 10-8 23c-2 1-6 4-10 4-4-1-7-2-7-4v-8l5-21-8 26-11 11c-2 1-8 7-10 7l-9 3 12 2c19-5 52-37 53-37s2 29 0 32l-37 15-58-2-6-24c-1-4 6-13 10-15 5-4 8-11 13-11 3 0 0 10-2 14l-14 9-11 3c-3 0-11 0-11-4 0-5 0-28 4-45 3-14 1-21 2-23l21 7-2 12-8 46 25-74-49 1-3 45c0 6-5 29-11 32-6 4-15 5-18 4l-6-4 7-20c-1 4-5 11-6 11s-3 8-5 8l-13 4c-4 1-10 0-11 5 0 5 2 8 2 9 1 1 8 4 2 15-6 8-37 57-98 46-10-2-21-8-33-14-20-9 24 38 162-45h-18l-26 62-40 16"
                stroke="red"
                strokeWidth="18"
              />
            </mask>
            <g mask="url(#a)">
              <path
                d="m116 164-3 6-6 5-6-3-4 3c-2 3-3 4-5 4l-5-2-4-3a231 231 0 0 1 10-10 108 108 0 0 1 7 3l5-4 4-4c5 2 7 3 7 5Zm24-88 4-1h3v13h-3a291 291 0 0 0-10 0l-1 3c0 1 1 2 4 2 2 1 3 3 3 5v2c0 6-5 15-14 26a110 110 0 0 1-78 38c-14 0-27-4-37-11-6-5-9-9-9-12l1-2h1c13 7 29 11 47 11h4a98 98 0 0 0 56-19c14-11 22-20 24-27l-5-2-2-4V87c1-4 4-7 8-10l4-1Zm37 12h-4l-8-2c-4-1-6-2-7-4-4 4-9 6-15 6h-2V75h6l7-1 6-7 5-8 1 1a303 303 0 0 0-4 13c0 2 2 2 5 2h10v13Zm-14 10-3 3-4 2c-3-2-4-5-5-7l8-7 2 4 2 5Zm37-82-2 12-2 17c-1 13-4 24-10 32-4 7-8 11-12 11h-4V75h4c7 0 11-3 14-10l2-19 3-19 6-12 1 1Zm16 72h-4c-5 0-8-2-10-4-2-3-3-6-3-11a249 249 0 0 1 9-61h2c-3 16-5 29-5 41 0 15 2 22 7 22h4v13Zm33-32-2 7c-4 9-8 15-14 19-5 4-13 6-22 6h-1V75h4c3 0 5-4 6-12a1243 1243 0 0 1 5-30 259 259 0 0 1 4-8l1 1v3l-2 4-1 15-2 15 8-9c4-3 7-4 10-4 4 0 6 2 6 6Zm-9 7c0-2-1-3-4-3s-7 4-15 13h1c4 0 8-1 12-4l6-6Zm60 25h-3c-4 0-7-1-9-3-2-1-3-4-4-8l-5 8a568 568 0 0 1-20 8l7-5 11-9c4-4 7-9 9-14a720 720 0 0 1 7-15v1l-1 8-2 7c0 2 0 4 2 6 1 2 3 3 5 3h3v13Zm15-39-4 18c-2 6-5 11-9 16-4 3-6 5-8 5V75h2c3 0 6-1 8-3l1-7 4-9 6-9v2Zm5 44-3 6c-3 2-4 4-6 4l-5-3-3 3-5 3-4-1-4-3a2840 2840 0 0 0 9-9l7 3 4-4 4-4c4 2 6 4 6 5Zm46-30-5 5-6 4-4-5-5-3v-1l11-10c6 4 9 7 9 10Zm11 25h-4l-16 2c-3 2-7 4-10 8a1896 1896 0 0 1-28 26 61 61 0 0 1-24 9l-1-1 4-2 18-11c8-7 15-12 19-17l11-13 13-10c5-3 10-4 14-4h4v13Zm15-39-5 18c-2 6-5 11-9 16-3 3-6 5-8 5V75h2c4 0 6-1 8-3l1-7 4-9 6-9 1 2Zm4 44-3 6-5 4-6-3-3 3-4 3-5-1-3-3a2840 2840 0 0 0 8-9l7 3 4-4 4-4c4 2 6 4 6 5Zm103-63c0 5-2 8-4 9l-10 3-6 6c-4 4-6 7-6 10 0 2 1 3 3 4l6 3c3 2 4 4 4 6 0 9-3 18-10 27-8 14-19 21-31 21-6 0-11-2-15-7s-6-10-6-16l3-22 6-14 6-12 2 1-1 3c-6 13-9 23-9 28 0 8 2 13 6 17s9 6 16 6c5 0 10-2 16-6s10-8 10-12l-6-6c-4-2-6-5-6-7l2-14 7-13 9-11c5-4 8-7 10-7 3 0 4 1 4 3Zm-29 96c0 2-1 4-4 7-2 3-4 4-6 4l-6-3-3 4-5 4-5-2-4-3a365 365 0 0 1 9-11l8 4 4-4 5-5c5 2 7 4 7 5Zm68-116-2 31c0 18-3 32-9 42a19 19 0 0 1-24 8l-3-2 2-1 4-1a91 91 0 0 0 3-32c0-11 2-22 8-32l1 1-2 31-2 17-4 13 6-2 6-5c3-4 5-9 6-17l1-22a63 63 0 0 1 8-30l1 1Zm24 78h-1c-2 0-3 1-5 4-2 9-6 15-9 18l-12 6-10 3-1-1 6-4 12-9c7-6 11-11 11-15l-1-1-9-1-4-4 4-12c3-6 5-9 7-9s4 2 6 4l3 8h3v13Zm30-24-3 6-5 4-7-3c-3 0-5 2-8 6l-5 8c-2 2-4 3-8 3V75h2l8-1 7-7c3-5 6-8 10-10l4-4a53 53 0 0 1 5 11Z"
                fill="#000"
              />
            </g>
          </svg>
        </div>

        {/* Download CV button - Pushed to bottom by justify-between */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-30 mb-8 flex items-center gap-2 px-8 py-3 border-[2.5px] border-black rounded-full bg-transparent text-black font-black text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95 whitespace-nowrap"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          DOWNLOAD CV
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
