(function ($) {
  "use strict";

  /*-- Checkout Accoradin --*/
  if ($(".checkout-page__payment__title").length) {
    $(".checkout-page__payment__item")
      .find(".checkout-page__payment__content")
      .hide();
    $(".checkout-page__payment__item--active")
      .find(".checkout-page__payment__content")
      .show();
    $(".checkout-page__payment__title").on("click", function (e) {
      e.preventDefault();
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__item")
        .removeClass("checkout-page__payment__item--active");
      $(this)
        .parents(".checkout-page__payment")
        .find(".checkout-page__payment__content")
        .slideUp();
      $(this).parent().addClass("checkout-page__payment__item--active");
      $(this).parent().find(".checkout-page__payment__content").slideDown();
    });
  }

  let dynamicyearElm = $(".dynamic-year");
  if (dynamicyearElm.length) {
    let currentYear = new Date().getFullYear();
    dynamicyearElm.html(currentYear);
  }

  // toggle password
  $(".toggle-password").on("click", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $(".login-page__password");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // Date Picker
  if ($(".gotur-datepicker").length) {
    $(".gotur-datepicker").each(function () {
      $(this).datepicker();
    });
  }

  // Multi Date Picker
  if ($(".gotur-multi-datepicker").length) {
    $(".gotur-multi-datepicker").each(function () {
      let self = $(this);
      self.daterangepicker({
        autoUpdateInput: false
      });
      self.on("apply.daterangepicker", function (ev, picker) {
        $(this).val(
          picker.startDate.format("D MMM YY") +
          " - " +
          picker.endDate.format("D MMM YY")
        );
      });
    });
  }

  // Popular Causes Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      }, {
        accY: -50,
      }
    );
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text(),
          }).animate({
            countNum: n,
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            },
          });
        }
      }, {
        accY: 0,
      }
    );
  }

  // custom coursor
  if ($(".custom-cursor").length) {
    var cursor = document.querySelector(".custom-cursor__cursor");
    var cursorinner = document.querySelector(".custom-cursor__cursor-two");
    var a = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("custom-cursor__innerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("custom-cursor__innerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor__hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor__hover");
      });
    });
  }

  if ($(".contact-form-validated").length) {
    $(".contact-form-validated").validate({
      // initialize the plugin
      rules: {
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
        },
        subject: {
          required: true,
        },
      },
      submitHandler: function (form) {
        // sending value with ajax request
        $.post(
          $(form).attr("action"),
          $(form).serialize(),
          function (response) {
            $(form).parent().find(".result").append(response);
            $(form).find('input[type="text"]').val("");
            $(form).find('input[type="email"]').val("");
            $(form).find("textarea").val("");
          }
        );
        return false;
      },
    });
  }

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      var Self = $(this);
      var mcURL = Self.data("url");
      var mcResp = Self.parent().find(".mc-form__response");

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + "</p>";
          });
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            Self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            Self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        },
      });
    });
  }

  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false,
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true,
        },
      });
    });
  }

  let solinomImagePopupGallery = $(".card__popup");
  solinomImagePopupGallery.each(function () {
    let elm = $(this);
    let options = elm.data("gallery-options");
    let imageGallery = elm.magnificPopup(
      "object" === typeof options ? options : JSON.parse(options)
    );
  });

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".service-sidebar__nav").length) {
    // dynamic current class
    let mainNavUL = $(".service-sidebar__nav");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }


  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".main-header__element__btn").length) {
    $(".main-header__element__btn").on("click", function (e) {
      e.preventDefault();
      $(".header-right-sidebar").addClass("isActive");
      $("body").addClass("locked");
    });
  }

  if ($(".header-right-sidebar__toggler").length) {
    $(".header-right-sidebar__toggler").on("click", function (e) {
      e.preventDefault();
      $(".header-right-sidebar").removeClass("isActive");
      $("body").removeClass("locked");
    });
  }

  //Show Popup menu
  $(document).on("click", ".megamenu-clickable--toggler > a", function (e) {
    $("body").toggleClass("megamenu-popup-active");
    $(this).parent().find("ul").toggleClass("megamenu-clickable--active");
    e.preventDefault();
  });
  $(document).on("click", ".megamenu-clickable--close", function (e) {
    $("body").removeClass("megamenu-popup-active");
    $(".megamenu-clickable--active").removeClass("megamenu-clickable--active");
    e.preventDefault();
  });

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", 
      animateClass: "animated", 
      mobile: true,
      live: true, 
    });
    wow.init();
  }

  //accordion
  if ($(".gotur-accordion").length) {
    var accordionGrp = $(".gotur-accordion");
    accordionGrp.each(function () {
      var accordionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accordion");
      Self.addClass(accordionName);
      Self.find(".accordion .accordion-content").hide();
      Self.find(".accordion.active").find(".accordion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accordion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".gotur-accordion." + accordionName)
                .find(".accordion")
                .removeClass("active");
              $(".gotur-accordion." + accordionName)
                .find(".accordion")
                .find(".accordion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accordion-content").slideDown();
            }
          });
      });
    });
  }

  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });

  $(".sub").on("click", function () {
    if ($(this).next().val() > 0) {
      if ($(this).next().val() > 0)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  function thmOwlInit() {
    // owl slider
    let goturowlCarousel = $(".gotur-owl__carousel");
    if (goturowlCarousel.length) {
      goturowlCarousel.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
        elm.find("button").each(function () {
          $(this).attr("aria-label", "carousel button");
        });
      });
    }
    let goturowlCarouselNav = $(".gotur-owl__carousel--custom-nav");
    if (goturowlCarouselNav.length) {
      goturowlCarouselNav.each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }

    let goturowlCarouselWithCounter = $(".gotur-owl__carousel--with-counter");
    if (goturowlCarouselWithCounter.length) {
      goturowlCarouselWithCounter.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");

        function addLeadingZero(num, size) {
          num = num.toString();
          while (num.length < size) num = "0" + num;
          return num;
        }
        elm
          .on("initialized.owl.carousel", function (event) {
            var idx = event.item.index;
            var carousel = event.relatedTarget;
            var carouselCount = carousel.items().length;

            if (!event.namespace) {
              return;
            }

            elm.append(
              '<div class="gotur-owl__carousel__counter"><span class="gotur-owl__carousel__counter__total"></span> <span class="gotur-owl__carousel__counter__current"></span></div>'
            );
            elm
              .find(".gotur-owl__carousel__counter__current")
              .text(
                addLeadingZero(carousel.relative(carousel.current()) + 1, 2)
              );
            elm
              .find(".gotur-owl__carousel__counter__total")
              .text(addLeadingZero(carouselCount, 2));
          })
          .owlCarousel(
            "object" === typeof options ? options : JSON.parse(options)
          )
          .on("changed.owl.carousel", function (event) {
            var carousel = event.relatedTarget;
            elm
              .find(".gotur-owl__carousel__counter__current")
              .text(
                addLeadingZero(carousel.relative(carousel.current()) + 1, 2)
              );
          });
      });
    }
  }

  function goturSlickInit() {
    // slick slider
    let hiredotsslickCarousel = $(".gotur-slick__carousel");
    if (hiredotsslickCarousel.length) {
      hiredotsslickCarousel.each(function () {
        let elm = $(this);
        let options = elm.data("slick-options");
        let hiredotsslickCarousel = elm.slick(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  /*-- Handle Scrollbar --*/
  function handleScrollbar() {
    const bodyHeight = $("body").height();
    const scrollPos = $(window).innerHeight() + $(window).scrollTop();
    let percentage = (scrollPos / bodyHeight) * 100;
    if (percentage > 100) {
      percentage = 100;
    }
    $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
  }

  /*-- One Page Menu --*/
  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "0";
        } else {
          var headerH = "0";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate({
              scrollTop: $(target.attr("href")).offset().top - headerH + "px",
            },
            900,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current_page_item");
            $(".one-page-scroll-menu")
              .find("li")
              .removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }

  function wallox_cuved_circle() {
    let circleTypeElm = $(".curved-circle__item");
    if (circleTypeElm.length) {
      circleTypeElm.each(function () {
        let elm = $(this);
        let options = elm.data("circle-text-options");
        elm.circleType(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  // window scroll event
  function stickyMenuUpScroll($targetMenu, $toggleClass) {
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 500) {
          if (st > lastScrollTop) {
            // downscroll code
            $targetMenu.removeClass($toggleClass);
          } else {
            // upscroll code
            $targetMenu.addClass($toggleClass);
          }
        } else {
          $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
      },
      false
    );
  }
  stickyMenuUpScroll($(".sticky-header--normal"), "active");

  function gotur_cuved_circle() {
    let circleTypeElm = $(".curved-circle__item");
    if (circleTypeElm.length) {
      circleTypeElm.each(function () {
        let elm = $(this);
        let options = elm.data("circle-text-options");
        elm.circleType(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }
  }

  /*-- Price Range --*/
  function priceFilter() {
    if ($(".price-ranger").length) {
      $(".price-ranger #slider-range").slider({
        range: true,
        min: 50,
        max: 1000,
        values: [11, 500],
        slide: function (event, ui) {
          $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
          $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
        },
      });
      $(".price-ranger .ranger-min-max-block .min").val(
        "$" + $(".price-ranger #slider-range").slider("values", 0)
      );
      $(".price-ranger .ranger-min-max-block .max").val(
        "$" + $(".price-ranger #slider-range").slider("values", 1)
      );
    }
  }

  /*-- Price Range --*/
  function priceFilterTwo() {
    if ($(".price-ranger-two").length) {
      $("#slider-range-two").slider({
        range: true,
        min: 0,
        max: 500,
        values: [150, 300],
        create: function( event, ui ) {
          $('.price-ranger-two').find('.ui-slider-handle').append("<span class='value'></span>");
          $('.price-ranger-two').find('.ui-slider-handle').append("<span class='value-two'></span>");
          $('.price-ranger-two').find('.value').html('150');
          $('.price-ranger-two').find('.value-two').html('300');
        },

        slide: function( event, ui ) {
          $('.price-ranger-two').find('.value').html("$" + ui.values[0]);
          $('.price-ranger-two').find('.value-two').html("$" + ui.values[1]);
        }
    });
    }
  }

  // Page Scroll Percentage
  function scrollTopPercentage() {
    const scrollPercentage = () => {
      const scrollTopPos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
      const scrollElementWrap = $("#scroll-top");

      scrollElementWrap.css(
        "background",
        `conic-gradient( var(--gotur-primary) ${scrollValue}%, var(--gotur-white) ${scrollValue}%)`
      );

      // ScrollProgress
      if (scrollTopPos > 100) {
        scrollElementWrap.addClass("active");
      } else {
        scrollElementWrap.removeClass("active");
      }

      if (scrollValue < 96) {
        $("#scroll-top-value").text(`${scrollValue}%`);
      } else {
        $("#scroll-top-value").html('<i class="fas fa-arrow-up"></i>');
      }
    };
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;

    // Back to Top
    function scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    $("#scroll-top").on("click", scrollToTop);
  }

  scrollTopPercentage();

  // window load event

  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut();
    }
    thmOwlInit();
    priceFilter();
    priceFilterTwo();
    goturSlickInit();

    if ($(".circle-progress").length) {
      $(".circle-progress").appear(function () {
        let circleProgress = $(".circle-progress");
        circleProgress.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }
    if ($(".masonry-layout").length) {
      $(".masonry-layout").imagesLoaded(function () {
        $(".masonry-layout").isotope({
          layoutMode: "masonry",
        });
      });
    }
    if ($(".fitRow-layout").length) {
      $(".fitRow-layout").imagesLoaded(function () {
        $(".fitRow-layout").isotope({
          layoutMode: "fitRows",
        });
      });
    }

    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false,
        },
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }

    gotur_cuved_circle();
  });

  $(window).on("scroll", function () {
    OnePageMenuScroll();
    handleScrollbar();
    if ($(".sticky-header--one-page").length) {
      var headerScrollPos = 130;
      var stricky = $(".sticky-header--one-page");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("active");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("active");
      }
    }

    var scrollToTopBtn = ".scroll-to-top";
    if (scrollToTopBtn.length) {
      if ($(window).scrollTop() > 500) {
        $(scrollToTopBtn).addClass("show");
      } else {
        $(scrollToTopBtn).removeClass("show");
      }
    }
  });

  /*------ Count Down -----*/
  if ($(".time-wepper").length) {
    let mainDate = $(".time-wepper").data("deadline-date");
    let yearsCondition = undefined == $(".time-wepper").data("enable-years") ? false : $(".time-wepper").data("enable-years");
    let daysCondition = undefined == $(".time-wepper").data("enable-days") ? true : $(".time-wepper").data("enable-days");
    let leadingZeros = $(".time-wepper").data("leading-zeros");
    let deadLine = "dynamicDate" == mainDate ? new Date(Date.parse(new Date()) + 31 * 24 * 60 * 60 * 1000) : "dynamicHour" == mainDate ? new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000) : mainDate;
    $(".time-wepper").countdown({
      date: deadLine,
      leadingZeros: true,
      render: function (date) {
        this.el.innerHTML = 
        (true == daysCondition ?
          `<div class="time-wepper__item day text-center">
            <h4 id="hours"> ${(true == leadingZeros ? this.leadingZeros(date.days) : date.days)} </h4>
            <span class="time-wepper__item__text">days</span>
          </div>` : "") +
        (true == leadingZeros ?
          `<div class="time-wepper__item day text-center">
            <h4 id="hours"> ${(true == leadingZeros ? this.leadingZeros(date.hours) : date.hours)} </h4>
            <span class="time-wepper__item__text">hrs</span>
          </div>` : "") +
        (true == leadingZeros ? 
          `<div class="time-wepper__item day text-center">
            <h4 id="hours"> ${(true == leadingZeros ? this.leadingZeros(date.min) : date.min)} </h4>
            <span class="time-wepper__item__text">mins</span>
          </div>` : "") +
        (true == leadingZeros ?
          `<div class="time-wepper__item day text-center">
            <h4 id="hours"> ${(true == leadingZeros ? this.leadingZeros(date.sec) : date.sec)} </h4>
            <span class="time-wepper__item__text">secs</span>
          </div>` : "")
      }
    });
  }


  if ($(".thumbnail-container .destination-three__carousel__thumb__item").length) {
    $(".thumbnail-container .destination-three__carousel__thumb__item").click(function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  }
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".sticky-header--cloned");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 100 && header && !header.classList.contains("active")) {
          header.classList.add("active");
      }
  });
});
// JavaScript to handle the "Add" links and populate the modal
document.addEventListener('DOMContentLoaded', function() {
  // Get all "Add" links
  const addLinks = document.querySelectorAll('.add-link');
  
  // Get modal elements
  const editProfileModal = new bootstrap.Modal(document.getElementById('editProfileModal'));
  const editForm = document.getElementById('editForm');
  
  // Map of field IDs to their corresponding labels
  const fieldMap = {
    'Name': 'profileFirstName',
    'Birthday': 'birthday',
    'Gender': 'gender',
    'Marital Status': 'maritalStatus',
    'Your Address': 'profileAddress',
    'Pincode': 'profilePincode',
    'State': 'state',
    'Domestic Trip Protection Plan': 'domesticInsurance',
    'International Travel Insurance Plan': 'internationalInsurance'
  };
  
  // Add click event listeners to all "Add" links
  addLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the label text (removing "+ Add" if present)
      const labelText = this.closest('.info-row').querySelector('.label').textContent.trim();
      
      // Find the corresponding field in the modal
      const fieldId = fieldMap[labelText];
      if (fieldId) {
        // Open the modal
        editProfileModal.show();
        
        // Focus on the corresponding field after a short delay (to allow modal to open)
        setTimeout(() => {
          const field = document.getElementById(fieldId);
          if (field) {
            field.focus();
            
            // Scroll to the field
            field.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    });
  });
  
  // Handle form submission
  editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically save the data to your backend
    // For this example, we'll just update the UI
    
    // Get all form values
    const formData = new FormData(editForm);
    
    // Update the profile info display
    for (const [key, value] of formData.entries()) {
      const labelText = Object.keys(fieldMap).find(k => fieldMap[k] === key);
      if (labelText && value) {
        // Find the corresponding info row
        const infoRows = document.querySelectorAll('.info-row');
        infoRows.forEach(row => {
          if (row.querySelector('.label').textContent.trim() === labelText) {
            // Update the value display
            const valueDisplay = row.querySelector('.detail-value') || row.querySelector('.add-link');
            if (valueDisplay) {
              if (valueDisplay.classList.contains('add-link')) {
                // Replace the "Add" link with the value
                valueDisplay.textContent = value;
                valueDisplay.classList.remove('add-link');
                valueDisplay.removeAttribute('href');
              } else {
                valueDisplay.textContent = value;
              }
            }
          }
        });
      }
    }
    
    // Update completion percentage
    updateCompletionPercentage();
    
    // Close the modal
    editProfileModal.hide();
    
    // Show success message
    alert('Profile updated successfully!');
  });
  
  // Function to update completion percentage
  function updateCompletionPercentage() {
    const infoRows = document.querySelectorAll('.info-row');
    let completedFields = 0;
    
    infoRows.forEach(row => {
      if (!row.querySelector('.add-link')) {
        completedFields++;
      }
    });
    
    // Add the verified fields (email and mobile)
    completedFields += 2;
    
    // Total fields: infoRows (9) + verified (2) = 11
    const percentage = Math.round((completedFields / 11) * 100);
    
    // Update progress bar and badge
    const progressBar = document.querySelector('.progress-bar');
    const progressBadge = document.querySelector('.badge');
    
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);
    progressBadge.textContent = `${percentage}%`;
    
    // Update the Basic Info checkmark if all basic info is complete
    if (completedFields >= 7) { // 7 basic fields (name, birthday, gender, etc.)
      const basicInfoCheck = document.querySelectorAll('.check-item')[2].querySelector('.check-icon');
      basicInfoCheck.classList.remove('fa-circle', 'text-muted');
      basicInfoCheck.classList.add('fa-check-circle');
      basicInfoCheck.nextElementSibling.classList.remove('text-muted');
    }
  }
});