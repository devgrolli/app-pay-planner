import { ReactNode } from "react";

export interface RouteInterface {
  path: string;
  element: ReactNode;
  children?: RouteInterface[];
}
