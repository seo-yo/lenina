window.CAFE24 = window.CAFE24 || {};
CAFE24.MANIFEST_CACHE_REVISION = "2404251303";
CAFE24.getDeprecatedNamespace = function (sDeprecatedNamespace, sSupersededNamespace) {
  var sNamespace = sSupersededNamespace ? sSupersededNamespace : sDeprecatedNamespace.replace(/^EC_/, "");
  return CAFE24[sNamespace];
};
CAFE24.FRONT_LANGUAGE_CODE = "ko_KR";
CAFE24.MOBILE = false;
CAFE24.MOBILE_DEVICE = false;
CAFE24.MOBILE_USE = true;
var EC_MOBILE = CAFE24.MOBILE;
var EC_MOBILE_DEVICE = CAFE24.MOBILE_DEVICE;
var EC_MOBILE_USE = CAFE24.MOBILE_USE;
CAFE24.SKIN_CODE = "skin5";
CAFE24.FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA = { common_member_id_crypt: "" };
var EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA = CAFE24.getDeprecatedNamespace("EC_FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA");
CAFE24.SDE_SHOP_NUM = 1;
CAFE24.SHOP = {
  getLanguage: function () {
    return "ko_KR";
  },
  getCurrency: function () {
    return "KRW";
  },
  getFlagCode: function () {
    return "KR";
  },
  getTimezone: function () {
    return "Asia/Seoul";
  },
  getDateFormat: function () {
    return "Y-m-d";
  },
  isMultiShop: function () {
    return false;
  },
  isDefaultShop: function () {
    return true;
  },
  isDefaultLanguageShop: function (sLanguageCode) {
    return SHOP.isDefaultShop() && SHOP.isLanguageShop(sLanguageCode);
  },
  isKR: function () {
    return true;
  },
  isUS: function () {
    return false;
  },
  isJP: function () {
    return false;
  },
  isCN: function () {
    return false;
  },
  isTW: function () {
    return false;
  },
  isES: function () {
    return false;
  },
  isPT: function () {
    return false;
  },
  isVN: function () {
    return false;
  },
  isPH: function () {
    return false;
  },
  getCountryAndLangMap: function () {
    return {
      KR: "ko_KR",
      US: "en_US",
      JP: "ja_JP",
      CN: "zh_CN",
      TW: "zh_TW",
      VN: "vi_VN",
      PH: "en_PH",
    };
  },
  isLanguageShop: function (sLanguageCode) {
    return sLanguageCode === "ko_KR";
  },
  getDefaultShopNo: function () {
    return 1;
  },
  getProductVer: function () {
    return 2;
  },
  isSDE: function () {
    return true;
  },
  isMode: function () {
    return true;
  },
  getModeName: function () {
    return true;
  },
  isMobileAdmin: function () {
    return false;
  },
  isNewProMode: function () {
    return false;
  },
  isExperienceMall: function () {
    return false;
  },
  isDcollection: function () {
    return false;
  },
  isYoutubeShops: function () {
    return false;
  },
  getYtShopsShopNo: function () {
    return 0;
  },
  getAdminID: function () {
    return "";
  },
  getMallID: function () {
    return "lenina";
  },
  getCurrencyFormat: function (sPriceTxt, bIsNumberFormat) {
    sPriceTxt = String(sPriceTxt);
    var aCurrencySymbol = ["", "\uc6d0", false];
    if (typeof CAFE24.SHOP_PRICE !== "undefined" && isNaN(sPriceTxt.replace(/[,]/gi, "")) === false && bIsNumberFormat === true) {
      // bIsNumberFormat 사용하려면 Ui(':libUipackCurrency')->plugin('Currency') 화폐 라이브러리 추가 필요
      sPriceTxt = CAFE24.SHOP_PRICE.toShopPrice(sPriceTxt.replace(/[,]/gi, ""), true, CAFE24.SDE_SHOP_NUM);
    }
    try {
      var sPlusMinusSign = sPriceTxt.toString().substr(0, 1);
      if (sPlusMinusSign === "-" || sPlusMinusSign === "+") {
        sPriceTxt = sPriceTxt.toString().substr(1);
        return sPlusMinusSign + aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
      } else {
        return aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
      }
    } catch (e) {
      return aCurrencySymbol[0] + sPriceTxt + aCurrencySymbol[1];
    }
  },
};
CAFE24.CURRENCY_INFO = {
  getOriginReferenceCurrency: function () {
    return "USD";
  },
  getCurrencyList: function (sCurrencyCode) {
    var aCurrencyList = {
      JPY: { currency_symbol: "&yen;", decimal_place: 0, round_method_type: "F" },
      VND: { currency_symbol: "&#8363;", decimal_place: 0, round_method_type: "F" },
      PHP: { currency_symbol: "&#8369;", decimal_place: 2, round_method_type: "R" },
      USD: { currency_symbol: "$", decimal_place: 2, round_method_type: "R" },
      CNY: { currency_symbol: "&yen;", decimal_place: 2, round_method_type: "R" },
      TWD: { currency_symbol: "NT$", decimal_place: 0, round_method_type: "F" },
      EUR: { currency_symbol: "\u20ac", decimal_place: 2, round_method_type: "R" },
      BRL: { currency_symbol: "R$", decimal_place: 2, round_method_type: "R" },
      AUD: { currency_symbol: "A$", decimal_place: 2, round_method_type: "R" },
      BHD: { currency_symbol: ".&#1583;.&#1576;", decimal_place: 3, round_method_type: "R" },
      BDT: { currency_symbol: "&#2547;", decimal_place: 2, round_method_type: "R" },
      GBP: { currency_symbol: "&pound;", decimal_place: 2, round_method_type: "R" },
      CAD: { currency_symbol: "C$", decimal_place: 2, round_method_type: "R" },
      CZK: { currency_symbol: "K&#269;", decimal_place: 2, round_method_type: "R" },
      DKK: { currency_symbol: "kr", decimal_place: 2, round_method_type: "R" },
      HKD: { currency_symbol: "HK$", decimal_place: 2, round_method_type: "R" },
      HUF: { currency_symbol: "Ft", decimal_place: 2, round_method_type: "R" },
      INR: { currency_symbol: "&#8377;", decimal_place: 2, round_method_type: "R" },
      IDR: { currency_symbol: "Rp", decimal_place: 0, round_method_type: "F" },
      ILS: { currency_symbol: "&#8362;", decimal_place: 2, round_method_type: "R" },
      JOD: { currency_symbol: " &#1583;&#1610;&#1606;&#1575;&#1585;", decimal_place: 3, round_method_type: "R" },
      KWD: { currency_symbol: "&#1583;&#1610;&#1606;&#1575;&#1585;", decimal_place: 3, round_method_type: "R" },
      MYR: { currency_symbol: "RM", decimal_place: 2, round_method_type: "R" },
      MXN: { currency_symbol: "Mex$", decimal_place: 2, round_method_type: "R" },
      NZD: { currency_symbol: "NZ$", decimal_place: 2, round_method_type: "R" },
      NOK: { currency_symbol: "kr", decimal_place: 2, round_method_type: "R" },
      PKR: { currency_symbol: "&#8360;", decimal_place: 2, round_method_type: "R" },
      PLN: { currency_symbol: "z\u0142", decimal_place: 2, round_method_type: "R" },
      RUB: { currency_symbol: "\u0440\u0443\u0431", decimal_place: 2, round_method_type: "R" },
      SAR: { currency_symbol: "&#65020;", decimal_place: 2, round_method_type: "R" },
      SGD: { currency_symbol: "S$", decimal_place: 2, round_method_type: "R" },
      ZAR: { currency_symbol: "R", decimal_place: 2, round_method_type: "R" },
      SEK: { currency_symbol: "kr", decimal_place: 2, round_method_type: "R" },
      CHF: { currency_symbol: "Fr", decimal_place: 2, round_method_type: "R" },
      THB: { currency_symbol: "&#3647;", decimal_place: 2, round_method_type: "R" },
      TRY: { currency_symbol: "TL", decimal_place: 2, round_method_type: "R" },
      AED: { currency_symbol: "&#1601;&#1604;&#1587;", decimal_place: 2, round_method_type: "R" },
    };
    return aCurrencyList[sCurrencyCode];
  },
  isUseReferenceCurrency: function () {
    return false;
  },
};
CAFE24.COMMON_UTIL = {
  convertSslForString: function (sString) {
    return sString.replace(/http:/gi, "");
  },
  convertSslForHtml: function (sHtml) {
    return sHtml.replace(/((?:src|href)\s*=\s*['"])http:(\/\/(?:[a-z0-9\-_\.]+)\/)/gi, "$1$2");
  },
  getProtocol: function () {
    return "https";
  },
  moveSsl: function () {
    if (CAFE24.COMMON_UTIL.getProtocol() === "http") {
      var oLocation = jQuery(window.location);
      var sUrl = "https://" + oLocation.attr("host") + oLocation.attr("pathname") + oLocation.attr("search");
      window.location.replace(sUrl);
    }
  },
  setEcCookie: function (sKey, sValue, iExpire) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + iExpire);
    var setValue = escape(sValue) + "; domain=." + CAFE24.GLOBAL_INFO.getBaseDomain() + "; path=/;expires=" + exdate.toUTCString();
    document.cookie = sKey + "=" + setValue;
  },
};
CAFE24.SHOP_LIB_INFO = {
  getBankInfo: function () {
    var oBankInfo = "";
    $.ajax({
      type: "GET",
      url: "/exec/front/Shop/Bankinfo",
      dataType: "json",
      async: false,
      success: function (oResponse) {
        oBankInfo = oResponse;
      },
    });
    return oBankInfo;
  },
};
var EC_SDE_SHOP_NUM = CAFE24.SDE_SHOP_NUM;
var SHOP = CAFE24.getDeprecatedNamespace("SHOP");
var EC_COMMON_UTIL = CAFE24.getDeprecatedNamespace("EC_COMMON_UTIL");
var EC_SHOP_LIB_INFO = CAFE24.getDeprecatedNamespace("EC_SHOP_LIB_INFO");
var EC_CURRENCY_INFO = CAFE24.getDeprecatedNamespace("EC_CURRENCY_INFO");
CAFE24.ROOT_DOMAIN = "cafe24.com";
CAFE24.API_DOMAIN = "cafe24api.com";
CAFE24.TRANSLATE_LOG_STATUS = "F";
CAFE24.GLOBAL_INFO = (function () {
  var oData = {
    base_domain: "lenina.cafe24.com",
    root_domain: "cafe24.com",
    api_domain: "cafe24api.com",
    is_global: false,
    is_global_standard: false,
    country_code: "KR",
    language_code: "ko_KR",
    admin_language_code: "ko_KR",
  };
  return {
    getBaseDomain: function () {
      return oData["base_domain"];
    },
    getRootDomain: function () {
      return oData["root_domain"];
    },
    getApiDomain: function () {
      return oData["api_domain"];
    },
    isGlobal: function () {
      return oData["is_global"];
    },
    isGlobalStandard: function () {
      return oData["is_global_standard"];
    },
    getCountryCode: function () {
      return oData["country_code"];
    },
    getLanguageCode: function () {
      return oData["language_code"];
    },
    getAdminLanguageCode: function () {
      return oData["admin_language_code"];
    },
  };
})();
var EC_ROOT_DOMAIN = CAFE24.ROOT_DOMAIN;
var EC_API_DOMAIN = CAFE24.API_DOMAIN;
var EC_TRANSLATE_LOG_STATUS = CAFE24.TRANSLATE_LOG_STATUS;
var EC_GLOBAL_INFO = CAFE24.getDeprecatedNamespace("EC_GLOBAL_INFO");
CAFE24.AVAILABLE_LANGUAGE = ["ko_KR", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT", "vi_VN", "ja_JP", "en_PH"];
CAFE24.AVAILABLE_LANGUAGE_CODES = {
  ko_KR: "KOR",
  zh_CN: "CHN",
  en_US: "ENG",
  zh_TW: "TWN",
  es_ES: "ESP",
  pt_PT: "PRT",
  vi_VN: "VNM",
  ja_JP: "JPN",
  en_PH: "PHL",
};
var EC_AVAILABLE_LANGUAGE = CAFE24.AVAILABLE_LANGUAGE;
var EC_AVAILABLE_LANGUAGE_CODES = CAFE24.AVAILABLE_LANGUAGE_CODES;
CAFE24.GLOBAL_PRODUCT_LANGUAGE_CODES = {
  sClearanceCategoryCode: "",
  sManualLink: "//support.cafe24.com/hc/ko/articles/7739013909529",
  sHsCodePopupLink: "https://www.wcotradetools.org/en/harmonized-system",
  aCustomRegex: '"PHL" : "^[0-9]{8}[A-Z]?$"',
  sCountryCodeData: "kor",
  sEnglishExampleURlForGlobal: "",
  aReverseAddressCountryCode: ["VNM", "PHL"],
  aSizeGuideCountryAlign: '["US","UK","EU","KR","JP","CN"]',
  aIsSupportTran: ["ja_JP", "zh_CN", "zh_TW", "en_US", "vi_VN", "en_PH", "pt_PT", "es_ES"],
};
var EC_GLOBAL_PRODUCT_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_PRODUCT_LANGUAGE_CODES");
CAFE24.GLOBAL_ORDER_LANGUAGE_CODES = {
  aModifyOrderLanguage: { KR: "ko_KR", JP: "ja_JP", CN: "zh_CN", TW: "zh_TW", VN: "vi_VN", PH: "en_PH" },
  aUseIdCardKeyCountry: ["CN", "TW"],
  aLanguageWithCountryCode: {
    zh_CN: ["CN", "CHN", "HK", "HNK"],
    ja_JP: ["JP", "JPN"],
    zh_TW: ["TW", "TWN"],
    ko_KR: ["KR", "KOR"],
    vi_VN: ["VN", "VNM"],
    en_PH: ["PH", "PHL"],
  },
  aCheckDisplayRequiredIcon: ["ja_JP", "zh_CN", "zh_TW", "en_US", "vi_VN", "en_PH"],
  aSetReceiverName: {
    zh_CN: { sCountry: "CN", bUseLastName: true },
    zh_TW: { sCountry: "TW", bUseLastName: false },
    ja_JP: { sCountry: "JP", bUseLastName: true },
  },
  aSetDeferPaymethodLanguage: { ja_JP: "\uc77c\ubcf8", zh_CN: "\uc911\uad6d" },
  aUseDeferPaymethod: ["ja_JP", "zh_CN"],
  aCheckShippingCompanyAndPaymethod: ["ja_JP", "zh_CN"],
  aSetDeferPaymethodLanguageForShipping: { ja_JP: "\u65e5\u672c", zh_CN: "\uc911\uad6d" },
  aCheckStoreByPaymethod: ["ja_JP", "zh_CN"],
  aCheckIsEmailRequiredForJs: ["en_US", "zh_CN", "zh_TW", "ja_JP", "vi_VN", "en_PH"],
  aSetIdCardKeyCountryLanguage: { CN: "\uc911\uad6d\uc758", TW: "\ub300\ub9cc\uc758" },
  aReverseGlobalAddress: ["en_PH", "vi_VN", "PHL", "VNM", "VN", "PH"],
  aNoCheckZipCode: ["KOR", "JPN"],
  aNotPostCodeAPICountryList: ["en_US", "es_ES", "pt_PT", "en_PH"],
  aEnableSearchExchangeAddr: ["KR", "JP", "CN", "VN", "TW", "PH"],
  aDuplicatedBaseAddr: ["TW", "JP"],
  aReverseAddressCountryCode: ["VN", "PH"],
  aCheckZipCode: ["PHL", "en_PH", "PH"],
};
var EC_GLOBAL_ORDER_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_ORDER_LANGUAGE_CODES");
CAFE24.GLOBAL_MEMBER_LANGUAGE_CODES = {
  sAdminWebEditorLanguageCode: "ko",
  oNotAvailDecimalPointLanguages: ["ko_KR", "ja_JP", "zh_TW", "vi_VN"],
  oAddressCountryCode: { KOR: "ko_KR", JPN: "ja_JP", CHN: "zh_CN", TWN: "zh_TW", VNM: "vi_VN", PHL: "en_PH" },
};
var EC_GLOBAL_MEMBER_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_MEMBER_LANGUAGE_CODES");
CAFE24.GLOBAL_BOARD_LANGUAGE_CODES = {
  bUseLegacyBoard: true,
};
var EC_GLOBAL_BOARD_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_BOARD_LANGUAGE_CODES");
CAFE24.GLOBAL_MALL_LANGUAGE_CODES = {
  oDesign: {
    oDesignAddReplaceInfo: {
      group_id: "SKIN.ADD.ADMIN.DESIGNDETAIL",
      replacement: {
        KR: "KOREAN",
        US: "ENGLISH",
        JP: "JAPANESE",
        CN: "SIMPLIFIED.CHINESE",
        TW: "TRADITIONAL.CHINESE",
        ES: "SPANISH",
        PT: "PORTUGUESE",
        PH: "ENGLISH",
      },
    },
    oDesignDetailLanguageCountryMap: { KR: "ko_KR", JP: "ja_JP", CN: "zh_CN", TW: "zh_TW", US: "en_US", ES: "es_ES", PT: "pt_PT", PH: "en_PH" },
    oSmartDesignSwitchTipLink: {
      edibot: {
        img: "//img.echosting.cafe24.com/smartAdmin/img/design/img_editor_dnd.png",
        link: "//ecsupport.cafe24.com/board/free/list.html?board_act=list&board_no=12&category_no=9&cate_no=9",
      },
      smart: { img: "//img.echosting.cafe24.com/smartAdmin/img/design/ko_KR/img_editor_smart.png", link: "//sdsupport.cafe24.com" },
    },
    oSmartDesignDecoShopList: ["ko_KR", "ja_JP", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT"],
    oSmartDesignDecoMultilingual: {
      list: {
        ko_KR: "KOREAN",
        en_US: "ENGLISH",
        ja_JP: "JAPANESE",
        zh_CN: "SIMPLIFIED.CHINESE",
        zh_TW: "TRADITIONAL.CHINESE",
        es_ES: "SPANISH",
        pt_PT: "PORTUGUESE",
        vi_VN: "VIETNAMESE",
      },
      group_id: "EDITOR.LAYER.EDITING.DECO",
    },
    aSmartDesignModuleShopList: ["ko_KR", "ja_JP", "zh_CN", "en_US", "zh_TW", "es_ES", "pt_PT"],
  },
  oStore: {
    oMultiShopCurrencyInfo: {
      en_US: { currency: "USD" },
      zh_CN: { currency: "USD", sub_currency: "CNY" },
      ja_JP: { currency: "JPY" },
      zh_TW: { currency: "TWD" },
      es_ES: { currency: "EUR" },
      pt_PT: { currency: "EUR" },
      ko_KR: { currency: "KRW" },
      vi_VN: { currency: "VND" },
      en_PH: { currency: "PHP" },
    },
    oBrowserRedirectLanguage: {
      ko: { primary: "ko_KR", secondary: "en_US" },
      en: {
        detail: {
          "en-ph": { primary: "en_PH", secondary: "en_US" },
          "en-us": { primary: "en_US", secondary: "es_ES" },
          default: { primary: "en_US", secondary: "es_ES" },
        },
      },
      ja: { primary: "ja_JP", secondary: "en_US" },
      zh: {
        detail: {
          "zh-cn": { primary: "zh_CN", secondary: "en_US" },
          "zh-tw": { primary: "zh_TW", secondary: "zh_CN" },
          default: { primary: "en_US", secondary: "ko_KR" },
        },
      },
      es: { primary: "es_ES", secondary: "en_US" },
      pt: { primary: "pt_PT", secondary: "en_US" },
      vi: { primary: "vi_VN", secondary: "en_US" },
      default: { primary: "en_US", secondary: "ko_KR" },
    },
    aChangeableLanguages: ["en_US", "ja_JP", "ko_KR"],
    aNoZipCodeLanguage: ["ko_KR", "ja_JP"],
  },
  oMobile: {
    sSmartWebAppFaqUrl: "https://support.cafe24.com/hc/ko/articles/8466586607641",
    sAmpFaqUrl: "https://ecsupport.cafe24.com/board/free/read.html?no=1864&board_no=5&category_no=13&cate_no=13&category_no=13&category_no=13",
  },
  oPromotion: {
    bQrCodeAvailable: true,
    bSnsMarketingAvailable: true,
  },
  oShippingReverseAddressLanguage: ["vi_VN", "en_PH"],
  oGlobalStandardSwitchHelpCodeLink: {
    "SH.DS": { link: "//serviceguide.cafe24shop.com/en_PH/SH.DS.html" },
    "PR.DS": { link: "//serviceguide.cafe24shop.com/en_PH/PR.DS.html" },
    "OR.SM.BO": { link: "//serviceguide.cafe24shop.com/en_PH/OR.SM.BO.html" },
    "DE.DS": { link: "//serviceguide.cafe24shop.com/en_PH/DE.DS.html" },
    "MB.DS": { link: "//serviceguide.cafe24shop.com/en_PH/MB.DS.html" },
    "PM.DS": { link: "//serviceguide.cafe24shop.com/en_PH/PM.DS.html" },
  },
  getAdminMainLocaleLanguage: function (sSkinLocaleCode) {
    var oLocaleData = [];
    var locale = "";
    var shopLangName = "";
    if (sSkinLocaleCode == "US") {
      locale = "en_US";
      shopLangName = "ENGLISH";
    } else if (sSkinLocaleCode == "JP") {
      locale = "ja_JP";
      shopLangName = "JAPANESE";
    } else if (sSkinLocaleCode == "CN") {
      locale = "zh_CN";
      shopLangName = "SIMPLIFIED.CHINESE";
    } else if (sSkinLocaleCode == "TW") {
      locale = "zh_TW";
      shopLangName = "TRADITIONAL.CHINESE";
    } else if (sSkinLocaleCode == "ES") {
      locale = "es_ES";
      shopLangName = "SPANISH";
    } else if (sSkinLocaleCode == "PT") {
      locale = "pt_PT";
      shopLangName = "PORTUGUESE";
    } else if (sSkinLocaleCode == "VN") {
      locale = "vi_VN";
      shopLangName = "VIETNAMESE";
    } else if (sSkinLocaleCode == "PH") {
      locale = "en_PH";
      shopLangName = "ENGLISH.PH";
    }
    oLocaleData["locale"] = locale;
    oLocaleData["shopLangName"] = shopLangName;
    return oLocaleData;
  },
};
var EC_GLOBAL_MALL_LANGUAGE_CODES = CAFE24.getDeprecatedNamespace("EC_GLOBAL_MALL_LANGUAGE_CODES");
CAFE24.GLOBAL_DATETIME_INFO = {
  oConstants: {
    STANDARD_DATE_REGEX: "/([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))/",
    IN_ZONE: "inZone",
    OUT_ZONE: "outZone",
    IN_FORMAT: "inFormat",
    OUT_FORMAT: "outFormat",
    IN_DATE_FORMAT: "inDateFormat",
    IN_TIME_FORMAT: "inTimeFormat",
    OUT_DATE_FORMAT: "outDateFormat",
    OUT_TIME_FORMAT: "outTimeFormat",
    IN_FORMAT_DATE_ONLY: 1,
    IN_FORMAT_TIME_ONLY: 2,
    IN_FORMAT_ALL: 3,
    OUT_FORMAT_DATE_ONLY: 1,
    OUT_FORMAT_TIME_ONLY: 2,
    OUT_FORMAT_ALL: 3,
    DATE_ONLY: "YYYY-MM-DD",
    TIME_ONLY: "HH:mm:ss",
    FULL_TIME: "YYYY-MM-DD HH:mm:ss",
    ISO_8601: "YYYY-MM-DD[T]HH:mm:ssZ",
    YEAR_ONLY: "YYYY",
    MONTH_ONLY: "MM",
    DAY_ONLY: "DD",
    WEEK_ONLY: "e",
    TIME_H_I_ONLY: "HH:mm",
    TIME_HOUR_ONLY: "HH",
    TIME_MINUTE_ONLY: "mm",
    POSTGRE_FULL_TIME: "YYYY-MM-DD HH24:MI:SS",
    POSTGRE_TIME_ONLY: " HH24:MI:SS",
    MICRO_SECOND_ONLY: "u",
    SEOUL: "Asia/Seoul",
    TOKYO: "Asia/Tokyo",
    SHANGHAI: "Asia/Shanghai",
    TAIPEI: "Asia/Taipei",
    HANOI: "Asia/Bangkok",
    LOS_ANGELES: "America/Los_Angeles",
    LISBON: "Europe/Lisbon",
    MADRID: "Europe/Madrid",
    SINGAPORE: "Asia/Singapore",
    UTC: "Etc/UTC",
    MAX_DATETIME: "9999-12-31 23:59:59",
  },
  oOptions: {
    inZone: "Asia/Seoul",
    inFormat: "YYYY-MM-DD HH:mm:ss",
    inDateFormat: "YYYY-MM-DD",
    inTimeFormat: "HH:mm:ss",
    outZone: "Asia/Seoul",
    outFormat: "YYYY-MM-DD HH:mm:ss",
    outDateFormat: "YYYY-MM-DD",
    outTimeFormat: "HH:mm:ss",
  },
  oPolicies: { shop: { outZone: "Asia/Seoul", outFormat: "YYYY-MM-DD HH:mm:ss", outDateFormat: "YYYY-MM-DD", outTimeFormat: "HH:mm:ss" } },
  sOverrideTimezone: "",
  sMomentNamespace: "EC_GLOBAL_MOMENT",
};
CAFE24.FRONT_JS_CONFIG_MANAGE = {
  sSmartBannerScriptUrl: "https://app4you.cafe24.com/SmartBanner/tunnel/scriptTags?vs=1563164396689206",
  sMallId: "lenina",
  sDefaultAppDomain: "https://app4you.cafe24.com",
  sWebLogOffFlag: "F",
  cdnUrl: "https://cafe24.poxo.com/ec01/lenina/EjglQcnyYl9oLKpqUS6wZin6q/1LcmnKVxVcY7+i5P9B5P7bhUPpN7/ryRrYmX0pei+jdUcZWxWKH3BCAFEC/Q==/_",
};
var EC_FRONT_JS_CONFIG_MANAGE = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_MANAGE");
CAFE24.FRONT_JS_CONFIG_MEMBER = { sAuthUrl: "https://i-pin.cafe24.com/certify/1.0/?action=auth" };
var EC_FRONT_JS_CONFIG_MEMBER = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_MEMBER");
CAFE24.FRONT_JS_CONFIG_SHOP = {
  aProductPurchaseInfo_2639: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2641: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2650: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2652: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2637: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2618: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2614: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2623: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2647: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2638: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2644: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2645: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2622: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2630: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2629: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2627: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2624: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2625: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2617: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2621: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2620: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2619: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2632: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2633: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2635: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2628: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2646: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2634: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2664: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2665: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2666: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2667: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2662: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2663: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2602: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2603: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
  aProductPurchaseInfo_2604: { bIsSuccess: true, sMessage: "", bReplaceLoginPage: false, bIsDisplayPurchaseButton: true },
};
var EC_FRONT_JS_CONFIG_SHOP = CAFE24.getDeprecatedNamespace("EC_FRONT_JS_CONFIG_SHOP");
typeof window.CAFE24 === "undefined" && (window.CAFE24 = {});
CAFE24.FRONTEND = { FW_MANIFEST_CACHE_REVISION: 2404251303, IS_WEB_VIEW: "F" };
CAFE24.ROUTE = {
  is_mobile: false,
  is_need_route: false,
  language_code: "ZZ",
  path: { origin: "/", result: "/", prefix: "" },
  shop_no: 0,
  skin_code: "default",
  support_language_list: {
    ar: "ar_EG",
    "ar-EG": "ar_EG",
    de: "de_DE",
    "de-DE": "de_DE",
    en: "en_US",
    "en-IN": "en_IN",
    "en-PH": "en_PH",
    "en-US": "en_US",
    es: "es_ES",
    "es-ES": "es_ES",
    hi: "hi_IN",
    "hi-IN": "hi_IN",
    id: "id_ID",
    "id-ID": "id_ID",
    it: "it_IT",
    "it-IT": "it_IT",
    ja: "ja_JP",
    "ja-JP": "ja_JP",
    ko: "ko_KR",
    "ko-KR": "ko_KR",
    ms: "ms_MY",
    "ms-MY": "ms_MY",
    pt: "pt_PT",
    "pt-PT": "pt_PT",
    ru: "ru_RU",
    "ru-RU": "ru_RU",
    th: "th_TH",
    "th-TH": "th_TH",
    tr: "tr_TR",
    "tr-TR": "tr_TR",
    vi: "vi_VN",
    "vi-VN": "vi_VN",
    zh: "zh_CN",
    "zh-CN": "zh_CN",
    "zh-HK": "zh_HK",
    "zh-MO": "zh_MO",
    "zh-SG": "zh_SG",
    "zh-TW": "zh_TW",
  },
};
