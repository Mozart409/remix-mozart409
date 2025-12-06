import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("datenschutz", "./routes/datenschutz.tsx"),
  route("impressum", "./routes/impressum.tsx"),
] satisfies RouteConfig;
