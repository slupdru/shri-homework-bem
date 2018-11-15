import { cn } from "@bem-react/classname";
import { ModBody, withBemMod } from "@bem-react/core";
import * as React from "react";
import CardBasePart from "../CardBasePart";
const cnCard = cn("Card");
import {ICardProps} from "../index";

const Card: ModBody<ICardProps> = (Base, { data, className }) => (
  <CardBasePart data={data} className={className}>
  <div className={cnCard("InfoLine")}>
    <div className="Card-Temperature">
      <span>Температура: </span>
      <span className={cnCard("Card-TemperatureText", {type: "temperature"})}>{data.data.temperature}</span>
    </div>
    <div className="Card-Temperature">
      <span>Влажность: </span>
      <span className={cnCard("Card-TemperatureText", {type: "humidity"})}>{data.data.humidity}</span>
    </div>
  </div>
  </CardBasePart>
);

const CardEX = withBemMod<ICardProps>("Card", { dataType: "temperature" }, Card);
export default CardEX;
