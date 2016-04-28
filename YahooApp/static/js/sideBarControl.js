(function() {
  $(function() {
    var collapseMyMenu, expandMyMenu, hideMenuTexts, showMenuTexts, expandContent, collapseContent;
    expandMyMenu = function() {
      return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapseMyMenu = function() {
      return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    showMenuTexts = function() {
      return $("nav.sidebar ul a span.expanded-element").show();
    };
    hideMenuTexts = function() {
      return $("nav.sidebar ul a span.expanded-element").hide();
    };
    expandContent = function() {
      return $(".jumbo").removeClass("jumbo-sidebar-collapsed").addClass("jumbo-sidebar-expanded");
    };
    collapseContent = function(){
      return $(".jumbo").removeClass("jumbo-sidebar-expanded").addClass("jumbo-sidebar-collapsed");
    };
    return $("#justify-icon").click(function(e) {
      if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
        expandMyMenu();
        collapseContent();
        showMenuTexts();
        $(this).css({
          color: "#00000"
        });
      } else if ($(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")) {
        collapseMyMenu();
        expandContent();
        hideMenuTexts();
        $(this).css({
          color: "#FFF"
        });
      }
      return false;
    });
  });

}).call(this);
