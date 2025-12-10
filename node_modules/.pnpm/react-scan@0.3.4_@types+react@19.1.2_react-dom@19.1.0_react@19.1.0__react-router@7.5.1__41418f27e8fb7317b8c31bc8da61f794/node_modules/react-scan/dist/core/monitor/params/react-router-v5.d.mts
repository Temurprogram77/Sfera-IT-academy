import * as react from 'react';
import { MonitoringWithoutRouteProps, MonitoringProps } from '../index.mjs';
import '../../../index.mjs';
import 'preact';
import '@preact/signals';
import 'bippy';
import 'preact/compat';

declare function ReactRouterV5Monitor(props: MonitoringWithoutRouteProps): react.FunctionComponentElement<MonitoringProps>;

export { ReactRouterV5Monitor as Monitoring };
