import { cn } from "@bem-react/classname";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {getChangeCardsAction} from "../../../actions";
import Card from "../Card";
const cnCardContainer = cn("CardContainer");

function findType(el: IDataElement): string {
  if (el.size === "s") { return null; }
  if (el.data && el.data.temperature) { return "temperature"; }
  if (el.size === "m" && el.data && el.data.track) { return "music"; }
  if (el.size === "m" && el.data && el.data.buttons) { return "buttons"; }
  if (el.type === "critical" && el.size === "m") { return null; }
  if (el.type === "critical" && el.size === "l") { return "vacuumCleaner"; }
  if (el.data && el.data.type === "graph") { return "graph"; }
  throw new Error("can not find type of element");
}
class CardContainer extends React.Component<any> {
  constructor(props: any) {
    super(props);
    props.dispatch(getChangeCardsAction());
  }
  public render() {
    return (
    <div className={cnCardContainer()}>
      {this.props.eventsData.map((el: IDataElement, index: number) => {
        const content = findType(el);
        if (content) {
          return <Card key={index} type={el.type} size={el.size} dataType={content} data={el}/>;
        } else {
          return <Card key={index} type={el.type} size={el.size} data={el}/>;
        }
      })}
    </div>
    );
  }
}
export default connect((state: State) => ({
  eventsData: state.eventsData,
  state,
}))(CardContainer);
