
import { useState } from "react";
import { FaGift, FaStar, FaTimes } from "react-icons/fa";
import greetings from "../data/greeting";

function GiftBox({ formData, onClose }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const greeting = greetings[formData.relation];

  if (!greeting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#120808] px-4 text-white">
        Greeting not found!
      </div>
    );
  }

  const handleOpen = () => {
    if (!isOpening && !isOpened) {
      setIsOpening(true);
    }
  };

  const handleLidAnimationEnd = () => {
    setIsOpened(true);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#120808] px-4 py-10 text-white">

      {/* Background Decorations */}
      <div className="absolute left-5 top-10 text-amber-400/30 animate-pulse">
        <FaStar size={20} />
      </div>

      <div className="absolute right-8 top-24 text-amber-400/30 animate-pulse">
        <FaStar size={15} />
      </div>

      <div className="absolute bottom-16 left-10 text-amber-400/30 animate-pulse">
        <FaStar size={16} />
      </div>

      <div className="w-full max-w-lg text-center">

        {!isOpened ? (
          <>
            <p className="text-sm font-medium tracking-[4px] text-amber-300">
              A SPECIAL SURPRISE
            </p>

            <h1 className="mt-4 text-3xl font-bold text-amber-400 sm:text-4xl">
              Something Special For You!
            </h1>

            <p className="mt-4 text-sm text-white/60 sm:text-base">
              A little gift filled with lots of love and happiness.
            </p>

            {/* Animated Gift Box */}
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="group mx-auto mt-12 flex flex-col items-center disabled:cursor-default"
            >
              <div className={`gift-box-scene relative h-60 w-64 ${isOpening ? "gift-box-bounce" : "group-hover:scale-105"} transition-transform duration-300`}>

                {/* Sparkles */}
                {isOpening && (
                  <>
                    <span className="gift-sparkle left-2 top-10">✨</span>
                    <span className="gift-sparkle right-2 top-16">✨</span>
                    <span className="gift-sparkle left-8 bottom-10">⭐</span>
                    <span className="gift-sparkle right-8 bottom-8">✨</span>
                  </>
                )}

                {/* Gift Body */}
                <div className="absolute bottom-5 left-1/2 flex h-36 w-48 -translate-x-1/2 items-center justify-center overflow-hidden rounded-b-xl border-x-4 border-b-4 border-red-950 bg-red-600 shadow-2xl sm:w-52">

                  <div className="absolute h-full w-8 bg-amber-400" />

                  <FaGift className="relative z-10 text-5xl text-white drop-shadow-lg sm:text-6xl" />
                </div>

                {/* Gift Lid */}
                <div
                  onAnimationEnd={handleLidAnimationEnd}
                  className={`absolute left-1/2 top-10 z-20 flex h-12 w-52 -translate-x-1/2 items-center justify-center rounded-t-xl border-b-4 border-red-950 bg-red-500 shadow-lg ${
                    isOpening ? "gift-lid-open" : ""
                  }`}
                >
                  <div className="h-full w-8 bg-amber-400" />

                  {/* Bow */}
                  <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 items-center">
                    <div className="h-7 w-10 rotate-[-25deg] rounded-full border-4 border-amber-300 bg-amber-400" />
                    <div className="h-7 w-10 rotate-[25deg] rounded-full border-4 border-amber-300 bg-amber-400" />
                  </div>
                </div>

              </div>

              <span className="mt-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-8 py-3 font-bold text-[#241313] shadow-lg shadow-amber-500/20 transition group-hover:shadow-amber-400/40">
                {isOpening ? "Opening Your Gift..." : "Open Your Gift 🎁"}
              </span>
            </button>

            <p className="mt-8 text-xs text-white/40">
              Made with love, just for you ❤️
            </p>
          </>
        ) : (
          /* Greeting Card */
          <div className="greeting-reveal relative rounded-3xl border border-amber-400/20 bg-white/[0.06] p-6 pt-14 shadow-2xl sm:p-10 sm:pt-14">

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close greeting card"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/20 bg-white/10 text-white/70 transition hover:bg-red-500 hover:text-white"
            >
              <FaTimes size={15} />
            </button>

            <div className="mb-6 text-6xl sm:text-7xl">
              {greeting.emoji}
            </div>

            <h1 className="text-2xl font-bold leading-tight text-amber-400 sm:text-4xl">
              {greeting.title(formData.nickname)}
            </h1>

            <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              {greeting.message(formData.name)}
            </p>

            <div className="mt-8 border-t border-amber-400/20 pt-6">
              <p className="text-xs text-white/50">
                A special Diwali wish from
              </p>

              <h2 className="mt-2 text-lg font-semibold text-amber-400 sm:text-xl">
                Dipanshu Gurjar ❤️
              </h2>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}

export default GiftBox;
