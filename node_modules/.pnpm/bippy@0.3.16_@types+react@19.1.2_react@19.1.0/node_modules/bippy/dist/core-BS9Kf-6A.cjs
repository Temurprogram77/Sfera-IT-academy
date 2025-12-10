/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//#region src/rdt-hook.ts
const version = "0.3.16";
const BIPPY_INSTRUMENTATION_STRING = `bippy-${version}`;
const objectDefineProperty = Object.defineProperty;
const objectHasOwnProperty = Object.prototype.hasOwnProperty;
const NO_OP = () => {};
const checkDCE = (fn) => {
	try {
		const code = Function.prototype.toString.call(fn);
		if (code.indexOf("^_^") > -1) setTimeout(() => {
			throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build");
		});
	} catch {}
};
const isRealReactDevtools = (rdtHook = getRDTHook()) => {
	return "getFiberRoots" in rdtHook;
};
let isReactRefreshOverride = false;
let injectFnStr = void 0;
const isReactRefresh = (rdtHook = getRDTHook()) => {
	if (isReactRefreshOverride) return true;
	if (typeof rdtHook.inject === "function") injectFnStr = rdtHook.inject.toString();
	return Boolean(injectFnStr?.includes("(injected)"));
};
const onActiveListeners = new Set();
const _renderers = new Set();
const installRDTHook = (onActive) => {
	const renderers = new Map();
	let i = 0;
	let rdtHook = {
		checkDCE,
		supportsFiber: true,
		supportsFlight: true,
		hasUnsupportedRendererAttached: false,
		renderers,
		onCommitFiberRoot: NO_OP,
		onCommitFiberUnmount: NO_OP,
		onPostCommitFiberRoot: NO_OP,
		inject(renderer) {
			const nextID = ++i;
			renderers.set(nextID, renderer);
			_renderers.add(renderer);
			if (!rdtHook._instrumentationIsActive) {
				rdtHook._instrumentationIsActive = true;
				onActiveListeners.forEach((listener) => listener());
			}
			return nextID;
		},
		_instrumentationSource: BIPPY_INSTRUMENTATION_STRING,
		_instrumentationIsActive: false
	};
	try {
		objectDefineProperty(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
			get() {
				return rdtHook;
			},
			set(newHook) {
				if (newHook && typeof newHook === "object") {
					const ourRenderers = rdtHook.renderers;
					rdtHook = newHook;
					if (ourRenderers.size > 0) {
						ourRenderers.forEach((renderer, id) => {
							_renderers.add(renderer);
							newHook.renderers.set(id, renderer);
						});
						patchRDTHook(onActive);
					}
				}
			},
			configurable: true,
			enumerable: true
		});
		const originalWindowHasOwnProperty = window.hasOwnProperty;
		let hasRanHack = false;
		objectDefineProperty(window, "hasOwnProperty", {
			value: function() {
				try {
					if (!hasRanHack && arguments[0] === "__REACT_DEVTOOLS_GLOBAL_HOOK__") {
						globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__ = void 0;
						hasRanHack = true;
						return -0;
					}
				} catch {}
				return originalWindowHasOwnProperty.apply(this, arguments);
			},
			configurable: true,
			writable: true
		});
	} catch {
		patchRDTHook(onActive);
	}
	return rdtHook;
};
const patchRDTHook = (onActive) => {
	if (onActive) onActiveListeners.add(onActive);
	try {
		const rdtHook = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!rdtHook) return;
		if (!rdtHook._instrumentationSource) {
			rdtHook.checkDCE = checkDCE;
			rdtHook.supportsFiber = true;
			rdtHook.supportsFlight = true;
			rdtHook.hasUnsupportedRendererAttached = false;
			rdtHook._instrumentationSource = BIPPY_INSTRUMENTATION_STRING;
			rdtHook._instrumentationIsActive = false;
			if (rdtHook.renderers.size) {
				rdtHook._instrumentationIsActive = true;
				onActiveListeners.forEach((listener) => listener());
				return;
			}
			const prevInject = rdtHook.inject;
			if (isReactRefresh(rdtHook) && !isRealReactDevtools()) {
				isReactRefreshOverride = true;
				const nextID = rdtHook.inject({ scheduleRefresh() {} });
				if (nextID) rdtHook._instrumentationIsActive = true;
			}
			rdtHook.inject = (renderer) => {
				const id = prevInject(renderer);
				_renderers.add(renderer);
				rdtHook._instrumentationIsActive = true;
				onActiveListeners.forEach((listener) => listener());
				return id;
			};
		}
		if (rdtHook.renderers.size || rdtHook._instrumentationIsActive || isReactRefresh()) onActive?.();
	} catch {}
};
const hasRDTHook = () => {
	return objectHasOwnProperty.call(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__");
};
/**
* Returns the current React DevTools global hook.
*/
const getRDTHook = (onActive) => {
	if (!hasRDTHook()) return installRDTHook(onActive);
	patchRDTHook(onActive);
	return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
};
const isClientEnvironment = () => {
	return Boolean(typeof window !== "undefined" && (window.document?.createElement || window.navigator?.product === "ReactNative"));
};
/**
* Usually used purely for side effect
*/
const safelyInstallRDTHook = () => {
	try {
		if (isClientEnvironment()) getRDTHook();
	} catch {}
};

//#endregion
//#region src/install-hook-script-string.ts
const INSTALL_HOOK_SCRIPT_STRING = "(()=>{try{var t=()=>{};const n=new Map;let o=0;globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__={checkDCE:t,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:n,onCommitFiberRoot:t,onCommitFiberUnmount:t,onPostCommitFiberRoot:t,inject(t){var e=++o;return n.set(e,t),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__._instrumentationIsActive=!0,e},_instrumentationIsActive:!1,_script:!0}}catch{}})()";

//#endregion
//#region src/core.ts
const FunctionComponentTag = 0;
const ClassComponentTag = 1;
const HostRootTag = 3;
const HostComponentTag = 5;
const HostTextTag = 6;
const FragmentTag = 7;
const ContextConsumerTag = 9;
const ForwardRefTag = 11;
const SuspenseComponentTag = 13;
const MemoComponentTag = 14;
const SimpleMemoComponentTag = 15;
const DehydratedSuspenseComponentTag = 18;
const OffscreenComponentTag = 22;
const LegacyHiddenComponentTag = 23;
const HostHoistableTag = 26;
const HostSingletonTag = 27;
const CONCURRENT_MODE_NUMBER = 60111;
const ELEMENT_TYPE_SYMBOL_STRING = "Symbol(react.element)";
const TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING = "Symbol(react.transitional.element)";
const CONCURRENT_MODE_SYMBOL_STRING = "Symbol(react.concurrent_mode)";
const DEPRECATED_ASYNC_MODE_SYMBOL_STRING = "Symbol(react.async_mode)";
const PerformedWork = 1;
const Placement = 2;
const Hydrating = 4096;
const Update = 4;
const Cloned = 8;
const ChildDeletion = 16;
const ContentReset = 32;
const Snapshot = 1024;
const Visibility = 8192;
const MutationMask = Placement | Update | ChildDeletion | ContentReset | Hydrating | Visibility | Snapshot;
/**
* Returns `true` if object is a React Element.
*
* @see https://react.dev/reference/react/isValidElement
*/
const isValidElement = (element) => typeof element === "object" && element != null && "$$typeof" in element && [ELEMENT_TYPE_SYMBOL_STRING, TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING].includes(String(element.$$typeof));
/**
* Returns `true` if object is a React Fiber.
*/
const isValidFiber = (fiber) => typeof fiber === "object" && fiber != null && "tag" in fiber && "stateNode" in fiber && "return" in fiber && "child" in fiber && "sibling" in fiber && "flags" in fiber;
/**
* Returns `true` if fiber is a host fiber. Host fibers are DOM nodes in react-dom, `View` in react-native, etc.
*
* @see https://reactnative.dev/architecture/glossary#host-view-tree-and-host-view
*/
const isHostFiber = (fiber) => {
	switch (fiber.tag) {
		case HostComponentTag:
		case HostHoistableTag:
		case HostSingletonTag: return true;
		default: return typeof fiber.type === "string";
	}
};
/**
* Returns `true` if fiber is a composite fiber. Composite fibers are fibers that can render (like functional components, class components, etc.)
*
* @see https://reactnative.dev/architecture/glossary#react-composite-components
*/
const isCompositeFiber = (fiber) => {
	switch (fiber.tag) {
		case FunctionComponentTag:
		case ClassComponentTag:
		case SimpleMemoComponentTag:
		case MemoComponentTag:
		case ForwardRefTag: return true;
		default: return false;
	}
};
/**
* Traverses up or down a {@link Fiber}'s contexts, return `true` to stop and select the current and previous context value.
*/
const traverseContexts = (fiber, selector) => {
	try {
		const nextDependencies = fiber.dependencies;
		const prevDependencies = fiber.alternate?.dependencies;
		if (!nextDependencies || !prevDependencies) return false;
		if (typeof nextDependencies !== "object" || !("firstContext" in nextDependencies) || typeof prevDependencies !== "object" || !("firstContext" in prevDependencies)) return false;
		let nextContext = nextDependencies.firstContext;
		let prevContext = prevDependencies.firstContext;
		while (nextContext && typeof nextContext === "object" && "memoizedValue" in nextContext || prevContext && typeof prevContext === "object" && "memoizedValue" in prevContext) {
			if (selector(nextContext, prevContext) === true) return true;
			nextContext = nextContext?.next;
			prevContext = prevContext?.next;
		}
	} catch {}
	return false;
};
/**
* Traverses up or down a {@link Fiber}'s states, return `true` to stop and select the current and previous state value. This stores both state values and effects.
*/
const traverseState = (fiber, selector) => {
	try {
		let nextState = fiber.memoizedState;
		let prevState = fiber.alternate?.memoizedState;
		while (nextState || prevState) {
			if (selector(nextState, prevState) === true) return true;
			nextState = nextState?.next;
			prevState = prevState?.next;
		}
	} catch {}
	return false;
};
/**
* Traverses up or down a {@link Fiber}'s props, return `true` to stop and select the current and previous props value.
*/
const traverseProps = (fiber, selector) => {
	try {
		const nextProps = fiber.memoizedProps;
		const prevProps = fiber.alternate?.memoizedProps || {};
		const allKeys = new Set([...Object.keys(prevProps), ...Object.keys(nextProps)]);
		for (const propName of allKeys) {
			const prevValue = prevProps?.[propName];
			const nextValue = nextProps?.[propName];
			if (selector(propName, nextValue, prevValue) === true) return true;
		}
	} catch {}
	return false;
};
/**
* Returns `true` if the {@link Fiber} has rendered. Note that this does not mean the fiber has rendered in the current commit, just that it has rendered in the past.
*/
const didFiberRender = (fiber) => {
	const nextProps = fiber.memoizedProps;
	const prevProps = fiber.alternate?.memoizedProps || {};
	const flags = fiber.flags ?? fiber.effectTag ?? 0;
	switch (fiber.tag) {
		case ClassComponentTag:
		case FunctionComponentTag:
		case ContextConsumerTag:
		case ForwardRefTag:
		case MemoComponentTag:
		case SimpleMemoComponentTag: return (flags & PerformedWork) === PerformedWork;
		default:
			if (!fiber.alternate) return true;
			return prevProps !== nextProps || fiber.alternate.memoizedState !== fiber.memoizedState || fiber.alternate.ref !== fiber.ref;
	}
};
/**
* Returns `true` if the {@link Fiber} has committed. Note that this does not mean the fiber has committed in the current commit, just that it has committed in the past.
*/
const didFiberCommit = (fiber) => {
	return Boolean((fiber.flags & (MutationMask | Cloned)) !== 0 || (fiber.subtreeFlags & (MutationMask | Cloned)) !== 0);
};
/**
* Returns all host {@link Fiber}s that have committed and rendered.
*/
const getMutatedHostFibers = (fiber) => {
	const mutations = [];
	const stack = [fiber];
	while (stack.length) {
		const node = stack.pop();
		if (!node) continue;
		if (isHostFiber(node) && didFiberCommit(node) && didFiberRender(node)) mutations.push(node);
		if (node.child) stack.push(node.child);
		if (node.sibling) stack.push(node.sibling);
	}
	return mutations;
};
/**
* Returns the stack of {@link Fiber}s from the current fiber to the root fiber.
*
* @example
* ```ts
* [fiber, fiber.return, fiber.return.return, ...]
* ```
*/
const getFiberStack = (fiber) => {
	const stack = [];
	let currentFiber = fiber;
	while (currentFiber.return) {
		stack.push(currentFiber);
		currentFiber = currentFiber.return;
	}
	return stack;
};
/**
* Returns `true` if the {@link Fiber} should be filtered out during reconciliation.
*/
const shouldFilterFiber = (fiber) => {
	switch (fiber.tag) {
		case DehydratedSuspenseComponentTag: return true;
		case HostTextTag:
		case FragmentTag:
		case LegacyHiddenComponentTag:
		case OffscreenComponentTag: return true;
		case HostRootTag: return false;
		default: {
			const symbolOrNumber = typeof fiber.type === "object" && fiber.type !== null ? fiber.type.$$typeof : fiber.type;
			const typeSymbol = typeof symbolOrNumber === "symbol" ? symbolOrNumber.toString() : symbolOrNumber;
			switch (typeSymbol) {
				case CONCURRENT_MODE_NUMBER:
				case CONCURRENT_MODE_SYMBOL_STRING:
				case DEPRECATED_ASYNC_MODE_SYMBOL_STRING: return true;
				default: return false;
			}
		}
	}
};
/**
* Returns the nearest host {@link Fiber} to the current {@link Fiber}.
*/
const getNearestHostFiber = (fiber, ascending = false) => {
	let hostFiber = traverseFiber(fiber, isHostFiber, ascending);
	if (!hostFiber) hostFiber = traverseFiber(fiber, isHostFiber, !ascending);
	return hostFiber;
};
/**
* Returns all host {@link Fiber}s in the tree that are associated with the current {@link Fiber}.
*/
const getNearestHostFibers = (fiber) => {
	const hostFibers = [];
	const stack = [];
	if (isHostFiber(fiber)) hostFibers.push(fiber);
	else if (fiber.child) stack.push(fiber.child);
	while (stack.length) {
		const currentNode = stack.pop();
		if (!currentNode) break;
		if (isHostFiber(currentNode)) hostFibers.push(currentNode);
		else if (currentNode.child) stack.push(currentNode.child);
		if (currentNode.sibling) stack.push(currentNode.sibling);
	}
	return hostFibers;
};
/**
* Traverses up or down a {@link Fiber}, return `true` to stop and select a node.
*/
const traverseFiber = (fiber, selector, ascending = false) => {
	if (!fiber) return null;
	if (selector(fiber) === true) return fiber;
	let child = ascending ? fiber.return : fiber.child;
	while (child) {
		const match = traverseFiber(child, selector, ascending);
		if (match) return match;
		child = ascending ? null : child.sibling;
	}
	return null;
};
/**
* Returns the timings of the {@link Fiber}.
*
* @example
* ```ts
* const { selfTime, totalTime } = getTimings(fiber);
* console.log(selfTime, totalTime);
* ```
*/
const getTimings = (fiber) => {
	const totalTime = fiber?.actualDuration ?? 0;
	let selfTime = totalTime;
	let child = fiber?.child ?? null;
	while (totalTime > 0 && child != null) {
		selfTime -= child.actualDuration ?? 0;
		child = child.sibling;
	}
	return {
		selfTime,
		totalTime
	};
};
/**
* Returns `true` if the {@link Fiber} uses React Compiler's memo cache.
*/
const hasMemoCache = (fiber) => {
	return Boolean(fiber.updateQueue?.memoCache);
};
/**
* Returns the type (e.g. component definition) of the {@link Fiber}
*/
const getType = (type) => {
	const currentType = type;
	if (typeof currentType === "function") return currentType;
	if (typeof currentType === "object" && currentType) return getType(currentType.type || currentType.render);
	return null;
};
/**
* Returns the display name of the {@link Fiber} type.
*/
const getDisplayName = (type) => {
	const currentType = type;
	if (typeof currentType === "string") return currentType;
	if (typeof currentType !== "function" && !(typeof currentType === "object" && currentType)) return null;
	const name = currentType.displayName || currentType.name || null;
	if (name) return name;
	const unwrappedType = getType(currentType);
	if (!unwrappedType) return null;
	return unwrappedType.displayName || unwrappedType.name || null;
};
/**
* Returns the build type of the React renderer.
*/
const detectReactBuildType = (renderer) => {
	try {
		if (typeof renderer.version === "string" && renderer.bundleType > 0) return "development";
	} catch {}
	return "production";
};
/**
* Returns `true` if bippy's instrumentation is active.
*/
const isInstrumentationActive = () => {
	const rdtHook = getRDTHook();
	return Boolean(rdtHook._instrumentationIsActive) || isRealReactDevtools() || isReactRefresh();
};
/**
* Returns the latest fiber (since it may be double-buffered).
*/
const getLatestFiber = (fiber) => {
	const alternate = fiber.alternate;
	if (!alternate) return fiber;
	if (alternate.actualStartTime && fiber.actualStartTime) return alternate.actualStartTime > fiber.actualStartTime ? alternate : fiber;
	for (const root of _fiberRoots) {
		const latestFiber = traverseFiber(root.current, (innerFiber) => {
			if (innerFiber === fiber) return true;
		});
		if (latestFiber) return latestFiber;
	}
	return fiber;
};
let fiberId = 0;
const fiberIdMap = new WeakMap();
const setFiberId = (fiber, id = fiberId++) => {
	fiberIdMap.set(fiber, id);
};
const getFiberId = (fiber) => {
	let id = fiberIdMap.get(fiber);
	if (!id && fiber.alternate) id = fiberIdMap.get(fiber.alternate);
	if (!id) {
		id = fiberId++;
		setFiberId(fiber, id);
	}
	return id;
};
const mountFiberRecursively = (onRender, firstChild, traverseSiblings) => {
	let fiber = firstChild;
	while (fiber != null) {
		if (!fiberIdMap.has(fiber)) getFiberId(fiber);
		const shouldIncludeInTree = !shouldFilterFiber(fiber);
		if (shouldIncludeInTree && didFiberRender(fiber)) onRender(fiber, "mount");
		if (fiber.tag === SuspenseComponentTag) {
			const isTimedOut = fiber.memoizedState !== null;
			if (isTimedOut) {
				const primaryChildFragment = fiber.child;
				const fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
				if (fallbackChildFragment) {
					const fallbackChild = fallbackChildFragment.child;
					if (fallbackChild !== null) mountFiberRecursively(onRender, fallbackChild, false);
				}
			} else {
				let primaryChild = null;
				const areSuspenseChildrenConditionallyWrapped = OffscreenComponentTag === -1;
				if (areSuspenseChildrenConditionallyWrapped) primaryChild = fiber.child;
				else if (fiber.child !== null) primaryChild = fiber.child.child;
				if (primaryChild !== null) mountFiberRecursively(onRender, primaryChild, false);
			}
		} else if (fiber.child != null) mountFiberRecursively(onRender, fiber.child, true);
		fiber = traverseSiblings ? fiber.sibling : null;
	}
};
const updateFiberRecursively = (onRender, nextFiber, prevFiber, parentFiber) => {
	if (!fiberIdMap.has(nextFiber)) getFiberId(nextFiber);
	if (!prevFiber) return;
	if (!fiberIdMap.has(prevFiber)) getFiberId(prevFiber);
	const isSuspense = nextFiber.tag === SuspenseComponentTag;
	const shouldIncludeInTree = !shouldFilterFiber(nextFiber);
	if (shouldIncludeInTree && didFiberRender(nextFiber)) onRender(nextFiber, "update");
	const prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
	const nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null;
	if (prevDidTimeout && nextDidTimeOut) {
		const nextFallbackChildSet = nextFiber.child?.sibling ?? null;
		const prevFallbackChildSet = prevFiber.child?.sibling ?? null;
		if (nextFallbackChildSet !== null && prevFallbackChildSet !== null) updateFiberRecursively(onRender, nextFallbackChildSet, prevFallbackChildSet, nextFiber);
	} else if (prevDidTimeout && !nextDidTimeOut) {
		const nextPrimaryChildSet = nextFiber.child;
		if (nextPrimaryChildSet !== null) mountFiberRecursively(onRender, nextPrimaryChildSet, true);
	} else if (!prevDidTimeout && nextDidTimeOut) {
		unmountFiberChildrenRecursively(onRender, prevFiber);
		const nextFallbackChildSet = nextFiber.child?.sibling ?? null;
		if (nextFallbackChildSet !== null) mountFiberRecursively(onRender, nextFallbackChildSet, true);
	} else if (nextFiber.child !== prevFiber.child) {
		let nextChild = nextFiber.child;
		while (nextChild) {
			if (nextChild.alternate) {
				const prevChild = nextChild.alternate;
				updateFiberRecursively(onRender, nextChild, prevChild, shouldIncludeInTree ? nextFiber : parentFiber);
			} else mountFiberRecursively(onRender, nextChild, false);
			nextChild = nextChild.sibling;
		}
	}
};
const unmountFiber = (onRender, fiber) => {
	const isRoot = fiber.tag === HostRootTag;
	if (isRoot || !shouldFilterFiber(fiber)) onRender(fiber, "unmount");
};
const unmountFiberChildrenRecursively = (onRender, fiber) => {
	const isTimedOutSuspense = fiber.tag === SuspenseComponentTag && fiber.memoizedState !== null;
	let child = fiber.child;
	if (isTimedOutSuspense) {
		const primaryChildFragment = fiber.child;
		const fallbackChildFragment = primaryChildFragment?.sibling ?? null;
		child = fallbackChildFragment?.child ?? null;
	}
	while (child !== null) {
		if (child.return !== null) {
			unmountFiber(onRender, child);
			unmountFiberChildrenRecursively(onRender, child);
		}
		child = child.sibling;
	}
};
let commitId = 0;
const rootInstanceMap = new WeakMap();
/**
* Creates a fiber visitor function. Must pass a fiber root and a render handler.
* @example
* traverseRenderedFibers(root, (fiber, phase) => {
*   console.log(phase)
* })
*/
const traverseRenderedFibers = (root, onRender) => {
	const fiber = "current" in root ? root.current : root;
	let rootInstance = rootInstanceMap.get(root);
	if (!rootInstance) {
		rootInstance = {
			prevFiber: null,
			id: commitId++
		};
		rootInstanceMap.set(root, rootInstance);
	}
	const { prevFiber } = rootInstance;
	if (!fiber) unmountFiber(onRender, fiber);
	else if (prevFiber !== null) {
		const wasMounted = prevFiber && prevFiber.memoizedState != null && prevFiber.memoizedState.element != null && prevFiber.memoizedState.isDehydrated !== true;
		const isMounted = fiber.memoizedState != null && fiber.memoizedState.element != null && fiber.memoizedState.isDehydrated !== true;
		if (!wasMounted && isMounted) mountFiberRecursively(onRender, fiber, false);
		else if (wasMounted && isMounted) updateFiberRecursively(onRender, fiber, fiber.alternate, null);
		else if (wasMounted && !isMounted) unmountFiber(onRender, fiber);
	} else mountFiberRecursively(onRender, fiber, true);
	rootInstance.prevFiber = fiber;
};
/**
* @deprecated use `traverseRenderedFibers` instead
*/
const createFiberVisitor = ({ onRender }) => {
	return (_rendererID, root, _state) => {
		traverseRenderedFibers(root, onRender);
	};
};
/**
* Instruments the DevTools hook.
* @example
* const hook = instrument({
*   onActive() {
*     console.log('initialized');
*   },
*   onCommitFiberRoot(rendererID, root) {
*     console.log('fiberRoot', root.current)
*   },
* });
*/
const instrument = (options) => {
	return getRDTHook(() => {
		const rdtHook = getRDTHook();
		options.onActive?.();
		rdtHook._instrumentationSource = options.name ?? BIPPY_INSTRUMENTATION_STRING;
		const prevOnCommitFiberRoot = rdtHook.onCommitFiberRoot;
		if (options.onCommitFiberRoot) rdtHook.onCommitFiberRoot = (rendererID, root, priority) => {
			if (prevOnCommitFiberRoot) prevOnCommitFiberRoot(rendererID, root, priority);
			options.onCommitFiberRoot?.(rendererID, root, priority);
		};
		const prevOnCommitFiberUnmount = rdtHook.onCommitFiberUnmount;
		if (options.onCommitFiberUnmount) rdtHook.onCommitFiberUnmount = (rendererID, root) => {
			if (prevOnCommitFiberUnmount) prevOnCommitFiberUnmount(rendererID, root);
			options.onCommitFiberUnmount?.(rendererID, root);
		};
		const prevOnPostCommitFiberRoot = rdtHook.onPostCommitFiberRoot;
		if (options.onPostCommitFiberRoot) rdtHook.onPostCommitFiberRoot = (rendererID, root) => {
			if (prevOnPostCommitFiberRoot) prevOnPostCommitFiberRoot(rendererID, root);
			options.onPostCommitFiberRoot?.(rendererID, root);
		};
	});
};
const getFiberFromHostInstance = (hostInstance) => {
	const rdtHook = getRDTHook();
	for (const renderer of rdtHook.renderers.values()) try {
		const fiber = renderer.findFiberByHostInstance?.(hostInstance);
		if (fiber) return fiber;
	} catch {}
	if (typeof hostInstance === "object" && hostInstance != null) {
		if ("_reactRootContainer" in hostInstance) return hostInstance._reactRootContainer?._internalRoot?.current?.child;
		for (const key in hostInstance) if (key.startsWith("__reactInternalInstance$") || key.startsWith("__reactFiber")) return hostInstance[key] || null;
	}
	return null;
};
const INSTALL_ERROR = new Error();
const _fiberRoots = new Set();
const secure = (options, secureOptions = {}) => {
	const onActive = options.onActive;
	const isRDTHookInstalled = hasRDTHook();
	const isUsingRealReactDevtools = isRealReactDevtools();
	const isUsingReactRefresh = isReactRefresh();
	let timeout;
	let isProduction = secureOptions.isProduction ?? false;
	options.onActive = () => {
		clearTimeout(timeout);
		let isSecure = true;
		try {
			const rdtHook = getRDTHook();
			for (const renderer of rdtHook.renderers.values()) {
				const [majorVersion] = renderer.version.split(".");
				if (Number(majorVersion) < (secureOptions.minReactMajorVersion ?? 17)) isSecure = false;
				const buildType = detectReactBuildType(renderer);
				if (buildType !== "development") {
					isProduction = true;
					if (!secureOptions.dangerouslyRunInProduction) isSecure = false;
				}
			}
		} catch (err) {
			secureOptions.onError?.(err);
		}
		if (!isSecure) {
			options.onCommitFiberRoot = void 0;
			options.onCommitFiberUnmount = void 0;
			options.onPostCommitFiberRoot = void 0;
			options.onActive = void 0;
			return;
		}
		onActive?.();
		try {
			const onCommitFiberRoot$1 = options.onCommitFiberRoot;
			if (onCommitFiberRoot$1) options.onCommitFiberRoot = (rendererID, root, priority) => {
				if (!_fiberRoots.has(root)) _fiberRoots.add(root);
				try {
					onCommitFiberRoot$1(rendererID, root, priority);
				} catch (err) {
					secureOptions.onError?.(err);
				}
			};
			const onCommitFiberUnmount = options.onCommitFiberUnmount;
			if (onCommitFiberUnmount) options.onCommitFiberUnmount = (rendererID, root) => {
				try {
					onCommitFiberUnmount(rendererID, root);
				} catch (err) {
					secureOptions.onError?.(err);
				}
			};
			const onPostCommitFiberRoot = options.onPostCommitFiberRoot;
			if (onPostCommitFiberRoot) options.onPostCommitFiberRoot = (rendererID, root) => {
				try {
					onPostCommitFiberRoot(rendererID, root);
				} catch (err) {
					secureOptions.onError?.(err);
				}
			};
		} catch (err) {
			secureOptions.onError?.(err);
		}
	};
	if (!isRDTHookInstalled && !isUsingRealReactDevtools && !isUsingReactRefresh) timeout = setTimeout(() => {
		if (!isProduction) secureOptions.onError?.(INSTALL_ERROR);
		stop();
	}, secureOptions.installCheckTimeout ?? 100);
	return options;
};
/**
* a wrapper around the {@link instrument} function that sets the `onCommitFiberRoot` hook.
*
* @example
* onCommitFiberRoot((root) => {
*   console.log(root.current);
* });
*/
const onCommitFiberRoot = (handler) => {
	return instrument(secure({ onCommitFiberRoot: (_, root) => {
		handler(root);
	} }));
};

//#endregion
Object.defineProperty(exports, 'BIPPY_INSTRUMENTATION_STRING', {
  enumerable: true,
  get: function () {
    return BIPPY_INSTRUMENTATION_STRING;
  }
});
Object.defineProperty(exports, 'CONCURRENT_MODE_NUMBER', {
  enumerable: true,
  get: function () {
    return CONCURRENT_MODE_NUMBER;
  }
});
Object.defineProperty(exports, 'CONCURRENT_MODE_SYMBOL_STRING', {
  enumerable: true,
  get: function () {
    return CONCURRENT_MODE_SYMBOL_STRING;
  }
});
Object.defineProperty(exports, 'ClassComponentTag', {
  enumerable: true,
  get: function () {
    return ClassComponentTag;
  }
});
Object.defineProperty(exports, 'ContextConsumerTag', {
  enumerable: true,
  get: function () {
    return ContextConsumerTag;
  }
});
Object.defineProperty(exports, 'DEPRECATED_ASYNC_MODE_SYMBOL_STRING', {
  enumerable: true,
  get: function () {
    return DEPRECATED_ASYNC_MODE_SYMBOL_STRING;
  }
});
Object.defineProperty(exports, 'DehydratedSuspenseComponentTag', {
  enumerable: true,
  get: function () {
    return DehydratedSuspenseComponentTag;
  }
});
Object.defineProperty(exports, 'ELEMENT_TYPE_SYMBOL_STRING', {
  enumerable: true,
  get: function () {
    return ELEMENT_TYPE_SYMBOL_STRING;
  }
});
Object.defineProperty(exports, 'ForwardRefTag', {
  enumerable: true,
  get: function () {
    return ForwardRefTag;
  }
});
Object.defineProperty(exports, 'FragmentTag', {
  enumerable: true,
  get: function () {
    return FragmentTag;
  }
});
Object.defineProperty(exports, 'FunctionComponentTag', {
  enumerable: true,
  get: function () {
    return FunctionComponentTag;
  }
});
Object.defineProperty(exports, 'HostComponentTag', {
  enumerable: true,
  get: function () {
    return HostComponentTag;
  }
});
Object.defineProperty(exports, 'HostHoistableTag', {
  enumerable: true,
  get: function () {
    return HostHoistableTag;
  }
});
Object.defineProperty(exports, 'HostRootTag', {
  enumerable: true,
  get: function () {
    return HostRootTag;
  }
});
Object.defineProperty(exports, 'HostSingletonTag', {
  enumerable: true,
  get: function () {
    return HostSingletonTag;
  }
});
Object.defineProperty(exports, 'HostTextTag', {
  enumerable: true,
  get: function () {
    return HostTextTag;
  }
});
Object.defineProperty(exports, 'INSTALL_ERROR', {
  enumerable: true,
  get: function () {
    return INSTALL_ERROR;
  }
});
Object.defineProperty(exports, 'INSTALL_HOOK_SCRIPT_STRING', {
  enumerable: true,
  get: function () {
    return INSTALL_HOOK_SCRIPT_STRING;
  }
});
Object.defineProperty(exports, 'LegacyHiddenComponentTag', {
  enumerable: true,
  get: function () {
    return LegacyHiddenComponentTag;
  }
});
Object.defineProperty(exports, 'MemoComponentTag', {
  enumerable: true,
  get: function () {
    return MemoComponentTag;
  }
});
Object.defineProperty(exports, 'OffscreenComponentTag', {
  enumerable: true,
  get: function () {
    return OffscreenComponentTag;
  }
});
Object.defineProperty(exports, 'SimpleMemoComponentTag', {
  enumerable: true,
  get: function () {
    return SimpleMemoComponentTag;
  }
});
Object.defineProperty(exports, 'SuspenseComponentTag', {
  enumerable: true,
  get: function () {
    return SuspenseComponentTag;
  }
});
Object.defineProperty(exports, 'TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING', {
  enumerable: true,
  get: function () {
    return TRANSITIONAL_ELEMENT_TYPE_SYMBOL_STRING;
  }
});
Object.defineProperty(exports, '_fiberRoots', {
  enumerable: true,
  get: function () {
    return _fiberRoots;
  }
});
Object.defineProperty(exports, '_renderers', {
  enumerable: true,
  get: function () {
    return _renderers;
  }
});
Object.defineProperty(exports, 'createFiberVisitor', {
  enumerable: true,
  get: function () {
    return createFiberVisitor;
  }
});
Object.defineProperty(exports, 'detectReactBuildType', {
  enumerable: true,
  get: function () {
    return detectReactBuildType;
  }
});
Object.defineProperty(exports, 'didFiberCommit', {
  enumerable: true,
  get: function () {
    return didFiberCommit;
  }
});
Object.defineProperty(exports, 'didFiberRender', {
  enumerable: true,
  get: function () {
    return didFiberRender;
  }
});
Object.defineProperty(exports, 'fiberIdMap', {
  enumerable: true,
  get: function () {
    return fiberIdMap;
  }
});
Object.defineProperty(exports, 'getDisplayName', {
  enumerable: true,
  get: function () {
    return getDisplayName;
  }
});
Object.defineProperty(exports, 'getFiberFromHostInstance', {
  enumerable: true,
  get: function () {
    return getFiberFromHostInstance;
  }
});
Object.defineProperty(exports, 'getFiberId', {
  enumerable: true,
  get: function () {
    return getFiberId;
  }
});
Object.defineProperty(exports, 'getFiberStack', {
  enumerable: true,
  get: function () {
    return getFiberStack;
  }
});
Object.defineProperty(exports, 'getLatestFiber', {
  enumerable: true,
  get: function () {
    return getLatestFiber;
  }
});
Object.defineProperty(exports, 'getMutatedHostFibers', {
  enumerable: true,
  get: function () {
    return getMutatedHostFibers;
  }
});
Object.defineProperty(exports, 'getNearestHostFiber', {
  enumerable: true,
  get: function () {
    return getNearestHostFiber;
  }
});
Object.defineProperty(exports, 'getNearestHostFibers', {
  enumerable: true,
  get: function () {
    return getNearestHostFibers;
  }
});
Object.defineProperty(exports, 'getRDTHook', {
  enumerable: true,
  get: function () {
    return getRDTHook;
  }
});
Object.defineProperty(exports, 'getTimings', {
  enumerable: true,
  get: function () {
    return getTimings;
  }
});
Object.defineProperty(exports, 'getType', {
  enumerable: true,
  get: function () {
    return getType;
  }
});
Object.defineProperty(exports, 'hasMemoCache', {
  enumerable: true,
  get: function () {
    return hasMemoCache;
  }
});
Object.defineProperty(exports, 'hasRDTHook', {
  enumerable: true,
  get: function () {
    return hasRDTHook;
  }
});
Object.defineProperty(exports, 'installRDTHook', {
  enumerable: true,
  get: function () {
    return installRDTHook;
  }
});
Object.defineProperty(exports, 'instrument', {
  enumerable: true,
  get: function () {
    return instrument;
  }
});
Object.defineProperty(exports, 'isClientEnvironment', {
  enumerable: true,
  get: function () {
    return isClientEnvironment;
  }
});
Object.defineProperty(exports, 'isCompositeFiber', {
  enumerable: true,
  get: function () {
    return isCompositeFiber;
  }
});
Object.defineProperty(exports, 'isHostFiber', {
  enumerable: true,
  get: function () {
    return isHostFiber;
  }
});
Object.defineProperty(exports, 'isInstrumentationActive', {
  enumerable: true,
  get: function () {
    return isInstrumentationActive;
  }
});
Object.defineProperty(exports, 'isReactRefresh', {
  enumerable: true,
  get: function () {
    return isReactRefresh;
  }
});
Object.defineProperty(exports, 'isRealReactDevtools', {
  enumerable: true,
  get: function () {
    return isRealReactDevtools;
  }
});
Object.defineProperty(exports, 'isValidElement', {
  enumerable: true,
  get: function () {
    return isValidElement;
  }
});
Object.defineProperty(exports, 'isValidFiber', {
  enumerable: true,
  get: function () {
    return isValidFiber;
  }
});
Object.defineProperty(exports, 'mountFiberRecursively', {
  enumerable: true,
  get: function () {
    return mountFiberRecursively;
  }
});
Object.defineProperty(exports, 'onCommitFiberRoot', {
  enumerable: true,
  get: function () {
    return onCommitFiberRoot;
  }
});
Object.defineProperty(exports, 'patchRDTHook', {
  enumerable: true,
  get: function () {
    return patchRDTHook;
  }
});
Object.defineProperty(exports, 'safelyInstallRDTHook', {
  enumerable: true,
  get: function () {
    return safelyInstallRDTHook;
  }
});
Object.defineProperty(exports, 'secure', {
  enumerable: true,
  get: function () {
    return secure;
  }
});
Object.defineProperty(exports, 'setFiberId', {
  enumerable: true,
  get: function () {
    return setFiberId;
  }
});
Object.defineProperty(exports, 'shouldFilterFiber', {
  enumerable: true,
  get: function () {
    return shouldFilterFiber;
  }
});
Object.defineProperty(exports, 'traverseContexts', {
  enumerable: true,
  get: function () {
    return traverseContexts;
  }
});
Object.defineProperty(exports, 'traverseFiber', {
  enumerable: true,
  get: function () {
    return traverseFiber;
  }
});
Object.defineProperty(exports, 'traverseProps', {
  enumerable: true,
  get: function () {
    return traverseProps;
  }
});
Object.defineProperty(exports, 'traverseRenderedFibers', {
  enumerable: true,
  get: function () {
    return traverseRenderedFibers;
  }
});
Object.defineProperty(exports, 'traverseState', {
  enumerable: true,
  get: function () {
    return traverseState;
  }
});
Object.defineProperty(exports, 'unmountFiber', {
  enumerable: true,
  get: function () {
    return unmountFiber;
  }
});
Object.defineProperty(exports, 'unmountFiberChildrenRecursively', {
  enumerable: true,
  get: function () {
    return unmountFiberChildrenRecursively;
  }
});
Object.defineProperty(exports, 'updateFiberRecursively', {
  enumerable: true,
  get: function () {
    return updateFiberRecursively;
  }
});
Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function () {
    return version;
  }
});