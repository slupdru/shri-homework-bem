import { compose, IClassNameProps } from "@bem-react/core";
import Link from "./Link";
import "./style.scss";
import LinkActive from "./types/LinkActive";
import LinkNoActive from "./types/LinkNoActive";
export interface ILink extends IClassNameProps {
  onClick: (event: any) => void;
  children: any;
  href: string;
  active?: boolean;
}
const ExLink = compose(
  LinkActive,
  LinkNoActive,
)(Link);

export default ExLink;
