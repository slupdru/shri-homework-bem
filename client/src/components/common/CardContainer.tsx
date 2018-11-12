import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Dispatch } from 'redux';
import {getChangeCardsAction} from '../../actions';
import { connect } from 'react-redux';
import Card from './Card';
const cnCardContainer = cn('CardContainer');

function findType(el: IDataElement): string {
  if (el.size === 's') { return 'small-card-normal'; }
  if (el.data && el.data.temperature) { return 'average-card-temperature'; }
  if (el.size === 'm' && el.data && el.data.track) { return 'average-card-music'; }
  if (el.size === 'm' && el.data && el.data.buttons) { return 'average-card-buttons'; }
  if (el.type === 'critical' && el.size === 'm') { return 'average-card-critical'; }
  if (el.type === 'critical' && el.size === 'l') { return 'large-card-critical'; }
  if (el.data && el.data.type === 'graph') { return 'large-card-normal'; }
  throw new Error('can not find type of element');
}
class CardContainer extends React.Component<any> {
  constructor(props: any) {
    super(props);
    props.dispatch(getChangeCardsAction());
  }
  render() {
    return (
    <div className={cnCardContainer()}>
      {this.props.eventsData.map((el: IDataElement, index: number) => {
        const type = findType(el);
        return <Card key={index} type={type} data={el}/>;
      })}
    </div>
    );
  }
}
export default connect((state: State) => ({
  eventsData: state.eventsData,
  state
}))(CardContainer);
