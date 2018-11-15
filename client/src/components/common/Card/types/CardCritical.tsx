import { withBemMod} from "@bem-react/core";
import {ICardProps} from "../index";

const Card = withBemMod<ICardProps>("Card", { type: "critical" });
export default Card;
