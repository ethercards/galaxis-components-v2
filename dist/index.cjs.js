'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var spinnersReact = require('spinners-react');
var material = require('@mui/material');
var ethers = require('ethers');
var axios = require('axios');
var reactToast = require('react-toast');
var zoomNext = require('zoom-next');
var ItemsCarousel = require('react-items-carousel');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var ItemsCarousel__default = /*#__PURE__*/_interopDefaultLegacy(ItemsCarousel);

var img$9 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'%3e %3cg id='Group_1817' data-name='Group 1817' transform='translate(-912 -5536)'%3e %3cg id='Group_1814' data-name='Group 1814' transform='translate(912 5535.843)' opacity='0.4'%3e %3crect id='Rectangle_370' data-name='Rectangle 370' width='70' height='70' rx='7' transform='translate(0 0.157)'/%3e %3cg id='physical_redeem' data-name='physical redeem' transform='translate(18.543 14.423)'%3e %3cpath id='Path_211' data-name='Path 211' d='M120.119%2c77c2.377%2c1.414%2c4.765%2c2.828%2c7.142%2c4.243q4.706%2c2.8%2c9.436%2c5.574a1.175%2c1.175%2c0%2c0%2c1%2c.642%2c1.129q-.018%2c9.572%2c0%2c19.133a1.135%2c1.135%2c0%2c0%2c1-.618%2c1.093q-8.093%2c4.759-16.186%2c9.567a1.162%2c1.162%2c0%2c0%2c1-1.331%2c0q-8.075-4.8-16.186-9.567a1.1%2c1.1%2c0%2c0%2c1-.618-1.058q.018-9.626%2c0-19.252a1.033%2c1.033%2c0%2c0%2c1%2c.547-.986q8.325-4.9%2c16.637-9.816a.119.119%2c0%2c0%2c0%2c.048-.059Zm4.813%2c18.408c-.166.1-.285.143-.392.214-1.188.7-2.365%2c1.4-3.553%2c2.092a.631.631%2c0%2c0%2c0-.368.63c.012%2c3.839.012%2c7.689.012%2c11.527v.357c-.012.594-.3.927-.761.927s-.725-.333-.749-.9v-.357c0-3.838%2c0-7.689.012-11.527a.656.656%2c0%2c0%2c0-.38-.654q-6.542-3.85-13.084-7.725c-.642-.38-.82-.761-.57-1.2s.7-.475%2c1.319-.107q6.56%2c3.868%2c13.12%2c7.76a.571.571%2c0%2c0%2c0%2c.677%2c0c1.2-.725%2c2.412-1.426%2c3.613-2.139.107-.059.2-.143.345-.226-.119-.071-.19-.131-.273-.178q-7.309-4.332-14.629-8.651a.446.446%2c0%2c0%2c0-.535%2c0c-1.474.879-2.959%2c1.759-4.445%2c2.626a.615.615%2c0%2c0%2c0-.357.63q.018%2c9.02%2c0%2c18.052a.642.642%2c0%2c0%2c0%2c.357.63q7.2%2c4.243%2c14.391%2c8.5c.119.071.238.143.416.238.012-.2.024-.321.024-.452%2c0-.63-.012-1.26%2c0-1.878.012-.547.3-.844.749-.844s.737.309.749.844c.012.654%2c0%2c1.307.012%2c1.961%2c0%2c.107.024.214.036.368a1.7%2c1.7%2c0%2c0%2c0%2c.226-.119q7.326-4.332%2c14.677-8.663a.48.48%2c0%2c0%2c0%2c.25-.487V89.359c0-.1-.024-.19-.036-.333-1.224.725-2.4%2c1.426-3.589%2c2.115a.536.536%2c0%2c0%2c0-.309.535c.012%2c1.961%2c0%2c3.922.012%2c5.883a.916.916%2c0%2c0%2c1-.487.891c-1.747%2c1.022-3.494%2c2.068-5.241%2c3.09a.769.769%2c0%2c0%2c1-1.236-.665%2c2.889%2c2.889%2c0%2c0%2c1%2c0-.321v-4.6C124.932%2c95.753%2c124.932%2c95.61%2c124.932%2c95.408Zm10.113-7.784a2.963%2c2.963%2c0%2c0%2c0-.285-.19q-7.291-4.314-14.593-8.628a.5.5%2c0%2c0%2c0-.582%2c0c-1.129.677-2.27%2c1.343-3.411%2c2.02-.071.048-.143.1-.238.155.309.178.57.333.832.5l4.884%2c2.888a.772.772%2c0%2c0%2c1%2c.38%2c1.105c-.226.392-.665.463-1.153.2-.083-.048-.166-.1-.238-.143-1.961-1.165-3.922-2.317-5.883-3.482a.553.553%2c0%2c0%2c0-.677.012c-1.022.63-2.056%2c1.224-3.09%2c1.842-.155.1-.3.178-.487.3.107.071.154.107.214.143q7.362%2c4.349%2c14.736%2c8.711a.41.41%2c0%2c0%2c0%2c.5-.012l3.066-1.818c.19-.107.38-.226.606-.368-.178-.107-.3-.19-.428-.261-1.878-1.117-3.767-2.222-5.645-3.339-.606-.357-.784-.749-.535-1.188s.713-.475%2c1.331-.119c2.175%2c1.283%2c4.338%2c2.555%2c6.5%2c3.85a.464.464%2c0%2c0%2c0%2c.57%2c0c1.105-.666%2c2.222-1.319%2c3.339-1.985A1.693%2c1.693%2c0%2c0%2c0%2c135.045%2c87.624Zm-4.67%2c4.552c-1.307.772-2.531%2c1.485-3.755%2c2.234a.545.545%2c0%2c0%2c0-.166.392c-.012%2c1.462-.012%2c2.935%2c0%2c4.4%2c0%2c.1.024.19.036.333.951-.559%2c1.83-1.165%2c2.769-1.616a1.716%2c1.716%2c0%2c0%2c0%2c1.129-1.961C130.291%2c94.731%2c130.375%2c93.495%2c130.375%2c92.176Z' transform='translate(-102.4 -77)'/%3e %3cpath id='Path_212' data-name='Path 212' d='M128.161%2c290.158c0-.475-.012-.963%2c0-1.438a.756.756%2c0%2c1%2c1%2c1.509-.059q.036%2c1.515%2c0%2c3.03a.743.743%2c0%2c0%2c1-.784.737.755.755%2c0%2c0%2c1-.713-.808C128.149%2c291.144%2c128.161%2c290.645%2c128.161%2c290.158Z' transform='translate(-125.095 -262.837)'/%3e %3cpath id='Path_213' data-name='Path 213' d='M153.661%2c302.937c0-.475-.012-.963%2c0-1.438a.75.75%2c0%2c1%2c1%2c1.5-.048q.036%2c1.5%2c0%2c2.995a.758.758%2c0%2c0%2c1-.784.772.767.767%2c0%2c0%2c1-.713-.844Z' transform='translate(-147.564 -274.106)'/%3e %3c/g%3e %3c/g%3e %3cg id='flip_02' data-name='flip 02' transform='translate(845.179 5473.328)'%3e %3cpath id='Path_225' data-name='Path 225' d='M92.524%2c117.689a7.86%2c7.86%2c0%2c0%2c1-1.044-.333%2c3.738%2c3.738%2c0%2c0%2c1-2.408-3.594c-.024-3.7-.012-5.557-.012-9.254v-.551H85.124a4.029%2c4.029%2c0%2c0%2c1-2.443-.769%2c3.692%2c3.692%2c0%2c0%2c1-1.613-3.02c-.024-1.78-.024-3.548%2c0-5.327a3.909%2c3.909%2c0%2c0%2c1%2c3.89-3.766c1.34-.023%2c2.692%2c0%2c4.1%2c0V81.822A3.937%2c3.937%2c0%2c0%2c1%2c93.307%2c77.7H108.8a3.937%2c3.937%2c0%2c0%2c1%2c4.246%2c4.122V96.23h.949a37.19%2c37.19%2c0%2c0%2c1%2c3.76.092%2c3.767%2c3.767%2c0%2c0%2c1%2c3.273%2c3.639c.036%2c1.8.036%2c3.605%2c0%2c5.419a3.908%2c3.908%2c0%2c0%2c1-3.866%2c3.743c-1.2.023-2.4.011-3.593.011h-.522V113.6a3.885%2c3.885%2c0%2c0%2c1-3.344%2c4.041.375.375%2c0%2c0%2c0-.119.057Q101.04%2c117.683%2c92.524%2c117.689ZM91.73%2c98.825V113.6a1.355%2c1.355%2c0%2c0%2c0%2c1.554%2c1.5H108.82c1.044%2c0%2c1.554-.494%2c1.565-1.493V109.56c0-.138-.012-.276-.024-.436h-3.843a1.317%2c1.317%2c0%2c0%2c1-1.459-1.378c0-1.665-.012-3.318%2c0-4.983a1.3%2c1.3%2c0%2c0%2c1%2c1.423-1.366c1.139-.011%2c2.277%2c0%2c3.416%2c0h.486V81.684a1.323%2c1.323%2c0%2c0%2c0-1.471-1.412H93.283a1.355%2c1.355%2c0%2c0%2c0-1.554%2c1.5v9.265H94.4V89.87a1.261%2c1.261%2c0%2c0%2c1%2c.688-1.217%2c1.346%2c1.346%2c0%2c0%2c1%2c1.459.092q3.932%2c2.532%2c7.863%2c5.075a1.254%2c1.254%2c0%2c0%2c1%2c0%2c2.216c-2.621%2c1.711-5.266%2c3.4-7.9%2c5.1a1.317%2c1.317%2c0%2c0%2c1-1.388.092%2c1.268%2c1.268%2c0%2c0%2c1-.723-1.194V98.825Zm4.756-.861s3.392-2.113%2c4.815-3.031c-1.447-.93-4.815-3.111-4.815-3.111l-.024%2c1.791-1.079.034H85.219c-.771%2c0-1.34.356-1.435%2c1.01a11.039%2c11.039%2c0%2c0%2c0-.012%2c1.653c.854-.034%2c1.672-.08%2c2.491-.092%2c3.06-.011%2c9.191%2c0%2c9.191%2c0l1.008-.011Zm11.231%2c8.519c.047.034.059.057.071.057%2c3.107%2c0%2c6.215.011%2c9.322%2c0a1.181%2c1.181%2c0%2c0%2c0%2c1.2-.976%2c11.648%2c11.648%2c0%2c0%2c0%2c.012-1.7c-.759.034-1.494.092-2.23.092-2.633.011-5.266%2c0-7.9%2c0h-.474Zm5.337-5.1c1.388%2c0%2c2.74.023%2c4.092-.011a1.276%2c1.276%2c0%2c0%2c0%2c1.21-1.263%2c1.241%2c1.241%2c0%2c0%2c0-1.139-1.274c-1.388-.046-2.763-.011-4.175-.011C113.054%2c99.675%2c113.054%2c100.5%2c113.054%2c101.385ZM89.038%2c98.814h-3.9a1.306%2c1.306%2c0%2c0%2c0-1.4%2c1.3%2c1.323%2c1.323%2c0%2c0%2c0%2c1.423%2c1.274c1.2.011%2c2.4%2c0%2c3.594%2c0a2.4%2c2.4%2c0%2c0%2c0%2c.285-.034Z' fill='%23fcfcfc'/%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAADJCAMAAAC9r+gfAAAAUVBMVEVHcEz////8+fn8+vv8+fv7+/v8+vr9+fv9+vv8+fr8+fn7+Pn8+fr7+fn9+fv/9/f/9/f8+fn8+vr////8+fr8+fr9+vv9+fv8+vv9+fr7+/vROQ34AAAAG3RSTlMAAWXTwEpmkf/+Yv7//4whIGP/E/j3no3Sv0nFSNoIAAABiklEQVR4AezKSQEAIAwAoJ39K9vAAoM3cRkAAAAAAAAAAAAAAJDVs/+y048dO1QLGIahKMwMS7t0sA32/o9KK2KPvVdQ2yN+EZEvn5uVeY+I1inpbSb7ZmU+MpPUvc3gUKjBPMZYajLPRKIGc6nBrFGDGdRl1qjBDOoya9RgBnWZBWo2g7rMGjWYQV1mkRrMoC6zXg3mUoNZpQZzqcEsVZ/LDGowL/WpMH+1CUL1NEPSvgXoK+6BajSPOy4B+vnJRHXj/99HgP7orIpA85offzWb/dVs1qvBbKwGs7EazMZqMBurwWysBrOxGszGajAbq8FsrAazsRrMxmo2a96bgep8/cy9mW7QbE5jNUy0p5rNnmo2e6rZ7Klms6eazZ5qNnuq2eypZrOnms3eajb7q9msV4uvpv/36b927ZgIYBgGgqBtEpHEH2gYpMnMN96lcZcpAZrL/7r16Ii5YquNBy4Ev0fmrPEwpW4xX17+gPSa5q/evH2qZ32arrPXxQAAAAAAAAAAAAAAgBfYXIouSKEH2gAAAABJRU5ErkJggg==";

var CardBack = function CardBack(_ref) {
  var backImage = _ref.backImage,
      _onClick = _ref.onClick,
      type = _ref.type,
      highLighted = _ref.highLighted;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showFlipIcon = _useState2[0],
      setshowFlipIcon = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mobileView = _useState4[0],
      setmobileView = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      backIsVideo = _useState6[0],
      setbackIsVideo = _useState6[1];

  React.useEffect(function () {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }

    if (type && type === 'video') {
      setbackIsVideo(true);
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-back-root",
    style: {
      backgroundImage: !backIsVideo ? "url(".concat(backImage, ")") : 'unset'
    },
    onMouseOver: function onMouseOver() {
      setshowFlipIcon(true);
    },
    onMouseLeave: function onMouseLeave() {
      setshowFlipIcon(!highLighted ? false : true);
    }
  }, !backIsVideo ? /*#__PURE__*/React__default["default"].createElement("img", {
    className: "flipped-img",
    src: backImage,
    alt: "not found"
  }) : /*#__PURE__*/React__default["default"].createElement("video", {
    className: "flipped-img",
    alt: "not found",
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: backImage,
    type: "video/mp4"
  }), "Sorry, your browser doesn't support embedded videos."), !highLighted ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-icons-holder"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$9,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: function onClick(e) {
      _onClick(e);
    }
  })) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-container-v2"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-holder-v2",
    style: {
      clipPath: "url(#svgPath)"
    },
    onClick: function onClick(e) {
      _onClick(e);
    }
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$8,
    className: "flip-icon",
    alt: "BACK",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: function onClick(e) {
      _onClick(e);
    }
  })))));
};

var img$7 = "data:image/png;base64,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";

const TraitCard = _ref => {
  let {
    trait,
    onClick,
    image,
    traitImg
  } = _ref;
  //console.log(traitImg)
  // const handleClaim = () => {
  //     if (claimUrl) {
  //         window.open(`${claimUrl}`, '_blank')
  //     }
  // }
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "close-button",
    src: img$7,
    alt: "",
    onClick: e => onClick(e)
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-root",
    style: {
      backgroundImage: `url(${image})`
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-content-holder"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-trait-icon-holder"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: traitImg,
    alt: ""
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-title-holder"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "trait-card-title"
  }, trait.name)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-description-holder"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "trait-card-description"
  }, trait.description))))));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$a = "@font-face {\n  font-family: 'energys';\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAB4EABIAAAAASLAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABlAAAABwAAAAcmsyruUdERUYAAAGwAAAAHAAAAB4AJwBqR1BPUwAAAcwAAAE+AAADUi6PJp5HU1VCAAADDAAAACwAAAAwuP+4/k9TLzIAAAM4AAAASwAAAGB5MhbkY21hcAAAA4QAAAGFAAACfszqWnxjdnQgAAAFDAAAAB4AAAAeDPwHh2ZwZ20AAAUsAAABsQAAAmVTtC+nZ2FzcAAABuAAAAAIAAAACAAAABBnbHlmAAAG6AAAEm4AADagWEvA6GhlYWQAABlYAAAANQAAADYnn4aTaGhlYQAAGZAAAAAgAAAAJA5HB99obXR4AAAZsAAAAMUAAAGQRy8RbGxvY2EAABp4AAAAsAAAAMoQQwLWbWF4cAAAGygAAAAgAAAAIAF/ARRuYW1lAAAbSAAAATIAAAJ2EkRklXBvc3QAABx8AAAA+wAAAaPOIEiRcHJlcAAAHXgAAACLAAAAvhPbFdwAAAABAAAAANqHb48AAAAA3ybufQAAAADhHk2seNpjYGRgYOABYjEgZmJgBMJkIGYB8xgAB98AknjanZK9SgNBEMd/u+bycdHEqDF+YaxSWYiVBrGSYBGsfAELK0MKP8A2nY8hIiJBRMRC7PIIPoZgleLadXZzHDGXE8wOO/uf+c/sDMygAJ8t9tEHjeYxhdbJZZsVUuLHGCw/jNXZ6XmbrEXuptDyavmjJVbTxeZYo8Ym2+zJrdEQ0ZTMFxXTlaiKeXK667zBL2SZoumJzjFLiTnmWWCJZarsovWNraCuVZ9pivzrmJdEppfI3Jl78xDii7ERbwmZfadfxzC3Efoe8nZidR9DfBWvad4jthNjP0zPPIf4c4QL/uw5SOhZUaYuWkUeTyauRcOUTMRz4pMOUcZZKdkTT+ZosUd+ohwl/sOwrnZ5tnbabd3gZARn3Ws3b1T8mCcvmzNAM4ILE+Vo6aPMolRcZV2sDXakpzpHVH8ATCBURAAAeNpjYGRgYOBi0GHQY2BycfMJYeDLSSzJY5BgYAGKM/z/DyQQLCAAAJ7KB2t42mNgYU5inMDAysDCasw6g4GBUR5CM19lSGESYEACDQwM7Mj8CCBgcGDgUv3DlvYvjYGBTZbhBlCYGSTHOot1FpBSYGACAAzEC5wAeNqNkU1rE1EUhp8xSavR2lrj50Rzmy8zGjMaTdqpTpOa2mZsWuNGRIToyr8g/hrBtfgXXLgQERdSCraIg7ZQ2uLChRJsub25kSE0CL4P94tzeO895wIhuiOOoWaMZ+pk6HPYeKTWqiLSiRBliCRpslg4VHjIc17wire85yPLrPKFNTb5wS/+sCuiIibiwhatzI6UgYPQDjnyymGaJ9rhDe/4wCc+KwefDbb5SVs5IEZ6HAzZlr/lulyT3+U36ctVuSKX5Gv5kkDyfs++6d/zG1+3/KIfWnnare4fylKgSJkpXW+dBk0e9GWZAQlNSmMF2JpSgKNxNbUAT4MxQPAk44D6gPC+21QwMjDIQQ4RPQxHho4OjxwbPR47cfLU6TM64yxm/Nz5hBhLptKZ7IWcdfFS/nLBvnK1eO1616NUHp9wJm/cdKcq1elbtZnbs3N17858Y2Hxb0GqCotSR+A46rGuC7WOPM/j/3XXNC1oPR7sD5kJ1a+U6pSlemTbdk9oD5x+ZDwAAAAAAAB3AbQBzwH8AUQAdgFBAUIBQwFEATUBPwBEBREAAHjaXVG7TltBEN0NDwOBxNggOdoUs5mQxnuhBQnE1Y1iZDuF5QhpN3KRi3EBH0CBRA3arxmgoaRImwYhF0h8Qj4hEjNriKI0Ozuzc86ZM0vKkap36WvPU+ckkMLdBs02/U5ItbMA96Tr642MtIMHWmxm9Mp1+/4LBpvRlDtqAOU9bykPGU07gVq0p/7R/AqG+/wf8zsYtDTT9NQ6CekhBOabcUuD7xnNussP+oLV4WIwMKSYpuIuP6ZS/rc052rLsLWR0byDMxH5yTRAU2ttBJr+1CHV83EUS5DLprE2mJiy/iQTwYXJdFVTtcz42sFdsrPoYIMqzYEH2MNWeQweDg8mFNK3JMosDRH2YqvECBGTHAo55dzJ/qRA+UgSxrxJSjvjhrUGxpHXwKA2T7P/PJtNbW8dwvhZHMF3vxlLOvjIhtoYEWI7YimACURCRlX5hhrPvSwG5FL7z0CUgOXxj3+dCLTu2EQ8l7V1DjFWCHp+29zyy4q7VrnOi0J3b6pqqNIpzftezr7HA54eC8NBY8Gbz/v+SoH6PCyuNGgOBEN6N3r/orXqiKu8Fz6yJ9O/sVoAAAAAAQAB//8AD3ja7VpbjBvndf7/4fC6wyGHM0Pu7nDI5fK2XEqa3aFWa2q9si3LggtXvshSG6hNi14gBy7SpAic5MUwjKBAUSBPRdA4vcAI+iC0gjEzYl6CXPSaBI5RGJZhtG4h202wQNOieSgayUv3nPPPDIe7a6MPBQo0a8DD4ZCrOdfv+84ZMoldYEz6/fRVlmJZdsrnzHkwyMrFn7l+Jv2PDwYpCU6Zn8LLabwcZDPqhw8GHK+PtJbWbWmtC9LKtMO/Pv1M+uq9v7sgv87gn2S7jPGX099gZdZmp1lQZGw4kTmryUOv6nCv43jsjldx/Xx6z6u7vp3e87t8yPyqrFW8lfHG5vbW6TM73K3WTJUP+eopfnpLoysNqabRpd6ubd41LEmyjLtqrQhvCuVSJny7edmw6yYclNpPS/JTRiOvVBbu+0YDLEH7WrKaeg3sqzKHXWae6nidkZ+WyBh8sVwvXfYNvucNXe5tOF7ljl/I7gWVQmF46+EKyw+9Qtlf50O/BVfXW3h1vZYf+pvgxcamjtZLbtXUjAxZv8vbq73ugasSXj3FW7bxwvsV2668r9SUi4bN37KNL4Fn4EhBV3IXVVNNXzGMhm1O3zKsYlX5Sd2M32ZK5cJPVJNBBnc/ejH1QsZmj7NL7Bn2PRZchKh7O6OJLDFFHtJbPw8uPekGF/No8cVH8sMgfxFP8y64dMnxnJFfha+suMGlKl6/pObxOIQvVi/hhaqVH3LvMiVQgwTm9rxfcb182b/Ah0Gh+oTrupPdDHsEbtjceBLeebtl/yk+9E65/gPw5Z7rPwthyzNIdHHsP7ULr+6Y+Zcg85OFzSeefqZTS+Tf5iOtxFurPUz/qLV1+hwXl1tQCWEg4bO2tg0XOF5ot0xxdRf/jFdrWlsfadldW3/fsBxHmX6IseMP5UqZuqLx81g1lvGeYTsO15Vq0TKm3ysX6wV9+v1Kg5/P9Z0/dhznXcNaNr/GnzxZso3Ua0bjOvy5plzHspo+h7XGr+y/6hSr6v7nDfu6opWL123p9kCVXrx/hb95kvIDhx9BzTXYKhuw51lQx4Q0IdoDx1/ge9xbp6hmXb8JbdF2vWbZX4HI9V2/BhdKblBbwRTUTCi0IQSxiUGUx35tBV51CGKzDifVsTfQvqWbNXm1K2KJoYsiKMovC43VNzFYUJYjrb9Vq57Z1tq7V8fjq7YpvW3Yj28FzSu2sT8wGvxCEOw0L2eCTWm08+yVMd/DCH743a3LmW9aN37tU4ZtX+Ot4MY5yxpIUGWMU///J/i6xDZZUEU/VfCz6Php9HMZ/fTV9F6gMnRI1aH4cq5vUfNsh3baHPOojcQZWrrbMPinsFMuXsTj9IbR2ExvozGGYd8Ha00whe7fhcO7cH8L77+E95fh/lkHzeBe3fHSd3wTOjdt4v3T1M8AQ+L+VHpaGyuILBGFRqGyjYvQoTaYkdPVTF0HE+xNuKt8k3oSy+HeD8gIztof/Q3/B+4Axmwwr+T4srSH/3syAQv3aoQqC4gqCxGq+IuxCaNkhRN+tKP7AlRUbLBjrwYAoGoFAAKw6V8sRr4PpWHqXupzLM1WmMecCaf291LuRKIz7mUcPytwShu1tPZwM/XXjjTkF6bfwb8fwOGzYHcJsDFEbgEgiXPulSmHgN/0v5aIXJS51d7ANu5idu5CkN5AQHsjys/vQi8sQX6K7AkWLMC/SwcvBdygOn4Jiv7M8rd3f/zvv8PMYUH1WNnjt/3cwi+87G12i/Fs7hT8x+Mz7+FljvfnZ7ahXLI8k4VwfYY/pzrvGbX89C9V54NKDUrFSTX1ez9wpGbIUakvEUcZ7BSDUoQq0aBKjLBKTfJQg87Tyn4F2q0AjlbjEt0BCKoiF4U9hM3zKH9n51lJuvzg/gfjq9g2X5Vfgo45e//lncuXu/JN8h3SxN+E+9YwviX0HQ94WxlvuyjKIjdXFktJWhE4FwIfEIiFBALcgWXReEytKUQXxWqJStGQf478wNkY/P0C3HeL/QELRuhtl+8F3RHepJtBmO+uQx/ozmRZVMxy2S+iRWcIlqqu3wX8LrpetwxwNUQkR5wCXN+G4Cx0tYqfbY8BhXQ4DfILq+OxAJ9z0qjV4A9BS5mqJKpZdLiIXlYbCWqvRm02hj4qcD3zdHM3kAqm8q9lyypL/yTIfvqzycQGvIZy2l+DwpJezAFLDur1c9LmVxRdWdTfKFu2ua8bdjD9Z/40fnH6fNiT2xCDP4IYuBiDDYxBAWJQ2MAYFNJ5ysIKXDEIaI0l5LoRuQ/CoADuGy4SP7oP6uUEuN9xg4UT+OUFYEr/NETixAKA8BrEwSjQCfVFRFvARJqIRZzCRCxmBbUNPP+BYU0mOQjChPjJNgCX61hdWGOWud+v2M67oA7qQExvBvwxEYOpSl8lWJzWxlegGF837BAb0P/Pgf8dqIZgGWsPD57seNqIe13R0+Am8DmAISTbr+b2/B5KM3kZvFkYI2hE2SJHZqkT7mTpdZtShMYjBtQtxIDbqglu8Jup76Bt+y+QvV/Ec1Go0tL3VZtF/EG9OWJfZsFmKFyC/CZJFRlrNb8G2Wo4kypnOmBTg9RKA3LgVct+G8v2NDh1x2Ou34E05VyvU4ZkD72W65+EC0uuvwXJ6mikQ7yCRilr5KGKF3rjj1cgCTbibYpAAgaEyJhMQpEh/VQxTWU6VfUAa5nrooIhcY1IULwZgOBAQaGrX1cqFeX8/rcxLHZl/w8FVs5wqs367LdY0MJodCAaHVKdnUVwWXUmaYoDqlYdnV9zPH7HN6hAPaOM6hrlmk2h8AfgedcAzxfBZ7UDPld74/Ec9YYOHfaxS2KKfCuUcoedQ8FwfjIhYgancmruoFfXwGvI8XXw61XSCGcFz9DBqxAOBhWZwK+GHSj0gg6262W/jOoRkNiKITFqnxARxcTQuz6DDKi6QFqqAIzIrxI4RMD4lcrSIou0GcbYhs5YY7/OAivERxhVhDYbOF6WqqkB7dF1vUYZ28JbjbQZDQONbCjIeqEg6wAU3pJX9H4sag8IsfYM9bjABRKrV86GOsx6dmfnaijDzhMWSEGw+c746jMPph6db3HUm4QAqDgDNlc7K8Dqv82CRtxJjaiTUHyacGVASmigYrzXo85pic5pic4BHboMgUfl2RJtw/wBNUznExsmqhxwcOSiiwfb5O1ZX/ALch8Aezc41CBh1qTbS6sVcFL4F+F5iT2Aijo5Z55xfEOGScaZ9AWd9ctQM5DJMVVTue26oo42XZpflhC64f3ZaDoxx96S5m0gkJ8BJ2vOeOytaN7S+LDQEZ5GHMeTHCeymw2vEiza4SFiOKpMqNZ3KZ//FoiKjUdY+0P+tYodEhwUbILfXoK/mMvzMqDEeRYsYiMVR+K1HQqLDkGCBeWru55VRs2GYFiIZu/2InhZaSRwICk0suHZLIkN4COlWiJnAlJ6/HyGkieaPxYg0lIwfSWZulm/1UANdVADmliZi6LfyFrBRYu0H/AWKT3YbCjH8i62nq8thTXYAcOD4nJzPGf6AULtCuads70Yk2k854TVFzmQ6K5rxLFx8QmOeoFw+XEWrJD9qT1xAhB8AMeK2FcdgWM5wjEDHCoDIucIkbtzo09ysD0ojnZFw1CNzJTQIB6FonEUUKCP0Z/+GRHJrEZKTEe9i70CYAq2hBE3RF+APWUqDuoOc86uObkLMfxyqHb/JIH5Qu3a10Dtznj8JHuOBet4x1WIEZ3Y4UAIPZpGfQ0WnCILkKMqrmeX/YYIUV+QloMAa0POl8deX/MsyPwqvq2PvaIW1JatZP6ThKBVa1XMu5n9uGBGJJFZKxaXIP1B2KFHhBWYTE3r526gtkzGd1YPHawHZGk6HFUHorYx8xU3sGkEti2AYjtkt1ByHV0PM2ei3VKyIHLCg4lYin2s7a/gZiyRn3X2aRashaUb6Gtokt7MH2n9MMnGYRULiRUYHZLNNijhE+CIoUN6muOPLexev9deLfGtAxpq5k5AGVk0V8a/mdQXhyt9a1CS9eaNs9cgZ59P5AN9G7JHhG+ePRKvacczQe6eIEc6hCioDltCIyHHnURATK8BIKqr0RRDCr4WxT8spFmZZbVwU7kLuIGLybCYqENjFRLnhVaWoIExIfMiOMpOtEd5mXq2k9RIsvMxA/gBNU4rUpuwGW5p2uFNSGN/9CHEZ0T6a4sFtVgZ1GJloDqR9MrnaSQAEeDr2Uh69eMQHOwqGe9oSbfquKBdNiFl9ib/LDXLO/J/xL4mcnSK/SoLTqBrrZF4hZGkAjly6P5rOcrRWqxjG5A0GEg3EBK6BAkwoJzAdMU6FnfFwF9RuuZHrHlOwzDB/Bz2jqi0iBiwqawwgEQJUc5uzGmvmOTm55clmGDC/RfgXjXawMqzyOZmkY1F7SyNo0SZhc0BIZ3ENZXohvulw3gky4S9j7JgiDHVR+IVYrswiuC2B6Hslf0aWFCG3CLKknzNYUiHENJcPRHSJt+mHcuskcMmhmMmm8kmd/Ol1/62XAvrz8qvKQvL5nBoLirqWkaahRS+VeGxJC8MlJQ+HOpcVgf3783FE7G1z86xoEvrkpF4BV+UEc074EsLoglidZHTOlEDHB3Q6No97MbWwbk1ciDROaXbIb1CEeyS4bmE3bf/ata1qZ/vJkz+H3Nt+hO4Nt45hlz7dkRIKFPCnNPNr9FeKakBO+yC6Gg6JCUVCkBBryAAV8P7opjKr0LKyyimahCrcnOeSo1MVk2VeMQ4PGqq0DBLGjxuPbZ1uhDSDr8QEWmE1H965fLj1u7JYSEEN0kwESgpsPujp0O719hvCLshpajVYc4KahatvCv5YWARNFkrAE1roUsDiiNqWvCnCmmvu76aoaFXLQvHwMH1I0SMGT+ZoRgnZpfYKVw2/biuV5WaOv17VDjNulmt2M1JIvovoTfqS/a1AaZnQKmYm7vW2VNi7sLuo9f10HbBo8A2oMJx1wYd6K25VBRQvMifZciFp0BS1hugcJXF7iGF0z6CgXqH05NEs0D03uEcHQFm+ARDpAl6cCfcHz7AXmDBmZgvziR2MichNU3Hr8l7QZOS1cSFTA1hOxq86KmfGKEF7nlt13fhwrI7G73EQuYkPtGg+XL9qPnyFN+aVxV4IdZHiQ7asSsfhOMmsW4oL9SaMklAPoBpDxdq8dhZrCpi7kSdAUmO9VNCYzgQk+sQkzpknGYYOiC2l0Yiy7bjLd5BKAq0RYyIlodKXtTwdBE3u425NQYuXlJDnljv9hza+1lyTinlfkjw/yPDDh8IGrmSksvcV8U2o36Qe07OeB1xUh3FrJP+BNapHaWSkc+PUMX3S4f5/AsUj08n94sguMojigXcfAHu2BAb/oe++l/Piw2/UvaKt31T+YVn3Ga3lKJhig1/dEYbfj8d7SAjPYZj3kgX0iybUiWyFvUX0Llk/rncNN6rWNI3pVJV3X+LrIYKgM9ndkMVzDiG+PIU8iVpkPZMi1ixFgkZG/lyBfgSJUgNitTrRxKk2E8QTTVWIHgE7pxXaA7PJh9mi3IcDqtLC0oP6FI8Fq6pN1/L6IW7s6jfwzoElpSVNbkQxb9y08vkQl/G4V5kjLusbfThxEi8Ko5XB1/OUi8CzoyQg1xvVEZPvEXXHyCHuv4O+DUKny8ONuC1C/4p2+CfuTmOd1miB48QxuGz2LnFcAhP4ytn+w/3hYSZaWSYxhGkYojCDcg746u9h/tiz5WQyvNzeUJ5zfx22TPhfp8waiPWtFXH641op1+hDZdF4zeyR0EsGIYgGnCLb1XC7UI1T0PMQfxpJ3w3DwwF4LOQa2OxHAnUG5HHOZpnxFAAAENPMO5WGrb+Fwg53fP91FMHvG0YcZHOnl9ssS+ywEX/1qU9cUIPc1x6mCPTYxx/GUZr4BV1/hkO5FulZzi4vlRgrIYLDfEMp4v5To+9nua1kXVQWXfGnq7dyiur7dmz5FZMMDH3HP1AJ36aQcuukG+kuacZFm68aH1Eb2hWkF6s2CHxTG/SjPcKBSV8pKPgpelrB/fjx7uv493X8e7rl3z3Bdh6vPs63n0d776Od1/Hu6/j3df/1e4LaOh493W8+/p/vfuKfku2jLsvHTsOD/j7xWK4+7Icr3rHL+X2ghL9PKuEu69qiX5Gjruv+qHdF5/ffW2LKbFYLf6Q0Cix+VJN9Xjvdbz3Ot57He+9fin3Xsnf+bMjf8f/v/C5PJz7fJR6fXPu89z8589lX/m92efwX/obkLMU6AD8OeKQDh4H/S9jViapNMvKw/DFTxMYb2otDf/q3nXG/hsSUx3oAAB42mNgZGBgAOJ79uky8fw2XxnkORhA4L7au1oQ/VDOd83/P/8DOLTZZIFcDgYmkCgAOkILewAAAHjaY2BkYGCT/a/BwMAR/v/P/98c2gxAERSQAgCNlgY4eNpjesPgwgAETKsYwIBpJQMD418g3sdgy3yXQZF5E5D+zmDLJAPGqkxsDMosagzajFMZNJmrGJKYtwDFhRikmTcwWDKvYzCHYlswvsuQBpIH44VAcRC9AYjnItFlULVAObCdRf//gOWKGGxZnKF6QbgGSoPk1jBYM7cz6IP5dVB1a4D2g9ywksr2TIeah8UeUDiBADMfAwObLIJm4gSGXzsQs0Aww2EgbQmkwxgYQGEHx+EM2hxADJIDqWedycAAAF2kSqsAAAB42mNgYNBBgjUMzxi3Mekw5TCtY3rFzMVsw1zHvIv5G0sFyw9WH9ZLbHZsLWwf2BPYn3DYcMzj+MZpwLmMi4Erj+sC1z9uB+413O94QnjW8DzjdeJdwyfGt4DvFb8Gfxv/G4EMgRuCSYK7hGSESoTWCasI1wm/EfETqRHZJ6olmiN6SUxLLEXsgLiW+BQJOYk0iSWSTJIZkk+kQqTu4YHvpP5J80nLSeuBYQAAmOM79AABAAAAZABSAAMAAAAAAAIAAQACABYAAAEAAL4AAAAAeNqNkktKA0EQhr92ophNfCwkZDWIC1cymfGBuhF8IIgbA8laySQGQ6KZCMYDeAIPIO68gifwcQL3HsS/ZzoSgkJoauqrqr+6q5sB5njFw+TywLIsY0NRUcZTFNhx7BFw7DjHKneOpzngyfEMK3w7zrNoZh3PUzQlxwsUTOj4jSWz5/idwFQdf0jz4PhT/Jjxl0fJPLNPl3utOjEJLZp08HmRhZox1DpUJqanykAKnyN1dOhzpmyTW9qcq1pmTfpAfnes42/9f7v6Y7pqqrKTddPJRs8Z9iTStGmoeqqeq7TDJ5JyQ7Y10TwnXCpvJ6nJD2ST3bum6EJnD6fP5rPZuqKK/LW8z2ZaK+sPiNjWN2T9942j9PUb2s/u2ldHdudYcTLyMhVulGmp1rM3/gGC6Vr3AAB42m3Mx07DABCE4X/TTAqkF8oJ0avtxCmUg0UIhN47B6SQIiGEQDnwWvCAgOI9MpdPsysNPgb5gTb/pQXiE78EJIifAEEMwkSJESdBkhRpMmTJkafAKGOMM8EkU0wzwyxzzLPAIksss8IqJhY2RUo4lKlQpcYa62ywSZ1tGuywS5M99jngkCOOOeGUM8654JIrrrnhljvueeBRQmLIkIQlIlGJybCMSFwSkpSUpCUjWb74lpzkpRDqvHy+dS0P2+i/9kzTdNW6p2uqg27/PVRLtdWiWlIdtaxW1KpaU11PS3ctK9Ludfrvz62nj653shuejqfT2PoFjN5GiwB42tvB+L91A2Mvg/cGjoCIjYyMfZEb3di0IxQ3CER6bxAJAjIaImU3sGnHRDBsYFRw3cCs7bKBScF1EyMXkzaYwwzkMHFCOSxADrMihMO4gRWqnlPBdRcDK4sNA5P2Rma3MqAIB0iEk0kZIcIOEuFgLEKIsAHNYueCc7nAhtT/hyuI3CCiDQA5dTO7AA==) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'gcv2-poppins-regular';\n  src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\n.card-image-container{\n  position: relative;\n  /* min-height: 500px; */\n  margin: auto;\n  height: 100%;\n  width: 100%;\n}\n.pyramid_anim_container {\n  z-index: 2;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  transform: translate3d(0, 0, 0);\n}\n\n.resizer-container{\n  padding: 10px;\n}\n\n.scope span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center;\n  transform-style: preserve-3d;\n}\n.scope span:first-child {\n  transform: rotateY(calc(0deg)) translateZ(1px) rotateX(0deg);\n}\n.scope span:nth-child(2) {\n  transform: rotateY(calc(0deg)) translateZ(0px) rotateX(0deg);\n}\n.scope span:nth-child(3) {\n  transform: rotateY(calc(0deg)) translateZ(0px) rotateX(0deg);\n}\n\n.scope {\n  position: relative;\n  transform-style: preserve-3d;\n  animation: slid 5s linear infinite;\n  border-radius: 12px;\n  transition: 1.5s all;\n  padding: 10px;\n  /* box-shadow: 0px 55px 88px 0px rgba(0,0,0,0.42); */\n}\n.scope span {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.front.active::after{\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 100%;\n  display: block;\n  background: linear-gradient(112deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\n  background-position-x: 0;\n  background-repeat: no-repeat;\n  transition: all .35s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n  animation: shiningEffect1 2s ease-in-out normal ;\n}\n.back.active::after{\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 100%;\n  display: block;\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\n  background-position-x: 0;\n  background-repeat: no-repeat;\n  transition: all .35s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n  animation: shiningEffect2 2s ease-in-out normal ;\n}\n\n.back_card.active::after{\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 100%;\n  display: block;\n  background: linear-gradient(250deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.3) 50%,hsla(0,0%,100%,0) 65%);\n  background-position-x: 0;\n  background-repeat: no-repeat;\n  transition: all .35s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n  animation: shiningEffect2 2s ease-in-out normal ;\n}\n.badge-img{\n  position: absolute;\n  width: 75px;\n  height: 75px;\n  bottom: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  cursor: pointer;\n}\n.flip-icon {\n  /* position: absolute; */\n  width: 40px;\n  height: 40px;\n  /* margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;*/\n  cursor: pointer; \n}\n.fullscreen-icon{\n  /* position: absolute; */\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  /* margin-top: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; */\n  cursor: pointer;\n}\n\n\n\n.back{\n  animation: hideBack 2s ease-in-out normal;\n  transition: all 1s;\n  /* visibility: hidden; */\n  border-radius: 12px;\n}\n.back.active{\n  /* visibility: visible; */\n}\n\n.card-back-root {\n  height: 100%;\n  transform: rotateY(180deg);\n  border-radius: 12px;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  justify-content: flex-end;\n  position: relative;\n}\n.card-icons-holder{\n  position: absolute;\n  inset: 0px;\n  margin: auto;\n  width: 100%;\n  max-height: 40px;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n.trait-container-v2 {\n  position: absolute;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  gap: 8px;\n  top: 30px;\n  right: 30px;\n  z-index: 100;\n}\n\n.trait-holder-v2{\n\n  width: 60px;\n  height: 66px;\n\n  background-color: rgba(0,0,0,0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  overflow:hidden;\n  /* box-shadow: 2px 2px 4px rgba(0,0,0,0.35); */\n\n}\n\n.trait-holder-v2:hover {\n  border-color: #fc6405;\n  \n}\n.trait-holder-v2 img{\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  cursor: pointer;\n  pointer-events:none;\n}\n\n.trait-holder-v2.numeric{\n  font-family: energys; \n  font-size:32px;\n  color:white;\n}\n\n.trait-card-root{\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  transform: rotateY(180deg);\n  -webkit-background-position: center;\n  background-position: center;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.close-button {\n  width: 20.5px;\n  height: 20.5px;\n  cursor: pointer;\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 5;\n  transform: rotateX(0deg);\n}\n.trait-card-content {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  background-color: #fc6405b3;\n}\n\n.trait-card-content-holder{\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n \n}\n\n.trait-card-trait-icon-holder {\n  /* width: 100%; */\n  height: 40%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.trait-card-trait-icon-holder img{\n  width: 100%;\n  height: 100%;\n}\n.trait-card-title-holder{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n.trait-card-title {\n  margin: 0px;\n  font-weight: 400;\n  color: rgb(250, 250, 242);\n  font-size: 36px;\n  font-family: Poppins-semibold;\n  line-height: 42px;\n  text-align: center;\n  width: fit-content;\n  /* max-width: 250px; */\n  /* min-width: 250px; */\n}\n.trait-card-description-holder{\n  margin-top: 25px;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  overflow-y: auto;\n}\n .trait-card-description-holder::-webkit-scrollbar {\n  width: 4px;\n}\n.trait-card-description-holder::-webkit-scrollbar-track {\n  background: #ffffff49;\n} \n.trait-card-description-holder::-webkit-scrollbar-thumb  {\n  background: #ffffff;\n} \n.trait-card-description{\n  margin: 0px;\n  font-weight: 400;\n  color: rgb(250, 250, 242);\n  font-family: poppins;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  max-width: 90%;\n  min-width: 120px;\n  word-break: break-word\n}\n.trait-card-button-holder{\n  text-align: center;\n  margin-top: 30px;\n}\n\n@keyframes shiningEffect1 {\n  0%{\n\n    left: -100%;\n  }\n 100%{\n\n  left: 100%;\n }\n}\n@keyframes shiningEffect2 {\n  0%{\n\n    right: -100%;\n  }\n 100%{\n  right: 100%;\n }\n}\n\n@keyframes hideBack {\n from{\n  visibility: visible;\n  }\n to{\n    visibility: hidden;\n  }\n}\n.flipped-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  object-fit: cover;\n  transition: 2s;\n}\n.buttonHolder{\n  position: fixed;\n  height: 16px;\n  width: 16px;\n  top: 4%;\n  left: 4%;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1rem;\n  color: #fff;\n  transition: color .3s ease-in-out;\n  cursor: pointer;\n}\n\n.branding-container{    \n  position: absolute;\n  bottom: 35px;\n  width: 100%;\n  height:20px;\n  text-align: center;\n  display: block;\n}\n\n.branding-container  img{\n\n  height: 100%;\n}\n\n\n/* TRAIT LIST */\n\n.trait-list-container {\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  font-size: 2rem;\n}\n\n.trait-list-container .traits{\n  /* background: red; */\n  flex-grow: 1;\n  margin-top: 1.5em;\n  max-height: 80%;\n  transform-origin: left;\n  perspective-origin: left;\n  transform-style: preserve-3d;\n  transform: perspective(600px) rotateY(0deg);\n  transition: all 1s ease-in-out;\n}\n\n.trait-list-container .traits .content-wrap{\n  /* background: green; */\n  margin-left: 1em;\n  margin-right: 2em;\n  height:100%;\n  \n\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  font-family: energys; \n  font-size:1em;\n}\n\n.content-wrap p{\n  color:white;\n  opacity: 0.75;\n  transform: opacity 0.5s ease-out;\n  margin-top: 0;\n  margin-bottom: 0.3em;\n  cursor: pointer;\n}\n\n.content-wrap p:hover{\n  opacity:1;\n}\n\n.trait-details{\n  padding-left: 1em;\n  color: white;\n}\n\n.trait-details h3.title{\n  max-width: 75%;\n  font-family: 'energys';\n  font-size: 1.4em;\n  margin-top: 0;\n  margin-bottom: 0.6em;\n}\n\n\n.trait-details .scroll-wrapper{\n  height: 75%;\n  margin-right: 1.8em;\n}\n\n.trait-details .scroll-wrapper p.description{\n  font-family: 'gcv2-poppins-regular';\n  font-size: 0.7em;\n  line-height: 1.4em;\n  text-align: left;\n  margin-top: 0;\n}\n\n\n.trait-list-container .logo{\n  position: relative;\n  /* background: blue; */\n  max-height: 60px;\n  height: 10%;\n  margin-bottom: 1.5em;\n  min-height: 10%;\n}\n\n.trait-list-container .logo img {\n  display: block;\n  position: absolute;\n  object-fit: contain;\n  object-position: center;\n  width: 100%;\n  height: 100%;\n}\n\n.trait-details{\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transform: rotateY(180deg);\n  transform-origin: left;\n}\n\n\n\n@media screen and (max-width: 450px) {\n  /* .card-image-container {\n      min-height: 300px;\n  } */\n  .scope {\n    position: relative;\n    height: 440px;\n    transform-style: preserve-3d;\n    animation: slid 5s linear infinite;\n    transition: 2s all;\n  }\n  .arrow{\n    display: none;\n  }\n}\n@media screen and (max-width: 350px) {\n  .badge-img{\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n  }\n  .scope {\n    position: relative;\n    /* width: 250px !important;\n    height: 340px; */\n    transform-style: preserve-3d;\n    animation: slid 5s linear infinite;\n    transition-property: position;\n    transition: 2s;\n  }\n}\n\n\n.c-large.square .trait-card-trait-icon-holder{\n  /* width: 100%; */\n  height: 35%;\n  margin-bottom: 10px;\n}\n\n.c-large.square .c-medium .trait-card-title{\n  font-size: 36px;\n}\n\n.c-large.square .trait-card-description{\n  line-height: 22px;\n}\n\n.c-large .branding-container{\n    bottom: 25px;\n    height: 18px;\n}\n\n\n.c-medium .trait-container-v2 {\n  top:15px;\n  right:15px;\n\n\n}\n\n\n.c-medium .trait-holder-v2{\n  width: 40px;\n  height: 44px;\n}\n.c-medium .trait-holder-v2.numeric{\n  font-size:28px\n}\n\n.c-medium .trait-card-trait-icon-holder{\n /*  width: 100%; */\n  height: 30%;\n  margin-bottom: 10px;\n}\n.c-medium .trait-card-title{\n  font-size: 32px;\n}\n.c-medium .trait-card-description{\n  line-height: 22px;\n}\n\n.c-medium.square .trait-card-trait-icon-holder{\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.c-medium.square .trait-card-title{\n  font-size: 28px;\n  line-height:30px\n}\n\n.c-medium .branding-container{\n  bottom: 20px;\n  height: 15px;\n}\n\n.c-medium .trait-list-container{\n  font-size: 1.5rem;\n}\n\n.c-medium .trait-details .scroll-wrapper {\n  margin-right: 1.5em;\n}\n\n\n\n\n.c-small .trait-container-v2 {\n  top:15px;\n  right:15px;\n\n\n}\n.c-small .trait-holder-v2{\n  width: 30px;\n  height: 33px;\n}\n\n.c-small .trait-holder-v2.numeric{\n  font-size:20px\n}\n\n.c-small .trait-card-content-holder{\n  padding: 20px 10px 20px 10px;\n}\n.c-small .trait-card-trait-icon-holder{\n  /* width: 100%; */\n  height: 25%;\n  margin-bottom:5px;\n}\n.c-small .trait-card-title{\n  font-size: 27px\n}\n\n.c-small .trait-card-description{\n  line-height: 16px;\n  line-height: 17px;\n}\n\n.c-small.square .trait-card-trait-icon-holder{\n  width: 52px;\n  height: 52px;\n  margin-top:0px;\n  margin-bottom:0px;\n}\n.c-small.square .trait-card-title{\n  font-size: 24px;\n  line-height: 25px;\n}\n\n.c-small.square .trait-card-content-holder{\n  padding: 15px 10px 15px 10px;\n}\n\n.c-small.square .trait-card-description-holder{\n  margin-top: 10px;\n}\n\n.c-small .branding-container{\n  bottom: 20px;\n  height: 12px;\n}\n\n.c-small .trait-list-container{\n  font-size: 1.2rem;\n}\n\n.c-small .trait-details .scroll-wrapper {\n  margin-right: 1.5em;\n}\n\n\n\n.c-xsmall .trait-card-content-holder{\n  padding: 30px 5px 20px 5px;\n}\n\n/* .c-small .trait-card-trait-icon-holder, */\n .c-xsmall .trait-card-trait-icon-holder{\n  display: none;\n}\n.c-xsmall .trait-card-content-holder .trait-card-title{\n  font-size: 20px;\n  line-height: 22px;\n  padding-top: 15px;\n}\n\n.c-xsmall .trait-container-v2 {\n  top:12px;\n  right:12px;\n}\n\n.c-xsmall .trait-holder-v2{\n  width: 24px;\n  height: 26px;\n}\n\n.c-xsmall .trait-holder-v2.numeric{\n  font-size:12px\n}\n\n.c-xsmall .trait-card-description{\n  line-height: 18px;\n}\n\n.c-xsmall .branding-container{\n  bottom: 17px;\n  height: 8px;\n}\n\n.c-xsmall .trait-list-container{\n  font-size: 1rem;\n}\n.c-xsmall .trait-details .scroll-wrapper {\n  margin-right: 1.3em;\n}\n\n.c-xsmall .trait-list-container .logo{\n  display: none;\n}";
styleInject(css_248z$a);

const useContainerDimensions = myRef => {
  const getDimensions = () => ({
    width: myRef.current.offsetWidth,
    height: myRef.current.offsetHeight
  });

  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  return dimensions;
};

var img$6 = "data:image/png;base64,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";

var css_248z$9 = ".glx-scrollbar{\n\tposition: relative;\n\twidth: 100%;\n\theight:100%;\n\tpadding-right: 18px;\n\toverflow:hidden;\n}\n\n\n.glx-scrollbar-scroll{\n\tscrollbar-width: none;\n\t-ms-overflow-style: none;\n\toverflow: auto;\n    height: 100%;\n\twidth:100%;\n  }\n  \n.glx-scrollbar-scroll::-webkit-scrollbar {\n\tdisplay: none;\n}\n\n.glx-scrollbar-scroll{\n\toverflow: auto;\n}\n\n.glx-track{\n\twidth:8px;\n\tposition: absolute;\n\ttop:0;\n\tright:0;\n\tbottom:0;\n\tborder-right:solid 2px black;\n\ttransition: opacity 0.5s ease-out;\n}\n\n.glx-thumb{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 200px;\n    min-height: 70px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n}\n\n.glx-thumb .glx-thumb-top{\n\tbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAMgCAMAAAAdvxJjAAAAS1BMVEVHcEzz8/Py8vLx8fF0dHQsLCzy8vL///+8vLwtLS3x8fF1dXWjo6Px8fHy8vJ1dXXx8fG7u7uEhIS+vr4AAAACAgIBAQEEBAQFBQXdjDhUAAAAFHRSTlMAKyp19/0pA8f9dPj4c3b3csj4xpTkHZ8AAAClSURBVGje7djJDsIwDEXRFErTMg+vSZn+/zcRQqiuN2FZoZudz7NkKd45BPvicTupm0snG+8Ogww0bSeNENf1IAOLT/yFuKyzDFTtShoh7jdZBqqTid9wzprCUw4EAAAgpZA8uI6+CIk/BQAAAAAAAAAAAAAAmM21x0H/R8AZCgCAnyEV4eEhe7h5uHu4FqewFwAAAAAAAAAAAAAAAAAAAAAA5ggv4jHiEeAIA48AAAAASUVORK5CYII=');\n\tbackground-position: top left;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100%;\n\twidth:100%;\n\theight: 100%;\n}\n\n.glx-thumb .glx-thumb-bottom{\n\tbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAyCAYAAABVl1tcAAABn0lEQVR4AWJobGz8ycXF9Z+BgYE8/P37d6UrV64sSktL+8PKykq6Ae4FPmD85csX/ePHj28OCwv7y8TERKoBCPzp0yfbvXv3HnJzc/tDSDPIIqhGTPz161ffjRs3njc3N8dpENDL/0CKceL///8zffv2LWbRokV3tLW1/6IbwMbGBjeAkEGsQBdlA9qtA88MgTAM4Jcys8/cbFUTuZD614bBMGwxhFWDKKR/bzQ32a0WzFi3wzYv4Lu3DxAe4PWTjsfTNM0LYwx+gdwLANBOCHGf5/m74ziSUrpoAQA67/v+Sb3YFwoA0CUe+M0GHAKQUl6sAtI0/eSc5wqyUQClVNq2LVUzzRiIgBZCQcQ0zT8ABUEABRHQfyiIGIYBj7UhAg5QEAD0o5pbrgJc18UBIAcDNmADNiCO43UA5/wxy7IPz/NQwP9kGYYhK4pi9H1fHwCT5UwI8VCW5VsQBPoAgE7HcbyrqmoIw3DRBgC0m6bptq5rHkXRog0A6GSe55u2bfskSRZtAEDHarFed133zBj7tixLDwDQkYKu1M9+/QFtJbMQ6eN8kAAAAABJRU5ErkJggg==');\n\tbackground-position: bottom left;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n\twidth: 100%;\n\theight:70px;\n\tmargin-top: -1px;\n}";
styleInject(css_248z$9);

const GalaxisScrollBar = _ref => {
  let {
    children,
    style
  } = _ref;
  const [hidden, setHidden] = React.useState(false);
  const [thumbHeight, _setThumbHeight] = React.useState(100);
  const thumbHeightRef = React.useRef(thumbHeight);

  const setThumbHeight = val => {
    thumbHeightRef.current = val;

    _setThumbHeight(val);
  };

  const [isDragging, setIsDragging] = React.useState(false);
  const [currentScrollTop, setCurrentScrollTop] = React.useState(0);
  const [scrollStartPosition, setScrollStartPosition] = React.useState(0);
  const observer = React.useRef(null);
  const scrollRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const thumbRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef.current && trackRef.current) {
      const ref = contentRef.current;
      const sRef = scrollRef.current;
      observer.current = new ResizeObserver(() => {
        if (trackRef.current) {
          handleResize(ref, trackRef.current.clientHeight);
        }
      });
      observer.current.observe(ref);
      sRef.addEventListener('scroll', updateThumbPos);
      return () => {
        console.log('unobserve?');
        observer.current.unobserve(ref);
        sRef.removeEventListener('scroll', updateThumbPos);
      };
    }
  }, []);
  const updateThumbPos = React.useCallback(() => {
    if (!scrollRef.current || !trackRef.current || !thumbRef.current) {
      return;
    }

    const {
      scrollTop: contentTop,
      scrollHeight: contentHeight
    } = scrollRef.current;
    const {
      clientHeight: trackHeight
    } = trackRef.current;
    let newTop = contentTop / (contentHeight - trackHeight) * (trackHeight - thumbHeightRef.current);
    newTop = Math.min(newTop, trackHeight - thumbHeightRef.current);
    const thumb = thumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, []);

  function handleResize(ref, trackSize) {
    const {
      clientHeight,
      scrollHeight
    } = ref;
    console.log('resize heights', trackSize, clientHeight);

    if (trackSize < clientHeight) {
      setThumbHeight(Math.max(trackSize / clientHeight * trackSize, 70));
      setHidden(false);
    } else {
      setThumbHeight(trackSize);
      setHidden(true);
    }
  }
  /* DRAGGING */


  const handleThumbMouseDown = React.useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setScrollStartPosition(e.clientY);

    if (scrollRef.current) {
      console.log('initial scroll top', scrollRef.current.scrollTop);
      setCurrentScrollTop(scrollRef.current.scrollTop);
    }

    console.log('++ START GRAB', scrollRef);
  }, []);
  const handleThumbMouseUp = React.useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log('-- STOP GRAB');
  }, []);
  const handleThumbMouseMove = React.useCallback(e => {
    e.preventDefault();
    e.stopPropagation();

    if (isDragging) {
      const {
        scrollHeight: contentScrollHeight,
        offsetHeight: contentOffsetHeight
      } = scrollRef.current;
      console.log('mouse movement delta', e.clientY - scrollStartPosition);
      const computedThumbHeight = trackRef.current.clientHeight / contentRef.current.clientHeight * trackRef.current.clientHeight;
      console.log('thumb heights', thumbHeightRef.current, computedThumbHeight);
      const deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / computedThumbHeight);
      console.log('deltaY', deltaY);
      const newScrollTop = Math.min(currentScrollTop + deltaY, contentScrollHeight - contentOffsetHeight); //console.log(newScrollTop)

      scrollRef.current.scrollTop = newScrollTop;
    }
  }, [isDragging, currentScrollTop, thumbHeightRef]);
  React.useEffect(() => {
    console.log(' +++ add mouse listeners');
    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleThumbMouseUp);
    document.addEventListener('mouseleave', handleThumbMouseUp);
    return () => {
      console.log(' --- remove mouse listeners');
      document.removeEventListener('mousemove', handleThumbMouseMove);
      document.removeEventListener('mouseup', handleThumbMouseUp);
      document.removeEventListener('mouseleave', handleThumbMouseUp);
    };
  }, [handleThumbMouseMove, handleThumbMouseUp]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-scrollbar",
    style: style
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-scrollbar-scroll",
    ref: scrollRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-scrollbar-content",
    ref: contentRef
  }, children)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-track",
    ref: trackRef,
    style: {
      opacity: hidden ? '0' : '0.3'
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-thumb",
    ref: thumbRef,
    style: {
      height: `${thumbHeight}px`,
      cursor: isDragging ? 'grab' : 'pointer'
    },
    onMouseDown: handleThumbMouseDown
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-thumb-top"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "glx-thumb-bottom"
  }))));
};

const TraitListCard = _ref => {
  let {
    traits,
    onClick,
    bgColor
  } = _ref;
  const [bg, setBg] = React.useState([0, 0, 0]);
  const [selectedTraitIdx, setSelectedTraitIdx] = React.useState(0);
  const [traitActive, setTraitActive] = React.useState(false);
  React.useEffect(() => {
    console.log('traits', traits);
  }, [traits]);
  React.useEffect(() => {
    if (bgColor) {
      console.log(bgColor);
      setBg(bgColor);
    }
  }, [bgColor]);

  const onCloseClicked = e => {
    if (traitActive) {
      hideTraitDetails();
      setTraitActive(false);
    } else {
      onClick(e);
    }
  };

  const showTraitDetails = () => {
    document.getElementById('trait-base').style.transform = 'perspective(600px) rotateY(-180deg)';
  };

  const hideTraitDetails = () => {
    document.getElementById('trait-base').style.transform = 'perspective(600px) rotateY(0deg)';
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-card-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-container-v2"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-holder-v2",
    style: {
      clipPath: "url(#svgPath)"
    },
    onClick: e => {
      onCloseClicked(e);
    }
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$8,
    className: "flip-icon",
    alt: "BACK"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-list-container",
    style: {
      backgroundColor: `rgb(${bg[0]},${bg[1]},${bg[2]})`
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "traits",
    id: "trait-base"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "content-wrap"
  }, traits && traits.length > 0 && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, traits.map((trait, idx) => /*#__PURE__*/React__default["default"].createElement("p", {
    key: idx,
    onClick: e => {
      setSelectedTraitIdx(idx);
      showTraitDetails();
      setTraitActive(true);
    }
  }, trait.name)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-details"
  }, /*#__PURE__*/React__default["default"].createElement("h3", {
    className: "title"
  }, traits[selectedTraitIdx].name), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "scroll-wrapper"
  }, /*#__PURE__*/React__default["default"].createElement(GalaxisScrollBar, null, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "description"
  }, traits[selectedTraitIdx].description))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$6,
    alt: "GenZero"
  })))));
};

const GalaxisCardV2 = _ref => {
  let {
    metadata,
    traitTypes,
    horizontalPadding = 20,
    imageContainerWidth = null,
    apiUrl
  } = _ref;
  const [traitsVisible, setTraitsVisible] = React.useState(false);
  const [selectedTrait, setSelectedTrait] = React.useState({});
  React.useState(false);
  const [showFlipIcon, setshowFlipIcon] = React.useState(false);
  React.useState(false);
  const [traitType, setTraitType] = React.useState(traitTypes ? traitTypes[0] : null); // const [randomImages, setrandomImages] = useState([ARTARRAY[0]]);

  React.useState(false);
  React.useState(null);
  const [mobileView, setmobileView] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const imageRef = React.useRef(null);
  const [defaultScopeWidth, setDefaultScopeWidth] = React.useState(imageContainerWidth ? imageContainerWidth - horizontalPadding : 400); //const GALAXIS_BASE_URL = 'https://galaxis-web-backend-staging.herokuapp.com';

  const GALAXIS_BASE_URL = apiUrl ? apiUrl : 'https://galaxis-backend.herokuapp.com'; //console.log('api url',GALAXIS_BASE_URL);

  const containerRef = React.useRef();
  const {
    width,
    height
  } = useContainerDimensions(containerRef);
  const [imageRatio, setImageRatio] = React.useState(0);
  const [resizerComponentSize, setResizerComponentSize] = React.useState({
    width: 0,
    height: 0
  });
  const [containerSize, setContainerSize] = React.useState('c-medium');
  React.useState(false);
  const [highlightedSides, setHighlightedSides] = React.useState([]);
  const [showFront, setShowFront] = React.useState(true);
  const [showBack, setShowBack] = React.useState(false);
  const [bgColorArray, _setBgColorArray] = React.useState(null);
  const bgcRef = React.useRef(bgColorArray);

  const setBgColorArray = val => {
    bgcRef.current = val;

    _setBgColorArray(val);
  };

  const visible = {
    FRONT: 0,
    BACK: 1,
    TRAITLIST: 2,
    TRAITS: 3
  };
  const [activeBackSide, setActiveBackSide] = React.useState(visible.BACK);
  React.useEffect(() => {
    if (window.innerWidth < 900) {
      setmobileView(true);
    }

    if (window.innerWidth < 410) {
      setDefaultScopeWidth(window.innerWidth - horizontalPadding);
    }

    if (metadata.traits && metadata.traits.length > 0) {
      setSelectedTrait(metadata.traits[0]);
    }
  }, []); //TAS

  React.useEffect(() => {
    //check for highlighted sides
    let highlighted = [];
    console.log('METADATA IN SIDES', metadata);

    if (metadata.sides && metadata.sides.length > 0) {
      console.log('check for highlighted sides', metadata.sides); //display_mode "highlight"

      metadata.sides.forEach(item => {
        if (item.display_mode && item.display_mode === "highlight") {
          highlighted.push(item);
        }
      });
      console.log('+++++', highlighted);
      setHighlightedSides(highlighted);
    }
  }, [metadata]);
  /*   const showTraits = (e) => {
      e.stopPropagation();
      setTraitsVisible(true);
      document.getElementById('scope').style.transform =
        'perspective(1000px) rotateY(180deg)';
    };
  
    const hideTraits = (e) => {
      e.stopPropagation();
      setTraitsVisible(false);
      setshowBackCard(false);
      document.getElementById('scope').style.transform =
        'perspective(1000px) rotateY(0deg)';
    }; */

  const flipToBack = e => {
    e.stopPropagation();
    setShowBack(true);
    setShowFront(false); //TODO: set visible back content

    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(180deg)';
  };

  const flipToFront = e => {
    e.stopPropagation();
    setShowBack(false);
    setShowFront(true);
    document.getElementById('scope').style.transform = 'perspective(1000px) rotateY(0deg)';
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  const setTheImageRatio = (width, height) => {
    setImageRatio(height / width);
  };

  React.useEffect(() => {
    if (imageRatio != 0) {
      setResizerComponentSize({
        width: width < height / imageRatio ? 100 + '%' : height / imageRatio,
        height: width < height / imageRatio ? width * imageRatio : '100%'
      });
    }
  }, [imageRatio, width, height]);
  React.useEffect(() => {
    console.log('rwh', imageRatio, width, height);

    if (width) {
      let cSize = '';

      if (width > 600) {
        cSize = 'c-xlarge';
      } else if (width > 500) {
        cSize = 'c-large';
      } else if (width > 390) {
        cSize = 'c-medium';
      } else if (width > 240) {
        cSize = 'c-small';
      } else {
        cSize = 'c-xsmall';
      }

      if (imageRatio > 0) {
        cSize += imageRatio === 1 ? ' square' : ' protrait';
      }

      setContainerSize(cSize); // console.log(containerSize)
    }
  }, [width, imageRatio]);
  React.useEffect(() => {
    if (metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].original_height && metadata.sides[0].original_width) {
      let originalHeight = metadata.sides[0].original_height;
      let originalWidth = metadata.sides[0].original_width;
      console.log('TAS', width, height);
      console.log(originalHeight, originalWidth);

      if (imageRatio != 0) {
        //console.log(imageRatio)
        setResizerComponentSize({
          width: originalWidth < originalHeight / imageRatio ? 'auto' : originalHeight / imageRatio,
          height: originalWidth < originalHeight / imageRatio ? originalWidth * imageRatio : 'auto'
        });
      }

      setLoading(false);
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, loading && /*#__PURE__*/React__default["default"].createElement(spinnersReact.SpinnerCircular, {
    size: 80,
    color: "rgb(252, 108, 3)",
    style: {
      position: 'absolute',
      margin: 'auto',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    secondaryColor: 'white'
  }), metadata && /*#__PURE__*/React__default["default"].createElement("div", {
    className: `card-image-container ${containerSize}`,
    ref: containerRef,
    style: {
      opacity: loading ? '0' : '1'
    },
    onClick: e => stopPropagation(e)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pyramid_anim_container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "resizer-container",
    style: {
      opacity: resizerComponentSize.width === 0 ? 0 : 1,
      width: resizerComponentSize.width,
      height: resizerComponentSize.height
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "scope",
    style: {
      width: '100%',
      height: '100%'
    },
    id: "scope",
    onTransitionEnd: () => {
      console.log('hello');
    },
    onMouseOver: () => {
      setshowFlipIcon(true);
    },
    onMouseLeave: () => {
      setshowFlipIcon(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: `front ${showFront ? 'active' : ''} `,
    id: "front-span"
  }, metadata.sides && metadata.sides.length >= 1 && (!metadata.sides[0].type || metadata.sides[0].type !== 'video') || !metadata.sides ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "flipped-img",
    src: metadata.sides && metadata.sides.length >= 1 && metadata.sides[0].image ? metadata.sides[0].image : metadata.image,
    alt: "not found",
    ref: imageRef,
    onLoad: e => {
      setTheImageRatio(imageRef.current.naturalWidth, imageRef.current.naturalHeight);

      try {
        imageRef.current.crossOrigin = "anonymous";
        const context = document.createElement('canvas').getContext('2d');
        context.drawImage(imageRef.current, 0, 0);
        const {
          data
        } = context.getImageData(10, 10, 1, 1);

        if (data) {
          setBgColorArray([data[0], data[1], data[2]]);
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  }), metadata.overlays && metadata.overlays.length > 0 && metadata.overlays[0].layers && metadata.overlays[0].layers[0].length > 0 && /*#__PURE__*/React__default["default"].createElement("img", {
    src: metadata.overlays[0].layers[0],
    className: "flipped-img",
    alt: "overlay"
  })) : /*#__PURE__*/React__default["default"].createElement("video", {
    className: "flipped-img",
    alt: "not found",
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
    onLoadedData: () => setTheImageRatio(metadata.sides[0].original_width, metadata.sides[0].original_height)
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: metadata.sides[0].image,
    type: "video/mp4"
  }), "Sorry, your browser doesn't support embedded videos."), /*#__PURE__*/React__default["default"].createElement("a", {
    className: "branding-container",
    href: metadata.brand_url,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: metadata.brand_logo,
    alt: "brand"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "card-icons-holder"
  }, metadata.sides && metadata.sides.length > 1 && highlightedSides.length === 0 && /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$9,
    className: "flip-icon",
    alt: "not found",
    style: {
      display: showFlipIcon || mobileView ? 'block' : 'none'
    },
    onClick: e => {
      flipToBack(e); //setshowBackCard(true);
    }
  })), (metadata.traits && metadata.traits.length > 0 && traitTypes || highlightedSides.length > 0) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: `trait-container-v2 ${traitsVisible ? 'hide' : ''}`
  }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, highlightedSides && highlightedSides.map((hlItem, idx) => /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-holder-v2",
    style: {
      clipPath: "url(#svgPath)"
    },
    key: idx,
    onClick: e => {
      setActiveBackSide(visible.BACK);
      flipToBack(e); //setshowBackCard(true);
    }
  }, ' ', /*#__PURE__*/React__default["default"].createElement("img", {
    src: hlItem.thumbnail,
    alt: "undefined"
  }), ' ')), metadata.traits && metadata.traits.length > 0 && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trait-holder-v2 numeric",
    style: {
      clipPath: "url(#svgPath)"
    },
    onClick: e => {
      //setTraitListVisible(true);
      setActiveBackSide(visible.TRAITLIST);
      flipToBack(e);
    }
  }, metadata.traits.length))), /*#__PURE__*/React__default["default"].createElement("svg", {
    height: "0",
    width: "0"
  }, /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("clipPath", {
    id: "svgPath",
    clipPathUnits: "objectBoundingBox"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    transform: "scale(0.00365, 0.00334)",
    d: "m0 100.559c0-18.397 9.829-35.389 25.786-44.551l85.64-49.181c15.85-9.103 35.33-9.103 51.179 0l85.629 49.181c15.957 9.162 25.785 26.154 25.785 44.551v97.896c0 18.397-9.828 35.389-25.785 44.552l-85.629 49.18c-15.849 9.103-35.329 9.103-51.179 0l-85.64-49.156c-15.957-9.175-25.786-26.179-25.786-44.576v-97.896z"
  })))))), /*#__PURE__*/React__default["default"].createElement("span", {
    className: `back ${showBack ? 'active' : ''} `
  }, metadata.traits && metadata.traits.length > 0 && traitTypes && activeBackSide === visible.TRAITLIST && /*#__PURE__*/React__default["default"].createElement(TraitListCard, {
    traits: metadata.traits,
    onClick: e => {
      flipToFront(e);
    },
    bgColor: bgcRef.current
  }), metadata.traits && metadata.traits.length > 0 && traitTypes && activeBackSide === visible.TRAITS && /*#__PURE__*/React__default["default"].createElement(TraitCard, {
    trait: selectedTrait,
    onClick: flipToFront,
    image: metadata.sides && metadata.sides.length > 1 ? metadata.sides[0].image : metadata.image,
    traitImg: selectedTrait.icon_url ? selectedTrait.icon_url : GALAXIS_BASE_URL + traitType.icon_white // claimUrl={selectedTrait.claim_url}

  }), metadata.sides && metadata.sides.length > 1 && activeBackSide === visible.BACK && /*#__PURE__*/React__default["default"].createElement(CardBack, {
    onClick: flipToFront,
    backImage: metadata.sides[1].image,
    type: metadata.sides[1].type === 'video' && metadata.sides[1].type,
    highLighted: highlightedSides.length > 0
  })))))));
};

var css_248z$8 = ".dust-pool-card {\n  width: 100%;\n  max-width: 540px;\n  display: flex;\n  -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\n  border-radius: 15px;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.dust-pool-card-image-container{\n  width: 50%;\n  position: relative;\n  overflow: hidden;\n  min-height: 265px;\n}\n\n.dust-pool-card-img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  object-fit: cover;\n}\n.text-box {\n  /* width: 50%; */\n  padding: 15px;\n}\n.dust-pool-title {\n  font-family: poppins-semibold;\n  font-weight: 600;\n  font-size: 22px;\n  color: rgb(0, 0, 0);\n  margin-bottom: 10px;\n  line-height: 21px;\n}\n.dust-pool-card-label {\n  text-transform: uppercase;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.dust-pool-btn {\n  border: 2px solid #FE2C85;\n  font-family: 'poppins-semibold';\n  color: #FE2C85;\n  background-color: transparent;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.dust-pool-btn:hover {\n  background-color: #FE2C85;\n  color: #fff;\n  cursor: pointer;\n}\n.dust-pool-btn:focus {\n  outline: none;\n}\n\n.dust-pool-btn.disabled{\n  opacity:0.5;\n}\n\n.dust-pool-btn:hover.disabled{\n  background-color: transparent;\n  color: #FE2C8580;\n  cursor:not-allowed;\n}\n\n@media only screen and (max-width: 600px) {\n  .dust-pool-card-image-container{\n    width:100%;\n  }\n\n  .dust-pool-card {\n    flex-direction: column;\n  }\n  .dust-pool-card img{\n    height: auto;\n    max-width: 100%;\n  }\n}\n";
styleInject(css_248z$8);

var css_248z$7 = ".counter-body{\n    font-size: 1em;\n    line-height: 1em;\n    vertical-align: center;\n    margin-bottom: 10px;\n}\n\n.counter-body .counter-item{\n    display: inline-block;\n    width: 12px;\n    height: 1.6em;\n    margin: 0 2px 0 0;\n    background-color: #ff6b2b3d;\n    border-radius: 3px;\n}\n\n.counter-item.active{\n    background-color: #FE2C85;\n}";
styleInject(css_248z$7);

const CounterBar = props => {
  const ITEM_COUNT = 10;
  const [items, setItems] = React.useState([]);
  const [currentValue, setCurrentValue] = React.useState(null);
  const [maxValue, setMaxValue] = React.useState(null);
  const [progress, setProgress] = React.useState(null);
  React.useEffect(() => {
    let a = [];

    for (let i = 0; i < ITEM_COUNT; i++) {
      a.push(i);
    }

    setItems(a);
  }, []);
  React.useEffect(() => {
    //console.log('COUNTER',props.value,props.maxValue);
    if (props.value !== null && props.value !== undefined && props.value !== currentValue) {
      setCurrentValue(props.value);
    }

    if (props.maxValue && props.maxValue !== maxValue) {
      setMaxValue(props.maxValue);
    }
  }, [props]);
  React.useEffect(() => {
    if (maxValue && maxValue > 0) {
      let p = Math.floor(currentValue / maxValue * ITEM_COUNT);

      if (p === 0 && currentValue > 0) {
        p = 1;
      }

      setProgress(p); //console.log(currentValue,p);
    }
  }, [currentValue, maxValue]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, items.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-body"
  }, items.map((e, i) => {
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: `counter-item ${i < progress ? 'active' : ''}`,
      key: 'c' + i
    });
  })));
};

const DustPoolCard = _ref => {
  let {
    card,
    idx,
    chainId,
    handleClick,
    imageBaseUrl
  } = _ref;
  //  const MEDIA_BASE_URL = chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
  const MEDIA_BASE_URL = imageBaseUrl; //chainId===1?'https://galaxis-web.s3.amazonaws.com/media':'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';

  const onClickHandler = () => {
    //console.log('card id on click',card.id);
    handleClick(idx);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-card"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-card-image-container"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "dust-pool-card-img",
    src: MEDIA_BASE_URL + card.images[0].src
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title"
  }, card.name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label",
    style: {
      marginBlockEnd: 0
    }
  }, "COUNTER"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, card.vaultData.available, " out of ", card.total_supply, " left")), /*#__PURE__*/React__default["default"].createElement(CounterBar, {
    value: card.vaultData.available,
    maxValue: card.total_supply
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label",
    style: {
      marginBlockEnd: 0
    }
  }, "Price"), /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("b", null, card.vaultData.vaultPrice > 0 ? Number(ethers.ethers.utils.formatEther(card.vaultData.vaultPrice)).toLocaleString() + ' D' : 'TBA')), /*#__PURE__*/React__default["default"].createElement("button", {
    style: {
      position: "absolute",
      bottom: "15px"
    },
    className: `dust-pool-btn`,
    onClick: onClickHandler
  }, "Details"))));
};

var css_248z$6 = "body{\n    background-color: rgb(250, 249, 245);\n}\n\n.dust-pool-root{\n    max-width: 1140px;\n    width: 100%;\n    margin: 0 auto;\n    margin-top: 30px;\n    font-family: poppins;\n}\n\n.dust-pool-textbox{\n text-align: center;\n max-width: 600px;\n margin: 0 auto;\n}\n.pool-subtitle{\n    font-size: 30px;\n    font-weight: 600;\n}\n.tab-choose{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n}\n.tab-choose div{\n    font-size: 14px;\n    font-weight: 500;\n    padding: 12px 15px\n}\n.tab-choose div:hover{\n    cursor: pointer;\n}\n.tab-choose .active-tab{\n    background-color: #000;\n    color: #fff;\n}\n.tab-choose div:first-child{\n    border: 2px solid #000;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n.tab-choose div:nth-child(2){\n    border-top: 2px solid #000;\n    border-bottom: 2px solid #000;\n}\n.tab-choose div:nth-child(3){\n    border: 2px solid #000;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n\n/*classes from bootstrap*/\n*{\n    box-sizing: border-box;\n}\n.container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n.mt-5, .my-5 {\n    margin-top: 3rem!important;\n}\n.row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.col-12 {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.col-12, .col-lg-6, .col-lg-3, .col-md-6{\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n\n.col-6 {\n    flex: 0 0 50%;\n    max-width: 50%;\n}\n.mb-1{\n    margin-bottom: 0.25rem!important;\n}\n.mb-2{\n    margin-bottom: 0.5rem!important;\n}\n.mb-3{\n    margin-bottom: 0.75rem!important;\n}\n.mt-2{\n    margin-top: 0.5rem!important;\n}\n.pb-4{\n    padding-bottom: 1.5rem!important;\n}\n\n.w-100 {\n    width: 100%!important;\n}\n.text-right{\n    text-align: right!important;\n}\n.dust-pool-card p {\n    margin-block-start: 0;\n}\n.section-divider-img{\n    max-height: 35px;\n    z-index: 2;\n}\n@media only screen and (max-width: 500px) {\n    .section-divider-img{\n      max-height: 25px;\n      z-index: 2;\n    }\n  }\n\n@media (min-width: 576px){\n.container {\n    max-width: 540px;\n}\n}\n@media (max-width: 600px){\n    .dust-pool-card .dust-pool-btn{\n        position: unset!important;\n    }\n    }\n@media (min-width: 768px){\n    .container {\n        max-width: 720px;\n    }}\n    .col-md-6{\n        flex: 0 0 50%;\n        max-width: 50%; \n    }\n@media (min-width: 992px){\n    .container {\n        max-width: 960px;\n    }\n    .col-lg-6 {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .col-lg-3 {\n        flex: 0 0 25%;\n        max-width: 25%;\n    }\n}\n\n@media (min-width: 1200px){\n    .container {\n        max-width: 1140px;\n    }\n}\n@media only screen and (max-width: 945px) {\n    .dust-pool-root {\n      max-width: 100%;\n    }\n  }";
styleInject(css_248z$6);

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22.196' height='31' viewBox='0 0 22.196 31'%3e %3cg id='leftTrick' transform='translate(-420 -739)'%3e %3crect id='Rectangle_2175' data-name='Rectangle 2175' width='8' height='31' transform='translate(420 739)' fill='%23FE2C85'/%3e %3crect id='Rectangle_2176' data-name='Rectangle 2176' width='8' height='22.195' transform='translate(420.001 758.5) rotate(-90)' fill='%23FE2C85'/%3e %3c/g%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3csvg id='rightTrick' xmlns='http://www.w3.org/2000/svg' width='22.196' height='31' viewBox='0 0 22.196 31'%3e %3crect id='Rectangle_2175' data-name='Rectangle 2175' width='8' height='31' transform='translate(14.196)' fill='%23FE2C85'/%3e %3crect id='Rectangle_2176' data-name='Rectangle 2176' width='8' height='22.195' transform='translate(0 19.5) rotate(-90)' fill='%23FE2C85'/%3e%3c/svg%3e";

var css_248z$5 = ".upcoming-dust-pool-card {\n    height: 86px;\n    display: flex;\n    margin-bottom: 10px;\n    -webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \n  box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\n    border-radius: 10px;\n    overflow: hidden;\n    margin-bottom: 50px;\n}\n.upcoming-dust-pool-card img{\n    max-height: 100%;\n}\n.upcoming-dust-pool-card-title{\n     line-height: 16px;\n     height: 32px;\n     margin-bottom: 10px;\n    }\n.upcoming-dust-pool-card-text{\n    padding: 10px;\n}";
styleInject(css_248z$5);

var css_248z$4 = "\n.pool-ps-root{\n    max-width: 848px;\n    width: 100%;\n    margin: auto auto 60px;\n    display: flex;\n    flex-flow: row wrap;\n    gap: 10px;\n}\n.pool-ps-card-and-descipton{\n    box-sizing: border-box;\n    display: flex;\n    flex-flow: row wrap;\n    width:100%;\n}\n.pool-ps-card-and-descipton-inner{\n    flex-basis: 50%;\n    -webkit-box-flex: 0;\n    flex-grow: 0;\n    max-width: 50%;\n}\n.pool-ps-card-and-descipton-inner p{\n    margin-top: 0;\n}\n.ps-left{\n    background-color: rgb(255, 255, 255);\n    padding: 50px;\n    border: 1px solid #000;\n    border-radius: 15px;\n}\n.ps-left img{\n    border-radius: 15px;\n}\n.ps-right{\n    position: relative;\n    padding-left: 15px;\n}\n.ps-text-bottom{\n    position: absolute;\n    bottom: 0;\n}\n.snp-root{\n    margin: 15px auto 30px;\n    max-width: 848px;\n    width: 100%;\n    max-height: 86px;\n    display: flex;\n    -webkit-box-pack: justify;\n    justify-content: space-between;\n    background-color: rgb(255, 255, 255);\n    box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px 0px;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.previous-box{\n    display: flex;\n    width: 48%;\n    gap: 16px;\n    -webkit-box-pack: start;\n    justify-content: flex-start;\n    cursor: pointer;\n}\n.snp-divider{\n    width: 4%;\n    min-height: 100%;\n    display: flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    align-items: center;\n}\n.next-box{\n    display: flex;\n    width: 48%;\n    gap: 16px;\n    -webkit-box-pack: end;\n    justify-content: flex-end;\n    cursor: pointer;\n}\n.snp-text{\n    padding-top: 8px;\n    padding-bottom: 8px;\n    text-transform: uppercase;\n}\n.snp-text span{\n    margin: 0px;\n    font-family: poppins;\n    font-size: 14px;\n    color: rgb(112, 112, 112);\n    cursor: pointer;\n}\n.snp-text-p-n{\n    margin: 0px;\n    font-weight: 400;\n    font-family: poppins-semibold;\n    line-height: 20px;\n    font-size: 18px;\n    max-height: 45px;\n    width: 100%;\n    max-width: 180px;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: capitalize;\n}\n\n.previous-box.disabled, .next-box.disabled{\n    cursor: not-allowed;\n}\n.pool-ps-btn{\n    background-color: transparent;\n    border: none;\n    display: flex;\n    font-weight: 700;\n    padding:0;\n    color:black;\n}\n.pool-ps-btn p{\n    margin-block-start: 0;\n    margin-block-end: 0;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: 18px;\n}\n.pool-ps-btn span{\n    font-size: 42px;\n    line-height: 16px;\n    padding-right: 2px;\n}\n.pool-ps-btn:hover{\n    cursor: pointer;\n}\n.pool-ps-btn:focus{\n    outline: none;\n}\n.pool-ps-card-and-descipton-inner .dust-pool-title{\n    margin-bottom: 10px;\n    line-height: 40px;\n    font-size: 32px;\n}\n.dpc-box{\n    background-color: #fff;\n    padding: 15px 20px;\n    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1); \n    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);\n    width: fit-content;\n    border-radius: 5px;\n    margin-top: 12px;\n    margin-bottom: 12px;\n}\n\n.approval-mask{\n    box-sizing: border-box;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0,0,0,0.75);\n\tz-index: 1100;\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.video-box{\n    background-color: #000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 2000;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    -ms-flex-pack:center!important;\n    justify-content:center!important;\n  }\n\n  .video-box.visible{\n      opacity: 1;\n  }\n\n  a.dust-pool-btn{\n      text-decoration: none;\n  }\n\n  .es-link{\n    text-decoration: none;\n    color: #FE2C85;\n    font-weight: 700;\n  }\n\n\n@media only screen and (max-width: 825px) {\n    .pool-ps-card-and-descipton-inner{\n        flex-basis: 60%;\n        max-width: 60%;\n    }\n    .pool-ps-card-and-descipton{\n        justify-content: center;\n    }\n    .ps-text-bottom{\n        margin-top: 20px;\n        position: relative;\n    }\n    .ps-right{\n        padding-left: 0;\n    }\n\n    .pool-ps-card-and-descipton-inner.ps-right .text-box{\n        padding-left: 0; \n    } \n}\n@media only screen and (max-width: 600px) {\n    .pool-ps-card-and-descipton-inner{\n        flex-basis: 100%;\n        max-width: 100%;\n    }\n    .pool-ps-card-and-descipton{\n        justify-content: center;\n    }\n\n    \n}\n@media only screen and (max-width: 400px) {\n    .previous-box img, .next-box img{\n        display: none;\n    }\n}";
styleInject(css_248z$4);

var css_248z$3 = ":root{\n  --primary-color: #FE2C85;\n}\n\n.counter-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 15px 15px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n@media (max-width: 454px) {\n  .counter-container {\n    padding: 0 80px;\n  }\n}\n@media (max-width: 400px) {\n  .counter-container {\n    padding: 0 30px;\n  }\n}\n@media (max-width: 302px) {\n  .counter-container {\n    padding: 0;\n  }\n}\n.counter-rotary-holder {\n  width: 95%;\n  height: 95%;\n  position: absolute;\n  transform: rotate(45deg);\n  z-index: 5;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.counter-content-holder {\n  background-color: white;\n  width: 75px;\n  height: 75px;\n  border-radius: 60%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.counter-rotary-item {\n  width: 15px;\n  height: 15px;\n  border: 2px solid var(--primary-color);\n  border-radius: 50%;\n  position: absolute;\n  background-color: white;\n}\n.counter-circle {\n  width: 88px;\n  height: 88px;\n  border: 2px solid var(--primary-color);\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  background-color: #ecebe8;\n  position: relative;\n}\n\n\n.counter-text {\n  font-family: \"poppins\";\n  font-size: 12px;\n  line-height: 18px;\n  color: #030300;\n  z-index: 1;\n}\n\n.counter-text-value {\n  font-family: \"poppins\";\n  font-size: 27px;\n  color: #020000;\n  letter-spacing: -2px;\n  line-height: 32px;\n}\n\n.disabled .counter-rotary-item, .disabled .counter-circle{\n  border-color:black;\n}\n\n#txRotator {\n  animation-name: playRotating;\n  animation-duration: 3s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n@keyframes playRotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}";
styleInject(css_248z$3);

const blockedCountries = {
  "AL": "Albania",
  "BB": "Barbados",
  "BW": "Botswana",
  "BF": "Burkina Faso",
  "CN": "China",
  "KH": "Cambodia",
  "KY": "Cayman Islands",
  "GH": "Ghana",
  "HT": "Haiti",
  "IR": "Iran",
  "JM": "Jamaica",
  "LY": "Libya",
  "MU": "Mauritius",
  "MT": "Malta",
  "MA": "Morocco",
  "MM": "Myanmar",
  "NI": "Nicaragua",
  "KP": "North Korea",
  "PK": "Pakistan",
  "PA": "Panama",
  "PH": "Philippines",
  "SN": "Senegal",
  "SS": "South Sudan",
  "SD": "Sudan",
  "SY": "Syria",
  "UG": "Uganda",
  "YE": "Yemen",
  "ZW": "Zimbabwe"
};

var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABICAYAAADcdSQuAAAABHNCSVQICAgIfAhkiAAAACJJREFUKFNjZGBgsAPi/4xQBgOIAQZUYIyajByYo6GBOzQAZxUMIQH+P1cAAAAASUVORK5CYII=";

var css_248z$2 = ".terms-root{\n\tbox-sizing: border-box;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(255,255,255,0.3);\n\tz-index: 1100;\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n}\n.terms-root.black{\n\tbackground: rgba(0,0,0,0.8);\n}\n\n.terms-box {\n\tfont-family: poppins;\n\twidth:50%;\n\theight: 100%;\n\tmin-width: 400px;\n\tmin-height: 500px;\n\tbackground:rgb(250, 249, 245);\n\t-webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \n  \tbox-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\n}\n\n.scrollable-content{\n\twidth:100%;\n\theight: 100%;\n\tpadding: 0 20px;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n.terms-box  .scrollable-content h2{\n\ttext-align: center;\n\tpadding-bottom: 40px;\n\tposition: sticky;\n\ttop:0;\n\tbackground:#faf9f5;\n\tbackground: -moz-linear-gradient(180deg, rgba(250, 249, 245,1) 0%, rgba(250, 249, 245,1) 75%, rgba(250, 249, 245,0) 100%);\n\tbackground: -webkit-linear-gradient(180deg, rgba(250, 249, 245,1) 0%, rgba(250, 249, 245,1) 75%, rgba(250, 249, 245,0) 100%);\n\tbackground: linear-gradient(180deg, rgba(250, 249, 245,1) 0%, rgba(250, 249, 245,1) 75%, rgba(250, 249, 245,0) 100%);\n}\n\n.tc-button-container{\n\ttext-align: center;\n}\n.tc-button-container button{\n\tmargin: 10px 5px;\n}\n\n.scrollable-content a {\n\tcolor: #FE2C85;\n\tfont-weight: 600;\n\ttext-decoration: none;\n}\n\n.scrollable-content a:hover {\n\tcolor: #FE2C85;\n\ttext-decoration: underline;\n}\n\n.scrollable-content h2{\n\tfont-family: Poppins-semibold;\n}";
styleInject(css_248z$2);

const terms = `<p><strong>NFT EXCHANGE TERMS AND CONDITIONS (THESE “TERMS”)</strong></p>
<p><em>Unless otherwise stated or if the context otherwise requires, all capitalised terms herein shall have the respective meanings as indicated in Annex 1 of these Terms. Headings in these Terms are included for convenience only and shall not be taken into account in construing these Terms. References to a “<strong>Paragraph</strong>” and “<strong>Annex</strong>” are to be construed as references to the paragraphs of and the annexes to these Terms.</em></p>
<ol type="1">
<li><p><strong><u>GENERAL</u></strong></p>
<ol type="1">
<li><p>These Terms govern the NFT Exchange between the NFT Vendor and you, for your intended exchange of Tokens, during the NFT Exchange Period made available on or via the <strong><a target="_blank" href="https://galaxis.xyz/#/nft-vaults">https://galaxis.xyz/#/nft-vaults</a></strong> (the “<strong>Website</strong>”).</p></li>
<li><p>In these Terms, “<strong>we</strong>”, “<strong>us</strong>” or “<strong>NFT Vendor</strong>” refers to a company incorporated in the British Virgin Islands named Equinoctial Inc (BVI Company Number: 2077416) and “<strong>our</strong>” shall be construed accordingly. “<strong>You</strong>” refers to any person participating in an NFT Exchange, and “your” shall be construed accordingly.</p></li>
</ol></li>
</ol>
<blockquote>
<p>Each of you and the NFT Vendor shall hereinafter be referred to as a “<strong>Party</strong>”, and collectively, you and the NFT Vendor shall hereinafter be referred to as the “<strong>Parties</strong>”.</p>
</blockquote>
<ol start="3" type="1">
<li><p>By accessing and/or using the Website or participating in NFT Exchange, you accept these Terms including the privacy of the NFT Vendor (available at <a target="_blank" href="https://ether.cards/privacy-policy">https://ether.cards/privacy-policy</a>) as adopted and updated from time to time, and agree to be bound by them. If you do not accept these Terms, please exit the Website immediately and cease all interaction with the Website and any Atomic NFT Swap Contract you may be interacting with.</p></li>
<li><p>These Terms will also apply to any updates or upgrades provided by us that replace and/or supplement the Website and/or the Atomic NFT Swap Contract, unless such updates or upgrades are accompanied by separate terms in which case those separate terms shall apply.</p></li>
<li><p>We may amend these Terms from time to time. Amendments shall take effect from the date the amended terms are published at the Website. If you use or access the Website or interact with any Atomic NFT Swap Contract after such amendments, you are deemed to have agreed to the amended terms and to be bound by them. It is your responsibility to check for the latest version of the terms prior to use of the Website and any interaction with the Atomic NFT Swap Contract.</p></li>
<li><p>We have no obligation to provide, or continue to provide NFT Exchange or any service related to NFT Exchange, now or in the future. We reserve the right, at any time, temporarily or permanently, in whole or in part, without prior notification and without incurring any liability to you, to: modify, suspend or discontinue the NFT Exchange and all related services; restrict or modify access to the Website and/or the Atomic NFT Swap Contract; and modify and/or waive any charges in connection with the NFT Exchange. You are deemed to agree to such modifications if you continue the use the Website or participate in the NFT Exchange.</p></li>
<li><p><strong>Please read these Terms carefully. The Designated NFTs acquired by the Project Group which are made available for NFT Exchange hereunder are created and issued by third parties. As such, the Designated NFTs are made available on an “as is” and “as available” basis with no representations or warranties whatsoever. To the maximum extent permitted by law, we disclaim all express representations and warranties and implied representations and warranties, including implied representations or warranties of accuracy, merchantability, fitness for a particular purpose and non-infringement in relation to the Designated NFTs. We are not responsible or liable for any error, delay or interruption in or lack of access to the Designated NFTs or for any loss of digital assets (including but not limited to Tokens and Designated NFTs) in connection with any NFT Exchange.</strong></p></li>
<li><p><strong>THE NFT EXCHANGE WILL BE CONDUCTED VIA THE WEBSITE USING THE ATOMIC NFT SWAP CONTRACT (IF APPLICABLE) WHICH IS DEVELOPED AND PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS BY THE NFT VENDOR, AND THE NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF.</strong></p></li>
<li><p><strong>The Designated NFTs are not intended to constitute securities of any form, units in a business trust, units in a collective investment scheme, capital markets products, or any other form of regulated investment or investment product in any jurisdiction. These Terms do not constitute a prospectus or an offer document of any sort and are not intended to constitute an offer of securities of any form, units in a business trust, units in a collective investment scheme, capital markets products, or any other form of regulated investment or investment product, or a solicitation for any form of regulated investment or investment product in any jurisdiction. No regulatory authority has examined or approved of these Terms. No such action has been or will be taken by the NFT Vendor to obtain such approval under the laws, regulatory requirements or rules of any jurisdiction. The provision of these Terms to you does not imply that the applicable laws, regulatory requirements or rules have been complied with.</strong></p></li>
</ol>
<blockquote>
<p><strong>The Designated NFTs are not intended to be available for exchange by Disqualified Persons. If you are a Disqualified Person, you are not eligible to participate in any NFT Exchange.</strong></p>
</blockquote>
<ol start="10" type="1">
<li><p><strong>IF YOU ARE IN ANY DOUBT AS TO THE ACTION YOU SHOULD TAKE, YOU SHOULD CONSULT YOUR LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S). IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT ACCEPT THESE TERMS, OR PARTICIPATE IN ANY NFT EXCHANGE, OR ACQUIRE ANY TOKENS TO PARTICIPATE IN A NFT EXCHANGE.</strong></p></li>
</ol>
<ol start="2" type="1">
<li><p><strong><u>ELIGIBILITY TO MAKE A NFT EXCHANGE</u></strong></p></li>
</ol>
<blockquote>

</blockquote>
<ol type="1">
<li><p>You are viewing these Terms because you are interested in making a NFT Exchange.</p></li>
<li><p><strong>You shall not participate in the NFT Exchange if there are applicable legal restrictions in your country of residence or domicile. It is your sole responsibility to ensure that your participation in the NFT Exchange is not prohibited, restricted, curtailed, hindered, impaired, unauthorized or otherwise adversely affected in any way or in any form or manner, whether in full or in part under any applicable law, regulation or rule in your country of residence or domicile or in any jurisdiction applicable to you.</strong></p></li>
<li><p>You are not eligible to participate in, and you are not to make any NFT Exchange if:</p>
<ol type="a">
<li><p>where you are an individual, you are a citizen of, domiciled in, resident of, or physically present / located in an Excluded Jurisdiction; or</p></li>
<li><p>where you are a body corporate, you are a body corporate: (i) which is incorporated in, or operates out of, an Excluded Jurisdiction, or (ii) which is wholly or partially owned by or under the control of (aa) one or more individuals who is/are citizen(s) of, domiciled in, residents of, or physically present / located in, an Excluded Jurisdiction; (bb) one or more entities which is incorporated in, or operates out of, an Excluded Jurisdiction; and/or (cc) a Designated Person / Entity; or</p></li>
<li><p>you are an individual or body corporate : (i) included in the consolidated list published by the United Nations Security Council of individuals or entities subject to measures imposed by the United Nations Security Council accessible at <a target="_blank" href="https://www.un.org/securitycouncil/content/un-sc-consolidated-list">https://www.un.org/securitycouncil/content/un-sc-consolidated-list</a>; or (ii) included in the United Nations Lists (UN Lists) or within the ambit any regulations adopted by any jurisdiction relating to or implementing United Nations Security Council Resolutions (“<strong>Designated Person / Entity</strong>”); or</p></li>
<li><p>you are an individual or body corporate which is otherwise prohibited or ineligible in any way, whether in full or in part, under any laws applicable to such individual or body corporate from participating in any part of the transactions contemplated in these Terms, or</p></li>
<li><p>the NFT Exchange is prohibited, restricted, curtailed, hindered, impaired, unauthorized or otherwise adversely affected in any way or in any form or manner whether in full or in part under any applicable law, regulation or rule in your country of residence or domicile or in any jurisdiction applicable to you; or</p></li>
<li><p>if you are unable to make a true and affirmative representation in respect of the matters set out in Paragraph 9.1(q), (r) and (s),</p></li>
</ol></li>
</ol>
<blockquote>
<p>(collectively, the “<strong>Disqualified Persons</strong>”).</p>
</blockquote>
<ol start="4" type="1">
<li><p>The NFT Vendor does not intend to offer any Designated NFT for NFT Exchange or have any dealing with you if you are a Disqualified Person. <strong>Accordingly, if you are a Disqualified Person, you shall not participate in the NFT Exchange and exit the Website immediately.</strong></p></li>
<li><p>The Designated NFTs and the NFT Exchange Service will be made available on the Website from <strong>9 p.m. Singapore Time</strong> on <strong>8 October 2021</strong> and ending on such date and time as determined by the NFT Vendor, or such other period as the NFT Vendor may in its absolute discretion determine (“<strong>NFT Exchange Period</strong>”).</p></li>
<li><p>In the event the NFT Vendor determines that the NFT Exchange Period shall be such other period than as set out in Paragraph 2.5, the NFT Vendor will announce such revised period on the Website or on any of the Channels.</p></li>
</ol>
<ol start="3" type="1">
<li><p><strong><u>CRYPTOPUNK NFT EXCHANGE</u></strong> </p>
<ol type="1">
<li><p>The NFT Vendor will make available a total of <strong>27</strong> CryptoPunk NFTs (“<strong>CryptoPunk NFTs Pool</strong>”) to be exchanged for Tokens at an exchange rate of <strong><u>1,000,000</u></strong> Tokens (“<strong>CryptoPunk NFT Exchange Consideration</strong>”) per CryptoPunk NFT on a first-come-first-serve basis (“<strong>CryptoPunk NFT Exchange</strong>”), where a Participant is considered to be first in time over another Participant if the first-mentioned Participant first effects a Transaction Signing that is recorded on-chain ahead of the second-mentioned Participant.</p></li>
<li><p>Subject to Paragraph 3.3, in order to make a NFT Exchange for a CryptoPunk NFT, a Participant must:</p>
<ol type="a">
<li><p>have accumulated an amount of Tokens equivalent to or more than CryptoPunk NFT Exchange Consideration in a single wallet address (“<strong>Relevant Wallet Address</strong>”);</p></li>
<li><p>connect such Relevant Wallet Address to the Website using a Participating Digital Wallet;</p></li>
<li><p>sign a transaction (“<strong>Transaction Signing</strong>”) to effect a transfer of CryptoPunk NFT Exchange Consideration to a wallet address designated by us (“<strong>CryptoPunk NFT Exchange Consideration Transfer</strong>”) upon which an on-chain digital certificate (“<strong>Digital Certificate</strong>”) will be assigned to the Relevant Wallet Address which:</p>
<ol type="i">
<li><p>indicates the completion of CryptoPunk NFT Exchange Consideration Transfer; and</p></li>
<li><p>indicates the identification code of a CryptoPunk NFT (“<strong>Relevant CryptoPunk NFT</strong>”) that is randomly selected from the CryptoPunk NFTs Pool; and</p></li>
</ol></li>
<li><p>pay / provide for all gas/transaction fees (whether payable in ETH or otherwise) associated with the foregoing actions/transactions.</p></li>
</ol></li>
<li><p>On receipt of the Digital Certificate, the Participant shall, within <strong><u>30</u></strong> days of such receipt (or such other period as determined by NFT Vendor) notify the NFT Vendor of the same by contacting us at the following email address: exchange@ether.cards.</p></li>
<li><p>Subject to the NFT Vendor’s verification that the steps required of the Participant in Paragraph 3.2 is complete to the satisfaction of the NFT Vendor and the completion of any other steps as may be requested by the NFT Vendor of the Participant (“<strong>CryptoPunk NFT Exchange Verification</strong>”), the NFT Vendor shall, within <strong><u>5</u></strong> days following the completion of CryptoPunk NFT Exchange Verification (or such other period as the NFT Vendor may otherwise determine in its sole and absolute discretion), effect a transfer of the Relevant CryptoPunk NFT to the Relevant Wallet Address.</p></li>
<li><p><strong>Notwithstanding each CryptoPunk NFT being unique and the graphical representation of each CryptoPunk NFT being generally unique in attributes, the NFT Vendor is entitled to transfer any CryptoPunk NFT to the Participant and no Participant shall be entitled to make a claim for a specific CryptoPunk NFT from the CryptoPunk NFTs Pool.</strong></p></li>
<li><p>In the event that you purport to participate in a CryptoPunk NFT Exchange other than in accordance with Paragraph 3 in respect of a CryptoPunk NFT, you shall be in material breach of these Terms and acknowledge and agree as follows :</p>

<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any CryptoPunk NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return such CryptoPunk NFT received/acquired by you, without any entitlement on your part to, or obligation on the part of NFT Vendor to provide any refund for any part of the CryptoPunk NFT Exchange Consideration for your attempted NFT Exchange for such CryptoPunk NFT in breach of these Terms; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote>
</li>
</ol>
</li>
<li><p>In the event that you receive a Digital Certificate as a Participant, you hereby undertake not to transfer such Digital Certificate or ownership or control over the Relevant Wallet Address containing such Digital Certificate prior to the NFT Vendor’s transfer of the Relevant CryptoPunk NFT to the Relevant Wallet Address.</p></li>
</ol>
</li>


</ol>

<ol start="4" type="1">
<li><p><strong><u>OTHER NFTS EXCHANGE</u></strong></p>
<ol type="1">
<li><p>In addition to the CryptoPunk NFTs, the NFT Vendor may from time to time make available other NFTs (“<strong>Other NFTs</strong>”) on the Website for NFT Exchange.</p></li>
<li><p>The NFT Vendor may conduct a NFT Exchange for such Other NFTs (“<strong>Other NFTs Exchange</strong>”) in the following ways:</p>
<ol type="a" start="1">
<li><p>by transferring such Other NFTs to a smart contract which allows for Tokens to be atomically swapped for such Other NFTs (“<strong>Atomic NFT Swap Contract</strong>”); or</p></li>
<li><p>such other procedure as determined by NFT Vendor in its sole and absolute discretion.</p></li>
</ol></li>
<li><p>Where the NFT Vendor conducts an Other NFTs Exchange in the manner described in Paragraph 4.2(a), and a Participant wishes to make a NFT Exchange in respect of an Other NFT, such Participant must:</p>
<ol type="a">
<li><p>have accumulated an amount of Tokens equivalent to or more than the relevant amount of Tokens as required by the NFT Vendor for such NFT Exchange (“<strong>Other NFT Exchange Consideration</strong>”) in a single Relevant Wallet Address; and</p></li>
<li><p>sign a transaction to effect a transfer Other NFT Exchange Consideration to the designated address of the Atomic NFT Swap Contract, upon completion of which the Atomic NFT Swap Contract will effect an on-chain transfer of such Other NFT to the Relevant Wallet Address; and</p></li>
<li><p>pay / provide for all gas/transaction fees associated with the foregoing actions/transactions.</p></li>
</ol></li>
<li><p>Where the NFT Vendor conducts an Other NFTs Exchange in such other manner pursuant to Paragraph 4.2(b), each Participant shall comply with the instructions as set out by the NFT Vendor via the Channels or such other mode of communication as may be determined by the NFT Vendor.</p></li>
<li><p>The NFT Vendor may at its discretion pool together the Other NFTs in a single pool (such pool, “<strong>Other NFTs Pool</strong>”) and to distribute the Other NFTs in the Other NFTs Pool randomly to Participants who complete a transfer of Other NFT Exchange Consideration. <strong>Notwithstanding that NFTs are generally unique and the graphical representations associated with NFTs are generally unique in attributes, the NFT Vendor is entitled to transfer any Other NFT from the Other NFTs Pool to the Participant and no Participant shall be entitled to make a claim for a specific Other NFT from such Other NFTs Pool.</strong></p></li>
<li><p>In the event that you purport to participate in an Other NFT Exchange other than in accordance with Paragraph 4 in respect of an Other NFT, you shall be in material breach of these Terms and acknowledge and agree as follows :</p>
<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any Other NFT;</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return such Other NFT received/acquired by you, without any entitlement on your part to, or obligation on the part of NFT Vendor to provide any refund for any part of the Other NFT Exchange Consideration for your attempted NFT Exchange for such Other NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote></li>
</ol>

</li>
</ol></li>
</ol>

<blockquote>

</blockquote>
<ol start="5" type="1">
<li><p><strong><u>ADMINISTRATIVE AND/OR THIRD PARTY CHARGES</u></strong></p></li>
</ol>
<blockquote>

</blockquote>
<ol type="1">
<li><p>The Designated NFT Exchange Consideration (payable in the form of Tokens) shall be exclusive of all administrative and/or third party charges and/or other transaction fees (if any) that may be incurred in connection with NFT Exchange. Any such administrative and/or third party charges and/or other transaction fees (if any) incurred in connection with your intended NFT Exchange shall be borne by you.</p></li>
<li><p>Any amount(s) of transaction fees (if any) published on the Website, Channels, Participating Digital Wallet, or such other relevant interface is only indicative, and may not be representative or reflective of the actual amount(s) of transaction fees required for effecting a NFT Exchange.</p></li>
</ol>
<ol start="6" type="1">
<li><p><strong><u>ATTEMPTS TO DOUBLE SPEND AND NFT EXCHANGE IN BREACH OF TERMS OR VIOLATION OF APPLICABLE LAWS</u></strong></p></li>
</ol>
<blockquote>
<p>In the event that the NFT Vendor discovers, any attempt by you to make a double spend of Designated NFT Exchange Consideration subject of a NFT Exchange or any attempt to make a NFT Exchange in breach of applicable laws, such action shall be in breach of these Terms and you acknowledge and agree that such NFT Exchange shall be regarded as invalid and/or void <em>ab initio</em> (regardless of whether such double spending is successful or not) and:</p>
</blockquote>
<ol type="a">
<li><blockquote>
<p>that the NFT Vendor shall have no obligation to deliver, and you shall have no right to receive, any Designated NFT; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall at the NFT Vendor’s request, return all Designated NFT(s) received/acquired by you via NFT Exchange, without any entitlement on your part to, receive or obligation on the part of NFT Vendor to provide any refund for any part of the Designated NFT Exchange Consideration for your attempted NFT Exchange; and</p>
</blockquote></li>
<li><blockquote>
<p>that you shall be deemed to have waived all rights, claims and/or causes of action (present or future) under law (including any tortious claims) or contract against the NFT Vendor and the Indemnified Persons in connection with or arising from such attempted NFT Exchange, and shall further hold harmless, the NFT Vendor and the Indemnified Persons from and against any and all losses, damages, taxes, liabilities and expenses that may be incurred by you in connection with or arising from such attempted NFT Exchange.</p>
</blockquote></li>
</ol>
<blockquote>
<p><strong>IT IS YOUR SOLE RESPONSIBILITY TO ENSURE THAT THERE IS NO ATTEMPT TO DOUBLE SPEND IN ANY ATTEMPT TO MAKE A NFT EXCHANGE AND THAT SUCH NFT EXCHANGE IS NOT IN VIOLATION OF ANY APPLICABLE LAWS, REGULATIONS OR RULES.</strong></p>
</blockquote>
<ol start="7" type="1">
<li><p><strong><u>RESPONSIBILITY TO ESTABLISH AND MAINTAIN ACCESS TO PARTICIPATING DIGITAL WALLET AND RELEVANT WALLET ADDRESS</u></strong></p></li>
</ol>
<ol type="1">
<li><p>For purposes of your participation in the NFT Exchange (including for any receipt of Designated NFTs), you shall have the sole responsibility to establish, and maintain, in fully operational, secure and valid status, access to your Participating Digital Wallet and Relevant Wallet Address and maintain, in your fully secure possession, the credentials (including private keys) for accessing your Participating Digital Wallet and Relevant Wallet Address.</p></li>
<li><p>In the event of any hack, exploit, theft or permanent loss of access to the Participating Digital Wallet and/or Relevant Wallet Address resulting in a loss of Tokens and/or Designated NFTs from your Participating Digital Wallet and/or Relevant Wallet Address, you acknowledge and confirm that you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and the Indemnified Persons.</p></li>
<li><p>In the event that you are unable or otherwise fail to receive the Designated NFTs for which you have effected settlement of the Designated NFT Exchange Consideration due to malfunction of the underlying protocols or any interface which you use to access the digital assets in the Participating Digital Wallet and/or Relevant Wallet Address, you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and the Indemnified Persons whether for any Designated NFT and/or any Designated NFT Exchange Consideration.</p></li>
</ol>
<blockquote>

</blockquote>
<ol start="8" type="1">
<li><p><strong><u>NO REFUND OF DESIGNATED NFT EXCHANGE CONSIDERATION</u></strong></p></li>
</ol>
<blockquote>
<p>You acknowledge, agree, and confirm that there shall be no refund of the Designated NFT Exchange Consideration in respect of any NFT Exchange.</p>
</blockquote>
<ol start="9" type="1">
<li><p><strong><u>REPRESENTATIONS AND WARRANTIES</u></strong></p>
<ol type="1">
<li><p>By accepting these terms, you represent and warrant to the NFT Vendor as follows:</p></li>
</ol></li>
</ol>
<ol type="a">
<li><blockquote>
<p>you acknowledge and agree that the Tokens and the Designated NFTs are not intended to constitute securities of any form, units in a business trust, units in a collective investment scheme, capital markets product, or any other form of regulated investment or investment product in any jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>you are not a citizen or resident of a country the laws of which prohibit or conflict with the NFT Exchange or your participation in the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that these Terms do not constitute a prospectus or offer document of any sort and is not intended to constitute an offer of securities of any form, units in a business trust, units in a collective investment scheme, capital markets product, or any other form of regulated investment or investment product in any jurisdiction or a solicitation for any form of investment in any jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that no Token and no Designated NFT is to be construed, interpreted, classified or treated as enabling, or according any opportunity to you to participate in or receive profits, income, or other payments or returns arising from or in connection with the NFT Vendor, Project Group, Project, the Tokens, Designated NFTs or the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that no regulatory authority has examined or approved of these Terms, no such action has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction, and the provision of these Terms to you does not imply that the applicable laws, regulatory requirements or rules have been complied with;</p>
</blockquote></li>
<li><blockquote>
<p>the provision of these Terms, any part thereof or any copy thereof, or acceptance of the same by you, is not prohibited or restricted by the applicable laws, regulations or rules in your jurisdiction, and where any restrictions in relation to possession are applicable, you have observed and complied with all such restrictions at your own expense and without liability to the NFT Vendor;</p>
</blockquote></li>
<li><blockquote>
<p>you have read and understood all of these Terms including the Annexes hereto;</p>
</blockquote></li>
<li><blockquote>
<p>you are not a Disqualified Person;</p>
</blockquote></li>
<li><blockquote>
<p>you have full power and capacity to accept these Terms and perform all your obligations hereunder and in the case where you are accepting these Terms on behalf of a corporation:</p>
</blockquote>

<ol type="i">
<li><p>such corporation is duly incorporated and validly existing under the applicable laws; and</p></li>
<li><p>you are duly authorised to accept these Terms and procure the performance of obligations hereunder;</p></li>
</ol>

</li>
</ol>
<ol start="10" type="a">
<li><blockquote>
<p>if you are a natural person, you are of sufficient age and capacity under the applicable laws of the jurisdiction in which you reside and the jurisdiction of which you are a citizen to accept these Terms and perform all your obligations hereunder;</p>
</blockquote></li>
<li><blockquote>
<p>you acknowledge and agree that the Tokens and the Designated NFTs are not to be construed, interpreted, classified or treated as:</p>
</blockquote>

<ol type="i">
<li><p>debentures, stocks or shares issued by the NFT Vendor;</p></li>
<li><p>rights, options or derivatives in respect of such debentures, stocks or shares;</p></li>
<li><p>rights under a contract for differences or under any other contract the purpose or pretended purpose of which is to secure a profit or avoid a loss;</p></li>
<li><p>units in a collective investment scheme;</p></li>
<li><p>units in a business trust;</p></li>
<li><p>derivatives of units in a business trust; or</p></li>
<li><p>any other security, class of securities or form of investment (whether regulated or otherwise);</p></li>
</ol>
</li>
</ol>
<ol start="12" type="a">
<li><blockquote>
<p>you have a basic degree of understanding of the operation, functionality, usage, storage, transmission mechanisms, and other material characteristics of cryptocurrencies, cryptographic utility tokens, NFTs, blockchain assets, and tokens including Tokens, blockchain-based software systems, cryptocurrency / cryptographic utility tokens wallets or other related token storage mechanisms, blockchain technology and smart contract technology;</p>
</blockquote></li>
<li><blockquote>
<p>you are fully aware of, understand and agree to assume all the risks (including direct, indirect or ancillary risks) associated with your access/use of the Website to participate in the NFT Exchange, your use of your Participating Digital Wallet and/or effect settlement of the Designated NFT Exchange Consideration payable by you in respect of your Tokens purchase;</p>
</blockquote></li>
<li><blockquote>
<p>these Terms constitute legal, valid, and binding obligations on you, enforceable in accordance with its terms and neither the purchase of, nor receipt, nor holding of Tokens is in breach or contravention of any applicable law, regulation or rule in your jurisdiction;</p>
</blockquote></li>
<li><blockquote>
<p>no consent, approval, order or authorisation of, or registration, qualification, designation, declaration or filing with, any regulatory authority in any jurisdiction (the “<strong>Approvals</strong>”) is required on your part in connection with any NFT Exchange, or where any Approvals are required, such Approvals have been obtained and remain valid and in full force and effect;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFT Exchange Consideration that you will use to effect NFT Exchange, are not directly or indirectly derived from any activities that in connection with anti-money laundering and/or terrorism financing laws or regulations or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>none of you or (and in the case where you are accepting these Terms on behalf of a corporation) any of your related corporations (if any), any of your directors or officers nor, any of your employees, agents or any other person acting on behalf of your or any of your related corporations is an individual or entity that is, or is owned or controlled by an individual or entity that:</p>
</blockquote>

<ol type="i">
<li><blockquote>
<p>is listed by the Monetary Authority of Singapore as designated individuals or entities defined in the respective regulations promulgated under the Monetary Authority of Singapore Act (Chapter 186) of Singapore, the United Nations Act (Chapter 339) of Singapore, the Variable Capital Companies Act (No. 44 of 2018), or the Terrorism (Suppression of Financing) Act (Chapter 325) of Singapore or such other law, regulation or rule as may be prescribed by the MAS from time to time;</p>
</blockquote></li>
<li><blockquote>
<p>is currently the subject of any sanction administered by the OFAC or any other United States government authority, is not designated as a “Specially Designated National" or "Blocked Person" by OFAC or subject to any similar sanctions or measures imposed or administered by the United Nations Security Council, the European Union, Her Majesty’s Treasury of the United Kingdom or similar sanctions administered or imposed by the government of any other country (collectively, the “<strong>Sanctions</strong>”);</p>
</blockquote></li>
<li><blockquote>
<p>is located, organised or resident in a country or territory that is the subject of such Sanctions (including, without limitation, the Central African Republic, the Democratic People’s Republic of Korea, the Democratic Republic of Congo, Iran, Libya, Mali, Somalia, South Sudan, Sudan and Yemen) (“<strong>Sanctioned Countries</strong>”); or</p>
</blockquote></li>
<li><blockquote>
<p>has engaged in and is not now engaged in any dealings or transactions with any government, person, entity or project targeted by, or located in any country or territory, that at the time of the dealing or transaction is or was the subject of any Sanctions;</p>
</blockquote></li>
</ol>
</li>
</ol>
<ol start="18" type="a">
<li><blockquote>
<p>none of: (i) you; (ii) any person controlling or controlled by you; (iii) if you are a privately-held entity, any person having a beneficial interest in you; or (iv) any person for whom you are acting as agent or nominee in connection with your participation in the NFT Exchange is a senior foreign political figure, or any immediate family member or close associate of a senior foreign political figure, as such terms are defined below;</p>
</blockquote></li>
<li><blockquote>
<p>if you are affiliated with a Foreign Bank, or if you receive deposits from, make payments on behalf of, or handle other financial transactions related to a Foreign Bank, you represent and warrant to the NFT Vendor that: (i) the Foreign Bank has a fixed address, and not solely an electronic address, in a country in which the Foreign Bank is authorised to conduct banking activities; (ii) the Foreign Bank maintains operating records related to its banking activities; (iii) the Foreign Bank is subject to inspection by the banking authority that licensed the Foreign Bank to conduct its banking activities; and (iv) the Foreign Bank does not provide banking services to any other Foreign Bank that does not have a physical presence in any country and that is not a regulated affiliate;</p>
</blockquote></li>
<li><blockquote>
<p>you have sufficient Tokens to effect NFT Exchange in respect of any attempted NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFT(s) to be delivered to and received by you on a successful NFT Exchange will not be used for any purpose in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>you are acquiring Designated NFT(s) as principal and for your own benefit and you are not acting on the instructions of, or as nominee or agent for or on behalf of, any other person;</p>
</blockquote></li>
<li><blockquote>
<p>you bear the sole responsibility to determine what tax implications your participation in the NFT Exchange may have for you and agree not to hold the NFT Vendor or any other person involved in the NFT Exchange liable for any tax liability associated with or arising therefrom;</p>
</blockquote></li>
<li><blockquote>
<p>you agree and acknowledge that the NFT Vendor is not liable for any direct, indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any acceptance of or reliance on these Terms or any part thereof by you;</p>
</blockquote></li>
<li><blockquote>
<p>you waive the right to participate in a class action lawsuit or a class wide arbitration against the NFT Vendor and/or any person involved in the NFT Exchange and/or with the creation and distribution of the Designated NFTs; and</p>
</blockquote></li>
<li><blockquote>
<p>all of the above representations and warranties are, and will continue to be, true, complete, accurate and non-misleading from the time of your acceptance of these Terms notwithstanding the receipt by you of any Designated NFT on a successful NFT Exchange.</p>
</blockquote>
</li>
</ol>
<ol type="1" start="2">
<li><p>The NFT Vendor does not make, and hereby disclaims, any representation or warranty in any form whatsoever, including any representation or warranty in relation to:</p>
<ol type="a">
<li><blockquote>
<p>the information set out on the Website, the Channels or any other place;</p>
</blockquote></li>
<li><blockquote>
<p>the NFT Vendor and the Project Group;</p>
</blockquote></li>
<li><blockquote>
<p>the Project;</p>
</blockquote></li>
<li><blockquote>
<p>the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Website;</p>
</blockquote></li>
<li><blockquote>
<p>the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>the Tokens; and</p>
</blockquote></li>
<li><blockquote>
<p>any Supported Digital Wallet and your Relevant Wallet Address.</p>
</blockquote></li>
</ol>

</li>
</ol>

<ol start="10" type="1">
<li><p><strong><u>DISCLAIMERS</u></strong></p></li>
</ol>
<blockquote>
<p><u>The Website and Atomic NFT Swap Contract</u></p>
</blockquote>
<ol type="1">
<li><p><strong>IN ACCESSING AND/OR USING THE WEBSITE AND/OR THE ATOMIC NFT SWAP CONTRACT, YOU ACKNOWLEDGE AND AGREE THAT :</strong></p>
<ol type="a">
<li><p><strong>THE WEBSITE AND ATOMIC NFT SWAP CONTRACT IS PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS, AND NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.</strong></p></li>
<li><p><strong>NFT VENDOR AND ITS AFFILIATES HAS NOT MADE AND MAKES NO REPRESENTATION, WARRANTY AND/OR CONDITION OF ANY KIND THAT THE WEBSITE AND THE ATOMIC NFT SWAP CONTRACT WILL MEET YOUR REQUIREMENTS, OR WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.</strong></p></li>
<li><p><strong>YOU SHALL HAVE NO CLAIM AGAINST NFT VENDOR AND/OR ITS AFFILIATES IN RESPECT OF ANY LOSS SUFFERED BY YOU IN RELATION TO OR ARISING FROM YOUR ACCESS AND/OR USE OF THE WEBSITE AND/OR THE ATOMIC NFT SWAP CONTRACT.</strong></p></li>
</ol></li>
</ol>
<blockquote>
<p><u>Participating Digital Wallet</u></p>
</blockquote>
<ol start="2" type="1">
<li><p><strong>IN ACCESSING AND/OR USING A PARTICIPATING DIGITAL WALLET TO PARTICIPATE IN THE NFT EXCHANGE, YOU ACKNOWLEDGE AND AGREE THAT :</strong></p>
<ol type="a">
<li><p><strong>PARTICIPATING DIGITAL WALLET ARE DEVELOPED AND PROVIDED ON AN “AS-IS” AND “AS AVAILABLE” BASIS BY PERSON(S)/ENTITY(IES) OTHER THAN NFT VENDOR AND ITS AFFILIATES, AND NFT VENDOR AND ITS AFFILIATES (SAVE TO THE EXTENT PROHIBITED BY APPLICABLE LAWS) EXPRESSLY DISCLAIM ANY AND ALL REPRESENTATIONS, WARRANTIES AND/OR CONDITIONS OF ANY KIND IN RESPECT THEREOF, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, MERCHANTABLE QUALITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT.</strong></p></li>
<li><p><strong>NFT VENDOR AND ITS AFFILIATES HAS NOT MADE AND MAKES NO REPRESENTATION, WARRANTY AND/OR CONDITION OF ANY KIND THAT ANY PARTICIPATING DIGITAL WALLET WILL MEET YOUR REQUIREMENTS OR THE REQUIREMENTS OR WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.</strong></p></li>
<li><p><strong>YOU SHALL HAVE NO CLAIM AGAINST NFT VENDOR AND/OR ITS AFFILIATES IN RESPECT OF ANY LOSS SUFFERED BY YOU IN RELATION TO OR ARISING FROM YOUR ACCESS AND/OR USE OF ANY PARTICIPATING DIGITAL WALLET.</strong></p></li>
</ol></li>
<li><p>To the maximum extent permitted by all applicable laws, regulations, and rules and except as otherwise provided in these Terms, the NFT Vendor hereby expressly disclaims its liability and shall in no case be liable to you or any person for:</p>


<ol type="a">
<li><blockquote>
<p>any transfer of Designated NFT(s) acquired or to be acquired by you pursuant to a NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>the Tokens used to make a NFT Exchange being obtained through any acts in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>use of Tokens or Designated NFT(s) for any purpose in connection with money laundering, terrorism financing or any other acts in breach or contravention of any applicable law, regulation or rule;</p>
</blockquote></li>
<li><blockquote>
<p>any NFT Exchange being regarded as invalid and/or void <em>ab initio</em>;</p>
</blockquote></li>
<li><blockquote>
<p>any failure, malfunction or breakdown of, or disruption to, the Atomic NFT Swap Contract, the operation of the Website, any Participating Digital Wallet, the Tokens, Designated NFT(s) or any technology (including but not limited to smart contract technology) on which the Atomic NFT Swap Contract, the Website, the NFT Vendor, the Project Group, the Project, the Tokens, your Participating Digital Wallet or which the NFT Exchange relies on, due to occurrences of a forks, hacks, exploits, mining attacks (including but not limited to double-spend attacks, majority mining power attacks and “selfish-mining” attacks), cyber-attacks, distributed denials of service, errors, vulnerabilities, defects, flaws in programming or source code or otherwise, regardless of when such failure, malfunction, breakdown, or disruption occurs;</p>
</blockquote></li>
<li><blockquote>
<p>failure, malfunction or breakdown of, or disruption to, the operation of any blockchain, any blockchain-based software systems or any blockchain technology in connection with the operations of the NFT Vendor, the Project Group, the Project, the Tokens, the Designated NFTs, your Participating Digital Wallet and/or such other technology which the NFT Exchange relies on, due to occurrences of forks, hacks, exploits, mining attacks (including but not limited to double-spend attacks, majority mining power attacks and “selfish-mining” attacks), cyber-attacks, distributed denials of service, errors, vulnerabilities, defects, flaws in programming or source code or otherwise, regardless of when such failure, malfunction, breakdown, or disruption occurs;</p>
</blockquote></li>
<li><blockquote>
<p>any virus, error, bug, flaw, defect or otherwise adversely affecting the operation, functionality, usage, storage, transmission mechanisms, transferability or tradeability and other material characteristics of Tokens and/or the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>decreases or volatility in traded prices or lack of trading liquidity for Tokens and/or the Designated NFTs in any forum;</p>
</blockquote></li>
<li><blockquote>
<p>failure or unfitness of Tokens and the Designated NFTs for any specific purpose;</p>
</blockquote></li>
<li><blockquote>
<p>the manner of utilisation of the Designated NFT Exchange Consideration received by the NFT Vendor from the NFT Exchange or is otherwise burned;</p>
</blockquote></li>
<li><blockquote>
<p>failure to disclose information relating to the progress of the NFT Exchange;</p>
</blockquote></li>
<li><blockquote>
<p>loss of possession of the credentials for accessing, or loss or destruction of the private keys of, your Participating Digital Wallet in any manner and to any extent;</p>
</blockquote></li>
<li><blockquote>
<p>any rejection of trading of the Designated NFTs by any forum;</p>
</blockquote></li>
<li><blockquote>
<p>any prohibition, restriction or regulation by any government or regulatory authority in any jurisdiction of the operation, functionality, usage, storage, transmission mechanisms, transferability or tradeability or other material characteristics of the Tokens and the Designated NFTs;</p>
</blockquote></li>
<li><blockquote>
<p>any risks associated with the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, Tokens, Designated NFTs and your Participating Digital Wallet; and</p>
</blockquote></li>
<li><blockquote>
<p>all other risks, direct, indirect or ancillary, whether in relation to the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, Tokens, Designated NFTs, and your Participating Digital Wallet, which are not specifically or explicitly contained in or stated in these Terms.</p>
</blockquote></li>
</ol>


</li>
</ol>






<ol type="1" start="4">
<li><p>In the event of any exploit, hack or theft or other act resulting in a loss of Tokens or Designated NFTs or loss of access to your Participating Digital Wallet, you acknowledge and confirm that you shall have no right(s), claim(s) or causes of action in any way whatsoever against the NFT Vendor and/or Indemnified Persons.</p></li>
<li><p>In the event that the NFT Vendor discovers that you, in your participation in the NFT Exchange, have engaged in unfair, excessive or abusive usage or conduct, the NFT Vendor reserves the right to take such actions as may be necessary, to the fullest extent possible under law, to protect the NFT Vendor from losses, damages, harm or degradation of any form and manner.</p></li>
</ol></li>
</ol>









<ol start="11" type="1">
<li><p><strong><u>LIMITATION OF LIABILITY AND INDEMNIFICATION</u></strong></p>
<ol type="1">
<li><p>To the maximum extent permitted by the applicable laws, regulations and rules:</p>


<ol type="a">
<li><blockquote>
<p>the NFT Vendor and Indemnified Persons shall not be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including but not limited to loss of revenue, income or profits, and loss of use or data), arising out of or in connection with any transaction as contemplated by these Terms;</p>
</blockquote></li>
<li><blockquote>
<p>in any event, the aggregate liability of the NFT Vendor, in tort, contract or otherwise, arising out of or in connection with any transaction as contemplated by these Terms shall be limited to the <strong>US$100</strong>; and</p>
</blockquote></li>
<li><blockquote>
<p>you hereby agree to waive all rights to assert any claims under the applicable laws, regulations and rules and you may make claims based only on these Terms.</p>
</blockquote>
</li>
</ol>

</li>
</ol>

<ol type="1" start="2">
<li><p>To the maximum extent permitted by the applicable laws, regulations and rules, you shall indemnify, defend, and hold the NFT Vendor and/or Indemnified Persons harmless from and against any and all claims, damages, losses, suits, actions, demands, proceedings, expenses, and/or liabilities (including but not limited to reasonable legal fees incurred and/or those necessary to successfully establish the right to indemnification) filed/incurred by you or any third party against any of the NFT Vendor or the Indemnified Persons arising out of a breach of any warranty, representation, or obligation hereunder.</p></li>
</ol>
</li>
</ol>



<ol start="12" type="1">
<li><p><strong><u>NO ASSIGNMENT</u></strong></p></li>
</ol>
<blockquote>
<p>Subject to these Terms, only you and no other person shall have the right to any claim against the NFT Vendor in connection with your participation in the NFT Exchange. You shall not assign, trade or transfer, or attempt to assign, trade or transfer, your right to any such claim. Any such assignment or transfer shall not impose any obligation or liability of the NFT Vendor to the assignee or transferee. The NFT Vendor may assign right under these Terms to any person without notice to you.</p>
</blockquote>
<ol start="13" type="1">
<li><p><strong><u>INTELLECTUAL PROPERTY RIGHTS</u></strong></p>
<ol type="1">
<li><p>These Terms shall not entitle you to any intellectual property rights, including the rights in relation to the use, for any purpose, of any information, image, user interface, logos, trademarks, trade names, Internet domain names or copyright in connection with the Website, the Channels, the NFT Vendor, the Project Group, the Project, the NFT Exchange, the Tokens, and the Designated NFTs.</p></li>
<li><p>There are no implied licences under these Terms, and any rights not expressly granted to you hereunder are reserved by the NFT Vendor.</p></li>
</ol></li>
<li><p><strong><u>NO WAIVER</u></strong></p></li>
</ol>
<blockquote>
<p>Any failure of the NFT Vendor to enforce these Terms or to assert any right(s), claim(s) or causes of action against you under these Terms shall not be construed as a waiver of the right of the NFT Vendor to assert any right(s), claim(s) or causes of action against you.</p>
</blockquote>
<ol start="15" type="1">
<li><p><strong><u>ENTIRE AGREEMENT</u></strong></p>
<ol type="1">
<li><p>These Terms contain the entire agreement and the understanding between the Parties and supersedes all prior agreements, understandings or arrangements (both oral and written) in relation to the NFT Exchange.</p></li>
</ol></li>
<li><p><strong><u>TAXES</u></strong></p>
<ol type="1">
<li><p>The Tokens transferred as Designated NFT Exchange Consideration shall be exclusive of all taxes that are applicable to your participation in the NFT Exchange in all jurisdictions (“<strong>Payable Tax</strong>”).</p></li>
<li><p>You shall be responsible for determining any Payable Tax and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities. You shall be solely liable for all penalties, claims, fines, punishments, or other liabilities arising from the non-fulfilment or non-performance to any extent of any of your obligations in relation to the Payable Tax.</p></li>
<li><p>The NFT Vendor shall not be responsible for determining any Payable Tax and declaring, withholding, collecting, reporting and remitting the correct amount of Payable Tax to the appropriate tax authorities.</p></li>
</ol></li>
</ol>
<ol start="17" type="1">
<li><p><strong><u>COMMUNICATIONS WITH NFT VENDOR</u></strong></p>
<ol type="1">
<li><p>Any communication between you and NFT Vendor shall be by electronic means, through the electronic mail (exchange@ether.cards). Any notification from the NFT Vendor may be in the form of notifications from the NFT Vendor through any of the Channels or the Website, or such other communication channel as the NFT Vendor may otherwise elect.</p></li>
<li><p>You :</p>
<ol type="a">
<li><p>consent to receive communications from NFT Vendor in any electronic form; and</p></li>
<li><p>acknowledge and agree that all terms and conditions, agreements, notices, disclosures, and other communications that NFT Vendor provides to you electronically satisfy any legal requirement that would also be satisfied if such communications were to be in a hardcopy writing.</p></li>
</ol></li>
</ol></li>
<li><p><strong><u>GOVERNING LAW AND JURISDICTION</u></strong></p>
<ol type="1">
<li><p>These Terms shall be governed by, and construed in accordance with, the laws of the Republic of Singapore.</p></li>
<li><p>Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity or termination, shall be referred to and finally be resolved by arbitration in Singapore in accordance with the rules of the SIAC for the time being in force, which rules are deemed to be incorporated by reference in this paragraph. The seat of the arbitration shall be Singapore. The tribunal shall consist of a sole arbitrator to be appointed by the Chairman of the SIAC. The language of the arbitration shall be English. This arbitration agreement shall be governed by the laws of the Republic of Singapore.</p></li>
<li><p>Each of the Parties irrevocably submits to the non-exclusive jurisdiction of the courts of Singapore to support and assist the arbitration process pursuant to Paragraph 18.2 of these Terms, including if necessary the grant of interlocutory relief pending the outcome of that process.</p></li>
</ol></li>
</ol>
<blockquote>

</blockquote>
<ol start="19" type="1">
<li><p><strong><u>RIGHTS OF THIRD PARTIES</u></strong></p>
<ol type="1">
<li><p>Subject to Paragraph 19.2, the Contracts (Rights of Third Parties) Act (Chapter 53B) of Singapore, as may be modified, amended or supplemented from time to time, shall apply to these Terms.</p></li>
<li><p>Save for the Indemnified Persons who shall have rights to the extent accorded thereto under these Terms, a person who is not a Party shall not have any rights whatsoever under these Terms or to enforce these Terms.</p></li>
</ol></li>
<li><p><strong><u>SEVERANCE AND PARTIAL INVALIDITY</u></strong></p>
<ol type="1">
<li><p>If any of these Terms is rendered void, illegal or unenforceable by any legislation to which it is subject, it shall be rendered void, illegal or unenforceable to that extent and no further and, for the avoidance of doubt, the rest of these Terms shall continue to be valid and in full force and effect and shall in no way be affected, impaired or invalidated, and the Parties hereto shall use their commercially reasonable efforts to find and employ an alternative means to achieve the same or substantially the same result as that contemplated by such term, provision, covenant or restriction. It is hereby stipulated and declared to be the intention of the Parties that they would have executed the remaining terms, provisions, covenants and restrictions without including any of such that may be hereafter declared invalid, illegal, void or unenforceable.</p></li>
<li><p>The illegality, invalidity or unenforceability of any provision of these Terms under the law of any jurisdiction shall not affect its legality, validity or enforceability under the law of any other jurisdiction nor the legality, validity or enforceability of any other provision.</p></li>
</ol></li>
</ol>
<p><strong>ANNEX 1</strong></p>
<p><strong><u>DEFINITIONS</u></strong></p>
<ol type="1">
<li><p>In these Terms, the following words and expressions shall, where not inconsistent with the context, have the following meanings respectively:</p></li>
</ol>
<blockquote>
<p>“<strong>Affiliate</strong>”, with respect to any person, means any other person directly or indirectly controlling, controlled by or under common control with such person.</p>
<p>“<strong>Approvals</strong>” has the meaning ascribed to it in Paragraph 9.1(o).</p>
<p>“<strong>Atomic NFT Swap Contract</strong>” has the meaning ascribed to it in Paragraph 4.2(a).</p>
<p>“<strong>Channels</strong>” means the Website, the social media channels associated with the Project, namely the Discord group at <a target="_blank" href="https://discord.com/invite/mBwauRSJNW">https://discord.com/invite/mBwauRSJNW</a> (“<strong>Discord Channel</strong>”), the Project’s blog account at <a target="_blank" href="https://blog.ether.cards">https://blog.ether.cards</a>, the Twitter account at <a target="_blank" href="https://twitter.com/ether_cards">https://twitter.com/ether_cards</a>, the Reddit board at <a target="_blank" href="https://www.reddit.com/r/Ether_Cards/">https://www.reddit.com/r/Ether_Cards/</a> or any other online channel of the Project the account of which is held by the NFT Vendor or its Affiliates.</p>
<p>“<strong>close associate</strong>” in relation to a senior foreign political figure means a person who is widely and publicly known to maintain an unusually close relationship with such senior foreign political figure, and includes a person who is in a position to conduct substantial domestic and international financial transactions on behalf of such senior foreign political figure.</p>
<p>“<strong>CryptoPunk NFT</strong>” means a NFT developed by Larva Labs which are native to the following smart contract address on the Ethereum blockchain : 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB.</p>
<p>“<strong>CryptoPunk NFT Exchange</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>CryptoPunk NFT Exchange Consideration</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>CryptoPunk NFT Exchange Consideration Transfer</strong>” has the meaning ascribed to in Paragraph 3.2.</p>
<p>“<strong>CryptoPunk NFT Exchange Verification</strong>” has the meaning ascribed to in Paragraph 3.4.</p>
<p>“<strong>CryptoPunk NFTs Pool</strong>” has the meaning ascribed to in Paragraph 3.1.</p>
<p>“<strong>Designated NFT Exchange Consideration</strong>” means the the CryptoPunk NFT Exchange Consideration or Other NFT Exchange Consideration, as the case may be.</p>
<p>“<strong>Designated NFTs</strong>” means the (a) CryptoPunk NFTs selected by the NFT Vendor to be subject of the Cryptopunk NFT Pool and (b) the Other NFTs.</p>
<p>“<strong>Designated Person / Entity</strong>” has the meaning ascribed to it in Paragraph 2.3(c).</p>
<p>“<strong>Digital Certificate</strong>” has the meaning ascribed to it in Paragraph 3.2(c).</p>
<p>“<strong>Discord Channel</strong>” means the Discord channel associated with the Project at <a target="_blank" href="https://discord.com/invite/mBwauRSJNW">https://discord.com/invite/mBwauRSJNW</a> (last accessed on 28 September 2021).</p>
<p>“<strong>Disqualified Persons</strong>” has the meaning ascribed to it in Paragraph 2.3.</p>
<p>“<strong>double spend</strong>” means to undertake, or attempt to undertake, two (2) or more different transactions on a blockchain network and spend the same account balance on each of the transactions.</p>
<p>“<strong>ETH</strong>” means Ether, the cryptographic token native to the Ethereum network.</p>
<p>“<strong>Excluded Jurisdiction</strong>” means any of the following :</p>
</blockquote>
<ol type="a">
<li><p>the People’s Republic of China, the United States of America, Democratic People’s Republic of Korea, Democratic Republic of Congo, Iran, Libya, Somalia, South Sudan, Sudan and Yemen;</p></li>
<li><p>a jurisdiction identified by the Financial Action Task Force (FATF) for strategic AML/CFT deficiencies and included in FATF’s listing of “High-risk and Other Monitored Jurisdictions” accessible at http://www.fatf-gafi.org/publications/high-risk-and-other-monitored-jurisdictions; and</p></li>
<li><p>a jurisdiction (including but not limited to the Sanctioned Countries) in which the NFT Exchange is prohibited, restricted or unauthorised in any form or manner whether in full or in part under the laws, regulatory requirements or rules in such jurisdiction.</p></li>
</ol>
<blockquote>
<p>“<strong>Foreign Bank</strong>” means a non-United States of America banking institution.</p>
<p>“<strong>immediate family</strong>” in relation to a senior foreign political figure includes such figure’s parents, siblings, spouse, children and in-laws.</p>
<p>“<strong>Indemnified Persons</strong>” means the NFT Vendor, the Project Group and its respective related companies, affiliates, directors, officers, employees, agents, successors, and permitted assignees.</p>
<p>“<strong>NFT</strong>” means non-fungible tokens.</p>
<p>“<strong>NFT Exchange</strong>” means the exchange of a Designated NFT for the relevant amount of Tokens based on these Terms.</p>
<p>“<strong>NFT Exchange Period</strong>” has the meaning ascribed to it in Paragraph 2.5.</p>
<p>“<strong>NFT Vendor</strong>” means has the meaning ascribed to it in Paragraph 1.2<strong>.</strong></p>
<p>“<strong>OFAC</strong>” means the United States Office of Foreign Assets Control of the United States Department of the Treasury.</p>
<p>“<strong>Other NFT Exchange Consideration</strong>” has the meaning ascribed to it in Paragraph 4.3(a).</p>
<p>“<strong>Other NFTs</strong>” has the meaning ascribed to it in Clause 4.1.</p>
<p>“<strong>Other NFTs Exchange</strong>” has the meaning ascribed to it in Clause 5.2.</p>
<p>“<strong>Participant</strong>” means persons/entities participating in the NFT Exchange.</p>
<p>“<strong>Participating</strong> <strong>Digital Wallet</strong>” of a Participant and in relation to a blockchain address means a Supported Digital Wallet (a) in respect of which the private keys of such blockchain address are held, owned and/or controlled by such Participant; (b) used the such Participant to connect with Website; and (c) from which Tokens are transferred to a blockchain address designated by the NFT Vendor in exchange for Designated NFTs.</p>
<p>“<strong>Payable Tax</strong>” has the meaning ascribed to it in Paragraph 16.1.</p>
<p>“<strong>Project</strong>” means the Ether Cards project as described on the Website;</p>
<p>“<strong>Project Group</strong>” means the NFT Vendor and its Affiliates.</p>
<p>“<strong>Relevant CryptoPunk NFT</strong>” has the meaning ascribed to it in Paragraph 3.2(c)(ii).</p>
<p>“<strong>Relevant Wallet Address</strong>” has the meaning ascribed to it in Paragraph 3.2(a).</p>
<p>“<strong>Sanctions</strong>” has the meaning ascribed to it in Paragraph 9.1.</p>
<p>“<strong>Sanctioned Countries</strong>” has the meaning ascribed to it in Paragraph 9.1.</p>
<p>“<strong>senior foreign political figure</strong>” means a senior official in the executive, legislative, administrative, military or judicial branch of a government (whether elected or not), a senior official of a major political party, or a senior executive of a foreign government-owned corporation. It includes any corporation, business or other entity that has been formed by, or for the benefit of, a senior foreign political figure.</p>
<p>“<strong>SIAC</strong>” means the Singapore International Arbitration Centre.</p>
<p>“<strong>Supported Digital Wallet</strong>” means a digital wallet address that is compatible with the blockchain associated with (a) the Tokens; (b) the Designated NFTs; and (c) the Website.</p>
<p>“<strong>Tokens</strong>” means the Dust tokens (DUST), which is the cryptographic token native to the Project, and “<strong>Token</strong>” shall be construed accordingly.</p>
<p>“<strong>Website</strong>” has the meaning ascribed to it in Paragraph 1.1.</p>
</blockquote>
<ol type="1" start="2">
<li><p>In these Terms, a reference to:</p>

<ol type="a">
<li><blockquote>
<p>the NFT Vendor includes a reference to its duly authorised agents and/or delegates;</p>
</blockquote></li>
<li><blockquote>
<p>a person includes a reference to any individual, body corporate, unincorporated association or partnership;</p>
</blockquote></li>
<li><blockquote>
<p>an agreement or other document is a reference to that agreement or document as from time to time supplemented or amended;</p>
</blockquote></li>
<li><blockquote>
<p>the masculine gender includes the feminine and neuter genders and vice versa;</p>
</blockquote></li>
<li><blockquote>
<p>the singular includes the plural and vice versa; and</p>
</blockquote></li>
<li><blockquote>
<p>any law or regulation is a reference to that law or regulation as amended from time to time and, where the same has been repealed, to any re-enactment or replacement of the same.</p>
</blockquote></li>
</ol>
</li>
</ol>
`;

const TermsBox = _ref => {
  let {
    termsVisible,
    handleClose,
    handleAccept
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, termsVisible ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "terms-root black"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "terms-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "scrollable-content"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Terms and Conditions"), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      marginRight: '16px'
    },
    dangerouslySetInnerHTML: {
      __html: terms
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tc-button-container"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: handleAccept
  }, "Accept"))))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
};

var css_248z$1 = ".terms-root{\n\tbox-sizing: border-box;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(255,255,255,0.3);\n\tz-index: 1100;\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.restricted-box {\n\twidth:40%;\n\theight: auto;\n\tmin-width: 400px;\n\tmax-height: 600px;\n\tbackground:white;\n\tborder-radius: 15px;\n\tpadding: 15px;\n\t-webkit-box-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11); \n  \tbox-shadow: -1px 5px 9px 0px rgba(0,0,0,0.11);\n}\n\n.scrollable-content{\n\twidth:100%;\n\theight: 100%;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n.scrollable-content h2{\n\ttext-align: center;\n\tpadding-bottom: 15px;\n\tposition: sticky;\n\ttop:0;\n\tbackground:white;\n\tbackground: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\n\tbackground: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\n\tbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#ffffff\",GradientType=1);\n}\n\n.restricted-button-container{\n\tmargin-top:25px;\n\ttext-align: center;\n}\n.tc-button-container button{\n\tmargin: 10px 5px;\n}\n\n.restricted-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n}\n\n.restricted-container .country{\n\twidth:25%;\n\ttext-align: center;\n\tline-height: 1.8rem;\n}\n\n@media only screen and (max-width: 600px) {\n\t.restricted-container .country{\n\t\twidth:50%;\n\t}\n  }";
styleInject(css_248z$1);

const RestrictedAreaBox = _ref => {
  let {
    restrictedBoxVisible,
    handleClose
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, restrictedBoxVisible ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "terms-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "restricted-box"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "scrollable-content"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "Restricted region"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "restricted-container"
  }, Object.values(blockedCountries).map(country => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "country"
    }, country);
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "restricted-button-container"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: handleClose
  }, "OK"))))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
};

var img$2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAACQAAAAAQAAAJAAAAABMjAyMjowNTowMiAyMjozOTozNQAAA6ABAAMAAAAB//8AAKACAAMAAAABBMsAAKADAAMAAAABBMwAAAAAAAD/4Qs3aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRpc3BsYXkiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA1LTAyVDIyOjM5OjM1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA1LTAyVDIyOjM5OjM1KzAyOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0icHJvZHVjZWQiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFmZmluaXR5IFBob3RvIDEuMTAuNCIgc3RFdnQ6d2hlbj0iMjAyMi0wNS0wMlQyMjozOTozNSswMjowMCIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/tACxQaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/4hAASUNDX1BST0ZJTEUAAQEAAA/wbGNtcwIQAABtbnRyUkdCIFhZWiAH5gADABEAAgAPACNhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJkZXNjAAABXAAAAHRkc2NtAAAB0AAABIJjcHJ0AAAGVAAAACN3dHB0AAAGeAAAABRyWFlaAAAGjAAAABRnWFlaAAAGoAAAABRiWFlaAAAGtAAAABRyVFJDAAAGyAAACAxhYXJnAAAO1AAAACB2Y2d0AAAO9AAAADBuZGluAAAPJAAAAD5jaGFkAAAPZAAAACxtbW9kAAAPkAAAACh2Y2dwAAAPuAAAADhiVFJDAAAGyAAACAxnVFJDAAAGyAAACAxhYWJnAAAO1AAAACBhYWdnAAAO1AAAACBkZXNjAAAAAAAAAAhEaXNwbGF5AAAAAAAAAAAIAEQAaQBzAHAAbABhAHkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG1sdWMAAAAAAAAAJgAAAAxockhSAAAAFAAAAdhrb0tSAAAADAAAAexuYk5PAAAAEgAAAfhpZAAAAAAAEgAAAgpodUhVAAAAFAAAAhxjc0NaAAAAFgAAAjBkYURLAAAAHAAAAkZubE5MAAAAFgAAAmJmaUZJAAAAEAAAAnhpdElUAAAAFAAAAohlc0VTAAAAEgAAApxyb1JPAAAAEgAAApxmckNBAAAAFgAAAq5hcgAAAAAAFAAAAsR1a1VBAAAAHAAAAthoZUlMAAAAFgAAAvR6aFRXAAAACgAAAwp2aVZOAAAADgAAAxRza1NLAAAAFgAAAyJ6aENOAAAACgAAAwpydVJVAAAAJAAAAzhlbkdCAAAAFAAAA1xmckZSAAAAFgAAA3BtcwAAAAAAEgAAA4ZoaUlOAAAAEgAAA5h0aFRIAAAADAAAA6pjYUVTAAAAGAAAA7ZlbkFVAAAAFAAAA1xlc1hMAAAAEgAAApxkZURFAAAAEAAAA85lblVTAAAAEgAAA95wdEJSAAAAGAAAA/BwbFBMAAAAEgAABAhlbEdSAAAAIgAABBpzdlNFAAAAEAAABDx0clRSAAAAFAAABExwdFBUAAAAFgAABGBqYUpQAAAADAAABHYATABDAEQAIAB1ACAAYgBvAGoAac7st+wAIABMAEMARABGAGEAcgBnAGUALQBMAEMARABMAEMARAAgAFcAYQByAG4AYQBTAHoA7QBuAGUAcwAgAEwAQwBEAEIAYQByAGUAdgBuAP0AIABMAEMARABMAEMARAAtAGYAYQByAHYAZQBzAGsA5gByAG0ASwBsAGUAdQByAGUAbgAtAEwAQwBEAFYA5AByAGkALQBMAEMARABMAEMARAAgAGMAbwBsAG8AcgBpAEwAQwBEACAAYwBvAGwAbwByAEEAQwBMACAAYwBvAHUAbABlAHUAciAPAEwAQwBEACAGRQZEBkgGRgYpBBoEPgQ7BEwEPgRABD4EMgQ4BDkAIABMAEMARCAPAEwAQwBEACAF5gXRBeIF1QXgBdlfaYJyAEwAQwBEAEwAQwBEACAATQDgAHUARgBhAHIAZQBiAG4A/QAgAEwAQwBEBCYEMgQ1BEIEPQQ+BDkAIAQWBBoALQQ0BDgEQQQ/BDsENQQ5AEMAbwBsAG8AdQByACAATABDAEQATABDAEQAIABjAG8AdQBsAGUAdQByAFcAYQByAG4AYQAgAEwAQwBECTAJAgkXCUAJKAAgAEwAQwBEAEwAQwBEACAOKg41AEwAQwBEACAAZQBuACAAYwBvAGwAbwByAEYAYQByAGIALQBMAEMARABDAG8AbABvAHIAIABMAEMARABMAEMARAAgAEMAbwBsAG8AcgBpAGQAbwBLAG8AbABvAHIAIABMAEMARAOIA7MDxwPBA8kDvAO3ACADvwO4A8wDvQO3ACAATABDAEQARgDkAHIAZwAtAEwAQwBEAFIAZQBuAGsAbABpACAATABDAEQATABDAEQAIABhACAAQwBvAHIAZQBzMKsw6TD8AEwAQwBEAAB0ZXh0AAAAAENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIyAABYWVogAAAAAAAA8xYAAQAAAAEWylhZWiAAAAAAAACDtQAAPb7///+7WFlaIAAAAAAAAEuQAACzJwAACtBYWVogAAAAAAAAJ5EAAA8bAADIoWN1cnYAAAAAAAAEAAAAAAUACgAPABQAGQAeACMAKAAtADIANgA7AEAARQBKAE8AVABZAF4AYwBoAG0AcgB3AHwAgQCGAIsAkACVAJoAnwCjAKgArQCyALcAvADBAMYAywDQANUA2wDgAOUA6wDwAPYA+wEBAQcBDQETARkBHwElASsBMgE4AT4BRQFMAVIBWQFgAWcBbgF1AXwBgwGLAZIBmgGhAakBsQG5AcEByQHRAdkB4QHpAfIB+gIDAgwCFAIdAiYCLwI4AkECSwJUAl0CZwJxAnoChAKOApgCogKsArYCwQLLAtUC4ALrAvUDAAMLAxYDIQMtAzgDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSQVYBWcFdwWGBZYFpgW1BcUF1QXlBfYGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1ELaQuAC5gLsAvIC+EL+QwSDCoMQwxcDHUMjgynDMAM2QzzDQ0NJg1ADVoNdA2ODakNww3eDfgO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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAzr4QDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJBAnBgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7fDeD7fdbHT1tS+rFrZzFZjHjMdAf/9k=";

const ShowNextPreviosProject$1 = _ref => {
  let {
    prev,
    next,
    idx,
    mediaUrl,
    handler
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `previous-box snp-box ${prev === null ? 'disabled' : ''}`,
    onClick: () => {
      if (prev) {
        handler(idx - 1);
      }
    }
  }, prev && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: mediaUrl + prev.images[0].src,
    style: {
      maxHeight: "86px"
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "previous"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, prev.name)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-divider"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `next-box snp-box ${next === null ? 'disabled' : ''}`,
    onClick: () => {
      if (next) {
        handler(idx + 1);
      }
    }
  }, next && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text text-right"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "next"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, next.name)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: mediaUrl + next.images[0].src,
    style: {
      maxHeight: "86px"
    }
  })))));
};

const ProjectSubpage = _ref2 => {
  let {
    pools,
    currentIndex,
    address,
    dust,
    d4p,
    ethersProvider,
    chainId,
    handleConnect,
    handleBack,
    handleChangePool,
    mediaBaseUrl
  } = _ref2;
  const [pool, setPool] = React.useState(null);
  const [prevPool, setPrevPool] = React.useState(null);
  const [nextPool, setNextPool] = React.useState(null);
  const [dustBalance, setDustBalance] = React.useState(null);
  const [waitingForApproval, setWaitingForApproval] = React.useState(false);
  const [txInProgress, setTxInProgress] = React.useState(false);
  const [txHash, setTxHash] = React.useState(null);
  const [userCountryCode, setUserCountryCode] = React.useState(null);
  const [countryBlocked, setCountryBlocked] = React.useState(false);
  const [showRestricted, setShowRestricted] = React.useState(false);
  const [userHash, setUserHash] = React.useState(null);
  const [showTerms, setShowTerms] = React.useState(false);
  React.useState(false);
  const [tokenMeta, setTokenMeta] = React.useState(null);
  const [videoVisible, setVideoVisible] = React.useState(false);
  const [cardRevealed, setCardRevealed] = React.useState(false);
  const [revealedImage, setRevealedImage] = React.useState(null);
  const videoRef = React.useRef(null);
  const MEDIA_BASE_URL = mediaBaseUrl ? mediaBaseUrl : chainId === 1 ? 'https://galaxis-web.s3.amazonaws.com/media' : 'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
  React.useEffect(() => {
    setPool(pools[currentIndex]);
    let p = null;
    let n = null;

    if (currentIndex > 0) {
      p = pools[currentIndex - 1];
    }

    if (currentIndex < pools.length - 1) {
      n = pools[currentIndex + 1];
    }

    setPrevPool(p);
    setNextPool(n);
    console.log('sub page mounted', chainId);

    const fetchUserCountry = async () => {
      const res = await axios__default["default"].get(`${chainId === 1 ? 'https://heroku.ether.cards' : 'https://heroku-staging.ether.cards'}/api/location`).catch(e => console.log(e));

      if (res && res.data && res.data.country_code) {
        const countryCode = res.data.country_code;
        console.log('CC', countryCode);
        setUserCountryCode(countryCode);
      } else {
        reactToast.toast.error('Unable to determine your country');
      }
    };

    fetchUserCountry(); // getUserHashes();
  }, [currentIndex]);
  React.useEffect(() => {
    const getUserHashes = async () => {
      let res = await d4p.numberOfHashes(address).catch(e => console.log);

      if (res && Number(res) > 0) {
        console.log('number of hashes', Number(res));
        let storedHash = localStorage.getItem('user_hash' + pool.vault_id);

        if (storedHash) {
          setUserHash(storedHash);
          setTxHash(null);
        } else {
          setUserHash(null);
        }
      }

      let tx = localStorage.getItem('tx_hash' + pool.vault_id);

      if (tx) {
        setTxHash(tx);
      } else {
        setTxHash(null);
      }
    };

    if (address && d4p && pool) {
      console.log('get user hashes');
      getUserHashes();
    }
  }, [address, d4p, pool]);
  /* const getUserHashes = async () => {
  
  } */

  React.useEffect(() => {
    const waitForTx = async () => {
      setTxInProgress(true);
      let tr = await ethersProvider.waitForTransaction(txHash, 1).catch(e => {
        console.log(e);
      });

      if (tr) {
        if (tr.status > 0) {
          reactToast.toast.success('Transaction sent.'); //console.log('wait for punks');
        }
      }

      localStorage.removeItem('tx_hash' + pool.vault_id);
      setTxInProgress(false);
      let b = await dust.balanceOf(address).catch(e => {
        console.log(e);
      });

      if (b) {
        setDustBalance(b);
      }

      let numOfHashes = await d4p.numberOfHashes(address).catch(e => {
        console.log(e);
      });

      if (numOfHashes) {
        let lastUserHash = await d4p.userhashes(address, Number(numOfHashes) - 1).catch(e => {
          console.log(e);
        });
        console.log('Last hash:', lastUserHash);

        if (lastUserHash) {
          setTxHash(null);
          setUserHash(lastUserHash);
          localStorage.setItem('user_hash' + pool.vault_id, lastUserHash);
        }
        /* const userHashes={
            0: [0x1],
            1: [],
            2: [0x22],
            3: [0x333],
            4: []
        } */

      }

      setTxHash(null);
    };

    if (txHash) {
      waitForTx();
    }
  }, [txHash]);
  React.useEffect(() => {
    if (userHash) {
      let intervalId = setInterval(async () => {
        /*    console.log('stored hash',userHash);
            let lastUserHash = await d4p.userhashes(address,0).catch(e=>{console.log(e)})
           console.log('Last hash:',lastUserHash);
        */
        let id = await d4p.redeemedTokenId(userHash).catch(e => {
          console.log(e);
        });
        console.log('redeemed id', id);

        if (Number.parseInt(id._hex, 16)) {
          if (pool.vaultData.tokenContract) {
            let tUri = await pool.vaultData.tokenContract.tokenURI(id).catch(e => {
              console.log(e);
            }); //  console.log('uri',tUri);

            if (tUri.indexOf('ipfs://') === 0) {
              let url = tUri.replace('ipfs://', '/ipfs/');

              if (url.indexOf('/ipfs') !== 0) {
                url = '/ipfs/' + tUri;
              }

              tUri = 'https://ether-cards.mypinata.cloud' + url;
            }

            let meta = await getTokenURI(tUri);

            if (meta) {
              setTokenMeta(meta);
            } else {
              //meebit cors hack :/
              if (pool.vault_id === 1) {
                //if meebit...
                let id = tUri.split('/').pop();
                let image = "https://meebits.larvalabs.com/meebitimages/characterimage?index=****&type=full&imageType=jpg".replace('****', id);
                setTokenMeta({
                  id,
                  image
                });
              }
            }

            console.log(meta);
          }

          clearInterval(intervalId);
          console.log('redeemed id!!!', id);
        }
      }, 10000);
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, [userHash]);
  React.useEffect(() => {
    if (tokenMeta) {
      try {
        const img = new Image();
        img.src = getRemoteImageUrl(tokenMeta.image);
      } catch (e) {
        console.log('errror', e);
      }

      setRevealedImage(getRemoteImageUrl(tokenMeta.image));
      videoRef.current.play();
      setVideoVisible(true); //!

      setTimeout(() => {
        videoFinished();
      }, 5000);
    }
  }, [tokenMeta]);

  const videoFinished = () => {
    setUserHash(null);
    localStorage.removeItem('user_hash' + pool.vault_id);
    setCardRevealed(true);
    setVideoVisible(false);
  };

  const getTokenURI = uri => {
    return fetch(uri).then(res => res.json()).then(result => {
      //console.log('result',result);
      return result;
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      console.log('***Error(fetch):', error);
      return null;
    });
  };

  const getRemoteImageUrl = src => {
    if (src.indexOf('http') !== 0) {
      if (src.indexOf('data:image') < 0) {
        if (src.indexOf('/static') === 0) {
          // local file
          return src;
        } else {
          // ipfs
          let url = src.replace('ipfs://', '/ipfs/');

          if (url.indexOf('/ipfs') !== 0) {
            url = '/ipfs/' + src;
          }

          return 'https://ether-cards.mypinata.cloud' + url;
        }
      } else {
        // embedded
        return src;
      }
    }

    return src;
  };

  React.useEffect(() => {
    if (userCountryCode) {
      const blocked = Object.keys(blockedCountries).includes(userCountryCode);
      console.log('blocked?', blocked);
      setCountryBlocked(blocked);
    }
  }, [userCountryCode]);
  React.useEffect(() => {
    if (dust && address) {
      getDustBalance();
    }
  }, [address]);

  const getDustBalance = async () => {
    let balance = await dust.balanceOf(address).catch(e => console.log);
    console.log('balance', dustBalance);

    if (balance) {
      setDustBalance(balance);
    }
  };

  const connectOrExhange = () => {
    if (address) {
      doTheExchange();
    } else {
      handleConnect();
    }
  };

  const doTheExchange = async () => {
    if (countryBlocked) {
      setShowRestricted(true);
    } else {
      let b = Number.parseFloat(ethers.ethers.utils.formatEther(dustBalance));
      let p = Number.parseFloat(ethers.ethers.utils.formatEther(pool.vaultData.vaultPrice));
      console.log(b, p);

      if (b < p) {
        console.log('NOT ENOUGH DUST');
        reactToast.toast.warn('Your Dust balance is lower than the item price.');
        return;
      }

      setShowTerms(true);
    }
  };

  const onTermsAccepted = async () => {
    setShowTerms(false); //const data="0x0000000000000000000000000000000000000000000000000000000000000000";

    const data = ethers.ethers.utils.hexZeroPad(pool.vault_id, 32);
    let dc = dust.connect(ethersProvider.getSigner());
    let gasLimit = ethers.BigNumber.from(550000); // await dc.estimateGas.send(dust4PunksContract.address,itemPrice,data).catch(e =>{toast.error(e.error.message)});
    // console.log('GASLIMIT',gasLimit);

    let tx = null;
    setWaitingForApproval(true);
    tx = await dc.send(d4p.address, pool.vaultData.vaultPrice, data, {
      gasLimit
    }).catch(e => {
      reactToast.toast.error(e.message);
    });
    setWaitingForApproval(false);
    setTxInProgress(true);

    if (tx) {
      localStorage.setItem('tx_hash' + pool.vault_id, tx.hash);
      setTxHash(tx.hash);
    } else {
      setTxInProgress(false);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, pool !== null && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-root"
  }, !txHash && !userHash && !cardRevealed && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "pool-ps-btn",
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "\u25C2"), /*#__PURE__*/React__default["default"].createElement("p", null, "Back")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: MEDIA_BASE_URL + pool.images[0].src,
    style: {
      maxWidth: '100%',
      width: '450px'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box w-100"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "VAULT"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title "
  }, pool.name), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "COUNTER"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "mb-1"
  }, /*#__PURE__*/React__default["default"].createElement("b", null, pool.vaultData.available, " out of ", pool.total_supply, " left")), /*#__PURE__*/React__default["default"].createElement(CounterBar, {
    value: pool.vaultData.available,
    maxValue: pool.total_supply
  }), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Your balance"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dpc-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, dustBalance ? Number(ethers.ethers.utils.formatEther(dustBalance)).toLocaleString() + ' D' : 'N/A'))), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Price"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dpc-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, Number(ethers.ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString() + ' D'))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "ps-text-bottom"
  }, pool.vaultData.available > 0 && /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: connectOrExhange
  }, address ? 'Exchange' : 'Connect'))))), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label mt-2",
    style: {
      fontFamily: "poppins-semibold",
      textTransform: "capitalize",
      fontSize: "18px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "Description")), /*#__PURE__*/React__default["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: pool.description.replace('*****', Number(ethers.ethers.utils.formatEther(pool.vaultData.vaultPrice)).toLocaleString())
    }
  })), /*#__PURE__*/React__default["default"].createElement(ShowNextPreviosProject$1, {
    prev: prevPool,
    next: nextPool,
    idx: currentIndex,
    mediaUrl: MEDIA_BASE_URL,
    handler: handleChangePool
  })), (txHash || userHash) && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "pool-ps-btn",
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "\u25C2"), /*#__PURE__*/React__default["default"].createElement("p", null, "Back to pools")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$2,
    style: {
      maxWidth: '100%'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box w-100"
  }, txHash && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title",
    style: {
      lineHeight: "35px",
      marginBottom: "20px"
    }
  }, "Waiting for transaction"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label",
    style: {
      textTransform: "none"
    }
  }, "Please wait until the transaction is complete.", /*#__PURE__*/React__default["default"].createElement("br", null), "You can check the status on  ", /*#__PURE__*/React__default["default"].createElement("a", {
    className: "es-link",
    href: chainId === 1 ? 'https://etherscan.io' : 'https://rinkeby.etherscan.io' + '/tx/' + txHash,
    target: "_blank",
    rel: "noreferrer"
  }, "Etherscan."))), userHash && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title",
    style: {
      lineHeight: "35px",
      marginBottom: "20px"
    }
  }, "VRF Initialised!", /*#__PURE__*/React__default["default"].createElement("br", null), "Transition was successful!"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label",
    style: {
      textTransform: "none"
    }
  }, "Transition was successful. Chainlink's VRF now picks a random Digital Collectible from the vault. Please be patient as this process may take several minutes.")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-circle",
    style: {
      margin: "45px auto"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-rotary-holder",
    id: "txRotator"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-rotary-item"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-shadow"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-content-holder"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "counter-text"
  }, "LOADING"))))))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `video-box  ${videoVisible && 'visible'}`
  }, /*#__PURE__*/React__default["default"].createElement("video", {
    ref: videoRef,
    onEnded: videoFinished,
    playsInline: true,
    style: {
      width: '100%'
    },
    src: "https://ether-cards.mypinata.cloud/ipfs/QmPHZNPA8oqwdiMZ2m3YApyEpFUpRKj6XfxiKiLi5Gr1Qk"
  }))), cardRevealed && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "pool-ps-btn",
    onClick: handleBack
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "\u25C2"), /*#__PURE__*/React__default["default"].createElement("p", null, "Back to pools")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: revealedImage,
    style: {
      maxWidth: '100%'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box w-100"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title",
    style: {
      lineHeight: "35px",
      marginBottom: "20px"
    }
  }, "Congratulations!", /*#__PURE__*/React__default["default"].createElement("br", null), "You Got It!"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label",
    style: {
      textTransform: "none"
    }
  }, "Your brand new Digital Collectible can be viewed right now in your wallet, or go back to dust pools to buy some more!"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "ps-text-bottom",
    style: {
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
      maxWidth: "170px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    onClick: () => {
      setCardRevealed(false);
      setUserHash(false);
      setTxHash(false);
    }
  }, "Buy more")))))), /*#__PURE__*/React__default["default"].createElement(TermsBox, {
    termsVisible: showTerms,
    handleClose: () => setShowTerms(false),
    handleAccept: onTermsAccepted
  }), /*#__PURE__*/React__default["default"].createElement(RestrictedAreaBox, {
    restrictedBoxVisible: showRestricted,
    handleClose: () => setShowRestricted(false)
  }), waitingForApproval && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "approval-mask"
  })));
};

var Dust$2 = "0xe2E109f1b4eaA8915655fE8fDEfC112a34ACc5F0";
var Dust4Punks$2 = "0xc8725085541967993253C6EA460DD96dafFABee5";
var Zoom2$2 = "0x7cdF091AF6a9ED75E3192500d3e5BB0f63e22Dea";
var AddressesMain = {
	Dust: Dust$2,
	Dust4Punks: Dust4Punks$2,
	Zoom2: Zoom2$2
};

var Dust$1 = "0x81D65FD979BDa2284348a5aC96C86235D51860d8";
var Dust4Punks$1 = "0x732830dd126dA0c506AB3DaD78AD6D2F38904400";
var Zoom2$1 = "0xebC7d793d062371C11cB802e7D49eEAA0c30EB06";
var AddressesGoerli = {
	Dust: Dust$1,
	Dust4Punks: Dust4Punks$1,
	Zoom2: Zoom2$1
};

var abi$3 = [
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string"
			},
			{
				internalType: "address[]",
				name: "_defaultOperators",
				type: "address[]"
			},
			{
				internalType: "uint256",
				name: "_initialSupply",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "AuthorizedOperator",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Burned",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Minted",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "RevokedOperator",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				indexed: false,
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "Sent",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "holder",
				type: "address"
			},
			{
				internalType: "address",
				name: "spender",
				type: "address"
			}
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "authorizeOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "burn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8"
			}
		],
		stateMutability: "pure",
		type: "function"
	},
	{
		inputs: [
		],
		name: "defaultOperators",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "granularity",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "address",
				name: "tokenHolder",
				type: "address"
			}
		],
		name: "isOperatorFor",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "operatorBurn",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "operatorData",
				type: "bytes"
			}
		],
		name: "operatorSend",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "revokeOperator",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "data",
				type: "bytes"
			}
		],
		name: "send",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "holder",
				type: "address"
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "_newName",
				type: "string"
			},
			{
				internalType: "string",
				name: "_newSymbol",
				type: "string"
			}
		],
		name: "updateTokenInfo",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var Dust = {
	abi: abi$3
};

var abi$2 = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8"
			}
		],
		name: "Initialized",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "hash",
				type: "uint256"
			}
		],
		name: "RedemptionRequest",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "remaining",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			},
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "destinasi",
				type: "address"
			}
		],
		name: "add_721_vault",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "remaining",
				type: "uint256"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			},
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "handler",
				type: "address"
			},
			{
				internalType: "address",
				name: "destinasi",
				type: "address"
			}
		],
		name: "add_external_redeemer",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address"
			},
			{
				internalType: "address",
				name: "vault",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			}
		],
		name: "change_vault_price",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			},
			{
				internalType: "bool",
				name: "enabled",
				type: "bool"
			}
		],
		name: "enable_vault",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "initialize",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "hash",
				type: "uint256"
			}
		],
		name: "isTokenRedeemed",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "next_redeemable",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address"
			}
		],
		name: "numberOfHashes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "rand",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "requestId",
				type: "uint256"
			}
		],
		name: "process",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "punksForDust",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: "string",
						name: "name",
						type: "string"
					},
					{
						internalType: "address",
						name: "vault",
						type: "address"
					},
					{
						internalType: "address",
						name: "token",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "random",
						type: "uint256"
					},
					{
						internalType: "address",
						name: "recipient",
						type: "address"
					},
					{
						internalType: "address",
						name: "handler",
						type: "address"
					},
					{
						internalType: "uint256",
						name: "position",
						type: "uint256"
					},
					{
						internalType: "uint256",
						name: "token_id",
						type: "uint256"
					},
					{
						internalType: "bool",
						name: "redeemed",
						type: "bool"
					}
				],
				internalType: "struct DustBusterPro",
				name: "general",
				type: "tuple"
			}
		],
		name: "redeem",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "hash",
				type: "uint256"
			}
		],
		name: "redeemedTokenId",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "reg",
		outputs: [
			{
				internalType: "contract RegistryConsumer",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "userData",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		name: "tokensReceived",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "userhashes",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultName",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultPrice",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "vaultID",
				type: "uint256"
			}
		],
		name: "vaultToken",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];
var Dust4Punks = {
	abi: abi$2
};

var _format = "hh-sol-artifact-1";
var contractName = "Zoom2";
var sourceName = "contracts/Zoom2.sol";
var abi$1 = [
	{
		inputs: [
			{
				internalType: "bytes",
				name: "inputData",
				type: "bytes"
			}
		],
		name: "combine",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			},
			{
				internalType: "bytes",
				name: "",
				type: "bytes"
			}
		],
		stateMutability: "view",
		type: "function"
	}
];
var bytecode = "0x608060405234801561001057600080fd5b506104a0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063124542e314610030575b600080fd5b6100e96004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061023c565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610131578082015181840152602081019050610116565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b8381101561019757808201518184015260208101905061017c565b50505050905090810190601f1680156101c45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101fd5780820151818401526020810190506101e2565b50505050905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b60608060608060608060208701600381015160001a610100600283015160001a020159604052604051945060408102855260005b6002820281101561029257600060208202602088010152600181019050610270565b5059604052604051935060208102845260005b818110156102c4576000602082026020870101526001810190506102a5565b506006820191505960405260206040510192506000602084016000805b8481101561044757600286015160001a610100600188015160001a020160008052865160001a600381141561031557600093505b600481146002821417156103c257600488015160001a61010060038a015160001a0201600689015160001a61010060058b015160001a0201600283141561037c576040820260208e0101600160146101000a03600c8383510103511660005260088b019a50505b60048314156103bf576040820260208e010151518087821488831117156103a95787820390506001880197505b818811156103b657600090505b8060208d015250505b50505b60006002821414156103ed57600888019750600160146101000a03600c890351166000526014880197505b6000516000806000858c856207a120fa503d6000883e3d9050866040860260208f010152806040860260408f010152838a019950808701965080880197508088036020860260208e010152505050506001810190506102e1565b50828652602082016040525050505050808288955095509550505050919390925056fea264697066735822122057a5d2e5a6e7eed9cbc9707c4487c4deb46cbab8fa7c83a798ede1b3763cae6a64736f6c63430007050033";
var deployedBytecode = "0x608060405234801561001057600080fd5b506004361061002b5760003560e01c8063124542e314610030575b600080fd5b6100e96004803603602081101561004657600080fd5b810190808035906020019064010000000081111561006357600080fd5b82018360208201111561007557600080fd5b8035906020019184600183028401116401000000008311171561009757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061023c565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610131578082015181840152602081019050610116565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b8381101561019757808201518184015260208101905061017c565b50505050905090810190601f1680156101c45780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019080838360005b838110156101fd5780820151818401526020810190506101e2565b50505050905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b60608060608060608060208701600381015160001a610100600283015160001a020159604052604051945060408102855260005b6002820281101561029257600060208202602088010152600181019050610270565b5059604052604051935060208102845260005b818110156102c4576000602082026020870101526001810190506102a5565b506006820191505960405260206040510192506000602084016000805b8481101561044757600286015160001a610100600188015160001a020160008052865160001a600381141561031557600093505b600481146002821417156103c257600488015160001a61010060038a015160001a0201600689015160001a61010060058b015160001a0201600283141561037c576040820260208e0101600160146101000a03600c8383510103511660005260088b019a50505b60048314156103bf576040820260208e010151518087821488831117156103a95787820390506001880197505b818811156103b657600090505b8060208d015250505b50505b60006002821414156103ed57600888019750600160146101000a03600c890351166000526014880197505b6000516000806000858c856207a120fa503d6000883e3d9050866040860260208f010152806040860260408f010152838a019950808701965080880197508088036020860260208e010152505050506001810190506102e1565b50828652602082016040525050505050808288955095509550505050919390925056fea264697066735822122057a5d2e5a6e7eed9cbc9707c4487c4deb46cbab8fa7c83a798ede1b3763cae6a64736f6c63430007050033";
var linkReferences = {
};
var deployedLinkReferences = {
};
var Zoom2 = {
	_format: _format,
	contractName: contractName,
	sourceName: sourceName,
	abi: abi$1,
	bytecode: bytecode,
	deployedBytecode: deployedBytecode,
	linkReferences: linkReferences,
	deployedLinkReferences: deployedLinkReferences
};

var abi = [
	{
		inputs: [
		],
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Approval",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "ApprovalForAll",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "OwnershipTransferred",
		type: "event"
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "Transfer",
		type: "event"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "approve",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			}
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "getApproved",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "address",
				name: "operator",
				type: "address"
			}
		],
		name: "isApprovedForAll",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256[]",
				name: "tokenIds",
				type: "uint256[]"
			}
		],
		name: "mint",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
		],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "ownerOf",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "renounceOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			},
			{
				internalType: "bytes",
				name: "_data",
				type: "bytes"
			}
		],
		name: "safeTransferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "operator",
				type: "address"
			},
			{
				internalType: "bool",
				name: "approved",
				type: "bool"
			}
		],
		name: "setApprovalForAll",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "interfaceId",
				type: "bytes4"
			}
		],
		name: "supportsInterface",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256"
			}
		],
		name: "tokenOfOwnerByIndex",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "tokenURI",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
		],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address"
			},
			{
				internalType: "address",
				name: "to",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenId",
				type: "uint256"
			}
		],
		name: "transferFrom",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address"
			}
		],
		name: "transferOwnership",
		outputs: [
		],
		stateMutability: "nonpayable",
		type: "function"
	}
];
var Dummy = {
	abi: abi
};

const contractAbis = {
  Dust,
  Dust4Punks,
  Zoom2
};
const addresses = {
  1: {
    addr: AddressesMain,
    name: 'Main'
  },
  5: {
    addr: AddressesGoerli,
    name: 'Goerli'
  }
};
const getContract = async (contractName, provider) => {
  //console.log('get contract fn',provider);
  let ntw = await provider.getNetwork(); //console.log('nnetwork',ntw);

  let contractAbi = contractAbis[contractName];
  let address = addresses[ntw.chainId].addr[contractName];
  let contract = null;

  try {
    contract = new ethers.ethers.Contract(address, contractAbi.abi, provider);
  } catch {
    console.log('contract not found');
  } //console.log(contractName,contract);


  return contract;
};
const getDummy721 = async (address, provider) => {
  let contract = null;

  if (!address) {
    return contract;
  }

  try {
    contract = new ethers.ethers.Contract(address, Dummy.abi, provider);
  } catch {
    console.log('contract not found');
  }

  return contract;
};

function useInterval(callback, delay) {
  const savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3crect id='Rectangle_2129' data-name='Rectangle 2129' width='16' height='16' rx='2' fill='white'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3crect id='Rectangle_2130' data-name='Rectangle 2130' width='16' height='16' rx='2' fill='%23FE2C85'/%3e%3c/svg%3e";

const sx = {
  content: {
    maxWidth: '294px',
    margin: 'auto'
  },
  dotList: {
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    zIndex: '3',
    position: 'absolute',
    justifyContent: 'center'
  },
  contentLeft: {
    display: 'flex',
    gap: '17px',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '12px 12px',
    cursor: 'pointer'
  },
  titleText: {
    fontFamily: 'poppins-semibold',
    fontSize: '18px',
    lineHeight: '20px',
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": '2',
    "-webkit-box-orient": "vertical"
  },
  description: {
    fontFamily: 'poppins',
    fontSize: '14px',
    mt: '5px'
  },
  imageHolder: {
    width: '84px'
  },
  itemHolder: {
    maxWidth: '60%'
  },
  image: {}
};
const autoPlayDelay = 40000000; //4000

const UpcomingPoolsCarousel = _ref => {
  let {
    imgUrl,
    poolsData,
    handleSelect,
    handleSelectedIndex
  } = _ref;
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const [noOfCards, setNoOfCards] = React.useState(4);
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (window.innerWidth < 1140) {
      setNoOfCards(3);
    }

    if (window.innerWidth < 780) {
      setNoOfCards(2);
    }

    if (window.innerWidth < 600) {
      setNoOfCards(1);
    }
  }, []);
  React.useEffect(() => {
    const interval = setInterval(() => {
      tick();
    }, autoPlayDelay);
    return () => clearInterval(interval);
  }, [activeItemIndex]);

  const tick = () => {
    if (poolsData.length > 4) {
      let active = activeItemIndex + noOfCards;
      setActiveItemIndex(active);
    }

    if (activeItemIndex == poolsData.length - 1) {
      setActiveItemIndex(0);
    }
  };

  const onChange = id => {
    let active = id * noOfCards;
    setActiveItemIndex(active);
  };

  const handleItemSelect = idx => {
    handleSelect(poolsData[idx]);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: sx.root,
    style: {
      marginTop: '-1px'
    }
  }, /*#__PURE__*/React__default["default"].createElement(ItemsCarousel__default["default"], {
    requestToChangeActive: setActiveItemIndex,
    activeItemIndex: activeItemIndex,
    activePosition: "left",
    numberOfCards: noOfCards,
    gutter: 16
  }, poolsData.map((pool, idx) => /*#__PURE__*/React__default["default"].createElement(material.Box, {
    key: idx,
    sx: sx.content,
    style: {
      boxShadow: "0px 2px 7px -2px rgba(0,0,0,0.2)",
      margin: "20px auto",
      borderRadius: "12px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: sx.contentLeft,
    className: "previousBox",
    onClick: () => {
      handleItemSelect(idx);
      handleSelectedIndex(idx);
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: sx.imageHolder
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: imgUrl + pool.image_src,
    alt: "",
    style: {
      height: '100%',
      width: '100%',
      // borderRadius: '12px 0px 0px 12px',
      display: "block"
    }
  }), ' '), /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: sx.itemHolder
  }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    variant: "minuscule",
    sx: sx.titleText,
    className: "prevtitleText"
  }, pool.title), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
    sx: sx.description
  }, "Price: ", pool.price && parseInt(pool.price) > 0 ? pool.price.toLocaleString() + ' D' : 'TBA')))))), poolsData.length > 4 ? /*#__PURE__*/React__default["default"].createElement(material.Box, {
    style: {
      position: 'relative',
      display: 'flex',
      maxWidth: '1140px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
    sx: sx.dotList
  }, Array.apply(null, {
    length: Math.ceil(poolsData.length / noOfCards)
  }).map((pool, i) => /*#__PURE__*/React__default["default"].createElement(material.Box, {
    key: i,
    className: "yours-custom-class",
    onClick: () => onChange(i),
    sx: sx.image
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: activeItemIndex / noOfCards === i ? img : img$1,
    style: {
      cursor: 'pointer',
      marginTop: "20px",
      boxShadow: '-1px 5px 9px 0px rgb(0 0 0 / 11%)'
    }
  }))))) : /*#__PURE__*/React__default["default"].createElement(material.Box, null)));
};

const ShowNextPreviosProject = _ref => {
  let {
    prev,
    next,
    idx,
    mediaUrl,
    handler
  } = _ref;
  console.log(prev, next, idx, 'heeellllo');
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `previous-box snp-box ${prev === null ? 'disabled' : ''}`,
    onClick: () => {
      if (prev) {
        handler(idx - 1);
      }
    }
  }, prev && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: mediaUrl + prev.image_src,
    style: {
      maxHeight: "86px"
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "previous"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, prev.title)))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-divider"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$3
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `next-box snp-box ${next === null ? 'disabled' : ''}`,
    onClick: () => {
      if (next) {
        handler(idx + 1);
      }
    }
  }, next && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text text-right"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "next"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "snp-text-p-n"
  }, next.title)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("img", {
    src: mediaUrl + next.image_src,
    style: {
      maxHeight: "86px"
    }
  })))));
};

const UpcomingProjectSubpage = _ref2 => {
  let {
    pools,
    chainId,
    handleBack,
    currentIndex,
    handleChangePool
  } = _ref2;
  const [pool, setPool] = React.useState(null);
  const [prevPool, setPrevPool] = React.useState(null);
  const [nextPool, setNextPool] = React.useState(null);
  React.useState(true);
  const MEDIA_BASE_URL = chainId === 1 ? 'https://galaxis-web.s3.amazonaws.com/media' : 'https://galaxis-backend-staging.s3.eu-central-1.amazonaws.com/media';
  const hist = reactRouterDom.useHistory();

  const onClickBackButton = () => {
    console.log(hist);

    if (hist.location.search === "") {
      handleBack();
    } else {
      //  hist.push('/');
      hist.goBack();
    }
  };

  React.useEffect(() => {
    setPool(pools[currentIndex]);
    let p = null;
    let n = null;

    if (currentIndex > 0) {
      p = pools[currentIndex - 1];
    }

    if (currentIndex < pools.length - 1) {
      n = pools[currentIndex + 1];
    }

    setPrevPool(p);
    setNextPool(n);
  }, [currentIndex]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, pool && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-root"
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "pool-ps-btn",
    onClick: onClickBackButton
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "\u25C2"), /*#__PURE__*/React__default["default"].createElement("p", null, "Back")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-left"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: MEDIA_BASE_URL + pool.image_src,
    style: {
      maxWidth: '100%',
      width: '580px'
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "pool-ps-card-and-descipton-inner ps-right"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "text-box w-100"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "VAULT"), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-title "
  }, pool.title), pool.nr_of_nfts > 0 && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      fontWeight: '600'
    }
  }, pool.nr_of_nfts), " of Digital Collectibles"), /*#__PURE__*/React__default["default"].createElement(CounterBar, {
    maxValue: pool.nr_of_nfts,
    value: pool.nr_of_nfts
  })), /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label"
  }, "Price"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dpc-box"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, pool.price && parseInt(pool.price) > 0 ? pool.price.toLocaleString() + ' D' : 'TBA')))))), /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "dust-pool-card-label mt-2",
    style: {
      fontFamily: "poppins-semibold",
      textTransform: "capitalize",
      fontSize: "18px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("b", null, "Description")), /*#__PURE__*/React__default["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: pool.description
    }
  })), /*#__PURE__*/React__default["default"].createElement(ShowNextPreviosProject, {
    prev: prevPool,
    next: nextPool,
    idx: currentIndex,
    mediaUrl: MEDIA_BASE_URL,
    handler: handleChangePool
  })));
};

var css_248z = ".mt-4 {\n\tmargin-top: 2rem;\n}\n\n\n.form-group {\n    margin-bottom: 1rem;\n}\n\n.form-control {\n    display: block;\n    width: 100%;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.25rem;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n";
styleInject(css_248z);

/* 
const POOLSS = [
  {
  image_src: "/banners/small_banners/dragon.png",
  title: "Test4",
  url: "",
  },
  {
    image_src: "/banners/small_banners/dragon.png",
    title: "Test4",
    url: "",
    },
    {
      image_src: "/banners/small_banners/dragon.png",
      title: "Test4",
      url: "",
      },
      {
        image_src: "/banners/small_banners/dragon.png",
        title: "Test4",
        url: "",
        },
        {
          image_src: "/banners/small_banners/dragon.png",
          title: "Test4",
          url: "",
          },{
            image_src: "/banners/small_banners/dragon.png",
            title: "Test4",
            url: "",
            },
]
 */

var UPDATE_INTERVAL = 60000;
/* let POOLS = [
  {
    id: 0,
    name: 'Cryptopunk Pool',
    imgSrc: DragonImg,
    order: 0,
    totalSupply: 27,
    poolUrl:
      'https://larvalabs.com/cryptopunks/accountInfo?account=0x8fa20dcc712bd224b54bc1cdfd30a37349f8df2a#',
  },
  {
    id: 1,
    name: 'Meebit Pool',
    imgSrc: DragonImg,
    order: 1,
    totalSupply: 30,
    poolUrl:
      'https://meebits.larvalabs.com/meebits/account?address=0x1f3911F4F43671d187A882df129773A7261989e8',
  },
  {
    id: 2,
    name: 'Mike Tyson Pool',
    imgSrc: DragonImg,
    order: 2,
    totalSupply: 25,
    poolUrl: 'https://opensea.io/0xCdA66b3f393cEfc6E476E2183164bD2e9DA78f2e',
  },
  {
    id: 3,
    name: 'EC Alpha Pool',
    imgSrc: DragonImg,
    order: 3,
    totalSupply: 50,
    poolUrl: 'https://opensea.io/0xA375A68CbFf5226E51eEBc2128493D1e30F171B1',
  },
  {
    id: 4,
    name: 'EC Founder Pool',
    imgSrc: DragonImg,
    order: 4,
    totalSupply: 200,
    poolUrl: 'https://opensea.io/0xB27b95e6B138c968ec1BDC56D4a538Ed0F83b3C2',
  },
  {
    id: 5,
    name: 'MetaZoo Pool',
    imgSrc: DragonImg,
    order: 5,
    totalSupply: 50,
    poolUrl: 'https://opensea.io/0xfa87ae4cf49806eEaEa2F7DF1B7411834Ab097d6',
  },
  {
    id: 6,
    imgSrc: DragonImg,
    name: 'Toddlerpillars Pool',
    order: 6,
    totalSupply: 100,
    poolUrl: 'https://opensea.io/0x9dFF1113CF4186deC4feb774632356D22f07eB9e',
  },
]; */

var TopSectionDividers = function TopSectionDividers() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '25px 0'
    }
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$5,
    className: "section-divider-img"
  }), /*#__PURE__*/React__default["default"].createElement("img", {
    src: img$4,
    className: "section-divider-img"
  }));
};

var DustPools = function DustPools(_ref) {
  var address = _ref.address,
      ethersProvider = _ref.ethersProvider,
      chainId = _ref.chainId,
      handleConnect = _ref.handleConnect,
      config = _ref.config;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPoolIdx = _useState2[0],
      setSelectedPoolIdx = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedUpcomingPoolIdx = _useState4[0],
      setselectedUpcomingPoolIdx = _useState4[1];

  var _useState5 = React.useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      dustContract = _useState6[0],
      setDustContract = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      dust4PunksContract = _useState8[0],
      setDust4PunksContract = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      zoom2 = _useState10[0],
      setZoom2 = _useState10[1];

  var _useState11 = React.useState('ALL'),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedFilter = _useState12[0],
      setSelectedFilter = _useState12[1];

  var _useState13 = React.useState(false),
      _useState14 = _slicedToArray(_useState13, 2);
      _useState14[0];
      var setInitDone = _useState14[1];

  var _useState15 = React.useState([]),
      _useState16 = _slicedToArray(_useState15, 2),
      poolsFromBackend = _useState16[0],
      setPoolsFromBackend = _useState16[1];

  var _useState17 = React.useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      allPools = _useState18[0],
      setAllPools = _useState18[1];

  var _useState19 = React.useState([]),
      _useState20 = _slicedToArray(_useState19, 2),
      pools = _useState20[0],
      setPools = _useState20[1];

  var _useState21 = React.useState([]),
      _useState22 = _slicedToArray(_useState21, 2),
      upcomingPools = _useState22[0],
      setUpcomingPools = _useState22[1];

  var _useState23 = React.useState(null),
      _useState24 = _slicedToArray(_useState23, 2),
      upcomingPool = _useState24[0],
      setUpcomingPool = _useState24[1];

  var loc = reactRouterDom.useLocation(); //console.log('congig',config);

  var url = config.API_URL;
  var upcomingImgUrl = config.AWS_URL;
  React.useEffect(function () {
    var getPoolData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, upcoming, params, parsedParams, i, item;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__default["default"].get(url + '/vaults').catch(function (e) {
                  return console.log;
                });

              case 2:
                res = _context.sent;

                //console.log('vaults',res);
                if (res.status === 200) {
                  setPoolsFromBackend(res.data);
                }

                _context.next = 6;
                return axios__default["default"].get(url + '/upcoming-vaults').catch(function (e) {
                  return console.log;
                });

              case 6:
                upcoming = _context.sent;

                if (upcoming.status === 200) {
                  setUpcomingPools(upcoming.data); //console.log('UPCOM',upcoming.data)

                  if (loc.search && loc.search.indexOf('upcoming=') > 0) {
                    params = loc.search.slice(1).split('&'); //console.log(params);

                    if (params.length > 0) {
                      parsedParams = {};

                      for (i = 0; i < params.length; i++) {
                        item = params[i].split('=');
                        parsedParams[item[0]] = item[1];
                      }

                      if (parsedParams.upcoming) {
                        // console.log('UPCOMING POOL',upcoming.data[Number(parsedParams.upcoming)]);
                        setUpcomingPool(upcoming.data[Number(parsedParams.upcoming)]);
                      }
                    }
                  }
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getPoolData() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (chainId !== null) {
      getPoolData();
    }
  }, [chainId]);
  React.useEffect(function () {
    var initContract = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var c, Zoom2Contract, D4P;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getContract('Dust', ethersProvider);

              case 2:
                c = _context2.sent;

                if (c) {
                  setDustContract(c);
                  console.log('DUST:', c);
                } else {
                  console.log('contract not found');
                }

                _context2.next = 6;
                return getContract('Zoom2', ethersProvider);

              case 6:
                Zoom2Contract = _context2.sent;

                if (Zoom2Contract) {
                  setZoom2(Zoom2Contract); //console.log('ZOOM:', Zoom2Contract);
                } else {
                  console.log('Could not initialise Zoom2 Contract');
                }

                _context2.next = 10;
                return getContract('Dust4Punks', ethersProvider);

              case 10:
                D4P = _context2.sent;

                if (D4P) {
                  setDust4PunksContract(D4P); //console.log('D4P:', D4P);
                } else {
                  console.log('Could not initialise D4P Contract');
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function initContract() {
        return _ref3.apply(this, arguments);
      };
    }();

    if (ethersProvider) {
      initContract();
    }
  }, [ethersProvider]);
  React.useEffect(function () {
    if (dust4PunksContract && dustContract && poolsFromBackend.length > 0 && zoom2
    /*  && !initDone */
    ) {
      getPools();
    }
  }, [dust4PunksContract, poolsFromBackend]); //,dustContract,zoom2

  var getPools = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var res, numberOfPools, ZoomLibraryInstance, calls, i, vaultAddress, vaultName, vaultPrice, vaultToken, ZoomQueryBinary, combinedResult, tempPool, poolIdx, _i, va, vn, vp, vt, vd, vToken, poolByVaultId;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dust4PunksContract.next_redeemable().catch(function (e) {
                return console.log;
              });

            case 2:
              res = _context3.sent;
              numberOfPools = 0;

              if (res) {
                numberOfPools = Number(res);
              } //console.log('#OF POOLS', numberOfPools);
              // if(address){


              ZoomLibraryInstance = new zoomNext.Zoom({
                use_reference_calls: true
              });
              calls = [];

              for (i = 0; i < numberOfPools; i++) {
                // vault address
                vaultAddress = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultAddress', [i]], 'vaultAddress(uint256) returns (address)');
                calls.push(vaultAddress); //Pool Name

                vaultName = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultName', [i]], 'vaultName(uint256) returns (string)');
                calls.push(vaultName); //Vault price

                vaultPrice = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultPrice', [i]], 'vaultPrice(uint256) returns (uint256)');
                calls.push(vaultPrice); //Vault token addredd

                vaultToken = ZoomLibraryInstance.addCall(dust4PunksContract, ['vaultToken', [i]], 'vaultToken(uint256) returns (address)');
                calls.push(vaultToken);
              }

              ZoomQueryBinary = ZoomLibraryInstance.getZoomCall(); //console.log("======== ZOOM CALL START ============" );
              //console.time('zoomCall');

              _context3.next = 11;
              return zoom2.combine(ZoomQueryBinary);

            case 11:
              combinedResult = _context3.sent;
              //console.timeEnd('zoomCall');
              //console.log("======== ZOOM CALL END ==============" );
              ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary); //4 calls per vault

              tempPool = [];
              poolIdx = 0;
              _i = 0;

            case 16:
              if (!(_i < numberOfPools * 4)) {
                _context3.next = 30;
                break;
              }

              va = ZoomLibraryInstance.decodeCall(calls[_i + 0]).toString();
              vn = ZoomLibraryInstance.decodeCall(calls[_i + 1]).toString();
              vp = ZoomLibraryInstance.decodeCall(calls[_i + 2]).toString();
              vt = ZoomLibraryInstance.decodeCall(calls[_i + 3]).toString(); // console.log('va,vn,vp,vt',va,vn,vp,vt);

              vd = {
                vaultAddress: va,
                vaultName: vn,
                vaultPrice: vp,
                vaultToken: vt,
                available: null
              };
              _context3.next = 24;
              return getDummy721(vt, ethersProvider);

            case 24:
              vToken = _context3.sent;

              if (vToken) {
                vd.tokenContract = vToken;
              }

              if (poolIdx < poolsFromBackend.length) {
                poolByVaultId = poolsFromBackend.find(function (i) {
                  return i.vault_id === poolIdx;
                }); // tempPool.push({ ...poolsFromBackend[poolIdx], vaultData: vd });

                tempPool.push(_objectSpread2(_objectSpread2({}, poolByVaultId), {}, {
                  vaultData: vd
                }));
                poolIdx++;
              } else {
                console.log('overflow :/', poolIdx, poolsFromBackend.length);
              }

            case 27:
              _i += 4;
              _context3.next = 16;
              break;

            case 30:
              //console.log('AP', tempPool);
              setAllPools(tempPool);
              setPools(tempPool);
              setSelectedFilter('ALL');

            case 33:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getPools() {
      return _ref4.apply(this, arguments);
    };
  }();

  React.useEffect(function () {
    // console.log('allPools changed...', allPools.length);
    if (allPools.length > 0) {
      updateVaultBalances();
    }
  }, [allPools]);
  useInterval(function () {
    updateVaultBalances();
  }, UPDATE_INTERVAL);

  var updateVaultBalances = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var ZoomLibraryInstance, calls, hasContract, i, vaultBalance, ZoomQueryBinary, combinedResult, ap, hasContractIdx, _i2, ab, poolIdx;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(allPools[0].vaultData && allPools[0].vaultData.tokenContract)) {
                _context4.next = 16;
                break;
              }

              //console.log('vaultdata',vaultData);
              ZoomLibraryInstance = new zoomNext.Zoom();
              calls = [];
              hasContract = []; //console.log('UPD',pools,allPools);

              for (i = 0; i < allPools.length; i++) {
                if (allPools[i].vaultData.tokenContract.address !== '0x0000000000000000000000000000000000000000') {
                  /*     console.log(allPools[i].vaultData.tokenContract,i)
                         const totalSupply = ZoomLibraryInstance.addCall(
                            allPools[i].vaultData.tokenContract,
                            ["totalSupply",[]],
                            "totalSupply() returns (uint256)"
                        );
                        calls.push(totalSupply); */
                  vaultBalance = ZoomLibraryInstance.addCall(allPools[i].vaultData.tokenContract, ['balanceOf', [allPools[i].vaultData.vaultAddress]], 'balanceOf(address) returns (uint256)');
                  calls.push(vaultBalance);
                  hasContract.push(allPools[i].vault_id);
                }
              } // console.log('STUFF', calls, hasContract);


              if (!(calls.length > 0)) {
                _context4.next = 16;
                break;
              }

              ZoomQueryBinary = ZoomLibraryInstance.getZoomCall(); // console.log('zqb',ZoomQueryBinary);
              //console.log("======== ZOOM CALL START ============" );
              //console.time('zoomCall');

              _context4.next = 9;
              return zoom2.combine(ZoomQueryBinary);

            case 9:
              combinedResult = _context4.sent;
              //console.timeEnd('zoomCall');
              //console.log("======== ZOOM CALL END ==============" );
              ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary);
              ap = allPools;
              hasContractIdx = 0;

              for (_i2 = 0; _i2 < calls.length; _i2++) {
                //  let ts = ZoomLibraryInstance.decodeCall(calls[i]).toString();
                ab = ZoomLibraryInstance.decodeCall(calls[_i2]).toString(); // console.log('idx, balance', i, ab);

                poolIdx = hasContract[hasContractIdx]; //console.log('pool index, allpools', poolIdx,ap);

                ap[poolIdx].vaultData = _objectSpread2(_objectSpread2({}, ap[poolIdx].vaultData), {}, {
                  /* totalSupply:ts, */
                  available: Number(ab)
                });

                if (Number.parseInt(ab) === 0) {
                  ap[poolIdx].order += 100;
                }

                hasContractIdx++;
              }
              /* 
                  let op = [...ap];
                   op.sort((a,b)=>{
                      if(a.order>b.order){
                          return 1
                      }else{
                          return -1;
                      }
                  });
              */


              setPools(getFiltered());
              setInitDone(true); //console.log('AP upd', ap);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function updateVaultBalances() {
      return _ref5.apply(this, arguments);
    };
  }();

  var getFiltered = function getFiltered() {
    var result = [];

    if (selectedFilter === 'SOLD_OUT') {
      result = allPools.filter(function (pool) {
        return pool.vaultData.available === 0;
      });
    } else if (selectedFilter === 'ACTIVE') {
      result = allPools.filter(function (pool) {
        return pool.vaultData.available > 0;
      });
    } else {
      result = _toConsumableArray(allPools);
    }

    return result;
  };

  React.useEffect(function () {
    setPools(getFiltered());
  }, [selectedFilter]);

  var showDetails = function showDetails(idx) {
    //console.log('poolId,idx',idx);
    if (idx !== null) {
      setSelectedPoolIdx(idx);
    }
  };

  var showUpcomingDetails = function showUpcomingDetails(idx) {
    if (idx !== null) {
      setselectedUpcomingPoolIdx(idx);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, selectedPoolIdx === null && upcomingPool === null ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle",
    style: {
      marginBlockEnd: '1em'
    }
  }, "Digital Collectible Vaults"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tab-choose"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(selectedFilter === 'ALL' ? 'active-tab' : ''),
    onClick: function onClick() {
      return setSelectedFilter('ALL');
    }
  }, "All"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(selectedFilter === 'ACTIVE' ? 'active-tab' : ''),
    onClick: function onClick() {
      return setSelectedFilter('ACTIVE');
    }
  }, "Active"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(selectedFilter === 'SOLD_OUT' ? 'active-tab' : ''),
    onClick: function onClick() {
      return setSelectedFilter('SOLD_OUT');
    }
  }, "Sold out")), /*#__PURE__*/React__default["default"].createElement("p", null, "You can exchange your Dust for some awesome items including Cryptopunks and other valuable Digital Collectibles.")), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container  mt-5"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "row",
    style: {
      rowGap: '25px'
    }
  }, pools.map(function (card, idx) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: idx,
      className: "col-12 col-lg-6"
    }, /*#__PURE__*/React__default["default"].createElement(DustPoolCard, {
      card: card,
      idx: idx,
      chainId: chainId,
      handleClick: showDetails,
      imageBaseUrl: config.AWS_URL
    }));
  })), /*#__PURE__*/React__default["default"].createElement(TopSectionDividers, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle"
  }, "Dust utility token"), /*#__PURE__*/React__default["default"].createElement("p", null, "$DUST tokens are used throughout the Galaxis ecosystem to reserve and pay for upcoming mints, return value to Ether Card holders, and exchange for Digital Collectibles via the Galaxis Vaults.", ' '), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "dust-pool-btn",
    style: {
      marginTop: '20px'
    },
    onClick: function onClick() {
      return window.open('https://blog.ether.cards/dust-utility-token-model-distribution/');
    }
  }, "More")), /*#__PURE__*/React__default["default"].createElement(TopSectionDividers, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-textbox pb-4"
  }, /*#__PURE__*/React__default["default"].createElement("p", {
    className: "pool-subtitle"
  }, "Upcoming Digital Collectible Vaults"), /*#__PURE__*/React__default["default"].createElement("p", null, "Checkout all the upcoming Galaxis Vaults - where $DUST Utility Tokens may be exchanged for high quality Digital Collectibles!")), upcomingPools.length > 0 && /*#__PURE__*/React__default["default"].createElement(UpcomingPoolsCarousel, {
    imgUrl: upcomingImgUrl,
    poolsData: upcomingPools,
    handleSelect: setUpcomingPool,
    handleSelectedIndex: showUpcomingDetails
  }))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, selectedPoolIdx !== null ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React__default["default"].createElement(ProjectSubpage, {
    pools: pools,
    currentIndex: selectedPoolIdx,
    address: address,
    dust: dustContract,
    d4p: dust4PunksContract,
    ethersProvider: ethersProvider,
    chainId: chainId,
    handleConnect: handleConnect,
    handleBack: function handleBack() {
      return setSelectedPoolIdx(null);
    },
    handleChangePool: showDetails,
    mediaBaseUrl: config.AWS_URL
  }))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "dust-pool-root"
  }, /*#__PURE__*/React__default["default"].createElement(UpcomingProjectSubpage, {
    pools: upcomingPools,
    currentIndex: selectedUpcomingPoolIdx,
    chainId: chainId,
    handleBack: function handleBack() {
      return setUpcomingPool(null);
    },
    handleChangePool: showUpcomingDetails
  })))));
};

exports.DustPools = DustPools;
exports.GalaxisCardV2 = GalaxisCardV2;
