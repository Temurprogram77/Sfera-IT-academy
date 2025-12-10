import * as react from 'react';
import { MonitoringWithoutRouteProps, MonitoringProps } from '../index.mjs';
import '../../../index.mjs';
import 'preact';
import '@preact/signals';
import 'bippy';
import 'preact/compat';

declare function RemixMonitor(props: MonitoringWithoutRouteProps): react.FunctionComponentElement<MonitoringProps>;

export { RemixMonitor as Monitoring };
