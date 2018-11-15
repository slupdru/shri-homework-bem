import { withBemMod} from "@bem-react/core";
import {ICardProps} from "../index";

const Card = withBemMod<ICardProps>("Card", { size: "l" });
export default Card;
