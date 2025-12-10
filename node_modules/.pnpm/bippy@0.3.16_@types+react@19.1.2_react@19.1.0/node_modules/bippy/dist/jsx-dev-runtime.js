/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, jsxDEV as jsxDEV$1 } from "react/jsx-dev-runtime";

export * from "react/jsx-dev-runtime"

//#region src/jsx-dev-runtime.ts
const jsxDEV = (type, originalProps, key, isStatic, source, self) => {
	let props = originalProps;
	try {
		if (originalProps && typeof originalProps === "object" && source && String(type) !== "Symbol(react.fragment)") props = {
			...originalProps,
			"data-react-source": `${source.fileName}:${source.lineNumber}:${source.columnNumber}`
		};
	} catch {}
	return jsxDEV$1(type, props, key, isStatic, source, self);
};

//#endregion
export { Fragment, jsxDEV };