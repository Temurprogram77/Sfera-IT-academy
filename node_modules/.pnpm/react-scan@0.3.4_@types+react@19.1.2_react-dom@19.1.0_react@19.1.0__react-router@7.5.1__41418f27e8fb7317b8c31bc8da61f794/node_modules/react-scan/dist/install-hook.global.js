'use client';
!function(t){"use strict";var e="bippy-0.3.8",n=Object.defineProperty,i=Object.prototype.hasOwnProperty,r=()=>{},o=t=>{try{Function.prototype.toString.call(t).indexOf("^_^")>-1&&setTimeout((()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")}))}catch{}},c=!1,s=void 0,a=(t=p())=>!!c||("function"==typeof t.inject&&(s=t.inject.toString()),Boolean(s?.includes("(injected)"))),_=new Set,u=t=>{const i=new Map;let c=0,s={checkDCE:o,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:i,onCommitFiberRoot:r,onCommitFiberUnmount:r,onPostCommitFiberRoot:r,inject(t){const e=++c;return i.set(e,t),s._instrumentationIsActive||(s._instrumentationIsActive=!0,_.forEach((t=>t()))),e},_instrumentationSource:e,_instrumentationIsActive:!1};try{n(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get:()=>s,set(e){if(e&&"object"==typeof e){const n=s.renderers;s=e,n.size>0&&(n.forEach(((t,n)=>{e.renderers.set(n,t)})),d(t))}},configurable:!0,enumerable:!0});const e=window.hasOwnProperty;let i=!1;n(window,"hasOwnProperty",{value:function(){try{return i||"__REACT_DEVTOOLS_GLOBAL_HOOK__"!==arguments[0]?e.apply(this,arguments):(globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,i=!0,-0)}catch{return e.apply(this,arguments)}},configurable:!0,writable:!0})}catch{d(t)}return s},d=t=>{t&&_.add(t);try{const n=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!n)return;if(!n._instrumentationSource){if(n.checkDCE=o,n.supportsFiber=!0,n.supportsFlight=!0,n.hasUnsupportedRendererAttached=!1,n._instrumentationSource=e,n._instrumentationIsActive=!1,n.renderers.size)return n._instrumentationIsActive=!0,void _.forEach((t=>t()));const t=n.inject;if(a(n)&&!((t=p())=>"getFiberRoots"in t)()){c=!0;n.inject({scheduleRefresh(){}})&&(n._instrumentationIsActive=!0)}n.inject=e=>{const i=t(e);return n._instrumentationIsActive=!0,_.forEach((t=>t())),i}}(n.renderers.size||n._instrumentationIsActive||a())&&t?.()}catch{}},p=t=>i.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__")?(d(t),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):u(t);(()=>{try{Boolean("undefined"!=typeof window&&(window.document?.createElement||"ReactNative"===window.navigator?.product))&&p()}catch{}})(),
/*! Bundled license information:

  bippy/dist/chunk-UTLFO7LL.js:
    (**
     * @license bippy
     *
     * Copyright (c) Aiden Bai, Million Software, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)

  bippy/dist/chunk-ELVWOSDS.js:
    (**
     * @license bippy
     *
     * Copyright (c) Aiden Bai, Million Software, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)

  bippy/dist/chunk-EPG3GO3H.js:
    (**
     * @license bippy
     *
     * Copyright (c) Aiden Bai, Million Software, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)
  */
t.init=p}({});