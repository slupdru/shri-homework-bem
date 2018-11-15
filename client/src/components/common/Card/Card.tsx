import * as React from "react";
import CardBasePart from "./CardBasePart";
import {ICardProps} from "./index";
const Card: React.SFC<ICardProps> = ({ data, className}) => (
  <CardBasePart data={data} className={className}/>
);

export default Card;
