var CAFE24API = {
  instance: [],
  MALL_ID: "lenina",
  SHOP_NO: 1,
  init: function (appInfo) {
    if (typeof appInfo == "object") {
      if (appInfo.hasOwnProperty("client_id")) {
        var appKey = appInfo.client_id;
      }
    } else {
      var appKey = appInfo;
    }
    if (appKey) {
      if (!this.instance[appKey]) {
        CAFE24API.clientId = appKey;
        if (appInfo.hasOwnProperty("version")) {
          CAFE24API.version = appInfo.version;
        } else {
          if (CAFE24API.hasOwnProperty("version")) {
            delete CAFE24API.version;
          }
        }
        var copyObject = CAFE24API.constructor();
        for (var attr in CAFE24API) {
          if (CAFE24API.hasOwnProperty(attr)) {
            copyObject[attr] = CAFE24API[attr];
          }
        }
        this.instance[appKey] = copyObject;
      }
      return this.instance[appKey];
    }
  },
  initializeXhr: function () {
    try {
      return new XMLHttpRequest();
    } catch (error) {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    }
  },
  fullPath: function (url) {
    return "https://lenina.cafe24api.com" + url;
  },
  getLoginProvider: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback({ login: CAPP_ASYNC_METHODS.AppCommon.getLoginProvider() });
  },
  getCustomerProvider: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback({ login: CAPP_ASYNC_METHODS.AppCommon.getCustomerProvider() });
  },
  getMemberID: function (callback) {
    if (!CAPP_ASYNC_METHODS.IS_LOGIN) {
      callback(null);
    } else {
      callback(CAPP_ASYNC_METHODS.AppCommon.getMemberID());
    }
  },
  getEncryptedMemberId: function (client_id, callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, CAPP_ASYNC_METHODS.AppCommon.getEncryptedMemberId(client_id));
  },
  getMemberInfo: function (callback) {
    callback({ id: CAPP_ASYNC_METHODS.AppCommon.getMemberInfo() });
  },
  getCustomerIDInfo: function (callback) {
    if (!CAFE24API.__scopeErr(callback, "application")) {
      return;
    }
    callback(null, { id: CAPP_ASYNC_METHODS.AppCommon.getCustomerIDInfo() });
  },
  getCustomerInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, { customer: CAPP_ASYNC_METHODS.AppCommon.getCustomerInfo() });
  },
  getMileageInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, { mileage: CAPP_ASYNC_METHODS.AppCommon.getMileageInfo() });
  },
  getPointInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, { point: CAPP_ASYNC_METHODS.AppCommon.getPointInfo() });
  },
  getDepositInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, { deposit: CAPP_ASYNC_METHODS.AppCommon.getDepositInfo() });
  },
  getCreditInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "customer")) {
      return;
    }
    callback(null, { credit: CAPP_ASYNC_METHODS.AppCommon.getCreditInfo() });
  },
  getCartList: function (callback) {
    if (!CAFE24API.__scopeErr(callback, "personal")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.getCartList().then(function (data) {
      callback(null, { carts: data });
    });
  },
  getCartInfo: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "personal")) {
      return;
    }
    callback(null, { cart: CAPP_ASYNC_METHODS.AppCommon.getCartInfo() });
  },
  getCartItemList: function (callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    callback(null, { items: CAPP_ASYNC_METHODS.AppCommon.getCartItemList() });
  },
  getCartCount: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "personal")) {
      return;
    }
    callback(null, CAPP_ASYNC_METHODS.AppCommon.getCartCount());
  },
  getCouponCount: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "promotion")) {
      return;
    }
    callback(null, CAPP_ASYNC_METHODS.AppCommon.getCouponCount());
  },
  getWishCount: function (callback) {
    if (!CAFE24API.__chkValidSessionScope(callback, "personal")) {
      return;
    }
    callback(null, CAPP_ASYNC_METHODS.AppCommon.getWishCount());
  },
  getShopInfo: function (callback) {
    if (!CAFE24API.__scopeErr(callback, "store")) {
      return;
    }
    callback(null, { shop: CAPP_ASYNC_METHODS.AppCommon.getShopInfo() });
  },
  addCurrentProductToCart: function (mall_id, time, app_key, member_id, hmac, callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.addCurrentProductToCart(mall_id, time, app_key, member_id, hmac)
      .then(function (data) {
        callback(null, { cart: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error("422"), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  precreateOrder: function (mall_id, time, app_key, member_id, hmac, callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.precreateOrder(mall_id, time, app_key, member_id, hmac)
      .then(function (data) {
        callback(null, { order: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error("422"), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  getOrderItemList: function (start_date, end_date, order_status, page, count, order_id, callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.getOrderItemList(start_date, end_date, order_status, page, count, order_id)
      .then(function (data) {
        callback(null, { items: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  getOrderDetailInfo: function (shop_no, order_id, callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.getOrderDetailInfo(shop_no, order_id)
      .then(function (data) {
        callback(null, { orders: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  getClaimableItemList: function (order_id, customer_service_type, callback) {
    if (!CAFE24API.__scopeErr(callback, "order")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.getClaimableItemList(order_id, customer_service_type)
      .then(function (data) {
        callback(null, { items: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  emptyCart: function (basket_shipping_type, callback) {
    if (!CAFE24API.__scopeErr(callback, "personal")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.emptyCart(basket_shipping_type)
      .then(function (data) {
        callback(null, { result: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  deleteCartItems: function (basket_shipping_type, product_list, callback) {
    if (!CAFE24API.__scopeErr(callback, "personal")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.deleteCartItems(basket_shipping_type, product_list)
      .then(function (data) {
        callback(null, { result: data });
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  addCart: function (basket_type, prepaid_shipping_fee, product_list, callback) {
    if (!CAFE24API.__scopeErr(callback, "personal")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.addCart(basket_type, prepaid_shipping_fee, product_list)
      .then(function (data) {
        callback(null, data);
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  addBundleProductsCart: function (basket_type, prepaid_shipping_fee, product_list, callback) {
    if (!CAFE24API.__scopeErr(callback, "personal")) {
      return;
    }
    CAPP_ASYNC_METHODS.AppCommon.addBundleProductsCart(basket_type, prepaid_shipping_fee, product_list)
      .then(function (data) {
        callback(null, data);
      })
      .catch(function (data) {
        if (data) {
          callback(new Error("422"), { error: { code: data.code, message: data.message } });
        } else {
          callback(new Error(422), { error: { code: 422, message: "This sdk is not available on the current page" } });
        }
      });
  },
  get: function (url, callback) {
    return CAFE24API.complete("GET", url, this, null, callback);
  },
  post: function (url, params, callback) {
    return CAFE24API.complete("POST", url, this, params, callback);
  },
  put: function (url, params, callback) {
    return CAFE24API.complete("PUT", url, this, params, callback);
  },
  delete: function (url, callback) {
    return CAFE24API.complete("DELETE", url, this, null, callback);
  },
  complete: function (method, url, obj, params, callback) {
    var xhr = CAFE24API.sendXhr(method, url, obj, params, callback);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status <= 208) {
          callback(null, JSON.parse(xhr.responseText));
        } else {
          callback(new Error(xhr.status), JSON.parse(xhr.responseText));
        }
      }
    };
  },
  sendXhr: function (method, url, obj, params, callback) {
    if (method !== "POST") {
      var url = obj.fullPath(url);
    }
    var xhr = obj.initializeXhr();
    var queryVars = {};
    if (obj.clientId) queryVars["cafe24_app_key"] = obj.clientId;
    if (obj.version) queryVars["cafe24_api_version"] = obj.version;
    if (params === null) {
      var seperator = url.indexOf("?") == -1 ? "?" : "&";
      var queryString = [];
      for (var key in queryVars) {
        queryString.push(key + "=" + queryVars[key]);
      }
      if (queryString.length > 0) {
        url = url + seperator + queryString.join("&");
      }
    }
    xhr.open(method, url, true);
    if (typeof params == "object" && params !== null) {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
      for (var key in queryVars) {
        params[key] = queryVars[key];
      }
      params = "formData=" + JSON.stringify(params);
    }
    xhr.send(params || null);
    return xhr;
  },
  __sessionErr: function (callback) {
    callback(new Error(403), { error: { code: 403, message: "Failed to get session. Only available when log in." } });
  },
  __scopeErr: function (callback, scope) {
    if (typeof CAFE24.APPSCRIPT_SDK_DATA != "undefined" && jQuery.inArray(scope, CAFE24.APPSCRIPT_SDK_DATA) > -1) {
      return true;
    }
    callback(new Error(403), { error: { code: 403, message: "You do not have the necessary authority(scope) to use the SDK." } });
  },
  __chkValidSessionScope: function (callback, scope) {
    if (!CAPP_ASYNC_METHODS.IS_LOGIN) {
      CAFE24API.__sessionErr(callback);
      return false;
    }
    if (!CAFE24API.__scopeErr(callback, scope)) {
      return false;
    }
    return true;
  },
};
