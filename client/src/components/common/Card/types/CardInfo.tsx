import { withBemMod} from "@bem-react/core";
import {ICardProps} from "../index";

const Card = withBemMod<ICardProps>("Card", { type: "info" });
export default Card;
