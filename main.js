$(function () {
  /* Navbar shadow on scroll */
  $(window).on('scroll', function () {
    $('#nav').toggleClass('scrolled', window.scrollY > 10);
  });

  /* Entertainment carousel data */
  var items = [
    ['Stream now · Crime', '12 months to plan. 12 hours to execute.', '#5b2a86,#1a0b2e'],
    ['Stream now · Drama', 'Scrappy and defiant, a revolution begins.', '#b8512d,#3a1608'],
    ['F1 on Apple TV', 'Every Grand Prix, live and on demand.', '#c0121f,#2a0508'],
    ['Stream now · Comedy', 'New season.', '#2f7d6b,#0b2a24'],
    ['MLS on Apple TV', 'Watch every club, every match, live.', '#1f4fb5,#08173a'],
    ['Stream now · Crime', 'Get close enough to risk becoming a victim.', '#444a58,#0f1116'],
    ['Stream now · Documentary', 'A culinary road trip to revive a family restaurant.', '#d98a1f,#3d2506'],
    ['Stream now · Thriller', 'The most unruly spies are back.', '#2a3b4f,#070b10'],
    ['Play now · Arcade', 'New games every month.', '#8a3fc7,#240a3b']
  ];
  $.each(items, function (i, it) {
    $('#track').append(
      '<a href="#" class="card-ent reveal" style="background:linear-gradient(160deg,' + it[2] + ')">' +
      '<small>' + it[0] + '</small><b>' + it[1] + '</b></a>');
  });
  $('#next').on('click', function () { $('#track')[0].scrollBy({ left: 316, behavior: 'smooth' }); });
  $('#prev').on('click', function () { $('#track')[0].scrollBy({ left: -316, behavior: 'smooth' }); });

  /* Footer columns (accordion on mobile) */
  var cols = {
    'Shop and Learn': ['Store','Mac','iPad','iPhone','Watch','Vision','AirPods','Home','AirTag','Accessories','Gift Cards'],
    'Apple Wallet': ['Wallet','Apple Card','Apple Pay','Apple Cash'],
    'Account': ['Manage Your Apple Account','Apple Store Account','iCloud.com'],
    'Entertainment': ['Apple One','Apple TV','Apple Music','Apple Arcade','Apple Fitness+','Apple News+','Apple Podcasts','Apple Books','App Store'],
    'Apple Store': ['Find a Store','Genius Bar','Today at Apple','Group Reservations','Apple Camp','Apple Store App','Certified Refurbished','Apple Upgrade','Apple Trade In','Financing','Order Status','Shopping Help'],
    'For Business': ['Apple and Business','Shop for Business'],
    'For Education': ['Apple and Education','Shop for K-12','Shop for College'],
    'For Healthcare': ['Apple and Healthcare'],
    'For Government': ['Apple and Government','Shop for Veterans and Military','Shop for State and Local Employees','Shop for Federal Employees'],
    'Apple Values': ['Accessibility','Education','Environment','Inclusion and Diversity','Privacy','Racial Equity and Justice','Supply Chain Innovation'],
    'About Apple': ['Newsroom','Apple Leadership','Career Opportunities','Investors','Ethics & Compliance','Events','Contact Apple']
  };
  $.each(cols, function (title, links) {
    var html = '<div class="col"><h4>' + title + '</h4><div class="links">';
    $.each(links, function (_, l) { html += '<a href="#">' + l + '</a>'; });
    $('#cols').append(html + '</div></div>');
  });
  $('#cols').on('click', 'h4', function () {
    if (window.innerWidth < 768) $(this).parent().toggleClass('open');
  });

  /* Scroll reveal */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $('.reveal').each(function () { io.observe(this); });

  /* Parallax scale on product visuals */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function parallax() {
    if (reduce) return;
    var vh = window.innerHeight;
    $('.ph').each(function () {
      var r = this.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var p = 1 - Math.min(Math.max(r.top / vh, 0), 1);
      this.style.transform = 'scale(' + (0.92 + p * 0.1).toFixed(3) + ')';
    });
  }
  $(window).on('scroll resize', parallax); parallax();
});
