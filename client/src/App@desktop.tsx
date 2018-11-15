import { cn } from "@bem-react/classname";
import { Registry, withRegistry } from "@bem-react/di";
import { App as AppCommon } from "./App";
import {FooterDesktop} from "./components/Footer";
import {MenuDesktop} from "./components/Menu";
const cnApp = cn("App");
const cnMenu = cn("Menu");
const cnFooter = cn("Footer");
// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnMenu(), MenuDesktop);
registry.set(cnFooter(), FooterDesktop);
export const App = withRegistry(registry)(AppCommon);
