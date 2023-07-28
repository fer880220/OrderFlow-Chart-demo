(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  font: 14px \"Century Gothic\", Futura, sans-serif;\n  margin: 5px;\n}\n\nh3{\ntext-align: center;\n}\n\n.button {\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n\n.overlay { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(1, 1, 1, 0.7);\n  transition: opacity 500ms;\n  visibility: hidden;\n  opacity: 0;\n  z-index:3;\n}\n\n.overlay:target{\n  visibility: visible;\n  opacity: 1;\n}\n\n.text-value{\n\tcolor: #607D8B;\n}\n\n#popupBody{\n\twidth: 46%;\n\tpadding: 2%;\t\n\tborder-radius: 15px;\n\t/*box-shadow: 0 0 5px #CCC;*/\n\tbackground: #EEEEEE;\n\tcolor: #2196F3;\n\tposition: relative;\n\tmargin: 2% auto;  \n\ttransition: all 5s ease-in-out;\n}\n\n#cerrar{\n\tposition: absolute;\ntop: 5px;\nright: 5px;\nfont-size: 16px;\nfotn-weight: bold;\ntext-decoration: none;\ncolor: #009688;\nbackground: #EEEEEE;\ntransition: all 200ms;\n}\n\n.selectClass{ \nminHeight: 40px; \ndisplay: flex;\nflexDirection: row;\nalignItems: center;\npaddingLeft: 10px;\n\n}\n\n.menuCSS3 ul {\n\tdisplay: inline-flex;\n\t/*padding: 0;\n\tmargin: 0;*/\n\tlist-style: none;\n\t\t\n}\n\n.menuCSS3 a {\n\tdisplay: block;\n\tpadding: 8px;/*2em;*/\n\tbackground-color: #607D8B ;\n\t/*text-decoration: none;*/\n\tcolor: #FFC107 ;\n}\n.menuCSS3 a:hover {\n\tbackground-color: #CC673B;\n}\n.menuCSS3 ul li ul {\n\tdisplay: none;\n}\n.menuCSS3 ul li a:hover + ul, .menuCSS3 ul li ul:hover {\n\tdisplay: block;\n}\n\n.los-de-derecha {\n\tright: 1px;\n\tfloat:right;\n\tbackground-color: rgba(0,0,0,0.9);\n\t\n}\n\n.los-de-arriba{\n\theight: 50%; width:100%;\n\tbackground-color: #607D8B ;\n\tcolor:white;\n\t/*font-weight: bold;*/\n\tfont-size: 20px;\n}\n\n.class-neutral{\n\tcolor: rgba(200,255,255, 1);\n}\n.class-buy{\n\tcolor: rgba(0,255,0, 1);\n}\n.class-sell{\n\tcolor: rgba(255,0,0, 1);\n}\n\nol, ul {\n  padding-left: 30px;\n}\n\n.board-row:after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\n.status {\n  margin-bottom: 10px;\n}\n\n.square {\n  background: #fff;\n  border: 1px solid #999;\n  float: left;\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 34px;\n  height: 34px;\n  margin-right: -1px;\n  margin-top: -1px;\n  padding: 0;\n  text-align: center;\n  width: 34px;\n}\n\n.square:focus {\n  outline: none;\n}\n\n.kbd-navigation .square:focus {\n  background: #ddd;\n}\n\n.game {\n  display: flex;\n  flex-direction: row;\n}\n\n.game-info {\n  margin-left: 20px;\n}\n\n#chartContainer{ width: 1000 ; height: 1000; background:rgba(255 , 0,0 , 0);} \n#chartContainer:-webkit-full-screen { width: 100%; height: 100%; }\n#chartContainer:-moz-full-screen { width: 100% ; height: 100%;}\n#chartContainer:-ms-full-screen { width: 100% ; height: 100%;}\n#chartContainer:-o-full-screen { width: 100% ; height: 100%;}\n.boton-rosa{color: rgba(200,0,0, 1);} \n/*#menu1{align: right}*/\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: updateChart, updateVolumeProfile, updateOrderFlow, _createChart, subscribeCrosshairMove, customizeVolumeProfile, customizeOrderFlow, customizeCandles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChart", function() { return updateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVolumeProfile", function() { return updateVolumeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrderFlow", function() { return updateOrderFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createChart", function() { return _createChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeCrosshairMove", function() { return subscribeCrosshairMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizeVolumeProfile", function() { return customizeVolumeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizeOrderFlow", function() { return customizeOrderFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizeCandles", function() { return customizeCandles; });
/* harmony import */ var lightweight_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightweight-charts */ "./node_modules/lightweight-charts/dist/lightweight-charts.esm.production.js");


function myTickMarkFormatter(timePoint, tickMarkType, locale) {
  var formatOptions = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  };
  /*switch (tickMarkType) {
  case 0: // Year 
          formatOptions.year = 'numeric';
          break;
  case 1: // Month 
          formatOptions.month = 'short';
  break;
  case 2: // DayOfMonth 
          formatOptions.day = 'numeric';
  break;
  case 3: // Time 
          formatOptions.hour12 = false;
          formatOptions.hour = '2-digit';
          formatOptions.minute = '2-digit';
  break;
      case 4: // TimeWithSeconds 
          formatOptions.hour12 = false;
          formatOptions.hour = '2-digit';
          formatOptions.minute = '2-digit';
          formatOptions.second = '2-digit';
          break;
  }*/

  var date = new Date(timePoint);
  return date.toLocaleString(locale, formatOptions); // from given date we should use only as UTC date or timestamp
  // but to format as locale date we can convert UTC date to local date
  // var localDateFromUtc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  //return localDateFromUtc.toLocaleString(locale, formatOptions);
}

const time_options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false
};
var chart, candleSeries, volumeSeries, volumeProfile, orderFlow;

function _createChart(parent) {
  chart = Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_0__["createChart"])(parent, {
    width: 1000,
    height: 500,
    layout: {
      backgroundColor: '#000000',
      textColor: 'rgba(255, 255, 255, 0.9)'
    },
    grid: {
      vertLines: {
        color: 'rgba(197, 203, 206, 0.5)'
      },
      horzLines: {
        color: 'rgba(197, 203, 206, 0.5)'
      }
    },
    crosshair: {
      mode: 0
    },
    priceScale: {
      borderColor: 'rgba(197, 203, 206, 0.8)',
      autoScale: true,
      position: 'right',
      drawTicks: false
    },
    timeScale: {
      borderColor: 'rgba(197, 203, 206, 0.8)',
      rightOffset: 12,
      barSpacing: 1,
      fixLeftEdge: true,
      lockVisibleTimeRangeOnResize: true,
      rightBarStaysOnScroll: true,
      borderVisible: false,
      visible: true,
      timeVisible: true,
      secondsVisible: false,
      tickMarkFormatter: myTickMarkFormatter
    },
    localization: {
      timeFormatter: tiemstamp => {
        return new Intl.DateTimeFormat('en-US', time_options).format(new Date(tiemstamp
        /*+ 18000000*/
        ));
      },
      priceFormatter: price => {
        if (price >= 5000) return price.toFixed(0);else if (price >= 100) return price.toFixed(2);
        return price.toFixed(4);
      }
    }
  });
  candleSeries = chart.addCandlestickSeries({
    //
    upColor: 'rgba(0, 150, 136, 0.8)',
    downColor: 'rgba(244,80 , 80, 1)',
    borderDownColor: 'rgba(244,80 , 80, 1)',
    borderUpColor: 'rgba(0, 150, 136, 0.8)',
    wickDownColor: 'rgba(244,80 , 80, 1)',
    wickUpColor: 'rgba(0, 150, 136, 0.8)',
    priceFormat: {
      type: 'custom',
      minMove: 0.00000001,
      formatter: price => parseFloat(price).toFixed(8)
    }
  });
  volumeSeries = chart.addHistogramSeries({
    color: '#26a69a',
    priceFormat: {
      type: 'volume'
    },
    priceScaleId: '',
    scaleMargins: {
      top: 0.8,
      bottom: 0
    }
  });
  volumeProfile = chart.addHistogramHSeries({
    mode: 'one',
    //'two' , 'delta'
    colorOne: 'rgba(150,150,150, 0.7)',
    colorUp: 'rgba(0, 200,0, 0.7)',
    colorDown: 'rgba(200,0,0,0.7)'
  });
  orderFlow = chart.addOrderFlowSeries({
    mode: 'one',
    //'two' , 'delta'
    colorOne: 'rgba(150,150,150, 0.7)',
    colorUp: 'rgba(0, 200,0, 0.7)',
    colorDown: 'rgba(200,0,0,0.7)'
  });
  return chart;
}
/**************************	INFORMACIÓN DE VOLUME-PROFILE*****************************************************
*    {   maxValue: 12312313 , // valor máximo de volumen
		 columnData:  [ {time: 123212312 , volumes:[ {price: 1.90 , volume:1231} , {price: 1.91 , volume:1231}, ... ] } ]
*    }
*
*************************************************************************************************************/

/*
options = {dataProvider, pair , timeFrom , timeTo , interval , volumeType}
*/


var dataProvider, mfullKlines;

function updateChart(options) {
  if (options.dataProvider === undefined || options.dataProvider === null) return;
  dataProvider = options.dataProvider;

  dataProvider.func = (klines, volume, mklines) => {
    candleSeries.setData(klines);
    volumeSeries.setData(volume);
    mfullKlines = mklines;
    chart.timeScale().fitContent();
  };

  dataProvider.getCandles(options.pair, options.timeFrom, options.timeTo, options.interval, options.volumeType, (kline, mkline, vol) => {
    candleSeries.update(kline);
    mfullKlines.set(kline.time, mkline);
    volumeSeries.update(vol[0]);
    console.log(kline);
  });
}
/*
options = {dataProvider, pair , timeFrom , timeTo , interval ,numberOfCandles , pipSize }
*/


var my_VProfileData;

function updateVolumeProfile(options) {
  if (options.dataProvider === undefined || options.dataProvider === null) return;
  dataProvider = options.dataProvider;

  dataProvider.func = (klines, histogramHData) => {
    my_VProfileData = histogramHData;
    Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_0__["set_histogramHData"])(histogramHData);
    volumeProfile.setData(klines);
  };

  dataProvider.getVolumeProfile(options.pair, options.timeFrom, options.timeTo, options.interval, options.numberOfCandles, options.pipSize);
}

function customizeVolumeProfile(options) {
  volumeProfile.applyOptions(options);
}

function updateOrderFlow(options, force_reset) {
  if (options.dataProvider === undefined || options.dataProvider === null) return;
  dataProvider = options.dataProvider;

  dataProvider.func = (klines, histogramHData, volume) => {
    orderFlow.applyOptions({
      'pipSize': dataProvider.computePipSize(options.pipSize)
    });
    my_VProfileData = histogramHData;
    Object(lightweight_charts__WEBPACK_IMPORTED_MODULE_0__["set_histogramHData"])(histogramHData);
    orderFlow.setData(klines);
    volumeSeries.setData(volume);
    chart.timeScale().fitContent();
  };

  dataProvider.getVolumeProfile(options.pair, options.timeFrom, options.timeTo, options.interval, options.numberOfCandles, options.pipSize, options.volMode, force_reset);
}

function customizeOrderFlow(options) {
  orderFlow.applyOptions(options);
}

function customizeCandles(options) {
  candleSeries.applyOptions(options);
  volumeSeries.applyOptions(options);
}


/*candleSeries.setMarkers([
  {
      time: '2019-04-11',
      position: 'aboveBar',
      color: 'green',
      shape: 'arrowDown',
  },
  {
      time: '2019-04-15',
      position: 'belowBar',
      color: 'red',
      shape: 'arrowUp',
      id: 'id3',
  },
  {
      time: '2019-05-21',
      position: 'belowBar',
      color: 'orange',
      shape: 'arrowUp',
      id: 'id4',
      text: 'example',
      size: 2,
  },
].map( i =>{ return {'time': Date.parse(i.time) , 'position':i.position , 'color': i.color ,'shape':i.shape ,'id':i.id 
                      ,'text':i.text , 'size':i.size  }} ));
*/

/*mkline = {open: , high: ,low:,close: , volume: , volBuy: , numbOfTrades: });*/

let my_volF = new lightweight_charts__WEBPACK_IMPORTED_MODULE_0__["VolumeFormatter"](2);

function subscribeCrosshairMove() {
  let candleInfoItem = document.getElementById('candleInfo'),
      volumenTotalItem = document.getElementById('volumenTotal'),
      volumenSellItem = document.getElementById('volumenSell'),
      volumenBuyItem = document.getElementById('volumenBuy'),
      percentSellItem = document.getElementById('percentSell'),
      percentBuyItem = document.getElementById('percentBuy'),
      volumenDeltaItem = document.getElementById('volumenDelta'),
      percentDeltaItem = document.getElementById('percentDelta'),
      numbTradesItem = document.getElementById('numbTrades'),
      volPerTradeItem = document.getElementById('volPerTrade');
  chart.subscribeCrosshairMove(function (param) {
    if (!param || !param.point || !mfullKlines) {
      return;
    }

    let kline = mfullKlines.get(param.time);

    if (kline) {
      let vsell = kline.volume - kline.volBuy;
      let delta = kline.volBuy - vsell;
      candleInfoItem.style.color = kline.close < kline.open ? 'rgba(255,0,0, 1)' : 'rgba(0,255,0, 1)';
      candleInfoItem.textContent = `o: ${kline.open} | c: ${kline.close} | h: ${kline.high} | l: ${kline.low}`;
      volumenTotalItem.textContent = `Vol: ${my_volF._internal_format(kline.volume)}`;
      volumenSellItem.textContent = ` | VSell: ${my_volF._internal_format(vsell)}`;
      volumenBuyItem.textContent = ` | VBuy: ${my_volF._internal_format(kline.volBuy)}`;
      percentSellItem.textContent = `%Vsell: ${(vsell / kline.volume * 100).toFixed(1)}%`;
      percentBuyItem.textContent = ` | %Vbuy: ${(kline.volBuy / kline.volume * 100).toFixed(1)}%`;
      volumenDeltaItem.textContent = `Delta: ${my_volF._internal_format(delta)}`;
      percentDeltaItem.style.color = volumenDeltaItem.style.color = delta < 0 ? 'rgba(255,0,0, 1)' : 'rgba(0,255,0, 1)';
      percentDeltaItem.textContent = ` | %Delta: ${(delta / kline.volume * 100).toFixed(1)}%`;
      numbTradesItem.textContent = `N. of Trades: ${kline.numbOfTrades}`;
      volPerTradeItem.textContent = `Vol/Trade: ${my_volF._internal_format(kline.volume / kline.numbOfTrades)}`; //console.log(`time: ${param.time} , price: ${candleSeries.coordinateToPrice(param.point.y)}`);
    }
  });
}

/***/ }),

/***/ "./src/dataProvider.js":
/*!*****************************!*\
  !*** ./src/dataProvider.js ***!
  \*****************************/
/*! exports provided: createProvider, intervals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervals", function() { return intervals; });
/* harmony import */ var _sqlitehist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sqlitehist.js */ "./src/sqlitehist.js");

/*var url='wss://fstream.binance.com/ws/bnbusdt@aggTrade';
//var url="wss://stream.binance.com:9443/ws/xrpusdt@trade";
//var url="wss://stream.binance.com/ws/xrpusdt@kline_1m";
var bS = new WebSocket(url)
bS.onmessage = function(e){ console.log(e.data)};
bS.close();
*/

var intervals = [];
intervals['1m'] = 1 * 60 * 1000;
intervals['3m'] = 3 * 60 * 1000;
intervals['5m'] = 5 * 60 * 1000;
intervals['15m'] = 15 * 60 * 1000;
intervals['30m'] = 30 * 60 * 1000;
intervals['1h'] = 1 * 60 * 60 * 1000;
intervals['2h'] = 2 * 60 * 60 * 1000;
intervals['4h'] = 4 * 60 * 60 * 1000;
intervals['6h'] = 6 * 60 * 60 * 1000;
intervals['8h'] = 8 * 60 * 60 * 1000;
intervals['12h'] = 12 * 60 * 60 * 1000;
intervals['1d'] = 1 * 24 * 60 * 60 * 1000;
intervals['3d'] = 3 * 24 * 60 * 60 * 1000;
intervals['1w'] = 7 * 24 * 60 * 60 * 1000;
intervals['1M'] = 30 * 24 * 60 * 60 * 1000; //toPricePip(0.9335 , 0.001)
//toPricePip(0.8029 , 0.001)

function toPricePip(price, pipSize) {
  let pip = pipSize,
      precio = price,
      factor = 1;

  while (pip - Math.trunc(pip) !== 0 || precio - Math.trunc(precio) !== 0) {
    factor *= 10;
    pip = +(pip * 10).toFixed(4);
    precio = +(precio * 10).toFixed(4);
  }

  return (Math.round(price * factor) - precio % pip) / factor;
}

class DataProviderBase {
  _init() {
    this.respuesta = null; //respuesta recuperada de la consulta
    //this.estado= 0 ; //estado recuperado de la resupuesta del XMLHttpRequest 
  }

  constructor() {
    this._init();

    this.func = null; //función que será invocada después de la solicitud

    this.symbolPrev = null;
    //this.webSocket = new WebSocket('ws://fer88k892.govant');
  }

  getAllPairs(backRetriver) {}

  getCandles(symbol, timeFrom, timeTo, timeFrame) {}

  getVolumeProfile(symbol, timeFrom, timeTo, timeFrame, numberOfCandles, pipSize) {}

  getOrderFlowCandles(symbol, timeFrom, timeTo, timeFrame) {}

  computePipSize(pipSize) {}

}

class BinanceFuturesDataProvider extends DataProviderBase {
  _init() {
    this.aggList = [];
    this.minuteList = []; //[  {aFirst , aLast , tFirst, tLast, 
    //	hVol:Map(price , {qB , qS ,nBuy , nSell}) ,
    //	bigTrades: {p:Number , q:Number , m }} , ...]	

    this.tBegin = 0;
    this.tLast = 69000;
    this.tFrom = 0;
    this.tTo = 0;
    this.maxPrice = -1;
    this.minPrice = 100000000;
  }

  constructor() {
    super();
    this._private_url_base = 'https://api.binance.com';
    this._private_url_stream_base = 'wss://stream.binance.com/ws';
    this.funPosGetAgg = null;
    this.funPosGetAggDB = null;
    this.timesInMinute = 2300;

    this._init();
  }

  reset(symbol, force_reset) {
    if (force_reset || this.symbolPrev != null && this.symbolPrev !== symbol) {
      super._init();

      this._init();
    }

    this.symbolPrev = symbol;
  }

  getAllPairs() {
    var query = this._private_url_base + '/api/v3/ticker/price';
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', query, true);

    myRequest.onload = () => {
      this.estado = myRequest.status;
      if (this.func) this.func(JSON.parse(myRequest.responseText).map(i => i.symbol));
    };

    myRequest.send();
  }
  /*[
   [
     1499040000000,      // Open time   						0
     "0.01634790",       // Open        						1
     "0.80000000",       // High		   						2
     "0.01575800",       // Low		   						3
     "0.01577100",       // Close	   						4
     "148976.11427815",  // Volume	   						5
     1499644799999,      // Close time						6
     "2434.19055334",    // Quote asset volume               7
     308,                // Number of trades					8
     "1756.87402397",    // Taker buy base asset volume	    9
     "28.46694368",      // Taker buy quote asset volume	    10
     "17928899.62484339" // Ignore.
   ]
  ]
  */


  _private_make_vol_item(volumeMode, my_t, volTotal, volBuy, volume) {
    var volSell = volTotal - volBuy;
    var volDelta = volBuy - volSell;

    switch (volumeMode) {
      case 'one':
        volume.push({
          time: my_t,
          value: volTotal,
          color: 'blue'
        });
        break;

      case 'two':
        volume.push({
          time: my_t,
          value: volBuy,
          color: 'green'
        });
        volume.push({
          time: my_t,
          value: -volSell,
          color: 'red'
        });
        break;

      case 'delta':
        volume.push({
          time: my_t,
          value: volDelta,
          color: volDelta > 0 ? 'green' : 'red'
        });
        break;
    }
  }

  getCandles(symbol, timeFrom, timeTo, timeFrame, volumeMode, fstreamDelegate) {
    if(this.webSocket)this.webSocket.close();
    this.reset(symbol);
    var query = this._private_url_base + `/api/v3/klines?symbol=${symbol}` + `&interval=${timeFrame}&startTime=${timeFrom}&endTime=${timeTo}`;
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', query, true);

    myRequest.onload = () => {
      this.estado = myRequest.status;
      var klines = [],
          volume = [],
          mKlines = new Map();
      var rawKlines = eval(myRequest.responseText);
      rawKlines.forEach(l => {
        let my_t = l[0];
        klines.push({
          time: my_t,
          open: Number(l[1]),
          high: Number(l[2]),
          low: Number(l[3]),
          close: Number(l[4])
        });
        mKlines.set(my_t, {
          open: Number(l[1]),
          high: Number(l[2]),
          low: Number(l[3]),
          close: Number(l[4]),
          volume: Number(l[5]),
          volBuy: Number(l[9]),
          numbOfTrades: Number(l[8])
        });
        var volTotal = Number(l[5]),
            volBuy = Number(l[9]);

        this._private_make_vol_item(volumeMode, my_t, volTotal, volBuy, volume);
      });
      this.klines = klines;
      if (this.func) this.func(klines, volume, mKlines);
      this.webSocket = new WebSocket(this._private_url_stream_base + `/${symbol.toLowerCase()}@kline_${timeFrame}`);

      this.webSocket.onmessage = e => {
        let k = JSON.parse(e.data).k;
        let kline = {
          time: k.t,
          open: Number(k.o),
          high: Number(k.h),
          low: Number(k.l),
          close: Number(k.c)
        },
            mkline = {
          open: Number(k.o),
          high: Number(k.h),
          low: Number(k.l),
          close: Number(k.c),
          volume: Number(k.v),
          volBuy: Number(k.V),
          numbOfTrades: Number(k.n)
        };
        let vol = [];

        this._private_make_vol_item(volumeMode, k.t, mkline.volume, mkline.volBuy, vol);

        if (fstreamDelegate) fstreamDelegate(kline, mkline, vol);
      };
    };

    myRequest.send();
  }

  _internal_getAggTradesDB(symbol, timeFrom, timeTo) {
    this.tFrom = timeFrom;
    this.tTo = timeTo;
    this.maxPrice = -1;
    this.minPrice = 100000000;

    this.funPosGetAgg = () => {
      if (this.funPosGetAggDB) this.funPosGetAggDB();
    };

    this.aggList = [];

    this._internal_getAggTradesList(symbol, timeFrom, timeTo, -1);
  }
  /*
  [
   {
     "a": 26129,         // Aggregate tradeId
     "p": "0.01633102",  // Price
     "q": "4.70443515",  // Quantity
     "f": 27781,         // First tradeId
     "l": 27781,         // Last tradeId
     "T": 1498793709153, // Timestamp
     "m": true,          // Was the buyer the maker?
   }
  ]
  
  */
  // aggList :[ [21341234 /*time[0]*/, 1.945 /*Price[1]*/ , 234234 /*Qty[2]*/ ,  true /*Was the buyer the maker?[3]*/ ]]


  _internal_getAggTradesList(symbol, timeFrom, timeTo, fromId) {
    //{"code":-1003,"msg":"Too many requests; current limit of IP(152.207.216.84) is 2400 requests per minute. Please use the websocket for live updates to avoid polling the API."}
    timeFrom = timeFrom - timeFrom % 60000; //1min

    var query = this._private_url_base + `/api/v3/aggTrades?symbol=${symbol}` + (fromId === -1 ? `&startTime=${timeFrom}&limit=1000` : `&fromId=${fromId}&limit=1000`);
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', query, true);

    myRequest.onload = () => {
      this.estado = myRequest.status;

      if (this.estado !== 200) {
        alert("hemos tenido un error");
        console.log(myRequest.getAllResponseHeaders());
        console.log(myRequest.responseText);
        console.log(`interval:${this.tLast - this.tBegin} , times:${this.timesInMinute}`);
        return;
      }

      let agg = eval(myRequest.responseText);
      let sum = 0,
          aFin,
          TFin;

      if (agg.length) {
        aFin = agg[agg.length - 1].a;
        TFin = agg[agg.length - 1].T;
      }

      agg.forEach(e => {
        sum += Number(e.q);
      });
      sum = 5 * sum / agg.length;
      agg.forEach(elem => {
        if (this.minuteList.length > 0 && elem.T - this.minuteList[0].T > 60000) {
          //Comienzo de un nuevo minuto
          //1.realizar procesamiento.
          let bigTrades = this.minuteList.filter(k => k.q > sum).map(k => {
            return {
              p: Number(k.p),
              q: Number(k.q),
              m: k.m
            };
          });
          let a1 = this.minuteList[0].a,
              a2 = this.minuteList[this.minuteList.length - 1].a,
              T1 = this.minuteList[0].T,
              T2 = this.minuteList[this.minuteList.length - 1].T,
              open = Number(this.minuteList[0].p),
              close = Number(this.minuteList[this.minuteList.length - 1].p);
          let hVol = new Map();
          this.minuteList.forEach(a => {
            let ntrades = a.l - a.f + 1,
                price = Number(a.p),
                qty = Number(a.q),
                entrada;
            this.maxPrice = Math.max(price, this.maxPrice);
            this.minPrice = Math.min(price, this.minPrice);
            if (hVol.get(price) === undefined) hVol.set(price, {
              qB: 0,
              qS: 0,
              nSell: 0,
              nBuy: 0
            });
            entrada = hVol.get(price);

            if (a.m) {
              // Was the buyer the maker? <=> was the seller the taker? => SELL
              entrada.nSell += ntrades;
              entrada.qS += qty;
            } else {
              //Sell
              entrada.nBuy += ntrades;
              entrada.qB += qty;
            }
          }); //{aFirst , aLast , tFirst, tLast, open , close, 	hVol, bigTrades}

          this.aggList.push({
            aFirst: a1,
            aLast: a2,
            tFirst: T1,
            tLast: T2,
            open: open,
            close: close,
            hVol: hVol,
            bigTrades: bigTrades
          });
          let len = this.aggList.length;
          this.minuteList = [elem];
        } else {
          //Continua el minuto
          this.minuteList.push(elem);
        }
      }); //---------Diciendo el % de la ejecuci'on

      let indicadorNet = document.getElementById('indicadorNet');
      indicadorNet.textContent = `Progress: ${Math.round(100 * (TFin - this.tFrom) / (this.tTo - this.tFrom))} % 
										\n ${Math.round((TFin - this.tFrom) / 3600000)}h`; //--------fin de decir %

      if (TFin < timeTo && agg.length > 100) {
        //max 2400 times in a minute
        this._internal_getAggTradesList(symbol, timeFrom, timeTo, aFin + 1);
      } else {
        indicadorNet.textContent = "";
        if (this.funPosGetAgg) this.funPosGetAgg();
      }
    };

    myRequest.send();
  } //var histogramHData = {   maxValue: volData[0].value , numbOfCand: 11 , 
  //		 columnData:  [  ],/*{time: 123212312  , volumes:[ {price: 1.90 , vB:1231 , vS: 900} , {price: 1.91 , vB:1231 , vS:900}, ] }*/
  //    };	
  // Y : klines = [{time: t , open:0 , high:0 ,low:0,close:0 } ]
  // this.aggList = [ {aFirst , aLast , tFirst, tLast, hVol, bigTrades},...]


  computePipSize(pipSize) {
    return (this.maxPrice - this.minPrice) * pipSize / 50;
  }

  _internal_computeVolumeProfile(timeFrame, numberOfCandles, pipSize, volumeMode) {
    let aggList = this.aggList;
    volumeMode = volumeMode === undefined ? 'delta' : volumeMode;
    pipSize = this.computePipSize(pipSize);
    let groupSize = numberOfCandles * intervals[timeFrame] / 60000;
    let klines = [],
        volume = [],
        histogramHData = {
      maxValue: 0,
      numbOfCand: numberOfCandles,
      columnData: []
    };
    let lvolumes,
        mapvolumes = new Map(),
        high,
        low,
        fprice,
        entrada,
        sumatotalB,
        sumatotalS;
    /*let posIni = 0 ;
    while((aggList[posIni].tFirst % intervals[timeFrame]) !== 0 )
    	++posIni;	*/

    for (let i = 0; i < aggList.length; i += groupSize) {
      high = 0;
      low = 999999999999999;
      sumatotalB = 0;
      sumatotalS = 0;
      mapvolumes.clear();
      let maxVol = 0;
      let j;

      for (j = i; j < aggList.length && j < i + groupSize; j++) {
        aggList[j].hVol.forEach((obj, price) => {
          //hVol.set(price , { qB: 0 , qS:0}
          high = Math.max(high, price);
          low = Math.min(low, price);
          fprice = toPricePip(price, pipSize);

          if (mapvolumes.get(fprice) === undefined) {
            mapvolumes.set(fprice, {
              'qB': obj.qB,
              'qS': obj.qS
            });
            maxVol = Math.max(maxVol, obj.qB + obj.qS);
          } else {
            entrada = mapvolumes.get(fprice);
            entrada.qB += obj.qB;
            entrada.qS += obj.qS;
            maxVol = Math.max(maxVol, entrada.qB + entrada.qS);
          }
        });
      }

      lvolumes = [];
      klines.push({
        'time': aggList[i].tFirst,
        'open': aggList[i].open,
        'high': high,
        'low': low,
        'close': aggList[j - 1].close
      });
      mapvolumes.forEach((obj, precio) => {
        lvolumes.push({
          'price': precio,
          'vB': obj.qB,
          'vS': obj.qS
        });
        sumatotalB += obj.qB;
        sumatotalS += obj.qS;
      });
      histogramHData.columnData.push({
        'time': aggList[i].tFirst,
        'maxVol': maxVol,
        'volumes': lvolumes
        /*, 'totalB': sumatotalB , 'totalS': sumetotalS */

      });

      switch (volumeMode) {
        case 'one':
          volume.push({
            time: aggList[i].tFirst,
            value: sumatotalB + sumatotalS,
            color: 'blue'
          });
          break;

        case 'two':
          volume.push({
            time: aggList[i].tFirst,
            value: sumatotalB,
            color: 'green'
          });
          volume.push({
            time: aggList[i].tFirst,
            value: -sumatotalS,
            color: 'red'
          });
          break;

        case 'delta':
          volume.push({
            time: aggList[i].tFirst,
            value: sumatotalB - sumatotalS,
            color: sumatotalB > sumatotalS ? 'green' : 'red'
          });
          break;

        default:
          break;
      }

      histogramHData.maxValue = Math.max(histogramHData.maxValue, maxVol);
    }

    if (this.func) this.func(klines, histogramHData, volume);
  }

  getVolumeProfile(symbol, timeFrom, timeTo, timeFrame, numberOfCandles, pipSize, volumeMode, force_reset) {
    if(this.webSocket)this.webSocket.close();
    this.reset(symbol, force_reset);
    timeFrom = fixTimeFrom(timeFrom, timeFrame);
    numberOfCandles = Math.max(numberOfCandles, 1);
    let pR = this.prevRequest;

    if (this.aggList.length && pR.lastSymbol === symbol && pR.t1 === timeFrom && pR.t2 === timeTo) {
      //Los datos han sido recuperados
      this._internal_computeVolumeProfile(timeFrame, numberOfCandles, pipSize, volumeMode);
    } else {
      this.aggList = [];

      this.funPosGetAggDB = () => {
        this.prevRequest = {
          lastSymbol: symbol,
          t1: timeFrom,
          t2: timeTo
        };

        this._internal_computeVolumeProfile(timeFrame, numberOfCandles, pipSize, volumeMode);
      };

      this._internal_getAggTradesDB(symbol, timeFrom, timeTo);
    }
  }

}

function fixTimeFrom(timeFrom, timeFrame) {
  return timeFrom - timeFrom % intervals[timeFrame];
}

function createProvider(providerType) {
  switch (providerType) {
    case 'BinanceFutures':
      return new BinanceFuturesDataProvider();

    default:
      break;
  }

  return null;
}



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_single_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-single-select */ "./node_modules/react-custom-single-select/build/index.js");
/* harmony import */ var react_custom_single_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_single_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart.js */ "./src/chart.js");
/* harmony import */ var _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataProvider.js */ "./src/dataProvider.js");
var _jsxFileName = "h:\\React\\my-app\\src\\index.js";






const klines_count = 300;
const timeFrames = ['1m', '3m', '5m'
/*,'15m','30m', '1h', '2h', '4h', '6h','8h', '12h', '1d','3d', '1w',  '1M' */
];
const listOfBrokers = ['BinanceFutures'
/* , 'BinanceSpot'*/
];
var dataProvider = Object(_dataProvider_js__WEBPACK_IMPORTED_MODULE_5__["createProvider"])(listOfBrokers[0]);
var defaultPairs = [];
var candleTimeFrom, candleTimeTo;
var instancePairSelector;

function dataProviderChangeHandler() {
  if (!dataProvider) {
    defaultPairs = [];
    if (instancePairSelector) instancePairSelector.setState({
      pairs: []
    });
    return;
  }

  dataProvider.func = l => {
    defaultPairs = l;

    if (instancePairSelector) {
      instancePairSelector.setState({
        pairs: l
      });
      instancePairSelector.selectFirstPair();
    }
  };

  dataProvider.getAllPairs();
}

dataProviderChangeHandler();

function _isValidPair() {
  var pairSelector = document.getElementById("pairSelector"),
      datalist = document.getElementById("pairsOfCoins"),
      l = [];
  if (pairSelector.disabled || pairSelector.value === "") return false;

  for (var i = 0; i < datalist.children.length; i++) l.push(datalist.children[i].value);

  return l.findIndex(t => t === pairSelector.value) !== -1;
}

function _internal_updateChart(advChart, force_reset) {
  var advSelector = document.getElementById("advSelector");

  switch (advSelector.value) {
    case 'Candles':
      _internal_updateChartSimple();

      break;

    case 'Order Flow':
      if (force_reset) advChart._private_changeAdvOptions();else advChart._internal_updateAdvancedChart();
      break;

    default:
      break;
  }
}

function _internal_updateChartSimple() {
  var pairSelector = document.getElementById("pairSelector"),
      datalist = document.getElementById("pairsOfCoins"),
      tfselect = document.getElementById('tfselect'),
      vmselect = document.getElementById('vmselect');

  if (_isValidPair()) {
    candleTimeFrom = Date.now() - _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__["intervals"][tfselect.value] * klines_count;
    candleTimeTo = Date.now();
    Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["updateChart"])({
      'dataProvider': dataProvider,
      'pair': pairSelector.value,
      'timeFrom': candleTimeFrom,
      'timeTo': candleTimeTo,
      'interval': tfselect.value,
      'volumeType': vmselect.value
    });
  } else alert(`el par ${pairSelector.value} no es válido`);
}

class BrokerSelector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  changeHandler(a) {
    dataProvider = Object(_dataProvider_js__WEBPACK_IMPORTED_MODULE_5__["createProvider"])(a.target.value);
    dataProviderChangeHandler();
  }

  render() {
    const options = listOfBrokers.map(broker => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: broker,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 48
      }
    }, broker));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      id: "brokerSelector",
      onChange: a => this.changeHandler(a),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 3
      }
    }, options);
  }

} //crear una sola instacia


class PairSelector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    instancePairSelector = this;
    this.my_id = "pairsOfCoins";
    this.state = {
      pairs: []
    };
  }

  _private_updateChart(key) {
    if (key !== 'Enter') return;

    _internal_updateChart(this.props.my_volProfOpt);
  }

  selectFirstPair() {
    if (this.state.pairs && this.state.pairs.length) document.getElementById('pairSelector').value = this.state.pairs.find(e => e === 'XRPUSDT') ? 'XRPUSDT' : this.state.pairs[0];

    _internal_updateChart(this.props.my_volProfOpt);
  }

  render() {
    var my_options;
    if (this.state.pairs.length) my_options = this.state.pairs.map(pair => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: pair,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 46
      }
    }, pair));else my_options = defaultPairs.map(pair => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: pair,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 42
      }
    }, pair));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      list: this.my_id,
      name: "myBrowser",
      id: "pairSelector",
      disabled: this.state.pairs.length === 0,
      onKeyPress: k => this._private_updateChart(k.key),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("datalist", {
      id: this.my_id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 4
      }
    }, my_options));
  }

}

class TimeFrameSelector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  changeHandler(a) {
    _internal_updateChart(this.props.my_volProfOpt, true);
  }

  render() {
    const options = timeFrames.map(tf => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: tf,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 41
      }
    }, tf));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "select",
      id: "tfselect",
      onChange: a => this.changeHandler(a),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 3
      }
    }, options);
  }

}

class VolumeModeSelector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  changeHandler(a) {
    _internal_updateChart(this.props.my_volProfOpt);
  }

  changeHide(a) {
    //document.getElementById('vpOptions').hidden = !a.target.checked;
    Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeCandles"])({
      'visible': !a.target.checked
    });
  }

  render() {
    const options = ['one', 'two', 'delta'].map(tf => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: tf,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 52
      }
    }, tf));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("n", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "select",
      id: "vmselect",
      onChange: a => this.changeHandler(a),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 3
      }
    }, options));
  }

}
/* VolumeProfile  options:
options = {dataProvider, pair , timeFrom , timeTo , interval ,numberOfCandles , pipSize }
*/
//Varían: numberOfCandles , pipSize , volumeType


class VolumeProfileOptions extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.timeFrom = '';
    this.timeTo = '';
  }
  /*changeHide(a){
  	document.getElementById('vpOptions').hidden = !a.target.checked;
  	customizeVolumeProfile({'visible':a.target.checked});		
  }*/


  _private_changeAdvOptions() {
    let advSelector = document.getElementById('advSelector'),
        tfselect = document.getElementById('tfselect');
    document.getElementById('vpOptions').hidden = advSelector.value === 'Candles';
    this.timeFrom = candleTimeFrom = Date.now() - _dataProvider_js__WEBPACK_IMPORTED_MODULE_5__["intervals"][tfselect.value] * klines_count;
    this.timeTo = candleTimeTo = Date.now();

    switch (advSelector.value) {
      case 'Candles':
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeVolumeProfile"])({
          'visible': false
        });
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeOrderFlow"])({
          'visible': false
        });
        break;

      case 'Volume Profile':
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeVolumeProfile"])({
          'visible': true
        });
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeOrderFlow"])({
          'visible': false
        });
        break;

      case 'Order Flow':
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeVolumeProfile"])({
          'visible': false
        });
        Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["customizeOrderFlow"])({
          'visible': true
        });
        break;

      default:
        break;
    }

    this._internal_updateAdvancedChart(true);
  }

  _internal_updateAdvancedChart(force_reset) {
    let pairSelector = document.getElementById("pairSelector"),
        datalist = document.getElementById("pairsOfCoins"),
        tfselect = document.getElementById('tfselect'),
        nOfCandItem = document.getElementById('nOfCandItem'),
        pipSizeItem = document.getElementById('pipSizeItem'),
        vmselect = document.getElementById('vmselect');

    if (_isValidPair()) {
      let advSelector = document.getElementById('advSelector');

      switch (advSelector.value) {
        case 'Candles':
          chart.remove();
          chart = Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["_createChart"])(document.getElementById("chartContainer"));

          _internal_updateChart();

          break;

        case 'Volume Profile':
          Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["updateVolumeProfile"])({
            'dataProvider': dataProvider,
            'pair': pairSelector.value,
            'timeFrom': this.timeFrom,
            'timeTo': this.timeTo,
            'interval': tfselect.value,
            'numberOfCandles': nOfCandItem.value,
            'pipSize': pipSizeItem.value
          });
          break;

        case 'Order Flow':
          chart.remove();
          chart = Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["_createChart"])(document.getElementById("chartContainer")); //customizeOrderFlow( { 'pipSize': dataProvider.computePipSize(pipSizeItem.value)} );

          Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["updateOrderFlow"])({
            'dataProvider': dataProvider,
            'pair': pairSelector.value,
            'timeFrom': this.timeFrom,
            'timeTo': this.timeTo,
            'interval': tfselect.value,
            'numberOfCandles': nOfCandItem.value,
            'pipSize': pipSizeItem.value,
            'volMode': vmselect.value
          }, force_reset);
          break;

        default:
          break;
      }
    } else alert(`el par ${pairSelector.value} no es válido`);
  }

  _private_updateAdvancedChart(key) {
    if (key !== 'Enter') return;

    this._internal_updateAdvancedChart();
  }

  render() {
    const optionsPipSize = ['1', '2', '3'].map(tf => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: tf,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 51
      }
    }, tf));
    const optionsAdvanced = ['Candles', 'Order Flow'].map(tf => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: tf,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 64
      }
    }, tf));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "elems-query",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PairSelector, {
      my_volProfOpt: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeFrameSelector, {
      my_volProfOpt: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VolumeModeSelector, {
      my_volProfOpt: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("n", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      id: "advSelector",
      onChange: () => this._private_changeAdvOptions(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 4
      }
    }, optionsAdvanced), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("n", {
      id: "vpOptions",
      hidden: "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      hidden: "true",
      id: "nOfCandItem",
      value: "1",
      onKeyPress: k => this._private_updateAdvancedChart(k.key),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 5
      }
    }), "Cluster size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      id: "pipSizeItem",
      onChange: a => this._internal_updateAdvancedChart(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 5
      }
    }, optionsPipSize))));
  }

}

let isFullScreen = false;

function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
  let w1 = element.width,
      h1 = element.height,
      w2,
      h2,
      fW,
      fH;

  document.onmozfullscreenchange = () => {
    isFullScreen = !isFullScreen;
    if (isFullScreen) chart.resize(window.screen.width, window.screen.height, true);else chart.resize(1000, 500, true);
  };

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(element);
  }
}

const dep_list = [{
  cry: 'PayPal',
  addr: 'https://www.paypal.me/raquelfelez',
  lnk: 'https://s3.cointelegraph.com/storage/uploads/view/3278bdc14c74dd4e85732b776d0e5b1d.png'
}, {
  cry: 'BTC',
  addr: '3K8p6XLjSHKt5W69PHtqN8ViBXAgdyRsqU',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
}, {
  cry: 'ETH',
  addr: '0x32B04c5887E084C1BbC933d19217Cd8f9Ce7EFde',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
}, {
  cry: 'BCH',
  addr: 'bitcoincash:qrmfqau2fc2qxlrt925a7lxpa3ule5mm6q5w4nrjnk',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png'
}, {
  cry: 'LTC',
  addr: 'MWBfjDdP4CGt3XqZaMGtEYN6yUJWYX7zmw',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'
}, {
  cry: 'DASH',
  addr: 'XpLzQWggWB6aHKeqU6oKfd7CnHTEYKDb8h',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/131.png'
}, {
  cry: 'XRP',
  addr: 'rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV',
  tag: '14901934',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
}, {
  cry: 'DOGE',
  addr: 'DJy5jTgCce2dhYBMAuT3HZ1R1vjpc5r3YN',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png'
}, {
  cry: 'TRX',
  addr: 'TQEaPNyLeMS9Wx9qL5ZqDV7KD1jqVmRz2W',
  lnk: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png'
}];

class OpcionesDonar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  itemSelectedCallback(option, {
    index
  }) {
    var elem = document.getElementById('pAddr');
    document.getElementById('btnCpyAddr').textContent = 'copiar';
    document.getElementById('btnCpyAddr').hidden = false;
    document.getElementById('divAddr').hidden = false;
    elem.textContent = dep_list[index].addr;

    if (dep_list[index].cry === 'XRP') {
      var elem = document.getElementById('pTag');
      document.getElementById('btnCpyTag').textContent = 'copiar';
      /*document.getElementById('btnCpyTag').hidden = false;*/

      elem.textContent = dep_list[index].tag;
      document.getElementById('divTag').hidden = false;
    } else document.getElementById('divTag').hidden = true;
  }

  render() {
    const my_style = {
      List: {
        background: '#EEEEEE'
      },
      Header: {
        background: '#EEEEEE'
      }
    };
    const options = dep_list.map(e => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "selectClass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: e.lnk,
      width: "30px",
      height: "30px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 62
      }
    }), e.cry));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_custom_single_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
      options: options,
      customStyle: my_style,
      onSelect: this.itemSelectedCallback,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 11
      }
    });
  }

}

const pres_txt = ["Welcome to version 0.1 of OrderFlow-Chart. You now have access to the Order Flow indicator on the 1-minute timeframe. In the future, improvements will be made based on the developers' availability of time. You can become a collaborator of this project through a donation. ", "OrderFlow-Chart"];

function copyToClipboard(text) {
  var textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  class: "los-de-arriba",
  align: "right",
  id: "menu1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  align: "justify",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 1
  }
}, pres_txt[0], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "",
  target: "_blank",
  class: "los-de-arriba",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 33
  }
}, "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  class: "menuCSS3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 364,
    columnNumber: 4
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#",
  onClick: () => document.getElementById('menu1').hidden = true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 364,
    columnNumber: 8
  }
}, "Hidden")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365,
    columnNumber: 4
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.linkedin.com/in/fernando-fonseca-acosta-1aab08a7",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 365,
    columnNumber: 8
  }
}, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 366,
    columnNumber: 4
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "#popDonate",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 366,
    columnNumber: 8
  }
}, "\u2665Donate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "popDonate",
  class: "overlay",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 367,
    columnNumber: 4
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "popupBody",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 369,
    columnNumber: 17
  }
}, "As\xED ayudar\xE1s a este proyecto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370,
    columnNumber: 5
  }
}, "Detalles de la donaci\xF3n a: jovtal22@gmail.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  id: "cerrar",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371,
    columnNumber: 17
  }
}, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  class: "popupContent",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 372,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OpcionesDonar, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373,
    columnNumber: 6
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 375,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 12
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 16
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 20
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 25
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376,
    columnNumber: 30
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  id: "divAddr",
  hidden: "true",
  style: {
    padding: "0 40px 30px 40px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 378,
    columnNumber: 5
  }
}, "address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  class: "text-value",
  id: "pAddr",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  id: "btnCpyAddr",
  hidden: "true",
  style: {
    background: 'transparent',
    color: 'green',
    border: 'none'
  },
  onClick: e => {
    var elem = document.getElementById('pAddr');
    copyToClipboard(elem.textContent);
    e.target.textContent = 'copiado';
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380,
    columnNumber: 5
  }
}, "copiar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  id: "divTag",
  hidden: "true",
  style: {
    padding: "0 40px 30px 40px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 387,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 388,
    columnNumber: 5
  }
}, "Tag:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "pTag",
  class: "text-value",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  id: "btnCpyTag",
  style: {
    background: 'transparent',
    color: 'green',
    border: 'none'
  },
  onClick: e => {
    var elem = document.getElementById('pTag');
    copyToClipboard(elem.textContent);
    e.target.textContent = 'copiado';
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 390,
    columnNumber: 5
  }
}, "copy"))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 405,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 406,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407,
    columnNumber: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BrokerSelector, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409,
    columnNumber: 4
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VolumeProfileOptions, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 410,
    columnNumber: 4
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "chartContainer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 411,
    columnNumber: 4
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
  id: "jaja",
  class: "los-de-derecha",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 414,
    columnNumber: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "candleInfo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 415,
    columnNumber: 3
  }
}, "\"INFO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 416,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "volumenTotal",
  class: "class-neutral",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 417,
    columnNumber: 4
  }
}, " VT "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "volumenSell",
  class: "class-sell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418,
    columnNumber: 4
  }
}, " VSELL "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "volumenBuy",
  class: "class-buy",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 419,
    columnNumber: 4
  }
}, " VBUY ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 421,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  class: "class-neutral",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422,
    columnNumber: 4
  }
}, "________"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "percentSell",
  class: "class-sell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 423,
    columnNumber: 4
  }
}, " VSELL "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "percentBuy",
  class: "class-buy",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 424,
    columnNumber: 4
  }
}, " VBUY ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 426,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "volumenDelta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 427,
    columnNumber: 4
  }
}, " VT "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  id: "percentDelta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 428,
    columnNumber: 4
  }
}, " VSELL ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "numbTrades",
  class: "class-neutral",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 430,
    columnNumber: 3
  }
}, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "volPerTrade",
  class: "class-neutral",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 431,
    columnNumber: 3
  }
}, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "indicadorNet",
  class: "class-neutral",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 432,
    columnNumber: 3
  }
}, "-"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 435,
    columnNumber: 1
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  class: "boton-rosa",
  type: "button",
  value: "full screen",
  onClick: () => requestFullScreen(document.getElementById('chartContainer')),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 436,
    columnNumber: 2
  }
})))), document.getElementById("root"));

let chart = Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["_createChart"])(document.getElementById("chartContainer"));

Object(_chart_js__WEBPACK_IMPORTED_MODULE_4__["subscribeCrosshairMove"])();

/***/ }),

/***/ "./src/sqlitehist.js":
/*!***************************!*\
  !*** ./src/sqlitehist.js ***!
  \***************************/
/*! exports provided: SQLiteHist, AGG_LEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQLiteHist", function() { return SQLiteHist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGG_LEN", function() { return AGG_LEN; });
/* harmony import */ var tosource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tosource */ "./node_modules/tosource/dist/index.esm.js");

const AGG_LEN = 60;

class SQLiteHist {
  constructor(broker) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8080");

    xhr.onload = () => {
      console.log(xhr.responseText);
    };

    xhr.send(Object(tosource__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "req": "connect",
      'broker': broker
    }));
  }

  getHist(symbol, timeFrom, timeTo, fun) {
    //{ lrequest:[{ (a1 | t1)  ,t2} , ...] , aggList:[] }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8080");

    xhr.onload = () => {
      let r;
      eval('r=' + xhr.responseText);
      if (fun) fun(r);
    };

    xhr.send(Object(tosource__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "req": "getHist",
      'symbol': symbol,
      "timeFrom": timeFrom,
      "timeTo": timeTo
    }));
  }
  /*
  aggList[i] = {aFirst , aLast , tFirst, tLast, 
  					  //	hVol:Map(price , {qB , qS ,nBuy , nSell}) ,
  					  //	bigTrades: {...}} , ...]
  */


  setHist(symbol, aggList, fun) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8080");

    xhr.onload = () => {
      if (aggList.length > AGG_LEN) {
        this.setHist(symbol, aggList.slice(AGG_LEN, aggList.length), fun);
      } else if (fun) fun(xhr.responseText);
    };

    xhr.send(Object(tosource__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "req": "setHist",
      'symbol': symbol,
      "aggList": aggList.slice(0, AGG_LEN)
    }));
  }

}



/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! h:\React\my-app\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! h:\React\my-app\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! h:\React\my-app\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map
