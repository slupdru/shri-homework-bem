import { withBemMod} from "@bem-react/core";
import {ILink} from "../index";

const Link = withBemMod<ILink>("Link", { active: true });
export default Link;
