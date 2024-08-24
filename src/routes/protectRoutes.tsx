import { lazy } from 'react';
import { RouteInterface } from "@/interfaces/route.interface";
import { ROUTES } from "./nameRoutes";

const Home = lazy(() => import("@/pages/Home"));
const CreateDebit = lazy(() => import("@/pages/Debit/create"));

export const protectedRoutes: RouteInterface[] = [
  { path: "", element: <Home /> },
  { path: ROUTES.CREATE_DEBIT, element: <CreateDebit /> },
];