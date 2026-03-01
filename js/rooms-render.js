/**
 * LaFeyra Hotel — Απόδοση δωματίων από data/rooms.js
 * Συμπληρώνει: μενού STAY, carousel στην αρχική, πλέγμα στη σελίδα rooms.html
 */
(function () {
  'use strict';
  var ROOMS = window.ROOMS;
  if (!ROOMS || !ROOMS.length) return;

  var path = window.location.pathname || '';
  var inRoomsFolder = path.indexOf('rooms/') !== -1 && path.indexOf('rooms.html') === -1;
  var inSubfolder = path.indexOf('info/') !== -1;
  var roomHrefPrefix = inRoomsFolder ? '' : (inSubfolder ? '../rooms/' : 'rooms/');

  // ----- 1. Μενού STAY: ενημέρωση links δωματίων -----
  var overviewHref = (inRoomsFolder || inSubfolder) ? '../rooms.html' : 'rooms.html';
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  for (var d = 0; d < dropdowns.length; d++) {
    var ul = dropdowns[d];
    var firstLi = ul.querySelector('li');
    var firstLink = firstLi ? firstLi.querySelector('a') : null;
    if (!firstLink || firstLink.textContent.trim() !== 'OVERVIEW') continue;
    firstLink.href = overviewHref;
    while (ul.children.length > 1) ul.removeChild(ul.lastChild);
    for (var i = 0; i < ROOMS.length; i++) {
      var room = ROOMS[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = roomHrefPrefix + room.slug + '.html';
      a.textContent = room.title.toUpperCase();
      li.appendChild(a);
      ul.appendChild(li);
    }
    break;
  }

  // ----- 2. Carousel στην αρχική (index) -----
  var track = document.getElementById('rooms-carousel-track');
  if (track) {
    track.innerHTML = '';
    for (var c = 0; c < ROOMS.length; c++) {
      var r = ROOMS[c];
      var art = document.createElement('article');
      art.className = 'home-room-slide';
      var guestsKey = 'room.guests_' + (r.guests || '2');
      art.innerHTML =
        '<a href="' + roomHrefPrefix + r.slug + '.html" class="home-room-slide-img-wrap">' +
          '<img src="' + (r.image || r.imageLarge) + '" alt="' + escapeHtml(r.title) + '" width="400" height="280" />' +
        '</a>' +
        '<div class="home-room-slide-bar"><span data-i18n="' + guestsKey + '">' + r.guests + ' GUESTS</span><span>' + r.area + '</span></div>' +
        '<h3 class="home-room-slide-title">' + escapeHtml(r.title) + '</h3>' +
        '<a href="' + roomHrefPrefix + r.slug + '.html" class="home-room-slide-link" data-i18n="common.read_more">READ MORE</a>';
      track.appendChild(art);
    }
  }

  // ----- 3. Πλέγμα στη σελίδα rooms.html -----
  var grid = document.getElementById('rooms-grid');
  if (grid) {
    grid.innerHTML = '';
    for (var g = 0; g < ROOMS.length; g++) {
      var rm = ROOMS[g];
      var card = document.createElement('article');
      card.className = 'room-card stay-card';
      var guestsKey = 'room.guests_' + (rm.guests || '2');
      var descKey = 'room.grid_desc_' + rm.slug.replace(/-/g, '_');
      card.innerHTML =
        '<a href="' + roomHrefPrefix + rm.slug + '.html" class="room-card-img-wrap">' +
          '<img src="' + (rm.imageLarge || rm.image) + '" alt="' + escapeHtml(rm.title) + '" width="720" height="480" />' +
        '</a>' +
        '<div class="stay-card-bar">' +
          '<span class="stay-meta"><span class="stay-meta-icon" aria-hidden="true">&#9670;</span> <span data-i18n="' + guestsKey + '">' + rm.guests + ' GUESTS</span></span>' +
          '<span class="stay-meta"><span class="stay-meta-icon" aria-hidden="true">&#9632;</span> ' + rm.area + '</span>' +
        '</div>' +
        '<div class="room-card-body">' +
          '<p class="stay-card-desc" data-i18n="' + descKey + '">' + escapeHtml(rm.description) + '</p>' +
          '<a href="' + roomHrefPrefix + rm.slug + '.html" class="btn btn-stay-read" data-i18n="common.read_more">READ MORE</a>' +
        '</div>';
      grid.appendChild(card);
    }
  }

  function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
