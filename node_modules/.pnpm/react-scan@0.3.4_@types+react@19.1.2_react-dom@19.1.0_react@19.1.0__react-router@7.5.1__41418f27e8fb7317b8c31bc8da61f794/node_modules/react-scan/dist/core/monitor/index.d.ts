import { FC } from 'react';
import { MonitoringOptions } from '../../index.js';
import 'preact';
import '@preact/signals';
import 'bippy';
import 'preact/compat';

interface MonitoringProps {
    url?: string;
    apiKey: string;
    path?: string | null;
    route?: string | null;
    params?: Record<string, string>;
    commit?: string | null;
    branch?: string | null;
}
type MonitoringWithoutRouteProps = Omit<MonitoringProps, 'route' | 'path'>;
declare const Monitoring: FC<MonitoringProps>;
declare const scanMonitoring: (options: MonitoringOptions) => void;
declare const startMonitoring: () => void;

export { Monitoring, type MonitoringProps, type MonitoringWithoutRouteProps, scanMonitoring, startMonitoring };
