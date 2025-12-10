import React from "react";

//#region src/experiments/inspect.d.ts
interface InspectorProps {
  enabled?: boolean;
  children?: React.ReactNode;
  dangerouslyRunInProduction?: boolean;
}
interface InspectorHandle {
  enable: () => void;
  disable: () => void;
  inspectElement: (element: Element) => void;
}
declare const RawInspector: React.ForwardRefExoticComponent<InspectorProps & React.RefAttributes<InspectorHandle>>;
declare const Inspector: React.ForwardRefExoticComponent<InspectorProps & React.RefAttributes<InspectorHandle>>;

//#endregion
export { Inspector, Inspector as default, InspectorHandle, InspectorProps, RawInspector };