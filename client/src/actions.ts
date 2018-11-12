import { Dispatch } from 'redux';
import postQuery from './helpers/postQuery';
interface ChangeCardsAction extends Action {
  data: IDataElement[];
}

export function getChangeActivePageAction(num: number): Action {
  return{
    type: 'CHANGE_ACTIVE_PAGE',
    data: num
  };
}
function getDataFromCardsAction(events: IDataElement[]): ChangeCardsAction {
  return({
    type: 'CHANGE_CARD_DATA',
    data: events
  });
}
function getTypesArray(type: SelectTypeCard): typeEl[] {
  if (type === 'all') {
    return ['critical', 'info'];
  } else if (type === 'critical') {
    return ['critical'];
  } else if (type === 'info') {
    return ['info'];
  } else {
    throw new Error('get invalid type');
  }
}

export function getChangeCardsAction(type?: string, value?: number|string) {
  return (dispatch: Dispatch, getState: () => State) => {
    const {page, itemsPerPage, types} = getState();
    const reqData: any = {page, itemsPerPage, types};
    if (value && type) {
      const valueReq = type === 'types' ? getTypesArray(value as SelectTypeCard) : Number(value);
      reqData[type] = valueReq;
    }
    return postQuery<IData>('http://localhost:8000/api/events', reqData).then(
      data => {
        dispatch(getDataFromCardsAction(data.events));
      }
    );
  };
}
