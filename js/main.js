/**
 * Lafeyra Hotel — Main JavaScript
 * Smooth scroll, header, mobile menu, form, lightbox, scroll reveal
 */

(function () {
  'use strict';

  // ----- Canonical URL (κύρια διεύθυνση χωρίς /el/ για Google) -----
  (function () {
    var canonical = document.querySelector('link[rel="canonical"]');
    var path = (window.location.pathname || '/').replace(/^\/el\/?/, '/') || '/';
    var href = 'https://lafeyra-hotel.gr' + (path === '/' ? '/' : path);
    if (canonical) {
      canonical.setAttribute('href', href);
    } else {
      var link = document.createElement('link');
      link.rel = 'canonical';
      link.href = href;
      document.head.appendChild(link);
    }
  })();

  // ----- Smooth scroll for # links -----
  function scrollToElement(selector) {
    var el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          scrollToElement(href);
          var menu = document.getElementById('menu-main');
          var toggle = document.getElementById('menu-toggle');
          if (menu && menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // ----- Header scroll effect -----
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ----- Mobile menu toggle -----
  var menuToggle = document.getElementById('menu-toggle');
  var menuMain = document.getElementById('menu-main');
  var langSwitcher = document.querySelector('.nav-wrap .lang-switcher');
  if (menuToggle && menuMain) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuMain.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.querySelectorAll('.nav-item-has-dropdown.dropdown-open').forEach(function (el) { el.classList.remove('dropdown-open'); });
      // Show language switcher inside menu on mobile so both EN and ΕΛ are visible
      var mobileLang = document.getElementById('menu-lang-mobile');
      if (isOpen && langSwitcher && !mobileLang && window.matchMedia('(max-width: 768px)').matches) {
        var clone = langSwitcher.cloneNode(true);
        clone.id = 'menu-lang-mobile';
        clone.className = clone.className + ' lang-switcher-mobile';
        menuMain.insertBefore(clone, menuMain.firstChild);
        clone.querySelectorAll('.lang-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var l = btn.getAttribute('data-lang');
            if (window.I18N && typeof window.I18N.setLang === 'function') window.I18N.setLang(l);
          });
        });
      } else if (!isOpen && mobileLang) {
        mobileLang.remove();
      }
    });
  }

  // ----- Mobile: open/close dropdown (Διαμονή, INFO) on tap -----
  function isMobileNav() {
    return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  }
  document.querySelectorAll('.nav-item-has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (!isMobileNav()) return;
      var parent = this.closest('.nav-item-has-dropdown');
      if (!parent) return;
      e.preventDefault();
      var isOpen = parent.classList.toggle('dropdown-open');
      parent.setAttribute('aria-expanded', isOpen);
      document.querySelectorAll('.nav-item-has-dropdown').forEach(function (other) {
        if (other !== parent) other.classList.remove('dropdown-open');
      });
    });
  });

  // ----- Hero slideshow (home) -----
  function initHeroSlideshow() {
    var heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;
    var slides = heroSlider.querySelectorAll('.hero-slide');
    var dots = heroSlider.querySelectorAll('.hero-dot');
    if (slides.length === 0 || dots.length === 0) return;
    var currentIndex = 0;
    var autoInterval;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('hero-slide--active', i === currentIndex);
      }
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('hero-dot--active', j === currentIndex);
        dots[j].setAttribute('aria-label', 'Slide ' + (j + 1));
      }
    }

    for (var k = 0; k < dots.length; k++) {
      (function (idx) {
        dots[idx].addEventListener('click', function () {
          goToSlide(idx);
          resetAutoAdvance();
        });
      })(k);
    }

    function resetAutoAdvance() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(function () {
        goToSlide(currentIndex + 1);
      }, 5000);
    }
    resetAutoAdvance();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlideshow);
  } else {
    initHeroSlideshow();
  }

  // ----- Room page carousel -----
  function initRoomCarousel() {
    var carousel = document.querySelector('.room-carousel');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.room-carousel-slide');
    var dots = carousel.querySelectorAll('.room-carousel-dot');
    if (slides.length === 0 || dots.length === 0) return;
    var currentIndex = 0;
    var autoInterval;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('room-carousel-slide--active', i === currentIndex);
      }
      for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('room-carousel-dot--active', j === currentIndex);
        dots[j].setAttribute('aria-label', 'Slide ' + (j + 1));
      }
    }

    for (var k = 0; k < dots.length; k++) {
      (function (idx) {
        dots[idx].addEventListener('click', function () {
          goToSlide(idx);
          if (autoInterval) clearInterval(autoInterval);
          autoInterval = setInterval(function () { goToSlide(currentIndex + 1); }, 5000);
        });
      })(k);
    }
    autoInterval = setInterval(function () { goToSlide(currentIndex + 1); }, 5000);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoomCarousel);
  } else {
    initRoomCarousel();
  }

  function initRoomGalleryLoadMore() {
    var btn = document.querySelector('.room-gallery-load-more-btn');
    var wrap = document.querySelector('.room-gallery-wrap');
    if (!btn || !wrap) return;
    btn.addEventListener('click', function () {
      wrap.classList.add('room-gallery-expanded');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoomGalleryLoadMore);
  } else {
    initRoomGalleryLoadMore();
  }

  // ----- Booking form (index: short form) -----
  var form = document.getElementById('booking-form');
  var formMessage = document.getElementById('form-message');
  if (form && formMessage) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var messageInput = document.getElementById('message');
      var name = nameInput ? nameInput.value.trim() : '';
      var email = emailInput ? emailInput.value.trim() : '';
      var message = messageInput ? messageInput.value.trim() : '';

      form.querySelectorAll('.error').forEach(function (el) { el.classList.remove('error'); });
      formMessage.className = 'form-message';
      formMessage.textContent = '';

      var valid = true;
      if (!name) { if (nameInput) nameInput.classList.add('error'); valid = false; }
      if (!email) { if (emailInput) emailInput.classList.add('error'); valid = false; }
      if (!message) { if (messageInput) messageInput.classList.add('error'); valid = false; }

      if (!valid) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please fill in all required fields.';
        return;
      }

      var apiUrl = window.RESERVATION_API_URL;
      if (apiUrl) {
        formMessage.textContent = 'Sending...';
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        var headers = { 'Content-Type': 'application/json' };
        if (window.SUPABASE_ANON_KEY) headers['Authorization'] = 'Bearer ' + window.SUPABASE_ANON_KEY;
        fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ name: name, email: email, message: message })
        })
          .then(function (res) {
            return res.text().then(function (text) {
              var data = {};
              try { data = text ? JSON.parse(text) : {}; } catch (_) {}
              return { ok: res.ok, status: res.status, data: data };
            });
          })
          .then(function (r) {
            if (r.ok) {
              formMessage.className = 'form-message success';
              formMessage.textContent = 'Thank you! We have received your request and will reply soon.';
              form.reset();
            } else {
              formMessage.className = 'form-message error';
              var errMsg = (r.data && r.data.error) ? r.data.error : ('Error ' + r.status + '. Try again or email us at lafeyra.hotel@gmail.com');
              if (r.data && r.data.detail) errMsg += ' (' + r.data.detail + ')';
              formMessage.textContent = errMsg;
            }
          })
          .catch(function (err) {
            formMessage.className = 'form-message error';
            var errMsg = err && err.message ? err.message : 'Could not send.';
            if (errMsg.indexOf('fetch') !== -1 || errMsg === 'Failed to fetch') {
              errMsg = 'Network error. Check your connection or try again. You can also email us at lafeyra.hotel@gmail.com';
            } else {
              errMsg = errMsg + ' Please try again or email us at lafeyra.hotel@gmail.com';
            }
            formMessage.textContent = errMsg;
          })
          .finally(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
        return;
      }

      var subject = encodeURIComponent('Reservation request – Lafeyra Hotel');
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      var mailto = 'mailto:lafeyra.hotel@gmail.com?subject=' + subject + '&body=' + body;
      formMessage.className = 'form-message success';
      formMessage.textContent = 'Thank you! Opening your email client to send the request. If it did not open, email us at lafeyra.hotel@gmail.com';
      window.location.href = mailto;
    });
  }

  // ----- Gallery lightbox -----
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Gallery image';
    }
    if (lightbox) {
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
    }
  }

  document.querySelectorAll('.gallery-lightbox').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(this.getAttribute('href'), this.getAttribute('data-caption'));
    });
  });
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') closeLightbox();
    });
  }

  // ----- Scroll reveal -----
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  // ----- Footer year -----
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Cookie consent -----
  var cookieBanner = document.getElementById('cookie-consent');
  var cookieAccept = document.getElementById('cookie-consent-accept');
  var cookieStorageKey = 'lafeyra_cookie_consent';
  if (cookieBanner) {
    if (localStorage.getItem(cookieStorageKey) === 'accepted') {
      cookieBanner.classList.add('cookie-consent--dismissed');
    }
    if (cookieAccept) {
      cookieAccept.addEventListener('click', function () {
        localStorage.setItem(cookieStorageKey, 'accepted');
        cookieBanner.classList.add('cookie-consent--dismissed');
      });
    }
    // "Learn more" link: ensure it navigates/scrolls to policies
    var cookieLearnMore = cookieBanner.querySelector('.cookie-consent-link');
    if (cookieLearnMore) {
      cookieLearnMore.setAttribute('href', getContactPoliciesHref());
      cookieLearnMore.addEventListener('click', function (e) {
        var policies = document.getElementById('policies');
        if (policies) {
          e.preventDefault();
          policies.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  // Correct contact.html#policies URL from any page (root, info/, rooms/)
  function getContactPoliciesHref() {
    var path = window.location.pathname || '';
    if (path.indexOf('contact.html') !== -1 || path.endsWith('/contact') || path.endsWith('/contact/')) return '#policies';
    if (path.indexOf('info/') !== -1 || path.indexOf('rooms/') !== -1) return '../contact.html#policies';
    return 'contact.html#policies';
  }

  // Scroll to #policies when page loads with that hash (e.g. after clicking "Learn more")
  if (window.location.hash === '#policies') {
    var policiesEl = document.getElementById('policies');
    if (policiesEl) {
      window.addEventListener('load', function () {
        policiesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  // ----- Policy accordion (contact page) -----
  document.querySelectorAll('.policy-accordion .policy-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.policy-item');
      var content = document.getElementById(this.getAttribute('aria-controls'));
      var icon = this.querySelector('.policy-icon');
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.policy-accordion .policy-item').forEach(function (i) {
        i.classList.remove('is-open');
        var c = document.getElementById(i.querySelector('.policy-trigger').getAttribute('aria-controls'));
        if (c) { c.hidden = true; }
        var trig = i.querySelector('.policy-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
        var ic = i.querySelector('.policy-icon');
        if (ic) ic.textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('is-open');
        if (content) content.hidden = false;
        this.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
      }
    });
  });
  document.querySelectorAll('.policy-accordion .policy-item').forEach(function (item) {
    var btn = item.querySelector('.policy-trigger');
    var content = btn ? document.getElementById(btn.getAttribute('aria-controls')) : null;
    if (!item.classList.contains('is-open') && content) content.hidden = true;
  });

  // ----- Home rooms carousel -----
  var carouselTrack = document.getElementById('rooms-carousel-track');
  var carouselInner = carouselTrack ? carouselTrack.closest('.home-rooms-carousel-inner') : null;
  var carouselPrev = document.querySelector('.home-carousel-prev');
  var carouselNext = document.querySelector('.home-carousel-next');
  if (carouselTrack && carouselInner && (carouselPrev || carouselNext)) {
    var slides = carouselTrack.querySelectorAll('.home-room-slide');
    var gap = 24;

    function getStep() {
      return (slides[0] ? slides[0].offsetWidth + gap : 304);
    }

    function scrollToSlide(direction) {
      var step = getStep();
      var currentScroll = carouselInner.scrollLeft;
      var target = direction === 'next' ? currentScroll + step : Math.max(0, currentScroll - step);
      carouselInner.scrollTo({ left: target, behavior: 'smooth' });
    }

    if (carouselPrev) carouselPrev.addEventListener('click', function () { scrollToSlide('prev'); });
    if (carouselNext) carouselNext.addEventListener('click', function () { scrollToSlide('next'); });
  }

  // ----- Restaurant gallery: show first 16, then "Load more" -----
  var restaurantGrid = document.querySelector('.restaurant-gallery-grid');
  var loadMoreWrap = document.getElementById('restaurant-load-more-wrap');
  var loadMoreBtn = document.getElementById('restaurant-load-more');
  if (restaurantGrid && loadMoreWrap && loadMoreBtn) {
    var items = restaurantGrid.querySelectorAll('.gallery-item');
    var initialCount = 16;
    for (var i = initialCount; i < items.length; i++) {
      items[i].style.display = 'none';
      items[i].setAttribute('data-restaurant-hidden', '1');
    }
    if (items.length <= initialCount) {
      loadMoreWrap.style.display = 'none';
    } else {
      loadMoreBtn.addEventListener('click', function () {
        restaurantGrid.querySelectorAll('[data-restaurant-hidden="1"]').forEach(function (el) {
          el.style.display = '';
          el.removeAttribute('data-restaurant-hidden');
        });
        loadMoreWrap.style.display = 'none';
      });
    }
  }
})();
