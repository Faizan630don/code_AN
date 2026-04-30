import { useState, useEffect, useRef } from "react";

export default function ShilpiWebsite() {
  const [clicked, setClicked] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const [showMessage, setShowMessage] = useState(0);
  
  const hearts = Array.from({ length: 25 });
  const reasons = [
    "The way your eyes sparkle when you laugh.",
    "Your kindness that touches everyone around you.",
    "The peaceful feeling I get just being near you.",
    "Your strength and the way you handle everything with grace.",
    "The way you make the most ordinary moments feel magical."
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set to a pleasant volume
    }
  }, []);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setHasInteracted(true);
  };

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 flex items-center justify-center p-6 overflow-hidden relative font-['Outfit',_sans-serif]"
      onClick={() => { if (!hasInteracted) startMusic(); }}
    >
      {/* Native HTML5 Audio Player */}
      <audio 
        ref={audioRef} 
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/db/47/e0db47b0-7f70-0631-0414-cd4777d2fb3e/mzaf_6362891154838442638.plus.aac.p.m4a" 
        loop 
        preload="auto"
      />

      {/* Floating Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl border border-rose-200 hover:scale-110 transition-all group"
        title={isMusicPlaying ? "Pause Music" : "Play Music"}
      >
        <div className="relative">
          {isMusicPlaying && (
            <span className="absolute -top-2 -right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          )}
          {isMusicPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          )}
        </div>
      </button>

      {/* Floating Hearts Animation */}
      {hearts.map((_, i) => (
        <div
          key={i}
          className="absolute text-rose-400/40 pointer-events-none animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 20}s`,
            animationDelay: `${-Math.random() * 20}s`,
            fontSize: `${15 + Math.random() * 30}px`,
            opacity: 0.3 + Math.random() * 0.4
          }}
        >
          ❤️
        </div>
      ))}

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white_0%,transparent_40%),radial-gradient(circle_at_80%_30%,white_0%,transparent_35%),radial-gradient(circle_at_50%_50%,#ffe4e6_0%,transparent_50%)]"></div>

      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_-15px_rgba(225,29,72,0.2)] p-12 text-center border border-white/50 relative z-10 mx-4">
        <div className="inline-block px-6 py-2 bg-rose-50 text-rose-500 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-rose-100 animate-pulse">
          To My Dearest Shilpi
        </div>
        
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-500 mb-6 tracking-tight">
          Every Moment With You ❤️
        </h1>
        
        <p className="text-2xl text-rose-400 font-light italic mb-10 max-w-2xl mx-auto leading-relaxed">
          "If I had a flower for every time I thought of you, I could walk through my garden forever."
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-rose-50 to-white rounded-3xl p-8 border border-rose-100 text-left shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-rose-600 mb-4 flex items-center gap-2">
              <span>Why You?</span>
              <span className="text-xl">✨</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              It’s not just one thing. It’s the way you make me feel like I’m home, even when we’re miles apart. Your energy is contagious, and your heart is the most beautiful thing I've ever known.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 border border-pink-100 text-left shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
              <span>Our Future</span>
              <span className="text-xl">🌅</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I dream of the days when we don't have to say goodbye. When we can watch the sunset together and know that tomorrow belongs to us too. I can't wait for every "proper" meeting we'll have.
            </p>
          </div>
        </div>

        <div className="bg-rose-600/5 rounded-3xl p-10 mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-rose-600">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-rose-700 mb-6">A Promise to You 🥀</h2>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            "Can I go where you go? Can we always be this close?"<br/>
            I want to be your favorite place to go when you've had a bad day, and the person you celebrate with on your best ones. You're my, my, my, my... lover.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setClicked(true);
              setTimeout(() => setClicked(false), 600);
              setShowMessage((prev) => (prev + 1) % reasons.length);
              if (!hasInteracted) startMusic();
            }}
            className={`px-12 py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xl font-bold transition-all shadow-[0_10px_30px_-5px_rgba(244,63,94,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.5)] hover:scale-105 active:scale-95 flex items-center gap-3 ${clicked ? 'scale-110' : ''}`}
          >
            <span>{clicked ? '❤️ Sent with Love' : 'Click for a Secret Reason'}</span>
            <span className="text-2xl animate-bounce">💌</span>
          </button>
        </div>

        {hasInteracted && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-sm border border-rose-50">
            <p className="text-rose-500 font-medium text-lg italic">
              "{reasons[showMessage]}"
            </p>
          </div>
        )}

        <div className="mt-12 pt-10 border-t border-rose-100">
          <details className="inline-block cursor-pointer group">
            <summary className="text-rose-400 hover:text-rose-600 font-medium transition-colors list-none flex items-center justify-center gap-2">
              <span className="group-open:rotate-180 transition-transform">▼</span>
              <span>Our Secret Archive 🔒</span>
            </summary>
            <div className="mt-6 bg-rose-50/50 backdrop-blur-sm rounded-3xl p-8 text-left border border-rose-100 shadow-inner">
              <h3 className="text-2xl font-bold text-rose-600 mb-4">The Terrace Incident (A Classic) 🍅</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                I still remember the way you described that Diwali night. The broken tap, the flood on the terrace, and your face turning that adorable shade of crimson when your mom walked in. Honestly, it’s stories like that that made me realize how real and wonderful you are. 
                <br /><br />
                You’re perfectly chaotic, and I wouldn’t want you any other way.
              </p>
            </div>
          </details>
        </div>

        <p className="mt-12 text-rose-300 font-light text-lg">— Forever Yours</p>
      </div>

      {!hasInteracted && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-md transition-all">
          <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md border border-rose-100 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl animate-pulse">💝</span>
            </div>
            <h2 className="text-3xl font-black text-rose-600 mb-4 tracking-tight">Open Your Heart</h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              I’ve prepared something special for you. Click below to enter and play the music.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                startMusic();
              }}
              className="w-full py-4 bg-rose-500 text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-rose-600 transition-colors"
            >
              Enter with Music ✨
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
