/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const require_core = require('./core-BS9Kf-6A.cjs');
require('./src-8X9f2vzK.cjs');
const require_source = require('./source-CpUl2rbU.cjs');

exports.BIPPY_INSTRUMENTATION_STRING = require_core.BIPPY_INSTRUMENTATION_STRING;
exports.CONCURRENT_MODE_NUMBER = require_core.CONCURRENT_MODE_NUMBER;
exports.CONCURRENT_MODE_SYMBOL_STRING = require_core.CONCURRENT_MODE_SYMBOL_STRING;
exports.ClassComponentTag = require_core.ClassComponentTag;
exports.ContextConsumerTag = require_core.ContextConsumerTag;
exports.DEPRECATED_ASYNC_MODE_SYMBOL_STRING = require_core.DEPRECATED_ASYNC_MODE_SYMBOL_STRING;
exports.DehydratedSuspenseComponentTag = require_core.DehydratedSuspenseComponentTag;
exports.ELEMENT_TYPE_SYMBOL_STRING = require_core.ELEMENT_TYPE_SYMBOL_STRING;
exports.ForwardRefTag = require_core.ForwardRefTag;
exports.FragmentTag = require_core.FragmentTag;
exports.FunctionComponentTag = require_core.FunctionComponentTag;
exports.HostComponentTag = require_core.HostComponentTag;
exports.HostHoistableTag = require_core.HostHoistableTag;
exports.HostRootTag = require_core.HostRootTag;
exports.HostSingletonTag = require_core.HostSingletonTag;
exports.HostTextTag = require_core.HostTextTag;
exports.INSTALL_ERROR = require_core.INSTALL_ERROR;
exports.INSTALL_HOOK_SCRIPT_STRING = require_core.INSTALL_HOOK_SCRIPT_STRING;
exports.LegacyHiddenComponentTag = require_core.LegacyHiddenComponentTag;
exports.MemoComponentTag = require_core.MemoComponentTag;
exports.OffscreenComponentTag = require_core.OffscreenComponentTag;
exports.SimpleMemoComponentTag = require_core.SimpleMemoComponentTag;
exports.SuspenseComponentTag = require_core.SuspenseComponentTag;
exports.TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING = require_core.TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING;
exports._fiberRoots = require_core._fiberRoots;
exports._renderers = require_core._renderers;
exports.createFiberVisitor = require_core.createFiberVisitor;
exports.detectReactBuildType = require_core.detectReactBuildType;
exports.didFiberCommit = require_core.didFiberCommit;
exports.didFiberRender = require_core.didFiberRender;
exports.fiberIdMap = require_core.fiberIdMap;
exports.getCurrentDispatcher = require_source.getCurrentDispatcher;
exports.getDisplayName = require_core.getDisplayName;
exports.getFiberFromHostInstance = require_core.getFiberFromHostInstance;
exports.getFiberId = require_core.getFiberId;
exports.getFiberSource = require_source.getFiberSource;
exports.getFiberStack = require_core.getFiberStack;
exports.getLatestFiber = require_core.getLatestFiber;
exports.getMutatedHostFibers = require_core.getMutatedHostFibers;
exports.getNearestHostFiber = require_core.getNearestHostFiber;
exports.getNearestHostFibers = require_core.getNearestHostFibers;
exports.getRDTHook = require_core.getRDTHook;
exports.getTimings = require_core.getTimings;
exports.getType = require_core.getType;
exports.hasMemoCache = require_core.hasMemoCache;
exports.hasRDTHook = require_core.hasRDTHook;
exports.installRDTHook = require_core.installRDTHook;
exports.instrument = require_core.instrument;
exports.isClientEnvironment = require_core.isClientEnvironment;
exports.isCompositeFiber = require_core.isCompositeFiber;
exports.isHostFiber = require_core.isHostFiber;
exports.isInstrumentationActive = require_core.isInstrumentationActive;
exports.isReactRefresh = require_core.isReactRefresh;
exports.isRealReactDevtools = require_core.isRealReactDevtools;
exports.isValidElement = require_core.isValidElement;
exports.isValidFiber = require_core.isValidFiber;
exports.mountFiberRecursively = require_core.mountFiberRecursively;
exports.onCommitFiberRoot = require_core.onCommitFiberRoot;
exports.patchRDTHook = require_core.patchRDTHook;
exports.safelyInstallRDTHook = require_core.safelyInstallRDTHook;
exports.secure = require_core.secure;
exports.setCurrentDispatcher = require_source.setCurrentDispatcher;
exports.setFiberId = require_core.setFiberId;
exports.shouldFilterFiber = require_core.shouldFilterFiber;
exports.traverseContexts = require_core.traverseContexts;
exports.traverseFiber = require_core.traverseFiber;
exports.traverseProps = require_core.traverseProps;
exports.traverseRenderedFibers = require_core.traverseRenderedFibers;
exports.traverseState = require_core.traverseState;
exports.unmountFiber = require_core.unmountFiber;
exports.unmountFiberChildrenRecursively = require_core.unmountFiberChildrenRecursively;
exports.updateFiberRecursively = require_core.updateFiberRecursively;
exports.version = require_core.version;