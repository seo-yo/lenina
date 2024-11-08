// 썸네일 이미지 엑박일경우 기본값 설정
$(window).on("load", function () {
  $(".thumbnail img, img.thumbImage, img.bigImage").each(function ($i, $item) {
    var $img = new Image();
    $img.onerror = function () {
      $item.src = "//img.echosting.cafe24.com/thumb/img_product_big.gif";
    };
    $img.src = this.src;
  });
});

$(function () {
  //Secret Sale event
  UrlIndexOfCheck();

  function UrlIndexOfCheck() {
    const urlPathName = window.location.pathname;

    //70%
    if (urlPathName.indexOf("/70/125/") != -1) {
      textBlock();
      console.log("70%");
    }

    //70 안에 70
    if (urlPathName.indexOf("/70/123/") != -1) {
      textBlock();
      console.log("70% in 70%");
    }

    //70 안에 60
    if (urlPathName.indexOf("/60/122/") != -1) {
      textBlock();
      console.log("60%");
    }

    //50
    if (urlPathName.indexOf("/50/126/") != -1) {
      textBlock();
      console.log("50%");
    }

    //50 안에 50
    if (urlPathName.indexOf("/50/121/") != -1) {
      textBlock();
      console.log("50% in 50%");
    }

    //50 안에 40
    if (urlPathName.indexOf("/40/120/") != -1) {
      textBlock();
      console.log("40%");
    }

    //30
    if (urlPathName.indexOf("/30/127/") != -1) {
      textBlock();
      console.log("30%");
    }

    //30 안에 30
    if (urlPathName.indexOf("/30/119/") != -1) {
      textBlock();
      console.log("30% in 30%");
    }

    //30 안에 20
    if (urlPathName.indexOf("/20/118/") != -1) {
      textBlock();
      console.log("20%");
    }

    //30 안에 15
    if (urlPathName.indexOf("/15/117/") != -1) {
      textBlock();
      console.log("15%");
    }

    //30 안에 10
    if (urlPathName.indexOf("/10/116/") != -1) {
      textBlock();
      console.log("10%");
    }

    function textBlock() {
      $(".secretSaleText").css("display", "block");
    }
  }

  // 토글
  $("div.eToggle .title").on("click", function () {
    var toggle = $(this).parent(".eToggle");
    if (toggle.hasClass("disable") == false) {
      $(this).parent(".eToggle").toggleClass("selected");
    }
  });

  $("dl.eToggle dt").on("click", function () {
    $(this).toggleClass("selected");
    $(this).next("dd").toggleClass("selected");
  });

  //장바구니 페이지 수량폼 Type 변경
  $('[id^="quantity"]').each(function () {
    $(this).get(0).type = "tel";
  });

  // 모바일에서 공급사 테이블 th 강제조절
  $(".xans-mall-supplyinfo, .supplyInfo")
    .find("table > colgroup")
    .find("col")
    .eq(0)
    .width(98);
  $(".xans-mall-supplyinfo, .supplyInfo")
    .find("th, td")
    .css({ padding: "13px 10px 12px" });

  /**
   *  메인카테고리 toggle
   */
  $(".xans-product-listmain h2").on("click", function () {
    var bClosed = !!$(this).data("is_closed");
    var sUrl;
    if (bClosed) {
      sUrl =
        "//img.echosting.cafe24.com/skin/mobile_ko_KR/layout/bg_title_close.gif";
    } else {
      sUrl =
        "//img.echosting.cafe24.com/skin/mobile_ko_KR/layout/bg_title_open.gif";
    }
    $(this).css("background-image", 'url("' + sUrl + '")');
    $(this).siblings().toggle();
    $(this).parent().find("div.ec-base-paginate").toggle();
    $(this).parent().next("div.xans-product-listmore").toggle();
    $(this).data("is_closed", !bClosed);
  });

  /**
   *  상단탑버튼
   */
  var globalTopBtnScrollFunc = function () {
    // 탑버튼 관련변수
    var $btnTop = $("#btnTop");

    $(window).on("scroll", function () {
      try {
        var iCurScrollPos = $(this).scrollTop();

        if (iCurScrollPos > $(this).height() / 2) {
          $btnTop.fadeIn("fast");
        } else {
          $btnTop.fadeOut("fast");
        }
      } catch (e) {}
    });
  };

  /**
   *  구매버튼
   */
  var globalBuyBtnScrollFunc = function () {
    // 구매버튼 관련변수
    var sFixId =
        $("#orderFixItem").length > 0 ? "orderFixItem" : "fixedActionButton",
      $area = $("#orderFixArea"),
      $item = $("#" + sFixId + "").not($area);

    $(window).on("scroll", function () {
      try {
        // 구매버튼 관련변수
        var iCurrentHeightPos = $(this).scrollTop() + $(this).height(),
          iButtonHeightPos = $item.offset().top;

        if (
          iCurrentHeightPos > iButtonHeightPos ||
          iButtonHeightPos < $(this).scrollTop() + $item.height()
        ) {
          if (iButtonHeightPos < $(this).scrollTop() - $item.height()) {
            $area.fadeIn("fast");
          } else {
            $area.hide();
          }
        } else {
          $area.fadeIn("fast");
        }
      } catch (e) {}
    });
  };

  globalTopBtnScrollFunc();
  globalBuyBtnScrollFunc();
});

// 공통레이어팝업 오픈
var globalLayerOpenFunc = function (_this) {
  this.id = $(_this).data("id");
  this.param = $(_this).data("param");
  this.basketType = $("#basket_type").val();
  this.url = $(_this).data("url");
  this.layerId = "ec_temp_mobile_layer";
  this.layerIframeId = "ec_temp_mobile_iframe_layer";

  var _this = this;

  function paramSetUrl() {
    if (this.param) {
      // if isset param
    } else {
      this.url = this.basketType
        ? this.url + "?basket_type=" + this.basketType
        : this.url;
    }
  }

  if (this.url) {
    window.ecScrollTop = $(window).scrollTop();
    $.ajax({
      url: this.url,
      success: function (data) {
        if (data.indexOf("404 페이지 없음") == -1) {
          // 있다면 삭제
          try {
            $(_this).remove();
          } catch (e) {}

          var $layer = $("<div>", {
            html: $("<iframe>", {
              src: _this.url,
              id: _this.layerIframeId,
              scrolling: "auto",
              css: {
                width: "100%",
                height: "100%",
                overflowY: "auto",
                border: 0,
              },
            }),
            id: _this.layerId,
            css: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: $(window).height(),
              "z-index": 9999,
            },
          });

          $("body").append($layer);
          $("html, body").css({
            overflowY: "hidden",
            height: "100%",
            width: "100%",
          });
          $("#" + this.layerId).show();
        }
      },
    });
  }
};

// 공통레이어팝업 닫기
var globalLayerCloseFunc = function () {
  this.layerId = "ec_temp_mobile_layer";

  if (window.parent === window) self.close();
  else {
    parent
      .$("html, body")
      .css({ overflowY: "auto", height: "auto", width: "100%" });
    parent.$("html, body").scrollTop(parent.window.ecScrollTop);
    parent.$("#" + this.layerId).remove();
  }
};

/**
 * document.location.href split
 * return array Param
 */
var getQueryString = function (sKey) {
  var sQueryString = document.location.search.substring(1);
  var aParam = {};

  if (sQueryString) {
    var aFields = sQueryString.split("&");
    var aField = [];
    for (var i = 0; i < aFields.length; i++) {
      aField = aFields[i].split("=");
      aParam[aField[0]] = aField[1];
    }
  }

  aParam.page = aParam.page ? aParam.page : 1;
  return sKey ? aParam[sKey] : aParam;
};

// PC버전 바로 가기
var isPCver = function () {
  var sUrl = window.location.hostname;
  var aTemp = sUrl.split(".");

  var pattern = /^(mobile[\-]{2}shop[0-9]+)$/;

  if (aTemp[0] == "m" || aTemp[0] == "skin-mobile" || aTemp[0] == "mobile") {
    sUrl = sUrl.replace(aTemp[0] + ".", "");
  } else if (pattern.test(aTemp[0]) === true) {
    var aExplode = aTemp[0].split("--");
    aTemp[0] = aExplode[1];
    sUrl = aTemp.join(".");
  }
  window.location.href = "//" + sUrl + "/?is_pcver=T";
};

/* 도움말 */
$("body").on("click", ".ec-base-tooltip-area .eTip", function (e) {
  var findArea = $($(this).parents(".ec-base-tooltip-area"));
  var findTarget = $($(this).siblings(".ec-base-tooltip"));
  var findTooltip = $(".ec-base-tooltip");
  $(".ec-base-tooltip-area").removeClass("show");
  $(this).parents(".ec-base-tooltip-area").first().addClass("show");
  findTooltip.hide();
  findTarget.show();
  e.preventDefault();
});

$("body").on("click", ".ec-base-tooltip-area .eClose", function (e) {
  var findTarget = $(this).parents(".ec-base-tooltip").first();
  $(".ec-base-tooltip-area").removeClass("show");
  findTarget.hide();
  e.preventDefault();
});

$(".ec-base-tooltip-area")
  .find("input")
  .on("focusout", function () {
    var findTarget = $(this)
      .parents(".ec-base-tooltip-area")
      .find(".ec-base-tooltip");
    $(".ec-base-tooltip-area").removeClass("show");
    findTarget.hide();
  });

$(document).ready(function () {
  //placeholder
  $(".ePlaceholder input, .ePlaceholder textarea").each(function (i) {
    var placeholderName = $(this).parents().attr("title"); //title에 입력된 문구를 placeholder로 넣어줍니다.
    $(this).attr("placeholder", placeholderName);
  });
  /* placeholder ie8, ie9 */ //placeholder는 IE8,9에서 지원하지 않아 아래 코드가 필요합니다.
  $.fn.extend({
    placeholder: function () {
      //IE 8 버전에는 hasPlaceholderSupport() 값이 false를 리턴
      if (hasPlaceholderSupport() === true) {
        return this;
      }
      //hasPlaceholderSupport() 값이 false 일 경우 아래 코드를 실행
      return this.each(function () {
        var findThis = $(this);
        var sPlaceholder = findThis.attr("placeholder");
        if (!sPlaceholder) {
          return;
        }
        findThis.wrap('<label class="ePlaceholder" />');
        var sDisplayPlaceHolder = $(this).val() ? ' style="display:none;"' : "";
        findThis.before(
          "<span" + sDisplayPlaceHolder + ">" + sPlaceholder + "</span>"
        );
        this.onpropertychange = function (e) {
          e = event || e;
          if (e.propertyName == "value") {
            $(this).trigger("focusout");
          }
        };
        //공통 class
        var agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf("msie") != -1) {
          $(".ePlaceholder").css({ position: "relative" });
          $(".ePlaceholder span").css({
            position: "absolute",
            padding: "0 4px",
            color: "#878787",
          });
          $(".ePlaceholder label").css({ padding: "0" });
        }
      });
    },
  });

  $(":input[placeholder]").placeholder(); //placeholder() 함수를 호출

  //클릭하면 placeholder 숨김
  $("body").delegate(".ePlaceholder span", "click", function () {
    $(this).hide();
  });

  //input창 포커스 인 일때 placeholder 숨김
  $("body").delegate(".ePlaceholder :input", "focusin", function () {
    $(this).prev("span").hide();
  });

  //input창 포커스 아웃 일때 value 가 true 이면 숨김, false 이면 보여짐
  $("body").delegate(".ePlaceholder :input", "focusout", function () {
    if (this.value) {
      $(this).prev("span").hide();
    } else {
      $(this).prev("span").show();
    }
  });

  //input에 placeholder가 지원이 되면 true를 안되면 false를 리턴값으로 던져줌
  function hasPlaceholderSupport() {
    if ("placeholder" in document.createElement("input")) {
      return true;
    } else {
      return false;
    }
  }
});
