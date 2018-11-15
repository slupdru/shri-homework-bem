import { compose, IClassNameProps } from "@bem-react/core";
import { default as Base } from "./Card";
import "./style.scss";
import {default as CardButtons} from "./types/CardButtons";
import {default as CardCritical} from "./types/CardCritical";
import { default as CardGraph } from "./types/CardGraph";
import {default as CardInfo} from "./types/CardInfo";
import { default as CardLSize} from "./types/CardLSize";
import {default as CardMSize} from "./types/CardMSize";
import {default as CardMusic} from "./types/CardMusic";
import { default as CardSSize } from "./types/CardSSize";
import {default as CardTemperature} from "./types/CardTemperature";
import { default as CardVacuumCleaner } from "./types/CardVacuumCleaner";
export interface ICardProps extends IClassNameProps, IClassNamesProps {
  data: IDataElement;
  size?: string;
  type?: string;
  dataType?: string;
}
const Card = compose(
  CardSSize,
  CardLSize,
  CardMSize,
  CardTemperature,
  CardMusic,
  CardCritical,
  CardInfo,
  CardButtons,
  CardGraph,
  CardVacuumCleaner,
)(Base);
export default Card;
