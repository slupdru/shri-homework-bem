import { cn } from "@bem-react/classname";
import { ModBody, withBemMod } from "@bem-react/core";
import * as React from "react";
import CardBasePart from "../CardBasePart";
const cnCard = cn("Card");
import {ICardProps} from "../index";

const Card: ModBody<ICardProps> = (Base, { data, className }) => (
  <CardBasePart data={data} className={className}>
  <div className={cnCard("ButtonsLine")}>
      <a className={cnCard("Button", {type: "yes"})}>{data.data.buttons[0]}</a>
      <a className={cnCard("Button", {type: "no"})}>{data.data.buttons[1]}</a>
    </div>
  </CardBasePart>
);

const CardEX = withBemMod<ICardProps>("Card", { dataType: "buttons" }, Card);
export default CardEX;
