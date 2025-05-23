/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg" {
    import * as React from "react";
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default Component;
}