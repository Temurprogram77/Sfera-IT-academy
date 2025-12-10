import * as react from 'react';
import { MonitoringWithoutRouteProps, MonitoringProps } from '../../index.mjs';
import '../../../../index.mjs';
import 'preact';
import '@preact/signals';
import 'bippy';
import 'preact/compat';

declare function AstroMonitor(props: {
    path: string;
    params: Record<string, string | undefined>;
} & MonitoringWithoutRouteProps): react.FunctionComponentElement<MonitoringProps>;

export { AstroMonitor };
