import { cn } from "@bem-react/classname";
import * as React from "react";
const cnMain = cn("Main");
interface IMain {
  children: React.ReactChild;
  title: string;
}
export const Main: React.SFC<IMain> = ({ children, title }) => (
<main className={cnMain()}>
<div className={cnMain("Container")}>
  <div className={cnMain("Title")}>{title}</div>
{children}
</div>

</main>
);
