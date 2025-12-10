import * as react from 'react';
import { MonitoringWithoutRouteProps, MonitoringProps } from '../index.js';
import '../../../index.js';
import 'preact';
import '@preact/signals';
import 'bippy';
import 'preact/compat';

declare function MonitoringInner(props: MonitoringWithoutRouteProps): react.FunctionComponentElement<MonitoringProps>;
/**
 * The double 'use client' directive pattern is intentional:
 * 1. Top-level directive marks the entire module as client-side
 * 2. IIFE-wrapped component with its own directive ensures:
 *    - Component is properly tree-shaken (via @__PURE__)
 *    - Component maintains client context when code-split
 *    - Execution scope is preserved
 *
 * This pattern is particularly important for Next.js's module
 * system and its handling of Server/Client Components.
 */
declare const Monitoring: (props: MonitoringWithoutRouteProps) => react.FunctionComponentElement<react.SuspenseProps>;

export { Monitoring, MonitoringInner };
