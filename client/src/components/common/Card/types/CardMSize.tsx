import { withBemMod} from "@bem-react/core";
import {ICardProps} from "../index";

const Card = withBemMod<ICardProps>("Card", { size: "m" });
export default Card;
