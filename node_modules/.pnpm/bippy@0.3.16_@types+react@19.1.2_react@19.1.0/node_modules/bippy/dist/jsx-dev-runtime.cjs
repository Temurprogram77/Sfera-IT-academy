/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const require_chunk = require('./chunk-DWy1uDak.cjs');
const react_jsx_dev_runtime = require_chunk.__toESM(require("react/jsx-dev-runtime"));

//#region src/jsx-dev-runtime.ts
const jsxDEV = (type, originalProps, key, isStatic, source, self) => {
	let props = originalProps;
	try {
		if (originalProps && typeof originalProps === "object" && source && String(type) !== "Symbol(react.fragment)") props = {
			...originalProps,
			"data-react-source": `${source.fileName}:${source.lineNumber}:${source.columnNumber}`
		};
	} catch {}
	return (0, react_jsx_dev_runtime.jsxDEV)(type, props, key, isStatic, source, self);
};

//#endregion
exports.Fragment = react_jsx_dev_runtime.Fragment;
exports.jsxDEV = jsxDEV;
Object.keys(react_jsx_dev_runtime).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react_jsx_dev_runtime[k]; }
  });
});
