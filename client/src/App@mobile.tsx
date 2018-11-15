import { cn } from "@bem-react/classname";
import { Registry, withRegistry } from "@bem-react/di";
import { App as AppCommon } from "./App";
import {MenuMobile} from "./components/Menu";
const empty: () => null = () => null;
const cnApp = cn("App");
const cnMenu = cn("Menu");
const cnFooter = cn("Footer");
// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnMenu(), MenuMobile);
registry.set(cnFooter(), empty);
export const App = withRegistry(registry)(AppCommon);
