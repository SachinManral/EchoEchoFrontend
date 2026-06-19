export const template = `
<main class="landing-page">
  <nav class="site-nav" id="site-nav">
    <div class="nav-shell">
      <div class="nav-left">
        <a class="brand" href="/" aria-label="Echo Echo home">
          <span class="brand-mark">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </span>
          <span>Echo Echo</span>
        </a>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div class="nav-actions">
        <a class="login-link" href="/login">Log in</a>
        <a class="nav-cta" href="/login?mode=signup">Start Creating</a>
        <button class="menu-button" id="menu-button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="/login">Log in</a>
    </div>
  </nav>

  <section class="hero" id="home">
    <div class="hero-glow glow-one"></div>
    <div class="hero-glow glow-two"></div>
    <div class="hero-copy" id="hero-copy">
      <div class="announcement liquid-glass reveal-item">
        <span class="announcement-badge">New</span>
        <span>Copyright-free music, composed with AI</span>
        <span class="announcement-pulse"></span>
      </div>
      <h1 class="reveal-item">
        From your imagination<br>
        to a beautiful <em>melody.</em>
      </h1>
      <p class="hero-subtitle reveal-item">
        Turn a mood, prompt, or passing idea into an original track.<br>
        Built for videos, streams, podcasts, games, and everything between.
      </p>
      <div class="hero-actions reveal-item">
        <button class="primary-cta" data-cta>Get Started for Free <span>↗</span></button>
        <a class="secondary-cta" href="#studio"><span class="play-mini">▶</span> See how it works</a>
      </div>
      <div class="hero-note reveal-item">
        <span>5 free tracks every month</span>
        <i></i>
        <span>No credit card required</span>
      </div>
    </div>

    <div class="hero-stage reveal-item" id="hero-stage">
      <div class="stage-aurora"></div>
      <div class="studio-window">
        <div class="studio-topbar">
          <div class="window-dots"><i></i><i></i><i></i></div>
          <div class="studio-project"><span class="status-dot"></span> Untitled session</div>
          <div class="topbar-meta">Saved just now</div>
        </div>
        <div class="studio-body">
          <aside class="studio-sidebar">
            <div class="sidebar-brand"><span class="brand-mark small">♫</span></div>
            <button class="side-icon active" aria-label="Create">✦</button>
            <button class="side-icon" aria-label="Library">♫</button>
            <button class="side-icon" aria-label="Favorites">♡</button>
            <span class="side-spacer"></span>
            <button class="side-icon avatar-icon" aria-label="Profile">SK</button>
          </aside>
          <div class="studio-main">
            <div class="studio-heading">
              <div>
                <span class="eyebrow">AI COMPOSER</span>
                <h2>What do you want to hear?</h2>
              </div>
              <span class="credits-pill">✦ 5 generations left</span>
            </div>
            <div class="prompt-card liquid-glass">
              <div class="prompt-label"><span>✦</span> Describe your sound</div>
              <p>A warm late-night track with dusty drums, soft piano, and the feeling of rain against a studio window.</p>
              <div class="prompt-bottom">
                <div class="prompt-controls">
                  <span>Lo-fi hip hop</span><span>90 BPM</span><span>Instrumental</span>
                </div>
                <button class="generate-button"><span>✦</span> Generate</button>
              </div>
            </div>
            <div class="mixer-row">
              <div class="track-card active-track">
                <div class="track-cover cover-rain"><span>♫</span></div>
                <div class="track-content">
                  <div class="track-title-row">
                    <div><b>Midnight Rain</b><small>Generated in 28 seconds</small></div>
                    <span class="track-duration">03:12</span>
                  </div>
                  <div class="waveform" id="hero-waveform" aria-label="Audio waveform"></div>
                  <div class="player-row">
                    <button class="player-button" id="hero-play" aria-label="Play track">▶</button>
                    <span id="hero-time">00:00</span>
                    <div class="progress"><i id="hero-progress"></i></div>
                    <span>03:12</span>
                    <button class="icon-button" aria-label="Download">⇩</button>
                  </div>
                </div>
              </div>
              <div class="mixer-panel">
                <div class="mixer-head"><span>Studio mix</span><small>LIVE</small></div>
                <div class="sliders">
                  <div><i style="--level:72%"></i><span>DRUMS</span></div>
                  <div><i style="--level:48%"></i><span>BASS</span></div>
                  <div><i style="--level:84%"></i><span>PIANO</span></div>
                  <div><i style="--level:61%"></i><span>FX</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floating-chip chip-left liquid-glass"><span class="chip-icon">♫</span><div><b>20+ genres</b><small>One creative engine</small></div></div>
      <div class="floating-chip chip-right liquid-glass"><span class="equalizer-mini"><i></i><i></i><i></i><i></i></span><div><b>Studio quality</b><small>MP3 & WAV export</small></div></div>
    </div>
    <div class="hero-fade"></div>
  </section>

  <section class="trust-strip">
    <p>MADE FOR EVERY KIND OF CREATOR</p>
    <div class="creator-marquee">
      <div class="creator-types">
        <span>Filmmakers</span><i>✦</i><span>Podcasters</span><i>✦</i><span>Streamers</span><i>✦</i><span>Game makers</span><i>✦</i><span>Artists</span><i>✦</i>
        <span>Filmmakers</span><i>✦</i><span>Podcasters</span><i>✦</i><span>Streamers</span><i>✦</i><span>Game makers</span><i>✦</i><span>Artists</span><i>✦</i>
      </div>
    </div>
  </section>

  <section class="testimonial section-shell" id="testimonial">
    <div class="quote-mark">“</div>
    <blockquote id="quote-text">Echo Echo changed the way we score our stories. We can move from a feeling to a full original track in seconds, with the right tempo, texture, and energy every time.</blockquote>
    <div class="author-row">
      <div class="author-avatar">AM</div>
      <div><b>Alex Morgan</b><span>Filmmaker & Music Producer</span></div>
      <div class="author-track">
        <button aria-label="Play Alex's track">▶</button>
        <div><b>Afterglow</b><span>Made with Echo Echo · 02:48</span></div>
        <div class="tiny-wave" id="tiny-wave"></div>
      </div>
    </div>
  </section>

  <section class="features section-shell" id="features">
    <div class="section-intro animate-in">
      <span class="section-kicker">THE MUSIC ENGINE</span>
      <h2>Everything between an idea<br>and its <em>sound.</em></h2>
      <p>Shape every detail or let the AI surprise you. Either way, the track is yours.</p>
    </div>
    <div class="feature-grid">
      <article class="feature-card feature-large animate-in">
        <div class="card-copy">
          <span class="card-number">01</span>
          <h3>Describe a feeling.<br>Hear it come alive.</h3>
          <p>Use plain language to guide mood, energy, texture, and story. No music theory required.</p>
        </div>
        <div class="prompt-demo liquid-glass">
          <span>✦</span>
          <p>"Nostalgic summer evening, warm synths, soft drums..."</p>
          <i></i>
        </div>
      </article>
      <article class="feature-card animate-in">
        <span class="card-number">02</span>
        <h3>Fine-tune the vibe</h3>
        <p>Control the character of your track with creator-friendly parameters.</p>
        <div class="genre-pills">
          <span class="selected">Lo-fi</span><span>Ambient</span><span>Cinematic</span><span>Indie</span><span>Jazz</span><span>Electronic</span>
        </div>
        <div class="tempo-control">
          <div><span>Tempo</span><b>94 BPM</b></div>
          <div class="tempo-line"><i></i><b></b></div>
          <div class="tempo-labels"><span>Slow</span><span>Fast</span></div>
        </div>
      </article>
      <article class="feature-card animate-in">
        <span class="card-number">03</span>
        <h3>Every track, truly yours</h3>
        <p>Original, copyright-free compositions ready for personal and commercial work.</p>
        <div class="rights-disc">
          <div class="disc-rings"><i></i><i></i><i></i><span>100%</span></div>
          <div><b>Royalty free</b><span>Use it anywhere</span></div>
        </div>
      </article>
      <article class="feature-card feature-wide animate-in">
        <div class="card-copy">
          <span class="card-number">04</span>
          <h3>Your soundtrack library,<br>always in reach.</h3>
          <p>Save versions, revisit generations, and export studio-quality audio whenever inspiration calls.</p>
        </div>
        <div class="library-list">
          <div class="library-track playing"><button>❚❚</button><div><b>Midnight Rain</b><span>Lo-fi · 90 BPM</span></div><div class="library-wave" id="library-wave"></div><span>03:12</span></div>
          <div class="library-track"><button>▶</button><div><b>Summer Haze</b><span>Indie pop · 118 BPM</span></div><span class="tag">WAV</span><span>02:47</span></div>
          <div class="library-track"><button>▶</button><div><b>Neon Memory</b><span>Synthwave · 110 BPM</span></div><span class="tag">MP3</span><span>04:01</span></div>
        </div>
      </article>
    </div>
  </section>

  <section class="studio-section" id="studio">
    <div class="section-shell">
      <div class="section-intro animate-in">
        <span class="section-kicker">YOUR CREATIVE STUDIO</span>
        <h2>Compose without<br>breaking your <em>flow.</em></h2>
        <p>From first prompt to final export, every control stays out of your way.</p>
      </div>
      <div class="studio-tabs animate-in">
        <button class="active" data-studio-tab="compose">Compose</button>
        <button data-studio-tab="arrange">Arrange</button>
        <button data-studio-tab="export">Export</button>
      </div>
      <div class="studio-preview animate-in">
        <div class="preview-copy">
          <span id="preview-step">01 / COMPOSE</span>
          <h3 id="preview-title">Start with words,<br>not waveforms.</h3>
          <p id="preview-description">Tell Echo Echo what you feel. The engine translates emotion and intent into a complete musical direction.</p>
          <div class="preview-stats" id="preview-stats"><span><b>28 sec</b> average generation</span><span><b>20+</b> music genres</span></div>
        </div>
        <div class="preview-visual">
          <div class="orb" id="preview-orb"><span>✦</span></div>
          <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
          <div class="sound-label label-one">Dreamy</div>
          <div class="sound-label label-two">92 BPM</div>
          <div class="sound-label label-three">Warm piano</div>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing section-shell" id="pricing">
    <div class="section-intro animate-in">
      <span class="section-kicker">SIMPLE PRICING</span>
      <h2>Make more music.<br>Pay less for <em>noise.</em></h2>
      <p>Start free, then unlock unlimited creation when the ideas keep coming.</p>
    </div>
    <div class="billing-toggle animate-in">
      <button data-billing="monthly">Monthly</button>
      <button class="active" data-billing="yearly">Yearly <span>Save 50%</span></button>
    </div>
    <div class="pricing-card animate-in">
      <div class="pricing-top">
        <div><span>PRO CREATOR</span><h3>Everything you need<br>to stay in the flow.</h3></div>
        <div class="price"><b id="price-value">$4.99</b><span>/ month<br>billed yearly</span></div>
      </div>
      <div class="pricing-bottom">
        <div class="feature-list">
          <span>✦ Unlimited track generations</span>
          <span>✦ Studio-quality MP3 & WAV</span>
          <span>✦ Full commercial usage rights</span>
          <span>✦ Priority generation queue</span>
        </div>
        <button class="primary-cta pricing-button" data-cta>Start Creating Free <span>↗</span></button>
      </div>
    </div>
  </section>

  <section class="faq section-shell" id="faq">
    <div class="faq-heading animate-in">
      <span class="section-kicker">QUESTIONS, ANSWERED</span>
      <h2>A little clarity<br>before you <em>create.</em></h2>
    </div>
    <div class="faq-list animate-in">
      <article class="faq-item open">
        <button><span>How does Echo Echo generate music?</span><i>+</i></button>
        <div class="faq-answer"><p>You choose a mood, genre, tempo, instruments, and an optional prompt. Echo Echo turns those choices into an original composition, usually in under 30 seconds.</p></div>
      </article>
      <article class="faq-item">
        <button><span>Are the tracks copyright-free?</span><i>+</i></button>
        <div class="faq-answer"><p>Yes. Tracks are created for your use in videos, streams, podcasts, games, and commercial creative work according to your plan.</p></div>
      </article>
      <article class="faq-item">
        <button><span>Do I need to know music theory?</span><i>+</i></button>
        <div class="faq-answer"><p>Not at all. Describe what you want in everyday language, or use the guided controls to shape mood, pace, and instrumentation.</p></div>
      </article>
      <article class="faq-item">
        <button><span>Which audio formats can I export?</span><i>+</i></button>
        <div class="faq-answer"><p>Download finished tracks as MP3 for everyday use or WAV when you need full-quality audio for editing and production.</p></div>
      </article>
      <article class="faq-item">
        <button><span>Can I try Echo Echo for free?</span><i>+</i></button>
        <div class="faq-answer"><p>Yes. The free plan includes five track generations every month, and you do not need a credit card to begin.</p></div>
      </article>
    </div>
  </section>

  <section class="final-cta">
    <div class="final-glow"></div>
    <div class="final-wave" id="final-wave"></div>
    <div class="final-copy animate-in">
      <span class="section-kicker">YOUR NEXT TRACK IS WAITING</span>
      <h2>What will you<br>make <em>sound like?</em></h2>
      <p>Bring the feeling. Echo Echo will find the music.</p>
      <button class="primary-cta" data-cta>Generate Your First Track <span>↗</span></button>
    </div>
  </section>

  <footer>
    <div class="footer-brand">
      <a class="brand" href="/"><span class="brand-mark">♫</span><span>Echo Echo</span></a>
      <p>Original music, made from imagination.</p>
    </div>
    <div class="footer-links">
      <div><b>Product</b><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div>
      <div><b>Company</b><a href="#">About</a><a href="#">Terms</a><a href="#">Privacy</a></div>
      <div><b>Follow</b><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">X / Twitter</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Echo Echo</span><span>Made for people who hear things differently.</span></div>
  </footer>
</main>
`;
