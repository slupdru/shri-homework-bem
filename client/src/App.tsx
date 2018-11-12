import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import {Header} from './components/common/Header';
import {Main} from './components/common/Main';
import CardContainer from './components/common/CardContainer';
const cnApp = cn('App');
const cnMenu = cn('Menu');
const cnFooter= cn('Footer');
export interface AppProps { compiler: string; framework: string; }
export const App: React.SFC<AppProps> = () => (
    <RegistryConsumer>
        {registries => {
            // reading App registry
          const registry = registries[cnApp()];

            // taking desktop or mobile version
          const Menu = registry.get<any>(cnMenu());
          const Footer = registry.get<any>(cnFooter());
          return (
              <div className="Body">
                <Header>
                    <Menu />
                </Header>
                <Main title="Лента событий">
                <CardContainer/>
                </Main>
                <Footer/>
              </div>

          );

        }}
    </RegistryConsumer>
);
