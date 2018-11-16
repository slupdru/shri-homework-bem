const reducer = (state: IState = InitState, action: IAction) => {
  switch (action.type) {
  case "CHANGE_ACTIVE_PAGE":
    return {
      ...state,
      activePage: action.data,
    };
  case "CHANGE_CARD_DATA":
    return {
      ...state,
      eventsData: action.data,
    };
  default:
    return state;
  }
};
const InitState: IState = {
  activePage: 0,
  eventsData: [],
  itemsPerPage: 10,
  page: 1,

  types: ["critical", "info"],
};
export default reducer;
