import { cn } from "@bem-react/classname";
import * as React from "react";
import {ILink} from "./index";
const  cnLink  = cn("Link");
const Link: React.SFC<ILink> = ({ onClick, className, children, href }) => {
  return (
  <a
    href={href}
    onClick={onClick}
    className={className}
  >
{children}
  </a>
);
};

export default Link;
