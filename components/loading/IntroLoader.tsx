// First-visit intro animation. Pure CSS (works before and without JavaScript) and short: it
// plays over already-rendered content and is gone in under a second, so it never delays the page.
// The inline script hides it for the rest of the session and for reduced-motion users.
const skipScript = `try{var d=document.documentElement;if(sessionStorage.getItem("oryen-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="seen"}else{sessionStorage.setItem("oryen-intro","1")}}catch(e){document.documentElement.dataset.intro="seen"}`;

export function IntroLoader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: skipScript }} />
      <div className="intro-loader" aria-hidden="true">
        <div className="intro-loader-inner">
          <div className="intro-loader-mark">
            <svg viewBox="0 0 64 64" className="h-16 w-16">
              <defs>
                <linearGradient id="intro-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="55%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
              <circle className="intro-loader-ring" cx="32" cy="32" r="26" fill="none" stroke="url(#intro-gradient)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="32" cy="32" r="9" fill="url(#intro-gradient)" className="intro-loader-core" />
            </svg>
          </div>
          <p className="intro-loader-word">
            Oryen<span>Solutions</span>
          </p>
          <div className="intro-loader-bar">
            <span />
          </div>
        </div>
      </div>
    </>
  );
}
