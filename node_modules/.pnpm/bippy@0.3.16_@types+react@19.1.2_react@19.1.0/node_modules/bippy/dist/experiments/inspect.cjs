/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, '__esModule', { value: true });
const require_chunk = require('../chunk-DWy1uDak.cjs');
const require_core = require('../core-BS9Kf-6A.cjs');
require('../src-8X9f2vzK.cjs');
const require_source = require('../source-CpUl2rbU.cjs');
const react_jsx_runtime = require_chunk.__toESM(require("react/jsx-runtime"));
const react = require_chunk.__toESM(require("react"));
const react_dom = require_chunk.__toESM(require("react-dom"));

//#region ../../node_modules/.pnpm/react-inspector@6.0.2_react@19.0.0/node_modules/react-inspector/dist/index.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: () => from[key],
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var require_is_object = __commonJS({ "node_modules/is-object/index.js"(exports$1, module$1) {
	"use strict";
	module$1.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};
} });
var require_is_window = __commonJS({ "node_modules/is-window/index.js"(exports$1, module$1) {
	"use strict";
	module$1.exports = function(obj) {
		if (obj == null) return false;
		var o = Object(obj);
		return o === o.window;
	};
} });
var require_is_dom = __commonJS({ "node_modules/is-dom/index.js"(exports$1, module$1) {
	var isObject = require_is_object();
	var isWindow = require_is_window();
	function isNode(val) {
		if (!isObject(val) || !isWindow(window) || typeof window.Node !== "function") return false;
		return typeof val.nodeType === "number" && typeof val.nodeName === "string";
	}
	module$1.exports = isNode;
} });
var themes_exports = {};
__export(themes_exports, {
	chromeDark: () => theme$1,
	chromeLight: () => theme2
});
var theme$1 = {
	BASE_FONT_FAMILY: "Menlo, monospace",
	BASE_FONT_SIZE: "11px",
	BASE_LINE_HEIGHT: 1.2,
	BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
	BASE_COLOR: "rgb(213, 213, 213)",
	OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
	OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
	OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
	OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
	OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
	OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
	OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
	OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
	OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
	OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
	OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
	HTML_TAG_COLOR: "rgb(93, 176, 215)",
	HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
	HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
	HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
	HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
	HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
	HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
	ARROW_COLOR: "rgb(145, 145, 145)",
	ARROW_MARGIN_RIGHT: 3,
	ARROW_FONT_SIZE: 12,
	ARROW_ANIMATION_DURATION: "0",
	TREENODE_FONT_FAMILY: "Menlo, monospace",
	TREENODE_FONT_SIZE: "11px",
	TREENODE_LINE_HEIGHT: 1.2,
	TREENODE_PADDING_LEFT: 12,
	TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
	TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
	TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
	TABLE_SORT_ICON_COLOR: "black",
	TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
	TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var theme2 = {
	BASE_FONT_FAMILY: "Menlo, monospace",
	BASE_FONT_SIZE: "11px",
	BASE_LINE_HEIGHT: 1.2,
	BASE_BACKGROUND_COLOR: "white",
	BASE_COLOR: "black",
	OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
	OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
	OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
	OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
	OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
	OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
	OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
	OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
	OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
	OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
	OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
	HTML_TAG_COLOR: "rgb(168, 148, 166)",
	HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
	HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
	HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
	HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
	HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
	HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
	ARROW_COLOR: "#6e6e6e",
	ARROW_MARGIN_RIGHT: 3,
	ARROW_FONT_SIZE: 12,
	ARROW_ANIMATION_DURATION: "0",
	TREENODE_FONT_FAMILY: "Menlo, monospace",
	TREENODE_FONT_SIZE: "11px",
	TREENODE_LINE_HEIGHT: 1.2,
	TREENODE_PADDING_LEFT: 12,
	TABLE_BORDER_COLOR: "#aaa",
	TABLE_TH_BACKGROUND_COLOR: "#eee",
	TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
	TABLE_SORT_ICON_COLOR: "#6e6e6e",
	TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
	TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var ExpandedPathsContext = (0, react.createContext)([{}, () => {}]);
var unselectable = {
	WebkitTouchCallout: "none",
	WebkitUserSelect: "none",
	KhtmlUserSelect: "none",
	MozUserSelect: "none",
	msUserSelect: "none",
	OUserSelect: "none",
	userSelect: "none"
};
var createTheme = (theme3) => ({
	DOMNodePreview: {
		htmlOpenTag: {
			base: { color: theme3.HTML_TAG_COLOR },
			tagName: {
				color: theme3.HTML_TAGNAME_COLOR,
				textTransform: theme3.HTML_TAGNAME_TEXT_TRANSFORM
			},
			htmlAttributeName: { color: theme3.HTML_ATTRIBUTE_NAME_COLOR },
			htmlAttributeValue: { color: theme3.HTML_ATTRIBUTE_VALUE_COLOR }
		},
		htmlCloseTag: {
			base: { color: theme3.HTML_TAG_COLOR },
			offsetLeft: { marginLeft: -theme3.TREENODE_PADDING_LEFT },
			tagName: {
				color: theme3.HTML_TAGNAME_COLOR,
				textTransform: theme3.HTML_TAGNAME_TEXT_TRANSFORM
			}
		},
		htmlComment: { color: theme3.HTML_COMMENT_COLOR },
		htmlDoctype: { color: theme3.HTML_DOCTYPE_COLOR }
	},
	ObjectPreview: {
		objectDescription: { fontStyle: "italic" },
		preview: { fontStyle: "italic" },
		arrayMaxProperties: theme3.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
		objectMaxProperties: theme3.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES
	},
	ObjectName: {
		base: { color: theme3.OBJECT_NAME_COLOR },
		dimmed: { opacity: .6 }
	},
	ObjectValue: {
		objectValueNull: { color: theme3.OBJECT_VALUE_NULL_COLOR },
		objectValueUndefined: { color: theme3.OBJECT_VALUE_UNDEFINED_COLOR },
		objectValueRegExp: { color: theme3.OBJECT_VALUE_REGEXP_COLOR },
		objectValueString: { color: theme3.OBJECT_VALUE_STRING_COLOR },
		objectValueSymbol: { color: theme3.OBJECT_VALUE_SYMBOL_COLOR },
		objectValueNumber: { color: theme3.OBJECT_VALUE_NUMBER_COLOR },
		objectValueBoolean: { color: theme3.OBJECT_VALUE_BOOLEAN_COLOR },
		objectValueFunctionPrefix: {
			color: theme3.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
			fontStyle: "italic"
		},
		objectValueFunctionName: { fontStyle: "italic" }
	},
	TreeView: { treeViewOutline: {
		padding: 0,
		margin: 0,
		listStyleType: "none"
	} },
	TreeNode: {
		treeNodeBase: {
			color: theme3.BASE_COLOR,
			backgroundColor: theme3.BASE_BACKGROUND_COLOR,
			lineHeight: theme3.TREENODE_LINE_HEIGHT,
			cursor: "default",
			boxSizing: "border-box",
			listStyle: "none",
			fontFamily: theme3.TREENODE_FONT_FAMILY,
			fontSize: theme3.TREENODE_FONT_SIZE
		},
		treeNodePreviewContainer: {},
		treeNodePlaceholder: {
			whiteSpace: "pre",
			fontSize: theme3.ARROW_FONT_SIZE,
			marginRight: theme3.ARROW_MARGIN_RIGHT,
			...unselectable
		},
		treeNodeArrow: {
			base: {
				color: theme3.ARROW_COLOR,
				display: "inline-block",
				fontSize: theme3.ARROW_FONT_SIZE,
				marginRight: theme3.ARROW_MARGIN_RIGHT,
				...parseFloat(theme3.ARROW_ANIMATION_DURATION) > 0 ? { transition: `transform ${theme3.ARROW_ANIMATION_DURATION} ease 0s` } : {},
				...unselectable
			},
			expanded: {
				WebkitTransform: "rotateZ(90deg)",
				MozTransform: "rotateZ(90deg)",
				transform: "rotateZ(90deg)"
			},
			collapsed: {
				WebkitTransform: "rotateZ(0deg)",
				MozTransform: "rotateZ(0deg)",
				transform: "rotateZ(0deg)"
			}
		},
		treeNodeChildNodesContainer: {
			margin: 0,
			paddingLeft: theme3.TREENODE_PADDING_LEFT
		}
	},
	TableInspector: { base: {
		color: theme3.BASE_COLOR,
		position: "relative",
		border: `1px solid ${theme3.TABLE_BORDER_COLOR}`,
		fontFamily: theme3.BASE_FONT_FAMILY,
		fontSize: theme3.BASE_FONT_SIZE,
		lineHeight: "120%",
		boxSizing: "border-box",
		cursor: "default"
	} },
	TableInspectorHeaderContainer: {
		base: {
			top: 0,
			height: "17px",
			left: 0,
			right: 0,
			overflowX: "hidden"
		},
		table: {
			tableLayout: "fixed",
			borderSpacing: 0,
			borderCollapse: "separate",
			height: "100%",
			width: "100%",
			margin: 0
		}
	},
	TableInspectorDataContainer: {
		tr: { display: "table-row" },
		td: {
			boxSizing: "border-box",
			border: "none",
			height: "16px",
			verticalAlign: "top",
			padding: "1px 4px",
			WebkitUserSelect: "text",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			lineHeight: "14px"
		},
		div: {
			position: "static",
			top: "17px",
			bottom: 0,
			overflowY: "overlay",
			transform: "translateZ(0)",
			left: 0,
			right: 0,
			overflowX: "hidden"
		},
		table: {
			positon: "static",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			borderTop: "0 none transparent",
			margin: 0,
			backgroundImage: theme3.TABLE_DATA_BACKGROUND_IMAGE,
			backgroundSize: theme3.TABLE_DATA_BACKGROUND_SIZE,
			tableLayout: "fixed",
			borderSpacing: 0,
			borderCollapse: "separate",
			width: "100%",
			fontSize: theme3.BASE_FONT_SIZE,
			lineHeight: "120%"
		}
	},
	TableInspectorTH: {
		base: {
			position: "relative",
			height: "auto",
			textAlign: "left",
			backgroundColor: theme3.TABLE_TH_BACKGROUND_COLOR,
			borderBottom: `1px solid ${theme3.TABLE_BORDER_COLOR}`,
			fontWeight: "normal",
			verticalAlign: "middle",
			padding: "0 4px",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			lineHeight: "14px",
			":hover": { backgroundColor: theme3.TABLE_TH_HOVER_COLOR }
		},
		div: {
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
			overflow: "hidden",
			fontSize: theme3.BASE_FONT_SIZE,
			lineHeight: "120%"
		}
	},
	TableInspectorLeftBorder: {
		none: { borderLeft: "none" },
		solid: { borderLeft: `1px solid ${theme3.TABLE_BORDER_COLOR}` }
	},
	TableInspectorSortIcon: {
		display: "block",
		marginRight: 3,
		width: 8,
		height: 7,
		marginTop: -7,
		color: theme3.TABLE_SORT_ICON_COLOR,
		fontSize: 12,
		...unselectable
	}
});
var DEFAULT_THEME_NAME = "chromeLight";
var ThemeContext = (0, react.createContext)(createTheme(themes_exports[DEFAULT_THEME_NAME]));
var useStyles = (baseStylesKey) => {
	const themeStyles = (0, react.useContext)(ThemeContext);
	return themeStyles[baseStylesKey];
};
var themeAcceptor = (WrappedComponent) => {
	const ThemeAcceptor = ({ theme: theme3 = DEFAULT_THEME_NAME,...restProps }) => {
		const themeStyles = (0, react.useMemo)(() => {
			switch (Object.prototype.toString.call(theme3)) {
				case "[object String]": return createTheme(themes_exports[theme3]);
				case "[object Object]": return createTheme(theme3);
				default: return createTheme(themes_exports[DEFAULT_THEME_NAME]);
			}
		}, [theme3]);
		return /* @__PURE__ */ react.default.createElement(ThemeContext.Provider, { value: themeStyles }, /* @__PURE__ */ react.default.createElement(WrappedComponent, { ...restProps }));
	};
	return ThemeAcceptor;
};
var Arrow = ({ expanded, styles }) => /* @__PURE__ */ react.default.createElement("span", { style: {
	...styles.base,
	...expanded ? styles.expanded : styles.collapsed
} }, "▶");
var TreeNode = (0, react.memo)((props) => {
	props = {
		expanded: true,
		nodeRenderer: ({ name }) => /* @__PURE__ */ react.default.createElement("span", null, name),
		onClick: () => {},
		shouldShowArrow: false,
		shouldShowPlaceholder: true,
		...props
	};
	const { expanded, onClick, children, nodeRenderer, title, shouldShowArrow, shouldShowPlaceholder } = props;
	const styles = useStyles("TreeNode");
	const NodeRenderer = nodeRenderer;
	return /* @__PURE__ */ react.default.createElement("li", {
		"aria-expanded": expanded,
		role: "treeitem",
		style: styles.treeNodeBase,
		title
	}, /* @__PURE__ */ react.default.createElement("div", {
		style: styles.treeNodePreviewContainer,
		onClick
	}, shouldShowArrow || react.Children.count(children) > 0 ? /* @__PURE__ */ react.default.createElement(Arrow, {
		expanded,
		styles: styles.treeNodeArrow
	}) : shouldShowPlaceholder && /* @__PURE__ */ react.default.createElement("span", { style: styles.treeNodePlaceholder }, "\xA0"), /* @__PURE__ */ react.default.createElement(NodeRenderer, { ...props })), /* @__PURE__ */ react.default.createElement("ol", {
		role: "group",
		style: styles.treeNodeChildNodesContainer
	}, expanded ? children : void 0));
});
var DEFAULT_ROOT_PATH = "$";
var WILDCARD = "*";
function hasChildNodes(data, dataIterator) {
	return !dataIterator(data).next().done;
}
var wildcardPathsFromLevel = (level) => {
	return Array.from({ length: level }, (_, i) => [DEFAULT_ROOT_PATH].concat(Array.from({ length: i }, () => "*")).join("."));
};
var getExpandedPaths = (data, dataIterator, expandPaths, expandLevel, prevExpandedPaths) => {
	const wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter((path) => typeof path === "string");
	const expandedPaths = [];
	wildcardPaths.forEach((wildcardPath) => {
		const keyPaths = wildcardPath.split(".");
		const populatePaths = (curData, curPath, depth) => {
			if (depth === keyPaths.length) {
				expandedPaths.push(curPath);
				return;
			}
			const key = keyPaths[depth];
			if (depth === 0) {
				if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
			} else if (key === WILDCARD) {
				for (const { name, data: data2 } of dataIterator(curData)) if (hasChildNodes(data2, dataIterator)) populatePaths(data2, `${curPath}.${name}`, depth + 1);
			} else {
				const value = curData[key];
				if (hasChildNodes(value, dataIterator)) populatePaths(value, `${curPath}.${key}`, depth + 1);
			}
		};
		populatePaths(data, "", 0);
	});
	return expandedPaths.reduce((obj, path) => {
		obj[path] = true;
		return obj;
	}, { ...prevExpandedPaths });
};
var ConnectedTreeNode = (0, react.memo)((props) => {
	const { data, dataIterator, path, depth, nodeRenderer } = props;
	const [expandedPaths, setExpandedPaths] = (0, react.useContext)(ExpandedPathsContext);
	const nodeHasChildNodes = hasChildNodes(data, dataIterator);
	const expanded = !!expandedPaths[path];
	const handleClick = (0, react.useCallback)(() => nodeHasChildNodes && setExpandedPaths((prevExpandedPaths) => ({
		...prevExpandedPaths,
		[path]: !expanded
	})), [
		nodeHasChildNodes,
		setExpandedPaths,
		path,
		expanded
	]);
	return /* @__PURE__ */ react.default.createElement(TreeNode, {
		expanded,
		onClick: handleClick,
		shouldShowArrow: nodeHasChildNodes,
		shouldShowPlaceholder: depth > 0,
		nodeRenderer,
		...props
	}, expanded ? [...dataIterator(data)].map(({ name, data: data2,...renderNodeProps }) => {
		return /* @__PURE__ */ react.default.createElement(ConnectedTreeNode, {
			name,
			data: data2,
			depth: depth + 1,
			path: `${path}.${name}`,
			key: name,
			dataIterator,
			nodeRenderer,
			...renderNodeProps
		});
	}) : null);
});
var TreeView = (0, react.memo)(({ name, data, dataIterator, nodeRenderer, expandPaths, expandLevel }) => {
	const styles = useStyles("TreeView");
	const stateAndSetter = (0, react.useState)({});
	const [, setExpandedPaths] = stateAndSetter;
	(0, react.useLayoutEffect)(() => setExpandedPaths((prevExpandedPaths) => getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths)), [
		data,
		dataIterator,
		expandPaths,
		expandLevel
	]);
	return /* @__PURE__ */ react.default.createElement(ExpandedPathsContext.Provider, { value: stateAndSetter }, /* @__PURE__ */ react.default.createElement("ol", {
		role: "tree",
		style: styles.treeViewOutline
	}, /* @__PURE__ */ react.default.createElement(ConnectedTreeNode, {
		name,
		data,
		dataIterator,
		depth: 0,
		path: DEFAULT_ROOT_PATH,
		nodeRenderer
	})));
});
var ObjectName = ({ name, dimmed = false, styles = {} }) => {
	const themeStyles = useStyles("ObjectName");
	const appliedStyles = {
		...themeStyles.base,
		...dimmed ? themeStyles["dimmed"] : {},
		...styles
	};
	return /* @__PURE__ */ react.default.createElement("span", { style: appliedStyles }, name);
};
var ObjectValue = ({ object, styles }) => {
	const themeStyles = useStyles("ObjectValue");
	const mkStyle = (key) => ({
		...themeStyles[key],
		...styles
	});
	switch (typeof object) {
		case "bigint": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueNumber") }, String(object), "n");
		case "number": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueNumber") }, String(object));
		case "string": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueString") }, "\"", object, "\"");
		case "boolean": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueBoolean") }, String(object));
		case "undefined": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueUndefined") }, "undefined");
		case "object":
			if (object === null) return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueNull") }, "null");
			if (object instanceof Date) return /* @__PURE__ */ react.default.createElement("span", null, object.toString());
			if (object instanceof RegExp) return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueRegExp") }, object.toString());
			if (Array.isArray(object)) return /* @__PURE__ */ react.default.createElement("span", null, `Array(${object.length})`);
			if (!object.constructor) return /* @__PURE__ */ react.default.createElement("span", null, "Object");
			if (typeof object.constructor.isBuffer === "function" && object.constructor.isBuffer(object)) return /* @__PURE__ */ react.default.createElement("span", null, `Buffer[${object.length}]`);
			return /* @__PURE__ */ react.default.createElement("span", null, object.constructor.name);
		case "function": return /* @__PURE__ */ react.default.createElement("span", null, /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueFunctionPrefix") }, "ƒ\xA0"), /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueFunctionName") }, object.name, "()"));
		case "symbol": return /* @__PURE__ */ react.default.createElement("span", { style: mkStyle("objectValueSymbol") }, object.toString());
		default: return /* @__PURE__ */ react.default.createElement("span", null);
	}
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
function getPropertyValue(object, propertyName) {
	const propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
	if (propertyDescriptor.get) try {
		return propertyDescriptor.get();
	} catch {
		return propertyDescriptor.get;
	}
	return object[propertyName];
}
function intersperse(arr, sep) {
	if (arr.length === 0) return [];
	return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}
var ObjectPreview = ({ data }) => {
	const styles = useStyles("ObjectPreview");
	const object = data;
	if (typeof object !== "object" || object === null || object instanceof Date || object instanceof RegExp) return /* @__PURE__ */ react.default.createElement(ObjectValue, { object });
	if (Array.isArray(object)) {
		const maxProperties = styles.arrayMaxProperties;
		const previewArray = object.slice(0, maxProperties).map((element, index) => /* @__PURE__ */ react.default.createElement(ObjectValue, {
			key: index,
			object: element
		}));
		if (object.length > maxProperties) previewArray.push(/* @__PURE__ */ react.default.createElement("span", { key: "ellipsis" }, "…"));
		const arrayLength = object.length;
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement("span", { style: styles.objectDescription }, arrayLength === 0 ? `` : `(${arrayLength})\xA0`), /* @__PURE__ */ react.default.createElement("span", { style: styles.preview }, "[", intersperse(previewArray, ", "), "]"));
	} else {
		const maxProperties = styles.objectMaxProperties;
		const propertyNodes = [];
		for (const propertyName in object) if (hasOwnProperty.call(object, propertyName)) {
			let ellipsis;
			if (propertyNodes.length === maxProperties - 1 && Object.keys(object).length > maxProperties) ellipsis = /* @__PURE__ */ react.default.createElement("span", { key: "ellipsis" }, "…");
			const propertyValue = getPropertyValue(object, propertyName);
			propertyNodes.push(/* @__PURE__ */ react.default.createElement("span", { key: propertyName }, /* @__PURE__ */ react.default.createElement(ObjectName, { name: propertyName || `""` }), ":\xA0", /* @__PURE__ */ react.default.createElement(ObjectValue, { object: propertyValue }), ellipsis));
			if (ellipsis) break;
		}
		const objectConstructorName = object.constructor ? object.constructor.name : "Object";
		return /* @__PURE__ */ react.default.createElement(react.default.Fragment, null, /* @__PURE__ */ react.default.createElement("span", { style: styles.objectDescription }, objectConstructorName === "Object" ? "" : `${objectConstructorName} `), /* @__PURE__ */ react.default.createElement("span", { style: styles.preview }, "{", intersperse(propertyNodes, ", "), "}"));
	}
};
var ObjectRootLabel = ({ name, data }) => {
	if (typeof name === "string") return /* @__PURE__ */ react.default.createElement("span", null, /* @__PURE__ */ react.default.createElement(ObjectName, { name }), /* @__PURE__ */ react.default.createElement("span", null, ": "), /* @__PURE__ */ react.default.createElement(ObjectPreview, { data }));
	else return /* @__PURE__ */ react.default.createElement(ObjectPreview, { data });
};
var ObjectLabel = ({ name, data, isNonenumerable = false }) => {
	const object = data;
	return /* @__PURE__ */ react.default.createElement("span", null, typeof name === "string" ? /* @__PURE__ */ react.default.createElement(ObjectName, {
		name,
		dimmed: isNonenumerable
	}) : /* @__PURE__ */ react.default.createElement(ObjectPreview, { data: name }), /* @__PURE__ */ react.default.createElement("span", null, ": "), /* @__PURE__ */ react.default.createElement(ObjectValue, { object }));
};
var createIterator = (showNonenumerable, sortObjectKeys) => {
	const objectIterator = function* (data) {
		const shouldIterate = typeof data === "object" && data !== null || typeof data === "function";
		if (!shouldIterate) return;
		const dataIsArray = Array.isArray(data);
		if (!dataIsArray && data[Symbol.iterator]) {
			let i = 0;
			for (const entry of data) {
				if (Array.isArray(entry) && entry.length === 2) {
					const [k, v] = entry;
					yield {
						name: k,
						data: v
					};
				} else yield {
					name: i.toString(),
					data: entry
				};
				i++;
			}
		} else {
			const keys = Object.getOwnPropertyNames(data);
			if (sortObjectKeys === true && !dataIsArray) keys.sort();
			else if (typeof sortObjectKeys === "function") keys.sort(sortObjectKeys);
			for (const propertyName of keys) if (propertyIsEnumerable.call(data, propertyName)) {
				const propertyValue = getPropertyValue(data, propertyName);
				yield {
					name: propertyName || `""`,
					data: propertyValue
				};
			} else if (showNonenumerable) {
				let propertyValue;
				try {
					propertyValue = getPropertyValue(data, propertyName);
				} catch (e) {}
				if (propertyValue !== void 0) yield {
					name: propertyName,
					data: propertyValue,
					isNonenumerable: true
				};
			}
			if (showNonenumerable && data !== Object.prototype) yield {
				name: "__proto__",
				data: Object.getPrototypeOf(data),
				isNonenumerable: true
			};
		}
	};
	return objectIterator;
};
var defaultNodeRenderer = ({ depth, name, data, isNonenumerable }) => depth === 0 ? /* @__PURE__ */ react.default.createElement(ObjectRootLabel, {
	name,
	data
}) : /* @__PURE__ */ react.default.createElement(ObjectLabel, {
	name,
	data,
	isNonenumerable
});
var ObjectInspector = ({ showNonenumerable = false, sortObjectKeys, nodeRenderer,...treeViewProps }) => {
	const dataIterator = createIterator(showNonenumerable, sortObjectKeys);
	const renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;
	return /* @__PURE__ */ react.default.createElement(TreeView, {
		nodeRenderer: renderer,
		dataIterator,
		...treeViewProps
	});
};
var themedObjectInspector = themeAcceptor(ObjectInspector);
function getHeaders(data) {
	if (typeof data === "object") {
		let rowHeaders = [];
		if (Array.isArray(data)) {
			const nRows = data.length;
			rowHeaders = [...Array(nRows).keys()];
		} else if (data !== null) rowHeaders = Object.keys(data);
		const colHeaders = rowHeaders.reduce((colHeaders2, rowHeader) => {
			const row = data[rowHeader];
			if (typeof row === "object" && row !== null) {
				const cols = Object.keys(row);
				cols.reduce((xs, x) => {
					if (!xs.includes(x)) xs.push(x);
					return xs;
				}, colHeaders2);
			}
			return colHeaders2;
		}, []);
		return {
			rowHeaders,
			colHeaders
		};
	}
	return void 0;
}
var DataContainer = ({ rows, columns, rowsData }) => {
	const styles = useStyles("TableInspectorDataContainer");
	const borderStyles = useStyles("TableInspectorLeftBorder");
	return /* @__PURE__ */ react.default.createElement("div", { style: styles.div }, /* @__PURE__ */ react.default.createElement("table", { style: styles.table }, /* @__PURE__ */ react.default.createElement("colgroup", null), /* @__PURE__ */ react.default.createElement("tbody", null, rows.map((row, i) => /* @__PURE__ */ react.default.createElement("tr", {
		key: row,
		style: styles.tr
	}, /* @__PURE__ */ react.default.createElement("td", { style: {
		...styles.td,
		...borderStyles.none
	} }, row), columns.map((column) => {
		const rowData = rowsData[i];
		if (typeof rowData === "object" && rowData !== null && hasOwnProperty.call(rowData, column)) return /* @__PURE__ */ react.default.createElement("td", {
			key: column,
			style: {
				...styles.td,
				...borderStyles.solid
			}
		}, /* @__PURE__ */ react.default.createElement(ObjectValue, { object: rowData[column] }));
		else return /* @__PURE__ */ react.default.createElement("td", {
			key: column,
			style: {
				...styles.td,
				...borderStyles.solid
			}
		});
	}))))));
};
var SortIconContainer = (props) => /* @__PURE__ */ react.default.createElement("div", { style: {
	position: "absolute",
	top: 1,
	right: 0,
	bottom: 1,
	display: "flex",
	alignItems: "center"
} }, props.children);
var SortIcon = ({ sortAscending }) => {
	const styles = useStyles("TableInspectorSortIcon");
	const glyph = sortAscending ? "▲" : "▼";
	return /* @__PURE__ */ react.default.createElement("div", { style: styles }, glyph);
};
var TH = ({ sortAscending = false, sorted = false, onClick = void 0, borderStyle = {}, children,...thProps }) => {
	const styles = useStyles("TableInspectorTH");
	const [hovered, setHovered] = (0, react.useState)(false);
	const handleMouseEnter = (0, react.useCallback)(() => setHovered(true), []);
	const handleMouseLeave = (0, react.useCallback)(() => setHovered(false), []);
	return /* @__PURE__ */ react.default.createElement("th", {
		...thProps,
		style: {
			...styles.base,
			...borderStyle,
			...hovered ? styles.base[":hover"] : {}
		},
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onClick
	}, /* @__PURE__ */ react.default.createElement("div", { style: styles.div }, children), sorted && /* @__PURE__ */ react.default.createElement(SortIconContainer, null, /* @__PURE__ */ react.default.createElement(SortIcon, { sortAscending })));
};
var HeaderContainer = ({ indexColumnText = "(index)", columns = [], sorted, sortIndexColumn, sortColumn, sortAscending, onTHClick, onIndexTHClick }) => {
	const styles = useStyles("TableInspectorHeaderContainer");
	const borderStyles = useStyles("TableInspectorLeftBorder");
	return /* @__PURE__ */ react.default.createElement("div", { style: styles.base }, /* @__PURE__ */ react.default.createElement("table", { style: styles.table }, /* @__PURE__ */ react.default.createElement("tbody", null, /* @__PURE__ */ react.default.createElement("tr", null, /* @__PURE__ */ react.default.createElement(TH, {
		borderStyle: borderStyles.none,
		sorted: sorted && sortIndexColumn,
		sortAscending,
		onClick: onIndexTHClick
	}, indexColumnText), columns.map((column) => /* @__PURE__ */ react.default.createElement(TH, {
		borderStyle: borderStyles.solid,
		key: column,
		sorted: sorted && sortColumn === column,
		sortAscending,
		onClick: onTHClick.bind(null, column)
	}, column))))));
};
var TableInspector = ({ data, columns }) => {
	const styles = useStyles("TableInspector");
	const [{ sorted, sortIndexColumn, sortColumn, sortAscending }, setState] = (0, react.useState)({
		sorted: false,
		sortIndexColumn: false,
		sortColumn: void 0,
		sortAscending: false
	});
	const handleIndexTHClick = (0, react.useCallback)(() => {
		setState(({ sortIndexColumn: sortIndexColumn2, sortAscending: sortAscending2 }) => ({
			sorted: true,
			sortIndexColumn: true,
			sortColumn: void 0,
			sortAscending: sortIndexColumn2 ? !sortAscending2 : true
		}));
	}, []);
	const handleTHClick = (0, react.useCallback)((col) => {
		setState(({ sortColumn: sortColumn2, sortAscending: sortAscending2 }) => ({
			sorted: true,
			sortIndexColumn: false,
			sortColumn: col,
			sortAscending: col === sortColumn2 ? !sortAscending2 : true
		}));
	}, []);
	if (typeof data !== "object" || data === null) return /* @__PURE__ */ react.default.createElement("div", null);
	let { rowHeaders, colHeaders } = getHeaders(data);
	if (columns !== void 0) colHeaders = columns;
	let rowsData = rowHeaders.map((rowHeader) => data[rowHeader]);
	let columnDataWithRowIndexes;
	if (sortColumn !== void 0) columnDataWithRowIndexes = rowsData.map((rowData, index) => {
		if (typeof rowData === "object" && rowData !== null) {
			const columnData = rowData[sortColumn];
			return [columnData, index];
		}
		return [void 0, index];
	});
	else if (sortIndexColumn) columnDataWithRowIndexes = rowHeaders.map((rowData, index) => {
		const columnData = rowHeaders[index];
		return [columnData, index];
	});
	if (columnDataWithRowIndexes !== void 0) {
		const comparator = (mapper, ascending) => {
			return (a, b) => {
				const v1 = mapper(a);
				const v2 = mapper(b);
				const type1 = typeof v1;
				const type2 = typeof v2;
				const lt = (v12, v22) => {
					if (v12 < v22) return -1;
					else if (v12 > v22) return 1;
					else return 0;
				};
				let result;
				if (type1 === type2) result = lt(v1, v2);
				else {
					const order = {
						string: 0,
						number: 1,
						object: 2,
						symbol: 3,
						boolean: 4,
						undefined: 5,
						function: 6
					};
					result = lt(order[type1], order[type2]);
				}
				if (!ascending) result = -result;
				return result;
			};
		};
		const sortedRowIndexes = columnDataWithRowIndexes.sort(comparator((item) => item[0], sortAscending)).map((item) => item[1]);
		rowHeaders = sortedRowIndexes.map((i) => rowHeaders[i]);
		rowsData = sortedRowIndexes.map((i) => rowsData[i]);
	}
	return /* @__PURE__ */ react.default.createElement("div", { style: styles.base }, /* @__PURE__ */ react.default.createElement(HeaderContainer, {
		columns: colHeaders,
		sorted,
		sortIndexColumn,
		sortColumn,
		sortAscending,
		onTHClick: handleTHClick,
		onIndexTHClick: handleIndexTHClick
	}), /* @__PURE__ */ react.default.createElement(DataContainer, {
		rows: rowHeaders,
		columns: colHeaders,
		rowsData
	}));
};
var themedTableInspector = themeAcceptor(TableInspector);
var TEXT_NODE_MAX_INLINE_CHARS = 80;
var shouldInline = (data) => data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
var OpenTag = ({ tagName, attributes, styles }) => {
	return /* @__PURE__ */ react.default.createElement("span", { style: styles.base }, "<", /* @__PURE__ */ react.default.createElement("span", { style: styles.tagName }, tagName), (() => {
		if (attributes) {
			const attributeNodes = [];
			for (let i = 0; i < attributes.length; i++) {
				const attribute = attributes[i];
				attributeNodes.push(/* @__PURE__ */ react.default.createElement("span", { key: i }, " ", /* @__PURE__ */ react.default.createElement("span", { style: styles.htmlAttributeName }, attribute.name), "=\"", /* @__PURE__ */ react.default.createElement("span", { style: styles.htmlAttributeValue }, attribute.value), "\""));
			}
			return attributeNodes;
		}
	})(), ">");
};
var CloseTag = ({ tagName, isChildNode = false, styles }) => /* @__PURE__ */ react.default.createElement("span", { style: Object.assign({}, styles.base, isChildNode && styles.offsetLeft) }, "</", /* @__PURE__ */ react.default.createElement("span", { style: styles.tagName }, tagName), ">");
var nameByNodeType = {
	1: "ELEMENT_NODE",
	3: "TEXT_NODE",
	7: "PROCESSING_INSTRUCTION_NODE",
	8: "COMMENT_NODE",
	9: "DOCUMENT_NODE",
	10: "DOCUMENT_TYPE_NODE",
	11: "DOCUMENT_FRAGMENT_NODE"
};
var DOMNodePreview = ({ isCloseTag, data, expanded }) => {
	const styles = useStyles("DOMNodePreview");
	if (isCloseTag) return /* @__PURE__ */ react.default.createElement(CloseTag, {
		styles: styles.htmlCloseTag,
		isChildNode: true,
		tagName: data.tagName
	});
	switch (data.nodeType) {
		case Node.ELEMENT_NODE: return /* @__PURE__ */ react.default.createElement("span", null, /* @__PURE__ */ react.default.createElement(OpenTag, {
			tagName: data.tagName,
			attributes: data.attributes,
			styles: styles.htmlOpenTag
		}), shouldInline(data) ? data.textContent : !expanded && "…", !expanded && /* @__PURE__ */ react.default.createElement(CloseTag, {
			tagName: data.tagName,
			styles: styles.htmlCloseTag
		}));
		case Node.TEXT_NODE: return /* @__PURE__ */ react.default.createElement("span", null, data.textContent);
		case Node.CDATA_SECTION_NODE: return /* @__PURE__ */ react.default.createElement("span", null, "<![CDATA[" + data.textContent + "]]>");
		case Node.COMMENT_NODE: return /* @__PURE__ */ react.default.createElement("span", { style: styles.htmlComment }, "<!--", data.textContent, "-->");
		case Node.PROCESSING_INSTRUCTION_NODE: return /* @__PURE__ */ react.default.createElement("span", null, data.nodeName);
		case Node.DOCUMENT_TYPE_NODE: return /* @__PURE__ */ react.default.createElement("span", { style: styles.htmlDoctype }, "<!DOCTYPE ", data.name, data.publicId ? ` PUBLIC "${data.publicId}"` : "", !data.publicId && data.systemId ? " SYSTEM" : "", data.systemId ? ` "${data.systemId}"` : "", ">");
		case Node.DOCUMENT_NODE: return /* @__PURE__ */ react.default.createElement("span", null, data.nodeName);
		case Node.DOCUMENT_FRAGMENT_NODE: return /* @__PURE__ */ react.default.createElement("span", null, data.nodeName);
		default: return /* @__PURE__ */ react.default.createElement("span", null, nameByNodeType[data.nodeType]);
	}
};
var domIterator = function* (data) {
	if (data && data.childNodes) {
		const textInlined = shouldInline(data);
		if (textInlined) return;
		for (let i = 0; i < data.childNodes.length; i++) {
			const node = data.childNodes[i];
			if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0) continue;
			yield {
				name: `${node.tagName}[${i}]`,
				data: node
			};
		}
		if (data.tagName) yield {
			name: "CLOSE_TAG",
			data: { tagName: data.tagName },
			isCloseTag: true
		};
	}
};
var DOMInspector = (props) => {
	return /* @__PURE__ */ react.default.createElement(TreeView, {
		nodeRenderer: DOMNodePreview,
		dataIterator: domIterator,
		...props
	});
};
var themedDOMInspector = themeAcceptor(DOMInspector);
var import_is_dom = __toESM$1(require_is_dom());
var Inspector$1 = ({ table = false, data,...rest }) => {
	if (table) return /* @__PURE__ */ react.default.createElement(themedTableInspector, {
		data,
		...rest
	});
	if ((0, import_is_dom.default)(data)) return /* @__PURE__ */ react.default.createElement(themedDOMInspector, {
		data,
		...rest
	});
	return /* @__PURE__ */ react.default.createElement(themedObjectInspector, {
		data,
		...rest
	});
};

//#endregion
//#region src/experiments/inspect.tsx
const useImperativeHandlePolyfill = (ref, init, deps) => {
	(0, react.useEffect)(() => {
		if (ref) {
			if (typeof ref === "function") ref(init());
			else if (typeof ref === "object" && "current" in ref) ref.current = init();
		}
	}, deps);
};
const useImperativeHandle = react.useImperativeHandle || useImperativeHandlePolyfill;
const throttle = (fn, wait) => {
	let timeout = null;
	return function() {
		if (!timeout) timeout = setTimeout(() => {
			fn.apply(this, arguments);
			timeout = null;
		}, wait);
	};
};
const theme = {
	BASE_FONT_FAMILY: "Menlo, monospace",
	BASE_FONT_SIZE: "12px",
	BASE_LINE_HEIGHT: 1.2,
	BASE_BACKGROUND_COLOR: "none",
	BASE_COLOR: "#FFF",
	OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
	OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
	OBJECT_NAME_COLOR: "#FFC799",
	OBJECT_VALUE_NULL_COLOR: "#A0A0A0",
	OBJECT_VALUE_UNDEFINED_COLOR: "#A0A0A0",
	OBJECT_VALUE_REGEXP_COLOR: "#FF8080",
	OBJECT_VALUE_STRING_COLOR: "#99FFE4",
	OBJECT_VALUE_SYMBOL_COLOR: "#FFC799",
	OBJECT_VALUE_NUMBER_COLOR: "#FFC799",
	OBJECT_VALUE_BOOLEAN_COLOR: "#FFC799",
	OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "#FFC799",
	HTML_TAG_COLOR: "#FFC799",
	HTML_TAGNAME_COLOR: "#FFC799",
	HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
	HTML_ATTRIBUTE_NAME_COLOR: "#A0A0A0",
	HTML_ATTRIBUTE_VALUE_COLOR: "#99FFE4",
	HTML_COMMENT_COLOR: "#8b8b8b94",
	HTML_DOCTYPE_COLOR: "#A0A0A0",
	ARROW_COLOR: "#A0A0A0",
	ARROW_MARGIN_RIGHT: 3,
	ARROW_FONT_SIZE: 12,
	ARROW_ANIMATION_DURATION: "0",
	TREENODE_FONT_FAMILY: "Menlo, monospace",
	TREENODE_FONT_SIZE: "11px",
	TREENODE_LINE_HEIGHT: 1.2,
	TREENODE_PADDING_LEFT: 12,
	TABLE_BORDER_COLOR: "#282828",
	TABLE_TH_BACKGROUND_COLOR: "#161616",
	TABLE_TH_HOVER_COLOR: "#232323",
	TABLE_SORT_ICON_COLOR: "#A0A0A0",
	TABLE_DATA_BACKGROUND_IMAGE: "none",
	TABLE_DATA_BACKGROUND_SIZE: "0"
};
const RawInspector = (0, react.forwardRef)(({ enabled = true, dangerouslyRunInProduction = false }, ref) => {
	const [element, setElement] = (0, react.useState)(null);
	const [currentFiber, setCurrentFiber] = (0, react.useState)(null);
	const [currentFiberSource, setCurrentFiberSource] = (0, react.useState)(null);
	const [rect, setRect] = (0, react.useState)(null);
	const [isActive, setIsActive] = (0, react.useState)(true);
	const [isEnabled, setIsEnabled] = (0, react.useState)(enabled);
	const [position, setPosition] = (0, react.useState)({
		top: 0,
		left: 0
	});
	const currentCleanedFiber = (0, react.useMemo)(() => {
		if (!currentFiber) return null;
		const clonedFiber = { ...currentFiber };
		for (const key in clonedFiber) {
			const value = clonedFiber[key];
			if (!value) delete clonedFiber[key];
		}
		return clonedFiber;
	}, [currentFiber]);
	useImperativeHandle(ref, () => ({
		enable: () => setIsEnabled(true),
		disable: () => {
			setIsEnabled(false);
			setElement(null);
			setRect(null);
		},
		inspectElement: (element$1) => {
			if (!isEnabled) return;
			setElement(element$1);
			setRect(element$1.getBoundingClientRect());
		}
	}));
	(0, react.useEffect)(() => {
		(async () => {
			if (!element) return;
			const fiber = require_core.getFiberFromHostInstance(element);
			if (!fiber) return;
			const latestFiber = require_core.getLatestFiber(fiber);
			const source = await require_source.getFiberSource(latestFiber);
			setCurrentFiber(latestFiber);
			if (source) setCurrentFiberSource(source);
		})();
	}, [element]);
	(0, react.useEffect)(() => {
		const handleMouseMove = (event) => {
			const isActive$1 = require_core.isInstrumentationActive() || require_core.hasRDTHook();
			if (!isActive$1) {
				setIsActive(false);
				return;
			}
			if (!dangerouslyRunInProduction) {
				const rdtHook = require_core.getRDTHook();
				for (const renderer of rdtHook.renderers.values()) {
					const buildType = require_core.detectReactBuildType(renderer);
					if (buildType === "production") {
						setIsActive(false);
						return;
					}
				}
			}
			if (!isEnabled) {
				setElement(null);
				setRect(null);
				return;
			}
			const element$1 = document.elementFromPoint(event.clientX, event.clientY);
			if (!element$1) return;
			setElement(element$1);
			setRect(element$1.getBoundingClientRect());
		};
		const throttledMouseMove = throttle(handleMouseMove, 16);
		document.addEventListener("mousemove", throttledMouseMove);
		return () => document.removeEventListener("mousemove", throttledMouseMove);
	}, [isEnabled, dangerouslyRunInProduction]);
	(0, react.useEffect)(() => {
		if (!rect) return;
		const padding = 10;
		const inspectorWidth = 400;
		const inspectorHeight = 320;
		let left = rect.left + rect.width + padding;
		let top = rect.top;
		if (left + inspectorWidth > window.innerWidth) left = Math.max(padding, rect.left - inspectorWidth - padding);
		if (top >= rect.top && top <= rect.bottom) if (rect.bottom + inspectorHeight + padding <= window.innerHeight) top = rect.bottom + padding;
		else if (rect.top - inspectorHeight - padding >= 0) top = rect.top - inspectorHeight - padding;
		else top = window.innerHeight - inspectorHeight - padding;
		top = Math.max(padding, Math.min(top, window.innerHeight - inspectorHeight - padding));
		left = Math.max(padding, Math.min(left, window.innerWidth - inspectorWidth - padding));
		setPosition({
			top,
			left
		});
	}, [rect]);
	if (!rect || !isActive || !isEnabled) return null;
	if (!currentFiber) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "inspector-container",
			style: {
				position: "fixed",
				backgroundColor: "#101010",
				color: "#FFF",
				zIndex: 50,
				padding: "1rem",
				width: "30ch",
				height: "25ch",
				transition: "all 150ms ease-in-out",
				overflow: "auto",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
				border: "1px solid #444",
				borderRadius: "8px",
				opacity: rect ? 1 : 0,
				transform: rect ? "translateY(0)" : "translateY(10px)",
				pointerEvents: rect ? "auto" : "none",
				top: position.top,
				left: position.left
			},
			children: [currentFiber && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Inspector$1, {
				theme,
				data: currentCleanedFiber,
				expandLevel: 1,
				table: false
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					position: "absolute",
					bottom: "0",
					left: "0",
					right: "0",
					display: "flex",
					alignItems: "center",
					gap: "1rem",
					backgroundColor: "#101010",
					padding: "0.75rem 1rem",
					borderTop: "1px solid #555",
					borderBottomLeftRadius: "8px",
					borderBottomRightRadius: "8px",
					zIndex: 1e3
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					style: {
						fontSize: "0.875rem",
						color: "#FFF",
						padding: "0.25rem 0.5rem",
						borderRadius: "4px",
						backgroundColor: "#3a3a3a"
					},
					children: `<${require_core.getDisplayName(currentFiber.type) || "unknown"}>`
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					style: {
						fontSize: "0.75rem",
						color: "#CCC"
					},
					children: currentFiberSource ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						currentFiberSource.fileName.split("/").slice(-2).join("/"),
						" ",
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("br", {}),
						"@ line ",
						currentFiberSource.lineNumber,
						", column",
						" ",
						currentFiberSource.columnNumber
					] }) : null
				})]
			})]
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", { children: `
          .inspector-container::-webkit-scrollbar {
            width: 8px;
          }
          .inspector-container::-webkit-scrollbar-track {
            background: #1E1E1E;
            border-radius: 8px;
          }
          .inspector-container::-webkit-scrollbar-thumb {
            background: #444;
            border-radius: 8px;
          }
          .inspector-container::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        ` }),
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
			position: "fixed",
			zIndex: 40,
			pointerEvents: "none",
			transition: "all 150ms",
			border: "1px dashed #505050",
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height,
			opacity: rect ? 1 : 0
		} })
	] });
});
const Inspector = (0, react.forwardRef)((props, ref) => {
	const [root, setRoot] = (0, react.useState)(null);
	(0, react.useEffect)(() => {
		const div = document.createElement("div");
		document.documentElement.appendChild(div);
		const shadowRoot = div.attachShadow({ mode: "open" });
		setRoot(shadowRoot);
		return () => {
			document.documentElement.removeChild(div);
		};
	}, []);
	if (!root) return null;
	return react_dom.default.createPortal(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RawInspector, {
		ref,
		...props
	}), root);
});
var inspect_default = Inspector;

//#endregion
exports.Inspector = Inspector;
exports.RawInspector = RawInspector;
exports.default = inspect_default;