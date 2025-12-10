/*!
 * @pivanov/utils v0.0.2
 * (c) 2024-present Pavel Ivanov
 * Released under the MIT License.
 * https://github.com/pivanov/utils
 */

import { DependencyList, DetailedHTMLProps, HTMLAttributes, ComponentType } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Type guard to check if a value is a boolean
 * @param value - The value to check
 * @returns True if the value is a boolean, false otherwise
 * @example
 * ```ts
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(0) // false
 * isBoolean('true') // false
 * ```
 */
declare const isBoolean: (value: unknown) => value is boolean;
/**
 * Type guard to check if a value is a number
 * @param value - The value to check
 * @returns True if the value is a number, false otherwise
 * @example
 * ```ts
 * isNumber(42) // true
 * isNumber(3.14) // true
 * isNumber(NaN) // true
 * isNumber('42') // false
 * isNumber(null) // false
 * ```
 */
declare const isNumber: (value: unknown) => value is number;
/**
 * Type guard to check if a value is a string
 * @param value - The value to check
 * @returns True if the value is a string, false otherwise
 * @example
 * ```ts
 * isString('hello') // true
 * isString('') // true
 * isString(42) // false
 * isString(null) // false
 * ```
 */
declare const isString: (value: unknown) => value is string;
/**
 * Type guard to check if a value is a function
 * @param value - The value to check
 * @returns True if the value is a callable function, false otherwise
 * @example
 * ```ts
 * isFunction(() => {}) // true
 * isFunction(function(){}) // true
 * isFunction(Math.max) // true
 * isFunction({}) // false
 * isFunction(null) // false
 * ```
 */
declare const isFunction: (value: unknown) => value is CallableFunction;
/**
 * Type guard to check if a value is a plain object
 * @param value - The value to check
 * @returns True if the value is a non-null object and not an array, false otherwise
 * @example
 * ```ts
 * isObject({}) // true
 * isObject({ foo: 'bar' }) // true
 * isObject([]) // false
 * isObject(null) // false
 * isObject(42) // false
 * isObject('string') // false
 * ```
 */
declare const isObject: (value: unknown) => value is Record<string, unknown>;
/**
 * Type guard to check if a value is undefined
 * @param value - The value to check
 * @returns True if the value is undefined, false otherwise
 * @example
 * ```ts
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined(0) // false
 * ```
 */
declare const isUndefined: (value: unknown) => value is undefined;
/**
 * Type guard to check if a value is null
 * @param value - The value to check
 * @returns True if the value is null, false otherwise
 * @example
 * ```ts
 * isNull(null) // true
 * isNull(undefined) // false
 * isNull(0) // false
 * ```
 */
declare const isNull: (value: unknown) => value is null;

/**
 * Represents a boolean value that can be either a boolean or the string 'true' or 'false'
 * @example
 * const isEnabled: TBooleanish = 'true';
 * const isDisabled: TBooleanish = false;
 */
type TBooleanish = boolean | 'true' | 'false';
/**
 * A dictionary type with string keys and values of type T
 * @example
 * const users: TDict<string> = {
 *   user1: 'John',
 *   user2: 'Jane'
 * };
 *
 * const scores: TDict<number> = {
 *   math: 95,
 *   science: 87
 * };
 */
type TDict<T = unknown> = Record<string, T>;
/**
 * Type for objects with string or number keys and values of type T
 * @example
 * const numberDict: TObjType<number> = {
 *   age: 25,
 *   score: 100,
 *   1: 50
 * };
 *
 * const mixedDict: TObjType = {
 *   name: 'John',
 *   1: true,
 *   score: 42
 * };
 */
type TObjType<T = unknown> = {
    [key: string | number]: T;
};

/**
 * Creates a new object with the specified keys removed.
 *
 * @param object - The source object
 * @param keys - Array of keys to remove from the object
 * @returns A new object without the specified keys
 *
 * @example
 * ```ts
 * const user = { name: 'John', age: 30, email: 'john@example.com' };
 *
 * omit(user, ['email', 'age'])
 * // { name: 'John' }
 *
 * // Preserves original object
 * omit(user, ['email'])
 * // { name: 'John', age: 30 }
 * // user is unchanged
 *
 * // Handles non-existent keys
 * omit(user, ['nonexistent'])
 * // { name: 'John', age: 30, email: 'john@example.com' }
 * ```
 *
 * @bestPractice
 * - Use when you need to create a new object without certain properties
 * - Prefer this over manually deleting properties when immutability is needed
 * - Consider using TypeScript's Omit utility type with this function
 * - For picking specific properties, use the pick function instead
 */
declare const omit: <T extends TDict, K extends keyof T>(object: T, keys: K[]) => Omit<T, K>;
/**
 * Creates a new object with only the specified keys.
 *
 * @param object - The source object
 * @param keys - Array of keys to keep in the new object
 * @returns A new object containing only the specified keys
 *
 * @example
 * ```ts
 * const user = { name: 'John', age: 30, email: 'john@example.com' };
 *
 * pick(user, ['name', 'email'])
 * // { name: 'John', email: 'john@example.com' }
 *
 * // Handles missing keys
 * pick(user, ['name', 'nonexistent'])
 * // { name: 'John' }
 *
 * // Empty keys array
 * pick(user, [])
 * // {}
 * ```
 *
 * @bestPractice
 * - Use when you need to create a new object with only specific properties
 * - Useful for API responses where you only want to expose certain fields
 * - Consider using TypeScript's Pick utility type with this function
 * - For removing specific properties, use the omit function instead
 */
declare const pick: <T extends TDict, K extends keyof T>(object: T, keys: K[]) => { [P in K]: T[P]; };
/**
 * Merges multiple objects into a target object.
 * Performs a shallow merge.
 *
 * @param target - The target object to merge into
 * @param sources - The source objects to merge from
 * @returns The merged object (same reference as target)
 *
 * @example
 * ```ts
 * // Basic merge
 * merge({ a: 1 }, { b: 2 })
 * // { a: 1, b: 2 }
 *
 * // Multiple sources
 * merge({ a: 1 }, { b: 2 }, { c: 3 })
 * // { a: 1, b: 2, c: 3 }
 *
 * // Property override
 * merge({ a: 1, b: 1 }, { b: 2 }, { b: 3 })
 * // { a: 1, b: 3 }
 *
 * // Shallow merge (nested objects are referenced)
 * const obj = { nested: { a: 1 } };
 * merge({ x: 1 }, obj).nested === obj.nested
 * // true
 * ```
 *
 * @bestPractice
 * - Use for simple object merging where nested objects don't need to be cloned
 * - Be aware that nested objects are shared by reference
 * - For deep merging, use the deepMerge function instead
 * - Consider using the spread operator (...) for simpler cases
 */
declare const merge: <T extends object>(target: T, ...sources: Partial<T>[]) => T;
/**
 * Deep merges multiple objects into a target object.
 * Recursively merges nested objects and arrays.
 *
 * @param target - The target object to merge into
 * @param sources - The source objects to merge from
 * @returns The deep merged object (same reference as target)
 *
 * @example
 * ```ts
 * // Deep merge nested objects
 * deepMerge(
 *   { a: { b: 1, c: 2 } },
 *   { a: { d: 3 } },
 *   { a: { e: 4 } }
 * )
 * // { a: { b: 1, c: 2, d: 3, e: 4 } }
 *
 * // Handles nested property override
 * deepMerge(
 *   { a: { b: 1 } },
 *   { a: { b: 2 } }
 * )
 * // { a: { b: 2 } }
 *
 * // Mixed nested and top-level properties
 * deepMerge(
 *   { a: 1, b: { c: 2 } },
 *   { b: { d: 3 }, e: 4 }
 * )
 * // { a: 1, b: { c: 2, d: 3 }, e: 4 }
 *
 * // Handles undefined sources
 * deepMerge({ a: 1 }, undefined)
 * // { a: 1 }
 * ```
 *
 * @bestPractice
 * - Use when you need to merge objects with nested structures
 * - Be aware that this creates new objects for nested properties
 * - For simple flat objects, use the merge function instead
 * - Consider performance implications for deeply nested objects
 * - Handle circular references if they might occur in your data
 */
declare const deepMerge: <T extends object>(target: T, ...sources: Partial<T>[]) => T;

/**
 * sleep - Asynchronously waits for the specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to wait before resolving the Promise.
 * @returns {Promise<null>} - A Promise that resolves after the specified number of milliseconds.
 */
declare const sleep: (ms: number) => Promise<null>;

/**
 * Converts a string to camelCase format.
 *
 * @param str - The input string to convert
 * @returns The string in camelCase format
 *
 * @example
 * ```ts
 * camelCase('foo-bar')      // 'fooBar'
 * camelCase('FOO_BAR')      // 'fooBar'
 * camelCase('Foo Bar')      // 'fooBar'
 * camelCase('foo bar baz')  // 'fooBarBaz'
 * camelCase('  foo  bar  ') // 'fooBar'
 *
 * // Handles special cases
 * camelCase('')            // ''
 * camelCase('123')         // '123'
 * camelCase('foo--bar')    // 'fooBar'
 * ```
 *
 * @bestPractice
 * - Use for JavaScript/TypeScript variable and property names
 * - Ideal for internal object properties and method names
 * - Avoid using with user-facing text or URLs (use kebab-case instead)
 */
declare const camelCase: (str: string) => string;
/**
 * Converts a string to PascalCase format.
 *
 * @param str - The input string to convert
 * @returns The string in PascalCase format
 *
 * @example
 * ```ts
 * pascalCase('foo-bar')     // 'FooBar'
 * pascalCase('foo_bar')     // 'FooBar'
 * pascalCase('foo bar')     // 'FooBar'
 * pascalCase('foo123bar')   // 'Foo123Bar'
 *
 * // Handles numbers and special cases
 * pascalCase('123foo')      // '123Foo'
 * pascalCase('FOO_BAR_BAZ') // 'FooBarBaz'
 * pascalCase('')            // ''
 * ```
 *
 * @bestPractice
 * - Use for TypeScript/JavaScript class names
 * - Use for React component names
 * - Use for type and interface names in TypeScript
 * - Avoid for variable names or object properties (use camelCase instead)
 */
declare const pascalCase: (str: string) => string;
/**
 * Capitalizes the first letter of a string.
 *
 * @param string - The input string to capitalize
 * @returns The string with its first letter capitalized
 *
 * @example
 * ```ts
 * capitalizeFirstLetter('hello')              // 'Hello'
 * capitalizeFirstLetter('hello world')        // 'Hello world'
 * capitalizeFirstLetter('already Capitalized') // 'Already Capitalized'
 * capitalizeFirstLetter('')                   // ''
 * ```
 *
 * @bestPractice
 * - Use for simple text formatting where only the first letter needs capitalization
 * - For title formatting, consider creating a separate titleCase function
 * - For component or class names, use pascalCase instead
 */
declare const capitalizeFirstLetter: (string: string) => string;
/**
 * Converts a string to kebab-case format.
 *
 * @param str - The input string to convert
 * @returns The string in kebab-case format, or the original input if null/undefined
 *
 * @example
 * ```ts
 * kebabCase('fooBar')           // 'foo-bar'
 * kebabCase('XMLHttpRequest')   // 'xml-http-request'
 * kebabCase('AAABBBCcc')       // 'aaabbb-ccc'
 *
 * // Handles special characters and accents
 * kebabCase('é è à ù')         // 'e-e-a-u'
 * kebabCase('foo@#$%bar&*^baz') // 'foo-bar-baz'
 *
 * // Special cases
 * kebabCase('')                // ''
 * kebabCase(null)              // null
 * kebabCase(undefined)         // undefined
 * ```
 *
 * @bestPractice
 * - Use for URL slugs and routes
 * - Use for CSS class names and HTML attributes
 * - Use for file names in web projects
 * - Consider using slugify for full URL-safe string conversion
 */
declare const kebabCase: (str: string) => string;
/**
 * Converts a string into a URL-friendly slug.
 * More aggressive than kebabCase, removing all special characters.
 *
 * @param str - The input string to convert
 * @returns A URL-safe lowercase string with:
 *  - Unicode characters normalized and diacritics removed
 *  - Special characters removed
 *  - Spaces, underscores, and multiple hyphens converted to single hyphens
 *  - Leading and trailing hyphens removed
 *
 * @example
 * ```ts
 * slugify('Hello World!')          // 'hello-world'
 * slugify('Über Café')             // 'uber-cafe'
 * slugify('__FOO--BAR  ')          // 'foo-bar'
 * slugify('Complex@#$%^&* String') // 'complex-string'
 *
 * // Special cases
 * slugify('한글')                   // '' (removes non-Latin characters)
 * slugify('foo@#$%bar&*^baz')     // 'foobarbaz'
 * slugify('')                      // ''
 * ```
 *
 * @bestPractice
 * - Use for generating URL-safe slugs
 * - Use when you need to remove all special characters
 * - For CSS classes or less strict conversions, use kebabCase instead
 * - Consider the target audience when handling non-Latin characters
 */
declare const slugify: (str: string) => string;
/**
 * Capitalizes the first character of a string, maintaining TypeScript's type inference.
 *
 * @param str - The input string to capitalize
 * @returns The string with its first character capitalized
 *
 * @example
 * ```ts
 * capitalize('hello')  // 'Hello'
 * capitalize('world')  // 'World'
 * capitalize('')      // ''
 *
 * // TypeScript type inference
 * const str: 'hello' = 'hello';
 * const capitalized = capitalize(str); // Type is Capitalize<'hello'>
 * ```
 *
 * @bestPractice
 * - Use when you need to preserve TypeScript's literal types
 * - For runtime-only capitalization, use capitalizeFirstLetter instead
 * - Consider creating a separate titleCase function for more complex capitalizations
 */
declare const capitalize: <S extends string>(str: S) => Capitalize<S>;
/**
 * Uncapitalizes the first character of a string, maintaining TypeScript's type inference.
 *
 * @param str - The input string to uncapitalize
 * @returns The string with its first character in lowercase
 *
 * @example
 * ```ts
 * uncapitalize('Hello')  // 'hello'
 * uncapitalize('World')  // 'world'
 * uncapitalize('')      // ''
 *
 * // TypeScript type inference
 * const str: 'Hello' = 'Hello';
 * const uncapitalized = uncapitalize(str); // Type is Uncapitalize<'Hello'>
 * ```
 *
 * @bestPractice
 * - Use when you need to preserve TypeScript's literal types
 * - For runtime-only uncapitalization, consider creating a simpler function
 * - Useful for converting PascalCase to camelCase while maintaining type information
 */
declare const uncapitalize: <S extends string>(str: S) => Uncapitalize<S>;

/**
 * stringifyBigIntValues - A replacer function for JSON.stringify that converts BigInt values to strings.
 *
 * @param {string} _key - The key of the property being stringified.
 * @param {unknown} value - The value of the property being stringified.
 * @returns {unknown} - The value of the property being stringified.
 */
declare const stringifyBigIntValues: (_key: string, value: unknown) => unknown;
/**
 * Set a value in Cache API
 * @param cacheName The name of the cache
 * @param key The key under which the value will be stored
 * @param value The value to store
 * @throws Will throw an error if the operation fails
 */
declare const storageSetItem: (cacheName: string, key: string, value: unknown) => Promise<void>;
/**
 * Get a value from Cache API
 * @param cacheName The name of the cache
 * @param key The key of the value to retrieve
 * @returns The retrieved value, or null if not found
 * @throws Will throw an error if the operation fails
 */
declare const storageGetItem: <T>(cacheName: string, key: string) => Promise<T | null>;
/**
 * Remove a value from Cache API
 * @param cacheName The name of the cache
 * @param key The key of the value to remove
 * @returns True if the key was found and deleted, false if the key wasn't found
 * @throws Will throw an error if the operation fails
 */
declare const storageRemoveItem: (cacheName: string, key: string) => Promise<boolean>;
/**
 * Clear all values from Cache API
 * @param cacheName The name of the cache
 * @throws Will throw an error if the operation fails
 */
declare const storageClear: (cacheName: string) => Promise<void>;
/**
 * Clear values from Cache API by prefix or suffix
 * @param cacheName The name of the cache
 * @param str The prefix or suffix to match keys against
 * @param isPrefix If true, match keys that start with `str`. If false, match keys that end with `str`.
 * @throws Will throw an error if the operation fails
 */
declare const storageClearByPrefixOrSuffix: (cacheName: string, str: string, isPrefix?: boolean) => Promise<void>;
/**
 * Check if a key exists in Cache API
 * @param cacheName The name of the cache
 * @param key The key to check
 * @returns True if the key exists, false otherwise
 * @throws Will throw an error if the operation fails
 */
declare const storageExists: (cacheName: string, key: string) => Promise<boolean>;
/**
 * Get all keys from Cache API
 * @param cacheName The name of the cache
 * @returns An array of all keys in Cache API
 * @throws Will throw an error if the operation fails
 */
declare const storageGetAllKeys: (cacheName: string) => Promise<string[]>;
/**
 * Calculate the size of the Cache API for a given cacheName.
 * If cacheKey is provided, calculate the size of the specific cache entry.
 *
 * @param cacheName The name of the cache
 * @param cacheKey Optional. The key of the specific cache entry to calculate size for.
 * @returns The total size of the cache or the specific cache entry in bytes
 * @throws Will throw an error if the operation fails
 */
declare const storageCalculateSize: (cacheName: string, cacheKey?: string) => Promise<number>;

/**
 * Generic event bus interface for communication between components
 * @template T - The type of the message payload
 */
interface IEventBus<T = unknown> {
    /** The topic/channel name for the event */
    topic: string;
    /** The message payload */
    message: T;
}
/**
 * Event bus listener function type
 * @template T - The type of the message payload
 */
type TEventBusListener<T = unknown> = (message: T) => void;
/**
 * Function returned by event bus subscription that can be called to unsubscribe
 */
type TEventBusUnsubscribe = () => void;

/**
 * Dispatches a message to all listeners subscribed to the given topic
 *
 * @template T - The type of the message payload
 * @param topic - The topic/channel to dispatch to
 * @param message - The message payload to send
 *
 * @example
 * ```ts
 * busDispatch('user-updated', { id: 1, name: 'John' });
 * ```
 */
declare const busDispatch: <T extends IEventBus>(topic: T["topic"], message: T["message"]) => void;
/**
 * Subscribes to messages on a specific topic
 *
 * @template T - The type of the message payload
 * @param topic - The topic/channel to subscribe to
 * @param listener - Callback function that will be called with the message payload
 * @returns An unsubscribe function that can be called to remove the subscription
 *
 * @example
 * ```ts
 * const unsubscribe = busSubscribe('user-updated', (message) => {
 *   console.log('User updated:', message);
 * });
 *
 * // Later when you want to unsubscribe
 * unsubscribe();
 * ```
 */
declare const busSubscribe: <T extends IEventBus>(topic: IEventBus["topic"], listener: TEventBusListener<T["message"]>) => TEventBusUnsubscribe;

declare const useEventBus: <T extends IEventBus>(topic: T["topic"], listener: TEventBusListener<T["message"]>, deps?: DependencyList) => void;

declare global {
    interface HTMLElement {
        uuid?: string;
    }
    interface ISharedValues {
        baseStoreUI: unknown;
    }
    interface Window {
        pivanov?: unknown;
    }
    interface Navigator {
        [key: string | symbol]: unknown;
    }
    interface Document {
        [key: string | symbol]: unknown;
    }
    namespace JSX {
        interface IntrinsicElements {
            [elementName: `${string}-${string}`]: DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
                [key: string]: unknown;
            }, HTMLElement>;
        }
    }
}
interface IR2WCOptions {
    shadow?: 'open' | 'closed';
}
interface IR2WCBaseProps {
    container?: HTMLElement;
}

/**
 * Converts a React component into a Web Component (Custom Element)
 *
 * @template Props - The props type for the React component, must extend IR2WCBaseProps
 * @param ReactComponent - The React component to convert
 * @param options - Configuration options for the Web Component
 * @param styles - Optional array of CSS styles to be injected into the shadow DOM
 * @returns A Custom Element constructor that can be registered with customElements.define
 *
 * @example
 * ```tsx
 * const MyWebComponent = r2wc(MyReactComponent, {
 *   shadow: 'open',
 * });
 *
 * customElements.define('my-component', MyWebComponent);
 * ```
 */
declare const r2wc: <Props extends IR2WCBaseProps>(elementName: string, ReactComponent: ComponentType<Props>, options?: IR2WCOptions, styles?: string[]) => CustomElementConstructor;

/**
 * Props interface for Widget components
 * @interface IWidgetComponentProps
 * @property {string} name - The name of the widget
 * @property {string} [uuid] - Optional group identifier. Widgets sharing the same uuid will update together
 * @property {string[]} [jsFiles] - Array of JavaScript file URLs to load. Files are loaded sequentially in the specified order, useful for dependencies
 * @property {unknown} [widgetProps] - Optional props to pass to the widget
 */
interface IWidgetComponentProps {
    name: string;
    uuid?: string;
    jsFiles?: string[];
    widgetProps?: unknown;
}
/**
 * React component that handles widget lifecycle and rendering
 * @component
 * @example
 * ```tsx
 * <WidgetComponent
 *   name="my-widget"
 *   uuid="group1"  // Widgets with the same uuid will update together
 *   widgetProps={{ color: 'blue' }}
 * />
 * ```
 * Multiple widgets with the same uuid will form a group - when one widget's props
 * are updated, all widgets in the group will receive the update.
 */
declare const WidgetComponent: (props: IWidgetComponentProps) => react_jsx_runtime.JSX.Element | null;
/**
 * Props interface for renderWidget function
 * @interface IRenderWidgetProps
 * @property {string} name - The name of the widget to load
 * @property {string} [uuid] - Optional unique identifier for the widget
 * @property {HTMLElement} mountTo - DOM element where the widget should be mounted
 * @property {Object.<string, unknown>} widgetProps - Props to pass to the widget
 */
interface IRenderWidgetProps {
    name: string;
    uuid?: string;
    mountTo: HTMLElement;
    widgetProps?: {
        [key: string]: unknown;
    };
}
/**
 * Programmatically loads and mounts a widget into a specified DOM element
 * @function
 * @param {IRenderWidgetProps} widgetProps - Configuration options for loading the widget
 * @example
 * ```ts
 * renderWidget({
 *   widgetName: 'my-widget',
 *   uuid: 'group1',
 *   mountTo: document.getElementById('widget-container'),
 *   widgetProps: {
 *     color: 'blue',
 *     size: 'large'
 *   }
 * });
 * ```
 */
declare const renderWidget: (props: IRenderWidgetProps) => void;

interface IRegisterWidgetProps<T> {
    name: string;
    styles?: string[];
    component: ComponentType<T>;
    svgSpritePath?: string;
}
declare const registerWidget: <T extends object>(props: IRegisterWidgetProps<T>) => CustomElementConstructor;

declare const importWidgets: (jsFiles: string[]) => Promise<void>;

type TCloneable = object | number | string | boolean | symbol | bigint | null | undefined;
declare const deepClone: <T extends TCloneable>(obj: T) => T;

/**
 * Checks if the code is running in a browser environment
 * @returns {boolean} True if running in a browser, false otherwise
 * @example
 * if (isBrowser()) {
 *   // Execute browser-specific code
 *   window.addEventListener('resize', handleResize);
 * }
 */
declare const isBrowser: () => boolean;
/**
 * Sets CSS custom properties (variables) on an HTML element
 * @param {HTMLElement | null} el - The target HTML element
 * @param {Record<string, string>} cssVars - Object containing CSS variable names and values
 * @example
 * const element = document.querySelector('.my-element');
 * setStyleProperties(element, {
 *   '--background-color': '#fff',
 *   '--text-color': '#000',
 *   '--padding': '1rem'
 * });
 */
declare const setStyleProperties: (el: HTMLElement | null, cssVars: Record<string, string>) => void;
/**
 * Checks if an element is currently visible in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if the element is visible in viewport, false otherwise
 * @example
 * const element = document.querySelector('.my-element');
 * if (checkVisibility(element)) {
 *   // Element is visible in viewport
 *   element.classList.add('animate');
 * }
 */
declare const checkVisibility: (element: HTMLElement) => boolean;
/**
 * Calculates the rendered width of text with specified styling
 * @param {string} text - The text to measure
 * @param {number} fontSize - Font size in pixels
 * @param {boolean} [isUppercase=false] - Whether to convert text to uppercase before measuring
 * @param {string} [fontFamily] - Font family string, defaults to system fonts
 * @returns {number} The width of the text in pixels
 * @example
 * // Basic usage
 * const width = calculateRenderedTextWidth('Hello World', 16);
 *
 * // With uppercase conversion
 * const upperWidth = calculateRenderedTextWidth('Hello World', 16, true);
 *
 * // With custom font
 * const customWidth = calculateRenderedTextWidth('Hello World', 16, false, 'Arial');
 *
 * // Use the width for calculations
 * const containerWidth = width + 32; // text width + padding
 */
declare const calculateRenderedTextWidth: (text: string, fontSize: number, isUppercase?: boolean, fontFamily?: string) => number;

/**
 * Deeply compares two values for equality
 * Supports primitives, Arrays, Sets, Maps, Dates, and plain objects
 * @example
 * // Comparing arrays
 * isEqual([1, 2, 3], [1, 2, 3]); // true
 * isEqual([1, 2, 3], [1, 2, 4]); // false
 *
 * // Comparing objects
 * isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
 * isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }); // true
 *
 * // Comparing nested structures
 * isEqual(
 *   { users: [{ id: 1 }, { id: 2 }] },
 *   { users: [{ id: 1 }, { id: 2 }] }
 * ); // true
 *
 * // Comparing Sets
 * isEqual(new Set([1, 2]), new Set([1, 2])); // true
 *
 * // Comparing Maps
 * const map1 = new Map([['a', 1], ['b', 2]]);
 * const map2 = new Map([['a', 1], ['b', 2]]);
 * isEqual(map1, map2); // true
 *
 * // Comparing Dates
 * isEqual(new Date('2024-01-01'), new Date('2024-01-01')); // true
 */
declare const isEqual: <T, K>(obj: T | T[], objToCompare: K | K[]) => boolean;

export { type IEventBus, type TBooleanish, type TCloneable, type TDict, type TObjType, WidgetComponent, busDispatch, busSubscribe, calculateRenderedTextWidth, camelCase, capitalize, capitalizeFirstLetter, checkVisibility, deepClone, deepMerge, importWidgets, isBoolean, isBrowser, isEqual, isFunction, isNull, isNumber, isObject, isString, isUndefined, kebabCase, merge, omit, pascalCase, pick, r2wc, registerWidget, renderWidget, setStyleProperties, sleep, slugify, storageCalculateSize, storageClear, storageClearByPrefixOrSuffix, storageExists, storageGetAllKeys, storageGetItem, storageRemoveItem, storageSetItem, stringifyBigIntValues, uncapitalize, useEventBus };
