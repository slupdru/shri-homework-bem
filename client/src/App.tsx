
import { cn } from "@bem-react/classname";
import { RegistryConsumer } from "@bem-react/di";
import * as React from "react";
import "./App.scss";
import CardContainer from "./components/common/CardContainer";
import Main from "./components/common/Main";

const cnApp = cn("App");
const cnMenu = cn("Menu");
const cnFooter = cn("Footer");
export interface IAppProps { compiler: string; framework: string; }
export const App: React.SFC<IAppProps> = () => (
    <RegistryConsumer>
        {(registries) => {
            // reading App registry
          const registry = registries[cnApp()];

            // taking desktop or mobile version
          const Menu = registry.get<any>(cnMenu());
          const Footer = registry.get<any>(cnFooter());
          return (
              <div className="Body">
                <header>
                    <Menu />
                </header>
                <Main title="Лента событий">
                <CardContainer/>
                </Main>
                <Footer/>
              </div>

          );

        }}
    </RegistryConsumer>
);
