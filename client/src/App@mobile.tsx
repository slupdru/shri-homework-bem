import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import Menu from './components/Menu@mobile';
const empty: () => null = () => null;
const cnApp = cn('App');
const cnMenu = cn('Menu');
const cnFooter = cn('Footer');
// registry with desktop versions of components
const registry = new Registry({ id: cnApp() });

registry.set(cnMenu(), Menu);
registry.set(cnFooter(), empty);
export const App = withRegistry(registry)(AppCommon);
