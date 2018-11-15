import { cn } from "@bem-react/classname";
import { ModBody, withBemMod } from "@bem-react/core";
import * as React from "react";
import CardBasePart from "../CardBasePart";
const cnCard = cn("Card");
import {ICardProps} from "../index";

const Card: ModBody<ICardProps> = (Base, { data, className }) => (
  <CardBasePart data={data} className={className}>
          <img src="./src/images/bitmap.png" className={cnCard("PictureLine")} />
  </CardBasePart>
);

const CardEX = withBemMod<ICardProps>("Card", { dataType: "vacuumCleaner" }, Card);
export default CardEX;
