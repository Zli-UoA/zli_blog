/// <reference types="vite/client" />

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;

  // eslint-disable-next-line import/no-default-export
  export default src;
}