declare type typeEl = "critical" | "info";
declare interface IAction {
  type: string;
  data: any;
}
declare interface IDataElement {
  type: typeEl;
  size: string;
  title: string;
  source: string;
  time: string;
  description: string | null;
  icon: string;
  data?: {
    type?: string;
    values?: object[];
    temperature?: number;
    humidity?: number;
    albumcover?: string;
    artist?: string;
    track?: {
      name?: string;
      length?: string;
    };
    volume?: number;
    buttons?: [string, string];
    image?: string;
  };
}
declare interface IDataElementButton extends IDataElement {
  data: {
    buttons: [string, string];
  };
}
declare interface IDataElementMusic extends IDataElement {
  data: {
    albumcover: string;
    artist: string;
    track: {
      name: string;
      length: string;
    };
    volume: number;
  };
}
declare interface IDataElementTemperature extends IDataElement {
  data: {
    temperature: number;
    humidity: number;
  };
}
declare interface IData {
  events: IDataElement[];
}
declare interface IState {
  activePage: number;
  eventsData: IDataElement[];
  page: number;
  itemsPerPage: number;
  types: typeEl[];
}
declare type SelectTypeCard = "all" | "critical" | "info";

declare interface IBaseProps {
  state: IState;
  dispatch: any;
}
declare interface IClassNamesProps {
  classNamesInProps?: string[];
}
