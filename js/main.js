/* ============================================
   OptiPlan Showcase — Main JS
   Scroll animations, counters, interactions,
   theme toggle, cursor glow
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modules
  OptiNav.init();
  OptiI18n.init();

  // Initialize scroll reveal
  initScrollReveal();

  // Initialize counter animations
  initCounters();

  // Initialize product card expand
  initProductCards();

  // Initialize theme toggle
  initThemeToggle();

  // Initialize cursor glow on cards
  initCursorGlow();
});

/* --- Scroll Reveal via Intersection Observer --- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-in');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve — keeps it visible
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --- Counter Animations --- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const currentValue = Math.round(easedProgress * target);

    el.textContent = prefix + currentValue.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* --- Product Card Expand/Collapse --- */
function initProductCards() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');

      // Close all cards
      cards.forEach(c => c.classList.remove('expanded'));

      // Toggle clicked card
      if (!wasExpanded) {
        card.classList.add('expanded');

        // Re-trigger CSS animations by forcing reflow on animated elements
        const detail = card.querySelector('.product-detail');
        if (detail) {
          const animated = detail.querySelectorAll(
            '.permit-matrix td, .letter-card, .risk-level-bar, .gantt-bar, .cashflow-grid tbody tr, .hub-stat'
          );
          animated.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // force reflow
            el.style.animation = '';
          });
        }

        // Animate hub stat numbers counting up
        const hubStats = card.querySelectorAll('.hub-stat-number');
        hubStats.forEach(el => {
          const target = parseInt(el.textContent, 10);
          if (!isNaN(target) && target > 0) {
            animateHubStat(el, target);
          }
        });
      }
    });
  });
}

/* --- Animate hub stat number --- */
function animateHubStat(el, target) {
  const duration = 1200;
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const currentValue = Math.round(easedProgress * target);
    el.textContent = currentValue;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  el.textContent = '0';
  requestAnimationFrame(update);
}

/* --- Theme Toggle (Light/Dark) --- */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const darkIcon = toggle.querySelector('.theme-icon-dark');
  const lightIcon = toggle.querySelector('.theme-icon-light');

  function updateIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (darkIcon && lightIcon) {
      darkIcon.style.display = isDark ? 'none' : '';
      lightIcon.style.display = isDark ? '' : 'none';
    }
  }

  // Set initial icon state
  updateIcons();

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('optiplan-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('optiplan-theme', 'dark');
    }
    updateIcons();
  });
}

/* --- Cursor-Tracking Glow on Cards --- */
function initCursorGlow() {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('.product-card, .number-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}
