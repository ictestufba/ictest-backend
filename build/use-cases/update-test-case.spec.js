"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex2) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex2.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex2) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex2)),
          enumerable: false
        }
      });
      return styles2;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "node_modules/pretty-format/build/collections.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printIteratorEntries = printIteratorEntries;
    exports.printIteratorValues = printIteratorValues;
    exports.printListItems = printListItems;
    exports.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object2, compareKeys) => {
      const keys2 = Object.keys(object2).sort(compareKeys);
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object2).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object2, symbol).enumerable) {
            keys2.push(symbol);
          }
        });
      }
      return keys2;
    };
    function printIteratorEntries(iterator, config2, indentation, depth, refs, printer, separator = ": ") {
      let result = "";
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          const name = printer(
            current.value[0],
            config2,
            indentationNext,
            depth,
            refs
          );
          const value = printer(
            current.value[1],
            config2,
            indentationNext,
            depth,
            refs
          );
          result += indentationNext + name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += "," + config2.spacingInner;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printIteratorValues(iterator, config2, indentation, depth, refs, printer) {
      let result = "";
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          result += indentationNext + printer(current.value, config2, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += "," + config2.spacingInner;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printListItems(list, config2, indentation, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i2 = 0; i2 < list.length; i2++) {
          result += indentationNext;
          if (i2 in list) {
            result += printer(list[i2], config2, indentationNext, depth, refs);
          }
          if (i2 < list.length - 1) {
            result += "," + config2.spacingInner;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printObjectProperties(val, config2, indentation, depth, refs, printer) {
      let result = "";
      const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
      if (keys2.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i2 = 0; i2 < keys2.length; i2++) {
          const key = keys2[i2];
          const name = printer(key, config2, indentationNext, depth, refs);
          const value = printer(val[key], config2, indentationNext, depth, refs);
          result += indentationNext + name + ": " + value;
          if (i2 < keys2.length - 1) {
            result += "," + config2.spacingInner;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
  }
});

// node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var global3 = function() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      } else if (typeof global3 !== "undefined") {
        return global3;
      } else if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    }();
    var Symbol2 = global3["jest-symbol-do-not-touch"] || global3.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config2.maxDepth) {
          return "[" + stringedValue + "]";
        }
        return stringedValue + SPACE + "[" + (0, _collections.printListItems)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        ) + "]";
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config2.maxDepth) {
          return "[" + stringedValue + "]";
        }
        return stringedValue + SPACE + "{" + (0, _collections.printObjectProperties)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        ) + "}";
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      return val.toAsymmetricMatcher();
    };
    exports.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === asymmetricMatcher;
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/pretty-format/build/plugins/ConvertAnsi.js
var require_ConvertAnsi = __commonJS({
  "node_modules/pretty-format/build/plugins/ConvertAnsi.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _ansiRegex = _interopRequireDefault(require_ansi_regex());
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
      switch (match) {
        case _ansiStyles.default.red.close:
        case _ansiStyles.default.green.close:
        case _ansiStyles.default.cyan.close:
        case _ansiStyles.default.gray.close:
        case _ansiStyles.default.white.close:
        case _ansiStyles.default.yellow.close:
        case _ansiStyles.default.bgRed.close:
        case _ansiStyles.default.bgGreen.close:
        case _ansiStyles.default.bgYellow.close:
        case _ansiStyles.default.inverse.close:
        case _ansiStyles.default.dim.close:
        case _ansiStyles.default.bold.close:
        case _ansiStyles.default.reset.open:
        case _ansiStyles.default.reset.close:
          return "</>";
        case _ansiStyles.default.red.open:
          return "<red>";
        case _ansiStyles.default.green.open:
          return "<green>";
        case _ansiStyles.default.cyan.open:
          return "<cyan>";
        case _ansiStyles.default.gray.open:
          return "<gray>";
        case _ansiStyles.default.white.open:
          return "<white>";
        case _ansiStyles.default.yellow.open:
          return "<yellow>";
        case _ansiStyles.default.bgRed.open:
          return "<bgRed>";
        case _ansiStyles.default.bgGreen.open:
          return "<bgGreen>";
        case _ansiStyles.default.bgYellow.open:
          return "<bgYellow>";
        case _ansiStyles.default.inverse.open:
          return "<inverse>";
        case _ansiStyles.default.dim.open:
          return "<dim>";
        case _ansiStyles.default.bold.open:
          return "<bold>";
        default:
          return "";
      }
    });
    var test3 = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
    exports.test = test3;
    var serialize2 = (val, config2, indentation, depth, refs, printer) => printer(toHumanReadableAnsi(val), config2, indentation, depth, refs);
    exports.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test3 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports.test = test3;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize2 = (collection, config2, indentation, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config2.maxDepth) {
        return "[" + name + "]";
      }
      return (config2.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? "{" + (0, _collections.printObjectProperties)(
        isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}) : { ...collection },
        config2,
        indentation,
        depth,
        refs,
        printer
      ) + "}" : "[" + (0, _collections.printListItems)(
        Array.from(collection),
        config2,
        indentation,
        depth,
        refs,
        printer
      ) + "]");
    };
    exports.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys2, props, config2, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config2.indent;
      const colors = config2.colors;
      return keys2.map((key) => {
        const value = props[key];
        let printed = printer(value, config2, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
          }
          printed = "{" + printed + "}";
        }
        return config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
      }).join("");
    };
    exports.printProps = printProps;
    var printChildren = (children, config2, indentation, depth, refs, printer) => children.map(
      (child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer(child, config2, indentation, depth, refs))
    ).join("");
    exports.printChildren = printChildren;
    var printText = (text, config2) => {
      const contentColor = config2.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports.printText = printText;
    var printComment = (comment, config2) => {
      const commentColor = config2.colors.comment;
      return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
    };
    exports.printComment = printComment;
    var printElement = (type2, printedProps, printedChildren, config2, indentation) => {
      const tagColor = config2.colors.tag;
      return tagColor.open + "<" + type2 + (printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config2.spacingOuter + indentation + tagColor.open + "</" + type2 : (printedProps && !config2.min ? "" : " ") + "/") + ">" + tagColor.close;
    };
    exports.printElement = printElement;
    var printElementAsLeaf = (type2, config2) => {
      const tagColor = config2.colors.tag;
      return tagColor.open + "<" + type2 + tagColor.close + " \u2026" + tagColor.open + " />" + tagColor.close;
    };
    exports.printElementAsLeaf = printElementAsLeaf;
  }
});

// node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test3 = (val) => {
      var _val$constructor;
      return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
    };
    exports.test = test3;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize2 = (node, config2, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config2);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config2);
      }
      const type2 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config2.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type2, config2);
      }
      return (0, _markup.printElement)(
        type2,
        (0, _markup.printProps)(
          nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(),
          nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        (0, _markup.printChildren)(
          Array.prototype.slice.call(node.childNodes || node.children),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        config2,
        indentation
      );
    };
    exports.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL2 = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL2 = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL2 = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => "Immutable." + name;
    var printAsLeaf = (name) => "[" + name + "]";
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "{" + (0, _collections.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "}";
    function getRecordEntries(val) {
      let i2 = 0;
      return {
        next() {
          if (i2 < val._keys.length) {
            const key = val._keys[i2++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config2.maxDepth ? printAsLeaf(name) : name + SPACE + "{" + (0, _collections.printIteratorEntries)(
        getRecordEntries(val),
        config2,
        indentation,
        depth,
        refs,
        printer
      ) + "}";
    };
    var printImmutableSeq = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config2.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL2]) {
        return name + SPACE + "{" + // from Immutable collection of entries or from ECMAScript object
        (val._iter || val._object ? (0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer
        ) : LAZY) + "}";
      }
      return name + SPACE + "[" + (val._iter || // from Immutable collection of values
      val._array || // from ECMAScript array
      val._collection || // from ECMAScript collection in immutable v4
      val._iterable ? (0, _collections.printIteratorValues)(
        val.values(),
        config2,
        indentation,
        depth,
        refs,
        printer
      ) : LAZY) + "]";
    };
    var printImmutableValues = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "[" + (0, _collections.printIteratorValues)(
      val.values(),
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "]";
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedMap" : "Map"
        );
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "List"
        );
      }
      if (val[IS_SET_SENTINEL2]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedSet" : "Set"
        );
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "Stack"
        );
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config2, indentation, depth, refs, printer);
      }
      return printImmutableRecord(val, config2, indentation, depth, refs, printer);
    };
    exports.serialize = serialize2;
    var test3 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b2 = 60103;
    var c = 60106;
    var d = 60107;
    var e = 60108;
    var f = 60114;
    var g2 = 60109;
    var h = 60110;
    var k = 60112;
    var l2 = 60113;
    var m2 = 60120;
    var n2 = 60115;
    var p = 60116;
    var q = 60121;
    var r = 60122;
    var u = 60117;
    var v = 60129;
    var w = 60131;
    if ("function" === typeof Symbol && Symbol.for) {
      x = Symbol.for;
      b2 = x("react.element");
      c = x("react.portal");
      d = x("react.fragment");
      e = x("react.strict_mode");
      f = x("react.profiler");
      g2 = x("react.provider");
      h = x("react.context");
      k = x("react.forward_ref");
      l2 = x("react.suspense");
      m2 = x("react.suspense_list");
      n2 = x("react.memo");
      p = x("react.lazy");
      q = x("react.block");
      r = x("react.server.block");
      u = x("react.fundamental");
      v = x("react.debug_trace_mode");
      w = x("react.legacy_hidden");
    }
    var x;
    function y2(a) {
      if ("object" === typeof a && null !== a) {
        var t = a.$$typeof;
        switch (t) {
          case b2:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case l2:
              case m2:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case h:
                  case k:
                  case p:
                  case n2:
                  case g2:
                    return a;
                  default:
                    return t;
                }
            }
          case c:
            return t;
        }
      }
    }
    var z = g2;
    var A2 = b2;
    var B = k;
    var C2 = d;
    var D = p;
    var E2 = n2;
    var F = c;
    var G = f;
    var H = e;
    var I2 = l2;
    exports.ContextConsumer = h;
    exports.ContextProvider = z;
    exports.Element = A2;
    exports.ForwardRef = B;
    exports.Fragment = C2;
    exports.Lazy = D;
    exports.Memo = E2;
    exports.Portal = F;
    exports.Profiler = G;
    exports.StrictMode = H;
    exports.Suspense = I2;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a) {
      return y2(a) === h;
    };
    exports.isContextProvider = function(a) {
      return y2(a) === g2;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b2;
    };
    exports.isForwardRef = function(a) {
      return y2(a) === k;
    };
    exports.isFragment = function(a) {
      return y2(a) === d;
    };
    exports.isLazy = function(a) {
      return y2(a) === p;
    };
    exports.isMemo = function(a) {
      return y2(a) === n2;
    };
    exports.isPortal = function(a) {
      return y2(a) === c;
    };
    exports.isProfiler = function(a) {
      return y2(a) === f;
    };
    exports.isStrictMode = function(a) {
      return y2(a) === e;
    };
    exports.isSuspense = function(a) {
      return y2(a) === l2;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l2 || a === m2 || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n2 || a.$$typeof === g2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
    };
    exports.typeOf = y2;
  }
});

// node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type2) {
          if (typeof type2 === "string" || typeof type2 === "function") {
            return true;
          }
          if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type2 === "object" && type2 !== null) {
            if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf3(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type2 = object2.type;
                switch (type2) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type2;
                  default:
                    var $$typeofType = type2 && type2.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object2) {
          return typeOf3(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf3(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf3(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf3(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf3(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf3(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf3(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf3(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf3(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf3(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/pretty-format/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/pretty-format/node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType2 = (element) => {
      const type2 = element.type;
      if (typeof type2 === "string") {
        return type2;
      }
      if (typeof type2 === "function") {
        return type2.displayName || type2.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type2 === "object" && type2 !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type2.displayName) {
            return type2.displayName;
          }
          const functionName3 = type2.render.displayName || type2.render.name || "";
          return functionName3 !== "" ? "ForwardRef(" + functionName3 + ")" : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName3 = type2.displayName || type2.type.displayName || type2.type.name || "";
          return functionName3 !== "" ? "Memo(" + functionName3 + ")" : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize2 = (element, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(getType2(element), config2) : (0, _markup.printElement)(
      getType2(element),
      (0, _markup.printProps)(
        getPropKeys(element),
        element.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      (0, _markup.printChildren)(
        getChildren(element.props.children),
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      config2,
      indentation
    );
    exports.serialize = serialize2;
    var test3 = (val) => val != null && ReactIs.isElement(val);
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var global3 = function() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      } else if (typeof global3 !== "undefined") {
        return global3;
      } else if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    }();
    var Symbol2 = global3["jest-symbol-do-not-touch"] || global3.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object2) => {
      const { props } = object2;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize2 = (object2, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object2.type, config2) : (0, _markup.printElement)(
      object2.type,
      object2.props ? (0, _markup.printProps)(
        getPropKeys(object2),
        object2.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      object2.children ? (0, _markup.printChildren)(
        object2.children,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      config2,
      indentation
    );
    exports.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === testSymbol;
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/index.js
var require_build = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.DEFAULT_OPTIONS = void 0;
    exports.format = format4;
    exports.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(
      require_AsymmetricMatcher()
    );
    var _ConvertAnsi = _interopRequireDefault(require_ConvertAnsi());
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(
      require_ReactTestComponent()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString3 = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName2) {
      if (!printFunctionName2) {
        return "[Function]";
      }
      return "[Function " + (val.name || "anonymous") + "]";
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return "[" + errorToString.call(val) + "]";
    }
    function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
      if (val === true || val === false) {
        return "" + val;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf3 = typeof val;
      if (typeOf3 === "number") {
        return printNumber(val);
      }
      if (typeOf3 === "bigint") {
        return printBigInt(val);
      }
      if (typeOf3 === "string") {
        if (escapeString) {
          return '"' + val.replace(/"|\\/g, "\\$&") + '"';
        }
        return '"' + val + '"';
      }
      if (typeOf3 === "function") {
        return printFunction(val, printFunctionName2);
      }
      if (typeOf3 === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName2);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex2) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config2.maxDepth;
      const min = config2.min;
      if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config2, indentation, depth, refs, true);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : (min ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        ) + "]";
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? "[" + val.constructor.name + "]" : (min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        ) + "]";
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer,
          " => "
        ) + "}";
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(
          val.values(),
          config2,
          indentation,
          depth,
          refs,
          printer
        ) + "}";
      }
      return hitMaxDepth || isWindow(val) ? "[" + getConstructorName(val) + "]" : (min ? "" : !config2.printBasicPrototype && getConstructorName(val) === "Object" ? "" : getConstructorName(val) + " ") + "{" + (0, _collections.printObjectProperties)(
        val,
        config2,
        indentation,
        depth,
        refs,
        printer
      ) + "}";
    }
    function isNewPlugin(plugin2) {
      return plugin2.serialize != null;
    }
    function printPlugin(plugin2, val, config2, indentation, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin2) ? plugin2.serialize(val, config2, indentation, depth, refs, printer) : plugin2.print(
          val,
          (valChild) => printer(valChild, config2, indentation, depth, refs),
          (str) => {
            const indentationNext = indentation + config2.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
          },
          {
            edgeSpacing: config2.spacingOuter,
            min: config2.min,
            spacing: config2.spacingInner
          },
          config2.colors
        );
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
        );
      }
      return printed;
    }
    function findPlugin(plugins4, val) {
      for (let p = 0; p < plugins4.length; p++) {
        try {
          if (plugins4[p].test(val)) {
            return plugins4[p];
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
      }
      return null;
    }
    function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
      const plugin2 = findPlugin(config2.plugins, val);
      if (plugin2 !== null) {
        return printPlugin(plugin2, val, config2, indentation, depth, refs);
      }
      const basicResult = printBasicValue(
        val,
        config2.printFunctionName,
        config2.escapeRegex,
        config2.escapeString
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(
        val,
        config2,
        indentation,
        depth,
        refs,
        hasCalledToJSON
      );
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var DEFAULT_OPTIONS = {
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    };
    exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error(
          'pretty-format: Options "min" and "indent" cannot be used together.'
        );
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(
            `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
          );
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors[key] = color;
      } else {
        throw new Error(
          `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
        );
      }
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
      colors[key] = {
        close: "",
        open: ""
      };
      return colors;
    }, /* @__PURE__ */ Object.create(null));
    var getPrintFunctionName = (options) => options && options.printFunctionName !== void 0 ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
    var getEscapeRegex = (options) => options && options.escapeRegex !== void 0 ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
    var getEscapeString = (options) => options && options.escapeString !== void 0 ? options.escapeString : DEFAULT_OPTIONS.escapeString;
    var getConfig = (options) => {
      var _options$printBasicPr;
      return {
        callToJSON: options && options.callToJSON !== void 0 ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
        colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: options && typeof options.compareKeys === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: options && options.min ? "" : createIndent(
          options && options.indent !== void 0 ? options.indent : DEFAULT_OPTIONS.indent
        ),
        maxDepth: options && options.maxDepth !== void 0 ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
        min: options && options.min !== void 0 ? options.min : DEFAULT_OPTIONS.min,
        plugins: options && options.plugins !== void 0 ? options.plugins : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: options && options.min ? " " : "\n",
        spacingOuter: options && options.min ? "" : "\n"
      };
    };
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format4(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin2 = findPlugin(options.plugins, val);
          if (plugin2 !== null) {
            return printPlugin(plugin2, val, getConfig(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(
        val,
        getPrintFunctionName(options),
        getEscapeRegex(options),
        getEscapeString(options)
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig(options), "", 0, []);
    }
    var plugins3 = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      ConvertAnsi: _ConvertAnsi.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports.plugins = plugins3;
    var _default = format4;
    exports.default = _default;
  }
});

// node_modules/loupe/lib/helpers.js
function colorise(value, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType];
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate2 = Infinity,
  stylize = String
} = {}) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate2),
    seen,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise;
  }
  return options;
}
function truncate(string3, length, tail = truncator) {
  string3 = String(string3);
  const tailLength = tail.length;
  const stringLength = string3.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    return `${string3.slice(0, length - tailLength)}${tail}`;
  }
  return string3;
}
function inspectList(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i2 = 0; i2 < size; i2 += 1) {
    const last = i2 + 1 === list.length;
    const secondToLast = i2 + 2 === list.length;
    truncated = `${truncator}(${list.length - i2})`;
    const value = list[i2];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string3 = peek || inspectItem(value, options) + (last ? "" : separator);
    const nextLength = output.length + string3.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i2 + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string3;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i2 - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key}: ${value}`;
}
var ansiColors, styles, truncator;
var init_helpers = __esm({
  "node_modules/loupe/lib/helpers.js"() {
    ansiColors = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    };
    styles = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    };
    truncator = "\u2026";
  }
});

// node_modules/loupe/lib/array.js
function inspectArray(array2, options) {
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array2, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var init_array = __esm({
  "node_modules/loupe/lib/array.js"() {
    init_helpers();
  }
});

// node_modules/get-func-name/index.js
var require_get_func_name = __commonJS({
  "node_modules/get-func-name/index.js"(exports, module2) {
    "use strict";
    var toString3 = Function.prototype.toString;
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    var maxFunctionSourceLength = 512;
    function getFuncName3(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var functionSource = toString3.call(aFunc);
        if (functionSource.indexOf("(") > maxFunctionSourceLength) {
          return name;
        }
        var match = functionSource.match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = aFunc.name;
      }
      return name;
    }
    module2.exports = getFuncName3;
  }
});

// node_modules/loupe/lib/typedarray.js
function inspectTypedArray(array2, options) {
  const name = getArrayName(array2);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i2 = 0; i2 < array2.length; i2++) {
    const string3 = `${options.stylize(truncate(array2[i2], options.truncate), "number")}${i2 === array2.length - 1 ? "" : ", "}`;
    options.truncate -= string3.length;
    if (array2[i2] !== array2.length && options.truncate <= 3) {
      output += `${truncator}(${array2.length - array2[i2] + 1})`;
      break;
    }
    output += string3;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var import_get_func_name, getArrayName;
var init_typedarray = __esm({
  "node_modules/loupe/lib/typedarray.js"() {
    import_get_func_name = __toESM(require_get_func_name());
    init_helpers();
    getArrayName = (array2) => {
      if (typeof Buffer === "function" && array2 instanceof Buffer) {
        return "Buffer";
      }
      if (array2[Symbol.toStringTag]) {
        return array2[Symbol.toStringTag];
      }
      return (0, import_get_func_name.default)(array2.constructor);
    };
  }
});

// node_modules/loupe/lib/date.js
function inspectDate(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, "date");
}
var init_date = __esm({
  "node_modules/loupe/lib/date.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/function.js
function inspectFunction(func, options) {
  const name = (0, import_get_func_name2.default)(func);
  if (!name) {
    return options.stylize("[Function]", "special");
  }
  return options.stylize(`[Function ${truncate(name, options.truncate - 11)}]`, "special");
}
var import_get_func_name2;
var init_function = __esm({
  "node_modules/loupe/lib/function.js"() {
    import_get_func_name2 = __toESM(require_get_func_name());
    init_helpers();
  }
});

// node_modules/loupe/lib/map.js
function inspectMapEntry([key, value], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key} => ${value}`;
}
function mapToEntries(map2) {
  const entries = [];
  map2.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
function inspectMap(map2, options) {
  const size = map2.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map2), options, inspectMapEntry)} }`;
}
var init_map = __esm({
  "node_modules/loupe/lib/map.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/number.js
function inspectNumber(number, options) {
  if (isNaN2(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate(number, options.truncate), "number");
}
var isNaN2;
var init_number = __esm({
  "node_modules/loupe/lib/number.js"() {
    init_helpers();
    isNaN2 = Number.isNaN || ((i2) => i2 !== i2);
  }
});

// node_modules/loupe/lib/bigint.js
function inspectBigInt(number, options) {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options.stylize(nums, "bigint");
}
var init_bigint = __esm({
  "node_modules/loupe/lib/bigint.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/regexp.js
function inspectRegExp(value, options) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
var init_regexp = __esm({
  "node_modules/loupe/lib/regexp.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/set.js
function arrayFromSet(set3) {
  const values = [];
  set3.forEach((value) => {
    values.push(value);
  });
  return values;
}
function inspectSet(set3, options) {
  if (set3.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set3), options)} }`;
}
var init_set = __esm({
  "node_modules/loupe/lib/set.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/string.js
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`;
}
function inspectString(string3, options) {
  if (stringEscapeChars.test(string3)) {
    string3 = string3.replace(stringEscapeChars, escape);
  }
  return options.stylize(`'${truncate(string3, options.truncate - 2)}'`, "string");
}
var stringEscapeChars, escapeCharacters, hex, unicodeLength;
var init_string = __esm({
  "node_modules/loupe/lib/string.js"() {
    init_helpers();
    stringEscapeChars = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      "g"
    );
    escapeCharacters = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    };
    hex = 16;
    unicodeLength = 4;
  }
});

// node_modules/loupe/lib/symbol.js
function inspectSymbol(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
var init_symbol = __esm({
  "node_modules/loupe/lib/symbol.js"() {
  }
});

// node_modules/loupe/lib/promise.js
var getPromiseValue, promise_default;
var init_promise = __esm({
  "node_modules/loupe/lib/promise.js"() {
    getPromiseValue = () => "Promise{\u2026}";
    try {
      const { getPromiseDetails, kPending, kRejected } = process.binding("util");
      if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue = (value, options) => {
          const [state, innerValue] = getPromiseDetails(value);
          if (state === kPending) {
            return "Promise{<pending>}";
          }
          return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
        };
      }
    } catch (notNode) {
    }
    promise_default = getPromiseValue;
  }
});

// node_modules/loupe/lib/object.js
function inspectObject(object2, options) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.indexOf(object2) >= 0) {
    return "[Circular]";
  }
  options.seen.push(object2);
  const propertyContents = inspectList(
    properties.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  const symbolContents = inspectList(
    symbols.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  options.seen.pop();
  let sep2 = "";
  if (propertyContents && symbolContents) {
    sep2 = ", ";
  }
  return `{ ${propertyContents}${sep2}${symbolContents} }`;
}
var init_object = __esm({
  "node_modules/loupe/lib/object.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/class.js
function inspectClass(value, options) {
  let name = "";
  if (toStringTag && toStringTag in value) {
    name = value[toStringTag];
  }
  name = name || (0, import_get_func_name3.default)(value.constructor);
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject(value, options)}`;
}
var import_get_func_name3, toStringTag;
var init_class = __esm({
  "node_modules/loupe/lib/class.js"() {
    import_get_func_name3 = __toESM(require_get_func_name());
    init_object();
    toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
  }
});

// node_modules/loupe/lib/arguments.js
function inspectArguments(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
}
var init_arguments = __esm({
  "node_modules/loupe/lib/arguments.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/error.js
function inspectObject2(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  const propertyContents = inspectList(
    properties.map((key) => [key, error[key]]),
    options,
    inspectProperty
  );
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
var errorKeys;
var init_error = __esm({
  "node_modules/loupe/lib/error.js"() {
    init_helpers();
    errorKeys = [
      "stack",
      "line",
      "column",
      "name",
      "message",
      "fileName",
      "lineNumber",
      "columnNumber",
      "number",
      "description"
    ];
  }
});

// node_modules/loupe/lib/html.js
function inspectAttribute([key, value], options) {
  options.truncate -= 3;
  if (!value) {
    return `${options.stylize(key, "yellow")}`;
  }
  return `${options.stylize(key, "yellow")}=${options.stylize(`"${value}"`, "string")}`;
}
function inspectHTMLCollection(collection, options) {
  return inspectList(collection, options, inspectHTML, "\n");
}
function inspectHTML(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(
      properties.map((key) => [key, element.getAttribute(key)]),
      options,
      inspectAttribute,
      " "
    );
  }
  options.truncate -= propertyContents.length;
  const truncate2 = options.truncate;
  let children = inspectHTMLCollection(element.children, options);
  if (children && children.length > truncate2) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
var init_html = __esm({
  "node_modules/loupe/lib/html.js"() {
    init_helpers();
  }
});

// node_modules/loupe/index.js
var loupe_exports = {};
__export(loupe_exports, {
  custom: () => custom,
  default: () => loupe_default,
  inspect: () => inspect,
  registerConstructor: () => registerConstructor,
  registerStringTag: () => registerStringTag
});
function FakeMap() {
  this.key = "chai/loupe__" + Math.random() + Date.now();
}
function inspect(value, options) {
  options = normaliseOptions(options);
  options.inspect = inspect;
  const { customInspect } = options;
  let type2 = value === null ? "null" : typeof value;
  if (type2 === "object") {
    type2 = toString.call(value).slice(8, -1);
  }
  if (baseTypesMap[type2]) {
    return baseTypesMap[type2](value, options);
  }
  if (customInspect && value) {
    const output = inspectCustom(value, options, type2);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect(output, options);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value, options);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML(value, options);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass(value, options);
    }
    return inspectObject(value, options);
  }
  if (value === Object(value)) {
    return inspectObject(value, options);
  }
  return options.stylize(String(value), type2);
}
function registerConstructor(constructor, inspector) {
  if (constructorMap.has(constructor)) {
    return false;
  }
  constructorMap.set(constructor, inspector);
  return true;
}
function registerStringTag(stringTag, inspector) {
  if (stringTag in stringTagMap) {
    return false;
  }
  stringTagMap[stringTag] = inspector;
  return true;
}
var symbolsSupported, chaiInspect, nodeInspect, constructorMap, stringTagMap, baseTypesMap, inspectCustom, toString, custom, loupe_default;
var init_loupe = __esm({
  "node_modules/loupe/index.js"() {
    init_array();
    init_typedarray();
    init_date();
    init_function();
    init_map();
    init_number();
    init_bigint();
    init_regexp();
    init_set();
    init_string();
    init_symbol();
    init_promise();
    init_class();
    init_object();
    init_arguments();
    init_error();
    init_html();
    init_helpers();
    symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
    chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
    nodeInspect = false;
    try {
      const nodeUtil = require("util");
      nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
    } catch (noNodeInspect) {
      nodeInspect = false;
    }
    FakeMap.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function get(key) {
        return key[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function has(key) {
        return this.key in key;
      },
      // eslint-disable-next-line object-shorthand
      set: function set(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this.key, {
            // eslint-disable-next-line object-shorthand
            value,
            configurable: true
          });
        }
      }
    };
    constructorMap = new (typeof WeakMap === "function" ? WeakMap : FakeMap)();
    stringTagMap = {};
    baseTypesMap = {
      undefined: (value, options) => options.stylize("undefined", "undefined"),
      null: (value, options) => options.stylize(null, "null"),
      boolean: (value, options) => options.stylize(value, "boolean"),
      Boolean: (value, options) => options.stylize(value, "boolean"),
      number: inspectNumber,
      Number: inspectNumber,
      bigint: inspectBigInt,
      BigInt: inspectBigInt,
      string: inspectString,
      String: inspectString,
      function: inspectFunction,
      Function: inspectFunction,
      symbol: inspectSymbol,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: inspectSymbol,
      Array: inspectArray,
      Date: inspectDate,
      Map: inspectMap,
      Set: inspectSet,
      RegExp: inspectRegExp,
      Promise: promise_default,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: (value, options) => options.stylize("WeakSet{\u2026}", "special"),
      WeakMap: (value, options) => options.stylize("WeakMap{\u2026}", "special"),
      Arguments: inspectArguments,
      Int8Array: inspectTypedArray,
      Uint8Array: inspectTypedArray,
      Uint8ClampedArray: inspectTypedArray,
      Int16Array: inspectTypedArray,
      Uint16Array: inspectTypedArray,
      Int32Array: inspectTypedArray,
      Uint32Array: inspectTypedArray,
      Float32Array: inspectTypedArray,
      Float64Array: inspectTypedArray,
      Generator: () => "",
      DataView: () => "",
      ArrayBuffer: () => "",
      Error: inspectObject2,
      HTMLCollection: inspectHTMLCollection,
      NodeList: inspectHTMLCollection
    };
    inspectCustom = (value, options, type2) => {
      if (chaiInspect in value && typeof value[chaiInspect] === "function") {
        return value[chaiInspect](options);
      }
      if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
        return value[nodeInspect](options.depth, options);
      }
      if ("inspect" in value && typeof value.inspect === "function") {
        return value.inspect(options.depth, options);
      }
      if ("constructor" in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
      }
      if (stringTagMap[type2]) {
        return stringTagMap[type2](value, options);
      }
      return "";
    };
    toString = Object.prototype.toString;
    custom = chaiInspect;
    loupe_default = inspect;
  }
});

// node_modules/concordance/lib/Circular.js
var require_Circular = __commonJS({
  "node_modules/concordance/lib/Circular.js"(exports, module2) {
    "use strict";
    var Circular = class {
      constructor() {
        this.stack = /* @__PURE__ */ new Map();
      }
      add(descriptor) {
        if (this.stack.has(descriptor))
          throw new Error("Already in stack");
        if (descriptor.isItem !== true && descriptor.isMapEntry !== true && descriptor.isProperty !== true) {
          this.stack.set(descriptor, this.stack.size + 1);
        }
        return this;
      }
      delete(descriptor) {
        if (this.stack.has(descriptor)) {
          if (this.stack.get(descriptor) !== this.stack.size)
            throw new Error("Not on top of stack");
          this.stack.delete(descriptor);
        }
        return this;
      }
      has(descriptor) {
        return this.stack.has(descriptor);
      }
      get(descriptor) {
        return this.stack.has(descriptor) ? this.stack.get(descriptor) : 0;
      }
    };
    module2.exports = Circular;
  }
});

// node_modules/concordance/lib/constants.js
var require_constants = __commonJS({
  "node_modules/concordance/lib/constants.js"(exports, module2) {
    "use strict";
    var AMBIGUOUS = Symbol("AMBIGUOUS");
    var DEEP_EQUAL = Symbol("DEEP_EQUAL");
    var SHALLOW_EQUAL = Symbol("SHALLOW_EQUAL");
    var UNEQUAL = Symbol("UNEQUAL");
    module2.exports = {
      AMBIGUOUS,
      DEEP_EQUAL,
      SHALLOW_EQUAL,
      UNEQUAL
    };
  }
});

// node_modules/concordance/lib/Registry.js
var require_Registry = __commonJS({
  "node_modules/concordance/lib/Registry.js"(exports, module2) {
    "use strict";
    var Registry = class {
      constructor() {
        this.counter = 0;
        this.map = /* @__PURE__ */ new WeakMap();
      }
      has(value) {
        return this.map.has(value);
      }
      get(value) {
        return this.map.get(value).descriptor;
      }
      alloc(value) {
        const index2 = ++this.counter;
        const pointer = { descriptor: null, index: index2 };
        this.map.set(value, pointer);
        return pointer;
      }
    };
    module2.exports = Registry;
  }
});

// node_modules/concordance/lib/lineBuilder.js
var require_lineBuilder = __commonJS({
  "node_modules/concordance/lib/lineBuilder.js"(exports, module2) {
    "use strict";
    var ACTUAL = Symbol("lineBuilder.gutters.ACTUAL");
    var EXPECTED = Symbol("lineBuilder.gutters.EXPECTED");
    function translateGutter(theme, invert, gutter) {
      if (invert) {
        if (gutter === ACTUAL)
          return theme.diffGutters.expected;
        if (gutter === EXPECTED)
          return theme.diffGutters.actual;
      } else {
        if (gutter === ACTUAL)
          return theme.diffGutters.actual;
        if (gutter === EXPECTED)
          return theme.diffGutters.expected;
      }
      return theme.diffGutters.padding;
    }
    var Line = class {
      constructor(isFirst, isLast, gutter, stringValue) {
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.gutter = gutter;
        this.stringValue = stringValue;
      }
      *[Symbol.iterator]() {
        yield this;
      }
      get isEmpty() {
        return false;
      }
      get hasGutter() {
        return this.gutter !== null;
      }
      get isSingle() {
        return this.isFirst && this.isLast;
      }
      append(other) {
        return this.concat(other);
      }
      concat(other) {
        return new Collection().append(this).append(other);
      }
      toString(options) {
        if (options.diff === false)
          return this.stringValue;
        return translateGutter(options.theme, options.invert, this.gutter) + this.stringValue;
      }
      mergeWithInfix(infix, other) {
        if (other.isLine !== true) {
          return new Collection().append(this).mergeWithInfix(infix, other);
        }
        return new Line(this.isFirst, other.isLast, other.gutter, this.stringValue + infix + other.stringValue);
      }
      withFirstPrefixed(prefix) {
        if (!this.isFirst)
          return this;
        return new Line(true, this.isLast, this.gutter, prefix + this.stringValue);
      }
      withLastPostfixed(postfix) {
        if (!this.isLast)
          return this;
        return new Line(this.isFirst, true, this.gutter, this.stringValue + postfix);
      }
      stripFlags() {
        return new Line(false, false, this.gutter, this.stringValue);
      }
      decompose() {
        return new Collection().append(this).decompose();
      }
    };
    Object.defineProperty(Line.prototype, "isLine", { value: true });
    var Collection = class {
      constructor() {
        this.buffer = [];
      }
      *[Symbol.iterator]() {
        for (const appended of this.buffer) {
          for (const line of appended)
            yield line;
        }
      }
      get isEmpty() {
        return this.buffer.length === 0;
      }
      get hasGutter() {
        for (const line of this) {
          if (line.hasGutter)
            return true;
        }
        return false;
      }
      get isSingle() {
        const iterator = this[Symbol.iterator]();
        iterator.next();
        return iterator.next().done === true;
      }
      append(lineOrLines) {
        if (!lineOrLines.isEmpty)
          this.buffer.push(lineOrLines);
        return this;
      }
      concat(other) {
        return new Collection().append(this).append(other);
      }
      toString(options) {
        let lines = this;
        if (options.invert) {
          lines = new Collection();
          let buffer = new Collection();
          let prev = null;
          for (const line of this) {
            if (line.gutter === ACTUAL) {
              if (prev !== null && prev.gutter !== ACTUAL && !buffer.isEmpty) {
                lines.append(buffer);
                buffer = new Collection();
              }
              buffer.append(line);
            } else if (line.gutter === EXPECTED) {
              lines.append(line);
            } else {
              if (!buffer.isEmpty) {
                lines.append(buffer);
                buffer = new Collection();
              }
              lines.append(line);
            }
            prev = line;
          }
          lines.append(buffer);
        }
        return Array.from(lines, (line) => line.toString(options)).join("\n");
      }
      mergeWithInfix(infix, from) {
        if (from.isEmpty)
          throw new Error("Cannot merge, `from` is empty.");
        const otherLines = Array.from(from);
        if (!otherLines[0].isFirst)
          throw new Error("Cannot merge, `from` has no first line.");
        const merged = new Collection();
        let seenLast = false;
        for (const line of this) {
          if (seenLast)
            throw new Error("Cannot merge line, the last line has already been seen.");
          if (!line.isLast) {
            merged.append(line);
            continue;
          }
          seenLast = true;
          for (const other of otherLines) {
            if (other.isFirst) {
              merged.append(line.mergeWithInfix(infix, other));
            } else {
              merged.append(other);
            }
          }
        }
        return merged;
      }
      withFirstPrefixed(prefix) {
        return new Collection().append(Array.from(this, (line) => line.withFirstPrefixed(prefix)));
      }
      withLastPostfixed(postfix) {
        return new Collection().append(Array.from(this, (line) => line.withLastPostfixed(postfix)));
      }
      stripFlags() {
        return new Collection().append(Array.from(this, (line) => line.stripFlags()));
      }
      decompose() {
        const first = { actual: new Collection(), expected: new Collection() };
        const last = { actual: new Collection(), expected: new Collection() };
        const remaining = new Collection();
        for (const line of this) {
          if (line.isFirst && line.gutter === ACTUAL) {
            first.actual.append(line);
          } else if (line.isFirst && line.gutter === EXPECTED) {
            first.expected.append(line);
          } else if (line.isLast && line.gutter === ACTUAL) {
            last.actual.append(line);
          } else if (line.isLast && line.gutter === EXPECTED) {
            last.expected.append(line);
          } else {
            remaining.append(line);
          }
        }
        return { first, last, remaining };
      }
    };
    Object.defineProperty(Collection.prototype, "isCollection", { value: true });
    function setDefaultGutter(iterable, gutter) {
      return new Collection().append(Array.from(iterable, (line) => {
        return line.gutter === null ? new Line(line.isFirst, line.isLast, gutter, line.stringValue) : line;
      }));
    }
    module2.exports = {
      buffer() {
        return new Collection();
      },
      first(stringValue) {
        return new Line(true, false, null, stringValue);
      },
      last(stringValue) {
        return new Line(false, true, null, stringValue);
      },
      line(stringValue) {
        return new Line(false, false, null, stringValue);
      },
      single(stringValue) {
        return new Line(true, true, null, stringValue);
      },
      setDefaultGutter(lineOrCollection) {
        return lineOrCollection;
      },
      actual: {
        first(stringValue) {
          return new Line(true, false, ACTUAL, stringValue);
        },
        last(stringValue) {
          return new Line(false, true, ACTUAL, stringValue);
        },
        line(stringValue) {
          return new Line(false, false, ACTUAL, stringValue);
        },
        single(stringValue) {
          return new Line(true, true, ACTUAL, stringValue);
        },
        setDefaultGutter(lineOrCollection) {
          return setDefaultGutter(lineOrCollection, ACTUAL);
        }
      },
      expected: {
        first(stringValue) {
          return new Line(true, false, EXPECTED, stringValue);
        },
        last(stringValue) {
          return new Line(false, true, EXPECTED, stringValue);
        },
        line(stringValue) {
          return new Line(false, false, EXPECTED, stringValue);
        },
        single(stringValue) {
          return new Line(true, true, EXPECTED, stringValue);
        },
        setDefaultGutter(lineOrCollection) {
          return setDefaultGutter(lineOrCollection, EXPECTED);
        }
      }
    };
  }
});

// node_modules/concordance/lib/formatUtils.js
var require_formatUtils = __commonJS({
  "node_modules/concordance/lib/formatUtils.js"(exports) {
    "use strict";
    var lineBuilder = require_lineBuilder();
    function wrap(fromTheme, value) {
      return fromTheme.open + value + fromTheme.close;
    }
    exports.wrap = wrap;
    function formatCtorAndStringTag(theme, object2) {
      if (!object2.ctor)
        return wrap(theme.object.stringTag, object2.stringTag);
      let retval = wrap(theme.object.ctor, object2.ctor);
      if (object2.stringTag && object2.stringTag !== object2.ctor && object2.stringTag !== "Object") {
        retval += " " + wrap(theme.object.secondaryStringTag, object2.stringTag);
      }
      return retval;
    }
    exports.formatCtorAndStringTag = formatCtorAndStringTag;
    var ObjectFormatter = class {
      constructor(object2, theme, indent) {
        this.object = object2;
        this.theme = theme;
        this.indent = indent;
        this.increaseIndent = true;
        this.innerLines = lineBuilder.buffer();
        this.pendingStats = null;
      }
      append(formatted, origin) {
        if (origin.isStats === true) {
          this.pendingStats = formatted;
        } else {
          if (this.pendingStats !== null) {
            if (!this.innerLines.isEmpty) {
              this.innerLines.append(this.pendingStats);
            }
            this.pendingStats = null;
          }
          this.innerLines.append(formatted);
        }
      }
      finalize() {
        const variant = this.object.isList ? this.theme.list : this.theme.object;
        const ctor = this.object.ctor;
        const stringTag = this.object.stringTag;
        const prefix = (ctor === "Array" || ctor === "Object") && ctor === stringTag ? "" : formatCtorAndStringTag(this.theme, this.object) + " ";
        if (this.innerLines.isEmpty) {
          return lineBuilder.single(prefix + variant.openBracket + variant.closeBracket);
        }
        return lineBuilder.first(prefix + variant.openBracket).concat(this.innerLines.withFirstPrefixed(this.indent.increase()).stripFlags()).append(lineBuilder.last(this.indent + variant.closeBracket));
      }
      maxDepth() {
        const variant = this.object.isList ? this.theme.list : this.theme.object;
        return lineBuilder.single(
          formatCtorAndStringTag(this.theme, this.object) + " " + variant.openBracket + " " + this.theme.maxDepth + " " + variant.closeBracket
        );
      }
      shouldFormat() {
        return true;
      }
      customize(methods) {
        if (methods.finalize) {
          this.finalize = () => methods.finalize(this.innerLines);
        }
        if (methods.maxDepth) {
          this.maxDepth = methods.maxDepth;
        }
        if (methods.shouldFormat) {
          this.shouldFormat = methods.shouldFormat;
        }
        return this;
      }
    };
    exports.ObjectFormatter = ObjectFormatter;
    var SingleValueFormatter = class {
      constructor(theme, finalizeFn, increaseIndent) {
        this.theme = theme;
        this.finalizeFn = finalizeFn;
        this.hasValue = false;
        this.increaseIndent = increaseIndent === true;
        this.value = null;
      }
      append(formatted) {
        if (this.hasValue)
          throw new Error("Formatter buffer can only take one formatted value.");
        this.hasValue = true;
        this.value = formatted;
      }
      finalize() {
        if (!this.hasValue)
          throw new Error("Formatter buffer never received a formatted value.");
        return this.finalizeFn(this.value);
      }
      maxDepth() {
        return this.finalizeFn(lineBuilder.single(this.theme.maxDepth));
      }
    };
    exports.SingleValueFormatter = SingleValueFormatter;
  }
});

// node_modules/concordance/lib/getObjectKeys.js
var require_getObjectKeys = __commonJS({
  "node_modules/concordance/lib/getObjectKeys.js"(exports, module2) {
    "use strict";
    function getObjectKeys(obj, excludeListItemAccessorsBelowLength) {
      const keys2 = [];
      let size = 0;
      const nameCandidates = Object.getOwnPropertyNames(obj).sort();
      const symbolCandidates = Object.getOwnPropertySymbols(obj);
      for (const name of nameCandidates) {
        let accept = true;
        if (excludeListItemAccessorsBelowLength > 0) {
          const index2 = Number(name);
          accept = !Number.isInteger(index2) || index2 < 0 || index2 >= excludeListItemAccessorsBelowLength;
        }
        if (accept && Object.getOwnPropertyDescriptor(obj, name).enumerable) {
          keys2[size++] = name;
        }
      }
      for (const symbol of symbolCandidates) {
        if (Object.getOwnPropertyDescriptor(obj, symbol).enumerable) {
          keys2[size++] = symbol;
        }
      }
      return { keys: keys2, size };
    }
    module2.exports = getObjectKeys;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/concordance/lib/hasLength.js
var require_hasLength = __commonJS({
  "node_modules/concordance/lib/hasLength.js"(exports, module2) {
    "use strict";
    var isLength = require_isLength();
    var hop = Object.prototype.hasOwnProperty;
    function hasLength(obj) {
      return Array.isArray(obj) || hop.call(obj, "length") && isLength(obj.length) && (obj.length === 0 || "0" in obj);
    }
    module2.exports = hasLength;
  }
});

// node_modules/concordance/lib/recursorUtils.js
var require_recursorUtils = __commonJS({
  "node_modules/concordance/lib/recursorUtils.js"(exports) {
    "use strict";
    var NOOP_RECURSOR = {
      size: 0,
      next() {
        return null;
      }
    };
    exports.NOOP_RECURSOR = NOOP_RECURSOR;
    function fork(recursor) {
      const buffer = [];
      return {
        shared() {
          const next = recursor();
          if (next !== null)
            buffer.push(next);
          return next;
        },
        recursor() {
          if (buffer.length > 0)
            return buffer.shift();
          return recursor();
        }
      };
    }
    exports.fork = fork;
    function consumeDeep(recursor) {
      const stack = [recursor];
      while (stack.length > 0) {
        const subject = stack[stack.length - 1]();
        if (subject === null) {
          stack.pop();
          continue;
        }
        if (typeof subject.createRecursor === "function") {
          stack.push(subject.createRecursor());
        }
      }
    }
    exports.consumeDeep = consumeDeep;
    function map2(recursor, mapFn) {
      return () => {
        const next = recursor();
        if (next === null)
          return null;
        return mapFn(next);
      };
    }
    exports.map = map2;
    function replay(state, create) {
      if (!state) {
        const recursor = create();
        if (recursor === NOOP_RECURSOR) {
          state = recursor;
        } else {
          state = Object.assign({
            buffer: [],
            done: false
          }, recursor);
        }
      }
      if (state === NOOP_RECURSOR)
        return { state, recursor: state };
      let done = false;
      let index2 = 0;
      const next = () => {
        if (done)
          return null;
        let retval = state.buffer[index2];
        if (retval === void 0) {
          retval = state.buffer[index2] = state.next();
        }
        index2++;
        if (retval === null) {
          done = true;
        }
        return retval;
      };
      return { state, recursor: { next, size: state.size } };
    }
    exports.replay = replay;
    function sequence(first, second) {
      let fromFirst = true;
      return () => {
        if (fromFirst) {
          const next = first();
          if (next !== null)
            return next;
          fromFirst = false;
        }
        return second();
      };
    }
    exports.sequence = sequence;
    function singleValue(value) {
      let done = false;
      return () => {
        if (done)
          return null;
        done = true;
        return value;
      };
    }
    exports.singleValue = singleValue;
    function unshift(recursor, value) {
      return () => {
        if (value !== null) {
          const next = value;
          value = null;
          return next;
        }
        return recursor();
      };
    }
    exports.unshift = unshift;
  }
});

// node_modules/concordance/lib/metaDescriptors/stats.js
var require_stats = __commonJS({
  "node_modules/concordance/lib/metaDescriptors/stats.js"(exports) {
    "use strict";
    var constants = require_constants();
    var lineBuilder = require_lineBuilder();
    var recursorUtils = require_recursorUtils();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describeIterableRecursor(recursor) {
      return new IterableStats(recursor.size);
    }
    exports.describeIterableRecursor = describeIterableRecursor;
    function describeListRecursor(recursor) {
      return new ListStats(recursor.size);
    }
    exports.describeListRecursor = describeListRecursor;
    function describePropertyRecursor(recursor) {
      return new PropertyStats(recursor.size);
    }
    exports.describePropertyRecursor = describePropertyRecursor;
    function deserializeIterableStats(size) {
      return new IterableStats(size);
    }
    exports.deserializeIterableStats = deserializeIterableStats;
    function deserializeListStats(size) {
      return new ListStats(size);
    }
    exports.deserializeListStats = deserializeListStats;
    function deserializePropertyStats(size) {
      return new PropertyStats(size);
    }
    exports.deserializePropertyStats = deserializePropertyStats;
    var iterableTag = Symbol("IterableStats");
    exports.iterableTag = iterableTag;
    var listTag = Symbol("ListStats");
    exports.listTag = listTag;
    var propertyTag = Symbol("PropertyStats");
    exports.propertyTag = propertyTag;
    var Stats = class {
      constructor(size) {
        this.size = size;
      }
      formatDeep(theme) {
        return lineBuilder.single(theme.stats.separator);
      }
      prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape) {
        if (expected.isStats !== true || expected.tag === this.tag)
          return null;
        const rhsFork = recursorUtils.fork(rhsRecursor);
        const initialExpected = expected;
        const missing = [];
        while (expected !== null && this.tag !== expected.tag) {
          missing.push(expected);
          expected = rhsFork.shared();
        }
        if (expected !== null && missing.length > 0) {
          return {
            multipleAreMissing: true,
            descriptors: missing,
            lhsRecursor: recursorUtils.unshift(lhsRecursor, this),
            // Use original `rhsRecursor`, not `rhsFork`, since the consumed
            // descriptors are returned with the `missing` array.
            rhsRecursor: recursorUtils.unshift(rhsRecursor, expected)
          };
        }
        const lhsFork = recursorUtils.fork(lhsRecursor);
        let actual = this;
        const extraneous = [];
        while (actual !== null && actual.tag !== initialExpected.tag) {
          extraneous.push(actual);
          actual = lhsFork.shared();
        }
        if (actual !== null && extraneous.length > 0) {
          return {
            multipleAreExtraneous: true,
            descriptors: extraneous,
            // Use original `lhsRecursor`, not `lhsFork`, since the consumed
            // descriptors are returned with the `extraneous` array.
            lhsRecursor: recursorUtils.unshift(lhsRecursor, actual),
            rhsRecursor: recursorUtils.unshift(rhsFork.recursor, initialExpected)
          };
        }
        return null;
      }
      serialize() {
        return this.size;
      }
    };
    Object.defineProperty(Stats.prototype, "isStats", { value: true });
    var IterableStats = class extends Stats {
      compare(expected) {
        return expected.tag === iterableTag && this.size === expected.size ? DEEP_EQUAL : UNEQUAL;
      }
    };
    Object.defineProperty(IterableStats.prototype, "tag", { value: iterableTag });
    var ListStats = class extends Stats {
      compare(expected) {
        return expected.tag === listTag && this.size === expected.size ? DEEP_EQUAL : UNEQUAL;
      }
    };
    Object.defineProperty(ListStats.prototype, "tag", { value: listTag });
    var PropertyStats = class extends Stats {
      compare(expected) {
        return expected.tag === propertyTag && this.size === expected.size ? DEEP_EQUAL : UNEQUAL;
      }
    };
    Object.defineProperty(PropertyStats.prototype, "tag", { value: propertyTag });
  }
});

// node_modules/concordance/lib/complexValues/object.js
var require_object = __commonJS({
  "node_modules/concordance/lib/complexValues/object.js"(exports) {
    "use strict";
    var constants = require_constants();
    var ObjectFormatter = require_formatUtils().ObjectFormatter;
    var getObjectKeys = require_getObjectKeys();
    var hasLength = require_hasLength();
    var stats = require_stats();
    var recursorUtils = require_recursorUtils();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      const isArray = props.stringTag === "Array";
      const object2 = props.value;
      return new DescribedObjectValue(Object.assign({
        isArray,
        isIterable: object2[Symbol.iterator] !== void 0,
        isList: isArray || hasLength(object2)
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedObjectValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("ObjectValue");
    exports.tag = tag;
    var ObjectValue = class {
      constructor(props) {
        this.ctor = props.ctor;
        this.pointer = props.pointer;
        this.stringTag = props.stringTag;
        this.isArray = props.isArray === true;
        this.isIterable = props.isIterable === true;
        this.isList = props.isList === true;
      }
      compare(expected) {
        if (this.tag !== expected.tag)
          return UNEQUAL;
        if (this.stringTag !== expected.stringTag || !this.hasSameCtor(expected))
          return UNEQUAL;
        return SHALLOW_EQUAL;
      }
      hasSameCtor(expected) {
        return this.ctor === expected.ctor;
      }
      formatShallow(theme, indent) {
        return new ObjectFormatter(this, theme, indent);
      }
      serialize() {
        return [
          this.ctor,
          this.pointer,
          this.stringTag,
          this.isArray,
          this.isIterable,
          this.isList
        ];
      }
    };
    Object.defineProperty(ObjectValue.prototype, "isComplex", { value: true });
    Object.defineProperty(ObjectValue.prototype, "tag", { value: tag });
    exports.ObjectValue = ObjectValue;
    var DescribedObjectValue = DescribedMixin(ObjectValue);
    var DeserializedObjectValue = DeserializedMixin(ObjectValue);
    function DescribedMixin(base) {
      return class extends base {
        constructor(props) {
          super(props);
          this.value = props.value;
          this.describeAny = props.describeAny;
          this.describeItem = props.describeItem;
          this.describeMapEntry = props.describeMapEntry;
          this.describeProperty = props.describeProperty;
          this.iterableState = null;
          this.listState = null;
          this.propertyState = null;
        }
        compare(expected) {
          return this.value === expected.value ? DEEP_EQUAL : super.compare(expected);
        }
        createPropertyRecursor() {
          const objectKeys = getObjectKeys(this.value, this.isList ? this.value.length : 0);
          const size = objectKeys.size;
          if (size === 0)
            return recursorUtils.NOOP_RECURSOR;
          let index2 = 0;
          const next = () => {
            if (index2 === size)
              return null;
            const key = objectKeys.keys[index2++];
            return this.describeProperty(key, this.describeAny(this.value[key]));
          };
          return { size, next };
        }
        createListRecursor() {
          if (!this.isList)
            return recursorUtils.NOOP_RECURSOR;
          const size = this.value.length;
          if (size === 0)
            return recursorUtils.NOOP_RECURSOR;
          let index2 = 0;
          const next = () => {
            if (index2 === size)
              return null;
            const current = index2;
            index2++;
            return this.describeItem(current, this.describeAny(this.value[current]));
          };
          return { size, next };
        }
        createIterableRecursor() {
          if (this.isArray || !this.isIterable)
            return recursorUtils.NOOP_RECURSOR;
          const iterator = this.value[Symbol.iterator]();
          let first = iterator.next();
          let done = false;
          let size = -1;
          if (first.done) {
            if (first.value === void 0) {
              size = 0;
              done = true;
            } else {
              size = 1;
            }
          }
          let index2 = 0;
          const next = () => {
            if (done)
              return null;
            while (!done) {
              const current = first || iterator.next();
              if (current === first) {
                first = null;
              }
              if (current.done) {
                done = true;
              }
              const item = current.value;
              if (done && item === void 0)
                return null;
              if (this.isList && this.value[index2] === item) {
                index2++;
              } else {
                return this.describeItem(index2++, this.describeAny(item));
              }
            }
          };
          return { size, next };
        }
        createRecursor() {
          let recursedProperty = false;
          let recursedList = false;
          let recursedIterable = false;
          let recursor = null;
          return () => {
            let retval = null;
            do {
              if (recursor !== null) {
                retval = recursor.next();
                if (retval === null) {
                  recursor = null;
                }
              }
              while (recursor === null && (!recursedList || !recursedProperty || !recursedIterable)) {
                if (!recursedList) {
                  const replay = recursorUtils.replay(this.listState, () => this.createListRecursor());
                  this.listState = replay.state;
                  recursor = replay.recursor;
                  recursedList = true;
                  if (recursor !== recursorUtils.NOOP_RECURSOR) {
                    retval = stats.describeListRecursor(recursor);
                  }
                } else if (!recursedProperty) {
                  const replay = recursorUtils.replay(this.propertyState, () => this.createPropertyRecursor());
                  this.propertyState = replay.state;
                  recursor = replay.recursor;
                  recursedProperty = true;
                  if (recursor !== recursorUtils.NOOP_RECURSOR) {
                    retval = stats.describePropertyRecursor(recursor);
                  }
                } else if (!recursedIterable) {
                  const replay = recursorUtils.replay(this.iterableState, () => this.createIterableRecursor());
                  this.iterableState = replay.state;
                  recursor = replay.recursor;
                  recursedIterable = true;
                  if (recursor !== recursorUtils.NOOP_RECURSOR) {
                    retval = stats.describeIterableRecursor(recursor);
                  }
                }
              }
            } while (recursor !== null && retval === null);
            return retval;
          };
        }
      };
    }
    exports.DescribedMixin = DescribedMixin;
    function DeserializedMixin(base) {
      return class extends base {
        constructor(state, recursor) {
          super({
            ctor: state[0],
            pointer: state[1],
            stringTag: state[2],
            isArray: state[3],
            isIterable: state[4],
            isList: state[5]
          });
          this.deserializedRecursor = recursor;
          this.replayState = null;
        }
        createRecursor() {
          if (!this.deserializedRecursor)
            return () => null;
          const replay = recursorUtils.replay(this.replayState, () => ({ size: -1, next: this.deserializedRecursor }));
          this.replayState = replay.state;
          return replay.recursor.next;
        }
        hasSameCtor(expected) {
          return this.ctor === expected.ctor;
        }
      };
    }
    exports.DeserializedMixin = DeserializedMixin;
  }
});

// node_modules/concordance/lib/complexValues/arguments.js
var require_arguments = __commonJS({
  "node_modules/concordance/lib/complexValues/arguments.js"(exports) {
    "use strict";
    var constants = require_constants();
    var object2 = require_object();
    var AMBIGUOUS = constants.AMBIGUOUS;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      return new DescribedArgumentsValue(Object.assign({
        // Treat as an array, to allow comparisons with arrays
        isArray: true,
        isList: true
      }, props, { ctor: "Arguments" }));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedArgumentsValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("ArgumentsValue");
    exports.tag = tag;
    var ArgumentsValue = class extends object2.ObjectValue {
      compare(expected) {
        if (expected.isComplex !== true)
          return UNEQUAL;
        if (expected.stringTag === "Array")
          return AMBIGUOUS;
        return super.compare(expected);
      }
    };
    Object.defineProperty(ArgumentsValue.prototype, "tag", { value: tag });
    var DescribedArgumentsValue = object2.DescribedMixin(ArgumentsValue);
    var DeserializedArgumentsValue = class extends object2.DeserializedMixin(ArgumentsValue) {
      compare(expected) {
        return expected.isComplex === true && expected.stringTag === "Array" ? UNEQUAL : super.compare(expected);
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/typedArray.js
var require_typedArray = __commonJS({
  "node_modules/concordance/lib/complexValues/typedArray.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var propertyStatsTag = require_stats().propertyTag;
    var recursorUtils = require_recursorUtils();
    var object2 = require_object();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function getBuffer(value) {
      const buffer = Buffer.from(value.buffer);
      return value.byteLength !== value.buffer.byteLength ? buffer.slice(value.byteOffset, value.byteOffset + value.byteLength) : buffer;
    }
    exports.getBuffer = getBuffer;
    function describe2(props) {
      return new DescribedTypedArrayValue(Object.assign({
        buffer: getBuffer(props.value),
        // Set isArray and isList so the property recursor excludes the byte accessors
        isArray: true,
        isList: true
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedTypedArrayValue(state, recursor);
    }
    exports.deserialize = deserialize;
    function deserializeBytes(buffer) {
      return new Bytes(buffer);
    }
    exports.deserializeBytes = deserializeBytes;
    var bytesTag = Symbol("Bytes");
    exports.bytesTag = bytesTag;
    var tag = Symbol("TypedArrayValue");
    exports.tag = tag;
    var Bytes = class {
      constructor(buffer) {
        this.buffer = buffer;
      }
      compare(expected) {
        return expected.tag === bytesTag && this.buffer.equals(expected.buffer) ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme, indent) {
        const indentation = indent;
        const lines = lineBuilder.buffer();
        let string3 = "";
        let isFirst = true;
        for (let offset = 0; offset < this.buffer.length; offset += 4) {
          if (offset > 0) {
            if (offset % 32 === 0) {
              if (isFirst) {
                lines.append(lineBuilder.first(string3));
                isFirst = false;
              } else {
                lines.append(lineBuilder.line(string3));
              }
              string3 = String(indentation);
            } else {
              string3 += " ";
            }
          }
          string3 += formatUtils.wrap(theme.typedArray.bytes, this.buffer.toString("hex", offset, offset + 4));
        }
        return isFirst ? lineBuilder.single(string3) : lines.append(lineBuilder.last(string3));
      }
      serialize() {
        return this.buffer;
      }
    };
    Object.defineProperty(Bytes.prototype, "tag", { value: bytesTag });
    var TypedArrayValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.buffer = props.buffer;
      }
      formatShallow(theme, indent) {
        return super.formatShallow(theme, indent).customize({
          shouldFormat(subject) {
            if (subject.tag === propertyStatsTag)
              return subject.size > 1;
            if (subject.isProperty === true)
              return subject.key.value !== "byteLength";
            if (subject.tag === bytesTag)
              return subject.buffer.byteLength > 0;
            return true;
          }
        });
      }
    };
    Object.defineProperty(TypedArrayValue.prototype, "tag", { value: tag });
    exports.TypedArrayValue = TypedArrayValue;
    function DescribedMixin(base) {
      return class extends object2.DescribedMixin(base) {
        // The list isn't recursed. Instead a Bytes instance is returned by the main
        // recursor.
        createListRecursor() {
          return recursorUtils.NOOP_RECURSOR;
        }
        createPropertyRecursor() {
          const recursor = super.createPropertyRecursor();
          const size = recursor.size + 1;
          let done = false;
          const next = () => {
            if (done)
              return null;
            const property = recursor.next();
            if (property)
              return property;
            done = true;
            return this.describeProperty("byteLength", this.describeAny(this.buffer.byteLength));
          };
          return { size, next };
        }
        createRecursor() {
          return recursorUtils.unshift(super.createRecursor(), new Bytes(this.buffer));
        }
      };
    }
    exports.DescribedMixin = DescribedMixin;
    var DescribedTypedArrayValue = DescribedMixin(TypedArrayValue);
    function DeserializedMixin(base) {
      return class extends object2.DeserializedMixin(base) {
        constructor(state, recursor) {
          super(state, recursor);
          const bytesDescriptor = this.createRecursor()();
          this.buffer = bytesDescriptor.buffer;
        }
      };
    }
    exports.DeserializedMixin = DeserializedMixin;
    var DeserializedTypedArrayValue = DeserializedMixin(TypedArrayValue);
  }
});

// node_modules/concordance/lib/complexValues/arrayBuffer.js
var require_arrayBuffer = __commonJS({
  "node_modules/concordance/lib/complexValues/arrayBuffer.js"(exports) {
    "use strict";
    var typedArray = require_typedArray();
    function describe2(props) {
      return new DescribedArrayBufferValue(Object.assign({
        buffer: Buffer.from(props.value),
        // Set isArray and isList so the property recursor excludes the byte accessors
        isArray: true,
        isList: true
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedArrayBufferValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("ArrayBufferValue");
    exports.tag = tag;
    var ArrayBufferValue = class extends typedArray.TypedArrayValue {
    };
    Object.defineProperty(ArrayBufferValue.prototype, "tag", { value: tag });
    var DescribedArrayBufferValue = typedArray.DescribedMixin(ArrayBufferValue);
    var DeserializedArrayBufferValue = typedArray.DeserializedMixin(ArrayBufferValue);
  }
});

// node_modules/esutils/lib/ast.js
var require_ast = __commonJS({
  "node_modules/esutils/lib/ast.js"(exports, module2) {
    (function() {
      "use strict";
      function isExpression(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "ArrayExpression":
          case "AssignmentExpression":
          case "BinaryExpression":
          case "CallExpression":
          case "ConditionalExpression":
          case "FunctionExpression":
          case "Identifier":
          case "Literal":
          case "LogicalExpression":
          case "MemberExpression":
          case "NewExpression":
          case "ObjectExpression":
          case "SequenceExpression":
          case "ThisExpression":
          case "UnaryExpression":
          case "UpdateExpression":
            return true;
        }
        return false;
      }
      function isIterationStatement(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "DoWhileStatement":
          case "ForInStatement":
          case "ForStatement":
          case "WhileStatement":
            return true;
        }
        return false;
      }
      function isStatement(node) {
        if (node == null) {
          return false;
        }
        switch (node.type) {
          case "BlockStatement":
          case "BreakStatement":
          case "ContinueStatement":
          case "DebuggerStatement":
          case "DoWhileStatement":
          case "EmptyStatement":
          case "ExpressionStatement":
          case "ForInStatement":
          case "ForStatement":
          case "IfStatement":
          case "LabeledStatement":
          case "ReturnStatement":
          case "SwitchStatement":
          case "ThrowStatement":
          case "TryStatement":
          case "VariableDeclaration":
          case "WhileStatement":
          case "WithStatement":
            return true;
        }
        return false;
      }
      function isSourceElement(node) {
        return isStatement(node) || node != null && node.type === "FunctionDeclaration";
      }
      function trailingStatement(node) {
        switch (node.type) {
          case "IfStatement":
            if (node.alternate != null) {
              return node.alternate;
            }
            return node.consequent;
          case "LabeledStatement":
          case "ForStatement":
          case "ForInStatement":
          case "WhileStatement":
          case "WithStatement":
            return node.body;
        }
        return null;
      }
      function isProblematicIfStatement(node) {
        var current;
        if (node.type !== "IfStatement") {
          return false;
        }
        if (node.alternate == null) {
          return false;
        }
        current = node.consequent;
        do {
          if (current.type === "IfStatement") {
            if (current.alternate == null) {
              return true;
            }
          }
          current = trailingStatement(current);
        } while (current);
        return false;
      }
      module2.exports = {
        isExpression,
        isStatement,
        isIterationStatement,
        isSourceElement,
        isProblematicIfStatement,
        trailingStatement
      };
    })();
  }
});

// node_modules/esutils/lib/code.js
var require_code = __commonJS({
  "node_modules/esutils/lib/code.js"(exports, module2) {
    (function() {
      "use strict";
      var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;
      ES5Regex = {
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // ECMAScript 5.1/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
      };
      ES6Regex = {
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        // ECMAScript 6/Unicode v9.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      };
      function isDecimalDigit(ch2) {
        return 48 <= ch2 && ch2 <= 57;
      }
      function isHexDigit(ch2) {
        return 48 <= ch2 && ch2 <= 57 || // 0..9
        97 <= ch2 && ch2 <= 102 || // a..f
        65 <= ch2 && ch2 <= 70;
      }
      function isOctalDigit(ch2) {
        return ch2 >= 48 && ch2 <= 55;
      }
      NON_ASCII_WHITESPACES = [
        5760,
        8192,
        8193,
        8194,
        8195,
        8196,
        8197,
        8198,
        8199,
        8200,
        8201,
        8202,
        8239,
        8287,
        12288,
        65279
      ];
      function isWhiteSpace(ch2) {
        return ch2 === 32 || ch2 === 9 || ch2 === 11 || ch2 === 12 || ch2 === 160 || ch2 >= 5760 && NON_ASCII_WHITESPACES.indexOf(ch2) >= 0;
      }
      function isLineTerminator(ch2) {
        return ch2 === 10 || ch2 === 13 || ch2 === 8232 || ch2 === 8233;
      }
      function fromCodePoint(cp) {
        if (cp <= 65535) {
          return String.fromCharCode(cp);
        }
        var cu1 = String.fromCharCode(Math.floor((cp - 65536) / 1024) + 55296);
        var cu2 = String.fromCharCode((cp - 65536) % 1024 + 56320);
        return cu1 + cu2;
      }
      IDENTIFIER_START = new Array(128);
      for (ch = 0; ch < 128; ++ch) {
        IDENTIFIER_START[ch] = ch >= 97 && ch <= 122 || // a..z
        ch >= 65 && ch <= 90 || // A..Z
        ch === 36 || ch === 95;
      }
      IDENTIFIER_PART = new Array(128);
      for (ch = 0; ch < 128; ++ch) {
        IDENTIFIER_PART[ch] = ch >= 97 && ch <= 122 || // a..z
        ch >= 65 && ch <= 90 || // A..Z
        ch >= 48 && ch <= 57 || // 0..9
        ch === 36 || ch === 95;
      }
      function isIdentifierStartES5(ch2) {
        return ch2 < 128 ? IDENTIFIER_START[ch2] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
      }
      function isIdentifierPartES5(ch2) {
        return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
      }
      function isIdentifierStartES6(ch2) {
        return ch2 < 128 ? IDENTIFIER_START[ch2] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch2));
      }
      function isIdentifierPartES6(ch2) {
        return ch2 < 128 ? IDENTIFIER_PART[ch2] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch2));
      }
      module2.exports = {
        isDecimalDigit,
        isHexDigit,
        isOctalDigit,
        isWhiteSpace,
        isLineTerminator,
        isIdentifierStartES5,
        isIdentifierPartES5,
        isIdentifierStartES6,
        isIdentifierPartES6
      };
    })();
  }
});

// node_modules/esutils/lib/keyword.js
var require_keyword = __commonJS({
  "node_modules/esutils/lib/keyword.js"(exports, module2) {
    (function() {
      "use strict";
      var code = require_code();
      function isStrictModeReservedWordES6(id) {
        switch (id) {
          case "implements":
          case "interface":
          case "package":
          case "private":
          case "protected":
          case "public":
          case "static":
          case "let":
            return true;
          default:
            return false;
        }
      }
      function isKeywordES5(id, strict) {
        if (!strict && id === "yield") {
          return false;
        }
        return isKeywordES6(id, strict);
      }
      function isKeywordES6(id, strict) {
        if (strict && isStrictModeReservedWordES6(id)) {
          return true;
        }
        switch (id.length) {
          case 2:
            return id === "if" || id === "in" || id === "do";
          case 3:
            return id === "var" || id === "for" || id === "new" || id === "try";
          case 4:
            return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
          case 5:
            return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
          case 6:
            return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
          case 7:
            return id === "default" || id === "finally" || id === "extends";
          case 8:
            return id === "function" || id === "continue" || id === "debugger";
          case 10:
            return id === "instanceof";
          default:
            return false;
        }
      }
      function isReservedWordES5(id, strict) {
        return id === "null" || id === "true" || id === "false" || isKeywordES5(id, strict);
      }
      function isReservedWordES6(id, strict) {
        return id === "null" || id === "true" || id === "false" || isKeywordES6(id, strict);
      }
      function isRestrictedWord(id) {
        return id === "eval" || id === "arguments";
      }
      function isIdentifierNameES5(id) {
        var i2, iz, ch;
        if (id.length === 0) {
          return false;
        }
        ch = id.charCodeAt(0);
        if (!code.isIdentifierStartES5(ch)) {
          return false;
        }
        for (i2 = 1, iz = id.length; i2 < iz; ++i2) {
          ch = id.charCodeAt(i2);
          if (!code.isIdentifierPartES5(ch)) {
            return false;
          }
        }
        return true;
      }
      function decodeUtf16(lead, trail) {
        return (lead - 55296) * 1024 + (trail - 56320) + 65536;
      }
      function isIdentifierNameES6(id) {
        var i2, iz, ch, lowCh, check;
        if (id.length === 0) {
          return false;
        }
        check = code.isIdentifierStartES6;
        for (i2 = 0, iz = id.length; i2 < iz; ++i2) {
          ch = id.charCodeAt(i2);
          if (55296 <= ch && ch <= 56319) {
            ++i2;
            if (i2 >= iz) {
              return false;
            }
            lowCh = id.charCodeAt(i2);
            if (!(56320 <= lowCh && lowCh <= 57343)) {
              return false;
            }
            ch = decodeUtf16(ch, lowCh);
          }
          if (!check(ch)) {
            return false;
          }
          check = code.isIdentifierPartES6;
        }
        return true;
      }
      function isIdentifierES5(id, strict) {
        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
      }
      function isIdentifierES6(id, strict) {
        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
      }
      module2.exports = {
        isKeywordES5,
        isKeywordES6,
        isReservedWordES5,
        isReservedWordES6,
        isRestrictedWord,
        isIdentifierNameES5,
        isIdentifierNameES6,
        isIdentifierES5,
        isIdentifierES6
      };
    })();
  }
});

// node_modules/esutils/lib/utils.js
var require_utils = __commonJS({
  "node_modules/esutils/lib/utils.js"(exports) {
    (function() {
      "use strict";
      exports.ast = require_ast();
      exports.code = require_code();
      exports.keyword = require_keyword();
    })();
  }
});

// node_modules/fast-diff/diff.js
var require_diff = __commonJS({
  "node_modules/fast-diff/diff.js"(exports, module2) {
    var DIFF_DELETE = -1;
    var DIFF_INSERT = 1;
    var DIFF_EQUAL = 0;
    function diff_main(text1, text2, cursor_pos, _fix_unicode) {
      if (text1 === text2) {
        if (text1) {
          return [[DIFF_EQUAL, text1]];
        }
        return [];
      }
      if (cursor_pos != null) {
        var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);
        if (editdiff) {
          return editdiff;
        }
      }
      var commonlength = diff_commonPrefix(text1, text2);
      var commonprefix = text1.substring(0, commonlength);
      text1 = text1.substring(commonlength);
      text2 = text2.substring(commonlength);
      commonlength = diff_commonSuffix(text1, text2);
      var commonsuffix = text1.substring(text1.length - commonlength);
      text1 = text1.substring(0, text1.length - commonlength);
      text2 = text2.substring(0, text2.length - commonlength);
      var diffs = diff_compute_(text1, text2);
      if (commonprefix) {
        diffs.unshift([DIFF_EQUAL, commonprefix]);
      }
      if (commonsuffix) {
        diffs.push([DIFF_EQUAL, commonsuffix]);
      }
      diff_cleanupMerge(diffs, _fix_unicode);
      return diffs;
    }
    function diff_compute_(text1, text2) {
      var diffs;
      if (!text1) {
        return [[DIFF_INSERT, text2]];
      }
      if (!text2) {
        return [[DIFF_DELETE, text1]];
      }
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      var i2 = longtext.indexOf(shorttext);
      if (i2 !== -1) {
        diffs = [
          [DIFF_INSERT, longtext.substring(0, i2)],
          [DIFF_EQUAL, shorttext],
          [DIFF_INSERT, longtext.substring(i2 + shorttext.length)]
        ];
        if (text1.length > text2.length) {
          diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
      }
      if (shorttext.length === 1) {
        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
      }
      var hm = diff_halfMatch_(text1, text2);
      if (hm) {
        var text1_a = hm[0];
        var text1_b = hm[1];
        var text2_a = hm[2];
        var text2_b = hm[3];
        var mid_common = hm[4];
        var diffs_a = diff_main(text1_a, text2_a);
        var diffs_b = diff_main(text1_b, text2_b);
        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
      }
      return diff_bisect_(text1, text2);
    }
    function diff_bisect_(text1, text2) {
      var text1_length = text1.length;
      var text2_length = text2.length;
      var max_d = Math.ceil((text1_length + text2_length) / 2);
      var v_offset = max_d;
      var v_length = 2 * max_d;
      var v1 = new Array(v_length);
      var v2 = new Array(v_length);
      for (var x = 0; x < v_length; x++) {
        v1[x] = -1;
        v2[x] = -1;
      }
      v1[v_offset + 1] = 0;
      v2[v_offset + 1] = 0;
      var delta = text1_length - text2_length;
      var front = delta % 2 !== 0;
      var k1start = 0;
      var k1end = 0;
      var k2start = 0;
      var k2end = 0;
      for (var d = 0; d < max_d; d++) {
        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
          var k1_offset = v_offset + k1;
          var x1;
          if (k1 === -d || k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
            x1 = v1[k1_offset + 1];
          } else {
            x1 = v1[k1_offset - 1] + 1;
          }
          var y1 = x1 - k1;
          while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) === text2.charAt(y1)) {
            x1++;
            y1++;
          }
          v1[k1_offset] = x1;
          if (x1 > text1_length) {
            k1end += 2;
          } else if (y1 > text2_length) {
            k1start += 2;
          } else if (front) {
            var k2_offset = v_offset + delta - k1;
            if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {
              var x2 = text1_length - v2[k2_offset];
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
          var k2_offset = v_offset + k2;
          var x2;
          if (k2 === -d || k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
            x2 = v2[k2_offset + 1];
          } else {
            x2 = v2[k2_offset - 1] + 1;
          }
          var y2 = x2 - k2;
          while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)) {
            x2++;
            y2++;
          }
          v2[k2_offset] = x2;
          if (x2 > text1_length) {
            k2end += 2;
          } else if (y2 > text2_length) {
            k2start += 2;
          } else if (!front) {
            var k1_offset = v_offset + delta - k2;
            if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {
              var x1 = v1[k1_offset];
              var y1 = v_offset + x1 - k1_offset;
              x2 = text1_length - x2;
              if (x1 >= x2) {
                return diff_bisectSplit_(text1, text2, x1, y1);
              }
            }
          }
        }
      }
      return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
    }
    function diff_bisectSplit_(text1, text2, x, y2) {
      var text1a = text1.substring(0, x);
      var text2a = text2.substring(0, y2);
      var text1b = text1.substring(x);
      var text2b = text2.substring(y2);
      var diffs = diff_main(text1a, text2a);
      var diffsb = diff_main(text1b, text2b);
      return diffs.concat(diffsb);
    }
    function diff_commonPrefix(text1, text2) {
      if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerstart = 0;
      while (pointermin < pointermid) {
        if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
          pointermin = pointermid;
          pointerstart = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_commonSuffix(text1, text2) {
      if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
      }
      var pointermin = 0;
      var pointermax = Math.min(text1.length, text2.length);
      var pointermid = pointermax;
      var pointerend = 0;
      while (pointermin < pointermid) {
        if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
          pointermin = pointermid;
          pointerend = pointermin;
        } else {
          pointermax = pointermid;
        }
        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
      }
      if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {
        pointermid--;
      }
      return pointermid;
    }
    function diff_halfMatch_(text1, text2) {
      var longtext = text1.length > text2.length ? text1 : text2;
      var shorttext = text1.length > text2.length ? text2 : text1;
      if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
      }
      function diff_halfMatchI_(longtext2, shorttext2, i2) {
        var seed = longtext2.substring(i2, i2 + Math.floor(longtext2.length / 4));
        var j = -1;
        var best_common = "";
        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
        while ((j = shorttext2.indexOf(seed, j + 1)) !== -1) {
          var prefixLength = diff_commonPrefix(
            longtext2.substring(i2),
            shorttext2.substring(j)
          );
          var suffixLength = diff_commonSuffix(
            longtext2.substring(0, i2),
            shorttext2.substring(0, j)
          );
          if (best_common.length < suffixLength + prefixLength) {
            best_common = shorttext2.substring(
              j - suffixLength,
              j
            ) + shorttext2.substring(j, j + prefixLength);
            best_longtext_a = longtext2.substring(0, i2 - suffixLength);
            best_longtext_b = longtext2.substring(i2 + prefixLength);
            best_shorttext_a = shorttext2.substring(0, j - suffixLength);
            best_shorttext_b = shorttext2.substring(j + prefixLength);
          }
        }
        if (best_common.length * 2 >= longtext2.length) {
          return [
            best_longtext_a,
            best_longtext_b,
            best_shorttext_a,
            best_shorttext_b,
            best_common
          ];
        } else {
          return null;
        }
      }
      var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
      var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
      var hm;
      if (!hm1 && !hm2) {
        return null;
      } else if (!hm2) {
        hm = hm1;
      } else if (!hm1) {
        hm = hm2;
      } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
      }
      var text1_a, text1_b, text2_a, text2_b;
      if (text1.length > text2.length) {
        text1_a = hm[0];
        text1_b = hm[1];
        text2_a = hm[2];
        text2_b = hm[3];
      } else {
        text2_a = hm[0];
        text2_b = hm[1];
        text1_a = hm[2];
        text1_b = hm[3];
      }
      var mid_common = hm[4];
      return [text1_a, text1_b, text2_a, text2_b, mid_common];
    }
    function diff_cleanupMerge(diffs, fix_unicode) {
      diffs.push([DIFF_EQUAL, ""]);
      var pointer = 0;
      var count_delete = 0;
      var count_insert = 0;
      var text_delete = "";
      var text_insert = "";
      var commonlength;
      while (pointer < diffs.length) {
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
          diffs.splice(pointer, 1);
          continue;
        }
        switch (diffs[pointer][0]) {
          case DIFF_INSERT:
            count_insert++;
            text_insert += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_DELETE:
            count_delete++;
            text_delete += diffs[pointer][1];
            pointer++;
            break;
          case DIFF_EQUAL:
            var previous_equality = pointer - count_insert - count_delete - 1;
            if (fix_unicode) {
              if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {
                var stray = diffs[previous_equality][1].slice(-1);
                diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);
                text_delete = stray + text_delete;
                text_insert = stray + text_insert;
                if (!diffs[previous_equality][1]) {
                  diffs.splice(previous_equality, 1);
                  pointer--;
                  var k = previous_equality - 1;
                  if (diffs[k] && diffs[k][0] === DIFF_INSERT) {
                    count_insert++;
                    text_insert = diffs[k][1] + text_insert;
                    k--;
                  }
                  if (diffs[k] && diffs[k][0] === DIFF_DELETE) {
                    count_delete++;
                    text_delete = diffs[k][1] + text_delete;
                    k--;
                  }
                  previous_equality = k;
                }
              }
              if (starts_with_pair_end(diffs[pointer][1])) {
                var stray = diffs[pointer][1].charAt(0);
                diffs[pointer][1] = diffs[pointer][1].slice(1);
                text_delete += stray;
                text_insert += stray;
              }
            }
            if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
              diffs.splice(pointer, 1);
              break;
            }
            if (text_delete.length > 0 || text_insert.length > 0) {
              if (text_delete.length > 0 && text_insert.length > 0) {
                commonlength = diff_commonPrefix(text_insert, text_delete);
                if (commonlength !== 0) {
                  if (previous_equality >= 0) {
                    diffs[previous_equality][1] += text_insert.substring(0, commonlength);
                  } else {
                    diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
                    pointer++;
                  }
                  text_insert = text_insert.substring(commonlength);
                  text_delete = text_delete.substring(commonlength);
                }
                commonlength = diff_commonSuffix(text_insert, text_delete);
                if (commonlength !== 0) {
                  diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                  text_insert = text_insert.substring(0, text_insert.length - commonlength);
                  text_delete = text_delete.substring(0, text_delete.length - commonlength);
                }
              }
              var n2 = count_insert + count_delete;
              if (text_delete.length === 0 && text_insert.length === 0) {
                diffs.splice(pointer - n2, n2);
                pointer = pointer - n2;
              } else if (text_delete.length === 0) {
                diffs.splice(pointer - n2, n2, [DIFF_INSERT, text_insert]);
                pointer = pointer - n2 + 1;
              } else if (text_insert.length === 0) {
                diffs.splice(pointer - n2, n2, [DIFF_DELETE, text_delete]);
                pointer = pointer - n2 + 1;
              } else {
                diffs.splice(pointer - n2, n2, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                pointer = pointer - n2 + 2;
              }
            }
            if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {
              diffs[pointer - 1][1] += diffs[pointer][1];
              diffs.splice(pointer, 1);
            } else {
              pointer++;
            }
            count_insert = 0;
            count_delete = 0;
            text_delete = "";
            text_insert = "";
            break;
        }
      }
      if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
      }
      var changes = false;
      pointer = 1;
      while (pointer < diffs.length - 1) {
        if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {
          if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
            diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
            diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
            diffs.splice(pointer - 1, 1);
            changes = true;
          } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
            diffs[pointer - 1][1] += diffs[pointer + 1][1];
            diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
            diffs.splice(pointer + 1, 1);
            changes = true;
          }
        }
        pointer++;
      }
      if (changes) {
        diff_cleanupMerge(diffs, fix_unicode);
      }
    }
    function is_surrogate_pair_start(charCode) {
      return charCode >= 55296 && charCode <= 56319;
    }
    function is_surrogate_pair_end(charCode) {
      return charCode >= 56320 && charCode <= 57343;
    }
    function starts_with_pair_end(str) {
      return is_surrogate_pair_end(str.charCodeAt(0));
    }
    function ends_with_pair_start(str) {
      return is_surrogate_pair_start(str.charCodeAt(str.length - 1));
    }
    function remove_empty_tuples(tuples) {
      var ret = [];
      for (var i2 = 0; i2 < tuples.length; i2++) {
        if (tuples[i2][1].length > 0) {
          ret.push(tuples[i2]);
        }
      }
      return ret;
    }
    function make_edit_splice(before, oldMiddle, newMiddle, after) {
      if (ends_with_pair_start(before) || starts_with_pair_end(after)) {
        return null;
      }
      return remove_empty_tuples([
        [DIFF_EQUAL, before],
        [DIFF_DELETE, oldMiddle],
        [DIFF_INSERT, newMiddle],
        [DIFF_EQUAL, after]
      ]);
    }
    function find_cursor_edit_diff(oldText, newText, cursor_pos) {
      var oldRange = typeof cursor_pos === "number" ? { index: cursor_pos, length: 0 } : cursor_pos.oldRange;
      var newRange = typeof cursor_pos === "number" ? null : cursor_pos.newRange;
      var oldLength = oldText.length;
      var newLength = newText.length;
      if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        var oldCursor = oldRange.index;
        var oldBefore = oldText.slice(0, oldCursor);
        var oldAfter = oldText.slice(oldCursor);
        var maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
          var newCursor = oldCursor + newLength - oldLength;
          if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
            break editBefore;
          }
          if (newCursor < 0 || newCursor > newLength) {
            break editBefore;
          }
          var newBefore = newText.slice(0, newCursor);
          var newAfter = newText.slice(newCursor);
          if (newAfter !== oldAfter) {
            break editBefore;
          }
          var prefixLength = Math.min(oldCursor, newCursor);
          var oldPrefix = oldBefore.slice(0, prefixLength);
          var newPrefix = newBefore.slice(0, prefixLength);
          if (oldPrefix !== newPrefix) {
            break editBefore;
          }
          var oldMiddle = oldBefore.slice(prefixLength);
          var newMiddle = newBefore.slice(prefixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
          if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
            break editAfter;
          }
          var cursor = oldCursor;
          var newBefore = newText.slice(0, cursor);
          var newAfter = newText.slice(cursor);
          if (newBefore !== oldBefore) {
            break editAfter;
          }
          var suffixLength = Math.min(oldLength - cursor, newLength - cursor);
          var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
          var newSuffix = newAfter.slice(newAfter.length - suffixLength);
          if (oldSuffix !== newSuffix) {
            break editAfter;
          }
          var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
          var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
          return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
      }
      if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
          var oldPrefix = oldText.slice(0, oldRange.index);
          var oldSuffix = oldText.slice(oldRange.index + oldRange.length);
          var prefixLength = oldPrefix.length;
          var suffixLength = oldSuffix.length;
          if (newLength < prefixLength + suffixLength) {
            break replaceRange;
          }
          var newPrefix = newText.slice(0, prefixLength);
          var newSuffix = newText.slice(newLength - suffixLength);
          if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
            break replaceRange;
          }
          var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
          var newMiddle = newText.slice(prefixLength, newLength - suffixLength);
          return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
      }
      return null;
    }
    function diff2(text1, text2, cursor_pos) {
      return diff_main(text1, text2, cursor_pos, true);
    }
    diff2.INSERT = DIFF_INSERT;
    diff2.DELETE = DIFF_DELETE;
    diff2.EQUAL = DIFF_EQUAL;
    module2.exports = diff2;
  }
});

// node_modules/concordance/lib/primitiveValues/string.js
var require_string = __commonJS({
  "node_modules/concordance/lib/primitiveValues/string.js"(exports) {
    "use strict";
    var keyword = require_utils().keyword;
    var fastDiff = require_diff();
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(value) {
      return new StringValue(value);
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("StringValue");
    exports.tag = tag;
    function basicEscape(string3) {
      return string3.replace(/\\/g, "\\\\");
    }
    var CRLF_CONTROL_PICTURE = "\u240D\u240A";
    var LF_CONTROL_PICTURE = "\u240A";
    var CR_CONTROL_PICTURE = "\u240D";
    var MATCH_CONTROL_PICTURES = new RegExp(`${CR_CONTROL_PICTURE}|${LF_CONTROL_PICTURE}|${CR_CONTROL_PICTURE}`, "g");
    function escapeLinebreak(string3) {
      if (string3 === "\r\n")
        return CRLF_CONTROL_PICTURE;
      if (string3 === "\n")
        return LF_CONTROL_PICTURE;
      if (string3 === "\r")
        return CR_CONTROL_PICTURE;
      return string3;
    }
    function themeControlPictures(theme, resetWrap, str) {
      return str.replace(MATCH_CONTROL_PICTURES, (picture) => {
        return resetWrap.close + formatUtils.wrap(theme.string.controlPicture, picture) + resetWrap.open;
      });
    }
    var MATCH_SINGLE_QUOTE = /'/g;
    var MATCH_DOUBLE_QUOTE = /"/g;
    var MATCH_BACKTICKS = /`/g;
    function escapeQuotes(line, string3) {
      const quote = line.escapeQuote;
      if (quote === "'")
        return string3.replace(MATCH_SINGLE_QUOTE, "\\'");
      if (quote === '"')
        return string3.replace(MATCH_DOUBLE_QUOTE, '\\"');
      if (quote === "`")
        return string3.replace(MATCH_BACKTICKS, "\\`");
      return string3;
    }
    function includesLinebreaks(string3) {
      return string3.includes("\r") || string3.includes("\n");
    }
    function diffLine(theme, actual, expected, invert) {
      const outcome = fastDiff(actual, expected);
      const isPartiallyEqual = !(outcome.length === 2 && outcome[0][1] === actual && outcome[1][1] === expected || // Discount line ending control pictures, which will be equal even when the
      // rest of the line isn't.
      outcome.length === 3 && outcome[2][0] === fastDiff.EQUAL && MATCH_CONTROL_PICTURES.test(outcome[2][1]) && outcome[0][1] + outcome[2][1] === actual && outcome[1][1] + outcome[2][1] === expected);
      let stringActual = "";
      let stringExpected = "";
      const noopWrap = { open: "", close: "" };
      let deleteWrap = isPartiallyEqual ? theme.string.diff.delete : noopWrap;
      let insertWrap = isPartiallyEqual ? theme.string.diff.insert : noopWrap;
      const equalWrap = isPartiallyEqual ? theme.string.diff.equal : noopWrap;
      if (invert) {
        [deleteWrap, insertWrap] = [insertWrap, deleteWrap];
      }
      for (const diff2 of outcome) {
        if (diff2[0] === fastDiff.DELETE) {
          stringActual += formatUtils.wrap(deleteWrap, diff2[1]);
        } else if (diff2[0] === fastDiff.INSERT) {
          stringExpected += formatUtils.wrap(insertWrap, diff2[1]);
        } else {
          const string3 = formatUtils.wrap(equalWrap, themeControlPictures(theme, equalWrap, diff2[1]));
          stringActual += string3;
          stringExpected += string3;
        }
      }
      if (!isPartiallyEqual) {
        const deleteLineWrap = invert ? theme.string.diff.insertLine : theme.string.diff.deleteLine;
        const insertLineWrap = invert ? theme.string.diff.deleteLine : theme.string.diff.insertLine;
        stringActual = formatUtils.wrap(deleteLineWrap, stringActual);
        stringExpected = formatUtils.wrap(insertLineWrap, stringExpected);
      }
      return [stringActual, stringExpected];
    }
    var LINEBREAKS = /\r\n|\r|\n/g;
    function gatherLines(string3) {
      const lines = [];
      let prevIndex = 0;
      for (let match; match = LINEBREAKS.exec(string3); prevIndex = match.index + match[0].length) {
        lines.push(string3.slice(prevIndex, match.index) + escapeLinebreak(match[0]));
      }
      lines.push(string3.slice(prevIndex));
      return lines;
    }
    var StringValue = class {
      constructor(value) {
        this.value = value;
      }
      compare(expected) {
        return expected.tag === tag && this.value === expected.value ? DEEP_EQUAL : UNEQUAL;
      }
      get includesLinebreaks() {
        return includesLinebreaks(this.value);
      }
      formatDeep(theme, indent) {
        let escaped = basicEscape(this.value);
        if (!this.includesLinebreaks) {
          escaped = escapeQuotes(theme.string.line, escaped);
          return lineBuilder.single(formatUtils.wrap(theme.string.line, formatUtils.wrap(theme.string, escaped)));
        }
        escaped = escapeQuotes(theme.string.multiline, escaped);
        const lineStrings = gatherLines(escaped).map((string3) => {
          return formatUtils.wrap(theme.string, themeControlPictures(theme, theme.string, string3));
        });
        const lastIndex = lineStrings.length - 1;
        const indentation = indent;
        return lineBuilder.buffer().append(
          lineStrings.map((string3, index2) => {
            if (index2 === 0)
              return lineBuilder.first(theme.string.multiline.start + string3);
            if (index2 === lastIndex)
              return lineBuilder.last(indentation + string3 + theme.string.multiline.end);
            return lineBuilder.line(indentation + string3);
          })
        );
      }
      formatAsKey(theme) {
        const key = this.value;
        if (keyword.isIdentifierNameES6(key, true) || String(parseInt(key, 10)) === key) {
          return key;
        }
        const escaped = basicEscape(key).replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/'/g, "\\'");
        return formatUtils.wrap(theme.string.line, formatUtils.wrap(theme.string, escaped));
      }
      diffDeep(expected, theme, indent, invert) {
        if (expected.tag !== tag)
          return null;
        const escapedActual = basicEscape(this.value);
        const escapedExpected = basicEscape(expected.value);
        if (!includesLinebreaks(escapedActual) && !includesLinebreaks(escapedExpected)) {
          const result = diffLine(
            theme,
            escapeQuotes(theme.string.line, escapedActual),
            escapeQuotes(theme.string.line, escapedExpected),
            invert
          );
          return lineBuilder.actual.single(formatUtils.wrap(theme.string.line, result[0])).concat(lineBuilder.expected.single(formatUtils.wrap(theme.string.line, result[1])));
        }
        const actualLines = gatherLines(escapeQuotes(theme.string.multiline, escapedActual));
        const expectedLines = gatherLines(escapeQuotes(theme.string.multiline, escapedExpected));
        const indentation = indent;
        const lines = lineBuilder.buffer();
        const lastActualIndex = actualLines.length - 1;
        const lastExpectedIndex = expectedLines.length - 1;
        let actualBuffer = [];
        let expectedBuffer = [];
        let mustOpenNextExpected = false;
        for (let actualIndex = 0, expectedIndex = 0, extraneousOffset = 0; actualIndex < actualLines.length; ) {
          if (actualLines[actualIndex] === expectedLines[expectedIndex]) {
            lines.append(actualBuffer);
            lines.append(expectedBuffer);
            actualBuffer = [];
            expectedBuffer = [];
            let string3 = actualLines[actualIndex];
            string3 = themeControlPictures(theme, theme.string.diff.equal, string3);
            string3 = formatUtils.wrap(theme.string.diff.equal, string3);
            if (actualIndex === 0) {
              lines.append(lineBuilder.first(theme.string.multiline.start + string3));
            } else if (actualIndex === lastActualIndex && expectedIndex === lastExpectedIndex) {
              lines.append(lineBuilder.last(indentation + string3 + theme.string.multiline.end));
            } else {
              lines.append(lineBuilder.line(indentation + string3));
            }
            actualIndex++;
            expectedIndex++;
            continue;
          }
          let expectedIsMissing = false;
          {
            const compare = actualLines[actualIndex];
            for (let index2 = expectedIndex; !expectedIsMissing && index2 < expectedLines.length; index2++) {
              expectedIsMissing = compare === expectedLines[index2];
            }
          }
          let actualIsExtraneous = actualIndex - extraneousOffset > lastExpectedIndex || expectedIndex > lastExpectedIndex;
          if (!actualIsExtraneous) {
            const compare = expectedLines[expectedIndex];
            for (let index2 = actualIndex; !actualIsExtraneous && index2 < actualLines.length; index2++) {
              actualIsExtraneous = compare === actualLines[index2];
            }
            if (!actualIsExtraneous && actualIndex - extraneousOffset === lastExpectedIndex && actualIndex < lastActualIndex) {
              actualIsExtraneous = true;
            }
          }
          if (actualIsExtraneous && !expectedIsMissing) {
            const wrap = invert ? theme.string.diff.insertLine : theme.string.diff.deleteLine;
            const string3 = formatUtils.wrap(wrap, actualLines[actualIndex]);
            if (actualIndex === 0) {
              actualBuffer.push(lineBuilder.actual.first(theme.string.multiline.start + string3));
              mustOpenNextExpected = true;
            } else if (actualIndex === lastActualIndex) {
              actualBuffer.push(lineBuilder.actual.last(indentation + string3 + theme.string.multiline.end));
            } else {
              actualBuffer.push(lineBuilder.actual.line(indentation + string3));
            }
            actualIndex++;
            extraneousOffset++;
          } else if (expectedIsMissing && !actualIsExtraneous) {
            const wrap = invert ? theme.string.diff.deleteLine : theme.string.diff.insertLine;
            const string3 = formatUtils.wrap(wrap, expectedLines[expectedIndex]);
            if (mustOpenNextExpected) {
              expectedBuffer.push(lineBuilder.expected.first(theme.string.multiline.start + string3));
              mustOpenNextExpected = false;
            } else if (expectedIndex === lastExpectedIndex) {
              expectedBuffer.push(lineBuilder.expected.last(indentation + string3 + theme.string.multiline.end));
            } else {
              expectedBuffer.push(lineBuilder.expected.line(indentation + string3));
            }
            expectedIndex++;
          } else {
            const result = diffLine(theme, actualLines[actualIndex], expectedLines[expectedIndex], invert);
            if (actualIndex === 0) {
              actualBuffer.push(lineBuilder.actual.first(theme.string.multiline.start + result[0]));
              mustOpenNextExpected = true;
            } else if (actualIndex === lastActualIndex) {
              actualBuffer.push(lineBuilder.actual.last(indentation + result[0] + theme.string.multiline.end));
            } else {
              actualBuffer.push(lineBuilder.actual.line(indentation + result[0]));
            }
            if (mustOpenNextExpected) {
              expectedBuffer.push(lineBuilder.expected.first(theme.string.multiline.start + result[1]));
              mustOpenNextExpected = false;
            } else if (expectedIndex === lastExpectedIndex) {
              expectedBuffer.push(lineBuilder.expected.last(indentation + result[1] + theme.string.multiline.end));
            } else {
              expectedBuffer.push(lineBuilder.expected.line(indentation + result[1]));
            }
            actualIndex++;
            expectedIndex++;
          }
        }
        lines.append(actualBuffer);
        lines.append(expectedBuffer);
        return lines;
      }
      serialize() {
        return this.value;
      }
    };
    Object.defineProperty(StringValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(StringValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/complexValues/boxed.js
var require_boxed = __commonJS({
  "node_modules/concordance/lib/complexValues/boxed.js"(exports) {
    "use strict";
    var stringPrimitive = require_string().tag;
    var recursorUtils = require_recursorUtils();
    var object2 = require_object();
    function describe2(props) {
      return new DescribedBoxedValue(props);
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedBoxedValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("BoxedValue");
    exports.tag = tag;
    var BoxedValue = class extends object2.ObjectValue {
    };
    Object.defineProperty(BoxedValue.prototype, "tag", { value: tag });
    var DescribedBoxedValue = class extends object2.DescribedMixin(BoxedValue) {
      constructor(props) {
        super(props);
        this.unboxed = props.unboxed;
      }
      createListRecursor() {
        return recursorUtils.NOOP_RECURSOR;
      }
      createPropertyRecursor() {
        if (this.unboxed.tag !== stringPrimitive)
          return super.createPropertyRecursor();
        try {
          this.isList = true;
          return super.createPropertyRecursor();
        } finally {
          this.isList = false;
        }
      }
      createRecursor() {
        return recursorUtils.unshift(super.createRecursor(), this.unboxed);
      }
    };
    var DeserializedBoxedValue = object2.DeserializedMixin(BoxedValue);
  }
});

// node_modules/concordance/lib/complexValues/dataView.js
var require_dataView = __commonJS({
  "node_modules/concordance/lib/complexValues/dataView.js"(exports) {
    "use strict";
    var typedArray = require_typedArray();
    function describe2(props) {
      return new DescribedDataViewValue(Object.assign({
        buffer: typedArray.getBuffer(props.value),
        // Set isArray and isList so the property recursor excludes the byte accessors
        isArray: true,
        isList: true
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedDataViewValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("DataViewValue");
    exports.tag = tag;
    var DataViewValue = class extends typedArray.TypedArrayValue {
    };
    Object.defineProperty(DataViewValue.prototype, "tag", { value: tag });
    var DescribedDataViewValue = typedArray.DescribedMixin(DataViewValue);
    var DeserializedDataViewValue = typedArray.DeserializedMixin(DataViewValue);
  }
});

// node_modules/time-zone/index.js
var require_time_zone = __commonJS({
  "node_modules/time-zone/index.js"(exports, module2) {
    "use strict";
    module2.exports = (date) => {
      const offset = (date || /* @__PURE__ */ new Date()).getTimezoneOffset();
      const absOffset = Math.abs(offset);
      const hours = Math.floor(absOffset / 60);
      const minutes = absOffset % 60;
      const minutesOut = minutes > 0 ? ":" + ("0" + minutes).slice(-2) : "";
      return (offset < 0 ? "+" : "-") + hours + minutesOut;
    };
  }
});

// node_modules/date-time/index.js
var require_date_time = __commonJS({
  "node_modules/date-time/index.js"(exports, module2) {
    "use strict";
    var timeZone = require_time_zone();
    var dateTime = (options) => {
      options = Object.assign({
        date: /* @__PURE__ */ new Date(),
        local: true,
        showTimeZone: false,
        showMilliseconds: false
      }, options);
      let { date } = options;
      if (options.local) {
        date = new Date(date.getTime() - date.getTimezoneOffset() * 6e4);
      }
      let end = "";
      if (options.showTimeZone) {
        end = " UTC" + (options.local ? timeZone(date) : "");
      }
      if (options.showMilliseconds && date.getUTCMilliseconds() > 0) {
        end = ` ${date.getUTCMilliseconds()}ms${end}`;
      }
      return date.toISOString().replace(/T/, " ").replace(/\..+/, end);
    };
    module2.exports = dateTime;
    module2.exports.default = dateTime;
  }
});

// node_modules/concordance/lib/complexValues/date.js
var require_date = __commonJS({
  "node_modules/concordance/lib/complexValues/date.js"(exports) {
    "use strict";
    var dateTime = require_date_time();
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var object2 = require_object();
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      const date = props.value;
      const invalid = isNaN(date.valueOf());
      return new DescribedDateValue(Object.assign({}, props, { invalid }));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedDateValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("DateValue");
    exports.tag = tag;
    function formatDate(date) {
      return dateTime({
        date,
        local: false,
        showTimeZone: true,
        showMilliseconds: true
      });
    }
    var DateValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.invalid = props.invalid;
      }
      compare(expected) {
        const result = super.compare(expected);
        if (result !== SHALLOW_EQUAL)
          return result;
        return this.invalid && expected.invalid || Object.is(this.value.getTime(), expected.value.getTime()) ? SHALLOW_EQUAL : UNEQUAL;
      }
      formatShallow(theme, indent) {
        const string3 = formatUtils.formatCtorAndStringTag(theme, this) + " " + (this.invalid ? theme.date.invalid : formatUtils.wrap(theme.date.value, formatDate(this.value))) + " " + theme.object.openBracket;
        return super.formatShallow(theme, indent).customize({
          finalize(innerLines) {
            return innerLines.isEmpty ? lineBuilder.single(string3 + theme.object.closeBracket) : lineBuilder.first(string3).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder.last(indent + theme.object.closeBracket));
          },
          maxDepth() {
            return lineBuilder.single(string3 + " " + theme.maxDepth + " " + theme.object.closeBracket);
          }
        });
      }
      serialize() {
        const iso = this.invalid ? null : this.value.toISOString();
        return [this.invalid, iso, super.serialize()];
      }
    };
    Object.defineProperty(DateValue.prototype, "tag", { value: tag });
    var DescribedDateValue = object2.DescribedMixin(DateValue);
    var DeserializedDateValue = class extends object2.DeserializedMixin(DateValue) {
      constructor(state, recursor) {
        super(state[2], recursor);
        this.invalid = state[0];
        this.value = new Date(this.invalid ? NaN : state[1]);
      }
    };
  }
});

// node_modules/concordance/lib/isEnumerable.js
var require_isEnumerable = __commonJS({
  "node_modules/concordance/lib/isEnumerable.js"(exports, module2) {
    "use strict";
    function isEnumerable(obj, key) {
      const desc = Object.getOwnPropertyDescriptor(obj, key);
      return desc && desc.enumerable;
    }
    module2.exports = isEnumerable;
  }
});

// node_modules/concordance/lib/complexValues/error.js
var require_error = __commonJS({
  "node_modules/concordance/lib/complexValues/error.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var isEnumerable = require_isEnumerable();
    var lineBuilder = require_lineBuilder();
    var NOOP_RECURSOR = require_recursorUtils().NOOP_RECURSOR;
    var object2 = require_object();
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      const error = props.value;
      return new DescribedErrorValue(Object.assign({
        nameIsEnumerable: isEnumerable(error, "name"),
        name: error.name,
        messageIsEnumerable: isEnumerable(error, "message"),
        message: error.message
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedErrorValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("ErrorValue");
    exports.tag = tag;
    var ErrorValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.name = props.name;
      }
      compare(expected) {
        return this.tag === expected.tag && this.name === expected.name ? super.compare(expected) : UNEQUAL;
      }
      formatShallow(theme, indent) {
        const name = this.name || this.ctor;
        let string3 = name ? formatUtils.wrap(theme.error.name, name) : formatUtils.wrap(theme.object.stringTag, this.stringTag);
        if (this.ctor && this.ctor !== name) {
          string3 += " " + formatUtils.wrap(theme.error.ctor, this.ctor);
        }
        if (this.stringTag && this.stringTag !== this.ctor && this.name && !this.name.includes(this.stringTag)) {
          string3 += " " + formatUtils.wrap(theme.object.secondaryStringTag, this.stringTag);
        }
        string3 += " " + theme.object.openBracket;
        return super.formatShallow(theme, indent).customize({
          finalize(innerLines) {
            return innerLines.isEmpty ? lineBuilder.single(string3 + theme.object.closeBracket) : lineBuilder.first(string3).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder.last(indent + theme.object.closeBracket));
          },
          maxDepth() {
            return lineBuilder.single(string3 + " " + theme.maxDepth + " " + theme.object.closeBracket);
          }
        });
      }
      serialize() {
        return [this.name, super.serialize()];
      }
    };
    Object.defineProperty(ErrorValue.prototype, "tag", { value: tag });
    var DescribedErrorValue = class extends object2.DescribedMixin(ErrorValue) {
      constructor(props) {
        super(props);
        this.nameIsEnumerable = props.nameIsEnumerable;
        this.messageIsEnumerable = props.messageIsEnumerable;
        this.message = props.message;
      }
      createPropertyRecursor() {
        const recursor = super.createPropertyRecursor();
        let skipName = this.nameIsEnumerable;
        let emitMessage = !this.messageIsEnumerable;
        let size = recursor.size;
        if (skipName && size > 0) {
          size -= 1;
        }
        if (emitMessage) {
          size += 1;
        }
        if (size === 0)
          return NOOP_RECURSOR;
        let done = false;
        const next = () => {
          if (done)
            return null;
          const property = recursor.next();
          if (property) {
            if (skipName && property.key.value === "name") {
              skipName = false;
              return next();
            }
            return property;
          }
          if (emitMessage) {
            emitMessage = false;
            return this.describeProperty("message", this.describeAny(this.message));
          }
          done = true;
          return null;
        };
        return { size, next };
      }
    };
    var DeserializedErrorValue = class extends object2.DeserializedMixin(ErrorValue) {
      constructor(state, recursor) {
        super(state[1], recursor);
        this.name = state[0];
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/function.js
var require_function = __commonJS({
  "node_modules/concordance/lib/complexValues/function.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var isEnumerable = require_isEnumerable();
    var lineBuilder = require_lineBuilder();
    var NOOP_RECURSOR = require_recursorUtils().NOOP_RECURSOR;
    var object2 = require_object();
    var UNEQUAL = constants.UNEQUAL;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    function describe2(props) {
      const fn2 = props.value;
      return new DescribedFunctionValue(Object.assign({
        nameIsEnumerable: isEnumerable(fn2, "name"),
        name: typeof fn2.name === "string" ? fn2.name : null
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedFunctionValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("FunctionValue");
    exports.tag = tag;
    var FunctionValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.name = props.name;
      }
      formatShallow(theme, indent) {
        const string3 = formatUtils.wrap(theme.function.stringTag, this.stringTag) + (this.name ? " " + formatUtils.wrap(theme.function.name, this.name) : "") + " " + theme.object.openBracket;
        return super.formatShallow(theme, indent).customize({
          finalize(innerLines) {
            return innerLines.isEmpty ? lineBuilder.single(string3 + theme.object.closeBracket) : lineBuilder.first(string3).concat(innerLines.withFirstPrefixed(indent.increase()).stripFlags()).append(lineBuilder.last(indent + theme.object.closeBracket));
          },
          maxDepth() {
            return lineBuilder.single(string3 + " " + theme.maxDepth + " " + theme.object.closeBracket);
          }
        });
      }
    };
    Object.defineProperty(FunctionValue.prototype, "tag", { value: tag });
    var DescribedFunctionValue = class extends object2.DescribedMixin(FunctionValue) {
      constructor(props) {
        super(props);
        this.nameIsEnumerable = props.nameIsEnumerable;
      }
      compare(expected) {
        if (this.tag !== expected.tag)
          return UNEQUAL;
        if (this.name !== expected.name)
          return UNEQUAL;
        if (this.value && expected.value && this.value !== expected.value)
          return UNEQUAL;
        return super.compare(expected);
      }
      createPropertyRecursor() {
        const recursor = super.createPropertyRecursor();
        const skipName = this.nameIsEnumerable;
        if (!skipName)
          return recursor;
        let size = recursor.size;
        if (skipName) {
          size -= 1;
        }
        if (size === 0)
          return NOOP_RECURSOR;
        const next = () => {
          const property = recursor.next();
          if (property) {
            if (skipName && property.key.value === "name") {
              return next();
            }
            return property;
          }
          return null;
        };
        return { size, next };
      }
      serialize() {
        return [this.name, super.serialize()];
      }
    };
    var DeserializedFunctionValue = class extends object2.DeserializedMixin(FunctionValue) {
      constructor(state, recursor) {
        super(state[1], recursor);
        this.name = state[0];
      }
      compare(expected) {
        if (this.tag !== expected.tag)
          return UNEQUAL;
        if (this.name !== expected.name)
          return UNEQUAL;
        if (this.stringTag !== expected.stringTag)
          return UNEQUAL;
        return SHALLOW_EQUAL;
      }
      serialize() {
        return [this.name, super.serialize()];
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/global.js
var require_global = __commonJS({
  "node_modules/concordance/lib/complexValues/global.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2() {
      return new GlobalValue();
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("GlobalValue");
    exports.tag = tag;
    var GlobalValue = class {
      compare(expected) {
        return this.tag === expected.tag ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        return lineBuilder.single(
          formatUtils.wrap(theme.global, "Global") + " " + theme.object.openBracket + theme.object.closeBracket
        );
      }
    };
    Object.defineProperty(GlobalValue.prototype, "isComplex", { value: true });
    Object.defineProperty(GlobalValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/complexValues/map.js
var require_map = __commonJS({
  "node_modules/concordance/lib/complexValues/map.js"(exports) {
    "use strict";
    var constants = require_constants();
    var recursorUtils = require_recursorUtils();
    var object2 = require_object();
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      return new DescribedMapValue(Object.assign({
        size: props.value.size
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedMapValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("MapValue");
    exports.tag = tag;
    var MapValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.size = props.size;
      }
      compare(expected) {
        const result = super.compare(expected);
        if (result !== SHALLOW_EQUAL)
          return result;
        return this.size === expected.size ? SHALLOW_EQUAL : UNEQUAL;
      }
      prepareDiff(expected) {
        return { compareResult: super.compare(expected) };
      }
      serialize() {
        return [this.size, super.serialize()];
      }
    };
    Object.defineProperty(MapValue.prototype, "tag", { value: tag });
    var DescribedMapValue = class extends object2.DescribedMixin(MapValue) {
      createIterableRecursor() {
        const size = this.size;
        if (size === 0)
          return recursorUtils.NOOP_RECURSOR;
        let index2 = 0;
        let entries;
        const next = () => {
          if (index2 === size)
            return null;
          if (!entries) {
            entries = Array.from(this.value);
          }
          const entry = entries[index2++];
          return this.describeMapEntry(this.describeAny(entry[0]), this.describeAny(entry[1]));
        };
        return { size, next };
      }
    };
    var DeserializedMapValue = class extends object2.DeserializedMixin(MapValue) {
      constructor(state, recursor) {
        super(state[1], recursor);
        this.size = state[0];
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/promise.js
var require_promise = __commonJS({
  "node_modules/concordance/lib/complexValues/promise.js"(exports) {
    "use strict";
    var constants = require_constants();
    var object2 = require_object();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      return new DescribedPromiseValue(props);
    }
    exports.describe = describe2;
    function deserialize(props) {
      return new DeserializedPromiseValue(props);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("PromiseValue");
    exports.tag = tag;
    var PromiseValue = class extends object2.ObjectValue {
    };
    Object.defineProperty(PromiseValue.prototype, "tag", { value: tag });
    var DescribedPromiseValue = class extends object2.DescribedMixin(PromiseValue) {
      compare(expected) {
        return super.compare(expected) === DEEP_EQUAL ? DEEP_EQUAL : UNEQUAL;
      }
    };
    var DeserializedPromiseValue = class extends object2.DeserializedMixin(PromiseValue) {
      compare(expected) {
        return super.compare(expected);
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/regexp.js
var require_regexp = __commonJS({
  "node_modules/concordance/lib/complexValues/regexp.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var object2 = require_object();
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      const regexp = props.value;
      return new DescribedRegexpValue(Object.assign({
        flags: getSortedFlags(regexp),
        source: regexp.source
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedRegexpValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("RegexpValue");
    exports.tag = tag;
    function getSortedFlags(regexp) {
      const flags = regexp.flags || String(regexp).slice(regexp.source.length + 2);
      return flags.split("").sort().join("");
    }
    var RegexpValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.flags = props.flags;
        this.source = props.source;
      }
      compare(expected) {
        return this.tag === expected.tag && this.flags === expected.flags && this.source === expected.source ? super.compare(expected) : UNEQUAL;
      }
      formatShallow(theme, indent) {
        const ctor = this.ctor || this.stringTag;
        const regexp = formatUtils.wrap(theme.regexp.source, this.source) + formatUtils.wrap(theme.regexp.flags, this.flags);
        return super.formatShallow(theme, indent).customize({
          finalize: (innerLines) => {
            if (ctor === "RegExp" && innerLines.isEmpty)
              return lineBuilder.single(regexp);
            const innerIndentation = indent.increase();
            const header = lineBuilder.first(formatUtils.formatCtorAndStringTag(theme, this) + " " + theme.object.openBracket).concat(lineBuilder.line(innerIndentation + regexp));
            if (!innerLines.isEmpty) {
              header.append(lineBuilder.line(innerIndentation + theme.regexp.separator));
              header.append(innerLines.withFirstPrefixed(innerIndentation).stripFlags());
            }
            return header.append(lineBuilder.last(indent + theme.object.closeBracket));
          },
          maxDepth: () => {
            return lineBuilder.single(
              formatUtils.formatCtorAndStringTag(theme, this) + " " + theme.object.openBracket + " " + regexp + " " + theme.maxDepth + " " + theme.object.closeBracket
            );
          }
        });
      }
      serialize() {
        return [this.flags, this.source, super.serialize()];
      }
    };
    Object.defineProperty(RegexpValue.prototype, "tag", { value: tag });
    var DescribedRegexpValue = object2.DescribedMixin(RegexpValue);
    var DeserializedRegexpValue = class extends object2.DeserializedMixin(RegexpValue) {
      constructor(state, recursor) {
        super(state[2], recursor);
        this.flags = state[0];
        this.source = state[1];
      }
    };
  }
});

// node_modules/concordance/lib/complexValues/set.js
var require_set = __commonJS({
  "node_modules/concordance/lib/complexValues/set.js"(exports) {
    "use strict";
    var constants = require_constants();
    var recursorUtils = require_recursorUtils();
    var object2 = require_object();
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(props) {
      return new DescribedSetValue(Object.assign({
        size: props.value.size
      }, props));
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      return new DeserializedSetValue(state, recursor);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("SetValue");
    exports.tag = tag;
    var SetValue = class extends object2.ObjectValue {
      constructor(props) {
        super(props);
        this.size = props.size;
      }
      compare(expected) {
        const result = super.compare(expected);
        if (result !== SHALLOW_EQUAL)
          return result;
        return this.size === expected.size ? SHALLOW_EQUAL : UNEQUAL;
      }
      prepareDiff(expected) {
        return { compareResult: super.compare(expected) };
      }
      serialize() {
        return [this.size, super.serialize()];
      }
    };
    Object.defineProperty(SetValue.prototype, "tag", { value: tag });
    var DescribedSetValue = class extends object2.DescribedMixin(SetValue) {
      createIterableRecursor() {
        const size = this.size;
        if (size === 0)
          return recursorUtils.NOOP_RECURSOR;
        let index2 = 0;
        let members;
        const next = () => {
          if (index2 === size)
            return null;
          if (!members) {
            members = Array.from(this.value);
          }
          const value = members[index2];
          return this.describeItem(index2++, this.describeAny(value));
        };
        return { size, next };
      }
    };
    var DeserializedSetValue = class extends object2.DeserializedMixin(SetValue) {
      constructor(state, recursor) {
        super(state[1], recursor);
        this.size = state[0];
      }
    };
  }
});

// node_modules/concordance/lib/getCtor.js
var require_getCtor = __commonJS({
  "node_modules/concordance/lib/getCtor.js"(exports, module2) {
    "use strict";
    var hop = Object.prototype.hasOwnProperty;
    function getCtor(stringTag, value) {
      if (value.constructor) {
        const name = value.constructor.name;
        return typeof name === "string" && name !== "" ? name : null;
      }
      if (value.constructor === void 0) {
        if (stringTag !== "Object" || value instanceof Object)
          return null;
        for (var p in value) {
          if (!hop.call(value, p))
            return null;
        }
        return stringTag;
      }
      return null;
    }
    module2.exports = getCtor;
  }
});

// node_modules/concordance/lib/getStringTag.js
var require_getStringTag = __commonJS({
  "node_modules/concordance/lib/getStringTag.js"(exports, module2) {
    "use strict";
    var ts = Object.prototype.toString;
    function getStringTag(value) {
      return ts.call(value).slice(8, -1);
    }
    var fts = Function.prototype.toString;
    var promiseCtorString = fts.call(Promise);
    var isPromise = (value) => {
      if (!value.constructor)
        return false;
      try {
        return fts.call(value.constructor) === promiseCtorString;
      } catch {
        return false;
      }
    };
    if (getStringTag(Promise.resolve()) === "Promise") {
      module2.exports = getStringTag;
    } else {
      const getStringTagWithPromiseWorkaround = (value) => {
        const stringTag = getStringTag(value);
        return stringTag === "Object" && isPromise(value) ? "Promise" : stringTag;
      };
      module2.exports = getStringTagWithPromiseWorkaround;
    }
  }
});

// node_modules/concordance/lib/metaDescriptors/item.js
var require_item = __commonJS({
  "node_modules/concordance/lib/metaDescriptors/item.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var recursorUtils = require_recursorUtils();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describeComplex(index2, value) {
      return new ComplexItem(index2, value);
    }
    exports.describeComplex = describeComplex;
    function deserializeComplex(index2, recursor) {
      const value = recursor();
      return new ComplexItem(index2, value);
    }
    exports.deserializeComplex = deserializeComplex;
    function describePrimitive(index2, value) {
      return new PrimitiveItem(index2, value);
    }
    exports.describePrimitive = describePrimitive;
    function deserializePrimitive(state) {
      const index2 = state[0];
      const value = state[1];
      return new PrimitiveItem(index2, value);
    }
    exports.deserializePrimitive = deserializePrimitive;
    var complexTag = Symbol("ComplexItem");
    exports.complexTag = complexTag;
    var primitiveTag = Symbol("PrimitiveItem");
    exports.primitiveTag = primitiveTag;
    var ComplexItem = class {
      constructor(index2, value) {
        this.index = index2;
        this.value = value;
      }
      createRecursor() {
        return recursorUtils.singleValue(this.value);
      }
      compare(expected) {
        return expected.tag === complexTag && this.index === expected.index ? this.value.compare(expected.value) : UNEQUAL;
      }
      formatShallow(theme, indent) {
        const increaseValueIndent = theme.item.increaseValueIndent === true;
        return new formatUtils.SingleValueFormatter(theme, (value) => {
          if (typeof theme.item.customFormat === "function") {
            return theme.item.customFormat(theme, indent, value);
          }
          return value.withLastPostfixed(theme.item.after);
        }, increaseValueIndent);
      }
      prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape, isCircular) {
        if (isCircular(this.value) || isCircular(expected.value))
          return { compareResult: UNEQUAL };
        const lhsFork = recursorUtils.fork(lhsRecursor);
        const rhsFork = recursorUtils.fork(rhsRecursor);
        const initialExpected = expected;
        let expectedIsMissing = false;
        while (!expectedIsMissing && expected !== null && expected.isItem === true) {
          if (expected.tag === complexTag) {
            expectedIsMissing = compareComplexShape(this.value, expected.value) !== UNEQUAL;
          }
          expected = rhsFork.shared();
        }
        let actualIsExtraneous = false;
        if (initialExpected.tag === complexTag) {
          let actual = this;
          while (!actualIsExtraneous && actual !== null && actual.isItem === true) {
            if (actual.tag === complexTag) {
              actualIsExtraneous = compareComplexShape(actual.value, initialExpected.value) !== UNEQUAL;
            }
            actual = lhsFork.shared();
          }
        } else if (initialExpected.tag === primitiveTag) {
          let actual = this;
          while (!actualIsExtraneous && actual !== null && actual.isItem === true) {
            if (actual.tag === primitiveTag) {
              actualIsExtraneous = initialExpected.value.compare(actual.value) === DEEP_EQUAL;
            }
            actual = lhsFork.shared();
          }
        }
        if (actualIsExtraneous && !expectedIsMissing) {
          return {
            actualIsExtraneous: true,
            lhsRecursor: lhsFork.recursor,
            rhsRecursor: recursorUtils.map(
              recursorUtils.unshift(rhsFork.recursor, initialExpected),
              (next) => {
                if (next.isItem !== true)
                  return next;
                next.index++;
                return next;
              }
            )
          };
        }
        if (expectedIsMissing && !actualIsExtraneous) {
          return {
            expectedIsMissing: true,
            lhsRecursor: recursorUtils.map(
              recursorUtils.unshift(lhsFork.recursor, this),
              (next) => {
                if (next.isItem !== true)
                  return next;
                next.index++;
                return next;
              }
            ),
            rhsRecursor: rhsFork.recursor
          };
        }
        const mustRecurse = this.tag === complexTag && initialExpected.tag === complexTag && this.value.compare(initialExpected.value) !== UNEQUAL;
        return {
          mustRecurse,
          isUnequal: !mustRecurse,
          lhsRecursor: lhsFork.recursor,
          rhsRecursor: rhsFork.recursor
        };
      }
      serialize() {
        return this.index;
      }
    };
    Object.defineProperty(ComplexItem.prototype, "isItem", { value: true });
    Object.defineProperty(ComplexItem.prototype, "tag", { value: complexTag });
    var PrimitiveItem = class {
      constructor(index2, value) {
        this.index = index2;
        this.value = value;
      }
      compare(expected) {
        return expected.tag === primitiveTag && this.index === expected.index ? this.value.compare(expected.value) : UNEQUAL;
      }
      formatDeep(theme, indent) {
        const increaseValueIndent = theme.item.increaseValueIndent === true;
        const valueIndent = increaseValueIndent ? indent.increase() : indent;
        const formatted = this.value.formatDeep(theme, valueIndent);
        if (typeof theme.item.customFormat === "function") {
          return theme.item.customFormat(theme, indent, formatted);
        }
        return formatted.withLastPostfixed(theme.item.after);
      }
      prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape, isCircular) {
        const compareResult = this.compare(expected);
        if (compareResult === DEEP_EQUAL)
          return { compareResult };
        if (expected.tag === primitiveTag && this.value.tag === expected.value.tag && typeof this.value.diffDeep === "function") {
          return { compareResult };
        }
        const rhsFork = recursorUtils.fork(rhsRecursor);
        const initialExpected = expected;
        do {
          if (expected === null || expected.isItem !== true) {
            return {
              actualIsExtraneous: true,
              rhsRecursor: recursorUtils.map(
                recursorUtils.unshift(rhsFork.recursor, initialExpected),
                (next) => {
                  if (next.isItem !== true)
                    return next;
                  next.index++;
                  return next;
                }
              )
            };
          }
          if (this.value.compare(expected.value) === DEEP_EQUAL) {
            return {
              expectedIsMissing: true,
              lhsRecursor: recursorUtils.map(
                recursorUtils.unshift(lhsRecursor, this),
                (next) => {
                  if (next.isItem !== true)
                    return next;
                  next.index++;
                  return next;
                }
              ),
              rhsRecursor: rhsFork.recursor
            };
          }
          expected = rhsFork.shared();
        } while (true);
      }
      diffDeep(expected, theme, indent, invert) {
        if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
          return null;
        const increaseValueIndent = theme.property.increaseValueIndent === true;
        const valueIndent = increaseValueIndent ? indent.increase() : indent;
        const diff2 = this.value.diffDeep(expected.value, theme, valueIndent, invert);
        if (diff2 === null)
          return null;
        if (typeof theme.item.customFormat === "function") {
          return theme.item.customFormat(theme, indent, diff2);
        }
        return diff2.withLastPostfixed(theme.item.after);
      }
      serialize() {
        return [this.index, this.value];
      }
    };
    Object.defineProperty(PrimitiveItem.prototype, "isItem", { value: true });
    Object.defineProperty(PrimitiveItem.prototype, "tag", { value: primitiveTag });
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module2) {
    function eq2(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq2;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    var eq2 = require_eq();
    function assocIndexOf(array2, key) {
      var length = array2.length;
      while (length--) {
        if (eq2(array2[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module2) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module2) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject4(value) {
      var type2 = typeof value;
      return value != null && (type2 == "object" || type2 == "function");
    }
    module2.exports = isObject4;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject4 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject4(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject4 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject4(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module2) {
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module2) {
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module2) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module2) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module2) {
    function arrayEach(array2, iteratee) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (iteratee(array2[index2], index2, array2) === false) {
          break;
        }
      }
      return array2;
    }
    module2.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module2) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module2.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module2) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object2, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object2, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object2[key] = value;
      }
    }
    module2.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object2, key, value) {
      var objValue = object2[key];
      if (!(hasOwnProperty.call(object2, key) && eq2(objValue, value)) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    module2.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module2) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object2, customizer) {
      var isNew = !object2;
      object2 || (object2 = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object2, key, newValue);
        } else {
          assignValue(object2, key, newValue);
        }
      }
      return object2;
    }
    module2.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module2) {
    function baseTimes(n2, iteratee) {
      var index2 = -1, result = Array(n2);
      while (++index2 < n2) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module2) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module2) {
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module2) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type2 = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module2) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module2) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module2) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module2) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module2) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module2) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2);
      }
      var result = [];
      for (var key in Object(object2)) {
        if (hasOwnProperty.call(object2, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys2(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    module2.exports = keys2;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keys2 = require_keys();
    function baseAssign(object2, source) {
      return object2 && copyObject(source, keys2(source), object2);
    }
    module2.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module2) {
    function nativeKeysIn(object2) {
      var result = [];
      if (object2 != null) {
        for (var key in Object(object2)) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module2) {
    var isObject4 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object2) {
      if (!isObject4(object2)) {
        return nativeKeysIn(object2);
      }
      var isProto = isPrototype(object2), result = [];
      for (var key in object2) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object2, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
    }
    module2.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object2, source) {
      return object2 && copyObject(source, keysIn(source), object2);
    }
    module2.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module2) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module2) {
    function copyArray(source, array2) {
      var index2 = -1, length = source.length;
      array2 || (array2 = Array(length));
      while (++index2 < length) {
        array2[index2] = source[index2];
      }
      return array2;
    }
    module2.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module2) {
    function arrayFilter(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array2[index2];
        if (predicate(value, index2, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module2) {
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module2) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
      if (object2 == null) {
        return [];
      }
      object2 = Object(object2);
      return arrayFilter(nativeGetSymbols(object2), function(symbol) {
        return propertyIsEnumerable.call(object2, symbol);
      });
    };
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object2) {
      return copyObject(source, getSymbols(source), object2);
    }
    module2.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module2) {
    function arrayPush(array2, values) {
      var index2 = -1, length = values.length, offset = array2.length;
      while (++index2 < length) {
        array2[offset + index2] = values[index2];
      }
      return array2;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module2) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object2) {
      var result = [];
      while (object2) {
        arrayPush(result, getSymbols(object2));
        object2 = getPrototype(object2);
      }
      return result;
    };
    module2.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object2) {
      return copyObject(source, getSymbolsIn(source), object2);
    }
    module2.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result = keysFunc(object2);
      return isArray(object2) ? result : arrayPush(result, symbolsFunc(object2));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys2 = require_keys();
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys2, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object2) {
      return baseGetAllKeys(object2, keysIn, getSymbolsIn);
    }
    module2.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module2.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module2.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module2) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module2.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module2) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array2) {
      var length = array2.length, result = new array2.constructor(length);
      if (length && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
        result.index = array2.index;
        result.input = array2.input;
      }
      return result;
    }
    module2.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module2) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module2.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module2.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module2) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module2.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module2.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module2.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object2, tag, isDeep) {
      var Ctor = object2.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object2);
        case boolTag:
        case dateTag:
          return new Ctor(+object2);
        case dataViewTag:
          return cloneDataView(object2, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object2, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object2);
        case regexpTag:
          return cloneRegExp(object2);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object2);
      }
    }
    module2.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module2) {
    var isObject4 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object2() {
      }
      return function(proto) {
        if (!isObject4(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object2.prototype = proto;
        var result = new object2();
        object2.prototype = void 0;
        return result;
      };
    }();
    module2.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module2) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
    }
    module2.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module2.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module2) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module2.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module2.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module2) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module2.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module2) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject4 = require_isObject();
    var isSet = require_isSet();
    var keys2 = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object2, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object2 ? customizer(value, key, object2, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject4(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object2) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object2 ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys2;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module2.exports = baseClone;
  }
});

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module2) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module2.exports = cloneDeep;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    function assignMergeValue(object2, key, value) {
      if (value !== void 0 && !eq2(object2[key], value) || value === void 0 && !(key in object2)) {
        baseAssignValue(object2, key, value);
      }
    }
    module2.exports = assignMergeValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module2) {
    function createBaseFor(fromRight) {
      return function(object2, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object2;
      };
    }
    module2.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module2) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module2.exports = baseFor;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module2) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module2.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module2) {
    function safeGet(object2, key) {
      if (key === "constructor" && typeof object2[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object2[key];
    }
    module2.exports = safeGet;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module2.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module2) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject4 = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object2, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject4(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object2, key, newValue);
    }
    module2.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module2) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject4 = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object2, source, srcIndex, customizer, stack) {
      if (object2 === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject4(srcValue)) {
          baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object2, key, newValue);
        }
      }, keysIn);
    }
    module2.exports = baseMerge;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module2) {
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module2) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module2.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module2) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array2 = Array(length);
        while (++index2 < length) {
          array2[index2] = args[start + index2];
        }
        index2 = -1;
        var otherArgs = Array(start + 1);
        while (++index2 < start) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start] = transform(array2);
        return apply(func, this, otherArgs);
      };
    }
    module2.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module2) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module2.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module2) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string3) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string3),
        "writable": true
      });
    };
    module2.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module2) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module2.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module2) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module2.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module2) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    module2.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module2) {
    var eq2 = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject4 = require_isObject();
    function isIterateeCall(value, index2, object2) {
      if (!isObject4(object2)) {
        return false;
      }
      var type2 = typeof index2;
      if (type2 == "number" ? isArrayLike(object2) && isIndex(index2, object2.length) : type2 == "string" && index2 in object2) {
        return eq2(object2[index2], value);
      }
      return false;
    }
    module2.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module2) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object2, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object2 = Object(object2);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object2, source, index2, customizer);
          }
        }
        return object2;
      });
    }
    module2.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module2) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge = createAssigner(function(object2, source, srcIndex) {
      baseMerge(object2, source, srcIndex);
    });
    module2.exports = merge;
  }
});

// node_modules/concordance/node_modules/semver/internal/constants.js
var require_constants2 = __commonJS({
  "node_modules/concordance/node_modules/semver/internal/constants.js"(exports, module2) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/concordance/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/concordance/node_modules/semver/internal/debug.js"(exports, module2) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/concordance/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/concordance/node_modules/semver/internal/re.js"(exports, module2) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants2();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R2 = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index2 = R2++;
      debug(name, index2, value);
      t[name] = index2;
      src[index2] = value;
      re[index2] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/concordance/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/concordance/node_modules/semver/internal/parse-options.js"(exports, module2) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/concordance/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/concordance/node_modules/semver/internal/identifiers.js"(exports, module2) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b2) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b2);
      if (anum && bnum) {
        a = +a;
        b2 = +b2;
      }
      return a === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b2 ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b2) => compareIdentifiers(b2, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/concordance/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/concordance/node_modules/semver/classes/semver.js"(exports, module2) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants2();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class {
      constructor(version2, options) {
        options = parseOptions(options);
        if (version2 instanceof SemVer) {
          if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version2, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m2 = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m2) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m2[1];
        this.minor = +m2[2];
        this.patch = +m2[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m2[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m2[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m2[5] ? m2[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i2 = 0;
        do {
          const a = this.prerelease[i2];
          const b2 = other.prerelease[i2];
          debug("prerelease compare", i2, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i2);
      }
      compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        let i2 = 0;
        do {
          const a = this.build[i2];
          const b2 = other.build[i2];
          debug("prerelease compare", i2, a, b2);
          if (a === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b2) {
            continue;
          } else {
            return compareIdentifiers(a, b2);
          }
        } while (++i2);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i2 = this.prerelease.length;
              while (--i2 >= 0) {
                if (typeof this.prerelease[i2] === "number") {
                  this.prerelease[i2]++;
                  i2 = -2;
                }
              }
              if (i2 === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/concordance/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/parse.js"(exports, module2) {
    var SemVer = require_semver();
    var parse2 = (version2, options, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse2;
  }
});

// node_modules/concordance/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/valid.js"(exports, module2) {
    var parse2 = require_parse();
    var valid = (version2, options) => {
      const v = parse2(version2, options);
      return v ? v.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/concordance/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/clean.js"(exports, module2) {
    var parse2 = require_parse();
    var clean = (version2, options) => {
      const s = parse2(version2.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/concordance/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/inc.js"(exports, module2) {
    var SemVer = require_semver();
    var inc = (version2, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version2 instanceof SemVer ? version2.version : version2,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/concordance/node_modules/semver/functions/diff.js
var require_diff2 = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/diff.js"(exports, module2) {
    var parse2 = require_parse();
    var diff2 = (version1, version2) => {
      const v1 = parse2(version1, null, true);
      const v2 = parse2(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (highVersion.patch) {
          return "patch";
        }
        if (highVersion.minor) {
          return "minor";
        }
        return "major";
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff2;
  }
});

// node_modules/concordance/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/major.js"(exports, module2) {
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/concordance/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/minor.js"(exports, module2) {
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/concordance/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/patch.js"(exports, module2) {
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/concordance/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/prerelease.js"(exports, module2) {
    var parse2 = require_parse();
    var prerelease = (version2, options) => {
      const parsed = parse2(version2, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/concordance/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/compare.js"(exports, module2) {
    var SemVer = require_semver();
    var compare = (a, b2, loose) => new SemVer(a, loose).compare(new SemVer(b2, loose));
    module2.exports = compare;
  }
});

// node_modules/concordance/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/rcompare.js"(exports, module2) {
    var compare = require_compare();
    var rcompare = (a, b2, loose) => compare(b2, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/concordance/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/compare-loose.js"(exports, module2) {
    var compare = require_compare();
    var compareLoose = (a, b2) => compare(a, b2, true);
    module2.exports = compareLoose;
  }
});

// node_modules/concordance/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/compare-build.js"(exports, module2) {
    var SemVer = require_semver();
    var compareBuild = (a, b2, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b2, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/concordance/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/sort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var sort2 = (list, loose) => list.sort((a, b2) => compareBuild(a, b2, loose));
    module2.exports = sort2;
  }
});

// node_modules/concordance/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/rsort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b2) => compareBuild(b2, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/concordance/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/gt.js"(exports, module2) {
    var compare = require_compare();
    var gt = (a, b2, loose) => compare(a, b2, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/concordance/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/lt.js"(exports, module2) {
    var compare = require_compare();
    var lt = (a, b2, loose) => compare(a, b2, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/concordance/node_modules/semver/functions/eq.js
var require_eq2 = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/eq.js"(exports, module2) {
    var compare = require_compare();
    var eq2 = (a, b2, loose) => compare(a, b2, loose) === 0;
    module2.exports = eq2;
  }
});

// node_modules/concordance/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/neq.js"(exports, module2) {
    var compare = require_compare();
    var neq = (a, b2, loose) => compare(a, b2, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/concordance/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/gte.js"(exports, module2) {
    var compare = require_compare();
    var gte = (a, b2, loose) => compare(a, b2, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/concordance/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/lte.js"(exports, module2) {
    var compare = require_compare();
    var lte = (a, b2, loose) => compare(a, b2, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/concordance/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/cmp.js"(exports, module2) {
    var eq2 = require_eq2();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b2, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a === b2;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a !== b2;
        case "":
        case "=":
        case "==":
          return eq2(a, b2, loose);
        case "!=":
          return neq(a, b2, loose);
        case ">":
          return gt(a, b2, loose);
        case ">=":
          return gte(a, b2, loose);
        case "<":
          return lt(a, b2, loose);
        case "<=":
          return lte(a, b2, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/concordance/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/coerce.js"(exports, module2) {
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version2, options) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version2.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse2(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/concordance/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/concordance/node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/concordance/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/concordance/node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node2;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
          self2.push(arguments[i2]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
        push(this, arguments[i2]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
        unshift(this, arguments[i2]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn2, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i2 = 0; walker !== null; i2++) {
        fn2.call(thisp, walker.value, i2, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn2, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i2 = this.length - 1; walker !== null; i2--) {
        fn2.call(thisp, walker.value, i2, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n2) {
      for (var i2 = 0, walker = this.head; walker !== null && i2 < n2; i2++) {
        walker = walker.next;
      }
      if (i2 === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n2) {
      for (var i2 = 0, walker = this.tail; walker !== null && i2 < n2; i2++) {
        walker = walker.prev;
      }
      if (i2 === n2 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn2, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn2.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn2, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn2.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn2, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i2 = 0; walker !== null; i2++) {
        acc = fn2(acc, walker.value, i2);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn2, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i2 = this.length - 1; walker !== null; i2--) {
        acc = fn2(acc, walker.value, i2);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i2 = 0, walker = this.head; walker !== null; i2++) {
        arr[i2] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i2 = 0, walker = this.tail; walker !== null; i2++) {
        arr[i2] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i2 = 0, walker = this.head; walker !== null && i2 < from; i2++) {
        walker = walker.next;
      }
      for (; walker !== null && i2 < to; i2++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i2 = this.length, walker = this.tail; walker !== null && i2 > to; i2--) {
        walker = walker.prev;
      }
      for (; walker !== null && i2 > from; i2--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i2 = 0, walker = this.head; walker !== null && i2 < start; i2++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i2 = 0; walker && i2 < deleteCount; i2++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i2 = 0; i2 < nodes.length; i2++) {
        walker = insert(this, walker, nodes[i2]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node2(value, null, node, self2) : new Node2(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node2(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node2(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node2(value, prev, next, list) {
      if (!(this instanceof Node2)) {
        return new Node2(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/concordance/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/concordance/node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn2, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn2, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn2, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn2, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now3 = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now3;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now3, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get2(this, key, true);
      }
      peek(key) {
        return get2(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now3 = Date.now();
        for (let l2 = arr.length - 1; l2 >= 0; l2--) {
          const hit = arr[l2];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now3;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get2(this, key, false));
      }
    };
    var get2 = (self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff2 = Date.now() - hit.now;
      return hit.maxAge ? diff2 > hit.maxAge : self2[MAX_AGE] && diff2 > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now3, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now3;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn2, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn2.call(thisp, hit.value, hit.key, self2);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/concordance/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/concordance/node_modules/semver/classes/range.js"(exports, module2) {
    var Range = class {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().split(/\s+/).join(" ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache2.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache2.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version2) {
        if (!version2) {
          return false;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i2 = 0; i2 < this.set.length; i2++) {
          if (testSet(this.set[i2], version2, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lru_cache();
    var cache2 = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants2();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M2, m2, p, pr) => {
        debug("tilde", comp, _, M2, m2, p, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.${p} <${M2}.${+m2 + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M2, m2, p, pr) => {
        debug("caret", comp, _, M2, m2, p, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0${z} <${+M2 + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M2 === "0") {
            ret = `>=${M2}.${m2}.0${z} <${M2}.${+m2 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m2}.0${z} <${+M2 + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${m2}.${+p + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p}-${pr} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p}-${pr} <${+M2 + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p}${z} <${M2}.${m2}.${+p + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p}${z} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p} <${+M2 + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M2, m2, p, pr) => {
        debug("xRange", comp, ret, gtlt, M2, m2, p, pr);
        const xM = isX(M2);
        const xm = xM || isX(m2);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m2 = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M2 = +M2 + 1;
              m2 = 0;
              p = 0;
            } else {
              m2 = +m2 + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M2 = +M2 + 1;
            } else {
              m2 = +m2 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M2}.${m2}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set3, version2, options) => {
      for (let i2 = 0; i2 < set3.length; i2++) {
        if (!set3[i2].test(version2)) {
          return false;
        }
      }
      if (version2.prerelease.length && !options.includePrerelease) {
        for (let i2 = 0; i2 < set3.length; i2++) {
          debug(set3[i2].semver);
          if (set3[i2].semver === Comparator.ANY) {
            continue;
          }
          if (set3[i2].semver.prerelease.length > 0) {
            const allowed = set3[i2].semver;
            if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/concordance/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/concordance/node_modules/semver/classes/comparator.js"(exports, module2) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m2 = comp.match(r);
        if (!m2) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m2[1] !== void 0 ? m2[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m2[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m2[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version2) {
        debug("Comparator.test", version2, this.options.loose);
        if (this.semver === ANY || version2 === ANY) {
          return true;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version2, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/concordance/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/concordance/node_modules/semver/functions/satisfies.js"(exports, module2) {
    var Range = require_range();
    var satisfies = (version2, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version2);
    };
    module2.exports = satisfies;
  }
});

// node_modules/concordance/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/concordance/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/concordance/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/concordance/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/min-version.js"(exports, module2) {
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i2 = 0; i2 < range.set.length; ++i2) {
        const comparators = range.set[i2];
        let setMin = null;
        comparators.forEach((comparator2) => {
          const compver = new SemVer(comparator2.semver.version);
          switch (comparator2.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator2.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/concordance/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/valid.js"(exports, module2) {
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/concordance/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/outside.js"(exports, module2) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version2, range, hilo, options) => {
      version2 = new SemVer(version2, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version2, range, options)) {
        return false;
      }
      for (let i2 = 0; i2 < range.set.length; ++i2) {
        const comparators = range.set[i2];
        let high = null;
        let low = null;
        comparators.forEach((comparator2) => {
          if (comparator2.semver === ANY) {
            comparator2 = new Comparator(">=0.0.0");
          }
          high = high || comparator2;
          low = low || comparator2;
          if (gtfn(comparator2.semver, high.semver, options)) {
            high = comparator2;
          } else if (ltfn(comparator2.semver, low.semver, options)) {
            low = comparator2;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/concordance/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/gtr.js"(exports, module2) {
    var outside = require_outside();
    var gtr = (version2, range, options) => outside(version2, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/concordance/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/ltr.js"(exports, module2) {
    var outside = require_outside();
    var ltr = (version2, range, options) => outside(version2, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/concordance/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/intersects.js"(exports, module2) {
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// node_modules/concordance/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/simplify.js"(exports, module2) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set3 = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b2) => compare(a, b2, options));
      for (const version2 of v) {
        const included = satisfies(version2, range, options);
        if (included) {
          prev = version2;
          if (!first) {
            first = version2;
          }
        } else {
          if (prev) {
            set3.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set3.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set3) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/concordance/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/concordance/node_modules/semver/ranges/subset.js"(exports, module2) {
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq2 of eqSet) {
        if (gt && !satisfies(eq2, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq2, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq2, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b2, options) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options);
      return comp > 0 ? a : comp < 0 ? b2 : b2.operator === ">" && a.operator === ">=" ? b2 : a;
    };
    var lowerLT = (a, b2, options) => {
      if (!a) {
        return b2;
      }
      const comp = compare(a.semver, b2.semver, options);
      return comp < 0 ? a : comp > 0 ? b2 : b2.operator === "<" && a.operator === "<=" ? b2 : a;
    };
    module2.exports = subset;
  }
});

// node_modules/concordance/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/concordance/node_modules/semver/index.js"(exports, module2) {
    var internalRe = require_re();
    var constants = require_constants2();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse2 = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff2 = require_diff2();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort2 = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq2 = require_eq2();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse: parse2,
      valid,
      clean,
      inc,
      diff: diff2,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort: sort2,
      rsort,
      gt,
      lt,
      eq: eq2,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/concordance/package.json
var require_package = __commonJS({
  "node_modules/concordance/package.json"(exports, module2) {
    module2.exports = {
      name: "concordance",
      version: "5.0.4",
      description: "Compare, format, diff and serialize any JavaScript value",
      main: "index.js",
      files: [
        "lib",
        "index.js"
      ],
      engines: {
        node: ">=10.18.0 <11 || >=12.14.0 <13 || >=14"
      },
      scripts: {
        test: "as-i-preach && c8 ava"
      },
      repository: {
        type: "git",
        url: "git+https://github.com/concordancejs/concordance.git"
      },
      author: "Mark Wubben (https://novemberborn.net/)",
      license: "ISC",
      bugs: {
        url: "https://github.com/concordancejs/concordance/issues"
      },
      homepage: "https://github.com/concordancejs/concordance#readme",
      dependencies: {
        "date-time": "^3.1.0",
        esutils: "^2.0.3",
        "fast-diff": "^1.2.0",
        "js-string-escape": "^1.0.1",
        lodash: "^4.17.15",
        "md5-hex": "^3.0.1",
        semver: "^7.3.2",
        "well-known-symbols": "^2.0.0"
      },
      devDependencies: {
        "@novemberborn/eslint-plugin-as-i-preach": "^12.0.0",
        ava: "^3.15.0",
        c8: "^7.1.2",
        eslint: "^6.8.0",
        "eslint-plugin-ava": "^10.3.0",
        "eslint-plugin-import": "^2.20.2",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-promise": "^4.2.1",
        "eslint-plugin-security": "^1.4.0",
        "eslint-plugin-standard": "^4.0.1",
        "eslint-plugin-unicorn": "^17.2.0",
        proxyquire: "^2.1.3"
      }
    };
  }
});

// node_modules/js-string-escape/index.js
var require_js_string_escape = __commonJS({
  "node_modules/js-string-escape/index.js"(exports, module2) {
    module2.exports = function(string3) {
      return ("" + string3).replace(/["'\\\n\r\u2028\u2029]/g, function(character) {
        switch (character) {
          case '"':
          case "'":
          case "\\":
            return "\\" + character;
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
        }
      });
    };
  }
});

// node_modules/well-known-symbols/index.js
var require_well_known_symbols = __commonJS({
  "node_modules/well-known-symbols/index.js"(exports) {
    "use strict";
    var WELL_KNOWN = new Map([
      [Symbol.iterator, "Symbol.iterator"],
      [Symbol.asyncIterator, "Symbol.asyncIterator"],
      [Symbol.match, "Symbol.match"],
      [Symbol.replace, "Symbol.replace"],
      [Symbol.search, "Symbol.search"],
      [Symbol.split, "Symbol.split"],
      [Symbol.hasInstance, "Symbol.hasInstance"],
      [Symbol.isConcatSpreadable, "Symbol.isConcatSpreadable"],
      [Symbol.unscopables, "Symbol.unscopables"],
      [Symbol.species, "Symbol.species"],
      [Symbol.toPrimitive, "Symbol.toPrimitive"],
      [Symbol.toStringTag, "Symbol.toStringTag"]
    ].filter((entry) => entry[0]));
    exports.isWellKnown = (symbol) => WELL_KNOWN.has(symbol);
    exports.getLabel = (symbol) => WELL_KNOWN.get(symbol);
  }
});

// node_modules/concordance/lib/primitiveValues/symbol.js
var require_symbol = __commonJS({
  "node_modules/concordance/lib/primitiveValues/symbol.js"(exports) {
    "use strict";
    var stringEscape = require_js_string_escape();
    var wellKnownSymbols = require_well_known_symbols();
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(value) {
      let stringCompare = null;
      const key = Symbol.keyFor(value);
      if (key !== void 0) {
        stringCompare = `Symbol.for(${stringEscape(key)})`;
      } else if (wellKnownSymbols.isWellKnown(value)) {
        stringCompare = wellKnownSymbols.getLabel(value);
      }
      return new SymbolValue({
        stringCompare,
        value
      });
    }
    exports.describe = describe2;
    function deserialize(state) {
      const stringCompare = state[0];
      const string3 = state[1] || state[0];
      return new DeserializedSymbolValue({
        string: string3,
        stringCompare,
        value: null
      });
    }
    exports.deserialize = deserialize;
    var tag = Symbol("SymbolValue");
    exports.tag = tag;
    var SymbolValue = class {
      constructor(props) {
        this.stringCompare = props.stringCompare;
        this.value = props.value;
      }
      compare(expected) {
        if (expected.tag !== tag)
          return UNEQUAL;
        if (this.stringCompare !== null) {
          return this.stringCompare === expected.stringCompare ? DEEP_EQUAL : UNEQUAL;
        }
        return this.value === expected.value ? DEEP_EQUAL : UNEQUAL;
      }
      formatString() {
        if (this.stringCompare !== null)
          return this.stringCompare;
        return stringEscape(this.value.toString());
      }
      formatDeep(theme) {
        return lineBuilder.single(formatUtils.wrap(theme.symbol, this.formatString()));
      }
      formatAsKey(theme) {
        return formatUtils.wrap(theme.property.keyBracket, formatUtils.wrap(theme.symbol, this.formatString()));
      }
      serialize() {
        const string3 = this.formatString();
        return this.stringCompare === string3 ? [this.stringCompare] : [this.stringCompare, string3];
      }
    };
    Object.defineProperty(SymbolValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(SymbolValue.prototype, "tag", { value: tag });
    var DeserializedSymbolValue = class extends SymbolValue {
      constructor(props) {
        super(props);
        this.string = props.string;
      }
      compare(expected) {
        if (expected.tag !== tag)
          return UNEQUAL;
        if (this.stringCompare !== null) {
          return this.stringCompare === expected.stringCompare ? DEEP_EQUAL : UNEQUAL;
        }
        return this.string === expected.formatString() ? DEEP_EQUAL : UNEQUAL;
      }
      formatString() {
        return this.string;
      }
    };
  }
});

// node_modules/concordance/lib/metaDescriptors/property.js
var require_property = __commonJS({
  "node_modules/concordance/lib/metaDescriptors/property.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var symbolPrimitive = require_symbol().tag;
    var recursorUtils = require_recursorUtils();
    var AMBIGUOUS = constants.AMBIGUOUS;
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describeComplex(key, value) {
      return new ComplexProperty(key, value);
    }
    exports.describeComplex = describeComplex;
    function deserializeComplex(key, recursor) {
      const value = recursor();
      return new ComplexProperty(key, value);
    }
    exports.deserializeComplex = deserializeComplex;
    function describePrimitive(key, value) {
      return new PrimitiveProperty(key, value);
    }
    exports.describePrimitive = describePrimitive;
    function deserializePrimitive(state) {
      const key = state[0];
      const value = state[1];
      return new PrimitiveProperty(key, value);
    }
    exports.deserializePrimitive = deserializePrimitive;
    var complexTag = Symbol("ComplexProperty");
    exports.complexTag = complexTag;
    var primitiveTag = Symbol("PrimitiveProperty");
    exports.primitiveTag = primitiveTag;
    var Property = class {
      constructor(key) {
        this.key = key;
      }
      compareKeys(expected) {
        const result = this.key.compare(expected.key);
        return result === UNEQUAL && this.key.tag === symbolPrimitive && expected.key.tag === symbolPrimitive ? AMBIGUOUS : result;
      }
      prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape, isCircular) {
        if (isCircular(this.value) || isCircular(expected.value))
          return { compareResult: UNEQUAL };
        const rhsFork = recursorUtils.fork(rhsRecursor);
        const initialExpected = expected;
        do {
          if (expected === null || expected.isProperty !== true) {
            return {
              actualIsExtraneous: true,
              rhsRecursor: recursorUtils.unshift(rhsFork.recursor, initialExpected)
            };
          } else if (this.key.compare(expected.key) === DEEP_EQUAL) {
            if (expected === initialExpected) {
              return null;
            } else {
              return {
                expectedIsMissing: true,
                lhsRecursor: recursorUtils.unshift(lhsRecursor, this),
                rhsRecursor: rhsFork.recursor
              };
            }
          }
          expected = rhsFork.shared();
        } while (true);
      }
    };
    Object.defineProperty(Property.prototype, "isProperty", { value: true });
    var ComplexProperty = class extends Property {
      constructor(key, value) {
        super(key);
        this.value = value;
      }
      createRecursor() {
        return recursorUtils.singleValue(this.value);
      }
      compare(expected) {
        if (expected.isProperty !== true)
          return UNEQUAL;
        const keyResult = this.compareKeys(expected);
        if (keyResult !== DEEP_EQUAL)
          return keyResult;
        return this.tag === expected.tag ? this.value.compare(expected.value) : UNEQUAL;
      }
      formatShallow(theme, indent) {
        const increaseValueIndent = theme.property.increaseValueIndent === true;
        return new formatUtils.SingleValueFormatter(theme, (value) => {
          if (typeof theme.property.customFormat === "function") {
            return theme.property.customFormat(theme, indent, this.key, value);
          }
          return value.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
        }, increaseValueIndent);
      }
      serialize() {
        return this.key;
      }
    };
    Object.defineProperty(ComplexProperty.prototype, "tag", { value: complexTag });
    var PrimitiveProperty = class extends Property {
      constructor(key, value) {
        super(key);
        this.value = value;
      }
      compare(expected) {
        if (expected.isProperty !== true)
          return UNEQUAL;
        const keyResult = this.compareKeys(expected);
        if (keyResult !== DEEP_EQUAL)
          return keyResult;
        return this.tag !== expected.tag ? UNEQUAL : this.value.compare(expected.value);
      }
      formatDeep(theme, indent) {
        const increaseValueIndent = theme.property.increaseValueIndent === true;
        const valueIndent = increaseValueIndent ? indent.increase() : indent;
        const formatted = this.value.formatDeep(theme, valueIndent);
        if (typeof theme.property.customFormat === "function") {
          return theme.property.customFormat(theme, indent, this.key, formatted);
        }
        return formatted.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
      }
      diffDeep(expected, theme, indent, invert) {
        if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
          return null;
        if (this.key.compare(expected.key) !== DEEP_EQUAL)
          return null;
        const increaseValueIndent = theme.property.increaseValueIndent === true;
        const valueIndent = increaseValueIndent ? indent.increase() : indent;
        const diff2 = this.value.diffDeep(expected.value, theme, valueIndent, invert);
        if (diff2 === null)
          return null;
        if (typeof theme.property.customFormat === "function") {
          return theme.property.customFormat(theme, indent, this.key, diff2);
        }
        return diff2.withFirstPrefixed(this.key.formatAsKey(theme) + theme.property.separator).withLastPostfixed(theme.property.after);
      }
      serialize() {
        return [this.key, this.value];
      }
    };
    Object.defineProperty(PrimitiveProperty.prototype, "tag", { value: primitiveTag });
  }
});

// node_modules/concordance/lib/pluginRegistry.js
var require_pluginRegistry = __commonJS({
  "node_modules/concordance/lib/pluginRegistry.js"(exports) {
    "use strict";
    var semver = require_semver2();
    var pkg = require_package();
    var object2 = require_object();
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var itemDescriptor = require_item();
    var propertyDescriptor = require_property();
    var stringDescriptor = require_string();
    var recursorUtils = require_recursorUtils();
    var themeUtils = require_themeUtils();
    var API_VERSION = 1;
    var CONCORDANCE_VERSION = pkg.version;
    var descriptorRegistry = /* @__PURE__ */ new Map();
    var registry = /* @__PURE__ */ new Map();
    var PluginError = class extends Error {
      constructor(message, plugin2) {
        super(message);
        this.name = "PluginError";
        this.plugin = plugin2;
      }
    };
    var PluginTypeError = class extends TypeError {
      constructor(message, plugin2) {
        super(message);
        this.name = "PluginTypeError";
        this.plugin = plugin2;
      }
    };
    var UnsupportedApiError = class extends PluginError {
      constructor(plugin2) {
        super("Plugin requires an unsupported API version", plugin2);
        this.name = "UnsupportedApiError";
      }
    };
    var UnsupportedError = class extends PluginError {
      constructor(plugin2) {
        super("Plugin does not support this version of Concordance", plugin2);
        this.name = "UnsupportedError";
      }
    };
    var DuplicateDescriptorTagError = class extends PluginError {
      constructor(tag, plugin2) {
        super(`Could not add descriptor: tag ${String(tag)} has already been registered`, plugin2);
        this.name = "DuplicateDescriptorTagError";
        this.tag = tag;
      }
    };
    var DuplicateDescriptorIdError = class extends PluginError {
      constructor(id, plugin2) {
        const printed = typeof id === "number" ? `0x${id.toString(16).toUpperCase()}` : String(id);
        super(`Could not add descriptor: id ${printed} has already been registered`, plugin2);
        this.name = "DuplicateDescriptorIdError";
        this.id = id;
      }
    };
    function verify(plugin2) {
      if (typeof plugin2.name !== "string" || !plugin2.name) {
        throw new PluginTypeError("Plugin must have a `name`", plugin2);
      }
      if (plugin2.apiVersion !== API_VERSION) {
        throw new UnsupportedApiError(plugin2);
      }
      if ("minimalConcordanceVersion" in plugin2) {
        if (!semver.valid(plugin2.minimalConcordanceVersion)) {
          throw new PluginTypeError("If specified, `minimalConcordanceVersion` must be a valid SemVer version", plugin2);
        }
        const range = `>=${plugin2.minimalConcordanceVersion}`;
        if (!semver.satisfies(CONCORDANCE_VERSION, range)) {
          throw new UnsupportedError(plugin2);
        }
      }
    }
    var publicDescriptorTags = Object.freeze({
      complexItem: itemDescriptor.complexTag,
      primitiveItem: itemDescriptor.primitiveTag,
      primitiveProperty: propertyDescriptor.primitiveTag,
      string: stringDescriptor.tag
    });
    var publicLineBuilder = Object.freeze({
      buffer: lineBuilder.buffer,
      first: lineBuilder.first,
      last: lineBuilder.last,
      line: lineBuilder.line,
      single: lineBuilder.single,
      actual: Object.freeze({
        buffer: lineBuilder.actual.buffer,
        first: lineBuilder.actual.first,
        last: lineBuilder.actual.last,
        line: lineBuilder.actual.line,
        single: lineBuilder.actual.single
      }),
      expected: Object.freeze({
        buffer: lineBuilder.expected.buffer,
        first: lineBuilder.expected.first,
        last: lineBuilder.expected.last,
        line: lineBuilder.expected.line,
        single: lineBuilder.expected.single
      })
    });
    function modifyTheme(descriptor, modifier) {
      themeUtils.addModifier(descriptor, modifier);
      return descriptor;
    }
    function add(plugin2) {
      verify(plugin2);
      const name = plugin2.name;
      if (registry.has(name))
        return registry.get(name);
      const id2deserialize = /* @__PURE__ */ new Map();
      const tag2id = /* @__PURE__ */ new Map();
      const addDescriptor = (id, tag, deserialize) => {
        if (id2deserialize.has(id))
          throw new DuplicateDescriptorIdError(id, plugin2);
        if (descriptorRegistry.has(tag) || tag2id.has(tag))
          throw new DuplicateDescriptorTagError(tag, plugin2);
        id2deserialize.set(id, deserialize);
        tag2id.set(tag, id);
      };
      const tryDescribeValue = plugin2.register({
        // Concordance makes assumptions about when AMBIGUOUS occurs. Do not expose
        // it to plugins.
        UNEQUAL: constants.UNEQUAL,
        SHALLOW_EQUAL: constants.SHALLOW_EQUAL,
        DEEP_EQUAL: constants.DEEP_EQUAL,
        ObjectValue: object2.ObjectValue,
        DescribedMixin: object2.DescribedMixin,
        DeserializedMixin: object2.DeserializedMixin,
        addDescriptor,
        applyThemeModifiers: themeUtils.applyModifiers,
        descriptorTags: publicDescriptorTags,
        lineBuilder: publicLineBuilder,
        mapRecursor: recursorUtils.map,
        modifyTheme,
        wrapFromTheme: formatUtils.wrap
      });
      const registered = {
        id2deserialize,
        serializerVersion: plugin2.serializerVersion,
        name,
        tag2id,
        theme: plugin2.theme || {},
        tryDescribeValue
      };
      registry.set(name, registered);
      for (const tag of tag2id.keys()) {
        descriptorRegistry.set(tag, registered);
      }
      return registered;
    }
    exports.add = add;
    function getDeserializers(plugins3) {
      return plugins3.map((plugin2) => {
        const registered = add(plugin2);
        return {
          id2deserialize: registered.id2deserialize,
          name: registered.name,
          serializerVersion: registered.serializerVersion
        };
      });
    }
    exports.getDeserializers = getDeserializers;
    function getThemes(plugins3) {
      return plugins3.map((plugin2) => {
        const registered = add(plugin2);
        return {
          name: registered.name,
          theme: registered.theme
        };
      });
    }
    exports.getThemes = getThemes;
    function getTryDescribeValues(plugins3) {
      return plugins3.map((plugin2) => add(plugin2).tryDescribeValue);
    }
    exports.getTryDescribeValues = getTryDescribeValues;
    function resolveDescriptorRef(tag) {
      if (!descriptorRegistry.has(tag))
        return null;
      const registered = descriptorRegistry.get(tag);
      return {
        id: registered.tag2id.get(tag),
        name: registered.name,
        serialization: {
          serializerVersion: registered.serializerVersion
        }
      };
    }
    exports.resolveDescriptorRef = resolveDescriptorRef;
  }
});

// node_modules/concordance/lib/themeUtils.js
var require_themeUtils = __commonJS({
  "node_modules/concordance/lib/themeUtils.js"(exports) {
    "use strict";
    var cloneDeep = require_cloneDeep();
    var merge = require_merge();
    var pluginRegistry = require_pluginRegistry();
    function freezeTheme(theme) {
      const queue = [theme];
      while (queue.length > 0) {
        const object2 = queue.shift();
        Object.freeze(object2);
        for (const key of Object.keys(object2)) {
          const value = object2[key];
          if (value !== null && typeof value === "object") {
            queue.push(value);
          }
        }
      }
      return theme;
    }
    var defaultTheme = freezeTheme({
      bigInt: { open: "", close: "" },
      boolean: { open: "", close: "" },
      circular: "[Circular]",
      date: {
        invalid: "invalid",
        value: { open: "", close: "" }
      },
      diffGutters: {
        actual: "- ",
        expected: "+ ",
        padding: "  "
      },
      error: {
        ctor: { open: "(", close: ")" },
        name: { open: "", close: "" }
      },
      function: {
        name: { open: "", close: "" },
        stringTag: { open: "", close: "" }
      },
      global: { open: "", close: "" },
      item: {
        after: ",",
        customFormat: null,
        increaseValueIndent: false
      },
      list: { openBracket: "[", closeBracket: "]" },
      mapEntry: {
        after: ",",
        separator: " => "
      },
      maxDepth: "\u2026",
      null: { open: "", close: "" },
      number: { open: "", close: "" },
      object: {
        openBracket: "{",
        closeBracket: "}",
        ctor: { open: "", close: "" },
        stringTag: { open: "@", close: "" },
        secondaryStringTag: { open: "@", close: "" }
      },
      property: {
        after: ",",
        customFormat: null,
        keyBracket: { open: "[", close: "]" },
        separator: ": ",
        increaseValueIndent: false
      },
      regexp: {
        source: { open: "/", close: "/" },
        flags: { open: "", close: "" },
        separator: "---"
      },
      stats: { separator: "---" },
      string: {
        open: "",
        close: "",
        line: { open: "'", close: "'", escapeQuote: "'" },
        multiline: { start: "`", end: "`", escapeQuote: "`" },
        controlPicture: { open: "", close: "" },
        diff: {
          insert: { open: "", close: "" },
          delete: { open: "", close: "" },
          equal: { open: "", close: "" },
          insertLine: { open: "", close: "" },
          deleteLine: { open: "", close: "" }
        }
      },
      symbol: { open: "", close: "" },
      typedArray: {
        bytes: { open: "", close: "" }
      },
      undefined: { open: "", close: "" }
    });
    var pluginRefs = /* @__PURE__ */ new Map();
    pluginRefs.count = 0;
    var normalizedPluginThemes = /* @__PURE__ */ new Map();
    function normalizePlugins(plugins3) {
      if (!Array.isArray(plugins3) || plugins3.length === 0)
        return null;
      const refs = [];
      const themes = [];
      for (const fromPlugin of pluginRegistry.getThemes(plugins3)) {
        if (!pluginRefs.has(fromPlugin.name)) {
          pluginRefs.set(fromPlugin.name, pluginRefs.count++);
        }
        refs.push(pluginRefs.get(fromPlugin.name));
        themes.push(fromPlugin.theme);
      }
      const ref = refs.join(".");
      if (normalizedPluginThemes.has(ref)) {
        return {
          ref,
          theme: normalizedPluginThemes.get(ref)
        };
      }
      const theme = freezeTheme(themes.reduce((acc, pluginTheme) => {
        return merge(acc, pluginTheme);
      }, cloneDeep(defaultTheme)));
      normalizedPluginThemes.set(ref, theme);
      return { ref, theme };
    }
    var normalizedCache = /* @__PURE__ */ new WeakMap();
    function normalize2(options) {
      options = Object.assign({ plugins: [], theme: null }, options);
      const normalizedPlugins = normalizePlugins(options.plugins);
      if (!options.theme) {
        return normalizedPlugins ? normalizedPlugins.theme : defaultTheme;
      }
      const entry = normalizedCache.get(options.theme) || { theme: null, withPlugins: /* @__PURE__ */ new Map() };
      if (!normalizedCache.has(options.theme))
        normalizedCache.set(options.theme, entry);
      if (normalizedPlugins) {
        if (entry.withPlugins.has(normalizedPlugins.ref)) {
          return entry.withPlugins.get(normalizedPlugins.ref);
        }
        const theme = freezeTheme(merge(cloneDeep(normalizedPlugins.theme), options.theme));
        entry.withPlugins.set(normalizedPlugins.ref, theme);
        return theme;
      }
      if (!entry.theme) {
        entry.theme = freezeTheme(merge(cloneDeep(defaultTheme), options.theme));
      }
      return entry.theme;
    }
    exports.normalize = normalize2;
    var modifiers = /* @__PURE__ */ new WeakMap();
    function addModifier(descriptor, modifier) {
      if (modifiers.has(descriptor)) {
        modifiers.get(descriptor).add(modifier);
      } else {
        modifiers.set(descriptor, /* @__PURE__ */ new Set([modifier]));
      }
    }
    exports.addModifier = addModifier;
    var modifierCache = /* @__PURE__ */ new WeakMap();
    var originalCache = /* @__PURE__ */ new WeakMap();
    function applyModifiers(descriptor, theme) {
      if (!modifiers.has(descriptor))
        return theme;
      return Array.from(modifiers.get(descriptor)).reduce((prev, modifier) => {
        const cache2 = modifierCache.get(modifier) || /* @__PURE__ */ new WeakMap();
        if (!modifierCache.has(modifier))
          modifierCache.set(modifier, cache2);
        if (cache2.has(prev))
          return cache2.get(prev);
        const modifiedTheme = cloneDeep(prev);
        modifier(modifiedTheme);
        freezeTheme(modifiedTheme);
        cache2.set(prev, modifiedTheme);
        originalCache.set(modifiedTheme, theme);
        return modifiedTheme;
      }, theme);
    }
    exports.applyModifiers = applyModifiers;
    function applyModifiersToOriginal(descriptor, theme) {
      return applyModifiers(descriptor, originalCache.get(theme) || theme);
    }
    exports.applyModifiersToOriginal = applyModifiersToOriginal;
  }
});

// node_modules/concordance/lib/metaDescriptors/mapEntry.js
var require_mapEntry = __commonJS({
  "node_modules/concordance/lib/metaDescriptors/mapEntry.js"(exports) {
    "use strict";
    var constants = require_constants();
    var lineBuilder = require_lineBuilder();
    var recursorUtils = require_recursorUtils();
    var themeUtils = require_themeUtils();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    function describe2(keyDescriptor, valueDescriptor) {
      const keyIsPrimitive = keyDescriptor.isPrimitive === true;
      const valueIsPrimitive = valueDescriptor.isPrimitive === true;
      return new MapEntry(keyDescriptor, valueDescriptor, keyIsPrimitive, valueIsPrimitive);
    }
    exports.describe = describe2;
    function deserialize(state, recursor) {
      const keyIsPrimitive = state[0];
      const valueIsPrimitive = state[1];
      const keyDescriptor = recursor();
      const valueDescriptor = recursor();
      return new MapEntry(keyDescriptor, valueDescriptor, keyIsPrimitive, valueIsPrimitive);
    }
    exports.deserialize = deserialize;
    var tag = Symbol("MapEntry");
    exports.tag = tag;
    function mergeWithKey(theme, key, values) {
      const lines = lineBuilder.buffer();
      const keyRemainder = lineBuilder.buffer();
      for (const line of key) {
        if (!line.isLast && !line.hasGutter) {
          lines.append(line);
        } else {
          keyRemainder.append(line);
        }
      }
      for (const value of values) {
        lines.append(keyRemainder.mergeWithInfix(theme.mapEntry.separator, value).withLastPostfixed(theme.mapEntry.after));
      }
      return lines;
    }
    var MapEntry = class {
      constructor(key, value, keyIsPrimitive, valueIsPrimitive) {
        this.key = key;
        this.value = value;
        this.keyIsPrimitive = keyIsPrimitive;
        this.valueIsPrimitive = valueIsPrimitive;
      }
      createRecursor() {
        let emitKey = true;
        let emitValue = true;
        return () => {
          if (emitKey) {
            emitKey = false;
            return this.key;
          }
          if (emitValue) {
            emitValue = false;
            return this.value;
          }
          return null;
        };
      }
      compare(expected) {
        if (this.tag !== expected.tag)
          return UNEQUAL;
        if (this.keyIsPrimitive !== expected.keyIsPrimitive)
          return UNEQUAL;
        if (this.valueIsPrimitive !== expected.valueIsPrimitive)
          return UNEQUAL;
        if (!this.keyIsPrimitive)
          return SHALLOW_EQUAL;
        const keyResult = this.key.compare(expected.key);
        if (keyResult !== DEEP_EQUAL)
          return keyResult;
        if (!this.valueIsPrimitive)
          return SHALLOW_EQUAL;
        return this.value.compare(expected.value);
      }
      formatDeep(theme, indent) {
        if (!this.keyIsPrimitive || typeof this.value.formatDeep !== "function")
          return null;
        const value = this.value.formatDeep(themeUtils.applyModifiersToOriginal(this.value, theme), indent);
        if (value === null)
          return null;
        const key = this.key.formatDeep(themeUtils.applyModifiersToOriginal(this.key, theme), indent);
        return mergeWithKey(theme, key, [value]);
      }
      formatShallow(theme, indent) {
        let key = null;
        const values = [];
        return {
          append: (formatted, origin) => {
            if (this.key === origin) {
              key = formatted;
            } else {
              values.push(formatted);
            }
          },
          finalize() {
            return mergeWithKey(theme, key, values);
          }
        };
      }
      diffDeep(expected, theme, indent, invert) {
        if (this.tag !== expected.tag || typeof this.value.diffDeep !== "function")
          return null;
        if (!this.keyIsPrimitive || !expected.keyIsPrimitive || this.key.compare(expected.key) !== DEEP_EQUAL) {
          return null;
        }
        const diff2 = this.value.diffDeep(expected.value, themeUtils.applyModifiersToOriginal(this.value, theme), indent, invert);
        if (diff2 === null)
          return null;
        const key = this.key.formatDeep(themeUtils.applyModifiersToOriginal(this.key, theme), indent, "");
        return mergeWithKey(theme, key, [diff2]);
      }
      prepareDiff(expected, lhsRecursor, rhsRecursor, compareComplexShape, isCircular) {
        if (isCircular(this.value) || isCircular(expected.value))
          return { compareResult: UNEQUAL };
        const compareResult = this.compare(expected);
        const keysAreEqual = this.tag === expected.tag && this.key.compare(expected.key) === DEEP_EQUAL;
        if (compareResult === DEEP_EQUAL || keysAreEqual)
          return { compareResult };
        const lhsFork = recursorUtils.fork(lhsRecursor);
        const rhsFork = recursorUtils.fork(rhsRecursor);
        const initialExpected = expected;
        let expectedIsMissing = false;
        while (!expectedIsMissing && expected !== null && this.tag === expected.tag) {
          if (expected.keyIsPrimitive) {
            expectedIsMissing = this.key.compare(expected.key) !== UNEQUAL;
          } else {
            expectedIsMissing = compareComplexShape(this.key, expected.key) !== UNEQUAL;
          }
          expected = rhsFork.shared();
        }
        let actualIsExtraneous = false;
        if (this.tag === initialExpected.tag) {
          if (initialExpected.keyIsPrimitive) {
            let actual = this;
            while (!actualIsExtraneous && actual !== null && this.tag === actual.tag) {
              if (actual.keyIsPrimitive) {
                actualIsExtraneous = initialExpected.key.compare(actual.key) === DEEP_EQUAL;
              }
              actual = lhsFork.shared();
            }
          } else {
            let actual = this;
            while (!actualIsExtraneous && actual !== null && this.tag === actual.tag) {
              if (!actual.keyIsPrimitive) {
                actualIsExtraneous = compareComplexShape(actual.key, initialExpected.key) !== UNEQUAL;
              }
              actual = lhsFork.shared();
            }
          }
        }
        if (actualIsExtraneous && !expectedIsMissing) {
          return {
            actualIsExtraneous: true,
            lhsRecursor: lhsFork.recursor,
            rhsRecursor: recursorUtils.unshift(rhsFork.recursor, initialExpected)
          };
        }
        if (expectedIsMissing && !actualIsExtraneous) {
          return {
            expectedIsMissing: true,
            lhsRecursor: recursorUtils.unshift(lhsFork.recursor, this),
            rhsRecursor: rhsFork.recursor
          };
        }
        let mustRecurse = false;
        if (!this.keyIsPrimitive && !initialExpected.keyIsPrimitive) {
          if (this.valueIsPrimitive || initialExpected.valueIsPrimitive) {
            mustRecurse = this.value.compare(initialExpected.value) !== UNEQUAL;
          } else {
            mustRecurse = compareComplexShape(this.value, initialExpected.value) !== UNEQUAL;
          }
        }
        return {
          mustRecurse,
          isUnequal: !mustRecurse,
          lhsRecursor: lhsFork.recursor,
          rhsRecursor: rhsFork.recursor
        };
      }
      serialize() {
        return [this.keyIsPrimitive, this.valueIsPrimitive];
      }
    };
    Object.defineProperty(MapEntry.prototype, "isMapEntry", { value: true });
    Object.defineProperty(MapEntry.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/primitiveValues/bigInt.js
var require_bigInt = __commonJS({
  "node_modules/concordance/lib/primitiveValues/bigInt.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(value) {
      return new BigIntValue(value);
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("BigIntValue");
    exports.tag = tag;
    var BigIntValue = class {
      constructor(value) {
        this.value = value;
      }
      compare(expected) {
        return expected.tag === tag && Object.is(this.value, expected.value) ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        return lineBuilder.single(formatUtils.wrap(theme.bigInt, `${this.value}n`));
      }
      serialize() {
        return this.value;
      }
    };
    Object.defineProperty(BigIntValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(BigIntValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/primitiveValues/boolean.js
var require_boolean = __commonJS({
  "node_modules/concordance/lib/primitiveValues/boolean.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(value) {
      return new BooleanValue(value);
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("BooleanValue");
    exports.tag = tag;
    var BooleanValue = class {
      constructor(value) {
        this.value = value;
      }
      compare(expected) {
        return this.tag === expected.tag && this.value === expected.value ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        return lineBuilder.single(formatUtils.wrap(theme.boolean, this.value === true ? "true" : "false"));
      }
      serialize() {
        return this.value;
      }
    };
    Object.defineProperty(BooleanValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(BooleanValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/primitiveValues/null.js
var require_null = __commonJS({
  "node_modules/concordance/lib/primitiveValues/null.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2() {
      return new NullValue();
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("NullValue");
    exports.tag = tag;
    var NullValue = class {
      compare(expected) {
        return expected.tag === tag ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        return lineBuilder.single(formatUtils.wrap(theme.null, "null"));
      }
    };
    Object.defineProperty(NullValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(NullValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/primitiveValues/number.js
var require_number = __commonJS({
  "node_modules/concordance/lib/primitiveValues/number.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2(value) {
      return new NumberValue(value);
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("NumberValue");
    exports.tag = tag;
    var NumberValue = class {
      constructor(value) {
        this.value = value;
      }
      compare(expected) {
        return expected.tag === tag && Object.is(this.value, expected.value) ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        const string3 = Object.is(this.value, -0) ? "-0" : String(this.value);
        return lineBuilder.single(formatUtils.wrap(theme.number, string3));
      }
      serialize() {
        return this.value;
      }
    };
    Object.defineProperty(NumberValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(NumberValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/primitiveValues/undefined.js
var require_undefined = __commonJS({
  "node_modules/concordance/lib/primitiveValues/undefined.js"(exports) {
    "use strict";
    var constants = require_constants();
    var formatUtils = require_formatUtils();
    var lineBuilder = require_lineBuilder();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function describe2() {
      return new UndefinedValue();
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("UndefinedValue");
    exports.tag = tag;
    var UndefinedValue = class {
      compare(expected) {
        return expected.tag === tag ? DEEP_EQUAL : UNEQUAL;
      }
      formatDeep(theme) {
        return lineBuilder.single(formatUtils.wrap(theme.undefined, "undefined"));
      }
    };
    Object.defineProperty(UndefinedValue.prototype, "isPrimitive", { value: true });
    Object.defineProperty(UndefinedValue.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/describe.js
var require_describe = __commonJS({
  "node_modules/concordance/lib/describe.js"(exports, module2) {
    "use strict";
    var Registry = require_Registry();
    var argumentsValue = require_arguments();
    var arrayBufferValue = require_arrayBuffer();
    var boxedValue = require_boxed();
    var dataViewValue = require_dataView();
    var dateValue = require_date();
    var errorValue = require_error();
    var functionValue = require_function();
    var globalValue = require_global();
    var mapValue = require_map();
    var objectValue = require_object();
    var promiseValue = require_promise();
    var regexpValue = require_regexp();
    var setValue = require_set();
    var typedArrayValue = require_typedArray();
    var getCtor = require_getCtor();
    var getStringTag = require_getStringTag();
    var itemDescriptor = require_item();
    var mapEntryDescriptor = require_mapEntry();
    var propertyDescriptor = require_property();
    var pluginRegistry = require_pluginRegistry();
    var bigIntValue = require_bigInt();
    var booleanValue = require_boolean();
    var nullValue = require_null();
    var numberValue = require_number();
    var stringValue = require_string();
    var symbolValue = require_symbol();
    var undefinedValue = require_undefined();
    var SpecializedComplexes = /* @__PURE__ */ new Map([
      ["Arguments", argumentsValue.describe],
      ["ArrayBuffer", arrayBufferValue.describe],
      ["DataView", dataViewValue.describe],
      ["Date", dateValue.describe],
      ["Error", errorValue.describe],
      ["Float32Array", typedArrayValue.describe],
      ["Float64Array", typedArrayValue.describe],
      ["Function", functionValue.describe],
      ["GeneratorFunction", functionValue.describe],
      ["global", globalValue.describe],
      ["Int16Array", typedArrayValue.describe],
      ["Int32Array", typedArrayValue.describe],
      ["Int8Array", typedArrayValue.describe],
      ["Map", mapValue.describe],
      ["Promise", promiseValue.describe],
      ["RegExp", regexpValue.describe],
      ["Set", setValue.describe],
      ["Uint16Array", typedArrayValue.describe],
      ["Uint32Array", typedArrayValue.describe],
      ["Uint8Array", typedArrayValue.describe],
      ["Uint8ClampedArray", typedArrayValue.describe]
    ]);
    function describePrimitive(value) {
      if (value === null)
        return nullValue.describe();
      if (value === void 0)
        return undefinedValue.describe();
      if (value === true || value === false)
        return booleanValue.describe(value);
      const type2 = typeof value;
      if (type2 === "bigint")
        return bigIntValue.describe(value);
      if (type2 === "number")
        return numberValue.describe(value);
      if (type2 === "string")
        return stringValue.describe(value);
      if (type2 === "symbol")
        return symbolValue.describe(value);
      return null;
    }
    function unboxComplex(tag, complex) {
      if (typeof complex.valueOf === "function") {
        const value = complex.valueOf();
        if (value !== complex)
          return describePrimitive(value);
      }
      return null;
    }
    function registerPlugins(plugins3) {
      if (!Array.isArray(plugins3) || plugins3.length === 0)
        return () => null;
      const tryFns = pluginRegistry.getTryDescribeValues(plugins3);
      return (value, stringTag, ctor) => {
        for (const tryDescribeValue of tryFns) {
          const describeValue = tryDescribeValue(value, stringTag, ctor);
          if (describeValue)
            return describeValue;
        }
        return null;
      };
    }
    function describeComplex(value, registry, tryPlugins, describeAny, describeItem2, describeMapEntry2, describeProperty) {
      if (registry.has(value))
        return registry.get(value);
      const stringTag = getStringTag(value);
      const ctor = getCtor(stringTag, value);
      const pointer = registry.alloc(value);
      let unboxed;
      let describeValue = tryPlugins(value, stringTag, ctor);
      if (describeValue === null) {
        if (SpecializedComplexes.has(stringTag)) {
          describeValue = SpecializedComplexes.get(stringTag);
        } else {
          unboxed = unboxComplex(stringTag, value);
          if (unboxed !== null) {
            describeValue = boxedValue.describe;
          } else {
            describeValue = objectValue.describe;
          }
        }
      }
      const descriptor = describeValue({
        ctor,
        describeAny,
        describeItem: describeItem2,
        describeMapEntry: describeMapEntry2,
        describeProperty,
        pointer: pointer.index,
        stringTag,
        unboxed,
        value
      });
      pointer.descriptor = descriptor;
      return descriptor;
    }
    var describeItem = (index2, valueDescriptor) => {
      return valueDescriptor.isPrimitive === true ? itemDescriptor.describePrimitive(index2, valueDescriptor) : itemDescriptor.describeComplex(index2, valueDescriptor);
    };
    var describeMapEntry = (keyDescriptor, valueDescriptor) => {
      return mapEntryDescriptor.describe(keyDescriptor, valueDescriptor);
    };
    function describe2(value, options) {
      const primitive = describePrimitive(value);
      if (primitive !== null)
        return primitive;
      const registry = new Registry();
      const tryPlugins = registerPlugins(options && options.plugins);
      const curriedComplex = (c) => {
        return describeComplex(c, registry, tryPlugins, describeAny, describeItem, describeMapEntry, describeProperty);
      };
      const describeAny = (any) => {
        const descriptor = describePrimitive(any);
        return descriptor !== null ? descriptor : curriedComplex(any);
      };
      const describeProperty = (key, valueDescriptor) => {
        const keyDescriptor = describePrimitive(key);
        return valueDescriptor.isPrimitive === true ? propertyDescriptor.describePrimitive(keyDescriptor, valueDescriptor) : propertyDescriptor.describeComplex(keyDescriptor, valueDescriptor);
      };
      return curriedComplex(value);
    }
    module2.exports = describe2;
  }
});

// node_modules/concordance/lib/shouldCompareDeep.js
var require_shouldCompareDeep = __commonJS({
  "node_modules/concordance/lib/shouldCompareDeep.js"(exports, module2) {
    "use strict";
    var argumentsObject = require_arguments().tag;
    var constants = require_constants();
    var AMBIGUOUS = constants.AMBIGUOUS;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    function shouldCompareDeep(result, lhs, rhs) {
      if (result === SHALLOW_EQUAL)
        return true;
      if (result !== AMBIGUOUS)
        return false;
      return lhs.tag === argumentsObject || lhs.isProperty === true;
    }
    module2.exports = shouldCompareDeep;
  }
});

// node_modules/concordance/lib/symbolProperties.js
var require_symbolProperties = __commonJS({
  "node_modules/concordance/lib/symbolProperties.js"(exports) {
    "use strict";
    var constants = require_constants();
    var recursorUtils = require_recursorUtils();
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    var Comparable = class {
      constructor(properties) {
        this.properties = properties;
        this.ordered = properties.slice();
      }
      createRecursor() {
        const length = this.ordered.length;
        let index2 = 0;
        return () => {
          if (index2 === length)
            return null;
          return this.ordered[index2++];
        };
      }
      compare(expected) {
        if (this.properties.length !== expected.properties.length)
          return UNEQUAL;
        const ordered = [];
        const processed = /* @__PURE__ */ new Set();
        for (const property of this.properties) {
          let extraneous = true;
          for (const other of expected.properties) {
            if (processed.has(other.key))
              continue;
            if (property.key.compare(other.key) === DEEP_EQUAL) {
              extraneous = false;
              processed.add(other.key);
              ordered.push(other);
              break;
            }
          }
          if (extraneous)
            return UNEQUAL;
        }
        expected.ordered = ordered;
        return SHALLOW_EQUAL;
      }
      prepareDiff(expected) {
        const missingProperties = [];
        const ordered = [];
        const processed = /* @__PURE__ */ new Set();
        for (const other of expected.properties) {
          let missing = true;
          for (const property of this.properties) {
            if (processed.has(property.key))
              continue;
            if (property.key.compare(other.key) === DEEP_EQUAL) {
              missing = false;
              processed.add(property.key);
              ordered.push(other);
              break;
            }
          }
          if (missing) {
            missingProperties.push(other);
          }
        }
        expected.ordered = ordered.concat(missingProperties);
        return { mustRecurse: true };
      }
    };
    Object.defineProperty(Comparable.prototype, "isSymbolPropertiesComparable", { value: true });
    exports.Comparable = Comparable;
    var Collector = class {
      constructor(firstProperty, recursor) {
        this.properties = [firstProperty];
        this.recursor = recursor;
        this.remainder = null;
      }
      collectAll() {
        do {
          const next = this.recursor();
          if (next && next.isProperty === true) {
            this.properties.push(next);
          } else {
            return next;
          }
        } while (true);
      }
      createRecursor() {
        return recursorUtils.singleValue(new Comparable(this.properties));
      }
    };
    Object.defineProperty(Collector.prototype, "isSymbolPropertiesCollector", { value: true });
    exports.Collector = Collector;
  }
});

// node_modules/concordance/lib/compare.js
var require_compare2 = __commonJS({
  "node_modules/concordance/lib/compare.js"(exports) {
    "use strict";
    var Circular = require_Circular();
    var constants = require_constants();
    var describe2 = require_describe();
    var recursorUtils = require_recursorUtils();
    var shouldCompareDeep = require_shouldCompareDeep();
    var symbolProperties = require_symbolProperties();
    var AMBIGUOUS = constants.AMBIGUOUS;
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    function shortcircuitPrimitive(value) {
      if (value === null || value === void 0 || value === true || value === false)
        return true;
      const type2 = typeof value;
      if (type2 === "string" || type2 === "symbol")
        return true;
      if (type2 === "number")
        return !isNaN(value);
      return false;
    }
    function compareDescriptors(lhs, rhs) {
      const lhsCircular = new Circular();
      const rhsCircular = new Circular();
      const lhsStack = [];
      const rhsStack = [];
      let topIndex = -1;
      do {
        let result;
        if (lhsCircular.has(lhs)) {
          result = lhsCircular.get(lhs) === rhsCircular.get(rhs) ? DEEP_EQUAL : UNEQUAL;
        } else if (rhsCircular.has(rhs)) {
          result = UNEQUAL;
        } else {
          result = lhs.compare(rhs);
        }
        if (result === UNEQUAL)
          return false;
        if (result !== DEEP_EQUAL) {
          if (!shouldCompareDeep(result, lhs, rhs))
            return false;
          if (result === AMBIGUOUS && lhs.isProperty === true) {
            lhs = new symbolProperties.Collector(lhs, lhsStack[topIndex].recursor);
            rhs = new symbolProperties.Collector(rhs, rhsStack[topIndex].recursor);
            lhsStack[topIndex].recursor = recursorUtils.unshift(lhsStack[topIndex].recursor, lhs.collectAll());
            rhsStack[topIndex].recursor = recursorUtils.unshift(rhsStack[topIndex].recursor, rhs.collectAll());
          }
          lhsCircular.add(lhs);
          rhsCircular.add(rhs);
          lhsStack.push({ subject: lhs, recursor: lhs.createRecursor() });
          rhsStack.push({ subject: rhs, recursor: rhs.createRecursor() });
          topIndex++;
        }
        while (topIndex >= 0) {
          lhs = lhsStack[topIndex].recursor();
          rhs = rhsStack[topIndex].recursor();
          if (lhs !== null && rhs !== null) {
            break;
          }
          if (lhs === null && rhs === null) {
            const lhsRecord = lhsStack.pop();
            const rhsRecord = rhsStack.pop();
            lhsCircular.delete(lhsRecord.subject);
            rhsCircular.delete(rhsRecord.subject);
            topIndex--;
          } else {
            return false;
          }
        }
      } while (topIndex >= 0);
      return true;
    }
    exports.compareDescriptors = compareDescriptors;
    function compare(actual, expected, options) {
      if (Object.is(actual, expected))
        return { pass: true };
      if (shortcircuitPrimitive(actual) || shortcircuitPrimitive(expected))
        return { pass: false };
      actual = describe2(actual, options);
      expected = describe2(expected, options);
      const pass = compareDescriptors(actual, expected);
      return { actual, expected, pass };
    }
    exports.compare = compare;
  }
});

// node_modules/concordance/lib/Indenter.js
var require_Indenter = __commonJS({
  "node_modules/concordance/lib/Indenter.js"(exports, module2) {
    "use strict";
    var Indenter = class {
      constructor(level, step) {
        this.level = level;
        this.step = step;
        this.value = step.repeat(level);
      }
      increase() {
        return new Indenter(this.level + 1, this.step);
      }
      decrease() {
        return new Indenter(this.level - 1, this.step);
      }
      toString() {
        return this.value;
      }
    };
    module2.exports = Indenter;
  }
});

// node_modules/concordance/lib/diff.js
var require_diff3 = __commonJS({
  "node_modules/concordance/lib/diff.js"(exports) {
    "use strict";
    var Circular = require_Circular();
    var Indenter = require_Indenter();
    var constants = require_constants();
    var describe2 = require_describe();
    var lineBuilder = require_lineBuilder();
    var recursorUtils = require_recursorUtils();
    var shouldCompareDeep = require_shouldCompareDeep();
    var symbolProperties = require_symbolProperties();
    var themeUtils = require_themeUtils();
    var AMBIGUOUS = constants.AMBIGUOUS;
    var DEEP_EQUAL = constants.DEEP_EQUAL;
    var UNEQUAL = constants.UNEQUAL;
    var SHALLOW_EQUAL = constants.SHALLOW_EQUAL;
    var NOOP = Symbol("NOOP");
    var alwaysFormat = () => true;
    function compareComplexShape(lhs, rhs) {
      let result = lhs.compare(rhs);
      if (result === DEEP_EQUAL)
        return DEEP_EQUAL;
      if (result === UNEQUAL || !shouldCompareDeep(result, lhs, rhs))
        return UNEQUAL;
      let collectedSymbolProperties = false;
      let lhsRecursor = lhs.createRecursor();
      let rhsRecursor = rhs.createRecursor();
      do {
        lhs = lhsRecursor();
        rhs = rhsRecursor();
        if (lhs === null && rhs === null)
          return SHALLOW_EQUAL;
        if (lhs === null || rhs === null)
          return UNEQUAL;
        result = lhs.compare(rhs);
        if (result === UNEQUAL)
          return UNEQUAL;
        if (result === AMBIGUOUS && lhs.isProperty === true && !collectedSymbolProperties && shouldCompareDeep(result, lhs, rhs)) {
          collectedSymbolProperties = true;
          const lhsCollector = new symbolProperties.Collector(lhs, lhsRecursor);
          const rhsCollector = new symbolProperties.Collector(rhs, rhsRecursor);
          lhsRecursor = recursorUtils.sequence(
            lhsCollector.createRecursor(),
            recursorUtils.unshift(lhsRecursor, lhsCollector.collectAll())
          );
          rhsRecursor = recursorUtils.sequence(
            rhsCollector.createRecursor(),
            recursorUtils.unshift(rhsRecursor, rhsCollector.collectAll())
          );
        }
      } while (true);
    }
    function diffDescriptors2(lhs, rhs, options) {
      const theme = themeUtils.normalize(options);
      const invert = options ? options.invert === true : false;
      const lhsCircular = new Circular();
      const rhsCircular = new Circular();
      const maxDepth = options && options.maxDepth || 0;
      let indent = new Indenter(0, "  ");
      const lhsStack = [];
      const rhsStack = [];
      let topIndex = -1;
      const buffer = lineBuilder.buffer();
      const diffStack = [];
      let diffIndex = -1;
      const isCircular = (descriptor) => lhsCircular.has(descriptor) || rhsCircular.has(descriptor);
      const format4 = (builder, subject, circular, depthOffset = 0) => {
        if (diffIndex >= 0 && !diffStack[diffIndex].shouldFormat(subject))
          return;
        if (circular.has(subject)) {
          diffStack[diffIndex].formatter.append(builder.single(theme.circular));
          return;
        }
        const formatStack = [];
        let formatIndex = -1;
        do {
          if (circular.has(subject)) {
            formatStack[formatIndex].formatter.append(builder.single(theme.circular), subject);
          } else {
            let didFormat = false;
            if (typeof subject.formatDeep === "function") {
              let formatted = subject.formatDeep(themeUtils.applyModifiers(subject, theme), indent);
              if (formatted !== null) {
                didFormat = true;
                if (formatIndex === -1) {
                  formatted = builder.setDefaultGutter(formatted);
                  if (diffIndex === -1) {
                    buffer.append(formatted);
                  } else {
                    diffStack[diffIndex].formatter.append(formatted, subject);
                  }
                } else {
                  formatStack[formatIndex].formatter.append(formatted, subject);
                }
              }
            }
            if (!didFormat && typeof subject.formatShallow === "function") {
              const formatter = subject.formatShallow(themeUtils.applyModifiers(subject, theme), indent);
              const recursor = subject.createRecursor();
              if (formatter.increaseIndent && maxDepth > 0 && indent.level === maxDepth + depthOffset) {
                const isEmpty = recursor() === null;
                let formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
                if (formatIndex === -1) {
                  formatted = builder.setDefaultGutter(formatted);
                  diffStack[diffIndex].formatter.append(formatted, subject);
                } else {
                  formatStack[formatIndex].formatter.append(formatted, subject);
                }
              } else {
                formatStack.push({
                  formatter,
                  recursor,
                  decreaseIndent: formatter.increaseIndent,
                  shouldFormat: formatter.shouldFormat || alwaysFormat,
                  subject
                });
                formatIndex++;
                if (formatter.increaseIndent)
                  indent = indent.increase();
                circular.add(subject);
              }
            }
          }
          while (formatIndex >= 0) {
            do {
              subject = formatStack[formatIndex].recursor();
            } while (subject && !formatStack[formatIndex].shouldFormat(subject));
            if (subject) {
              break;
            }
            const record = formatStack.pop();
            formatIndex--;
            if (record.decreaseIndent)
              indent = indent.decrease();
            circular.delete(record.subject);
            let formatted = record.formatter.finalize();
            if (formatIndex === -1) {
              formatted = builder.setDefaultGutter(formatted);
              if (diffIndex === -1) {
                buffer.append(formatted);
              } else {
                diffStack[diffIndex].formatter.append(formatted, record.subject);
              }
            } else {
              formatStack[formatIndex].formatter.append(formatted, record.subject);
            }
          }
        } while (formatIndex >= 0);
      };
      do {
        let compareResult = NOOP;
        if (lhsCircular.has(lhs)) {
          compareResult = lhsCircular.get(lhs) === rhsCircular.get(rhs) ? DEEP_EQUAL : UNEQUAL;
        } else if (rhsCircular.has(rhs)) {
          compareResult = UNEQUAL;
        }
        let firstPassSymbolProperty = false;
        if (lhs.isProperty === true) {
          compareResult = lhs.compare(rhs);
          if (compareResult === AMBIGUOUS) {
            const parent = lhsStack[topIndex].subject;
            firstPassSymbolProperty = parent.isSymbolPropertiesCollector !== true && parent.isSymbolPropertiesComparable !== true;
          }
        }
        let didFormat = false;
        let mustRecurse = false;
        if (compareResult !== DEEP_EQUAL && !firstPassSymbolProperty && typeof lhs.prepareDiff === "function") {
          const lhsRecursor = topIndex === -1 ? null : lhsStack[topIndex].recursor;
          const rhsRecursor = topIndex === -1 ? null : rhsStack[topIndex].recursor;
          const instructions = lhs.prepareDiff(
            rhs,
            lhsRecursor,
            rhsRecursor,
            compareComplexShape,
            isCircular
          );
          if (instructions !== null) {
            if (topIndex >= 0) {
              if (typeof instructions.lhsRecursor === "function") {
                lhsStack[topIndex].recursor = instructions.lhsRecursor;
              }
              if (typeof instructions.rhsRecursor === "function") {
                rhsStack[topIndex].recursor = instructions.rhsRecursor;
              }
            }
            if (instructions.compareResult) {
              compareResult = instructions.compareResult;
            }
            if (instructions.mustRecurse === true) {
              mustRecurse = true;
            } else {
              if (instructions.actualIsExtraneous === true) {
                format4(lineBuilder.actual, lhs, lhsCircular);
                didFormat = true;
              } else if (instructions.multipleAreExtraneous === true) {
                for (const extraneous of instructions.descriptors) {
                  format4(lineBuilder.actual, extraneous, lhsCircular);
                }
                didFormat = true;
              } else if (instructions.expectedIsMissing === true) {
                format4(lineBuilder.expected, rhs, rhsCircular);
                didFormat = true;
              } else if (instructions.multipleAreMissing === true) {
                for (const missing of instructions.descriptors) {
                  format4(lineBuilder.expected, missing, rhsCircular);
                }
                didFormat = true;
              } else if (instructions.isUnequal === true) {
                format4(lineBuilder.actual, lhs, lhsCircular);
                format4(lineBuilder.expected, rhs, rhsCircular);
                didFormat = true;
              } else if (!instructions.compareResult) {
                throw new Error("Illegal result of prepareDiff()");
              }
            }
          }
        }
        if (!didFormat) {
          if (compareResult === NOOP) {
            compareResult = lhs.compare(rhs);
          }
          if (!mustRecurse) {
            mustRecurse = shouldCompareDeep(compareResult, lhs, rhs);
          }
          if (compareResult === DEEP_EQUAL) {
            format4(lineBuilder, lhs, lhsCircular);
          } else if (mustRecurse) {
            if (compareResult === AMBIGUOUS && lhs.isProperty === true) {
              lhs = new symbolProperties.Collector(lhs, lhsStack[topIndex].recursor);
              rhs = new symbolProperties.Collector(rhs, rhsStack[topIndex].recursor);
              lhsStack[topIndex].recursor = recursorUtils.unshift(lhsStack[topIndex].recursor, lhs.collectAll());
              rhsStack[topIndex].recursor = recursorUtils.unshift(rhsStack[topIndex].recursor, rhs.collectAll());
            }
            if (typeof lhs.diffShallow === "function") {
              const formatter = lhs.diffShallow(rhs, themeUtils.applyModifiers(lhs, theme), indent);
              diffStack.push({
                formatter,
                origin: lhs,
                decreaseIndent: formatter.increaseIndent,
                exceedsMaxDepth: formatter.increaseIndent && maxDepth > 0 && indent.level >= maxDepth,
                shouldFormat: formatter.shouldFormat || alwaysFormat
              });
              diffIndex++;
              if (formatter.increaseIndent)
                indent = indent.increase();
            } else if (typeof lhs.formatShallow === "function") {
              const formatter = lhs.formatShallow(themeUtils.applyModifiers(lhs, theme), indent);
              diffStack.push({
                formatter,
                decreaseIndent: formatter.increaseIndent,
                exceedsMaxDepth: formatter.increaseIndent && maxDepth > 0 && indent.level >= maxDepth,
                shouldFormat: formatter.shouldFormat || alwaysFormat,
                subject: lhs
              });
              diffIndex++;
              if (formatter.increaseIndent)
                indent = indent.increase();
            }
            lhsCircular.add(lhs);
            rhsCircular.add(rhs);
            lhsStack.push({ diffIndex, subject: lhs, recursor: lhs.createRecursor() });
            rhsStack.push({ diffIndex, subject: rhs, recursor: rhs.createRecursor() });
            topIndex++;
          } else {
            const diffed = typeof lhs.diffDeep === "function" ? lhs.diffDeep(rhs, themeUtils.applyModifiers(lhs, theme), indent, invert) : null;
            if (diffed === null) {
              format4(lineBuilder.actual, lhs, lhsCircular);
              format4(lineBuilder.expected, rhs, rhsCircular);
            } else {
              if (diffIndex === -1) {
                buffer.append(diffed);
              } else {
                diffStack[diffIndex].formatter.append(diffed, lhs);
              }
            }
          }
        }
        while (topIndex >= 0) {
          lhs = lhsStack[topIndex].recursor();
          rhs = rhsStack[topIndex].recursor();
          if (lhs !== null && rhs !== null) {
            break;
          }
          if (lhs === null && rhs === null) {
            const lhsRecord = lhsStack.pop();
            const rhsRecord = rhsStack.pop();
            lhsCircular.delete(lhsRecord.subject);
            rhsCircular.delete(rhsRecord.subject);
            topIndex--;
            if (lhsRecord.diffIndex === diffIndex) {
              const record = diffStack.pop();
              diffIndex--;
              if (record.decreaseIndent)
                indent = indent.decrease();
              let formatted = record.formatter.finalize();
              if (record.exceedsMaxDepth && !formatted.hasGutter) {
                const subject = lhsRecord.subject;
                const formatter = subject.formatShallow(themeUtils.applyModifiers(subject, theme), indent);
                const isEmpty = subject.createRecursor()() === null;
                formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
              }
              if (diffIndex === -1) {
                buffer.append(formatted);
              } else {
                diffStack[diffIndex].formatter.append(formatted, record.subject);
              }
            }
          } else {
            let builder, circular, stack, subject;
            if (lhs === null) {
              builder = lineBuilder.expected;
              circular = rhsCircular;
              stack = rhsStack;
              subject = rhs;
            } else {
              builder = lineBuilder.actual;
              circular = lhsCircular;
              stack = lhsStack;
              subject = lhs;
            }
            do {
              format4(builder, subject, circular, indent.level);
              subject = stack[topIndex].recursor();
            } while (subject !== null);
          }
        }
      } while (topIndex >= 0);
      return buffer.toString({ diff: true, invert, theme });
    }
    exports.diffDescriptors = diffDescriptors2;
    function diff2(actual, expected, options) {
      return diffDescriptors2(describe2(actual, options), describe2(expected, options), options);
    }
    exports.diff = diff2;
  }
});

// node_modules/concordance/lib/format.js
var require_format = __commonJS({
  "node_modules/concordance/lib/format.js"(exports) {
    "use strict";
    var Circular = require_Circular();
    var Indenter = require_Indenter();
    var describe2 = require_describe();
    var lineBuilder = require_lineBuilder();
    var themeUtils = require_themeUtils();
    var alwaysFormat = () => true;
    var fixedIndent = new Indenter(0, "  ");
    function formatDescriptor(subject, options) {
      const theme = themeUtils.normalize(options);
      if (subject.isPrimitive === true) {
        const formatted = subject.formatDeep(themeUtils.applyModifiers(subject, theme), fixedIndent);
        return formatted.toString({ diff: false });
      }
      const circular = new Circular();
      const maxDepth = options && options.maxDepth || 0;
      let indent = fixedIndent;
      const buffer = lineBuilder.buffer();
      const stack = [];
      let topIndex = -1;
      do {
        if (circular.has(subject)) {
          stack[topIndex].formatter.append(lineBuilder.single(theme.circular), subject);
        } else {
          let didFormat = false;
          if (typeof subject.formatDeep === "function") {
            const formatted = subject.formatDeep(themeUtils.applyModifiers(subject, theme), indent);
            if (formatted !== null) {
              didFormat = true;
              if (topIndex === -1) {
                buffer.append(formatted);
              } else {
                stack[topIndex].formatter.append(formatted, subject);
              }
            }
          }
          if (!didFormat && typeof subject.formatShallow === "function") {
            const formatter = subject.formatShallow(themeUtils.applyModifiers(subject, theme), indent);
            const recursor = subject.createRecursor();
            if (formatter.increaseIndent && maxDepth > 0 && indent.level === maxDepth) {
              const isEmpty = recursor() === null;
              const formatted = !isEmpty && typeof formatter.maxDepth === "function" ? formatter.maxDepth() : formatter.finalize();
              stack[topIndex].formatter.append(formatted, subject);
            } else {
              stack.push({
                formatter,
                recursor,
                decreaseIndent: formatter.increaseIndent,
                shouldFormat: formatter.shouldFormat || alwaysFormat,
                subject
              });
              topIndex++;
              if (formatter.increaseIndent)
                indent = indent.increase();
              circular.add(subject);
            }
          }
        }
        while (topIndex >= 0) {
          do {
            subject = stack[topIndex].recursor();
          } while (subject && !stack[topIndex].shouldFormat(subject));
          if (subject) {
            break;
          }
          const record = stack.pop();
          topIndex--;
          if (record.decreaseIndent)
            indent = indent.decrease();
          circular.delete(record.subject);
          const formatted = record.formatter.finalize();
          if (topIndex === -1) {
            buffer.append(formatted);
          } else {
            stack[topIndex].formatter.append(formatted, record.subject);
          }
        }
      } while (topIndex >= 0);
      return buffer.toString({ diff: false });
    }
    exports.formatDescriptor = formatDescriptor;
    function format4(value, options) {
      return formatDescriptor(describe2(value, options), options);
    }
    exports.format = format4;
  }
});

// node_modules/md5-hex/index.js
var require_md5_hex = __commonJS({
  "node_modules/md5-hex/index.js"(exports, module2) {
    "use strict";
    var crypto = require("crypto");
    module2.exports = (data) => {
      const hash = crypto.createHash("md5");
      const update = (buffer) => {
        const inputEncoding = typeof buffer === "string" ? "utf8" : void 0;
        hash.update(buffer, inputEncoding);
      };
      if (Array.isArray(data)) {
        for (const element of data) {
          update(element);
        }
      } else {
        update(data);
      }
      return hash.digest("hex");
    };
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module2.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array2, depth, predicate, isStrict, result) {
      var index2 = -1, length = array2.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array2[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module2.exports = baseFlatten;
  }
});

// node_modules/lodash/flattenDeep.js
var require_flattenDeep = __commonJS({
  "node_modules/lodash/flattenDeep.js"(exports, module2) {
    var baseFlatten = require_baseFlatten();
    var INFINITY = 1 / 0;
    function flattenDeep(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseFlatten(array2, INFINITY) : [];
    }
    module2.exports = flattenDeep;
  }
});

// node_modules/concordance/lib/encoder.js
var require_encoder = __commonJS({
  "node_modules/concordance/lib/encoder.js"(exports) {
    "use strict";
    var flattenDeep = require_flattenDeep();
    var valueTypes = {
      zero: 0,
      int8: 1,
      // Note that the hex value equals the number of bytes required
      int16: 2,
      // to store the integer.
      int24: 3,
      int32: 4,
      int40: 5,
      int48: 6,
      numberString: 7,
      negativeZero: 8,
      notANumber: 9,
      infinity: 10,
      negativeInfinity: 11,
      bigInt: 12,
      undefined: 13,
      null: 14,
      true: 15,
      false: 16,
      utf8: 17,
      bytes: 18,
      list: 19,
      descriptor: 20
    };
    var descriptorSymbol = Symbol("descriptor");
    exports.descriptorSymbol = descriptorSymbol;
    function encodeInteger2(type2, value) {
      const encoded = Buffer.alloc(type2);
      encoded.writeIntLE(value, 0, type2);
      return [type2, encoded];
    }
    function encodeValue(value) {
      if (Object.is(value, 0))
        return valueTypes.zero;
      if (Object.is(value, -0))
        return valueTypes.negativeZero;
      if (Object.is(value, NaN))
        return valueTypes.notANumber;
      if (value === Infinity)
        return valueTypes.infinity;
      if (value === -Infinity)
        return valueTypes.negativeInfinity;
      if (value === void 0)
        return valueTypes.undefined;
      if (value === null)
        return valueTypes.null;
      if (value === true)
        return valueTypes.true;
      if (value === false)
        return valueTypes.false;
      const type2 = typeof value;
      if (type2 === "number") {
        if (Number.isInteger(value)) {
          if (value >= -128 && value < 128)
            return encodeInteger2(valueTypes.int8, value);
          if (value >= -32768 && value < 32768)
            return encodeInteger2(valueTypes.int16, value);
          if (value >= -8388608 && value < 8388608)
            return encodeInteger2(valueTypes.int24, value);
          if (value >= -2147483648 && value < 2147483648)
            return encodeInteger2(valueTypes.int32, value);
          if (value >= -549755813888 && value < 549755813888)
            return encodeInteger2(valueTypes.int40, value);
          if (value >= -140737488355328 && value < 140737488355328)
            return encodeInteger2(valueTypes.int48, value);
        }
        const encoded = Buffer.from(String(value), "utf8");
        return [valueTypes.numberString, encodeValue(encoded.length), encoded];
      }
      if (type2 === "string") {
        const encoded = Buffer.from(value, "utf8");
        return [valueTypes.utf8, encodeValue(encoded.length), encoded];
      }
      if (type2 === "bigint") {
        const encoded = Buffer.from(String(value), "utf8");
        return [valueTypes.bigInt, encodeValue(encoded.length), encoded];
      }
      if (Buffer.isBuffer(value)) {
        return [valueTypes.bytes, encodeValue(value.byteLength), value];
      }
      if (Array.isArray(value)) {
        return [
          value[descriptorSymbol] === true ? valueTypes.descriptor : valueTypes.list,
          encodeValue(value.length),
          value.map((x) => encodeValue(x))
        ];
      }
      const hex2 = `0x${type2.toString(16).toUpperCase()}`;
      throw new TypeError(`Unexpected value with type ${hex2}`);
    }
    function decodeValue(buffer, byteOffset) {
      const type2 = buffer.readUInt8(byteOffset);
      byteOffset += 1;
      if (type2 === valueTypes.zero)
        return { byteOffset, value: 0 };
      if (type2 === valueTypes.negativeZero)
        return { byteOffset, value: -0 };
      if (type2 === valueTypes.notANumber)
        return { byteOffset, value: NaN };
      if (type2 === valueTypes.infinity)
        return { byteOffset, value: Infinity };
      if (type2 === valueTypes.negativeInfinity)
        return { byteOffset, value: -Infinity };
      if (type2 === valueTypes.undefined)
        return { byteOffset, value: void 0 };
      if (type2 === valueTypes.null)
        return { byteOffset, value: null };
      if (type2 === valueTypes.true)
        return { byteOffset, value: true };
      if (type2 === valueTypes.false)
        return { byteOffset, value: false };
      if (type2 === valueTypes.int8 || type2 === valueTypes.int16 || type2 === valueTypes.int24 || type2 === valueTypes.int32 || type2 === valueTypes.int40 || type2 === valueTypes.int48) {
        const value = buffer.readIntLE(byteOffset, type2);
        byteOffset += type2;
        return { byteOffset, value };
      }
      if (type2 === valueTypes.numberString || type2 === valueTypes.utf8 || type2 === valueTypes.bytes || type2 === valueTypes.bigInt) {
        const length = decodeValue(buffer, byteOffset);
        const start = length.byteOffset;
        const end = start + length.value;
        if (type2 === valueTypes.numberString) {
          const value2 = Number(buffer.toString("utf8", start, end));
          return { byteOffset: end, value: value2 };
        }
        if (type2 === valueTypes.utf8) {
          const value2 = buffer.toString("utf8", start, end);
          return { byteOffset: end, value: value2 };
        }
        if (type2 === valueTypes.bigInt) {
          const value2 = BigInt(buffer.toString("utf8", start, end));
          return { byteOffset: end, value: value2 };
        }
        const value = buffer.slice(start, end);
        return { byteOffset: end, value };
      }
      if (type2 === valueTypes.list || type2 === valueTypes.descriptor) {
        const length = decodeValue(buffer, byteOffset);
        byteOffset = length.byteOffset;
        const value = new Array(length.value);
        if (type2 === valueTypes.descriptor) {
          value[descriptorSymbol] = true;
        }
        for (let index2 = 0; index2 < length.value; index2++) {
          const item = decodeValue(buffer, byteOffset);
          byteOffset = item.byteOffset;
          value[index2] = item.value;
        }
        return { byteOffset, value };
      }
      const hex2 = `0x${type2.toString(16).toUpperCase()}`;
      throw new TypeError(`Could not decode type ${hex2}`);
    }
    function buildBuffer(numberOrArray) {
      if (typeof numberOrArray === "number") {
        const byte = Buffer.alloc(1);
        byte.writeUInt8(numberOrArray);
        return byte;
      }
      const array2 = flattenDeep(numberOrArray);
      const buffers = new Array(array2.length);
      let byteLength = 0;
      for (const [index2, element] of array2.entries()) {
        if (typeof element === "number") {
          byteLength += 1;
          const byte = Buffer.alloc(1);
          byte.writeUInt8(element);
          buffers[index2] = byte;
        } else {
          byteLength += element.byteLength;
          buffers[index2] = element;
        }
      }
      return Buffer.concat(buffers, byteLength);
    }
    function encode2(serializerVersion, rootRecord, usedPlugins) {
      const buffers = [];
      let byteOffset = 0;
      const versionHeader = Buffer.alloc(2);
      versionHeader.writeUInt16LE(serializerVersion);
      buffers.push(versionHeader);
      byteOffset += versionHeader.byteLength;
      const rootOffset = Buffer.alloc(4);
      buffers.push(rootOffset);
      byteOffset += rootOffset.byteLength;
      const numPlugins = buildBuffer(encodeValue(usedPlugins.size));
      buffers.push(numPlugins);
      byteOffset += numPlugins.byteLength;
      for (const name of usedPlugins.keys()) {
        const plugin2 = usedPlugins.get(name);
        const record = buildBuffer([
          encodeValue(name),
          encodeValue(plugin2.serializerVersion)
        ]);
        buffers.push(record);
        byteOffset += record.byteLength;
      }
      const queue = [rootRecord];
      const pointers = [rootOffset];
      while (queue.length > 0) {
        pointers.shift().writeUInt32LE(byteOffset, 0);
        const record = queue.shift();
        const recordHeader = buildBuffer([
          encodeValue(record.pluginIndex),
          encodeValue(record.id),
          encodeValue(record.children.length)
        ]);
        buffers.push(recordHeader);
        byteOffset += recordHeader.byteLength;
        for (const child of record.children) {
          queue.push(child);
          const pointer = Buffer.alloc(4);
          pointers.push(pointer);
          buffers.push(pointer);
          byteOffset += 4;
        }
        const state = buildBuffer(encodeValue(record.state));
        buffers.push(state);
        byteOffset += state.byteLength;
      }
      return Buffer.concat(buffers, byteOffset);
    }
    exports.encode = encode2;
    function decodePlugins(buffer) {
      const $numPlugins = decodeValue(buffer, 0);
      let byteOffset = $numPlugins.byteOffset;
      const usedPlugins = /* @__PURE__ */ new Map();
      const lastIndex = $numPlugins.value;
      for (let index2 = 1; index2 <= lastIndex; index2++) {
        const $name = decodeValue(buffer, byteOffset);
        const name = $name.value;
        byteOffset = $name.byteOffset;
        const serializerVersion = decodeValue(buffer, byteOffset).value;
        usedPlugins.set(index2, { name, serializerVersion });
      }
      return usedPlugins;
    }
    exports.decodePlugins = decodePlugins;
    function decodeRecord(buffer, byteOffset) {
      const $pluginIndex = decodeValue(buffer, byteOffset);
      const pluginIndex = $pluginIndex.value;
      byteOffset = $pluginIndex.byteOffset;
      const $id = decodeValue(buffer, byteOffset);
      const id = $id.value;
      byteOffset = $id.byteOffset;
      const $numPointers = decodeValue(buffer, byteOffset);
      const numPointers = $numPointers.value;
      byteOffset = $numPointers.byteOffset;
      const pointerAddresses = new Array(numPointers);
      for (let index2 = 0; index2 < numPointers; index2++) {
        pointerAddresses[index2] = buffer.readUInt32LE(byteOffset);
        byteOffset += 4;
      }
      const state = decodeValue(buffer, byteOffset).value;
      return { id, pluginIndex, state, pointerAddresses };
    }
    exports.decodeRecord = decodeRecord;
    function extractVersion(buffer) {
      return buffer.readUInt16LE(0);
    }
    exports.extractVersion = extractVersion;
    function decode(buffer) {
      const rootOffset = buffer.readUInt32LE(2);
      const pluginBuffer = buffer.slice(6, rootOffset);
      const rootRecord = decodeRecord(buffer, rootOffset);
      return { pluginBuffer, rootRecord };
    }
    exports.decode = decode;
  }
});

// node_modules/concordance/lib/metaDescriptors/pointer.js
var require_pointer = __commonJS({
  "node_modules/concordance/lib/metaDescriptors/pointer.js"(exports) {
    "use strict";
    var UNEQUAL = require_constants().UNEQUAL;
    function describe2(index2) {
      return new Pointer(index2);
    }
    exports.describe = describe2;
    exports.deserialize = describe2;
    var tag = Symbol("Pointer");
    exports.tag = tag;
    var Pointer = class {
      constructor(index2) {
        this.index = index2;
      }
      // Pointers cannot be compared, and are not expected to be part of the
      // comparisons.
      compare(expected) {
        return UNEQUAL;
      }
      serialize() {
        return this.index;
      }
    };
    Object.defineProperty(Pointer.prototype, "isPointer", { value: true });
    Object.defineProperty(Pointer.prototype, "tag", { value: tag });
  }
});

// node_modules/concordance/lib/serialize.js
var require_serialize = __commonJS({
  "node_modules/concordance/lib/serialize.js"(exports) {
    "use strict";
    var md5hex = require_md5_hex();
    var argumentsValue = require_arguments();
    var arrayBufferValue = require_arrayBuffer();
    var boxedValue = require_boxed();
    var dataViewValue = require_dataView();
    var dateValue = require_date();
    var errorValue = require_error();
    var functionValue = require_function();
    var globalValue = require_global();
    var mapValue = require_map();
    var objectValue = require_object();
    var promiseValue = require_promise();
    var regexpValue = require_regexp();
    var setValue = require_set();
    var typedArrayValue = require_typedArray();
    var encoder = require_encoder();
    var itemDescriptor = require_item();
    var mapEntryDescriptor = require_mapEntry();
    var pointerDescriptor = require_pointer();
    var propertyDescriptor = require_property();
    var statsDescriptors = require_stats();
    var pluginRegistry = require_pluginRegistry();
    var bigIntValue = require_bigInt();
    var booleanValue = require_boolean();
    var nullValue = require_null();
    var numberValue = require_number();
    var stringValue = require_string();
    var symbolValue = require_symbol();
    var undefinedValue = require_undefined();
    var recursorUtils = require_recursorUtils();
    var VERSION = 3;
    var mappings = [
      [1, bigIntValue.tag, bigIntValue.deserialize],
      [2, booleanValue.tag, booleanValue.deserialize],
      [3, nullValue.tag, nullValue.deserialize],
      [4, numberValue.tag, numberValue.deserialize],
      [5, stringValue.tag, stringValue.deserialize],
      [6, symbolValue.tag, symbolValue.deserialize],
      [7, undefinedValue.tag, undefinedValue.deserialize],
      [8, objectValue.tag, objectValue.deserialize],
      [9, statsDescriptors.iterableTag, statsDescriptors.deserializeIterableStats],
      [10, statsDescriptors.listTag, statsDescriptors.deserializeListStats],
      [11, itemDescriptor.complexTag, itemDescriptor.deserializeComplex],
      [12, itemDescriptor.primitiveTag, itemDescriptor.deserializePrimitive],
      [13, statsDescriptors.propertyTag, statsDescriptors.deserializePropertyStats],
      [14, propertyDescriptor.complexTag, propertyDescriptor.deserializeComplex],
      [15, propertyDescriptor.primitiveTag, propertyDescriptor.deserializePrimitive],
      [16, pointerDescriptor.tag, pointerDescriptor.deserialize],
      [17, mapValue.tag, mapValue.deserialize],
      [18, mapEntryDescriptor.tag, mapEntryDescriptor.deserialize],
      [19, argumentsValue.tag, argumentsValue.deserialize],
      [20, arrayBufferValue.tag, arrayBufferValue.deserialize],
      [21, boxedValue.tag, boxedValue.deserialize],
      [22, dataViewValue.tag, dataViewValue.deserialize],
      [23, dateValue.tag, dateValue.deserialize],
      [24, errorValue.tag, errorValue.deserialize],
      [25, functionValue.tag, functionValue.deserialize],
      [26, globalValue.tag, globalValue.deserialize],
      [27, promiseValue.tag, promiseValue.deserialize],
      [28, regexpValue.tag, regexpValue.deserialize],
      [29, setValue.tag, setValue.deserialize],
      [30, typedArrayValue.tag, typedArrayValue.deserialize],
      [31, typedArrayValue.bytesTag, typedArrayValue.deserializeBytes]
    ];
    var tag2id = new Map(mappings.map((mapping) => [mapping[1], mapping[0]]));
    var id2deserialize = new Map(mappings.map((mapping) => [mapping[0], mapping[2]]));
    var DescriptorSerializationError = class extends Error {
      constructor(descriptor) {
        super("Could not serialize descriptor");
        this.name = "DescriptorSerializationError";
        this.descriptor = descriptor;
      }
    };
    var MissingPluginError = class extends Error {
      constructor(pluginName) {
        super(`Could not deserialize buffer: missing plugin ${JSON.stringify(pluginName)}`);
        this.name = "MissingPluginError";
        this.pluginName = pluginName;
      }
    };
    var PointerLookupError = class extends Error {
      constructor(index2) {
        super(`Could not deserialize buffer: pointer ${index2} could not be resolved`);
        this.name = "PointerLookupError";
        this.index = index2;
      }
    };
    var UnsupportedPluginError = class extends Error {
      constructor(pluginName, serializerVersion) {
        super(`Could not deserialize buffer: plugin ${JSON.stringify(pluginName)} expects a different serialization`);
        this.name = "UnsupportedPluginError";
        this.pluginName = pluginName;
        this.serializerVersion = serializerVersion;
      }
    };
    var UnsupportedVersion = class extends Error {
      // eslint-disable-line unicorn/custom-error-definition
      constructor(serializerVersion) {
        super("Could not deserialize buffer: a different serialization was expected");
        this.name = "UnsupportedVersion";
        this.serializerVersion = serializerVersion;
      }
    };
    function shallowSerializeDescriptor(descriptor, resolvePluginRef) {
      if (!descriptor.serialize)
        return void 0;
      return serializeState(descriptor.serialize(), resolvePluginRef);
    }
    function serializeState(state, resolvePluginRef) {
      if (Array.isArray(state))
        return state.map((x) => serializeState(x));
      if (state && state.tag) {
        let id, pluginIndex;
        if (tag2id.has(state.tag)) {
          id = tag2id.get(state.tag);
          pluginIndex = 0;
        } else {
          const ref = resolvePluginRef(state.tag);
          if (ref) {
            id = ref.id;
            pluginIndex = ref.pluginIndex;
          }
        }
        if (id !== void 0) {
          const serialized = [pluginIndex, id, shallowSerializeDescriptor(state, resolvePluginRef)];
          serialized[encoder.descriptorSymbol] = true;
          return serialized;
        }
      }
      return state;
    }
    function serialize2(descriptor) {
      const usedPlugins = /* @__PURE__ */ new Map();
      const resolvePluginRef = (tag) => {
        const ref = pluginRegistry.resolveDescriptorRef(tag);
        if (!ref)
          return null;
        if (!usedPlugins.has(ref.name)) {
          const index2 = usedPlugins.size + 1;
          usedPlugins.set(ref.name, Object.assign({ index: index2 }, ref.serialization));
        }
        return {
          id: ref.id,
          pluginIndex: usedPlugins.get(ref.name).index
        };
      };
      const seen = /* @__PURE__ */ new Set();
      const stack = [];
      let topIndex = -1;
      let rootRecord;
      do {
        if (descriptor.isComplex === true) {
          if (seen.has(descriptor.pointer)) {
            descriptor = pointerDescriptor.describe(descriptor.pointer);
          } else {
            seen.add(descriptor.pointer);
          }
        }
        let id;
        let pluginIndex = 0;
        if (tag2id.has(descriptor.tag)) {
          id = tag2id.get(descriptor.tag);
        } else {
          const ref = resolvePluginRef(descriptor.tag);
          if (!ref)
            throw new DescriptorSerializationError(descriptor);
          id = ref.id;
          pluginIndex = ref.pluginIndex;
        }
        const record = {
          id,
          pluginIndex,
          children: [],
          state: shallowSerializeDescriptor(descriptor, resolvePluginRef)
        };
        if (!rootRecord) {
          rootRecord = record;
        } else {
          stack[topIndex].children.push(record);
        }
        if (descriptor.createRecursor) {
          stack.push({ recursor: descriptor.createRecursor(), children: record.children });
          topIndex++;
        }
        while (topIndex >= 0) {
          descriptor = stack[topIndex].recursor();
          if (descriptor === null) {
            stack.pop();
            topIndex--;
          } else {
            break;
          }
        }
      } while (topIndex >= 0);
      return encoder.encode(VERSION, rootRecord, usedPlugins);
    }
    exports.serialize = serialize2;
    function deserializeState(state, getDescriptorDeserializer) {
      if (state && state[encoder.descriptorSymbol] === true) {
        return shallowDeserializeDescriptor(state, getDescriptorDeserializer);
      }
      return Array.isArray(state) ? state.map((item) => deserializeState(item, getDescriptorDeserializer)) : state;
    }
    function shallowDeserializeDescriptor(entry, getDescriptorDeserializer) {
      const deserializeDescriptor = getDescriptorDeserializer(entry[0], entry[1]);
      return deserializeDescriptor(entry[2]);
    }
    function deserializeRecord(record, getDescriptorDeserializer, buffer) {
      const deserializeDescriptor = getDescriptorDeserializer(record.pluginIndex, record.id);
      const state = deserializeState(record.state, getDescriptorDeserializer);
      if (record.pointerAddresses.length === 0) {
        return deserializeDescriptor(state);
      }
      const endIndex = record.pointerAddresses.length;
      let index2 = 0;
      const recursor = () => {
        if (index2 === endIndex)
          return null;
        const recursorRecord = encoder.decodeRecord(buffer, record.pointerAddresses[index2++]);
        return deserializeRecord(recursorRecord, getDescriptorDeserializer, buffer);
      };
      return deserializeDescriptor(state, recursor);
    }
    function buildPluginMap(buffer, options) {
      const cache2 = options && options.deserializedPluginsCache;
      const cacheKey = md5hex(buffer);
      if (cache2 && cache2.has(cacheKey))
        return cache2.get(cacheKey);
      const decodedPlugins = encoder.decodePlugins(buffer);
      if (decodedPlugins.size === 0) {
        const pluginMap2 = /* @__PURE__ */ new Map();
        if (cache2)
          cache2.set(cacheKey, pluginMap2);
        return pluginMap2;
      }
      const deserializerLookup = /* @__PURE__ */ new Map();
      if (Array.isArray(options && options.plugins)) {
        for (const deserializer of pluginRegistry.getDeserializers(options.plugins)) {
          deserializerLookup.set(deserializer.name, deserializer);
        }
      }
      const pluginMap = /* @__PURE__ */ new Map();
      for (const index2 of decodedPlugins.keys()) {
        const used = decodedPlugins.get(index2);
        const pluginName = used.name;
        const serializerVersion = used.serializerVersion;
        if (!deserializerLookup.has(pluginName)) {
          throw new MissingPluginError(pluginName);
        }
        if (serializerVersion !== deserializerLookup.get(pluginName).serializerVersion) {
          throw new UnsupportedPluginError(pluginName, serializerVersion);
        }
        pluginMap.set(index2, deserializerLookup.get(pluginName).id2deserialize);
      }
      if (cache2)
        cache2.set(cacheKey, pluginMap);
      return pluginMap;
    }
    function deserialize(buffer, options) {
      const version2 = encoder.extractVersion(buffer);
      if (version2 !== VERSION)
        throw new UnsupportedVersion(version2);
      const decoded = encoder.decode(buffer);
      const pluginMap = buildPluginMap(decoded.pluginBuffer, options);
      const descriptorsByPointerIndex = /* @__PURE__ */ new Map();
      const mapPointerDescriptor = (descriptor) => {
        if (descriptor.isPointer === true) {
          if (descriptorsByPointerIndex.has(descriptor.index)) {
            return descriptorsByPointerIndex.get(descriptor.index);
          }
          if (typeof rootDescriptor.createRecursor === "function") {
            recursorUtils.consumeDeep(rootDescriptor.createRecursor());
            if (descriptorsByPointerIndex.has(descriptor.index)) {
              return descriptorsByPointerIndex.get(descriptor.index);
            }
          }
          throw new PointerLookupError(descriptor.index);
        }
        if (descriptor.isComplex === true) {
          descriptorsByPointerIndex.set(descriptor.pointer, descriptor);
        }
        return descriptor;
      };
      const getDescriptorDeserializer = (pluginIndex, id) => {
        return (state, recursor) => {
          const deserializeDescriptor = pluginIndex === 0 ? id2deserialize.get(id) : pluginMap.get(pluginIndex).get(id);
          return mapPointerDescriptor(deserializeDescriptor(state, recursor));
        };
      };
      const rootDescriptor = deserializeRecord(decoded.rootRecord, getDescriptorDeserializer, buffer);
      return rootDescriptor;
    }
    exports.deserialize = deserialize;
  }
});

// node_modules/concordance/index.js
var require_concordance = __commonJS({
  "node_modules/concordance/index.js"(exports) {
    "use strict";
    var compare = require_compare2();
    var describe2 = require_describe();
    var diff2 = require_diff3();
    var format4 = require_format();
    var serialize2 = require_serialize();
    exports.compare = compare.compare;
    exports.compareDescriptors = compare.compareDescriptors;
    exports.describe = describe2;
    exports.diff = diff2.diff;
    exports.diffDescriptors = diff2.diffDescriptors;
    exports.format = format4.format;
    exports.formatDescriptor = format4.formatDescriptor;
    exports.serialize = serialize2.serialize;
    exports.deserialize = serialize2.deserialize;
  }
});

// node_modules/assertion-error/index.js
var require_assertion_error = __commonJS({
  "node_modules/assertion-error/index.js"(exports, module2) {
    function exclude() {
      var excludes = [].slice.call(arguments);
      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function(key) {
          if (!~excludes.indexOf(key))
            res[key] = obj[key];
        });
      }
      return function extendExclude() {
        var args = [].slice.call(arguments), i2 = 0, res = {};
        for (; i2 < args.length; i2++) {
          excludeProps(res, args[i2]);
        }
        return res;
      };
    }
    module2.exports = AssertionError2;
    function AssertionError2(message, _props, ssf) {
      var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
      this.message = message || "Unspecified AssertionError";
      this.showDiff = false;
      for (var key in props) {
        this[key] = props[key];
      }
      ssf = ssf || AssertionError2;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        try {
          throw new Error();
        } catch (e) {
          this.stack = e.stack;
        }
      }
    }
    AssertionError2.prototype = Object.create(Error.prototype);
    AssertionError2.prototype.name = "AssertionError";
    AssertionError2.prototype.constructor = AssertionError2;
    AssertionError2.prototype.toJSON = function(stack) {
      var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }
      return props;
    };
  }
});

// node_modules/pathval/index.js
var require_pathval = __commonJS({
  "node_modules/pathval/index.js"(exports, module2) {
    "use strict";
    function hasProperty(obj, name) {
      if (typeof obj === "undefined" || obj === null) {
        return false;
      }
      return name in Object(obj);
    }
    function parsePath(path2) {
      var str = path2.replace(/([^\\])\[/g, "$1.[");
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function mapMatches(value) {
        if (value === "constructor" || value === "__proto__" || value === "prototype") {
          return {};
        }
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
          parsed = { i: parseFloat(mArr[1]) };
        } else {
          parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
        }
        return parsed;
      });
    }
    function internalGetPathValue(obj, parsed, pathDepth) {
      var temporaryValue = obj;
      var res = null;
      pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
      for (var i2 = 0; i2 < pathDepth; i2++) {
        var part = parsed[i2];
        if (temporaryValue) {
          if (typeof part.p === "undefined") {
            temporaryValue = temporaryValue[part.i];
          } else {
            temporaryValue = temporaryValue[part.p];
          }
          if (i2 === pathDepth - 1) {
            res = temporaryValue;
          }
        }
      }
      return res;
    }
    function internalSetPathValue(obj, val, parsed) {
      var tempObj = obj;
      var pathDepth = parsed.length;
      var part = null;
      for (var i2 = 0; i2 < pathDepth; i2++) {
        var propName = null;
        var propVal = null;
        part = parsed[i2];
        if (i2 === pathDepth - 1) {
          propName = typeof part.p === "undefined" ? part.i : part.p;
          tempObj[propName] = val;
        } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
          tempObj = tempObj[part.p];
        } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
          tempObj = tempObj[part.i];
        } else {
          var next = parsed[i2 + 1];
          propName = typeof part.p === "undefined" ? part.i : part.p;
          propVal = typeof next.p === "undefined" ? [] : {};
          tempObj[propName] = propVal;
          tempObj = tempObj[propName];
        }
      }
    }
    function getPathInfo(obj, path2) {
      var parsed = parsePath(path2);
      var last = parsed[parsed.length - 1];
      var info = {
        parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: internalGetPathValue(obj, parsed)
      };
      info.exists = hasProperty(info.parent, info.name);
      return info;
    }
    function getPathValue(obj, path2) {
      var info = getPathInfo(obj, path2);
      return info.value;
    }
    function setPathValue(obj, path2, val) {
      var parsed = parsePath(path2);
      internalSetPathValue(obj, val, parsed);
      return obj;
    }
    module2.exports = {
      hasProperty,
      getPathInfo,
      getPathValue,
      setPathValue
    };
  }
});

// node_modules/chai/lib/chai/utils/flag.js
var require_flag = __commonJS({
  "node_modules/chai/lib/chai/utils/flag.js"(exports, module2) {
    module2.exports = function flag(obj, key, value) {
      var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/test.js
var require_test = __commonJS({
  "node_modules/chai/lib/chai/utils/test.js"(exports, module2) {
    var flag = require_flag();
    module2.exports = function test3(obj, args) {
      var negate = flag(obj, "negate"), expr = args[0];
      return negate ? !expr : expr;
    };
  }
});

// node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "node_modules/type-detect/type-detect.js"(exports, module2) {
    (function(global3, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global3.typeDetect = factory();
    })(exports, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject2 = typeof self === "object" ? self : global;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect2(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject2) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect2;
    });
  }
});

// node_modules/chai/lib/chai/utils/expectTypes.js
var require_expectTypes = __commonJS({
  "node_modules/chai/lib/chai/utils/expectTypes.js"(exports, module2) {
    var AssertionError2 = require_assertion_error();
    var flag = require_flag();
    var type2 = require_type_detect();
    module2.exports = function expectTypes(obj, types) {
      var flagMsg = flag(obj, "message");
      var ssfi = flag(obj, "ssfi");
      flagMsg = flagMsg ? flagMsg + ": " : "";
      obj = flag(obj, "object");
      types = types.map(function(t) {
        return t.toLowerCase();
      });
      types.sort();
      var str = types.map(function(t, index2) {
        var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
        var or = types.length > 1 && index2 === types.length - 1 ? "or " : "";
        return or + art + " " + t;
      }).join(", ");
      var objType = type2(obj).toLowerCase();
      if (!types.some(function(expected) {
        return objType === expected;
      })) {
        throw new AssertionError2(
          flagMsg + "object tested must be " + str + ", but " + objType + " given",
          void 0,
          ssfi
        );
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getActual.js
var require_getActual = __commonJS({
  "node_modules/chai/lib/chai/utils/getActual.js"(exports, module2) {
    module2.exports = function getActual(obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
  }
});

// node_modules/chai/lib/chai/config.js
var require_config = __commonJS({
  "node_modules/chai/lib/chai/config.js"(exports, module2) {
    module2.exports = {
      /**
       * ### config.includeStack
       *
       * User configurable property, influences whether stack trace
       * is included in Assertion error message. Default of false
       * suppresses stack trace in the error message.
       *
       *     chai.config.includeStack = true;  // enable stack on error
       *
       * @param {Boolean}
       * @api public
       */
      includeStack: false,
      /**
       * ### config.showDiff
       *
       * User configurable property, influences whether or not
       * the `showDiff` flag should be included in the thrown
       * AssertionErrors. `false` will always be `false`; `true`
       * will be true when the assertion has requested a diff
       * be shown.
       *
       * @param {Boolean}
       * @api public
       */
      showDiff: true,
      /**
       * ### config.truncateThreshold
       *
       * User configurable property, sets length threshold for actual and
       * expected values in assertion errors. If this threshold is exceeded, for
       * example for large data structures, the value is replaced with something
       * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
       *
       * Set it to zero if you want to disable truncating altogether.
       *
       * This is especially userful when doing assertions on arrays: having this
       * set to a reasonable large value makes the failure messages readily
       * inspectable.
       *
       *     chai.config.truncateThreshold = 0;  // disable truncating
       *
       * @param {Number}
       * @api public
       */
      truncateThreshold: 40,
      /**
       * ### config.useProxy
       *
       * User configurable property, defines if chai will use a Proxy to throw
       * an error when a non-existent property is read, which protects users
       * from typos when using property-based assertions.
       *
       * Set it to false if you want to disable this feature.
       *
       *     chai.config.useProxy = false;  // disable use of Proxy
       *
       * This feature is automatically disabled regardless of this config value
       * in environments that don't support proxies.
       *
       * @param {Boolean}
       * @api public
       */
      useProxy: true,
      /**
       * ### config.proxyExcludedKeys
       *
       * User configurable property, defines which properties should be ignored
       * instead of throwing an error if they do not exist on the assertion.
       * This is only applied if the environment Chai is running in supports proxies and
       * if the `useProxy` configuration setting is enabled.
       * By default, `then` and `inspect` will not throw an error if they do not exist on the
       * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
       * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
       *
       *     // By default these keys will not throw an error if they do not exist on the assertion object
       *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
       *
       * @param {Array}
       * @api public
       */
      proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
    };
  }
});

// node_modules/chai/lib/chai/utils/inspect.js
var require_inspect = __commonJS({
  "node_modules/chai/lib/chai/utils/inspect.js"(exports, module2) {
    var getName = require_get_func_name();
    var loupe2 = (init_loupe(), __toCommonJS(loupe_exports));
    var config2 = require_config();
    module2.exports = inspect2;
    function inspect2(obj, showHidden, depth, colors) {
      var options = {
        colors,
        depth: typeof depth === "undefined" ? 2 : depth,
        showHidden,
        truncate: config2.truncateThreshold ? config2.truncateThreshold : Infinity
      };
      return loupe2.inspect(obj, options);
    }
  }
});

// node_modules/chai/lib/chai/utils/objDisplay.js
var require_objDisplay = __commonJS({
  "node_modules/chai/lib/chai/utils/objDisplay.js"(exports, module2) {
    var inspect2 = require_inspect();
    var config2 = require_config();
    module2.exports = function objDisplay2(obj) {
      var str = inspect2(obj), type2 = Object.prototype.toString.call(obj);
      if (config2.truncateThreshold && str.length >= config2.truncateThreshold) {
        if (type2 === "[object Function]") {
          return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
        } else if (type2 === "[object Array]") {
          return "[ Array(" + obj.length + ") ]";
        } else if (type2 === "[object Object]") {
          var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
          return "{ Object (" + kstr + ") }";
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getMessage.js
var require_getMessage = __commonJS({
  "node_modules/chai/lib/chai/utils/getMessage.js"(exports, module2) {
    var flag = require_flag();
    var getActual = require_getActual();
    var objDisplay2 = require_objDisplay();
    module2.exports = function getMessage(obj, args) {
      var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      msg = msg.replace(/#\{this\}/g, function() {
        return objDisplay2(val);
      }).replace(/#\{act\}/g, function() {
        return objDisplay2(actual);
      }).replace(/#\{exp\}/g, function() {
        return objDisplay2(expected);
      });
      return flagMsg ? flagMsg + ": " + msg : msg;
    };
  }
});

// node_modules/chai/lib/chai/utils/transferFlags.js
var require_transferFlags = __commonJS({
  "node_modules/chai/lib/chai/utils/transferFlags.js"(exports, module2) {
    module2.exports = function transferFlags(assertion, object2, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
      if (!object2.__flags) {
        object2.__flags = /* @__PURE__ */ Object.create(null);
      }
      includeAll = arguments.length === 3 ? includeAll : true;
      for (var flag in flags) {
        if (includeAll || flag !== "object" && flag !== "ssfi" && flag !== "lockSsfi" && flag != "message") {
          object2.__flags[flag] = flags[flag];
        }
      }
    };
  }
});

// node_modules/deep-eql/index.js
var require_deep_eql = __commonJS({
  "node_modules/deep-eql/index.js"(exports, module2) {
    "use strict";
    var type2 = require_type_detect();
    function FakeMap2() {
      this._key = "chai/deep-eql__" + Math.random() + Date.now();
    }
    FakeMap2.prototype = {
      get: function get2(key) {
        return key[this._key];
      },
      set: function set3(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this._key, {
            value,
            configurable: true
          });
        }
      }
    };
    var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap2;
    function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
      if (!memoizeMap || isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
        return null;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        var result = leftHandMap.get(rightHandOperand);
        if (typeof result === "boolean") {
          return result;
        }
      }
      return null;
    }
    function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
      if (!memoizeMap || isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
        return;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        leftHandMap.set(rightHandOperand, result);
      } else {
        leftHandMap = new MemoizeMap();
        leftHandMap.set(rightHandOperand, result);
        memoizeMap.set(leftHandOperand, leftHandMap);
      }
    }
    module2.exports = deepEqual;
    module2.exports.MemoizeMap = MemoizeMap;
    function deepEqual(leftHandOperand, rightHandOperand, options) {
      if (options && options.comparator) {
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
      }
      var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
      if (simpleResult !== null) {
        return simpleResult;
      }
      return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
    }
    function simpleEqual(leftHandOperand, rightHandOperand) {
      if (leftHandOperand === rightHandOperand) {
        return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
      }
      if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
      rightHandOperand !== rightHandOperand) {
        return true;
      }
      if (isPrimitive2(leftHandOperand) || isPrimitive2(rightHandOperand)) {
        return false;
      }
      return null;
    }
    function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
      options = options || {};
      options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
      var comparator2 = options && options.comparator;
      var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
      if (memoizeResultLeft !== null) {
        return memoizeResultLeft;
      }
      var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
      if (memoizeResultRight !== null) {
        return memoizeResultRight;
      }
      if (comparator2) {
        var comparatorResult = comparator2(leftHandOperand, rightHandOperand);
        if (comparatorResult === false || comparatorResult === true) {
          memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
          return comparatorResult;
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
      }
      var leftHandType = type2(leftHandOperand);
      if (leftHandType !== type2(rightHandOperand)) {
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
        return false;
      }
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
      var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
      return result;
    }
    function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
      switch (leftHandType) {
        case "String":
        case "Number":
        case "Boolean":
        case "Date":
          return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
        case "Promise":
        case "Symbol":
        case "function":
        case "WeakMap":
        case "WeakSet":
          return leftHandOperand === rightHandOperand;
        case "Error":
          return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
        case "Arguments":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "Array":
          return iterableEqual(leftHandOperand, rightHandOperand, options);
        case "RegExp":
          return regexpEqual(leftHandOperand, rightHandOperand);
        case "Generator":
          return generatorEqual(leftHandOperand, rightHandOperand, options);
        case "DataView":
          return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
        case "ArrayBuffer":
          return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
        case "Set":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Map":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.Instant":
        case "Temporal.ZonedDateTime":
        case "Temporal.PlainYearMonth":
        case "Temporal.PlainMonthDay":
          return leftHandOperand.equals(rightHandOperand);
        case "Temporal.Duration":
          return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
        case "Temporal.TimeZone":
        case "Temporal.Calendar":
          return leftHandOperand.toString() === rightHandOperand.toString();
        default:
          return objectEqual(leftHandOperand, rightHandOperand, options);
      }
    }
    function regexpEqual(leftHandOperand, rightHandOperand) {
      return leftHandOperand.toString() === rightHandOperand.toString();
    }
    function entriesEqual(leftHandOperand, rightHandOperand, options) {
      if (leftHandOperand.size !== rightHandOperand.size) {
        return false;
      }
      if (leftHandOperand.size === 0) {
        return true;
      }
      var leftHandItems = [];
      var rightHandItems = [];
      leftHandOperand.forEach(function gatherEntries(key, value) {
        leftHandItems.push([key, value]);
      });
      rightHandOperand.forEach(function gatherEntries(key, value) {
        rightHandItems.push([key, value]);
      });
      return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
    }
    function iterableEqual(leftHandOperand, rightHandOperand, options) {
      var length = leftHandOperand.length;
      if (length !== rightHandOperand.length) {
        return false;
      }
      if (length === 0) {
        return true;
      }
      var index2 = -1;
      while (++index2 < length) {
        if (deepEqual(leftHandOperand[index2], rightHandOperand[index2], options) === false) {
          return false;
        }
      }
      return true;
    }
    function generatorEqual(leftHandOperand, rightHandOperand, options) {
      return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
    }
    function hasIteratorFunction(target) {
      return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
    }
    function getIteratorEntries(target) {
      if (hasIteratorFunction(target)) {
        try {
          return getGeneratorEntries(target[Symbol.iterator]());
        } catch (iteratorError) {
          return [];
        }
      }
      return [];
    }
    function getGeneratorEntries(generator) {
      var generatorResult = generator.next();
      var accumulator = [generatorResult.value];
      while (generatorResult.done === false) {
        generatorResult = generator.next();
        accumulator.push(generatorResult.value);
      }
      return accumulator;
    }
    function getEnumerableKeys(target) {
      var keys2 = [];
      for (var key in target) {
        keys2.push(key);
      }
      return keys2;
    }
    function getEnumerableSymbols(target) {
      var keys2 = [];
      var allKeys = Object.getOwnPropertySymbols(target);
      for (var i2 = 0; i2 < allKeys.length; i2 += 1) {
        var key = allKeys[i2];
        if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
          keys2.push(key);
        }
      }
      return keys2;
    }
    function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
      var length = keys2.length;
      if (length === 0) {
        return true;
      }
      for (var i2 = 0; i2 < length; i2 += 1) {
        if (deepEqual(leftHandOperand[keys2[i2]], rightHandOperand[keys2[i2]], options) === false) {
          return false;
        }
      }
      return true;
    }
    function objectEqual(leftHandOperand, rightHandOperand, options) {
      var leftHandKeys = getEnumerableKeys(leftHandOperand);
      var rightHandKeys = getEnumerableKeys(rightHandOperand);
      var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
      var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
      leftHandKeys = leftHandKeys.concat(leftHandSymbols);
      rightHandKeys = rightHandKeys.concat(rightHandSymbols);
      if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
        if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
          return false;
        }
        return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
      }
      var leftHandEntries = getIteratorEntries(leftHandOperand);
      var rightHandEntries = getIteratorEntries(rightHandOperand);
      if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
        leftHandEntries.sort();
        rightHandEntries.sort();
        return iterableEqual(leftHandEntries, rightHandEntries, options);
      }
      if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
        return true;
      }
      return false;
    }
    function isPrimitive2(value) {
      return value === null || typeof value !== "object";
    }
    function mapSymbols(arr) {
      return arr.map(function mapSymbol(entry) {
        if (typeof entry === "symbol") {
          return entry.toString();
        }
        return entry;
      });
    }
  }
});

// node_modules/chai/lib/chai/utils/isProxyEnabled.js
var require_isProxyEnabled = __commonJS({
  "node_modules/chai/lib/chai/utils/isProxyEnabled.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function isProxyEnabled() {
      return config2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
    };
  }
});

// node_modules/chai/lib/chai/utils/addProperty.js
var require_addProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/addProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function addProperty(ctx, name, getter) {
      getter = getter === void 0 ? function() {
      } : getter;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function propertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", propertyGetter);
            }
            var result = getter.call(this);
            if (result !== void 0)
              return result;
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/addLengthGuard.js
var require_addLengthGuard = __commonJS({
  "node_modules/chai/lib/chai/utils/addLengthGuard.js"(exports, module2) {
    var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
    }, "length");
    module2.exports = function addLengthGuard(fn2, assertionName, isChainable) {
      if (!fnLengthDesc.configurable)
        return fn2;
      Object.defineProperty(fn2, "length", {
        get: function() {
          if (isChainable) {
            throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
          }
          throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
        }
      });
      return fn2;
    };
  }
});

// node_modules/chai/lib/chai/utils/getProperties.js
var require_getProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getProperties.js"(exports, module2) {
    module2.exports = function getProperties(object2) {
      var result = Object.getOwnPropertyNames(object2);
      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }
      var proto = Object.getPrototypeOf(object2);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }
      return result;
    };
  }
});

// node_modules/chai/lib/chai/utils/proxify.js
var require_proxify = __commonJS({
  "node_modules/chai/lib/chai/utils/proxify.js"(exports, module2) {
    var config2 = require_config();
    var flag = require_flag();
    var getProperties = require_getProperties();
    var isProxyEnabled = require_isProxyEnabled();
    var builtins = ["__flags", "__methods", "_obj", "assert"];
    module2.exports = function proxify(obj, nonChainableMethodName) {
      if (!isProxyEnabled())
        return obj;
      return new Proxy(obj, {
        get: function proxyGetter(target, property) {
          if (typeof property === "string" && config2.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
            if (nonChainableMethodName) {
              throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
            }
            var suggestion = null;
            var suggestionDistance = 4;
            getProperties(target).forEach(function(prop) {
              if (!Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1) {
                var dist2 = stringDistanceCapped(
                  property,
                  prop,
                  suggestionDistance
                );
                if (dist2 < suggestionDistance) {
                  suggestion = prop;
                  suggestionDistance = dist2;
                }
              }
            });
            if (suggestion !== null) {
              throw Error("Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?');
            } else {
              throw Error("Invalid Chai property: " + property);
            }
          }
          if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
            flag(target, "ssfi", proxyGetter);
          }
          return Reflect.get(target, property);
        }
      });
    };
    function stringDistanceCapped(strA, strB, cap) {
      if (Math.abs(strA.length - strB.length) >= cap) {
        return cap;
      }
      var memo = [];
      for (var i2 = 0; i2 <= strA.length; i2++) {
        memo[i2] = Array(strB.length + 1).fill(0);
        memo[i2][0] = i2;
      }
      for (var j = 0; j < strB.length; j++) {
        memo[0][j] = j;
      }
      for (var i2 = 1; i2 <= strA.length; i2++) {
        var ch = strA.charCodeAt(i2 - 1);
        for (var j = 1; j <= strB.length; j++) {
          if (Math.abs(i2 - j) >= cap) {
            memo[i2][j] = cap;
            continue;
          }
          memo[i2][j] = Math.min(
            memo[i2 - 1][j] + 1,
            memo[i2][j - 1] + 1,
            memo[i2 - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
          );
        }
      }
      return memo[strA.length][strB.length];
    }
  }
});

// node_modules/chai/lib/chai/utils/addMethod.js
var require_addMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function addMethod(ctx, name, method) {
      var methodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", methodWrapper);
        }
        var result = method.apply(this, arguments);
        if (result !== void 0)
          return result;
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(methodWrapper, name, false);
      ctx[name] = proxify(methodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteProperty.js
var require_overwriteProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteProperty(ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {
      };
      if (_get && "function" === typeof _get.get)
        _super = _get.get;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function overwritingPropertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", overwritingPropertyGetter);
            }
            var origLockSsfi = flag(this, "lockSsfi");
            flag(this, "lockSsfi", true);
            var result = getter(_super).call(this);
            flag(this, "lockSsfi", origLockSsfi);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteMethod.js
var require_overwriteMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteMethod(ctx, name, method) {
      var _method = ctx[name], _super = function() {
        throw new Error(name + " is not a function");
      };
      if (_method && "function" === typeof _method)
        _super = _method;
      var overwritingMethodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", overwritingMethodWrapper);
        }
        var origLockSsfi = flag(this, "lockSsfi");
        flag(this, "lockSsfi", true);
        var result = method(_super).apply(this, arguments);
        flag(this, "lockSsfi", origLockSsfi);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(overwritingMethodWrapper, name, false);
      ctx[name] = proxify(overwritingMethodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/addChainableMethod.js
var require_addChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addChainableMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    var canSetPrototype = typeof Object.setPrototypeOf === "function";
    var testFn = function() {
    };
    var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
      var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
      if (typeof propDesc !== "object")
        return true;
      return !propDesc.configurable;
    });
    var call2 = Function.prototype.call;
    var apply = Function.prototype.apply;
    module2.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== "function") {
        chainingBehavior = function() {
        };
      }
      var chainableBehavior = {
        method,
        chainingBehavior
      };
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function chainableMethodGetter() {
            chainableBehavior.chainingBehavior.call(this);
            var chainableMethodWrapper = function() {
              if (!flag(this, "lockSsfi")) {
                flag(this, "ssfi", chainableMethodWrapper);
              }
              var result = chainableBehavior.method.apply(this, arguments);
              if (result !== void 0) {
                return result;
              }
              var newAssertion = new chai3.Assertion();
              transferFlags(this, newAssertion);
              return newAssertion;
            };
            addLengthGuard(chainableMethodWrapper, name, true);
            if (canSetPrototype) {
              var prototype = Object.create(this);
              prototype.call = call2;
              prototype.apply = apply;
              Object.setPrototypeOf(chainableMethodWrapper, prototype);
            } else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function(asserterName) {
                if (excludeNames.indexOf(asserterName) !== -1) {
                  return;
                }
                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                Object.defineProperty(chainableMethodWrapper, asserterName, pd);
              });
            }
            transferFlags(this, chainableMethodWrapper);
            return proxify(chainableMethodWrapper);
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteChainableMethod.js
var require_overwriteChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"(exports, module2) {
    var chai3 = require_chai();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];
      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
        var result = chainingBehavior(_chainingBehavior).call(this);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      var _method = chainableBehavior.method;
      chainableBehavior.method = function overwritingChainableMethodWrapper() {
        var result = method(_method).apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
    };
  }
});

// node_modules/chai/lib/chai/utils/compareByInspect.js
var require_compareByInspect = __commonJS({
  "node_modules/chai/lib/chai/utils/compareByInspect.js"(exports, module2) {
    var inspect2 = require_inspect();
    module2.exports = function compareByInspect(a, b2) {
      return inspect2(a) < inspect2(b2) ? -1 : 1;
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js
var require_getOwnEnumerablePropertySymbols = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js"(exports, module2) {
    module2.exports = function getOwnEnumerablePropertySymbols(obj) {
      if (typeof Object.getOwnPropertySymbols !== "function")
        return [];
      return Object.getOwnPropertySymbols(obj).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
      });
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js
var require_getOwnEnumerableProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js"(exports, module2) {
    var getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    module2.exports = function getOwnEnumerableProperties(obj) {
      return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
    };
  }
});

// node_modules/check-error/index.js
var require_check_error = __commonJS({
  "node_modules/check-error/index.js"(exports, module2) {
    "use strict";
    function compatibleInstance(thrown, errorLike) {
      return errorLike instanceof Error && thrown === errorLike;
    }
    function compatibleConstructor(thrown, errorLike) {
      if (errorLike instanceof Error) {
        return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
      } else if (errorLike.prototype instanceof Error || errorLike === Error) {
        return thrown.constructor === errorLike || thrown instanceof errorLike;
      }
      return false;
    }
    function compatibleMessage(thrown, errMatcher) {
      var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
      if (errMatcher instanceof RegExp) {
        return errMatcher.test(comparisonString);
      } else if (typeof errMatcher === "string") {
        return comparisonString.indexOf(errMatcher) !== -1;
      }
      return false;
    }
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
    function getFunctionName2(constructorFn) {
      var name = "";
      if (typeof constructorFn.name === "undefined") {
        var match = String(constructorFn).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = constructorFn.name;
      }
      return name;
    }
    function getConstructorName(errorLike) {
      var constructorName = errorLike;
      if (errorLike instanceof Error) {
        constructorName = getFunctionName2(errorLike.constructor);
      } else if (typeof errorLike === "function") {
        constructorName = getFunctionName2(errorLike).trim() || getFunctionName2(new errorLike());
      }
      return constructorName;
    }
    function getMessage(errorLike) {
      var msg = "";
      if (errorLike && errorLike.message) {
        msg = errorLike.message;
      } else if (typeof errorLike === "string") {
        msg = errorLike;
      }
      return msg;
    }
    module2.exports = {
      compatibleInstance,
      compatibleConstructor,
      compatibleMessage,
      getMessage,
      getConstructorName
    };
  }
});

// node_modules/chai/lib/chai/utils/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/chai/lib/chai/utils/isNaN.js"(exports, module2) {
    function isNaN3(value) {
      return value !== value;
    }
    module2.exports = Number.isNaN || isNaN3;
  }
});

// node_modules/chai/lib/chai/utils/getOperator.js
var require_getOperator = __commonJS({
  "node_modules/chai/lib/chai/utils/getOperator.js"(exports, module2) {
    var type2 = require_type_detect();
    var flag = require_flag();
    function isObjectType(obj) {
      var objectType = type2(obj);
      var objectTypes = ["Array", "Object", "function"];
      return objectTypes.indexOf(objectType) !== -1;
    }
    module2.exports = function getOperator(obj, args) {
      var operator = flag(obj, "operator");
      var negate = flag(obj, "negate");
      var expected = args[3];
      var msg = negate ? args[2] : args[1];
      if (operator) {
        return operator;
      }
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      if (!msg) {
        return void 0;
      }
      if (/\shave\s/.test(msg)) {
        return void 0;
      }
      var isObject4 = isObjectType(expected);
      if (/\snot\s/.test(msg)) {
        return isObject4 ? "notDeepStrictEqual" : "notStrictEqual";
      }
      return isObject4 ? "deepStrictEqual" : "strictEqual";
    };
  }
});

// node_modules/chai/lib/chai/utils/index.js
var require_utils2 = __commonJS({
  "node_modules/chai/lib/chai/utils/index.js"(exports) {
    var pathval = require_pathval();
    exports.test = require_test();
    exports.type = require_type_detect();
    exports.expectTypes = require_expectTypes();
    exports.getMessage = require_getMessage();
    exports.getActual = require_getActual();
    exports.inspect = require_inspect();
    exports.objDisplay = require_objDisplay();
    exports.flag = require_flag();
    exports.transferFlags = require_transferFlags();
    exports.eql = require_deep_eql();
    exports.getPathInfo = pathval.getPathInfo;
    exports.hasProperty = pathval.hasProperty;
    exports.getName = require_get_func_name();
    exports.addProperty = require_addProperty();
    exports.addMethod = require_addMethod();
    exports.overwriteProperty = require_overwriteProperty();
    exports.overwriteMethod = require_overwriteMethod();
    exports.addChainableMethod = require_addChainableMethod();
    exports.overwriteChainableMethod = require_overwriteChainableMethod();
    exports.compareByInspect = require_compareByInspect();
    exports.getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    exports.getOwnEnumerableProperties = require_getOwnEnumerableProperties();
    exports.checkError = require_check_error();
    exports.proxify = require_proxify();
    exports.addLengthGuard = require_addLengthGuard();
    exports.isProxyEnabled = require_isProxyEnabled();
    exports.isNaN = require_isNaN();
    exports.getOperator = require_getOperator();
  }
});

// node_modules/chai/lib/chai/assertion.js
var require_assertion = __commonJS({
  "node_modules/chai/lib/chai/assertion.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function(_chai, util3) {
      var AssertionError2 = _chai.AssertionError, flag = util3.flag;
      _chai.Assertion = Assertion2;
      function Assertion2(obj, msg, ssfi, lockSsfi) {
        flag(this, "ssfi", ssfi || Assertion2);
        flag(this, "lockSsfi", lockSsfi);
        flag(this, "object", obj);
        flag(this, "message", msg);
        return util3.proxify(this);
      }
      Object.defineProperty(Assertion2, "includeStack", {
        get: function() {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          return config2.includeStack;
        },
        set: function(value) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          config2.includeStack = value;
        }
      });
      Object.defineProperty(Assertion2, "showDiff", {
        get: function() {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          return config2.showDiff;
        },
        set: function(value) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          config2.showDiff = value;
        }
      });
      Assertion2.addProperty = function(name, fn2) {
        util3.addProperty(this.prototype, name, fn2);
      };
      Assertion2.addMethod = function(name, fn2) {
        util3.addMethod(this.prototype, name, fn2);
      };
      Assertion2.addChainableMethod = function(name, fn2, chainingBehavior) {
        util3.addChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.overwriteProperty = function(name, fn2) {
        util3.overwriteProperty(this.prototype, name, fn2);
      };
      Assertion2.overwriteMethod = function(name, fn2) {
        util3.overwriteMethod(this.prototype, name, fn2);
      };
      Assertion2.overwriteChainableMethod = function(name, fn2, chainingBehavior) {
        util3.overwriteChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util3.test(this, arguments);
        if (false !== showDiff)
          showDiff = true;
        if (void 0 === expected && void 0 === _actual)
          showDiff = false;
        if (true !== config2.showDiff)
          showDiff = false;
        if (!ok) {
          msg = util3.getMessage(this, arguments);
          var actual = util3.getActual(this, arguments);
          var assertionErrorObjectProperties = {
            actual,
            expected,
            showDiff
          };
          var operator = util3.getOperator(this, arguments);
          if (operator) {
            assertionErrorObjectProperties.operator = operator;
          }
          throw new AssertionError2(
            msg,
            assertionErrorObjectProperties,
            config2.includeStack ? this.assert : flag(this, "ssfi")
          );
        }
      };
      Object.defineProperty(
        Assertion2.prototype,
        "_obj",
        {
          get: function() {
            return flag(this, "object");
          },
          set: function(val) {
            flag(this, "object", val);
          }
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/core/assertions.js
var require_assertions = __commonJS({
  "node_modules/chai/lib/chai/core/assertions.js"(exports, module2) {
    module2.exports = function(chai3, _) {
      var Assertion2 = chai3.Assertion, AssertionError2 = chai3.AssertionError, flag = _.flag;
      [
        "to",
        "be",
        "been",
        "is",
        "and",
        "has",
        "have",
        "with",
        "that",
        "which",
        "at",
        "of",
        "same",
        "but",
        "does",
        "still",
        "also"
      ].forEach(function(chain) {
        Assertion2.addProperty(chain);
      });
      Assertion2.addProperty("not", function() {
        flag(this, "negate", true);
      });
      Assertion2.addProperty("deep", function() {
        flag(this, "deep", true);
      });
      Assertion2.addProperty("nested", function() {
        flag(this, "nested", true);
      });
      Assertion2.addProperty("own", function() {
        flag(this, "own", true);
      });
      Assertion2.addProperty("ordered", function() {
        flag(this, "ordered", true);
      });
      Assertion2.addProperty("any", function() {
        flag(this, "any", true);
        flag(this, "all", false);
      });
      Assertion2.addProperty("all", function() {
        flag(this, "all", true);
        flag(this, "any", false);
      });
      function an(type2, msg) {
        if (msg)
          flag(this, "message", msg);
        type2 = type2.toLowerCase();
        var obj = flag(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type2.charAt(0)) ? "an " : "a ";
        this.assert(
          type2 === _.type(obj).toLowerCase(),
          "expected #{this} to be " + article + type2,
          "expected #{this} not to be " + article + type2
        );
      }
      Assertion2.addChainableMethod("an", an);
      Assertion2.addChainableMethod("a", an);
      function SameValueZero(a, b2) {
        return _.isNaN(a) && _.isNaN(b2) || a === b2;
      }
      function includeChainingBehavior() {
        flag(this, "contains", true);
      }
      function include(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), negate = flag(this, "negate"), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), descriptor = isDeep ? "deep " : "";
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var included = false;
        switch (objType) {
          case "string":
            included = obj.indexOf(val) !== -1;
            break;
          case "weakset":
            if (isDeep) {
              throw new AssertionError2(
                flagMsg + "unable to use .deep.include with WeakSet",
                void 0,
                ssfi
              );
            }
            included = obj.has(val);
            break;
          case "map":
            var isEql = isDeep ? _.eql : SameValueZero;
            obj.forEach(function(item) {
              included = included || isEql(item, val);
            });
            break;
          case "set":
            if (isDeep) {
              obj.forEach(function(item) {
                included = included || _.eql(item, val);
              });
            } else {
              included = obj.has(val);
            }
            break;
          case "array":
            if (isDeep) {
              included = obj.some(function(item) {
                return _.eql(item, val);
              });
            } else {
              included = obj.indexOf(val) !== -1;
            }
            break;
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
                void 0,
                ssfi
              );
            }
            var props = Object.keys(val), firstErr = null, numErrs = 0;
            props.forEach(function(prop) {
              var propAssertion = new Assertion2(obj);
              _.transferFlags(this, propAssertion, true);
              flag(propAssertion, "lockSsfi", true);
              if (!negate || props.length === 1) {
                propAssertion.property(prop, val[prop]);
                return;
              }
              try {
                propAssertion.property(prop, val[prop]);
              } catch (err) {
                if (!_.checkError.compatibleConstructor(err, AssertionError2)) {
                  throw err;
                }
                if (firstErr === null)
                  firstErr = err;
                numErrs++;
              }
            }, this);
            if (negate && props.length > 1 && numErrs === props.length) {
              throw firstErr;
            }
            return;
        }
        this.assert(
          included,
          "expected #{this} to " + descriptor + "include " + _.inspect(val),
          "expected #{this} to not " + descriptor + "include " + _.inspect(val)
        );
      }
      Assertion2.addChainableMethod("include", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contain", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contains", include, includeChainingBehavior);
      Assertion2.addChainableMethod("includes", include, includeChainingBehavior);
      Assertion2.addProperty("ok", function() {
        this.assert(
          flag(this, "object"),
          "expected #{this} to be truthy",
          "expected #{this} to be falsy"
        );
      });
      Assertion2.addProperty("true", function() {
        this.assert(
          true === flag(this, "object"),
          "expected #{this} to be true",
          "expected #{this} to be false",
          flag(this, "negate") ? false : true
        );
      });
      Assertion2.addProperty("false", function() {
        this.assert(
          false === flag(this, "object"),
          "expected #{this} to be false",
          "expected #{this} to be true",
          flag(this, "negate") ? true : false
        );
      });
      Assertion2.addProperty("null", function() {
        this.assert(
          null === flag(this, "object"),
          "expected #{this} to be null",
          "expected #{this} not to be null"
        );
      });
      Assertion2.addProperty("undefined", function() {
        this.assert(
          void 0 === flag(this, "object"),
          "expected #{this} to be undefined",
          "expected #{this} not to be undefined"
        );
      });
      Assertion2.addProperty("NaN", function() {
        this.assert(
          _.isNaN(flag(this, "object")),
          "expected #{this} to be NaN",
          "expected #{this} not to be NaN"
        );
      });
      function assertExist() {
        var val = flag(this, "object");
        this.assert(
          val !== null && val !== void 0,
          "expected #{this} to exist",
          "expected #{this} to not exist"
        );
      }
      Assertion2.addProperty("exist", assertExist);
      Assertion2.addProperty("exists", assertExist);
      Assertion2.addProperty("empty", function() {
        var val = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), itemsCount;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        switch (_.type(val).toLowerCase()) {
          case "array":
          case "string":
            itemsCount = val.length;
            break;
          case "map":
          case "set":
            itemsCount = val.size;
            break;
          case "weakmap":
          case "weakset":
            throw new AssertionError2(
              flagMsg + ".empty was passed a weak collection",
              void 0,
              ssfi
            );
          case "function":
            var msg = flagMsg + ".empty was passed a function " + _.getName(val);
            throw new AssertionError2(msg.trim(), void 0, ssfi);
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
                void 0,
                ssfi
              );
            }
            itemsCount = Object.keys(val).length;
        }
        this.assert(
          0 === itemsCount,
          "expected #{this} to be empty",
          "expected #{this} not to be empty"
        );
      });
      function checkArguments() {
        var obj = flag(this, "object"), type2 = _.type(obj);
        this.assert(
          "Arguments" === type2,
          "expected #{this} to be arguments but got " + type2,
          "expected #{this} to not be arguments"
        );
      }
      Assertion2.addProperty("arguments", checkArguments);
      Assertion2.addProperty("Arguments", checkArguments);
      function assertEqual(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        if (flag(this, "deep")) {
          var prevLockSsfi = flag(this, "lockSsfi");
          flag(this, "lockSsfi", true);
          this.eql(val);
          flag(this, "lockSsfi", prevLockSsfi);
        } else {
          this.assert(
            val === obj,
            "expected #{this} to equal #{exp}",
            "expected #{this} to not equal #{exp}",
            val,
            this._obj,
            true
          );
        }
      }
      Assertion2.addMethod("equal", assertEqual);
      Assertion2.addMethod("equals", assertEqual);
      Assertion2.addMethod("eq", assertEqual);
      function assertEql(obj, msg) {
        if (msg)
          flag(this, "message", msg);
        this.assert(
          _.eql(obj, flag(this, "object")),
          "expected #{this} to deeply equal #{exp}",
          "expected #{this} to not deeply equal #{exp}",
          obj,
          this._obj,
          true
        );
      }
      Assertion2.addMethod("eql", assertEql);
      Assertion2.addMethod("eqls", assertEql);
      function assertAbove(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to above must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to above must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount > n2,
            "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj > n2,
            "expected #{this} to be above #{exp}",
            "expected #{this} to be at most #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("above", assertAbove);
      Assertion2.addMethod("gt", assertAbove);
      Assertion2.addMethod("greaterThan", assertAbove);
      function assertLeast(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to least must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to least must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= n2,
            "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj >= n2,
            "expected #{this} to be at least #{exp}",
            "expected #{this} to be below #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("least", assertLeast);
      Assertion2.addMethod("gte", assertLeast);
      Assertion2.addMethod("greaterThanOrEqual", assertLeast);
      function assertBelow(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to below must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to below must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount < n2,
            "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj < n2,
            "expected #{this} to be below #{exp}",
            "expected #{this} to be at least #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("below", assertBelow);
      Assertion2.addMethod("lt", assertBelow);
      Assertion2.addMethod("lessThan", assertBelow);
      function assertMost(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to most must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to most must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount <= n2,
            "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj <= n2,
            "expected #{this} to be at most #{exp}",
            "expected #{this} to be above #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("most", assertMost);
      Assertion2.addMethod("lte", assertMost);
      Assertion2.addMethod("lessThanOrEqual", assertMost);
      Assertion2.addMethod("within", function(start, finish, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
          errorMessage = msgPrefix + "the arguments to within must be dates";
        } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the arguments to within must be numbers";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= start && itemsCount <= finish,
            "expected #{this} to have a " + descriptor + " within " + range,
            "expected #{this} to not have a " + descriptor + " within " + range
          );
        } else {
          this.assert(
            obj >= start && obj <= finish,
            "expected #{this} to be within " + range,
            "expected #{this} to not be within " + range
          );
        }
      });
      function assertInstanceOf(constructor, msg) {
        if (msg)
          flag(this, "message", msg);
        var target = flag(this, "object");
        var ssfi = flag(this, "ssfi");
        var flagMsg = flag(this, "message");
        try {
          var isInstanceOf = target instanceof constructor;
        } catch (err) {
          if (err instanceof TypeError) {
            flagMsg = flagMsg ? flagMsg + ": " : "";
            throw new AssertionError2(
              flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
              void 0,
              ssfi
            );
          }
          throw err;
        }
        var name = _.getName(constructor);
        if (name === null) {
          name = "an unnamed constructor";
        }
        this.assert(
          isInstanceOf,
          "expected #{this} to be an instance of " + name,
          "expected #{this} to not be an instance of " + name
        );
      }
      ;
      Assertion2.addMethod("instanceof", assertInstanceOf);
      Assertion2.addMethod("instanceOf", assertInstanceOf);
      function assertProperty(name, val, msg) {
        if (msg)
          flag(this, "message", msg);
        var isNested = flag(this, "nested"), isOwn = flag(this, "own"), flagMsg = flag(this, "message"), obj = flag(this, "object"), ssfi = flag(this, "ssfi"), nameType = typeof name;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        if (isNested) {
          if (nameType !== "string") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string when using nested syntax",
              void 0,
              ssfi
            );
          }
        } else {
          if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string, number, or symbol",
              void 0,
              ssfi
            );
          }
        }
        if (isNested && isOwn) {
          throw new AssertionError2(
            flagMsg + 'The "nested" and "own" flags cannot be combined.',
            void 0,
            ssfi
          );
        }
        if (obj === null || obj === void 0) {
          throw new AssertionError2(
            flagMsg + "Target cannot be null or undefined.",
            void 0,
            ssfi
          );
        }
        var isDeep = flag(this, "deep"), negate = flag(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name];
        var descriptor = "";
        if (isDeep)
          descriptor += "deep ";
        if (isOwn)
          descriptor += "own ";
        if (isNested)
          descriptor += "nested ";
        descriptor += "property ";
        var hasProperty;
        if (isOwn)
          hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
        else if (isNested)
          hasProperty = pathInfo.exists;
        else
          hasProperty = _.hasProperty(obj, name);
        if (!negate || arguments.length === 1) {
          this.assert(
            hasProperty,
            "expected #{this} to have " + descriptor + _.inspect(name),
            "expected #{this} to not have " + descriptor + _.inspect(name)
          );
        }
        if (arguments.length > 1) {
          this.assert(
            hasProperty && (isDeep ? _.eql(val, value) : val === value),
            "expected #{this} to have " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}",
            "expected #{this} to not have " + descriptor + _.inspect(name) + " of #{act}",
            val,
            value
          );
        }
        flag(this, "object", value);
      }
      Assertion2.addMethod("property", assertProperty);
      function assertOwnProperty(name, value, msg) {
        flag(this, "own", true);
        assertProperty.apply(this, arguments);
      }
      Assertion2.addMethod("ownProperty", assertOwnProperty);
      Assertion2.addMethod("haveOwnProperty", assertOwnProperty);
      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === "string") {
          msg = descriptor;
          descriptor = null;
        }
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(
            _.eql(descriptor, actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor),
            descriptor,
            actualDescriptor,
            true
          );
        } else {
          this.assert(
            actualDescriptor,
            "expected #{this} to have an own property descriptor for " + _.inspect(name),
            "expected #{this} to not have an own property descriptor for " + _.inspect(name)
          );
        }
        flag(this, "object", actualDescriptor);
      }
      Assertion2.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
      Assertion2.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
      function assertLengthChain() {
        flag(this, "doLength", true);
      }
      function assertLength(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), descriptor = "length", itemsCount;
        switch (objType) {
          case "map":
          case "set":
            descriptor = "size";
            itemsCount = obj.size;
            break;
          default:
            new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
            itemsCount = obj.length;
        }
        this.assert(
          itemsCount == n2,
          "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
          "expected #{this} to not have a " + descriptor + " of #{act}",
          n2,
          itemsCount
        );
      }
      Assertion2.addChainableMethod("length", assertLength, assertLengthChain);
      Assertion2.addChainableMethod("lengthOf", assertLength, assertLengthChain);
      function assertMatch(re, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        this.assert(
          re.exec(obj),
          "expected #{this} to match " + re,
          "expected #{this} not to match " + re
        );
      }
      Assertion2.addMethod("match", assertMatch);
      Assertion2.addMethod("matches", assertMatch);
      Assertion2.addMethod("string", function(str, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("string");
        this.assert(
          ~obj.indexOf(str),
          "expected #{this} to contain " + _.inspect(str),
          "expected #{this} to not contain " + _.inspect(str)
        );
      });
      function assertKeys(keys2) {
        var obj = flag(this, "object"), objType = _.type(obj), keysType = _.type(keys2), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag(this, "message");
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
        if (objType === "Map" || objType === "Set") {
          deepStr = isDeep ? "deeply " : "";
          actual = [];
          obj.forEach(function(val, key) {
            actual.push(key);
          });
          if (keysType !== "Array") {
            keys2 = Array.prototype.slice.call(arguments);
          }
        } else {
          actual = _.getOwnEnumerableProperties(obj);
          switch (keysType) {
            case "Array":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              break;
            case "Object":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              keys2 = Object.keys(keys2);
              break;
            default:
              keys2 = Array.prototype.slice.call(arguments);
          }
          keys2 = keys2.map(function(val) {
            return typeof val === "symbol" ? val : String(val);
          });
        }
        if (!keys2.length) {
          throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
        }
        var len = keys2.length, any = flag(this, "any"), all = flag(this, "all"), expected = keys2;
        if (!any && !all) {
          all = true;
        }
        if (any) {
          ok = expected.some(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
        }
        if (all) {
          ok = expected.every(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
          if (!flag(this, "contains")) {
            ok = ok && keys2.length == actual.length;
          }
        }
        if (len > 1) {
          keys2 = keys2.map(function(key) {
            return _.inspect(key);
          });
          var last = keys2.pop();
          if (all) {
            str = keys2.join(", ") + ", and " + last;
          }
          if (any) {
            str = keys2.join(", ") + ", or " + last;
          }
        } else {
          str = _.inspect(keys2[0]);
        }
        str = (len > 1 ? "keys " : "key ") + str;
        str = (flag(this, "contains") ? "contain " : "have ") + str;
        this.assert(
          ok,
          "expected #{this} to " + deepStr + str,
          "expected #{this} to not " + deepStr + str,
          expected.slice(0).sort(_.compareByInspect),
          actual.sort(_.compareByInspect),
          true
        );
      }
      Assertion2.addMethod("keys", assertKeys);
      Assertion2.addMethod("key", assertKeys);
      function assertThrows(errorLike, errMsgMatcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), negate = flag(this, "negate") || false;
        new Assertion2(obj, flagMsg, ssfi, true).is.a("function");
        if (errorLike instanceof RegExp || typeof errorLike === "string") {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var caughtErr;
        try {
          obj();
        } catch (err) {
          caughtErr = err;
        }
        var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
        var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
        var errorLikeFail = false;
        var errMsgMatcherFail = false;
        if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
          var errorLikeString = "an error";
          if (errorLike instanceof Error) {
            errorLikeString = "#{exp}";
          } else if (errorLike) {
            errorLikeString = _.checkError.getConstructorName(errorLike);
          }
          this.assert(
            caughtErr,
            "expected #{this} to throw " + errorLikeString,
            "expected #{this} to not throw an error but #{act} was thrown",
            errorLike && errorLike.toString(),
            caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        if (errorLike && caughtErr) {
          if (errorLike instanceof Error) {
            var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
            if (isCompatibleInstance === negate) {
              if (everyArgIsDefined && negate) {
                errorLikeFail = true;
              } else {
                this.assert(
                  negate,
                  "expected #{this} to throw #{exp} but #{act} was thrown",
                  "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
                  errorLike.toString(),
                  caughtErr.toString()
                );
              }
            }
          }
          var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
          if (isCompatibleConstructor === negate) {
            if (everyArgIsDefined && negate) {
              errorLikeFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw #{exp} but #{act} was thrown",
                "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
                errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
                caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
              );
            }
          }
        }
        if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
          var placeholder = "including";
          if (errMsgMatcher instanceof RegExp) {
            placeholder = "matching";
          }
          var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
          if (isCompatibleMessage === negate) {
            if (everyArgIsDefined && negate) {
              errMsgMatcherFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
                "expected #{this} to throw error not " + placeholder + " #{exp}",
                errMsgMatcher,
                _.checkError.getMessage(caughtErr)
              );
            }
          }
        }
        if (errorLikeFail && errMsgMatcherFail) {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        flag(this, "object", caughtErr);
      }
      ;
      Assertion2.addMethod("throw", assertThrows);
      Assertion2.addMethod("throws", assertThrows);
      Assertion2.addMethod("Throw", assertThrows);
      function respondTo(method, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
        this.assert(
          "function" === typeof context,
          "expected #{this} to respond to " + _.inspect(method),
          "expected #{this} to not respond to " + _.inspect(method)
        );
      }
      Assertion2.addMethod("respondTo", respondTo);
      Assertion2.addMethod("respondsTo", respondTo);
      Assertion2.addProperty("itself", function() {
        flag(this, "itself", true);
      });
      function satisfy(matcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var result = matcher(obj);
        this.assert(
          result,
          "expected #{this} to satisfy " + _.objDisplay(matcher),
          "expected #{this} to not satisfy" + _.objDisplay(matcher),
          flag(this, "negate") ? false : true,
          result
        );
      }
      Assertion2.addMethod("satisfy", satisfy);
      Assertion2.addMethod("satisfies", satisfy);
      function closeTo(expected, delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("number");
        if (typeof expected !== "number" || typeof delta !== "number") {
          flagMsg = flagMsg ? flagMsg + ": " : "";
          var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
          throw new AssertionError2(
            flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
            void 0,
            ssfi
          );
        }
        this.assert(
          Math.abs(obj - expected) <= delta,
          "expected #{this} to be close to " + expected + " +/- " + delta,
          "expected #{this} not to be close to " + expected + " +/- " + delta
        );
      }
      Assertion2.addMethod("closeTo", closeTo);
      Assertion2.addMethod("approximately", closeTo);
      function isSubsetOf(subset, superset, cmp, contains, ordered) {
        if (!contains) {
          if (subset.length !== superset.length)
            return false;
          superset = superset.slice();
        }
        return subset.every(function(elem, idx) {
          if (ordered)
            return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
          if (!cmp) {
            var matchIdx = superset.indexOf(elem);
            if (matchIdx === -1)
              return false;
            if (!contains)
              superset.splice(matchIdx, 1);
            return true;
          }
          return superset.some(function(elem2, matchIdx2) {
            if (!cmp(elem, elem2))
              return false;
            if (!contains)
              superset.splice(matchIdx2, 1);
            return true;
          });
        });
      }
      Assertion2.addMethod("members", function(subset, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).to.be.an("array");
        new Assertion2(subset, flagMsg, ssfi, true).to.be.an("array");
        var contains = flag(this, "contains");
        var ordered = flag(this, "ordered");
        var subject, failMsg, failNegateMsg;
        if (contains) {
          subject = ordered ? "an ordered superset" : "a superset";
          failMsg = "expected #{this} to be " + subject + " of #{exp}";
          failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
        } else {
          subject = ordered ? "ordered members" : "members";
          failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
          failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
        }
        var cmp = flag(this, "deep") ? _.eql : void 0;
        this.assert(
          isSubsetOf(subset, obj, cmp, contains, ordered),
          failMsg,
          failNegateMsg,
          subset,
          obj,
          true
        );
      });
      function oneOf(list, msg) {
        if (msg)
          flag(this, "message", msg);
        var expected = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), contains = flag(this, "contains"), isDeep = flag(this, "deep");
        new Assertion2(list, flagMsg, ssfi, true).to.be.an("array");
        if (contains) {
          this.assert(
            list.some(function(possibility) {
              return expected.indexOf(possibility) > -1;
            }),
            "expected #{this} to contain one of #{exp}",
            "expected #{this} to not contain one of #{exp}",
            list,
            expected
          );
        } else {
          if (isDeep) {
            this.assert(
              list.some(function(possibility) {
                return _.eql(expected, possibility);
              }),
              "expected #{this} to deeply equal one of #{exp}",
              "expected #{this} to deeply equal one of #{exp}",
              list,
              expected
            );
          } else {
            this.assert(
              list.indexOf(expected) > -1,
              "expected #{this} to be one of #{exp}",
              "expected #{this} to not be one of #{exp}",
              list,
              expected
            );
          }
        }
      }
      Assertion2.addMethod("oneOf", oneOf);
      function assertChanges(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "change");
        flag(this, "realDelta", final !== initial);
        this.assert(
          initial !== final,
          "expected " + msgObj + " to change",
          "expected " + msgObj + " to not change"
        );
      }
      Assertion2.addMethod("change", assertChanges);
      Assertion2.addMethod("changes", assertChanges);
      function assertIncreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "increase");
        flag(this, "realDelta", final - initial);
        this.assert(
          final - initial > 0,
          "expected " + msgObj + " to increase",
          "expected " + msgObj + " to not increase"
        );
      }
      Assertion2.addMethod("increase", assertIncreases);
      Assertion2.addMethod("increases", assertIncreases);
      function assertDecreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "decrease");
        flag(this, "realDelta", initial - final);
        this.assert(
          final - initial < 0,
          "expected " + msgObj + " to decrease",
          "expected " + msgObj + " to not decrease"
        );
      }
      Assertion2.addMethod("decrease", assertDecreases);
      Assertion2.addMethod("decreases", assertDecreases);
      function assertDelta(delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var msgObj = flag(this, "deltaMsgObj");
        var initial = flag(this, "initialDeltaValue");
        var final = flag(this, "finalDeltaValue");
        var behavior = flag(this, "deltaBehavior");
        var realDelta = flag(this, "realDelta");
        var expression;
        if (behavior === "change") {
          expression = Math.abs(final - initial) === Math.abs(delta);
        } else {
          expression = realDelta === Math.abs(delta);
        }
        this.assert(
          expression,
          "expected " + msgObj + " to " + behavior + " by " + delta,
          "expected " + msgObj + " to not " + behavior + " by " + delta
        );
      }
      Assertion2.addMethod("by", assertDelta);
      Assertion2.addProperty("extensible", function() {
        var obj = flag(this, "object");
        var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
        this.assert(
          isExtensible,
          "expected #{this} to be extensible",
          "expected #{this} to not be extensible"
        );
      });
      Assertion2.addProperty("sealed", function() {
        var obj = flag(this, "object");
        var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
        this.assert(
          isSealed,
          "expected #{this} to be sealed",
          "expected #{this} to not be sealed"
        );
      });
      Assertion2.addProperty("frozen", function() {
        var obj = flag(this, "object");
        var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
        this.assert(
          isFrozen,
          "expected #{this} to be frozen",
          "expected #{this} to not be frozen"
        );
      });
      Assertion2.addProperty("finite", function(msg) {
        var obj = flag(this, "object");
        this.assert(
          typeof obj === "number" && isFinite(obj),
          "expected #{this} to be a finite number",
          "expected #{this} to not be a finite number"
        );
      });
    };
  }
});

// node_modules/chai/lib/chai/interface/expect.js
var require_expect = __commonJS({
  "node_modules/chai/lib/chai/interface/expect.js"(exports, module2) {
    module2.exports = function(chai3, util3) {
      chai3.expect = function(val, message) {
        return new chai3.Assertion(val, message);
      };
      chai3.expect.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "expect.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, chai3.expect.fail);
      };
    };
  }
});

// node_modules/chai/lib/chai/interface/should.js
var require_should = __commonJS({
  "node_modules/chai/lib/chai/interface/should.js"(exports, module2) {
    module2.exports = function(chai3, util3) {
      var Assertion2 = chai3.Assertion;
      function loadShould() {
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
            return new Assertion2(this.valueOf(), null, shouldGetter);
          }
          return new Assertion2(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          Object.defineProperty(this, "should", {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(Object.prototype, "should", {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });
        var should2 = {};
        should2.fail = function(actual, expected, message, operator) {
          if (arguments.length < 2) {
            message = actual;
            actual = void 0;
          }
          message = message || "should.fail()";
          throw new chai3.AssertionError(message, {
            actual,
            expected,
            operator
          }, should2.fail);
        };
        should2.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.equal(val2);
        };
        should2.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.Throw(errt, errs);
        };
        should2.exist = function(val, msg) {
          new Assertion2(val, msg).to.exist;
        };
        should2.not = {};
        should2.not.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.not.equal(val2);
        };
        should2.not.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.not.Throw(errt, errs);
        };
        should2.not.exist = function(val, msg) {
          new Assertion2(val, msg).to.not.exist;
        };
        should2["throw"] = should2["Throw"];
        should2.not["throw"] = should2.not["Throw"];
        return should2;
      }
      ;
      chai3.should = loadShould;
      chai3.Should = loadShould;
    };
  }
});

// node_modules/chai/lib/chai/interface/assert.js
var require_assert = __commonJS({
  "node_modules/chai/lib/chai/interface/assert.js"(exports, module2) {
    module2.exports = function(chai3, util3) {
      var Assertion2 = chai3.Assertion, flag = util3.flag;
      var assert2 = chai3.assert = function(express, errmsg) {
        var test3 = new Assertion2(null, null, chai3.assert, true);
        test3.assert(
          express,
          errmsg,
          "[ negation message unavailable ]"
        );
      };
      assert2.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "assert.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, assert2.fail);
      };
      assert2.isOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isOk, true).is.ok;
      };
      assert2.isNotOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotOk, true).is.not.ok;
      };
      assert2.equal = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.equal, true);
        test3.assert(
          exp == flag(test3, "object"),
          "expected #{this} to equal #{exp}",
          "expected #{this} to not equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.notEqual = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.notEqual, true);
        test3.assert(
          exp != flag(test3, "object"),
          "expected #{this} to not equal #{exp}",
          "expected #{this} to equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.strictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.strictEqual, true).to.equal(exp);
      };
      assert2.notStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
      };
      assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.deepEqual, true).to.eql(exp);
      };
      assert2.notDeepEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
      };
      assert2.isAbove = function(val, abv, msg) {
        new Assertion2(val, msg, assert2.isAbove, true).to.be.above(abv);
      };
      assert2.isAtLeast = function(val, atlst, msg) {
        new Assertion2(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
      };
      assert2.isBelow = function(val, blw, msg) {
        new Assertion2(val, msg, assert2.isBelow, true).to.be.below(blw);
      };
      assert2.isAtMost = function(val, atmst, msg) {
        new Assertion2(val, msg, assert2.isAtMost, true).to.be.most(atmst);
      };
      assert2.isTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isTrue, true).is["true"];
      };
      assert2.isNotTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotTrue, true).to.not.equal(true);
      };
      assert2.isFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isFalse, true).is["false"];
      };
      assert2.isNotFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFalse, true).to.not.equal(false);
      };
      assert2.isNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNull, true).to.equal(null);
      };
      assert2.isNotNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNull, true).to.not.equal(null);
      };
      assert2.isNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNaN, true).to.be.NaN;
      };
      assert2.isNotNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
      };
      assert2.exists = function(val, msg) {
        new Assertion2(val, msg, assert2.exists, true).to.exist;
      };
      assert2.notExists = function(val, msg) {
        new Assertion2(val, msg, assert2.notExists, true).to.not.exist;
      };
      assert2.isUndefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isUndefined, true).to.equal(void 0);
      };
      assert2.isDefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isDefined, true).to.not.equal(void 0);
      };
      assert2.isFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isFunction, true).to.be.a("function");
      };
      assert2.isNotFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
      };
      assert2.isObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isObject, true).to.be.a("object");
      };
      assert2.isNotObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotObject, true).to.not.be.a("object");
      };
      assert2.isArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isArray, true).to.be.an("array");
      };
      assert2.isNotArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotArray, true).to.not.be.an("array");
      };
      assert2.isString = function(val, msg) {
        new Assertion2(val, msg, assert2.isString, true).to.be.a("string");
      };
      assert2.isNotString = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotString, true).to.not.be.a("string");
      };
      assert2.isNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNumber, true).to.be.a("number");
      };
      assert2.isNotNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
      };
      assert2.isFinite = function(val, msg) {
        new Assertion2(val, msg, assert2.isFinite, true).to.be.finite;
      };
      assert2.isBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isBoolean, true).to.be.a("boolean");
      };
      assert2.isNotBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
      };
      assert2.typeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.typeOf, true).to.be.a(type2);
      };
      assert2.notTypeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notTypeOf, true).to.not.be.a(type2);
      };
      assert2.instanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.instanceOf, true).to.be.instanceOf(type2);
      };
      assert2.notInstanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type2);
      };
      assert2.include = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.include, true).include(inc);
      };
      assert2.notInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notInclude, true).not.include(inc);
      };
      assert2.deepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepInclude, true).deep.include(inc);
      };
      assert2.notDeepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
      };
      assert2.nestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.nestedInclude, true).nested.include(inc);
      };
      assert2.notNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc);
      };
      assert2.deepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc);
      };
      assert2.notDeepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc);
      };
      assert2.ownInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.ownInclude, true).own.include(inc);
      };
      assert2.notOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
      };
      assert2.deepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
      };
      assert2.notDeepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc);
      };
      assert2.match = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.match, true).to.match(re);
      };
      assert2.notMatch = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.notMatch, true).to.not.match(re);
      };
      assert2.property = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.property, true).to.have.property(prop);
      };
      assert2.notProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
      };
      assert2.propertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
      };
      assert2.notPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop, val);
      };
      assert2.deepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop, val);
      };
      assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
      };
      assert2.ownProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
      };
      assert2.notOwnProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop);
      };
      assert2.ownPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop, value);
      };
      assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
      };
      assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
      };
      assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
      };
      assert2.nestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop);
      };
      assert2.notNestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop);
      };
      assert2.nestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop, val);
      };
      assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
      };
      assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
      };
      assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
      };
      assert2.lengthOf = function(exp, len, msg) {
        new Assertion2(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
      };
      assert2.hasAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
      };
      assert2.hasAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
      };
      assert2.containsAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys2);
      };
      assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys2);
      };
      assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys2);
      };
      assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys2);
      };
      assert2.hasAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys2);
      };
      assert2.containsAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys2);
      };
      assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys2);
      };
      assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys2);
      };
      assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var assertErr = new Assertion2(fn2, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
        return flag(assertErr, "object");
      };
      assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        new Assertion2(fn2, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
      };
      assert2.operator = function(val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case "==":
            ok = val == val2;
            break;
          case "===":
            ok = val === val2;
            break;
          case ">":
            ok = val > val2;
            break;
          case ">=":
            ok = val >= val2;
            break;
          case "<":
            ok = val < val2;
            break;
          case "<=":
            ok = val <= val2;
            break;
          case "!=":
            ok = val != val2;
            break;
          case "!==":
            ok = val !== val2;
            break;
          default:
            msg = msg ? msg + ": " : msg;
            throw new chai3.AssertionError(
              msg + 'Invalid operator "' + operator + '"',
              void 0,
              assert2.operator
            );
        }
        var test3 = new Assertion2(ok, msg, assert2.operator, true);
        test3.assert(
          true === flag(test3, "object"),
          "expected " + util3.inspect(val) + " to be " + operator + " " + util3.inspect(val2),
          "expected " + util3.inspect(val) + " to not be " + operator + " " + util3.inspect(val2)
        );
      };
      assert2.closeTo = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
      };
      assert2.approximately = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
      };
      assert2.sameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameMembers, true).to.have.same.members(set22);
      };
      assert2.notSameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set22);
      };
      assert2.sameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set22);
      };
      assert2.notSameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set22);
      };
      assert2.sameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set22);
      };
      assert2.notSameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set22);
      };
      assert2.sameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set22);
      };
      assert2.notSameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set22);
      };
      assert2.includeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeMembers, true).to.include.members(subset);
      };
      assert2.notIncludeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset);
      };
      assert2.includeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset);
      };
      assert2.notIncludeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
      };
      assert2.includeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset);
      };
      assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
      };
      assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
      };
      assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
      };
      assert2.oneOf = function(inList, list, msg) {
        new Assertion2(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
      };
      assert2.changes = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changes, true).to.change(obj, prop);
      };
      assert2.changesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
      };
      assert2.doesNotChange = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotChange, true).to.not.change(obj, prop);
      };
      assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
      };
      assert2.increases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.increases, true).to.increase(obj, prop);
      };
      assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
      };
      assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop);
      };
      assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
      };
      assert2.decreases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
      };
      assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
      };
      assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop);
      };
      assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
      };
      assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
      };
      assert2.ifError = function(val) {
        if (val) {
          throw val;
        }
      };
      assert2.isExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isExtensible, true).to.be.extensible;
      };
      assert2.isNotExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
      };
      assert2.isSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isSealed, true).to.be.sealed;
      };
      assert2.isNotSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
      };
      assert2.isFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isFrozen, true).to.be.frozen;
      };
      assert2.isNotFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
      };
      assert2.isEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isEmpty, true).to.be.empty;
      };
      assert2.isNotEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
      };
      (function alias(name, as) {
        assert2[as] = assert2[name];
        return alias;
      })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
    };
  }
});

// node_modules/chai/lib/chai.js
var require_chai = __commonJS({
  "node_modules/chai/lib/chai.js"(exports) {
    var used = [];
    exports.version = "4.3.3";
    exports.AssertionError = require_assertion_error();
    var util3 = require_utils2();
    exports.use = function(fn2) {
      if (!~used.indexOf(fn2)) {
        fn2(exports, util3);
        used.push(fn2);
      }
      return exports;
    };
    exports.util = util3;
    var config2 = require_config();
    exports.config = config2;
    var assertion = require_assertion();
    exports.use(assertion);
    var core2 = require_assertions();
    exports.use(core2);
    var expect2 = require_expect();
    exports.use(expect2);
    var should2 = require_should();
    exports.use(should2);
    var assert2 = require_assert();
    exports.use(assert2);
  }
});

// node_modules/chai/index.js
var require_chai2 = __commonJS({
  "node_modules/chai/index.js"(exports, module2) {
    module2.exports = require_chai();
  }
});

// node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs
function encode(decoded) {
  const state = new Int32Array(5);
  const bufLength = 1024 * 16;
  const subLength = bufLength - 36;
  const buf = new Uint8Array(bufLength);
  const sub = buf.subarray(0, subLength);
  let pos = 0;
  let out = "";
  for (let i2 = 0; i2 < decoded.length; i2++) {
    const line = decoded[i2];
    if (i2 > 0) {
      if (pos === bufLength) {
        out += td.decode(buf);
        pos = 0;
      }
      buf[pos++] = semicolon;
    }
    if (line.length === 0)
      continue;
    state[0] = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (pos > subLength) {
        out += td.decode(sub);
        buf.copyWithin(0, subLength, pos);
        pos -= subLength;
      }
      if (j > 0)
        buf[pos++] = comma;
      pos = encodeInteger(buf, pos, state, segment, 0);
      if (segment.length === 1)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 1);
      pos = encodeInteger(buf, pos, state, segment, 2);
      pos = encodeInteger(buf, pos, state, segment, 3);
      if (segment.length === 4)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 4);
    }
  }
  return out + td.decode(buf.subarray(0, pos));
}
function encodeInteger(buf, pos, state, segment, j) {
  const next = segment[j];
  let num = next - state[j];
  state[j] = next;
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    let clamped = num & 31;
    num >>>= 5;
    if (num > 0)
      clamped |= 32;
    buf[pos++] = intToChar[clamped];
  } while (num > 0);
  return pos;
}
var comma, semicolon, chars, intToChar, charToInt, td;
var init_sourcemap_codec = __esm({
  "node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs"() {
    comma = ",".charCodeAt(0);
    semicolon = ";".charCodeAt(0);
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    intToChar = new Uint8Array(64);
    charToInt = new Uint8Array(128);
    for (let i2 = 0; i2 < chars.length; i2++) {
      const c = chars.charCodeAt(i2);
      intToChar[i2] = c;
      charToInt[c] = i2;
    }
    td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
      decode(buf) {
        const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
      }
    } : {
      decode(buf) {
        let out = "";
        for (let i2 = 0; i2 < buf.length; i2++) {
          out += String.fromCharCode(buf[i2]);
        }
        return out;
      }
    };
  }
});

// node_modules/magic-string/dist/magic-string.es.mjs
var magic_string_es_exports = {};
__export(magic_string_es_exports, {
  Bundle: () => Bundle,
  SourceMap: () => SourceMap,
  default: () => MagicString
});
function getBtoa() {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return (str) => window.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i2 = fromParts.length;
    while (i2--)
      fromParts[i2] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
function isObject2(thing) {
  return toString2.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i2 = 0, pos = 0; i2 < originalLines.length; i2++) {
    lineOffsets.push(pos);
    pos += originalLines[i2].length + 1;
  }
  return function locate(index2) {
    let i2 = 0;
    let j = lineOffsets.length;
    while (i2 < j) {
      const m2 = i2 + j >> 1;
      if (index2 < lineOffsets[m2]) {
        j = m2;
      } else {
        i2 = m2 + 1;
      }
    }
    const line = i2 - 1;
    const column = index2 - lineOffsets[line];
    return { line, column };
  };
}
var BitSet, Chunk, btoa, SourceMap, toString2, Mappings, n, warned, MagicString, hasOwnProp, Bundle;
var init_magic_string_es = __esm({
  "node_modules/magic-string/dist/magic-string.es.mjs"() {
    init_sourcemap_codec();
    BitSet = class {
      constructor(arg) {
        this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
      }
      add(n2) {
        this.bits[n2 >> 5] |= 1 << (n2 & 31);
      }
      has(n2) {
        return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
      }
    };
    Chunk = class {
      constructor(start, end, content) {
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = "";
        this.outro = "";
        this.content = content;
        this.storeName = false;
        this.edited = false;
        {
          this.previous = null;
          this.next = null;
        }
      }
      appendLeft(content) {
        this.outro += content;
      }
      appendRight(content) {
        this.intro = this.intro + content;
      }
      clone() {
        const chunk = new Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
      }
      contains(index2) {
        return this.start < index2 && index2 < this.end;
      }
      eachNext(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.next;
        }
      }
      eachPrevious(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.previous;
        }
      }
      edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
          this.intro = "";
          this.outro = "";
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
      }
      prependLeft(content) {
        this.outro = content + this.outro;
      }
      prependRight(content) {
        this.intro = content + this.intro;
      }
      split(index2) {
        const sliceIndex = index2 - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new Chunk(index2, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = "";
        this.end = index2;
        if (this.edited) {
          newChunk.edit("", false);
          this.content = "";
        } else {
          this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next)
          newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(rx) {
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.start + trimmed.length).edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.intro = this.intro.replace(rx, "");
          if (this.intro.length)
            return true;
        }
      }
      trimStart(rx) {
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.end - trimmed.length);
            this.edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.outro = this.outro.replace(rx, "");
          if (this.outro.length)
            return true;
        }
      }
    };
    btoa = /* @__PURE__ */ getBtoa();
    SourceMap = class {
      constructor(properties) {
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = encode(properties.mappings);
        if (typeof properties.x_google_ignoreList !== "undefined") {
          this.x_google_ignoreList = properties.x_google_ignoreList;
        }
      }
      toString() {
        return JSON.stringify(this);
      }
      toUrl() {
        return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
      }
    };
    toString2 = Object.prototype.toString;
    Mappings = class {
      constructor(hires) {
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
      }
      addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (nameIndex >= 0) {
            segment.push(nameIndex);
          }
          this.rawSegments.push(segment);
        } else if (this.pending) {
          this.rawSegments.push(this.pending);
        }
        this.advance(content);
        this.pending = null;
      }
      addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        while (originalCharIndex < chunk.end) {
          if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
            this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
          }
          if (original[originalCharIndex] === "\n") {
            loc.line += 1;
            loc.column = 0;
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            first = true;
          } else {
            loc.column += 1;
            this.generatedCodeColumn += 1;
            first = false;
          }
          originalCharIndex += 1;
        }
        this.pending = null;
      }
      advance(str) {
        if (!str)
          return;
        const lines = str.split("\n");
        if (lines.length > 1) {
          for (let i2 = 0; i2 < lines.length - 1; i2++) {
            this.generatedCodeLine++;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
          }
          this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
      }
    };
    n = "\n";
    warned = {
      insertLeft: false,
      insertRight: false,
      storeName: false
    };
    MagicString = class {
      constructor(string3, options = {}) {
        const chunk = new Chunk(0, string3.length, string3);
        Object.defineProperties(this, {
          original: { writable: true, value: string3 },
          outro: { writable: true, value: "" },
          intro: { writable: true, value: "" },
          firstChunk: { writable: true, value: chunk },
          lastChunk: { writable: true, value: chunk },
          lastSearchedChunk: { writable: true, value: chunk },
          byStart: { writable: true, value: {} },
          byEnd: { writable: true, value: {} },
          filename: { writable: true, value: options.filename },
          indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
          sourcemapLocations: { writable: true, value: new BitSet() },
          storedNames: { writable: true, value: {} },
          indentStr: { writable: true, value: void 0 },
          ignoreList: { writable: true, value: options.ignoreList }
        });
        this.byStart[0] = chunk;
        this.byEnd[string3.length] = chunk;
      }
      addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
      }
      append(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.outro += content;
        return this;
      }
      appendLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.appendLeft(content);
        } else {
          this.intro += content;
        }
        return this;
      }
      appendRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.appendRight(content);
        } else {
          this.outro += content;
        }
        return this;
      }
      clone() {
        const cloned = new MagicString(this.original, { filename: this.filename });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while (originalChunk) {
          cloned.byStart[clonedChunk.start] = clonedChunk;
          cloned.byEnd[clonedChunk.end] = clonedChunk;
          const nextOriginalChunk = originalChunk.next;
          const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
          if (nextClonedChunk) {
            clonedChunk.next = nextClonedChunk;
            nextClonedChunk.previous = clonedChunk;
            clonedChunk = nextClonedChunk;
          }
          originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
          cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
      }
      generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk) => {
          const loc = locate(chunk.start);
          if (chunk.intro.length)
            mappings.advance(chunk.intro);
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
          }
          if (chunk.outro.length)
            mappings.advance(chunk.outro);
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: [options.source ? getRelativePath(options.file || "", options.source) : options.file || ""],
          sourcesContent: options.includeContent ? [this.original] : void 0,
          names,
          mappings: mappings.raw,
          x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      _ensureindentStr() {
        if (this.indentStr === void 0) {
          this.indentStr = guessIndent(this.original);
        }
      }
      _getRawIndentString() {
        this._ensureindentStr();
        return this.indentStr;
      }
      getIndentString() {
        this._ensureindentStr();
        return this.indentStr === null ? "	" : this.indentStr;
      }
      indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject2(indentStr)) {
          options = indentStr;
          indentStr = void 0;
        }
        if (indentStr === void 0) {
          this._ensureindentStr();
          indentStr = this.indentStr || "	";
        }
        if (indentStr === "")
          return this;
        options = options || {};
        const isExcluded = {};
        if (options.exclude) {
          const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
          exclusions.forEach((exclusion) => {
            for (let i2 = exclusion[0]; i2 < exclusion[1]; i2 += 1) {
              isExcluded[i2] = true;
            }
          });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match) => {
          if (shouldIndentNextCharacter)
            return `${indentStr}${match}`;
          shouldIndentNextCharacter = true;
          return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while (chunk) {
          const end = chunk.end;
          if (chunk.edited) {
            if (!isExcluded[charIndex]) {
              chunk.content = chunk.content.replace(pattern, replacer);
              if (chunk.content.length) {
                shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
              }
            }
          } else {
            charIndex = chunk.start;
            while (charIndex < end) {
              if (!isExcluded[charIndex]) {
                const char = this.original[charIndex];
                if (char === "\n") {
                  shouldIndentNextCharacter = true;
                } else if (char !== "\r" && shouldIndentNextCharacter) {
                  shouldIndentNextCharacter = false;
                  if (charIndex === chunk.start) {
                    chunk.prependRight(indentStr);
                  } else {
                    this._splitChunk(chunk, charIndex);
                    chunk = chunk.next;
                    chunk.prependRight(indentStr);
                  }
                }
              }
              charIndex += 1;
            }
          }
          charIndex = chunk.end;
          chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(index2, content) {
        if (!warned.insertLeft) {
          console.warn(
            "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
          );
          warned.insertLeft = true;
        }
        return this.appendLeft(index2, content);
      }
      insertRight(index2, content) {
        if (!warned.insertRight) {
          console.warn(
            "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
          );
          warned.insertRight = true;
        }
        return this.prependRight(index2, content);
      }
      move(start, end, index2) {
        if (index2 >= start && index2 <= end)
          throw new Error("Cannot move a selection inside itself");
        this._split(start);
        this._split(end);
        this._split(index2);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index2];
        if (!newRight && last === this.lastChunk)
          return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft)
          oldLeft.next = oldRight;
        if (oldRight)
          oldRight.previous = oldLeft;
        if (newLeft)
          newLeft.next = first;
        if (newRight)
          newRight.previous = last;
        if (!first.previous)
          this.firstChunk = last.next;
        if (!last.next) {
          this.lastChunk = first.previous;
          this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft)
          this.firstChunk = first;
        if (!newRight)
          this.lastChunk = last;
        return this;
      }
      overwrite(start, end, content, options) {
        options = options || {};
        return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
      }
      update(start, end, content, options) {
        if (typeof content !== "string")
          throw new TypeError("replacement content must be a string");
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (end > this.original.length)
          throw new Error("end is out of bounds");
        if (start === end)
          throw new Error(
            "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
          );
        this._split(start);
        this._split(end);
        if (options === true) {
          if (!warned.storeName) {
            console.warn(
              "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
            );
            warned.storeName = true;
          }
          options = { storeName: true };
        }
        const storeName = options !== void 0 ? options.storeName : false;
        const overwrite = options !== void 0 ? options.overwrite : false;
        if (storeName) {
          const original = this.original.slice(start, end);
          Object.defineProperty(this.storedNames, original, {
            writable: true,
            value: true,
            enumerable: true
          });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
          let chunk = first;
          while (chunk !== last) {
            if (chunk.next !== this.byStart[chunk.end]) {
              throw new Error("Cannot overwrite across a split point");
            }
            chunk = chunk.next;
            chunk.edit("", false);
          }
          first.edit(content, storeName, !overwrite);
        } else {
          const newChunk = new Chunk(start, end, "").edit(content, storeName);
          last.next = newChunk;
          newChunk.previous = last;
        }
        return this;
      }
      prepend(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.intro = content + this.intro;
        return this;
      }
      prependLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.prependLeft(content);
        } else {
          this.intro = content + this.intro;
        }
        return this;
      }
      prependRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.prependRight(content);
        } else {
          this.outro = content + this.outro;
        }
        return this;
      }
      remove(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.intro = "";
          chunk.outro = "";
          chunk.edit("");
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      lastChar() {
        if (this.outro.length)
          return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length)
            return chunk.outro[chunk.outro.length - 1];
          if (chunk.content.length)
            return chunk.content[chunk.content.length - 1];
          if (chunk.intro.length)
            return chunk.intro[chunk.intro.length - 1];
        } while (chunk = chunk.previous);
        if (this.intro.length)
          return this.intro[this.intro.length - 1];
        return "";
      }
      lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length > 0) {
            lineIndex = chunk.outro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.outro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.outro + lineStr;
          }
          if (chunk.content.length > 0) {
            lineIndex = chunk.content.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.content.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.content + lineStr;
          }
          if (chunk.intro.length > 0) {
            lineIndex = chunk.intro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.intro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.intro + lineStr;
          }
        } while (chunk = chunk.previous);
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
      }
      slice(start = 0, end = this.original.length) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        let result = "";
        let chunk = this.firstChunk;
        while (chunk && (chunk.start > start || chunk.end <= start)) {
          if (chunk.start < end && chunk.end >= end) {
            return result;
          }
          chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start)
          throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while (chunk) {
          if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
            result += chunk.intro;
          }
          const containsEnd = chunk.start < end && chunk.end >= end;
          if (containsEnd && chunk.edited && chunk.end !== end)
            throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
          const sliceStart = startChunk === chunk ? start - chunk.start : 0;
          const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
          result += chunk.content.slice(sliceStart, sliceEnd);
          if (chunk.outro && (!containsEnd || chunk.end === end)) {
            result += chunk.outro;
          }
          if (containsEnd) {
            break;
          }
          chunk = chunk.next;
        }
        return result;
      }
      // TODO deprecate this? not really very useful
      snip(start, end) {
        const clone2 = this.clone();
        clone2.remove(0, start);
        clone2.remove(end, clone2.original.length);
        return clone2;
      }
      _split(index2) {
        if (this.byStart[index2] || this.byEnd[index2])
          return;
        let chunk = this.lastSearchedChunk;
        const searchForward = index2 > chunk.end;
        while (chunk) {
          if (chunk.contains(index2))
            return this._splitChunk(chunk, index2);
          chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
        }
      }
      _splitChunk(chunk, index2) {
        if (chunk.edited && chunk.content.length) {
          const loc = getLocator(this.original)(index2);
          throw new Error(
            `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
          );
        }
        const newChunk = chunk.split(index2);
        this.byEnd[index2] = chunk;
        this.byStart[index2] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk)
          this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
      }
      toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while (chunk) {
          str += chunk.toString();
          chunk = chunk.next;
        }
        return str + this.outro;
      }
      isEmpty() {
        let chunk = this.firstChunk;
        do {
          if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
            return false;
        } while (chunk = chunk.next);
        return true;
      }
      length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
          length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        } while (chunk = chunk.next);
        return length;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimEndAborted(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        let chunk = this.lastChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimEnd(rx);
          if (chunk.end !== end) {
            if (this.lastChunk === chunk) {
              this.lastChunk = chunk.next;
            }
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.previous;
        } while (chunk);
        return false;
      }
      trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
      }
      trimStartAborted(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        let chunk = this.firstChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimStart(rx);
          if (chunk.end !== end) {
            if (chunk === this.lastChunk)
              this.lastChunk = chunk.next;
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.next;
        } while (chunk);
        return false;
      }
      trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      _replaceRegexp(searchValue, replacement) {
        function getReplacement(match, str) {
          if (typeof replacement === "string") {
            return replacement.replace(/\$(\$|&|\d+)/g, (_, i2) => {
              if (i2 === "$")
                return "$";
              if (i2 === "&")
                return match[0];
              const num = +i2;
              if (num < match.length)
                return match[+i2];
              return `$${i2}`;
            });
          } else {
            return replacement(...match, match.index, str, match.groups);
          }
        }
        function matchAll(re, str) {
          let match;
          const matches = [];
          while (match = re.exec(str)) {
            matches.push(match);
          }
          return matches;
        }
        if (searchValue.global) {
          const matches = matchAll(searchValue, this.original);
          matches.forEach((match) => {
            if (match.index != null)
              this.overwrite(
                match.index,
                match.index + match[0].length,
                getReplacement(match, this.original)
              );
          });
        } else {
          const match = this.original.match(searchValue);
          if (match && match.index != null)
            this.overwrite(
              match.index,
              match.index + match[0].length,
              getReplacement(match, this.original)
            );
        }
        return this;
      }
      _replaceString(string3, replacement) {
        const { original } = this;
        const index2 = original.indexOf(string3);
        if (index2 !== -1) {
          this.overwrite(index2, index2 + string3.length, replacement);
        }
        return this;
      }
      replace(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceString(searchValue, replacement);
        }
        return this._replaceRegexp(searchValue, replacement);
      }
      _replaceAllString(string3, replacement) {
        const { original } = this;
        const stringLength = string3.length;
        for (let index2 = original.indexOf(string3); index2 !== -1; index2 = original.indexOf(string3, index2 + stringLength)) {
          this.overwrite(index2, index2 + stringLength, replacement);
        }
        return this;
      }
      replaceAll(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceAllString(searchValue, replacement);
        }
        if (!searchValue.global) {
          throw new TypeError(
            "MagicString.prototype.replaceAll called with a non-global RegExp argument"
          );
        }
        return this._replaceRegexp(searchValue, replacement);
      }
    };
    hasOwnProp = Object.prototype.hasOwnProperty;
    Bundle = class {
      constructor(options = {}) {
        this.intro = options.intro || "";
        this.separator = options.separator !== void 0 ? options.separator : "\n";
        this.sources = [];
        this.uniqueSources = [];
        this.uniqueSourceIndexByFilename = {};
      }
      addSource(source) {
        if (source instanceof MagicString) {
          return this.addSource({
            content: source,
            filename: source.filename,
            separator: this.separator
          });
        }
        if (!isObject2(source) || !source.content) {
          throw new Error(
            "bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`"
          );
        }
        ["filename", "ignoreList", "indentExclusionRanges", "separator"].forEach((option) => {
          if (!hasOwnProp.call(source, option))
            source[option] = source.content[option];
        });
        if (source.separator === void 0) {
          source.separator = this.separator;
        }
        if (source.filename) {
          if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
            this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
            this.uniqueSources.push({ filename: source.filename, content: source.content.original });
          } else {
            const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
            if (source.content.original !== uniqueSource.content) {
              throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
            }
          }
        }
        this.sources.push(source);
        return this;
      }
      append(str, options) {
        this.addSource({
          content: new MagicString(str),
          separator: options && options.separator || ""
        });
        return this;
      }
      clone() {
        const bundle = new Bundle({
          intro: this.intro,
          separator: this.separator
        });
        this.sources.forEach((source) => {
          bundle.addSource({
            filename: source.filename,
            content: source.content.clone(),
            separator: source.separator
          });
        });
        return bundle;
      }
      generateDecodedMap(options = {}) {
        const names = [];
        let x_google_ignoreList = void 0;
        this.sources.forEach((source) => {
          Object.keys(source.content.storedNames).forEach((name) => {
            if (!~names.indexOf(name))
              names.push(name);
          });
        });
        const mappings = new Mappings(options.hires);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.sources.forEach((source, i2) => {
          if (i2 > 0) {
            mappings.advance(this.separator);
          }
          const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
          const magicString = source.content;
          const locate = getLocator(magicString.original);
          if (magicString.intro) {
            mappings.advance(magicString.intro);
          }
          magicString.firstChunk.eachNext((chunk) => {
            const loc = locate(chunk.start);
            if (chunk.intro.length)
              mappings.advance(chunk.intro);
            if (source.filename) {
              if (chunk.edited) {
                mappings.addEdit(
                  sourceIndex,
                  chunk.content,
                  loc,
                  chunk.storeName ? names.indexOf(chunk.original) : -1
                );
              } else {
                mappings.addUneditedChunk(
                  sourceIndex,
                  chunk,
                  magicString.original,
                  loc,
                  magicString.sourcemapLocations
                );
              }
            } else {
              mappings.advance(chunk.content);
            }
            if (chunk.outro.length)
              mappings.advance(chunk.outro);
          });
          if (magicString.outro) {
            mappings.advance(magicString.outro);
          }
          if (source.ignoreList && sourceIndex !== -1) {
            if (x_google_ignoreList === void 0) {
              x_google_ignoreList = [];
            }
            x_google_ignoreList.push(sourceIndex);
          }
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: this.uniqueSources.map((source) => {
            return options.file ? getRelativePath(options.file, source.filename) : source.filename;
          }),
          sourcesContent: this.uniqueSources.map((source) => {
            return options.includeContent ? source.content : null;
          }),
          names,
          mappings: mappings.raw,
          x_google_ignoreList
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      getIndentString() {
        const indentStringCounts = {};
        this.sources.forEach((source) => {
          const indentStr = source.content._getRawIndentString();
          if (indentStr === null)
            return;
          if (!indentStringCounts[indentStr])
            indentStringCounts[indentStr] = 0;
          indentStringCounts[indentStr] += 1;
        });
        return Object.keys(indentStringCounts).sort((a, b2) => {
          return indentStringCounts[a] - indentStringCounts[b2];
        })[0] || "	";
      }
      indent(indentStr) {
        if (!arguments.length) {
          indentStr = this.getIndentString();
        }
        if (indentStr === "")
          return this;
        let trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
        this.sources.forEach((source, i2) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const indentStart = trailingNewline || i2 > 0 && /\r?\n$/.test(separator);
          source.content.indent(indentStr, {
            exclude: source.indentExclusionRanges,
            indentStart
            //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
          });
          trailingNewline = source.content.lastChar() === "\n";
        });
        if (this.intro) {
          this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index2) => {
            return index2 > 0 ? indentStr + match : match;
          });
        }
        return this;
      }
      prepend(str) {
        this.intro = str + this.intro;
        return this;
      }
      toString() {
        const body = this.sources.map((source, i2) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const str = (i2 > 0 ? separator : "") + source.content.toString();
          return str;
        }).join("");
        return this.intro + body;
      }
      isEmpty() {
        if (this.intro.length && this.intro.trim())
          return false;
        if (this.sources.some((source) => !source.content.isEmpty()))
          return false;
        return true;
      }
      length() {
        return this.sources.reduce(
          (length, source) => length + source.content.length(),
          this.intro.length
        );
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimStart(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (!this.intro) {
          let source;
          let i2 = 0;
          do {
            source = this.sources[i2++];
            if (!source) {
              break;
            }
          } while (!source.content.trimStartAborted(charType));
        }
        return this;
      }
      trimEnd(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        let source;
        let i2 = this.sources.length - 1;
        do {
          source = this.sources[i2--];
          if (!source) {
            this.intro = this.intro.replace(rx, "");
            break;
          }
        } while (!source.content.trimEndAborted(charType));
        return this;
      }
    };
  }
});

// src/repositories/in-memory/in-memory-test-cases-repository.ts
var import_node_crypto = require("crypto");
var InMemoryTestCasesRepository = class {
  constructor() {
    this.items = [];
  }
  async findById(id) {
    const testCase = this.items.find((item) => item.id === id);
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async create(data) {
    const testCase = {
      id: data.id ?? (0, import_node_crypto.randomUUID)(),
      title: data.title,
      status: data.status ?? "open",
      description: data.description ?? null,
      project_id: data.project_id ?? null,
      priority: data.priority ?? "not_set",
      type: data.type ?? "other",
      layer: data.layer ?? "not_set",
      behavior: data.behavior ?? "not_set",
      automation_status: data.automation_status ?? "not_automated",
      deadline: data.deadline ? new Date(data.deadline) : null,
      attachment: data.attachment ?? null,
      assigned_to: data.assigned_to ?? null,
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date(),
      is_deleted: false
    };
    this.items.push(testCase);
    return testCase;
  }
  async delete(testCaseId) {
    const index2 = this.items.findIndex((testCase) => testCase.id === testCaseId);
    this.items[index2].is_deleted = true;
  }
  async getTestCasesByProjectId(projectId) {
    const testCases = this.items.filter(
      (item) => item.project_id === projectId && !item.is_deleted
    );
    return testCases;
  }
  async findByAndUpdate(testCaseId, data) {
    const index2 = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index2 === -1 || this.items[index2].is_deleted)
      return null;
    this.items[index2] = { ...this.items[index2], ...data };
    return this.items[index2];
  }
  async assignToUser(testCaseId, userId) {
    const index2 = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index2 === -1 || this.items[index2].is_deleted)
      return null;
    this.items[index2].assigned_to = userId;
    return this.items[index2];
  }
  async unassign(testCaseId) {
    const index2 = this.items.findIndex((testCase) => testCase.id === testCaseId);
    if (index2 === -1 || this.items[index2].is_deleted)
      return null;
    this.items[index2].assigned_to = null;
    return this.items[index2];
  }
  async getTestCasesByUser(userId) {
    const testCases = this.items.filter(
      (testCase) => testCase.assigned_to === userId && !testCase.is_deleted
    );
    return testCases;
  }
};

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/update-test-case.ts
var UpdateTestCaseUseCase = class {
  constructor(testCasesRepository2) {
    this.testCasesRepository = testCasesRepository2;
  }
  async execute({
    testCaseId,
    data
  }) {
    const testCaseFound = await this.testCasesRepository.findByAndUpdate(
      testCaseId,
      data
    );
    if (!testCaseFound) {
      throw new ResourceNotFoundError();
    }
    const testCase = await this.testCasesRepository.findById(
      testCaseId
    );
    return {
      testCase
    };
  }
};

// node_modules/@vitest/runner/node_modules/yocto-queue/index.js
var Node = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head, _tail, _size;
var Queue = class {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = new WeakMap();
_tail = new WeakMap();
_size = new WeakMap();

// node_modules/@vitest/utils/dist/helpers.js
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
}
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function noop() {
}
function objectAttr(source, path2, defaultValue = void 0) {
  const paths = path2.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p of paths) {
    result = Object(result)[p];
    if (result === void 0)
      return defaultValue;
  }
  return result;
}

// node_modules/@vitest/utils/dist/index.js
var import_pretty_format = __toESM(require_build(), 1);

// node_modules/@vitest/utils/dist/chunk-colors.js
var SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
var SAFE_COLORS_SYMBOL = Symbol("vitest:SAFE_COLORS");
var colorsMap = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
};
var colorsEntries = Object.entries(colorsMap);
function string(str) {
  return String(str);
}
string.open = "";
string.close = "";
var defaultColors = /* @__PURE__ */ colorsEntries.reduce((acc, [key]) => {
  acc[key] = string;
  return acc;
}, { isColorSupported: false });
function getColors() {
  return globalThis[SAFE_COLORS_SYMBOL] || defaultColors;
}

// node_modules/@vitest/utils/dist/index.js
var import_util = __toESM(require("util"), 1);
init_loupe();
var {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = import_pretty_format.plugins;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function stringify(object2, maxDepth = 10, { maxLength, ...options } = {}) {
  const MAX_LENGTH = maxLength ?? 1e4;
  let result;
  try {
    result = (0, import_pretty_format.format)(object2, {
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  } catch {
    result = (0, import_pretty_format.format)(object2, {
      callToJSON: false,
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object2, Math.floor(maxDepth / 2)) : result;
}
function getSafeTimers() {
  const {
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
  const {
    nextTick: safeNextTick
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || { nextTick: (cb) => cb() };
  return {
    nextTick: safeNextTick,
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  };
}
var loupe = typeof loupe_default.default === "function" ? loupe_default.default : loupe_default;
function format(...args) {
  return import_util.default.format(...args);
}
function loupeInspect(obj, options = {}) {
  return loupe(obj, {
    depth: 2,
    truncate: options.truncateThreshold === 0 ? Infinity : options.truncateThreshold ?? 40
  });
}
function objDisplay(obj, options = {}) {
  const truncateThreshold = options.truncateThreshold ?? 40;
  const str = loupeInspect(obj, options);
  const type2 = Object.prototype.toString.call(obj);
  if (truncateThreshold && str.length >= truncateThreshold) {
    if (type2 === "[object Function]") {
      const fn2 = obj;
      return !fn2.name || fn2.name === "" ? "[Function]" : `[Function: ${fn2.name}]`;
    } else if (type2 === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type2 === "[object Object]") {
      const keys2 = Object.keys(obj);
      const kstr = keys2.length > 2 ? `${keys2.splice(0, 2).join(", ")}, ...` : keys2.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}
function createSimpleStackTrace(options) {
  const { message = "error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}
function normalizeWindowsPath(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path2 = index2 >= 0 ? arguments_[index2] : cwd();
    if (!path2 || path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path2);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path2.length; ++index2) {
    if (index2 < path2.length) {
      char = path2[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, index2)}`;
        } else {
          res = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
function extractLocation(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/[()]/g, ""));
  if (!parts)
    return [urlLike];
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}
function parseSingleStack(raw) {
  let line = raw.trim();
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve(file);
  return {
    method,
    file,
    line: parseInt(lineNumber),
    column: parseInt(columnNumber)
  };
}

// node_modules/@vitest/utils/dist/diff.js
var import_concordance = __toESM(require_concordance(), 1);
function getConcordanceTheme() {
  const c = getColors();
  return {
    boolean: c.yellow,
    circular: c.gray("[Circular]"),
    date: {
      invalid: c.red("invalid"),
      value: c.blue
    },
    diffGutters: {
      actual: `  ${c.red("-")} `,
      expected: `  ${c.green("+")} `,
      padding: "    "
    },
    error: {
      ctor: { open: `${c.gray.open}(`, close: `)${c.gray.close}` },
      name: c.magenta
    },
    function: {
      name: c.blue,
      stringTag: c.magenta
    },
    global: c.magenta,
    item: { after: c.gray(",") },
    list: { openBracket: c.gray("["), closeBracket: c.gray("]") },
    mapEntry: { after: c.gray(",") },
    maxDepth: c.gray("\u2026"),
    null: c.yellow,
    number: c.yellow,
    object: {
      openBracket: c.gray("{"),
      closeBracket: c.gray("}"),
      ctor: c.magenta,
      stringTag: { open: `${c.magenta.open}@`, close: c.magenta.close },
      secondaryStringTag: { open: `${c.gray.open}@`, close: c.gray.close }
    },
    property: {
      after: c.gray(","),
      keyBracket: { open: c.gray("["), close: c.gray("]") },
      valueFallback: c.gray("\u2026")
    },
    regexp: {
      source: { open: `${c.blue.open}/`, close: `/${c.blue.close}` },
      flags: c.yellow
    },
    stats: { separator: c.gray("---") },
    string: {
      open: c.blue.open,
      close: c.blue.close,
      line: { open: c.blue("'"), close: c.blue("'") },
      multiline: { start: c.blue("`"), end: c.blue("`") },
      controlPicture: c.gray,
      diff: {
        insert: {
          open: c.bgGreen.open + c.black.open,
          close: c.black.close + c.bgGreen.close
        },
        delete: {
          open: c.bgRed.open + c.black.open,
          close: c.black.close + c.bgRed.close
        },
        equal: c.blue,
        insertLine: {
          open: c.green.open,
          close: c.green.close
        },
        deleteLine: {
          open: c.red.open,
          close: c.red.close
        }
      }
    },
    symbol: c.yellow,
    typedArray: {
      bytes: c.yellow
    },
    undefined: c.yellow
  };
}
function diffDescriptors(actual, expected, options) {
  return import_concordance.default.diff(expected, actual, options);
}
function unifiedDiff(actual, expected, options = {}) {
  const theme = getConcordanceTheme();
  const diff2 = diffDescriptors(actual, expected, { theme });
  const { showLegend = true } = options;
  const counts = {
    "+": 0,
    "-": 0
  };
  const c = getColors();
  const plus = theme.diffGutters.actual;
  const minus = `  ${c.green("+")}`;
  const lines = diff2.split(/\r?\n/g);
  lines.forEach((line) => {
    if (line.startsWith(plus))
      counts["+"]++;
    else if (line.startsWith(minus))
      counts["-"]++;
  });
  let legend = "";
  if (showLegend) {
    legend = `  ${c.green(`- Expected  - ${counts["-"]}`)}
  ${c.red(`+ Received  + ${counts["+"]}`)}

`;
  }
  return legend + diff2.replace(/␊\s*$/mg, "");
}

// node_modules/@vitest/runner/dist/chunk-tasks.js
var OBJECT_PROTO = Object.getPrototypeOf({});
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    for (const key of keys2) {
      Object.defineProperty(chain2, key, {
        get() {
          return create({ ...context, [key]: true });
        }
      });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}

// node_modules/pathe/dist/shared/pathe.92c04245.mjs
function normalizeWindowsPath2(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var normalize = function(path2) {
  if (path2.length === 0) {
    return ".";
  }
  path2 = normalizeWindowsPath2(path2);
  const isUNCPath = path2.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute2(path2);
  const trailingSeparator = path2[path2.length - 1] === "/";
  path2 = normalizeString2(path2, !isPathAbsolute);
  if (path2.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path2 += "/";
  }
  if (_DRIVE_LETTER_RE.test(path2)) {
    path2 += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path2}`;
    }
    return `//${path2}`;
  }
  return isPathAbsolute && !isAbsolute2(path2) ? `/${path2}` : path2;
};
var join = function(...arguments_) {
  if (arguments_.length === 0) {
    return ".";
  }
  let joined;
  for (const argument of arguments_) {
    if (argument && argument.length > 0) {
      if (joined === void 0) {
        joined = argument;
      } else {
        joined += `/${argument}`;
      }
    }
  }
  if (joined === void 0) {
    return ".";
  }
  return normalize(joined.replace(/\/\/+/g, "/"));
};
function normalizeString2(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path2.length; ++index2) {
    if (index2 < path2.length) {
      char = path2[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, index2)}`;
        } else {
          res = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute2 = function(p) {
  return _IS_ABSOLUTE_RE2.test(p);
};
var dirname = function(p) {
  const segments = normalizeWindowsPath2(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute2(p) ? "/" : ".");
};

// node_modules/@vitest/runner/dist/index.js
var fnMap = /* @__PURE__ */ new WeakMap();
var hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
var collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _a2;
  (_a2 = collectorContext.currentSuite) == null ? void 0 : _a2.tasks.push(task);
}
async function runWithSuite(suite2, fn2) {
  const prev = collectorContext.currentSuite;
  collectorContext.currentSuite = suite2;
  await fn2();
  collectorContext.currentSuite = prev;
}
function withTimeout(fn2, timeout, isHook = false) {
  if (timeout <= 0 || timeout === Infinity)
    return fn2;
  const { setTimeout, clearTimeout } = getSafeTimers();
  return (...args) => {
    return Promise.race([fn2(...args), new Promise((resolve4, reject) => {
      var _a2;
      const timer = setTimeout(() => {
        clearTimeout(timer);
        reject(new Error(makeTimeoutMsg(isHook, timeout)));
      }, timeout);
      (_a2 = timer.unref) == null ? void 0 : _a2.call(timer);
    })]);
  };
}
function createTestContext(test3, runner2) {
  var _a2;
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  context.meta = test3;
  context.onTestFailed = (fn2) => {
    test3.onFailed || (test3.onFailed = []);
    test3.onFailed.push(fn2);
  };
  return ((_a2 = runner2.extendTestContext) == null ? void 0 : _a2.call(runner2, context)) || context;
}
function makeTimeoutMsg(isHook, timeout) {
  return `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
}
var suite = createSuite();
var test = createTest(
  function(name, fn2, options) {
    getCurrentSuite().test.fn.call(this, name, fn2, options);
  }
);
var describe = suite;
var it = test;
var runner;
var defaultSuite;
function getRunner() {
  return runner;
}
function getCurrentSuite() {
  return collectorContext.currentSuite || defaultSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function createSuiteCollector(name, factory = () => {
}, mode, concurrent, shuffle2, suiteOptions) {
  const tasks = [];
  const factoryQueue = [];
  let suite2;
  initSuite();
  const test22 = createTest(function(name2, fn2 = noop, options = suiteOptions) {
    const mode2 = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    if (typeof options === "number")
      options = { timeout: options };
    const test3 = {
      id: "",
      type: "test",
      name: name2,
      mode: mode2,
      suite: void 0,
      fails: this.fails,
      retry: options == null ? void 0 : options.retry
    };
    if (this.concurrent || concurrent)
      test3.concurrent = true;
    if (shuffle2)
      test3.shuffle = true;
    const context = createTestContext(test3, runner);
    Object.defineProperty(test3, "context", {
      value: context,
      enumerable: false
    });
    setFn(test3, withTimeout(
      () => fn2(context),
      (options == null ? void 0 : options.timeout) ?? runner.config.testTimeout
    ));
    tasks.push(test3);
  });
  const custom2 = function(name2 = "") {
    const self2 = this || {};
    const task = {
      id: "",
      name: name2,
      type: "custom",
      mode: self2.only ? "only" : self2.skip ? "skip" : self2.todo ? "todo" : "run"
    };
    tasks.push(task);
    return task;
  };
  const collector = {
    type: "collector",
    name,
    mode,
    test: test22,
    tasks,
    collect,
    custom: custom2,
    clear,
    on: addHook
  };
  function addHook(name2, ...fn2) {
    getHooks(suite2)[name2].push(...fn2);
  }
  function initSuite() {
    suite2 = {
      id: "",
      type: "suite",
      name,
      mode,
      shuffle: shuffle2,
      tasks: []
    };
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    factoryQueue.length = 0;
    initSuite();
  }
  async function collect(file) {
    factoryQueue.length = 0;
    if (factory)
      await runWithSuite(collector, () => factory(test22));
    const allChildren = [];
    for (const i2 of [...factoryQueue, ...tasks])
      allChildren.push(i2.type === "collector" ? await i2.collect(file) : i2);
    suite2.file = file;
    suite2.tasks = allChildren;
    allChildren.forEach((task) => {
      task.suite = suite2;
      if (file)
        task.file = file;
    });
    return suite2;
  }
  collectTask(collector);
  return collector;
}
function createSuite() {
  function suiteFn(name, factory, options) {
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    return createSuiteCollector(name, factory, mode, this.concurrent, this.shuffle, options);
  }
  suiteFn.each = function(cases, ...args) {
    const suite2 = this.withContext();
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn2, options) => {
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? suite2(formatTitle(name, items, idx), () => fn2(...items), options) : suite2(formatTitle(name, items, idx), () => fn2(i2), options);
      });
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable(
    ["concurrent", "shuffle", "skip", "only", "todo"],
    suiteFn
  );
}
function createTest(fn2) {
  const testFn = fn2;
  testFn.each = function(cases, ...args) {
    const test22 = this.withContext();
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn22, options) => {
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? test22(formatTitle(name, items, idx), () => fn22(...items), options) : test22(formatTitle(name, items, idx), () => fn22(i2), options);
      });
    };
  };
  testFn.skipIf = (condition) => condition ? test.skip : test;
  testFn.runIf = (condition) => condition ? test : test.skip;
  return createChainable(
    ["concurrent", "skip", "only", "todo", "fails"],
    testFn
  );
}
function formatTitle(template, items, idx) {
  if (template.includes("%#")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  let formatted = format(template, ...items.slice(0, count));
  if (isObject(items[0])) {
    formatted = formatted.replace(
      /\$([$\w_.]+)/g,
      (_, key) => {
        var _a2;
        return objDisplay(objectAttr(items[0], key), (_a2 = runner == null ? void 0 : runner.config) == null ? void 0 : _a2.chaiConfig);
      }
      // https://github.com/chaijs/chai/pull/1490
    );
  }
  return formatted;
}
function formatTemplateString(cases, args) {
  const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i2) => i2.split("|"))[0];
  const res = [];
  for (let i2 = 0; i2 < Math.floor(args.length / header.length); i2++) {
    const oneCase = {};
    for (let j = 0; j < header.length; j++)
      oneCase[header[j]] = args[i2 * header.length + j];
    res.push(oneCase);
  }
  return res;
}
var now$1 = Date.now;
var _test;
function getCurrentTest() {
  return _test;
}
var now = Date.now;
function getDefaultHookTimeout() {
  return getRunner().config.hookTimeout;
}
function beforeAll(fn2, timeout) {
  return getCurrentSuite().on("beforeAll", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function afterAll(fn2, timeout) {
  return getCurrentSuite().on("afterAll", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function beforeEach(fn2, timeout) {
  return getCurrentSuite().on("beforeEach", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function afterEach(fn2, timeout) {
  return getCurrentSuite().on("afterEach", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
var onTestFailed = createTestHook("onTestFailed", (test3, handler) => {
  test3.onFailed || (test3.onFailed = []);
  test3.onFailed.push(handler);
});
function createTestHook(name, handler) {
  return (fn2) => {
    const current = getCurrentTest();
    if (!current)
      throw new Error(`Hook ${name}() can only be called inside a test`);
    handler(current, fn2);
  };
}

// node_modules/vitest/dist/vendor-global.6795f91f.js
function getWorkerState() {
  return globalThis.__vitest_worker__;
}
function getCurrentEnvironment() {
  return globalThis.__vitest_environment__;
}

// node_modules/vitest/dist/vendor-index.fad2598b.js
var _a;
var isNode = typeof process < "u" && typeof process.stdout < "u" && !((_a = process.versions) == null ? void 0 : _a.deno) && !globalThis.window;
var isWindows = isNode && process.platform === "win32";
function getRunMode() {
  return getWorkerState().config.mode;
}
function isRunningInBenchmark() {
  return getRunMode() === "benchmark";
}
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((mod, path2) => {
    if (skipPaths.some((re) => re.test(path2)))
      return;
    modules.invalidateModule(mod);
  });
}

// node_modules/chai/index.mjs
var chai_exports = {};
__export(chai_exports, {
  Assertion: () => Assertion,
  AssertionError: () => AssertionError,
  assert: () => assert,
  config: () => config,
  core: () => core,
  default: () => chai_default,
  expect: () => expect,
  should: () => should,
  use: () => use,
  util: () => util2,
  version: () => version
});
var import_index = __toESM(require_chai2(), 1);
var expect = import_index.default.expect;
var version = import_index.default.version;
var Assertion = import_index.default.Assertion;
var AssertionError = import_index.default.AssertionError;
var util2 = import_index.default.util;
var config = import_index.default.config;
var use = import_index.default.use;
var should = import_index.default.should;
var assert = import_index.default.assert;
var core = import_index.default.core;
var chai_default = import_index.default;

// node_modules/vitest/dist/vendor-_commonjsHelpers.76cdd49e.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};

// node_modules/tinyspy/dist/index.js
function R(e, t) {
  if (!e)
    throw new Error(t);
}
function i(e, t) {
  return typeof t === e;
}
function b(e) {
  return e instanceof Promise;
}
function g(e, t, n2) {
  Object.defineProperty(e, t, n2);
}
function l(e, t, n2) {
  Object.defineProperty(e, t, { value: n2 });
}
var y = Symbol.for("tinyspy:spy");
var m = /* @__PURE__ */ new Set();
var M = (e) => {
  e.called = false, e.callCount = 0, e.calls = [], e.results = [];
};
var C = (e) => (g(e, y, { value: { reset: () => M(e[y]) } }), e[y]);
var A = (e) => e[y] || C(e);
function I(e) {
  R(i("function", e) || i("undefined", e), "cannot spy on a non-function value");
  let t = function(...o) {
    let r = A(t);
    if (r.called = true, r.callCount++, r.calls.push(o), r.next) {
      let [p, s] = r.next;
      if (r.results.push(r.next), r.next = null, p === "ok")
        return s;
      throw s;
    }
    let a, f = "ok";
    if (r.impl)
      try {
        a = r.impl.apply(this, o), f = "ok";
      } catch (p) {
        throw a = p, f = "error", r.results.push([f, p]), p;
      }
    let u = [f, a];
    if (b(a)) {
      let p = a.then((s) => u[1] = s).catch((s) => {
        throw u[0] = "error", u[1] = s, s;
      });
      Object.assign(p, a), a = p;
    }
    return r.results.push(u), a;
  };
  l(t, "_isMockFunction", true), l(t, "length", e ? e.length : 0), l(t, "name", e && e.name || "spy");
  let n2 = A(t);
  return n2.reset(), n2.impl = e, t;
}
var P = (e, t) => Object.getOwnPropertyDescriptor(e, t);
function E(e, t, n2) {
  R(!i("undefined", e), "spyOn could not find an object to spy upon"), R(i("object", e) || i("function", e), "cannot spyOn on a primitive value");
  let o = () => {
    if (!i("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [r, a] = o(), f = P(e, r), u = Object.getPrototypeOf(e), p = u && P(u, r), s = f || p;
  R(s || r in e, `${String(r)} does not exist`);
  let w = false;
  a === "value" && s && !s.value && s.get && (a = "get", w = true, n2 = s.get());
  let c;
  s ? c = s[a] : a !== "value" ? c = () => e[r] : c = e[r], n2 || (n2 = c);
  let d = I(n2), O = (h) => {
    let { value: G, ...k } = s || {
      configurable: true,
      writable: true
    };
    a !== "value" && delete k.writable, k[a] = h, g(e, r, k);
  }, K = () => O(c), T = d[y];
  return l(T, "restore", K), l(T, "getOriginal", () => w ? c() : c), l(T, "willCall", (h) => (T.impl = h, d)), O(w ? () => d : d), m.add(d), d;
}

// node_modules/@vitest/spy/dist/index.js
var spies = /* @__PURE__ */ new Set();
function isMockFunction(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  const stub = E(obj, objMethod);
  return enhanceSpy(stub);
}
var callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation;
  let instances = [];
  let invocations = [];
  const state = A(spy);
  const mockContext = {
    get calls() {
      return state.calls;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return state.results.map(([callType, value]) => {
        const type2 = callType === "error" ? "throw" : "return";
        return { type: type2, value };
      });
    },
    get lastCall() {
      return state.calls[state.calls.length - 1];
    }
  };
  let onceImplementations = [];
  let implementationChangedTemporarily = false;
  let name = stub.name;
  stub.getMockName = () => name || "vi.fn()";
  stub.mockName = (n2) => {
    name = n2;
    return stub;
  };
  stub.mockClear = () => {
    state.reset();
    instances = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation = () => void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    implementation = void 0;
    return stub;
  };
  stub.getMockImplementation = () => implementation;
  stub.mockImplementation = (fn2) => {
    implementation = fn2;
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  function withImplementation(fn2, cb) {
    const originalImplementation = implementation;
    implementation = fn2;
    implementationChangedTemporarily = true;
    const reset = () => {
      implementation = originalImplementation;
      implementationChangedTemporarily = false;
    };
    const result = cb();
    if (result instanceof Promise) {
      return result.then(() => {
        reset();
        return stub;
      });
    }
    reset();
    return stub;
  }
  stub.withImplementation = withImplementation;
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", {
    get: () => mockContext
  });
  state.willCall(function(...args) {
    instances.push(this);
    invocations.push(++callOrder);
    const impl = implementationChangedTemporarily ? implementation : onceImplementations.shift() || implementation || state.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  });
  spies.add(stub);
  return stub;
}
function fn(implementation) {
  return enhanceSpy(E({ fn: implementation || (() => {
  }) }, "fn"));
}

// node_modules/@vitest/expect/dist/index.js
var MATCHERS_OBJECT = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT]),
      matchers
    })
  });
}
function getState(expect2) {
  return globalThis[MATCHERS_OBJECT].get(expect2);
}
function setState(state, expect2) {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  Object.assign(current, state);
  map2.set(expect2, current);
}
function getMatcherUtils() {
  const c = () => getColors();
  const EXPECTED_COLOR = c().green;
  const RECEIVED_COLOR = c().red;
  const INVERTED_COLOR = c().inverse;
  const BOLD_WEIGHT = c().bold;
  const DIM_COLOR = c().dim;
  function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
    const {
      comment = "",
      isDirectExpectCall = false,
      // seems redundant with received === ''
      isNot = false,
      promise = "",
      secondArgument = "",
      expectedColor = EXPECTED_COLOR,
      receivedColor = RECEIVED_COLOR,
      secondArgumentColor = EXPECTED_COLOR
    } = options;
    let hint = "";
    let dimString = "expect";
    if (!isDirectExpectCall && received !== "") {
      hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
      dimString = ")";
    }
    if (promise !== "") {
      hint += DIM_COLOR(`${dimString}.`) + promise;
      dimString = "";
    }
    if (isNot) {
      hint += `${DIM_COLOR(`${dimString}.`)}not`;
      dimString = "";
    }
    if (matcherName.includes(".")) {
      dimString += matcherName;
    } else {
      hint += DIM_COLOR(`${dimString}.`) + matcherName;
      dimString = "";
    }
    if (expected === "") {
      dimString += "()";
    } else {
      hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
      if (secondArgument)
        hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
      dimString = ")";
    }
    if (comment !== "")
      dimString += ` // ${comment}`;
    if (dimString !== "")
      hint += DIM_COLOR(dimString);
    return hint;
  }
  const SPACE_SYMBOL = "\xB7";
  const replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
  const printReceived = (object2) => RECEIVED_COLOR(replaceTrailingSpaces(stringify(object2)));
  const printExpected = (value) => EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
  return {
    EXPECTED_COLOR,
    RECEIVED_COLOR,
    INVERTED_COLOR,
    BOLD_WEIGHT,
    DIM_COLOR,
    matcherHint,
    printReceived,
    printExpected
  };
}
function diff(a, b2, options) {
  return unifiedDiff(b2, a, {
    showLegend: options == null ? void 0 : options.showLegend
  });
}
function equals(a, b2, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a, b2, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
var functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a, b2) {
  const asymmetricA = isAsymmetric(a);
  const asymmetricB = isAsymmetric(b2);
  if (asymmetricA && asymmetricB)
    return void 0;
  if (asymmetricA)
    return a.asymmetricMatch(b2);
  if (asymmetricB)
    return b2.asymmetricMatch(a);
}
function eq(a, b2, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a, b2);
  if (asymmetricResult !== void 0)
    return asymmetricResult;
  for (let i2 = 0; i2 < customTesters.length; i2++) {
    const customTesterResult = customTesters[i2](a, b2);
    if (customTesterResult !== void 0)
      return customTesterResult;
  }
  if (a instanceof Error && b2 instanceof Error)
    return a.message === b2.message;
  if (Object.is(a, b2))
    return true;
  if (a === null || b2 === null)
    return a === b2;
  const className2 = Object.prototype.toString.call(a);
  if (className2 !== Object.prototype.toString.call(b2))
    return false;
  switch (className2) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a !== typeof b2) {
        return false;
      } else if (typeof a !== "object" && typeof b2 !== "object") {
        return Object.is(a, b2);
      } else {
        return Object.is(a.valueOf(), b2.valueOf());
      }
    case "[object Date]":
      return isNaN(a) && isNaN(b2) || +a === +b2;
    case "[object RegExp]":
      return a.source === b2.source && a.flags === b2.flags;
  }
  if (typeof a !== "object" || typeof b2 !== "object")
    return false;
  if (isDomNode(a) && isDomNode(b2))
    return a.isEqualNode(b2);
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
    else if (bStack[length] === b2)
      return false;
  }
  aStack.push(a);
  bStack.push(b2);
  if (className2 === "[object Array]" && a.length !== b2.length)
    return false;
  const aKeys = keys(a, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b2, hasKey2).length !== size)
    return false;
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b2, key) && eq(a[key], b2[key], aStack, bStack, customTesters, hasKey2);
    if (!result)
      return false;
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key))
      keys2.push(key);
  }
  return keys2.concat(
    Object.getOwnPropertySymbols(obj).filter(
      (symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable
    )
  );
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string" && typeof obj.isEqualNode === "function";
}
var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
var IteratorSymbol = Symbol.iterator;
function hasIterator(object2) {
  return !!(object2 != null && object2[IteratorSymbol]);
}
function iterableEquality(a, b2, aStack = [], bStack = []) {
  if (typeof a !== "object" || typeof b2 !== "object" || Array.isArray(a) || Array.isArray(b2) || !hasIterator(a) || !hasIterator(b2))
    return void 0;
  if (a.constructor !== b2.constructor)
    return false;
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
  }
  aStack.push(a);
  bStack.push(b2);
  const iterableEqualityWithStack = (a2, b22) => iterableEquality(a2, b22, [...aStack], [...bStack]);
  if (a.size !== void 0) {
    if (a.size !== b2.size) {
      return false;
    } else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b2.has(aValue)) {
          let has2 = false;
          for (const bValue of b2) {
            const isEqual = equals(aValue, bValue, [iterableEqualityWithStack]);
            if (isEqual === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b2.has(aEntry[0]) || !equals(aEntry[1], b2.get(aEntry[0]), [iterableEqualityWithStack])) {
          let has2 = false;
          for (const bEntry of b2) {
            const matchedKey = equals(aEntry[0], bEntry[0], [
              iterableEqualityWithStack
            ]);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals(aEntry[1], bEntry[1], [
                iterableEqualityWithStack
              ]);
            }
            if (matchedValue === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b2[IteratorSymbol]();
  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !equals(aValue, nextB.value, [iterableEqualityWithStack]))
      return false;
  }
  if (!bIterator.next().done)
    return false;
  aStack.pop();
  bStack.pop();
  return true;
}
function hasPropertyInObject(object2, key) {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate)
    return false;
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
}
function isObjectWithKeys(a) {
  return isObject(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
}
function subsetEquality(object2, subset) {
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object22, subset2) => {
    if (!isObjectWithKeys(subset2))
      return void 0;
    return Object.keys(subset2).every((key) => {
      if (isObjectWithKeys(subset2[key])) {
        if (seenReferences.has(subset2[key]))
          return equals(object22[key], subset2[key], [iterableEquality]);
        seenReferences.set(subset2[key], true);
      }
      const result = object22 != null && hasPropertyInObject(object22, key) && equals(object22[key], subset2[key], [
        iterableEquality,
        subsetEqualityWithContext(seenReferences)
      ]);
      seenReferences.delete(subset2[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset);
}
function typeEquality(a, b2) {
  if (a == null || b2 == null || a.constructor === b2.constructor)
    return void 0;
  return false;
}
function arrayBufferEquality(a, b2) {
  if (!(a instanceof ArrayBuffer) || !(b2 instanceof ArrayBuffer))
    return void 0;
  const dataViewA = new DataView(a);
  const dataViewB = new DataView(b2);
  if (dataViewA.byteLength !== dataViewB.byteLength)
    return false;
  for (let i2 = 0; i2 < dataViewA.byteLength; i2++) {
    if (dataViewA.getUint8(i2) !== dataViewB.getUint8(i2))
      return false;
  }
  return true;
}
function sparseArrayEquality(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2))
    return void 0;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  return equals(a, b2, [iterableEquality, typeEquality], true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName))
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  return toBeMessage;
}
var AsymmetricMatcher2 = class {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
    this.$$typeof = Symbol.for("jest.asymmetricMatcher");
  }
  getMatcherContext(expect2) {
    return {
      ...getState(expect2 || globalThis[GLOBAL_EXPECT]),
      equals,
      isNot: this.inverse,
      utils: {
        ...getMatcherUtils(),
        diff,
        stringify,
        iterableEquality,
        subsetEquality
      }
    };
  }
};
var StringContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var Anything = class extends AsymmetricMatcher2 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ObjectContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(obj);
    if (obj.constructor.prototype === obj)
      return null;
    return obj.constructor.prototype;
  }
  hasProperty(obj, property) {
    if (!obj)
      return false;
    if (Object.prototype.hasOwnProperty.call(obj, property))
      return true;
    return this.hasProperty(this.getPrototype(obj), property);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    let result = true;
    for (const property in this.sample) {
      if (!this.hasProperty(other, property) || !equals(this.sample[property], other[property])) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var ArrayContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item) => other.some((another) => equals(item, another))
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var Any = class extends AsymmetricMatcher2 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name)
      return func.name;
    const functionToString2 = Function.prototype.toString;
    const matches = functionToString2.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other == "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other == "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other == "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other == "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other == "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other == "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other == "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
};
var StringMatching = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var JestAsymmetricMatchers = (chai3, utils) => {
  utils.addMethod(
    chai3.expect,
    "anything",
    () => new Anything()
  );
  utils.addMethod(
    chai3.expect,
    "any",
    (expected) => new Any(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringContaining",
    (expected) => new StringContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "objectContaining",
    (expected) => new ObjectContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "arrayContaining",
    (expected) => new ArrayContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringMatching",
    (expected) => new StringMatching(expected)
  );
  chai3.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true)
  };
};
function recordAsyncExpect(test3, promise) {
  if (test3) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
var JestChaiExpect = (chai3, utils) => {
  const c = () => getColors();
  function def(name, fn2) {
    const addMethod = (n2) => {
      utils.addMethod(chai3.Assertion.prototype, n2, fn2);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n2, fn2);
    };
    if (Array.isArray(name))
      name.forEach((n2) => addMethod(n2));
    else
      addMethod(name);
  }
  ["throw", "throws", "Throw"].forEach((m2) => {
    utils.overwriteMethod(chai3.Assertion.prototype, m2, (_super) => {
      return function(...args) {
        const promise = utils.flag(this, "promise");
        const object2 = utils.flag(this, "object");
        const isNot = utils.flag(this, "negate");
        if (promise === "rejects") {
          utils.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error = {
              showDiff: false
            };
            throw new AssertionError(message, error, utils.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test3) {
    utils.flag(this, "vitest-test", test3);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils.flag(this, "object");
    const equal = equals(
      actual,
      expected,
      [iterableEquality]
    );
    return this.assert(
      equal,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      expected,
      actual
    );
  });
  def("toStrictEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const equal = equals(
      obj,
      expected,
      [
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ],
      true
    );
    return this.assert(
      equal,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      expected,
      obj
    );
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals(
        actual,
        expected,
        [
          iterableEquality,
          typeEquality,
          sparseArrayEquality,
          arrayBufferEquality
        ],
        true
      );
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals(
          actual,
          expected,
          [iterableEquality]
        );
        if (toEqualPass)
          deepEqualityName = "toEqual";
      }
    }
    return this.assert(
      pass,
      generateToBeMessage(deepEqualityName),
      "expected #{this} not to be #{exp} // Object.is equality",
      expected,
      actual
    );
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    return this.assert(
      equals(actual, expected, [iterableEquality, subsetEquality]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      expected,
      actual
    );
  });
  def("toMatch", function(expected) {
    if (typeof expected === "string")
      return this.include(expected);
    else
      return this.match(expected);
  });
  def("toContain", function(item) {
    return this.contain(item);
  });
  def("toContainEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const index2 = Array.from(obj).findIndex((item) => {
      return equals(item, expected);
    });
    this.assert(
      index2 !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      expected
    );
  });
  def("toBeTruthy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      Boolean(obj),
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      obj
    );
  });
  def("toBeFalsy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      !obj,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      obj
    );
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual > expected,
      `expected ${actual} to be greater than ${expected}`,
      `expected ${actual} to be not greater than ${expected}`,
      actual,
      expected
    );
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual >= expected,
      `expected ${actual} to be greater than or equal to ${expected}`,
      `expected ${actual} to be not greater than or equal to ${expected}`,
      actual,
      expected
    );
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual < expected,
      `expected ${actual} to be less than ${expected}`,
      `expected ${actual} to be not less than ${expected}`,
      actual,
      expected
    );
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual <= expected,
      `expected ${actual} to be less than or equal to ${expected}`,
      `expected ${actual} to be not less than or equal to ${expected}`,
      actual,
      expected
    );
  });
  def("toBeNaN", function() {
    return this.be.NaN;
  });
  def("toBeUndefined", function() {
    return this.be.undefined;
  });
  def("toBeNull", function() {
    return this.be.null;
  });
  def("toBeDefined", function() {
    const negate = utils.flag(this, "negate");
    utils.flag(this, "negate", false);
    if (negate)
      return this.be.undefined;
    return this.not.be.undefined;
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(
      equal,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      expected,
      actual
    );
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length) {
    return this.have.length(length);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0]))
      args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
    const actual = this._obj;
    const [propertyName, expected] = args;
    const getValue = () => {
      const hasOwn = Object.prototype.hasOwnProperty.call(actual, propertyName);
      if (hasOwn)
        return { value: actual[propertyName], exists: true };
      return utils.getPathInfo(actual, propertyName);
    };
    const { value, exists } = getValue();
    const pass = exists && (args.length === 1 || equals(expected, value));
    const valueString = args.length === 1 ? "" : ` with value ${utils.objDisplay(expected)}`;
    return this.assert(
      pass,
      `expected #{this} to have property "${propertyName}"${valueString}`,
      `expected #{this} to not have property "${propertyName}"${valueString}`,
      actual
    );
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Infinity && expected === Infinity) {
      pass = true;
    } else if (received === -Infinity && expected === -Infinity) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(
      pass,
      `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      received,
      expected
    );
  });
  const assertIsMock = (assertion) => {
    if (!isMockFunction(assertion._obj))
      throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
  };
  const getSpy = (assertion) => {
    assertIsMock(assertion);
    return assertion._obj;
  };
  const ordinalOf = (i2) => {
    const j = i2 % 10;
    const k = i2 % 100;
    if (j === 1 && k !== 11)
      return `${i2}st`;
    if (j === 2 && k !== 12)
      return `${i2}nd`;
    if (j === 3 && k !== 13)
      return `${i2}rd`;
    return `${i2}th`;
  };
  const formatCalls = (spy, msg, actualCall) => {
    msg += c().gray(`

Received: 
${spy.mock.calls.map((callArg, i2) => {
      let methodCall = c().bold(`    ${ordinalOf(i2 + 1)} ${spy.getMockName()} call:

`);
      if (actualCall)
        methodCall += diff(callArg, actualCall, { showLegend: false });
      else
        methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  const formatReturns = (spy, msg, actualReturn) => {
    msg += c().gray(`

Received: 
${spy.mock.results.map((callReturn, i2) => {
      let methodCall = c().bold(`    ${ordinalOf(i2 + 1)} ${spy.getMockName()} call return:

`);
      if (actualReturn)
        methodCall += diff(callReturn.value, actualReturn, { showLegend: false });
      else
        methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === number,
      `expected "${spyName}" to be called #{exp} times`,
      `expected "${spyName}" to not be called #{exp} times`,
      number,
      callCount
    );
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === 1,
      `expected "${spyName}" to be called once`,
      `expected "${spyName}" to not be called once`,
      1,
      callCount
    );
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const called = spy.mock.calls.length > 0;
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        called,
        `expected "${spyName}" to be called at least once`,
        `expected "${spyName}" to not be called at all`,
        true,
        called
      ]
    );
    if (called && isNot)
      msg = formatCalls(spy, msg);
    if (called && isNot || !called && !isNot) {
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equals(callArg, args, [iterableEquality]));
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to be called with arguments: #{exp}`,
        `expected "${spyName}" to not be called with arguments: #{exp}`,
        args
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatCalls(spy, msg, args);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    this.assert(
      equals(nthCall, args, [iterableEquality]),
      `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}`,
      `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`,
      args,
      nthCall
    );
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
    this.assert(
      equals(lastCall, args, [iterableEquality]),
      `expected last "${spyName}" call to have been called with #{exp}`,
      `expected last "${spyName}" call to not have been called with #{exp}`,
      args,
      lastCall
    );
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp)
      return this.throws(expected);
    const obj = this._obj;
    const promise = utils.flag(this, "promise");
    const isNot = utils.flag(this, "negate");
    let thrown = null;
    if (promise === "rejects") {
      thrown = obj;
    } else if (promise === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error = {
          showDiff: false
        };
        throw new AssertionError(message, error, utils.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      try {
        obj();
      } catch (err) {
        thrown = err;
      }
    }
    if (typeof expected === "function") {
      const name = expected.name || expected.prototype.constructor.name;
      return this.assert(
        thrown && thrown instanceof expected,
        `expected error to be instance of ${name}`,
        `expected error not to be instance of ${name}`,
        expected,
        thrown
      );
    }
    if (expected instanceof Error) {
      return this.assert(
        thrown && expected.message === thrown.message,
        `expected error to have message: ${expected.message}`,
        `expected error not to have message: ${expected.message}`,
        expected.message,
        thrown && thrown.message
      );
    }
    if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(
        thrown && matcher.asymmetricMatch(thrown),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        matcher.toString(),
        thrown
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  def(["toHaveReturned", "toReturn"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const calledAndNotThrew = spy.mock.calls.length > 0 && spy.mock.results.some(({ type: type2 }) => type2 !== "throw");
    this.assert(
      calledAndNotThrew,
      `expected "${spyName}" to be successfully called at least once`,
      `expected "${spyName}" to not be successfully called`,
      calledAndNotThrew,
      !calledAndNotThrew
    );
  });
  def(["toHaveReturnedTimes", "toReturnTimes"], function(times) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const successfulReturns = spy.mock.results.reduce((success, { type: type2 }) => type2 === "throw" ? success : ++success, 0);
    this.assert(
      successfulReturns === times,
      `expected "${spyName}" to be successfully called ${times} times`,
      `expected "${spyName}" to not be successfully called ${times} times`,
      `expected number of returns: ${times}`,
      `received number of returns: ${successfulReturns}`
    );
  });
  def(["toHaveReturnedWith", "toReturnWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.results.some(({ type: type2, value: result }) => type2 === "return" && equals(value, result));
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to return with: #{exp} at least once`,
        `expected "${spyName}" to not return with: #{exp}`,
        value
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatReturns(spy, msg, value);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveLastReturnedWith", "lastReturnedWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const { value: lastResult } = spy.mock.results[spy.mock.results.length - 1];
    const pass = equals(lastResult, value);
    this.assert(
      pass,
      `expected last "${spyName}" call to return #{exp}`,
      `expected last "${spyName}" call to not return #{exp}`,
      value,
      lastResult
    );
  });
  def(["toHaveNthReturnedWith", "nthReturnedWith"], function(nthCall, value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const isNot = utils.flag(this, "negate");
    const { type: callType, value: callResult } = spy.mock.results[nthCall - 1];
    const ordinalCall = `${ordinalOf(nthCall)} call`;
    if (!isNot && callType === "throw")
      chai3.assert.fail(`expected ${ordinalCall} to return #{exp}, but instead it threw an error`);
    const nthCallReturn = equals(callResult, value);
    this.assert(
      nthCallReturn,
      `expected ${ordinalCall} "${spyName}" call to return #{exp}`,
      `expected ${ordinalCall} "${spyName}" call to not return #{exp}`,
      value,
      callResult
    );
  });
  def("toSatisfy", function(matcher, message) {
    return this.be.satisfy(matcher, message);
  });
  utils.addProperty(chai3.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    utils.flag(this, "promise", "resolves");
    utils.flag(this, "error", new Error("resolves"));
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    if (typeof (obj == null ? void 0 : obj.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          const promise = obj.then(
            (value) => {
              utils.flag(this, "object", value);
              return result.call(this, ...args);
            },
            (err) => {
              throw new Error(`promise rejected "${String(err)}" instead of resolving`);
            }
          );
          return recordAsyncExpect(test3, promise);
        };
      }
    });
    return proxy;
  });
  utils.addProperty(chai3.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    utils.flag(this, "promise", "rejects");
    utils.flag(this, "error", new Error("rejects"));
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (typeof (wrapper == null ? void 0 : wrapper.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          const promise = wrapper.then(
            (value) => {
              throw new Error(`promise resolved "${String(value)}" instead of rejecting`);
            },
            (err) => {
              utils.flag(this, "object", err);
              return result.call(this, ...args);
            }
          );
          return recordAsyncExpect(test3, promise);
        };
      }
    });
    return proxy;
  });
};
function getMatcherState(assertion, expect2) {
  const obj = assertion._obj;
  const isNot = util2.flag(assertion, "negate");
  const promise = util2.flag(assertion, "promise") || "";
  const jestUtils = {
    ...getMatcherUtils(),
    diff,
    stringify,
    iterableEquality,
    subsetEquality
  };
  const matcherState = {
    ...getState(expect2),
    isNot,
    utils: jestUtils,
    promise,
    equals,
    // needed for built-in jest-snapshots, but we don't use it
    suppressedErrors: []
  };
  return {
    state: matcherState,
    isNot,
    obj
  };
}
var JestExtendError = class extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
};
function JestExtendPlugin(expect2, matchers) {
  return (c, utils) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const result = expectAssertion.call(state, obj, ...args);
        if (result && typeof result === "object" && result instanceof Promise) {
          return result.then(({ pass: pass2, message: message2, actual: actual2, expected: expected2 }) => {
            if (pass2 && isNot || !pass2 && !isNot)
              throw new JestExtendError(message2(), actual2, expected2);
          });
        }
        const { pass, message, actual, expected } = result;
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, expectWrapper);
      utils.addMethod(c.Assertion.prototype, expectAssertionName, expectWrapper);
      class CustomMatcher extends AsymmetricMatcher2 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(
            this.getMatcherContext(expect2),
            other,
            ...this.sample
          );
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    });
  };
}
var JestExtend = (chai3, utils) => {
  utils.addMethod(chai3.expect, "extend", (expect2, expects) => {
    chai3.use(JestExtendPlugin(expect2, expects));
  });
};

// node_modules/@vitest/snapshot/dist/index.js
var import_pretty_format2 = __toESM(require_build(), 1);
var naturalCompare$1 = { exports: {} };
var naturalCompare = function(a, b2) {
  var i2, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
  function getCode(str, pos, code) {
    if (code) {
      for (i2 = pos; code = getCode(str, i2), code < 76 && code > 65; )
        ++i2;
      return +str.slice(pos - 1, i2);
    }
    code = alphabet && alphabet.indexOf(str.charAt(pos));
    return code > -1 ? code + 76 : (code = str.charCodeAt(pos) || 0, code < 45 || code > 127) ? code : code < 46 ? 65 : code < 48 ? code - 1 : code < 58 ? code + 18 : code < 65 ? code - 11 : code < 91 ? code + 11 : code < 97 ? code - 37 : code < 123 ? code + 5 : code - 63;
  }
  if ((a += "") != (b2 += ""))
    for (; codeB; ) {
      codeA = getCode(a, posA++);
      codeB = getCode(b2, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a, posA, posA);
        codeB = getCode(b2, posB, posA = i2);
        posB = i2;
      }
      if (codeA != codeB)
        return codeA < codeB ? -1 : 1;
    }
  return 0;
};
try {
  naturalCompare$1.exports = naturalCompare;
} catch (e) {
  String.naturalCompare = naturalCompare;
}
function notNullish(v) {
  return v != null;
}
function isPrimitive(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
}
function isObject3(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function getCallLastIndex2(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}
var getPromiseValue2 = () => "Promise{\u2026}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue2 = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
var nodeInspect2 = false;
try {
  const nodeUtil = require("util");
  nodeInspect2 = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect2 = false;
}
function normalizeWindowsPath3(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE3 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd2() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve3 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath3(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path2 = index2 >= 0 ? arguments_[index2] : cwd2();
    if (!path2 || path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute3(path2);
  }
  resolvedPath = normalizeString3(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute3(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString3(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path2.length; ++index2) {
    if (index2 < path2.length) {
      char = path2[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, index2)}`;
        } else {
          res = path2.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute3 = function(p) {
  return _IS_ABSOLUTE_RE3.test(p);
};
var lineSplitRE = /\r?\n/;
var stackIgnorePatterns = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/"
];
function extractLocation2(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/[()]/g, ""));
  if (!parts)
    return [urlLike];
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}
function parseSingleStack2(raw) {
  let line = raw.trim();
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation2(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve3(file);
  return {
    method,
    file,
    line: parseInt(lineNumber),
    column: parseInt(columnNumber)
  };
}
function parseStacktrace(stack, ignore = stackIgnorePatterns) {
  const stackFrames = stack.split("\n").map((raw) => {
    const stack2 = parseSingleStack2(raw);
    if (!stack2 || ignore.length && ignore.some((p) => stack2.file.match(p)))
      return null;
    return stack2;
  }).filter(notNullish);
  return stackFrames;
}
function parseErrorStacktrace(e, ignore = stackIgnorePatterns) {
  if (!e || isPrimitive(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const stackStr = e.stack || e.stackStr || "";
  const stackFrames = parseStacktrace(stackStr, ignore);
  e.stacks = stackFrames;
  return stackFrames;
}
function positionToOffset(source, lineNumber, columnNumber) {
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let start = 0;
  if (lineNumber > lines.length)
    return source.length;
  for (let i2 = 0; i2 < lineNumber - 1; i2++)
    start += lines[i2].length + nl;
  return start + columnNumber;
}
function offsetToLineNumber(source, offset) {
  if (offset > source.length) {
    throw new Error(
      `offset is longer than source length! offset ${offset} > length ${source.length}`
    );
  }
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let counted = 0;
  let line = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + nl;
    if (counted + lineLength >= offset)
      break;
    counted += lineLength;
  }
  return line + 1;
}
var serialize$1 = (val, config2, indentation, depth, refs, printer) => {
  const name = val.getMockName();
  const nameString = name === "vi.fn()" ? "" : ` ${name}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
var test2 = (val) => val && !!val._isMockFunction;
var plugin = { serialize: serialize$1, test: test2 };
var {
  DOMCollection: DOMCollection2,
  DOMElement: DOMElement2,
  Immutable: Immutable2,
  ReactElement: ReactElement2,
  ReactTestComponent: ReactTestComponent2,
  AsymmetricMatcher: AsymmetricMatcher3
} = import_pretty_format2.plugins;
var PLUGINS2 = [
  ReactTestComponent2,
  ReactElement2,
  DOMElement2,
  DOMCollection2,
  Immutable2,
  AsymmetricMatcher3,
  plugin
];
function addSerializer(plugin2) {
  PLUGINS2 = [plugin2].concat(PLUGINS2);
}
function getSerializers() {
  return PLUGINS2;
}
function testNameToKey(testName, count) {
  return `${testName} ${count}`;
}
function keyToTestName(key) {
  if (!/ \d+$/.test(key))
    throw new Error("Snapshot keys must end with a number.");
  return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
  const update = options.updateSnapshot;
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (content != null) {
    try {
      snapshotContents = content;
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid)
    dirty = true;
  return { data, dirty };
}
function addExtraLineBreaks(string3) {
  return string3.includes("\n") ? `
${string3}
` : string3;
}
function removeExtraLineBreaks(string3) {
  return string3.length > 2 && string3.startsWith("\n") && string3.endsWith("\n") ? string3.slice(1, -1) : string3;
}
var escapeRegex = true;
var printFunctionName = false;
function serialize(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(
    (0, import_pretty_format2.format)(val, {
      escapeRegex,
      indent,
      plugins: getSerializers(),
      printFunctionName,
      ...formatOverrides
    })
  );
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\${/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
async function ensureDirectoryExists(environment, filePath) {
  try {
    await environment.prepareDirectory(join(dirname(filePath)));
  } catch {
  }
}
function normalizeNewlines(string3) {
  return string3.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(environment, snapshotData, snapshotPath) {
  const snapshots = Object.keys(snapshotData).sort(naturalCompare$1.exports).map(
    (key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`
  );
  const content = `${environment.getHeader()}

${snapshots.join("\n\n")}
`;
  const oldContent = await environment.readSnapshotFile(snapshotPath);
  const skipWriting = oldContent != null && oldContent === content;
  if (skipWriting)
    return;
  await ensureDirectoryExists(environment, snapshotPath);
  await environment.saveSnapshotFile(
    snapshotPath,
    content
  );
}
function prepareExpected(expected) {
  function findStartIndent() {
    var _a2, _b;
    const matchObject = /^( +)}\s+$/m.exec(expected || "");
    const objectIndent = (_a2 = matchObject == null ? void 0 : matchObject[1]) == null ? void 0 : _a2.length;
    if (objectIndent)
      return objectIndent;
    const matchText = /^\n( +)"/.exec(expected || "");
    return ((_b = matchText == null ? void 0 : matchText[1]) == null ? void 0 : _b.length) || 0;
  }
  const startIndent = findStartIndent();
  let expectedTrimmed = expected == null ? void 0 : expected.trim();
  if (startIndent) {
    expectedTrimmed = expectedTrimmed == null ? void 0 : expectedTrimmed.replace(new RegExp(`^${" ".repeat(startIndent)}`, "gm"), "").replace(/ +}$/, "}");
  }
  return expectedTrimmed;
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index2) => {
    const targetElement = mergedOutput[index2];
    if (Array.isArray(target[index2])) {
      mergedOutput[index2] = deepMergeArray(target[index2], sourceElement);
    } else if (isObject3(targetElement)) {
      mergedOutput[index2] = deepMergeSnapshot(target[index2], sourceElement);
    } else {
      mergedOutput[index2] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject3(target) && isObject3(source)) {
    const mergedOutput = { ...target };
    Object.keys(source).forEach((key) => {
      if (isObject3(source[key]) && !source[key].$$typeof) {
        if (!(key in target))
          Object.assign(mergedOutput, { [key]: source[key] });
        else
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
async function saveInlineSnapshots(environment, snapshots) {
  const MagicString2 = (await Promise.resolve().then(() => (init_magic_string_es(), magic_string_es_exports))).default;
  const files = new Set(snapshots.map((i2) => i2.file));
  await Promise.all(Array.from(files).map(async (file) => {
    const snaps = snapshots.filter((i2) => i2.file === file);
    const code = await environment.readSnapshotFile(file);
    const s = new MagicString2(code);
    for (const snap of snaps) {
      const index2 = positionToOffset(code, snap.line, snap.column);
      replaceInlineSnap(code, s, index2, snap.snapshot);
    }
    const transformed = s.toString();
    if (transformed !== code)
      await environment.saveSnapshotFile(file, transformed);
  }));
}
var startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function replaceObjectSnap(code, s, index2, newSnap) {
  code = code.slice(index2);
  const startMatch = startObjectRegex.exec(code);
  if (!startMatch)
    return false;
  code = code.slice(startMatch.index);
  const charIndex = getCallLastIndex2(code);
  if (charIndex === null)
    return false;
  s.appendLeft(index2 + startMatch.index + charIndex, `, ${prepareSnapString(newSnap, code, index2)}`);
  return true;
}
function prepareSnapString(snap, source, index2) {
  const lineNumber = offsetToLineNumber(source, index2);
  const line = source.split(lineSplitRE)[lineNumber - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = isOneline ? "'" : "`";
  if (isOneline)
    return `'${lines.join("\n").replace(/'/g, "\\'")}'`;
  else
    return `${quote}
${lines.map((i2) => i2 ? indentNext + i2 : "").join("\n").replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${indent}${quote}`;
}
var startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function replaceInlineSnap(code, s, index2, newSnap) {
  const startMatch = startRegex.exec(code.slice(index2));
  if (!startMatch)
    return replaceObjectSnap(code, s, index2, newSnap);
  const quote = startMatch[1];
  const startIndex = index2 + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code, index2);
  if (quote === ")") {
    s.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code.slice(startIndex));
  if (!endMatch)
    return false;
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
var INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i2 = 1; i2 < lines.length - 1; i2++) {
    if (lines[i2] !== "") {
      if (lines[i2].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i2] = lines[i2].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
async function saveRawSnapshots(environment, snapshots) {
  await Promise.all(snapshots.map(async (snap) => {
    if (!snap.readonly)
      await environment.saveSnapshotFile(snap.file, snap.snapshot);
  }));
}
var SnapshotState = class {
  constructor(testFilePath, snapshotPath, snapshotContent, options) {
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(
      snapshotContent,
      options
    );
    this._fileExists = snapshotContent != null;
    this._initialData = data;
    this._snapshotData = data;
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._rawSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = /* @__PURE__ */ new Map();
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
    this._snapshotFormat = {
      printBasicPrototype: false,
      ...options.snapshotFormat
    };
    this._environment = options.snapshotEnvironment;
  }
  static async create(testFilePath, options) {
    const snapshotPath = await options.snapshotEnvironment.resolvePath(testFilePath);
    const content = await options.snapshotEnvironment.readSnapshotFile(snapshotPath);
    return new SnapshotState(testFilePath, snapshotPath, content, options);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(testName) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (keyToTestName(uncheckedKey) === testName)
        this._uncheckedKeys.delete(uncheckedKey);
    });
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i2) => i2.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1)
      return stacks[promiseIndex + 3];
    const stackIndex = stacks.findIndex((i2) => i2.method.includes("__INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.isInline) {
      const stacks = parseErrorStacktrace(options.error || new Error("snapshot"), []);
      const stack = this._inferInlineSnapshotStack(stacks);
      if (!stack) {
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`
        );
      }
      stack.column--;
      this._inlineSnapshots.push({
        snapshot: receivedSerialized,
        ...stack
      });
    } else if (options.rawSnapshot) {
      this._rawSnapshots.push({
        ...options.rawSnapshot,
        snapshot: receivedSerialized
      });
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  clear() {
    this._snapshotData = this._initialData;
    this._counters = /* @__PURE__ */ new Map();
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this.updated = 0;
    this._dirty = false;
  }
  async save() {
    const hasExternalSnapshots = Object.keys(this._snapshotData).length;
    const hasInlineSnapshots = this._inlineSnapshots.length;
    const hasRawSnapshots = this._rawSnapshots.length;
    const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
    const status = {
      deleted: false,
      saved: false
    };
    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      if (hasExternalSnapshots) {
        await saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
        this._fileExists = true;
      }
      if (hasInlineSnapshots)
        await saveInlineSnapshots(this._environment, this._inlineSnapshots);
      if (hasRawSnapshots)
        await saveRawSnapshots(this._environment, this._rawSnapshots);
      status.saved = true;
    } else if (!hasExternalSnapshots && this._fileExists) {
      if (this._updateSnapshot === "all") {
        await this._environment.removeSnapshotFile(this.snapshotPath);
        this._fileExists = false;
      }
      status.deleted = true;
    }
    return status;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({
    testName,
    received,
    key,
    inlineSnapshot,
    isInline,
    error,
    rawSnapshot
  }) {
    this._counters.set(testName, (this._counters.get(testName) || 0) + 1);
    const count = Number(this._counters.get(testName));
    if (!key)
      key = testNameToKey(testName, count);
    if (!(isInline && this._snapshotData[key] !== void 0))
      this._uncheckedKeys.delete(key);
    let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize(received, void 0, this._snapshotFormat);
    if (!rawSnapshot)
      receivedSerialized = addExtraLineBreaks(receivedSerialized);
    if (rawSnapshot) {
      if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/))
        rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
    }
    const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
    const expectedTrimmed = prepareExpected(expected);
    const pass = expectedTrimmed === prepareExpected(receivedSerialized);
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
    if (pass && !isInline && !rawSnapshot) {
      this._snapshotData[key] = receivedSerialized;
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot)
            this.updated++;
          else
            this.added++;
          this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        this.added++;
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  async pack() {
    const snapshot = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    };
    const uncheckedCount = this.getUncheckedCount();
    const uncheckedKeys = this.getUncheckedKeys();
    if (uncheckedCount)
      this.removeUncheckedKeys();
    const status = await this.save();
    snapshot.fileDeleted = status.deleted;
    snapshot.added = this.added;
    snapshot.matched = this.matched;
    snapshot.unmatched = this.unmatched;
    snapshot.updated = this.updated;
    snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
    snapshot.uncheckedKeys = Array.from(uncheckedKeys);
    return snapshot;
  }
};
function createMismatchError(message, actual, expected) {
  const error = new Error(message);
  Object.defineProperty(error, "actual", {
    value: actual,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error, "expected", {
    value: expected,
    enumerable: true,
    configurable: true,
    writable: true
  });
  return error;
}
var SnapshotClient = class {
  constructor(Service = SnapshotState) {
    this.Service = Service;
    this.snapshotStateMap = /* @__PURE__ */ new Map();
  }
  async setTest(filepath, name, options) {
    var _a2;
    this.filepath = filepath;
    this.name = name;
    if (((_a2 = this.snapshotState) == null ? void 0 : _a2.testFilePath) !== filepath) {
      this.resetCurrent();
      if (!this.getSnapshotState(filepath)) {
        this.snapshotStateMap.set(
          filepath,
          await this.Service.create(
            filepath,
            options
          )
        );
      }
      this.snapshotState = this.getSnapshotState(filepath);
    }
  }
  getSnapshotState(filepath) {
    return this.snapshotStateMap.get(filepath);
  }
  clearTest() {
    this.filepath = void 0;
    this.name = void 0;
  }
  skipTestSnapshots(name) {
    var _a2;
    (_a2 = this.snapshotState) == null ? void 0 : _a2.markSnapshotsAsCheckedForTest(name);
  }
  /**
   * Should be overridden by the consumer.
   *
   * Vitest checks equality with @vitest/expect.
   */
  equalityCheck(received, expected) {
    return received === expected;
  }
  assert(options) {
    const {
      filepath = this.filepath,
      name = this.name,
      message,
      isInline = false,
      properties,
      inlineSnapshot,
      error,
      errorMessage,
      rawSnapshot
    } = options;
    let { received } = options;
    if (!filepath)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        const pass2 = this.equalityCheck(received, properties);
        if (!pass2)
          throw createMismatchError("Snapshot properties mismatched", received, properties);
        else
          received = deepMergeSnapshot(received, properties);
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName = [
      name,
      ...message ? [message] : []
    ].join(" > ");
    const snapshotState = this.getSnapshotState(filepath);
    const { actual, expected, key, pass } = snapshotState.match({
      testName,
      received,
      isInline,
      error,
      inlineSnapshot,
      rawSnapshot
    });
    if (!pass)
      throw createMismatchError(`Snapshot \`${key || "unknown"}\` mismatched`, actual == null ? void 0 : actual.trim(), expected == null ? void 0 : expected.trim());
  }
  async assertRaw(options) {
    if (!options.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath = this.filepath,
      rawSnapshot
    } = options;
    if (rawSnapshot.content == null) {
      if (!filepath)
        throw new Error("Snapshot cannot be used outside of test");
      const snapshotState = this.getSnapshotState(filepath);
      options.filepath || (options.filepath = filepath);
      rawSnapshot.file = await snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
      rawSnapshot.content = await snapshotState.environment.readSnapshotFile(rawSnapshot.file) || void 0;
    }
    return this.assert(options);
  }
  async resetCurrent() {
    if (!this.snapshotState)
      return null;
    const result = await this.snapshotState.pack();
    this.snapshotState = void 0;
    return result;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
};

// node_modules/vitest/dist/vendor-tasks.042d6084.js
function getFullName(task, separator = " > ") {
  return getNames(task).join(separator);
}

// node_modules/vitest/dist/vendor-vi.a3ff54b1.js
var import_util2 = __toESM(require("util"), 1);
function waitNextTick() {
  const { setTimeout } = getSafeTimers();
  return new Promise((resolve4) => setTimeout(resolve4, 0));
}
async function waitForImportsToResolve() {
  await waitNextTick();
  const state = getWorkerState();
  const promises = [];
  let resolvingCount = 0;
  for (const mod of state.moduleCache.values()) {
    if (mod.promise && !mod.evaluated)
      promises.push(mod.promise);
    if (mod.resolving)
      resolvingCount++;
  }
  if (!promises.length && !resolvingCount)
    return;
  await Promise.allSettled(promises);
  await waitForImportsToResolve();
}
var benchFns = /* @__PURE__ */ new WeakMap();
var benchOptsMap = /* @__PURE__ */ new WeakMap();
var bench = createBenchmark(
  function(name, fn2 = noop, options = {}) {
    if (!isRunningInBenchmark())
      throw new Error("`bench()` is only available in benchmark mode.");
    const task = getCurrentSuite().custom.call(this, name);
    task.meta = {
      benchmark: true
    };
    benchFns.set(task, fn2);
    benchOptsMap.set(task, options);
  }
);
function createBenchmark(fn2) {
  const benchmark = createChainable(
    ["skip", "only", "todo"],
    fn2
  );
  benchmark.skipIf = (condition) => condition ? benchmark.skip : benchmark;
  benchmark.runIf = (condition) => condition ? benchmark : benchmark.skip;
  return benchmark;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset = { exports: {} };
(function(module2, exports) {
  (function() {
    (function(chaiSubset2) {
      if (typeof commonjsRequire === "function" && true && true) {
        return module2.exports = chaiSubset2;
      } else {
        return chai.use(chaiSubset2);
      }
    })(function(chai3, utils) {
      var Assertion2 = chai3.Assertion;
      var assertionPrototype = Assertion2.prototype;
      Assertion2.addMethod("containSubset", function(expected) {
        var actual = utils.flag(this, "object");
        var showDiff = chai3.config.showDiff;
        assertionPrototype.assert.call(
          this,
          compare(expected, actual),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          expected,
          actual,
          showDiff
        );
      });
      chai3.assert.containSubset = function(val, exp, msg) {
        new chai3.Assertion(val, msg).to.be.containSubset(exp);
      };
      function compare(expected, actual) {
        if (expected === actual) {
          return true;
        }
        if (typeof actual !== typeof expected) {
          return false;
        }
        if (typeof expected !== "object" || expected === null) {
          return expected === actual;
        }
        if (!!expected && !actual) {
          return false;
        }
        if (Array.isArray(expected)) {
          if (typeof actual.length !== "number") {
            return false;
          }
          var aa = Array.prototype.slice.call(actual);
          return expected.every(function(exp) {
            return aa.some(function(act) {
              return compare(exp, act);
            });
          });
        }
        if (expected instanceof Date) {
          if (actual instanceof Date) {
            return expected.getTime() === actual.getTime();
          } else {
            return false;
          }
        }
        return Object.keys(expected).every(function(key) {
          var eo = expected[key];
          var ao = actual[key];
          if (typeof eo === "object" && eo !== null && ao !== null) {
            return compare(eo, ao);
          }
          if (typeof eo === "function") {
            return eo(ao);
          }
          return ao === eo;
        });
      }
    });
  }).call(commonjsGlobal);
})(chaiSubset);
var Subset = chaiSubset.exports;
function recordAsyncExpect2(test3, promise) {
  if (test3) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
var VitestSnapshotClient = class extends SnapshotClient {
  equalityCheck(received, expected) {
    return equals(received, expected, [iterableEquality, subsetEquality]);
  }
};
var _client;
function getSnapshotClient() {
  if (!_client)
    _client = new VitestSnapshotClient();
  return _client;
}
function getErrorMessage(err) {
  if (err instanceof Error)
    return err.message;
  return err;
}
function getErrorString(expected, promise) {
  if (typeof expected !== "function") {
    if (!promise)
      throw new Error(`expected must be a function, received ${typeof expected}`);
    return getErrorMessage(expected);
  }
  try {
    expected();
  } catch (e) {
    return getErrorMessage(e);
  }
  throw new Error("snapshot function didn't throw");
}
var SnapshotPlugin = (chai3, utils) => {
  const getTestNames = (test3) => {
    var _a2;
    if (!test3)
      return {};
    return {
      filepath: (_a2 = test3.file) == null ? void 0 : _a2.filepath,
      name: getNames(test3).slice(1).join(" > ")
    };
  };
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) {
    utils.addMethod(
      chai3.Assertion.prototype,
      key,
      function(properties, message) {
        const expected = utils.flag(this, "object");
        const test3 = utils.flag(this, "vitest-test");
        if (typeof properties === "string" && typeof message === "undefined") {
          message = properties;
          properties = void 0;
        }
        const errorMessage = utils.flag(this, "message");
        getSnapshotClient().assert({
          received: expected,
          message,
          isInline: false,
          properties,
          errorMessage,
          ...getTestNames(test3)
        });
      }
    );
  }
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchFileSnapshot",
    function(file, message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const errorMessage = utils.flag(this, "message");
      const promise = getSnapshotClient().assertRaw({
        received: expected,
        message,
        isInline: false,
        rawSnapshot: {
          file
        },
        errorMessage,
        ...getTestNames(test3)
      });
      return recordAsyncExpect2(test3, promise);
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchInlineSnapshot",
    function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      const test3 = utils.flag(this, "vitest-test");
      if (typeof properties === "string") {
        message = inlineSnapshot;
        inlineSnapshot = properties;
        properties = void 0;
      }
      if (inlineSnapshot)
        inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: expected,
        message,
        isInline: true,
        properties,
        inlineSnapshot,
        error,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise),
        message,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      const test3 = utils.flag(this, "vitest-test");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise),
        message,
        inlineSnapshot,
        isInline: true,
        error,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.expect,
    "addSnapshotSerializer",
    addSerializer
  );
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test3) {
  var _a2;
  const expect2 = (value, message) => {
    const { assertionCalls } = getState(expect2);
    setState({ assertionCalls: assertionCalls + 1 }, expect2);
    const assert2 = expect(value, message);
    const _test2 = test3 || getCurrentTest();
    if (_test2)
      return assert2.withTest(_test2);
    else
      return assert2;
  };
  Object.assign(expect2, expect);
  expect2.getState = () => getState(expect2);
  expect2.setState = (state) => setState(state, expect2);
  const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
  setState({
    // this should also add "snapshotState" that is added conditionally
    ...globalState,
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: getCurrentEnvironment(),
    testPath: test3 ? (_a2 = test3.suite.file) == null ? void 0 : _a2.filepath : globalState.testPath,
    currentTestName: test3 ? getFullName(test3) : globalState.currentTestName
  }, expect2);
  expect2.extend = (matchers) => expect.extend(expect2, matchers);
  function assertions(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect2.getState().assertionCalls}`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(errorGen(), assertions);
    expect2.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, hasAssertions);
    expect2.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error
    });
  }
  util2.addMethod(expect2, "assertions", assertions);
  util2.addMethod(expect2, "hasAssertions", hasAssertions);
  return expect2;
}
var globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
function setupChaiConfig(config2) {
  Object.assign(config, config2);
}
var globalObject$1;
if (typeof commonjsGlobal !== "undefined") {
  globalObject$1 = commonjsGlobal;
} else if (typeof window !== "undefined") {
  globalObject$1 = window;
} else {
  globalObject$1 = self;
}
var global2 = globalObject$1;
var throwsOnProto$1;
try {
  const object2 = {};
  object2.__proto__;
  throwsOnProto$1 = false;
} catch (_) {
  throwsOnProto$1 = true;
}
var throwsOnProto_1 = throwsOnProto$1;
var call = Function.call;
var throwsOnProto = throwsOnProto_1;
var disallowedProperties = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
if (throwsOnProto) {
  disallowedProperties.push("__proto__");
}
var copyPrototypeMethods = function copyPrototypeMethods2(prototype) {
  return Object.getOwnPropertyNames(prototype).reduce(
    function(result, name) {
      if (disallowedProperties.includes(name)) {
        return result;
      }
      if (typeof prototype[name] !== "function") {
        return result;
      }
      result[name] = call.bind(prototype[name]);
      return result;
    },
    /* @__PURE__ */ Object.create(null)
  );
};
var copyPrototype$5 = copyPrototypeMethods;
var array = copyPrototype$5(Array.prototype);
var every$1 = array.every;
function hasCallsLeft(callMap, spy) {
  if (callMap[spy.id] === void 0) {
    callMap[spy.id] = 0;
  }
  return callMap[spy.id] < spy.callCount;
}
function checkAdjacentCalls(callMap, spy, index2, spies2) {
  var calledBeforeNext = true;
  if (index2 !== spies2.length - 1) {
    calledBeforeNext = spy.calledBefore(spies2[index2 + 1]);
  }
  if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
    callMap[spy.id] += 1;
    return true;
  }
  return false;
}
function calledInOrder(spies2) {
  var callMap = {};
  var _spies = arguments.length > 1 ? arguments : spies2;
  return every$1(_spies, checkAdjacentCalls.bind(null, callMap));
}
var calledInOrder_1 = calledInOrder;
var functionName$1 = function functionName(func) {
  if (!func) {
    return "";
  }
  try {
    return func.displayName || func.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(func).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};
var functionName2 = functionName$1;
function className(value) {
  return value.constructor && value.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof value.constructor === "function" && /* istanbul ignore next */
  functionName2(value.constructor) || null;
}
var className_1 = className;
var deprecated = {};
(function(exports) {
  exports.wrap = function(func, msg) {
    var wrapped = function() {
      exports.printWarning(msg);
      return func.apply(this, arguments);
    };
    if (func.prototype) {
      wrapped.prototype = func.prototype;
    }
    return wrapped;
  };
  exports.defaultMsg = function(packageName, funcName) {
    return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
  };
  exports.printWarning = function(msg) {
    if (typeof process === "object" && process.emitWarning) {
      process.emitWarning(msg);
    } else if (console.info) {
      console.info(msg);
    } else {
      console.log(msg);
    }
  };
})(deprecated);
var every = function every2(obj, fn2) {
  var pass = true;
  try {
    obj.forEach(function() {
      if (!fn2.apply(this, arguments)) {
        throw new Error();
      }
    });
  } catch (e) {
    pass = false;
  }
  return pass;
};
var sort = array.sort;
var slice = array.slice;
function comparator(a, b2) {
  var aCall = a.getCall(0);
  var bCall = b2.getCall(0);
  var aId = aCall && aCall.callId || -1;
  var bId = bCall && bCall.callId || -1;
  return aId < bId ? -1 : 1;
}
function orderByFirstCall(spies2) {
  return sort(slice(spies2), comparator);
}
var orderByFirstCall_1 = orderByFirstCall;
var copyPrototype$4 = copyPrototypeMethods;
var _function = copyPrototype$4(Function.prototype);
var copyPrototype$3 = copyPrototypeMethods;
var map = copyPrototype$3(Map.prototype);
var copyPrototype$2 = copyPrototypeMethods;
var object = copyPrototype$2(Object.prototype);
var copyPrototype$1 = copyPrototypeMethods;
var set2 = copyPrototype$1(Set.prototype);
var copyPrototype = copyPrototypeMethods;
var string2 = copyPrototype(String.prototype);
var prototypes = {
  array,
  function: _function,
  map,
  object,
  set: set2,
  string: string2
};
var typeDetect = { exports: {} };
(function(module2, exports) {
  (function(global3, factory) {
    module2.exports = factory();
  })(commonjsGlobal, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag === "string") {
        return stringTag;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect);
var type = typeDetect.exports;
var typeOf = function typeOf2(value) {
  return type(value).toLowerCase();
};
function valueToString(value) {
  if (value && value.toString) {
    return value.toString();
  }
  return String(value);
}
var valueToString_1 = valueToString;
var lib = {
  global: global2,
  calledInOrder: calledInOrder_1,
  className: className_1,
  deprecated,
  every,
  functionName: functionName$1,
  orderByFirstCall: orderByFirstCall_1,
  prototypes,
  typeOf,
  valueToString: valueToString_1
};
var globalObject = lib.global;
function withGlobal(_global) {
  const userAgent = _global.navigator && _global.navigator.userAgent;
  const isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
  const maxTimeout = Math.pow(2, 31) - 1;
  const idCounterStart = 1e12;
  const NOOP = function() {
    return void 0;
  };
  const NOOP_ARRAY = function() {
    return [];
  };
  const timeoutResult = _global.setTimeout(NOOP, 0);
  const addTimerReturnsObject = typeof timeoutResult === "object";
  const hrtimePresent = _global.process && typeof _global.process.hrtime === "function";
  const hrtimeBigintPresent = hrtimePresent && typeof _global.process.hrtime.bigint === "function";
  const nextTickPresent = _global.process && typeof _global.process.nextTick === "function";
  const utilPromisify = _global.process && import_util2.default.promisify;
  const performancePresent = _global.performance && typeof _global.performance.now === "function";
  const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
  const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
  const queueMicrotaskPresent = _global.hasOwnProperty("queueMicrotask");
  const requestAnimationFramePresent = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
  const cancelAnimationFramePresent = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
  const requestIdleCallbackPresent = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
  const cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
  const setImmediatePresent = _global.setImmediate && typeof _global.setImmediate === "function";
  if (isRunningInIE) {
    _global.setTimeout = _global.setTimeout;
    _global.clearTimeout = _global.clearTimeout;
    _global.setInterval = _global.setInterval;
    _global.clearInterval = _global.clearInterval;
    _global.Date = _global.Date;
  }
  if (setImmediatePresent) {
    _global.setImmediate = _global.setImmediate;
    _global.clearImmediate = _global.clearImmediate;
  }
  _global.clearTimeout(timeoutResult);
  const NativeDate = _global.Date;
  let uniqueTimerId = idCounterStart;
  function isNumberFinite(num) {
    if (Number.isFinite) {
      return Number.isFinite(num);
    }
    return isFinite(num);
  }
  let isNearInfiniteLimit = false;
  function checkIsNearInfiniteLimit(clock, i2) {
    if (clock.loopLimit && i2 === clock.loopLimit - 1) {
      isNearInfiniteLimit = true;
    }
  }
  function resetIsNearInfiniteLimit() {
    isNearInfiniteLimit = false;
  }
  function parseTime(str) {
    if (!str) {
      return 0;
    }
    const strings = str.split(":");
    const l2 = strings.length;
    let i2 = l2;
    let ms = 0;
    let parsed;
    if (l2 > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    }
    while (i2--) {
      parsed = parseInt(strings[i2], 10);
      if (parsed >= 60) {
        throw new Error(`Invalid time ${str}`);
      }
      ms += parsed * Math.pow(60, l2 - i2 - 1);
    }
    return ms * 1e3;
  }
  function nanoRemainder(msFloat) {
    const modulo = 1e6;
    const remainder = msFloat * 1e6 % modulo;
    const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
    return Math.floor(positiveRemainder);
  }
  function getEpoch(epoch) {
    if (!epoch) {
      return 0;
    }
    if (typeof epoch.getTime === "function") {
      return epoch.getTime();
    }
    if (typeof epoch === "number") {
      return epoch;
    }
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function inRange(from, to, timer) {
    return timer && timer.callAt >= from && timer.callAt <= to;
  }
  function getInfiniteLoopError(clock, job) {
    const infiniteLoopError = new Error(
      `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
    );
    if (!job.error) {
      return infiniteLoopError;
    }
    const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let clockMethodPattern = new RegExp(
      String(Object.keys(clock).join("|"))
    );
    if (addTimerReturnsObject) {
      clockMethodPattern = new RegExp(
        `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
      );
    }
    let matchedLineIndex = -1;
    job.error.stack.split("\n").some(function(line, i2) {
      const matchedComputedTarget = line.match(computedTargetPattern);
      if (matchedComputedTarget) {
        matchedLineIndex = i2;
        return true;
      }
      const matchedClockMethod = line.match(clockMethodPattern);
      if (matchedClockMethod) {
        matchedLineIndex = i2;
        return false;
      }
      return matchedLineIndex >= 0;
    });
    const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
    try {
      Object.defineProperty(infiniteLoopError, "stack", {
        value: stack
      });
    } catch (e) {
    }
    return infiniteLoopError;
  }
  function mirrorDateProperties(target, source) {
    let prop;
    for (prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    if (source.now) {
      target.now = function now3() {
        return target.clock.now;
      };
    } else {
      delete target.now;
    }
    if (source.toSource) {
      target.toSource = function toSource() {
        return source.toSource();
      };
    } else {
      delete target.toSource;
    }
    target.toString = function toString3() {
      return source.toString();
    };
    target.prototype = source.prototype;
    target.parse = source.parse;
    target.UTC = source.UTC;
    target.prototype.toUTCString = source.prototype.toUTCString;
    target.isFake = true;
    return target;
  }
  function createDate() {
    function ClockDate(year, month, date, hour, minute, second, ms) {
      if (!(this instanceof ClockDate)) {
        return new NativeDate(ClockDate.clock.now).toString();
      }
      switch (arguments.length) {
        case 0:
          return new NativeDate(ClockDate.clock.now);
        case 1:
          return new NativeDate(year);
        case 2:
          return new NativeDate(year, month);
        case 3:
          return new NativeDate(year, month, date);
        case 4:
          return new NativeDate(year, month, date, hour);
        case 5:
          return new NativeDate(year, month, date, hour, minute);
        case 6:
          return new NativeDate(
            year,
            month,
            date,
            hour,
            minute,
            second
          );
        default:
          return new NativeDate(
            year,
            month,
            date,
            hour,
            minute,
            second,
            ms
          );
      }
    }
    return mirrorDateProperties(ClockDate, NativeDate);
  }
  function enqueueJob(clock, job) {
    if (!clock.jobs) {
      clock.jobs = [];
    }
    clock.jobs.push(job);
  }
  function runJobs(clock) {
    if (!clock.jobs) {
      return;
    }
    for (let i2 = 0; i2 < clock.jobs.length; i2++) {
      const job = clock.jobs[i2];
      job.func.apply(null, job.args);
      checkIsNearInfiniteLimit(clock, i2);
      if (clock.loopLimit && i2 > clock.loopLimit) {
        throw getInfiniteLoopError(clock, job);
      }
    }
    resetIsNearInfiniteLimit();
    clock.jobs = [];
  }
  function addTimer(clock, timer) {
    if (timer.func === void 0) {
      throw new Error("Callback must be provided to timer calls");
    }
    if (addTimerReturnsObject) {
      if (typeof timer.func !== "function") {
        throw new TypeError(
          `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
        );
      }
    }
    if (isNearInfiniteLimit) {
      timer.error = new Error();
    }
    timer.type = timer.immediate ? "Immediate" : "Timeout";
    if (timer.hasOwnProperty("delay")) {
      if (typeof timer.delay !== "number") {
        timer.delay = parseInt(timer.delay, 10);
      }
      if (!isNumberFinite(timer.delay)) {
        timer.delay = 0;
      }
      timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
      timer.delay = Math.max(0, timer.delay);
    }
    if (timer.hasOwnProperty("interval")) {
      timer.type = "Interval";
      timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
    }
    if (timer.hasOwnProperty("animation")) {
      timer.type = "AnimationFrame";
      timer.animation = true;
    }
    if (timer.hasOwnProperty("idleCallback")) {
      timer.type = "IdleCallback";
      timer.idleCallback = true;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    timer.id = uniqueTimerId++;
    timer.createdAt = clock.now;
    timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
    clock.timers[timer.id] = timer;
    if (addTimerReturnsObject) {
      const res = {
        refed: true,
        ref: function() {
          this.refed = true;
          return res;
        },
        unref: function() {
          this.refed = false;
          return res;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
          clock.timers[timer.id] = timer;
          return res;
        },
        [Symbol.toPrimitive]: function() {
          return timer.id;
        }
      };
      return res;
    }
    return timer.id;
  }
  function compareTimers(a, b2) {
    if (a.callAt < b2.callAt) {
      return -1;
    }
    if (a.callAt > b2.callAt) {
      return 1;
    }
    if (a.immediate && !b2.immediate) {
      return -1;
    }
    if (!a.immediate && b2.immediate) {
      return 1;
    }
    if (a.createdAt < b2.createdAt) {
      return -1;
    }
    if (a.createdAt > b2.createdAt) {
      return 1;
    }
    if (a.id < b2.id) {
      return -1;
    }
    if (a.id > b2.id) {
      return 1;
    }
  }
  function firstTimerInRange(clock, from, to) {
    const timers2 = clock.timers;
    let timer = null;
    let id, isInRange;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        isInRange = inRange(from, to, timers2[id]);
        if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function firstTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === 1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function lastTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === -1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function callTimer(clock, timer) {
    if (typeof timer.interval === "number") {
      clock.timers[timer.id].callAt += timer.interval;
    } else {
      delete clock.timers[timer.id];
    }
    if (typeof timer.func === "function") {
      timer.func.apply(null, timer.args);
    } else {
      const eval2 = eval;
      (function() {
        eval2(timer.func);
      })();
    }
  }
  function getClearHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `cancel${ttype}`;
    }
    return `clear${ttype}`;
  }
  function getScheduleHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `request${ttype}`;
    }
    return `set${ttype}`;
  }
  function createWarnOnce() {
    let calls = 0;
    return function(msg) {
      !calls++ && console.warn(msg);
    };
  }
  const warnOnce = createWarnOnce();
  function clearTimer(clock, timerId, ttype) {
    if (!timerId) {
      return;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    const id = Number(timerId);
    if (Number.isNaN(id) || id < idCounterStart) {
      const handlerName = getClearHandler(ttype);
      if (clock.shouldClearNativeTimers === true) {
        const nativeHandler = clock[`_${handlerName}`];
        return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
      }
      warnOnce(
        `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (clock.timers.hasOwnProperty(id)) {
      const timer = clock.timers[id];
      if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
        delete clock.timers[id];
      } else {
        const clear = getClearHandler(ttype);
        const schedule = getScheduleHandler(timer.type);
        throw new Error(
          `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
        );
      }
    }
  }
  function uninstall(clock, config2) {
    let method, i2, l2;
    const installedHrTime = "_hrtime";
    const installedNextTick = "_nextTick";
    for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
      method = clock.methods[i2];
      if (method === "hrtime" && _global.process) {
        _global.process.hrtime = clock[installedHrTime];
      } else if (method === "nextTick" && _global.process) {
        _global.process.nextTick = clock[installedNextTick];
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          `_${method}`
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            _global,
            method,
            originalPerfDescriptor
          );
        } else if (originalPerfDescriptor.configurable) {
          _global[method] = clock[`_${method}`];
        }
      } else {
        if (_global[method] && _global[method].hadOwnProperty) {
          _global[method] = clock[`_${method}`];
        } else {
          try {
            delete _global[method];
          } catch (ignore) {
          }
        }
      }
    }
    if (config2.shouldAdvanceTime === true) {
      _global.clearInterval(clock.attachedInterval);
    }
    clock.methods = [];
    if (!clock.timers) {
      return [];
    }
    return Object.keys(clock.timers).map(function mapper(key) {
      return clock.timers[key];
    });
  }
  function hijackMethod(target, method, clock) {
    clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      target,
      method
    );
    clock[`_${method}`] = target[method];
    if (method === "Date") {
      const date = mirrorDateProperties(clock[method], target[method]);
      target[method] = date;
    } else if (method === "performance") {
      const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
        target,
        method
      );
      if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
        Object.defineProperty(
          clock,
          `_${method}`,
          originalPerfDescriptor
        );
        const perfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          method
        );
        Object.defineProperty(target, method, perfDescriptor);
      } else {
        target[method] = clock[method];
      }
    } else {
      target[method] = function() {
        return clock[method].apply(clock, arguments);
      };
      Object.defineProperties(
        target[method],
        Object.getOwnPropertyDescriptors(clock[method])
      );
    }
    target[method].clock = clock;
  }
  function doIntervalTick(clock, advanceTimeDelta) {
    clock.tick(advanceTimeDelta);
  }
  const timers = {
    setTimeout: _global.setTimeout,
    clearTimeout: _global.clearTimeout,
    setInterval: _global.setInterval,
    clearInterval: _global.clearInterval,
    Date: _global.Date
  };
  if (setImmediatePresent) {
    timers.setImmediate = _global.setImmediate;
    timers.clearImmediate = _global.clearImmediate;
  }
  if (hrtimePresent) {
    timers.hrtime = _global.process.hrtime;
  }
  if (nextTickPresent) {
    timers.nextTick = _global.process.nextTick;
  }
  if (performancePresent) {
    timers.performance = _global.performance;
  }
  if (requestAnimationFramePresent) {
    timers.requestAnimationFrame = _global.requestAnimationFrame;
  }
  if (queueMicrotaskPresent) {
    timers.queueMicrotask = true;
  }
  if (cancelAnimationFramePresent) {
    timers.cancelAnimationFrame = _global.cancelAnimationFrame;
  }
  if (requestIdleCallbackPresent) {
    timers.requestIdleCallback = _global.requestIdleCallback;
  }
  if (cancelIdleCallbackPresent) {
    timers.cancelIdleCallback = _global.cancelIdleCallback;
  }
  const originalSetTimeout = _global.setImmediate || _global.setTimeout;
  function createClock(start, loopLimit) {
    start = Math.floor(getEpoch(start));
    loopLimit = loopLimit || 1e3;
    let nanos = 0;
    const adjustedSystemTime = [0, 0];
    if (NativeDate === void 0) {
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    }
    const clock = {
      now: start,
      Date: createDate(),
      loopLimit
    };
    clock.Date.clock = clock;
    function getTimeToNextFrame() {
      return 16 - (clock.now - start) % 16;
    }
    function hrtime(prev) {
      const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
      const secsSinceStart = Math.floor(millisSinceStart / 1e3);
      const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
      if (Array.isArray(prev)) {
        if (prev[1] > 1e9) {
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        }
        const oldSecs = prev[0];
        let nanoDiff = remainderInNanos - prev[1];
        let secDiff = secsSinceStart - oldSecs;
        if (nanoDiff < 0) {
          nanoDiff += 1e9;
          secDiff -= 1;
        }
        return [secDiff, nanoDiff];
      }
      return [secsSinceStart, remainderInNanos];
    }
    function fakePerformanceNow() {
      const hrt = hrtime();
      const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
      return millis;
    }
    if (hrtimeBigintPresent) {
      hrtime.bigint = function() {
        const parts = hrtime();
        return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
      };
    }
    clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
      let timeToNextIdlePeriod = 0;
      if (clock.countTimers() > 0) {
        timeToNextIdlePeriod = 50;
      }
      const result = addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
        idleCallback: true
      });
      return Number(result);
    };
    clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
      return clearTimer(clock, timerId, "IdleCallback");
    };
    clock.setTimeout = function setTimeout(func, timeout) {
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout
      });
    };
    if (typeof _global.Promise !== "undefined" && utilPromisify) {
      clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
        return new _global.Promise(function setTimeoutExecutor(resolve4) {
          addTimer(clock, {
            func: resolve4,
            args: [arg],
            delay: timeout
          });
        });
      };
    }
    clock.clearTimeout = function clearTimeout(timerId) {
      return clearTimer(clock, timerId, "Timeout");
    };
    clock.nextTick = function nextTick(func) {
      return enqueueJob(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 1),
        error: isNearInfiniteLimit ? new Error() : null
      });
    };
    clock.queueMicrotask = function queueMicrotask(func) {
      return clock.nextTick(func);
    };
    clock.setInterval = function setInterval(func, timeout) {
      timeout = parseInt(timeout, 10);
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout,
        interval: timeout
      });
    };
    clock.clearInterval = function clearInterval(timerId) {
      return clearTimer(clock, timerId, "Interval");
    };
    if (setImmediatePresent) {
      clock.setImmediate = function setImmediate(func) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          immediate: true
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
          return new _global.Promise(
            function setImmediateExecutor(resolve4) {
              addTimer(clock, {
                func: resolve4,
                args: [arg],
                immediate: true
              });
            }
          );
        };
      }
      clock.clearImmediate = function clearImmediate(timerId) {
        return clearTimer(clock, timerId, "Immediate");
      };
    }
    clock.countTimers = function countTimers() {
      return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
    };
    clock.requestAnimationFrame = function requestAnimationFrame(func) {
      const result = addTimer(clock, {
        func,
        delay: getTimeToNextFrame(),
        get args() {
          return [fakePerformanceNow()];
        },
        animation: true
      });
      return Number(result);
    };
    clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
      return clearTimer(clock, timerId, "AnimationFrame");
    };
    clock.runMicrotasks = function runMicrotasks() {
      runJobs(clock);
    };
    function doTick(tickValue, isAsync, resolve4, reject) {
      const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
      const ms = Math.floor(msFloat);
      const remainder = nanoRemainder(msFloat);
      let nanosTotal = nanos + remainder;
      let tickTo = clock.now + ms;
      if (msFloat < 0) {
        throw new TypeError("Negative ticks are not supported");
      }
      if (nanosTotal >= 1e6) {
        tickTo += 1;
        nanosTotal -= 1e6;
      }
      nanos = nanosTotal;
      let tickFrom = clock.now;
      let previous = clock.now;
      let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
      clock.duringTick = true;
      oldNow = clock.now;
      runJobs(clock);
      if (oldNow !== clock.now) {
        tickFrom += clock.now - oldNow;
        tickTo += clock.now - oldNow;
      }
      function doTickInner() {
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        while (timer && tickFrom <= tickTo) {
          if (clock.timers[timer.id]) {
            tickFrom = timer.callAt;
            clock.now = timer.callAt;
            oldNow = clock.now;
            try {
              runJobs(clock);
              callTimer(clock, timer);
            } catch (e) {
              firstException = firstException || e;
            }
            if (isAsync) {
              originalSetTimeout(nextPromiseTick);
              return;
            }
            compensationCheck();
          }
          postTimerCall();
        }
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        clock.duringTick = false;
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        if (timer) {
          try {
            clock.tick(tickTo - clock.now);
          } catch (e) {
            firstException = firstException || e;
          }
        } else {
          clock.now = tickTo;
          nanos = nanosTotal;
        }
        if (firstException) {
          throw firstException;
        }
        if (isAsync) {
          resolve4(clock.now);
        } else {
          return clock.now;
        }
      }
      nextPromiseTick = isAsync && function() {
        try {
          compensationCheck();
          postTimerCall();
          doTickInner();
        } catch (e) {
          reject(e);
        }
      };
      compensationCheck = function() {
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
          previous += clock.now - oldNow;
        }
      };
      postTimerCall = function() {
        timer = firstTimerInRange(clock, previous, tickTo);
        previous = tickFrom;
      };
      return doTickInner();
    }
    clock.tick = function tick(tickValue) {
      return doTick(tickValue, false);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.tickAsync = function tickAsync(tickValue) {
        return new _global.Promise(function(resolve4, reject) {
          originalSetTimeout(function() {
            try {
              doTick(tickValue, true, resolve4, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.next = function next() {
      runJobs(clock);
      const timer = firstTimer(clock);
      if (!timer) {
        return clock.now;
      }
      clock.duringTick = true;
      try {
        clock.now = timer.callAt;
        callTimer(clock, timer);
        runJobs(clock);
        return clock.now;
      } finally {
        clock.duringTick = false;
      }
    };
    if (typeof _global.Promise !== "undefined") {
      clock.nextAsync = function nextAsync() {
        return new _global.Promise(function(resolve4, reject) {
          originalSetTimeout(function() {
            try {
              const timer = firstTimer(clock);
              if (!timer) {
                resolve4(clock.now);
                return;
              }
              let err;
              clock.duringTick = true;
              clock.now = timer.callAt;
              try {
                callTimer(clock, timer);
              } catch (e) {
                err = e;
              }
              clock.duringTick = false;
              originalSetTimeout(function() {
                if (err) {
                  reject(err);
                } else {
                  resolve4(clock.now);
                }
              });
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.runAll = function runAll() {
      let numTimers, i2;
      runJobs(clock);
      for (i2 = 0; i2 < clock.loopLimit; i2++) {
        if (!clock.timers) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        numTimers = Object.keys(clock.timers).length;
        if (numTimers === 0) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        clock.next();
        checkIsNearInfiniteLimit(clock, i2);
      }
      const excessJob = firstTimer(clock);
      throw getInfiniteLoopError(clock, excessJob);
    };
    clock.runToFrame = function runToFrame() {
      return clock.tick(getTimeToNextFrame());
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runAllAsync = function runAllAsync() {
        return new _global.Promise(function(resolve4, reject) {
          let i2 = 0;
          function doRun() {
            originalSetTimeout(function() {
              try {
                let numTimers;
                if (i2 < clock.loopLimit) {
                  if (!clock.timers) {
                    resetIsNearInfiniteLimit();
                    resolve4(clock.now);
                    return;
                  }
                  numTimers = Object.keys(
                    clock.timers
                  ).length;
                  if (numTimers === 0) {
                    resetIsNearInfiniteLimit();
                    resolve4(clock.now);
                    return;
                  }
                  clock.next();
                  i2++;
                  doRun();
                  checkIsNearInfiniteLimit(clock, i2);
                  return;
                }
                const excessJob = firstTimer(clock);
                reject(getInfiniteLoopError(clock, excessJob));
              } catch (e) {
                reject(e);
              }
            });
          }
          doRun();
        });
      };
    }
    clock.runToLast = function runToLast() {
      const timer = lastTimer(clock);
      if (!timer) {
        runJobs(clock);
        return clock.now;
      }
      return clock.tick(timer.callAt - clock.now);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runToLastAsync = function runToLastAsync() {
        return new _global.Promise(function(resolve4, reject) {
          originalSetTimeout(function() {
            try {
              const timer = lastTimer(clock);
              if (!timer) {
                resolve4(clock.now);
              }
              resolve4(clock.tickAsync(timer.callAt - clock.now));
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.reset = function reset() {
      nanos = 0;
      clock.timers = {};
      clock.jobs = [];
      clock.now = start;
    };
    clock.setSystemTime = function setSystemTime(systemTime) {
      const newNow = getEpoch(systemTime);
      const difference = newNow - clock.now;
      let id, timer;
      adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
      adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
      clock.now = newNow;
      nanos = 0;
      for (id in clock.timers) {
        if (clock.timers.hasOwnProperty(id)) {
          timer = clock.timers[id];
          timer.createdAt += difference;
          timer.callAt += difference;
        }
      }
    };
    if (performancePresent) {
      clock.performance = /* @__PURE__ */ Object.create(null);
      clock.performance.now = fakePerformanceNow;
    }
    if (hrtimePresent) {
      clock.hrtime = hrtime;
    }
    return clock;
  }
  function install(config2) {
    if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
      throw new TypeError(
        `FakeTimers.install called with ${String(
          config2
        )} install requires an object parameter`
      );
    }
    if (_global.Date.isFake === true) {
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    }
    config2 = typeof config2 !== "undefined" ? config2 : {};
    config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
    config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
    config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
    if (config2.target) {
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    }
    let i2, l2;
    const clock = createClock(config2.now, config2.loopLimit);
    clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
    clock.uninstall = function() {
      return uninstall(clock, config2);
    };
    clock.methods = config2.toFake || [];
    if (clock.methods.length === 0) {
      clock.methods = Object.keys(timers).filter(function(key) {
        return key !== "nextTick" && key !== "queueMicrotask";
      });
    }
    if (config2.shouldAdvanceTime === true) {
      const intervalTick = doIntervalTick.bind(
        null,
        clock,
        config2.advanceTimeDelta
      );
      const intervalId = _global.setInterval(
        intervalTick,
        config2.advanceTimeDelta
      );
      clock.attachedInterval = intervalId;
    }
    if (clock.methods.includes("performance")) {
      const proto = (() => {
        if (hasPerformancePrototype) {
          return _global.Performance.prototype;
        }
        if (hasPerformanceConstructorPrototype) {
          return _global.performance.constructor.prototype;
        }
      })();
      if (proto) {
        Object.getOwnPropertyNames(proto).forEach(function(name) {
          if (name !== "now") {
            clock.performance[name] = name.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP;
          }
        });
      } else if ((config2.toFake || []).includes("performance")) {
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
      }
    }
    for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
      const nameOfMethodToReplace = clock.methods[i2];
      if (nameOfMethodToReplace === "hrtime") {
        if (_global.process && typeof _global.process.hrtime === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else if (nameOfMethodToReplace === "nextTick") {
        if (_global.process && typeof _global.process.nextTick === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else {
        hijackMethod(_global, nameOfMethodToReplace, clock);
      }
    }
    return clock;
  }
  return {
    timers,
    createClock,
    install,
    withGlobal
  };
}
var defaultImplementation = withGlobal(globalObject);
defaultImplementation.timers;
defaultImplementation.createClock;
defaultImplementation.install;
var withGlobal_1 = withGlobal;
var RealDate = Date;
var now2 = null;
var MockDate = class extends RealDate {
  constructor(y2, m2, d, h, M2, s, ms) {
    super();
    let date;
    switch (arguments.length) {
      case 0:
        if (now2 !== null)
          date = new RealDate(now2.valueOf());
        else
          date = new RealDate();
        break;
      case 1:
        date = new RealDate(y2);
        break;
      default:
        d = typeof d === "undefined" ? 1 : d;
        h = h || 0;
        M2 = M2 || 0;
        s = s || 0;
        ms = ms || 0;
        date = new RealDate(y2, m2, d, h, M2, s, ms);
        break;
    }
    return date;
  }
};
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date) {
  const dateObj = new RealDate(date.valueOf());
  if (isNaN(dateObj.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
  globalThis.Date = MockDate;
  now2 = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}
var FakeTimers = class {
  constructor({
    global: global3,
    config: config2
  }) {
    this._now = RealDate.now;
    this._userConfig = config2;
    this._fakingDate = false;
    this._fakingTime = false;
    this._fakeTimers = withGlobal_1(global3);
  }
  clearAllTimers() {
    if (this._fakingTime)
      this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers())
      this._clock.runAll();
  }
  async runAllTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers())
      this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        this._clock.next();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  async advanceTimersToNextTimerAsync(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        await this._clock.nextAsync();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers())
      this._clock.tick(msToRun);
  }
  async advanceTimersByTimeAsync(msToRun) {
    if (this._checkFakeTimers())
      await this._clock.tickAsync(msToRun);
  }
  runAllTicks() {
    if (this._checkFakeTimers()) {
      this._clock.runMicrotasks();
    }
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = false;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) {
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    }
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers);
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake,
        ...this._userConfig
      });
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now3 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now3);
    }
  }
  setSystemTime(now3) {
    if (this._fakingTime) {
      this._clock.setSystemTime(now3);
    } else {
      mockDate(now3 ?? this.getRealSystemTime());
      this._fakingDate = true;
    }
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers())
      return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) {
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    }
    return this._fakingTime;
  }
};
function createVitest() {
  const _mocker = typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, {
    get(name) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${name}() is forbidden.`
      );
    }
  });
  let _mockedDate = null;
  let _config = null;
  const workerState = getWorkerState();
  const _timers = new FakeTimers({
    global: globalThis,
    config: workerState.config.fakeTimers
  });
  const _stubsGlobal = /* @__PURE__ */ new Map();
  const _stubsEnv = /* @__PURE__ */ new Map();
  const getImporter = () => {
    const stackTrace = createSimpleStackTrace({ stackTraceLimit: 4 });
    const importerStack = stackTrace.split("\n")[4];
    const stack = parseSingleStack(importerStack);
    return (stack == null ? void 0 : stack.file) || "";
  };
  return {
    useFakeTimers(config2) {
      if (config2) {
        _timers.configure(config2);
      } else {
        const workerState2 = getWorkerState();
        _timers.configure(workerState2.config.fakeTimers);
      }
      _timers.useFakeTimers();
      return this;
    },
    useRealTimers() {
      _timers.useRealTimers();
      _mockedDate = null;
      return this;
    },
    runOnlyPendingTimers() {
      _timers.runOnlyPendingTimers();
      return this;
    },
    async runOnlyPendingTimersAsync() {
      await _timers.runOnlyPendingTimersAsync();
      return this;
    },
    runAllTimers() {
      _timers.runAllTimers();
      return this;
    },
    async runAllTimersAsync() {
      await _timers.runAllTimersAsync();
      return this;
    },
    runAllTicks() {
      _timers.runAllTicks();
      return this;
    },
    advanceTimersByTime(ms) {
      _timers.advanceTimersByTime(ms);
      return this;
    },
    async advanceTimersByTimeAsync(ms) {
      await _timers.advanceTimersByTimeAsync(ms);
      return this;
    },
    advanceTimersToNextTimer() {
      _timers.advanceTimersToNextTimer();
      return this;
    },
    async advanceTimersToNextTimerAsync() {
      await _timers.advanceTimersToNextTimerAsync();
      return this;
    },
    getTimerCount() {
      return _timers.getTimerCount();
    },
    setSystemTime(time) {
      const date = time instanceof Date ? time : new Date(time);
      _mockedDate = date;
      _timers.setSystemTime(date);
      return this;
    },
    getMockedSystemTime() {
      return _mockedDate;
    },
    getRealSystemTime() {
      return _timers.getRealSystemTime();
    },
    clearAllTimers() {
      _timers.clearAllTimers();
      return this;
    },
    // mocks
    spyOn,
    fn,
    mock(path2, factory) {
      const importer = getImporter();
      _mocker.queueMock(
        path2,
        importer,
        factory ? () => factory(() => _mocker.importActual(path2, importer)) : void 0
      );
    },
    unmock(path2) {
      _mocker.queueUnmock(path2, getImporter());
    },
    doMock(path2, factory) {
      _mocker.queueMock(path2, getImporter(), factory);
    },
    doUnmock(path2) {
      _mocker.queueUnmock(path2, getImporter());
    },
    async importActual(path2) {
      return _mocker.importActual(path2, getImporter());
    },
    async importMock(path2) {
      return _mocker.importMock(path2, getImporter());
    },
    mocked(item, _options = {}) {
      return item;
    },
    isMockFunction(fn2) {
      return isMockFunction(fn2);
    },
    clearAllMocks() {
      spies.forEach((spy) => spy.mockClear());
      return this;
    },
    resetAllMocks() {
      spies.forEach((spy) => spy.mockReset());
      return this;
    },
    restoreAllMocks() {
      spies.forEach((spy) => spy.mockRestore());
      return this;
    },
    stubGlobal(name, value) {
      if (!_stubsGlobal.has(name))
        _stubsGlobal.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
      Object.defineProperty(globalThis, name, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
      });
      return this;
    },
    stubEnv(name, value) {
      if (!_stubsEnv.has(name))
        _stubsEnv.set(name, process.env[name]);
      process.env[name] = value;
      return this;
    },
    unstubAllGlobals() {
      _stubsGlobal.forEach((original, name) => {
        if (!original)
          Reflect.deleteProperty(globalThis, name);
        else
          Object.defineProperty(globalThis, name, original);
      });
      _stubsGlobal.clear();
      return this;
    },
    unstubAllEnvs() {
      _stubsEnv.forEach((original, name) => {
        if (original === void 0)
          delete process.env[name];
        else
          process.env[name] = original;
      });
      _stubsEnv.clear();
      return this;
    },
    resetModules() {
      const state = getWorkerState();
      resetModules(state.moduleCache);
      return this;
    },
    async dynamicImportSettled() {
      return waitForImportsToResolve();
    },
    setConfig(config2) {
      const state = getWorkerState();
      if (!_config)
        _config = { ...state.config };
      Object.assign(state.config, config2);
    },
    resetConfig() {
      if (_config) {
        const state = getWorkerState();
        Object.assign(state.config, _config);
      }
    }
  };
}
var vitest = createVitest();
var vi = vitest;

// node_modules/vitest/dist/vendor-run-once.69ce7172.js
var filesCount = /* @__PURE__ */ new Map();
var cache = /* @__PURE__ */ new Map();
function runOnce(fn2, key) {
  const filepath = getWorkerState().filepath || "__unknown_files__";
  if (!key) {
    filesCount.set(filepath, (filesCount.get(filepath) || 0) + 1);
    key = String(filesCount.get(filepath));
  }
  const id = `${filepath}:${key}`;
  if (!cache.has(id))
    cache.set(id, fn2());
  return cache.get(id);
}
function isFirstRun() {
  let firstRun = false;
  runOnce(() => {
    firstRun = true;
  }, "__vitest_first_run__");
  return firstRun;
}

// node_modules/vitest/dist/vendor-index.81b9e499.js
function getRunningMode() {
  return process.env.VITEST_MODE === "WATCH" ? "watch" : "run";
}
function isWatchMode() {
  return getRunningMode() === "watch";
}
var dist = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.expectTypeOf = void 0;
  const fn2 = () => true;
  const expectTypeOf2 = (_actual) => {
    const nonFunctionProperties = [
      "parameters",
      "returns",
      "resolves",
      "not",
      "items",
      "constructorParameters",
      "instance",
      "guards",
      "asserts"
    ];
    const obj = {
      /* eslint-disable mmkal/@typescript-eslint/no-unsafe-assignment */
      toBeAny: fn2,
      toBeUnknown: fn2,
      toBeNever: fn2,
      toBeFunction: fn2,
      toBeObject: fn2,
      toBeArray: fn2,
      toBeString: fn2,
      toBeNumber: fn2,
      toBeBoolean: fn2,
      toBeVoid: fn2,
      toBeSymbol: fn2,
      toBeNull: fn2,
      toBeUndefined: fn2,
      toBeNullable: fn2,
      toMatchTypeOf: fn2,
      toEqualTypeOf: fn2,
      toBeCallableWith: fn2,
      toBeConstructibleWith: fn2,
      /* eslint-enable mmkal/@typescript-eslint/no-unsafe-assignment */
      extract: exports.expectTypeOf,
      exclude: exports.expectTypeOf,
      toHaveProperty: exports.expectTypeOf,
      parameter: exports.expectTypeOf
    };
    const getterProperties = nonFunctionProperties;
    getterProperties.forEach((prop) => Object.defineProperty(obj, prop, { get: () => (0, exports.expectTypeOf)({}) }));
    return obj;
  };
  exports.expectTypeOf = expectTypeOf2;
})(dist);
function noop2() {
}
var assertType = noop2;
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  afterAll,
  afterEach,
  assert,
  assertType,
  beforeAll,
  beforeEach,
  bench,
  chai: chai_exports,
  createExpect,
  describe,
  expect: globalExpect,
  expectTypeOf: dist.expectTypeOf,
  getRunningMode,
  isFirstRun,
  isWatchMode,
  it,
  onTestFailed,
  runOnce,
  setupChaiConfig,
  should,
  suite,
  test,
  vi,
  vitest
});

// node_modules/vitest/dist/index.js
var expectTypeOf = dist.expectTypeOf;

// src/use-cases/update-test-case.spec.ts
var testCasesRepository;
var sut;
describe("Update Test Case Use Case", () => {
  beforeEach(() => {
    testCasesRepository = new InMemoryTestCasesRepository();
    sut = new UpdateTestCaseUseCase(testCasesRepository);
  });
  it("should be able to update a test case", async () => {
    const newTestCase = await testCasesRepository.create({
      project_id: "mock-project-id",
      title: "Test Case 1",
      status: "open",
      description: null,
      priority: "not_set",
      automation_status: "not_automated",
      behavior: "not_set",
      layer: "not_set",
      type: "other",
      assigned_to: null
    });
    const { testCase } = await sut.execute({
      testCaseId: newTestCase.id,
      data: {
        title: "Test Case 1 updated"
      }
    });
    globalExpect(testCase.title).toEqual("Test Case 1 updated");
  });
  it("should not be able to update a non-existing test case", async () => {
    await testCasesRepository.create({
      project_id: "mock-project-id",
      title: "Test Case 1",
      status: "open",
      description: null,
      priority: "not_set",
      automation_status: "not_automated",
      behavior: "not_set",
      layer: "not_set",
      type: "other",
      assigned_to: null
    });
    await globalExpect(
      () => sut.execute({
        testCaseId: "non-existing-test-case-id",
        data: {
          title: "New title"
        }
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v17.0.2
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

assertion-error/index.js:
  (*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   *)
  (*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   *)
  (*!
   * Primary Exports
   *)
  (*!
   * Inherit from Error.prototype
   *)
  (*!
   * Statically set name
   *)
  (*!
   * Ensure correct constructor
   *)

chai/lib/chai/utils/flag.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/test.js:
  (*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/expectTypes.js:
  (*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getActual.js:
  (*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/objDisplay.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getMessage.js:
  (*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/transferFlags.js:
  (*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)

chai/lib/chai/utils/isProxyEnabled.js:
  (*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addProperty.js:
  (*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addLengthGuard.js:
  (*!
   * Chai - addLengthGuard utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getProperties.js:
  (*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/proxify.js:
  (*!
   * Chai - proxify utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addMethod.js:
  (*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteProperty.js:
  (*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteMethod.js:
  (*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addChainableMethod.js:
  (*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)
  (*!
   * Module variables
   *)

chai/lib/chai/utils/overwriteChainableMethod.js:
  (*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/compareByInspect.js:
  (*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js:
  (*!
   * Chai - getOwnEnumerablePropertySymbols utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getOwnEnumerableProperties.js:
  (*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/isNaN.js:
  (*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/index.js:
  (*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Dependencies that are used for multiple exports are required here only once
   *)
  (*!
   * test utility
   *)
  (*!
   * type utility
   *)
  (*!
   * expectTypes utility
   *)
  (*!
   * message utility
   *)
  (*!
   * actual utility
   *)
  (*!
   * Inspect util
   *)
  (*!
   * Object Display util
   *)
  (*!
   * Flag utility
   *)
  (*!
   * Flag transferring utility
   *)
  (*!
   * Deep equal utility
   *)
  (*!
   * Deep path info
   *)
  (*!
   * Check if a property exists
   *)
  (*!
   * Function name
   *)
  (*!
   * add Property
   *)
  (*!
   * add Method
   *)
  (*!
   * overwrite Property
   *)
  (*!
   * overwrite Method
   *)
  (*!
   * Add a chainable method
   *)
  (*!
   * Overwrite chainable method
   *)
  (*!
   * Compare by inspect method
   *)
  (*!
   * Get own enumerable property symbols method
   *)
  (*!
   * Get own enumerable properties method
   *)
  (*!
   * Checks error against a given set of criteria
   *)
  (*!
   * Proxify util
   *)
  (*!
   * addLengthGuard util
   *)
  (*!
   * isProxyEnabled helper
   *)
  (*!
   * isNaN method
   *)
  (*!
   * getOperator method
   *)

chai/lib/chai/assertion.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   *)
  (*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   *)

chai/lib/chai/core/assertions.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/expect.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/should.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/assert.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   *)
  (*!
   * Aliases.
   *)

chai/lib/chai.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai version
   *)
  (*!
   * Assertion Error
   *)
  (*!
   * Utils for plugins (not exported)
   *)
  (*!
   * Utility Functions
   *)
  (*!
   * Configuration
   *)
  (*!
   * Primary `Assertion` prototype
   *)
  (*!
   * Core Assertions
   *)
  (*!
   * Expect interface
   *)
  (*!
   * Should interface
   *)
  (*!
   * Assert interface
   *)

@vitest/snapshot/dist/index.js:
  (*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   *)
*/
