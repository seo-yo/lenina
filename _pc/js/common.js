/*
document.addEventListener('DOMContentLoaded', function() {
    // 화면이 그려지기 전에 실행될 코드 작성
    var currentPath = window.location.pathname;
	console.log('현재 페이지의 경로:', currentPath);
    if(currentPath == "/category/one-point-season/155/"){
       window.location.href = "https://lenina.kr/event/featured/2023/one_point_season.html";
    }
});
*/

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
});

//window popup script
function winPop(url) {
  window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */
function getQueryString(sKey) {
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
}

$(function () {
  // tab
  $.eTab = function (ul) {
    $(ul)
      .find("a")
      .on("click", function () {
        var _li = $(this).parent("li").addClass("selected").siblings().removeClass("selected"),
          _target = $(this).attr("href"),
          _siblings = "." + $(_target).attr("class");
        $(_target).show().siblings(_siblings).hide();
        return false;
      });
  };
  if (window.call_eTab) {
    call_eTab();
  }
});
