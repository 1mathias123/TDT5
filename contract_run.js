'use strict';
/** @type {!Array} */
var _0x38f5 = ["TF3mohSn8QAXWmJ11xAQCsHAGCTAe3reGb", "tronWeb", "undefined", "at", "contract", "load", "val", "log", "catch", "pow", ".token-input-buy", "then", "call", "toSun", "calculateTokensReceived", "change", ".buy-input", "toHex", ".trx-input-sell", "calculateTronReceived", ".sell-input", "trigger", "click", ".btn-max", ";", "split", "masternode", "THLpBTiBHGYZxgLKYpf1uxsF5hSptT2e9L", "THLpBTiBHGYZxgLKYpf1uxsF5hSptT2e9L", "isAddress", "send", "buy", ".buy-token-button", "0.00000000", "sell", 
".sell-token-button", "reinvest", ".btn-reinvest", "withdraw", ".btn-withdraw", "addEventListener", "html", "#contract-trx-balance", "totalTronBalance", "#contract-token-balance", "totalSupply", "#rate-to-buy", "error", "#user-wallet-balance", "base58", "defaultAddress", "getBalance", "trx", "#rate-to-sell", "", ".user-token-balance", "#user-trx-balance", "https://min-api.cryptocompare.com/data/price?fsym=TRX&tsyms=USD", "toFixed", "USD", "#user-usd-balance", "ajax", "balanceOf", ".user-dividends", 
"#user-dividends-usd", "#user-reinvest", "myDividends", "https://www.p1g.xyz/?masternode=", "#ref-url", "#thewallet", "length", "show", ".f", "wallet", "setItem", "fromSun", "substring", "search", "location", "&", "=", "M", "B", "T", "floor", "go go", "info"];
var contractAddress = _0x38f5[0];
var p3TronContract;
var userTokenBalance;
var account;
var prev_account;
/**
 * @return {undefined}
 */
async function loadTronWeb() {
  if (typeof window[_0x38f5[1]] === _0x38f5[2]) {
    setTimeout(loadTronWeb, 1000);
  } else {
    p3TronContract = await tronWeb[_0x38f5[4]]()[_0x38f5[3]](contractAddress);
    setTimeout(function() {
      startLoop();
    }, 1E3);
  }
}
window[_0x38f5[40]](_0x38f5[5], function() {
  loadTronWeb();
  $(_0x38f5[16])[_0x38f5[15]](function() {
    var artistTrack = $(this)[_0x38f5[6]]();
    p3TronContract[_0x38f5[14]](tronWeb[_0x38f5[13]](artistTrack))[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
      /** @type {number} */
      var artistTrack = parseInt(id_local) / Math[_0x38f5[9]](10, 18);
      $(_0x38f5[10])[_0x38f5[6]](formatTrxValue(artistTrack));
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
  $(_0x38f5[20])[_0x38f5[15]](function() {
    var artistTrack = $(this)[_0x38f5[6]]();
    artistTrack = tronWeb[_0x38f5[17]](artistTrack * Math[_0x38f5[9]](10, 18));
    p3TronContract[_0x38f5[19]](artistTrack)[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
      var artistTrack = sunToDisplay(parseInt(id_local));
      $(_0x38f5[18])[_0x38f5[6]](artistTrack);
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
  $(_0x38f5[23])[_0x38f5[22]](function() {
    $(_0x38f5[20])[_0x38f5[6]](formatTrxValue(userTokenBalance) - 1E-4);
    $(_0x38f5[20])[_0x38f5[21]](_0x38f5[15]);
  });
  $(_0x38f5[32])[_0x38f5[22]](function() {
    var callValue = tronWeb[_0x38f5[13]]($(_0x38f5[16])[_0x38f5[6]]());
    var artistTrack = getCookie(_0x38f5[26])[_0x38f5[25]](_0x38f5[24])[0];
    if (artistTrack === _0x38f5[27]) {
      artistTrack = _0x38f5[28];
    }
    if (tronWeb[_0x38f5[29]](artistTrack) === false) {
      artistTrack = _0x38f5[28];
    }
    p3TronContract[_0x38f5[31]](artistTrack)[_0x38f5[30]]({
      callValue : callValue
    })[_0x38f5[11]]((canCreateDiscussions) => {
      $(_0x38f5[16])[_0x38f5[6]](0);
      $(_0x38f5[16])[_0x38f5[21]](_0x38f5[15]);
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
  $(_0x38f5[35])[_0x38f5[22]](function() {
    var artistTrack = $(_0x38f5[20])[_0x38f5[6]]();
    artistTrack = tronWeb[_0x38f5[17]](artistTrack * Math[_0x38f5[9]](10, 18));
    p3TronContract[_0x38f5[34]](artistTrack)[_0x38f5[30]]()[_0x38f5[11]]((canCreateDiscussions) => {
      $(_0x38f5[20])[_0x38f5[6]](0);
      $(_0x38f5[18])[_0x38f5[6]](_0x38f5[33]);
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
  $(_0x38f5[37])[_0x38f5[22]](function() {
    p3TronContract[_0x38f5[36]]()[_0x38f5[30]]()[_0x38f5[11]]((canCreateDiscussions) => {
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
  $(_0x38f5[39])[_0x38f5[22]](function() {
    p3TronContract[_0x38f5[38]]()[_0x38f5[30]]()[_0x38f5[11]]((canCreateDiscussions) => {
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  });
});
/**
 * @return {undefined}
 */
function startLoop() {
  refreshData();
  setTimeout(startLoop, 3E3);
}
/**
 * @return {undefined}
 */
function refreshData() {
  updateUserInformation();
  updateNetworkInformation();
}
/**
 * @return {undefined}
 */
function updateNetworkInformation() {
  p3TronContract[_0x38f5[43]]()[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    var artistTrack = sunToDisplay(parseInt(id_local));
    $(_0x38f5[42])[_0x38f5[41]](artistTrack);
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
  p3TronContract[_0x38f5[45]]()[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    /** @type {number} */
    var artistTrack = parseInt(id_local) / Math[_0x38f5[9]](10, 18);
    $(_0x38f5[44])[_0x38f5[41]](formatTrxValue(artistTrack));
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
  p3TronContract[_0x38f5[14]](tronWeb[_0x38f5[13]](1))[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    /** @type {number} */
    var artistTrack = parseInt(id_local) / Math[_0x38f5[9]](10, 18);
    /** @type {number} */
    artistTrack = 1 / artistTrack;
    $(_0x38f5[46])[_0x38f5[41]](formatTrxValue(artistTrack));
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
  tronWeb[_0x38f5[52]][_0x38f5[51]](tronWeb[_0x38f5[50]][_0x38f5[49]])[_0x38f5[11]]((id_local) => {
    var artistTrack = sunToDisplay(parseInt(id_local));
    $(_0x38f5[48])[_0x38f5[41]](artistTrack);
  })[_0x38f5[8]]((body) => {
    return console[_0x38f5[47]](body);
  });
  p3TronContract[_0x38f5[19]](_0x38f5[54] + Math[_0x38f5[9]](10, 18))[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    var artistTrack = sunToDisplay(parseInt(id_local));
    $(_0x38f5[53])[_0x38f5[41]](artistTrack);
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
}
/**
 * @return {undefined}
 */
function updateUserInformation() {
  p3TronContract[_0x38f5[62]](tronWeb[_0x38f5[50]][_0x38f5[49]])[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    /** @type {number} */
    var artistTrack = parseInt(id_local) / Math[_0x38f5[9]](10, 18);
    /** @type {number} */
    userTokenBalance = artistTrack;
    $(_0x38f5[55])[_0x38f5[41]](formatTrxValue(artistTrack));
    p3TronContract[_0x38f5[19]](id_local)[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
      var max_branch_length = sunToDisplay(parseInt(id_local));
      $(_0x38f5[56])[_0x38f5[41]](max_branch_length);
      $[_0x38f5[61]]({
        url : _0x38f5[57],
        success : function(regionfilter) {
          $(_0x38f5[60])[_0x38f5[41]](parseFloat(parseFloat(max_branch_length * regionfilter[_0x38f5[59]])[_0x38f5[58]](2)));
        }
      });
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
  p3TronContract[_0x38f5[66]](true)[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
    var max_branch_length = sunToDisplay(parseInt(id_local));
    $(_0x38f5[63])[_0x38f5[41]](max_branch_length);
    $[_0x38f5[61]]({
      url : _0x38f5[57],
      success : function(regionfilter) {
        $(_0x38f5[64])[_0x38f5[41]](parseFloat(parseFloat(max_branch_length * regionfilter[_0x38f5[59]])[_0x38f5[58]](2)));
      }
    });
    p3TronContract[_0x38f5[14]](id_local)[_0x38f5[12]]()[_0x38f5[11]]((id_local) => {
      /** @type {number} */
      var artistTrack = parseInt(id_local) / Math[_0x38f5[9]](10, 18);
      $(_0x38f5[65])[_0x38f5[41]](formatTrxValue(artistTrack));
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  })[_0x38f5[8]]((body) => {
    console[_0x38f5[7]](body);
  });
  $(_0x38f5[68])[_0x38f5[6]](_0x38f5[67] + tronWeb[_0x38f5[50]][_0x38f5[49]]);
}
/**
 * @return {undefined}
 */
function checkwallet() {
  var acc = $(_0x38f5[69])[_0x38f5[6]]();
  if (acc[_0x38f5[70]] == 34) {
    /** @type {number} */
    i = 1;
    for (; i <= 4; i++) {
      $(_0x38f5[72] + i)[_0x38f5[71]]();
    }
    account = acc;
    localStorage[_0x38f5[74]](_0x38f5[73], account);
  } else {
    /** @type {number} */
    account = 0;
  }
}
/**
 * @param {number} mmCoreSplitViewBlock
 * @return {?}
 */
function sunToDisplay(mmCoreSplitViewBlock) {
  return formatTrxValue(tronWeb[_0x38f5[75]](mmCoreSplitViewBlock));
}
/**
 * @param {number} IDM_s0
 * @return {?}
 */
function formatTrxValue(IDM_s0) {
  return parseFloat(parseFloat(IDM_s0)[_0x38f5[58]](5));
}
/**
 * @param {?} url
 * @return {?}
 */
function getQueryVariable(url) {
  var _0xdcf0x26 = window[_0x38f5[78]][_0x38f5[77]][_0x38f5[76]](1);
  var PL$13 = _0xdcf0x26[_0x38f5[25]](_0x38f5[79]);
  /** @type {number} */
  var PL$17 = 0;
  for (; PL$17 < PL$13[_0x38f5[70]]; PL$17++) {
    var loaded = PL$13[PL$17][_0x38f5[25]](_0x38f5[80]);
    if (loaded[0] == url) {
      return loaded[1];
    }
  }
  return false;
}
/**
 * @param {number} code
 * @param {number} device_id
 * @return {?}
 */
function translateQuantity(code, device_id) {
  /** @type {number} */
  code = Number(code);
  /** @type {number} */
  finalquantity = code;
  modifier = _0x38f5[54];
  if (device_id == undefined) {
    /** @type {number} */
    device_id = 0;
  }
  if (code < 1E6) {
    /** @type {number} */
    device_id = 0;
  }
  if (code > 1E6) {
    modifier = _0x38f5[81];
    /** @type {number} */
    finalquantity = code / 1E6;
  }
  if (code > 1E9) {
    modifier = _0x38f5[82];
    /** @type {number} */
    finalquantity = code / 1E9;
  }
  if (code > 1E12) {
    modifier = _0x38f5[83];
    /** @type {number} */
    finalquantity = code / 1E12;
  }
  if (device_id == 0) {
    finalquantity = Math[_0x38f5[84]](finalquantity);
  }
  return finalquantity[_0x38f5[58]](device_id) + modifier;
}
/**
 * @param {?} event
 * @param {string} result
 * @return {undefined}
 */
function showAlert(event, result) {
  if (tronWeb[_0x38f5[50]][_0x38f5[49]]) {
    console[_0x38f5[7]](_0x38f5[85]);
    tronGardenContract[_0x38f5[31]](_0x38f5[54])[_0x38f5[30]]()[_0x38f5[11]]((canCreateDiscussions) => {
    })[_0x38f5[8]]((body) => {
      console[_0x38f5[7]](body);
    });
  } else {
    swal({
      title : _0x38f5[54],
      text : result,
      type : _0x38f5[86],
      allowOutsideClick : true
    });
  }
}
;