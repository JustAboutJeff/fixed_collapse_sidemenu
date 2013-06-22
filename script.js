function bindEvents() {
  $("div#nav-tab").on('click', function(e) {
    var $navTab = $(this);
    var $nav = $('nav');
    e.preventDefault();
    if ($navTab.attr('data-nav') == 'close') {
      $navTab.animate({ left: "150px" }, 'slow').attr('data-nav','open');
      $nav.animate({ width: "150px" }, 'slow', function() {
        $('nav > ul > li > a').fadeIn(400,'linear');
      });
    } else {
      $navTab.animate({ left: "0px" }, 'slow').attr('data-nav','close');
      $nav.animate({ width: "0px" }, 'slow');
      $('nav > ul > li > a').fadeOut(150,'linear');
    }
  });
}


$(function() {
  bindEvents();
});
