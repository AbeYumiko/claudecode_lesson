// ========================================
// かんじだいすき - App Logic
// ========================================

(function () {
  'use strict';

  // --- Stroke colors (pastel, matching reference app quality) ---
  const STROKE_COLORS = [
    '#6fa8c7',  // blue
    '#b090c8',  // purple
    '#d89aaa',  // pink
    '#7db89a',  // green
    '#c8a870',  // amber
    '#7aaac0',  // sky blue
    '#c08888',  // salmon
    '#88b8a0',  // teal
    '#b0a0d0',  // light purple
    '#d0a888',  // peach
    '#80a8c8',  // steel blue
    '#a8c098',  // sage
  ];

  // --- State ---
  let state = {
    currentKanji: null,
    currentIndex: -1,
    currentCategory: 'all',
    mastered: {},   // { char: true }
    stickers: {},   // { char: stickerId }
    animating: false
  };

  // --- DOM refs ---
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const homeView = $('#home-view');
  const detailView = $('#detail-view');
  const kanjiGrid = $('#kanji-grid');
  const progressFill = $('#progress-fill');
  const progressText = $('#progress-text');
  const kanjiBig = $('#kanji-big');
  const strokeSvg = $('#stroke-svg');
  const strokeCount = $('#stroke-count');
  const playBtn = $('#play-btn');
  const onYomi = $('#on-yomi');
  const kunYomi = $('#kun-yomi');
  const examplesList = $('#examples-list');
  const masteredBtn = $('#mastered-btn');
  const detailSticker = $('#detail-sticker');
  const backBtn = $('#back-btn');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const stickerModal = $('#sticker-modal');
  const stickerGrid = $('#sticker-grid');
  const modalClose = $('#modal-close');
  const strokeCounter = $('#stroke-counter');
  const confettiCanvas = $('#confetti-canvas');
  const confettiCtx = confettiCanvas.getContext('2d');

  // --- LocalStorage ---
  function loadState() {
    try {
      const saved = localStorage.getItem('kanjiDaisuki');
      if (saved) {
        const parsed = JSON.parse(saved);
        state.mastered = parsed.mastered || {};
        state.stickers = parsed.stickers || {};
      }
    } catch (e) { /* ignore */ }
  }

  function saveState() {
    try {
      localStorage.setItem('kanjiDaisuki', JSON.stringify({
        mastered: state.mastered,
        stickers: state.stickers
      }));
    } catch (e) { /* ignore */ }
  }

  // --- Filtered kanji list ---
  function getFilteredKanji() {
    if (state.currentCategory === 'all') return KANJI_DATA;
    return KANJI_DATA.filter(k => k.category === state.currentCategory);
  }

  // --- Progress ---
  function updateProgress() {
    const total = KANJI_DATA.length;
    const done = Object.keys(state.mastered).length;
    const pct = Math.round((done / total) * 100);
    progressFill.style.width = pct + '%';
    progressText.textContent = 'おぼえた: ' + done + ' / ' + total;
  }

  // --- Render Home Grid ---
  function renderGrid() {
    const list = getFilteredKanji();
    kanjiGrid.innerHTML = '';

    list.forEach((kanji, i) => {
      const card = document.createElement('div');
      card.className = 'kanji-card' + (state.mastered[kanji.char] ? ' mastered' : '');
      card.style.animationDelay = (i * 0.03) + 's';

      // Kanji character
      const charEl = document.createElement('div');
      charEl.className = 'kanji-char';
      charEl.textContent = kanji.char;
      card.appendChild(charEl);

      // Reading hint (use displayReading if set, otherwise kunYomi or onYomi)
      const readEl = document.createElement('div');
      readEl.className = 'kanji-reading';
      readEl.textContent = kanji.displayReading
        ? kanji.displayReading
        : (kanji.kunYomi.length > 0
          ? kanji.kunYomi[0].replace('-', '')
          : kanji.onYomi[0]);
      card.appendChild(readEl);

      // Sticker
      if (state.stickers[kanji.char]) {
        const sticker = STICKERS.find(s => s.id === state.stickers[kanji.char]);
        if (sticker) {
          const stickerEl = document.createElement('div');
          stickerEl.className = 'card-sticker ' + sticker.cssClass;
          stickerEl.textContent = sticker.emoji;
          card.appendChild(stickerEl);
        }
      }

      card.addEventListener('click', () => {
        const idx = KANJI_DATA.indexOf(kanji);
        showDetail(idx);
      });

      kanjiGrid.appendChild(card);
    });

    updateProgress();
  }

  // --- Detail View ---
  function showDetail(index) {
    state.currentIndex = index;
    state.currentKanji = KANJI_DATA[index];
    const kanji = state.currentKanji;

    homeView.classList.add('hidden');
    $('#category-tabs').classList.add('hidden');
    detailView.classList.remove('hidden');

    // Kanji display
    kanjiBig.textContent = kanji.char;
    strokeCount.textContent = kanji.strokeCount + 'かく';

    // Reset SVG
    strokeSvg.innerHTML = '';

    // Readings
    onYomi.textContent = kanji.onYomi.join('・') || '—';
    kunYomi.textContent = kanji.kunYomi.map(r => r.replace('-', '')).join('・') || '—';

    // Examples with ruby (furigana)
    examplesList.innerHTML = '';
    kanji.examples.forEach(ex => {
      const item = document.createElement('div');
      item.className = 'example-item';

      const wordEl = document.createElement('div');
      wordEl.className = 'example-word';
      wordEl.innerHTML = buildRuby(ex.word, ex.reading);
      item.appendChild(wordEl);

      const meaningEl = document.createElement('div');
      meaningEl.className = 'example-meaning';
      meaningEl.textContent = ex.reading;
      item.appendChild(meaningEl);

      examplesList.appendChild(item);
    });

    // Mastered button state
    if (state.mastered[kanji.char]) {
      masteredBtn.textContent = 'できたね!';
      masteredBtn.classList.add('already-mastered');
    } else {
      masteredBtn.textContent = 'おぼえた!';
      masteredBtn.classList.remove('already-mastered');
    }

    // Detail sticker
    if (state.stickers[kanji.char]) {
      const sticker = STICKERS.find(s => s.id === state.stickers[kanji.char]);
      if (sticker) {
        detailSticker.textContent = sticker.emoji;
        detailSticker.className = 'sticker-display ' + sticker.cssClass;
        detailSticker.style.display = 'flex';
      }
    } else {
      detailSticker.style.display = 'none';
    }

    // Prev/Next
    prevBtn.style.visibility = index > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility = index < KANJI_DATA.length - 1 ? 'visible' : 'hidden';

    // Play button & counter reset
    playBtn.textContent = 'かきじゅんを みる';
    playBtn.classList.remove('playing');
    state.animating = false;
    kanjiBig.style.opacity = '';
    strokeCounter.classList.remove('visible');
    strokeCounter.textContent = '';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function hideDetail() {
    detailView.classList.add('hidden');
    homeView.classList.remove('hidden');
    $('#category-tabs').classList.remove('hidden');
    state.currentKanji = null;
    state.animating = false;
    renderGrid();
  }

  // --- Ruby (Furigana) builder ---
  function buildRuby(word, reading) {
    // Simple approach: wrap entire word in ruby
    return '<ruby>' + escapeHtml(word) + '<rt>' + escapeHtml(reading) + '</rt></ruby>';
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // --- Stroke Animation ---
  async function animateStrokes() {
    if (state.animating || !state.currentKanji) return;
    state.animating = true;
    playBtn.textContent = 'かいているよ...';
    playBtn.classList.add('playing');

    const kanji = state.currentKanji;
    strokeSvg.innerHTML = '';

    // Fade the background kanji character
    kanjiBig.style.transition = 'opacity 0.3s';
    kanjiBig.style.opacity = '0.08';

    // Show stroke counter
    strokeCounter.classList.add('visible');
    strokeCounter.textContent = '0';

    // Draw SVG guidelines (cross dashed lines)
    const svgNS = 'http://www.w3.org/2000/svg';
    const guideV = document.createElementNS(svgNS, 'line');
    guideV.setAttribute('x1', '50'); guideV.setAttribute('y1', '2');
    guideV.setAttribute('x2', '50'); guideV.setAttribute('y2', '98');
    guideV.setAttribute('stroke', '#ddd5e5');
    guideV.setAttribute('stroke-width', '0.6');
    guideV.setAttribute('stroke-dasharray', '3,3');
    strokeSvg.appendChild(guideV);

    const guideH = document.createElementNS(svgNS, 'line');
    guideH.setAttribute('x1', '2'); guideH.setAttribute('y1', '50');
    guideH.setAttribute('x2', '98'); guideH.setAttribute('y2', '50');
    guideH.setAttribute('stroke', '#ddd5e5');
    guideH.setAttribute('stroke-width', '0.6');
    guideH.setAttribute('stroke-dasharray', '3,3');
    strokeSvg.appendChild(guideH);

    // Draw light guide strokes (background)
    kanji.strokes.forEach(d => {
      const guide = document.createElementNS(svgNS, 'path');
      guide.setAttribute('d', d);
      guide.setAttribute('stroke', '#ede8f2');
      guide.setAttribute('stroke-width', '8');
      guide.setAttribute('fill', 'none');
      guide.setAttribute('stroke-linecap', 'round');
      guide.setAttribute('stroke-linejoin', 'round');
      strokeSvg.appendChild(guide);
    });

    // Create brush tip group (circle + glow)
    const brushGroup = document.createElementNS(svgNS, 'g');
    brushGroup.setAttribute('class', 'brush-tip-group');
    brushGroup.style.display = 'none';

    const brushGlow = document.createElementNS(svgNS, 'circle');
    brushGlow.setAttribute('r', '6');
    brushGlow.setAttribute('fill', 'rgba(255, 145, 164, 0.3)');
    brushGlow.setAttribute('class', 'brush-glow');
    brushGroup.appendChild(brushGlow);

    const brushTip = document.createElementNS(svgNS, 'circle');
    brushTip.setAttribute('r', '3.5');
    brushTip.setAttribute('fill', '#ff91a4');
    brushTip.setAttribute('class', 'brush-tip');
    brushGroup.appendChild(brushTip);

    strokeSvg.appendChild(brushGroup);

    // Animate each stroke with color and brush tip
    for (let i = 0; i < kanji.strokes.length; i++) {
      if (!state.animating) break;

      // Update stroke counter
      strokeCounter.textContent = (i + 1);

      const color = STROKE_COLORS[i % STROKE_COLORS.length];

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', kanji.strokes[i]);
      path.setAttribute('stroke', color);
      path.setAttribute('stroke-width', '8');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      // Insert before brush group so brush stays on top
      strokeSvg.insertBefore(path, brushGroup);

      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // Animate brush tip along the path
      await new Promise(resolve => {
        const duration = Math.min(Math.max(length * 4.5, 300), 700);
        const startTime = performance.now();
        brushGroup.style.display = '';

        // Position brush at start
        const startPt = path.getPointAtLength(0);
        brushTip.setAttribute('cx', startPt.x);
        brushTip.setAttribute('cy', startPt.y);
        brushGlow.setAttribute('cx', startPt.x);
        brushGlow.setAttribute('cy', startPt.y);

        function step(now) {
          if (!state.animating) { resolve(); return; }

          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease in-out for natural brush movement
          const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          // Update stroke reveal
          path.style.strokeDashoffset = length * (1 - eased);

          // Move brush tip along path
          const point = path.getPointAtLength(length * eased);
          brushTip.setAttribute('cx', point.x);
          brushTip.setAttribute('cy', point.y);
          brushGlow.setAttribute('cx', point.x);
          brushGlow.setAttribute('cy', point.y);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }

        requestAnimationFrame(step);
      });

      // Hide brush tip between strokes
      brushGroup.style.display = 'none';

      // Pause between strokes
      await sleep(200);
    }

    // Remove brush tip when done
    if (brushGroup.parentNode) {
      brushGroup.remove();
    }

    // Show total stroke count in counter
    strokeCounter.textContent = kanji.strokes.length;

    playBtn.textContent = 'もういちど みる';
    playBtn.classList.remove('playing');
    state.animating = false;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // --- Mastered / Sticker ---
  function handleMastered() {
    const kanji = state.currentKanji;
    if (!kanji) return;

    if (!state.mastered[kanji.char]) {
      state.mastered[kanji.char] = true;
      saveState();
      showStickerModal();
      launchConfetti();
    } else {
      // Already mastered - show sticker selector again
      showStickerModal();
    }
  }

  function showStickerModal() {
    stickerGrid.innerHTML = '';

    STICKERS.forEach(sticker => {
      const opt = document.createElement('div');
      opt.className = 'sticker-option';

      const iconEl = document.createElement('div');
      iconEl.className = 'sticker-icon ' + sticker.cssClass;
      iconEl.textContent = sticker.emoji;
      opt.appendChild(iconEl);

      const nameEl = document.createElement('div');
      nameEl.className = 'sticker-name';
      nameEl.textContent = sticker.name;
      opt.appendChild(nameEl);

      opt.addEventListener('click', () => selectSticker(sticker.id));
      stickerGrid.appendChild(opt);
    });

    stickerModal.classList.remove('hidden');
  }

  function selectSticker(stickerId) {
    const kanji = state.currentKanji;
    if (!kanji) return;

    state.stickers[kanji.char] = stickerId;
    saveState();

    stickerModal.classList.add('hidden');

    // Update detail view sticker
    const sticker = STICKERS.find(s => s.id === stickerId);
    if (sticker) {
      detailSticker.textContent = sticker.emoji;
      detailSticker.className = 'sticker-display ' + sticker.cssClass;
      detailSticker.style.display = 'flex';
    }

    // Update mastered button
    masteredBtn.textContent = 'できたね!';
    masteredBtn.classList.add('already-mastered');

    updateProgress();
  }

  // --- Confetti ---
  function launchConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ffb6c1', '#c8a2c8', '#b5ead7', '#fff3b0', '#ffdab9', '#b5d8f7', '#ff91a4'];
    const shapes = ['circle', 'star', 'heart'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * confettiCanvas.width,
        y: -20 - Math.random() * 200,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        speedX: (Math.random() - 0.5) * 4,
        speedY: 2 + Math.random() * 3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        opacity: 1
      });
    }

    let frame = 0;
    const maxFrames = 120;

    function drawParticle(p) {
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = p.opacity;
      confettiCtx.fillStyle = p.color;

      if (p.shape === 'circle') {
        confettiCtx.beginPath();
        confettiCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        confettiCtx.fill();
      } else if (p.shape === 'star') {
        drawStar(confettiCtx, 0, 0, 5, p.size / 2, p.size / 4);
      } else if (p.shape === 'heart') {
        drawHeart(confettiCtx, 0, 0, p.size / 2);
      }

      confettiCtx.restore();
    }

    function animate() {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      frame++;

      if (frame > maxFrames - 30) {
        particles.forEach(p => { p.opacity -= 0.033; });
      }

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.speedY += 0.05;
        drawParticle(p);
      });

      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }

    animate();
  }

  function drawStar(ctx, cx, cy, spikes, outerR, innerR) {
    let rot = (Math.PI / 2) * 3;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerR);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(cx + Math.cos(rot) * outerR, cy + Math.sin(rot) * outerR);
      rot += step;
      ctx.lineTo(cx + Math.cos(rot) * innerR, cy + Math.sin(rot) * innerR);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerR);
    ctx.closePath();
    ctx.fill();
  }

  function drawHeart(ctx, cx, cy, size) {
    ctx.beginPath();
    ctx.moveTo(cx, cy + size * 0.4);
    ctx.bezierCurveTo(cx - size, cy - size * 0.2, cx - size * 0.5, cy - size, cx, cy - size * 0.4);
    ctx.bezierCurveTo(cx + size * 0.5, cy - size, cx + size, cy - size * 0.2, cx, cy + size * 0.4);
    ctx.closePath();
    ctx.fill();
  }

  // --- Event Listeners ---
  // Category tabs
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentCategory = btn.dataset.category;
      renderGrid();
    });
  });

  // Back button
  backBtn.addEventListener('click', hideDetail);

  // Play stroke animation
  playBtn.addEventListener('click', animateStrokes);

  // Mastered button
  masteredBtn.addEventListener('click', handleMastered);

  // Prev / Next
  prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) showDetail(state.currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (state.currentIndex < KANJI_DATA.length - 1) showDetail(state.currentIndex + 1);
  });

  // Modal close
  modalClose.addEventListener('click', () => {
    stickerModal.classList.add('hidden');
  });

  // Close modal on backdrop click
  stickerModal.addEventListener('click', (e) => {
    if (e.target === stickerModal) stickerModal.classList.add('hidden');
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (state.currentKanji) {
      if (e.key === 'ArrowLeft') prevBtn.click();
      else if (e.key === 'ArrowRight') nextBtn.click();
      else if (e.key === 'Escape') hideDetail();
      else if (e.key === ' ') { e.preventDefault(); playBtn.click(); }
    }
  });

  // --- Init ---
  loadState();
  renderGrid();

})();
