const reducer = (state: State = InitState, action: Action) => {
  switch (action.type) {
  case 'CHANGE_ACTIVE_PAGE':
    return {
      ...state,
      activePage: action.data
    };
  case 'CHANGE_CARD_DATA':
    return {
      ...state,
      eventsData: action.data
    };
  default:
    return state;
  }
};
const InitState: State= {
  activePage: 0,
  eventsData: [],
  page: 1,
  itemsPerPage: 10,
  types: ['critical', 'info']
};
export default reducer;
