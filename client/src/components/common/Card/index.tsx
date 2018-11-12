import { default as CardSmallInfo } from './types/CardSmallInfo';
import { default as CardLargeInfo} from './types/CardLargeInfo';
import {default as CardLargeCritical} from './types/CardLargeCritical';
import {default as CardAverageTemperature} from './types/CardAverageTemperature';
import {default as CardAverageMusic} from './types/CardAverageMusic';
import {default as CardAverageCritical} from './types/CardAverageCritical';
import {default as CardAverageButtons} from './types/CardAverageButtons';
import * as React from 'react';
export interface CardProps {
  data: IDataElement;
}
const Dictionary: any = {
  'small-card-normal': CardSmallInfo,
  'large-card-normal': CardLargeInfo,
  'large-card-critical': CardLargeCritical,
  'average-card-temperature': CardAverageTemperature,
  'average-card-music': CardAverageMusic,
  'average-card-critical': CardAverageCritical,
  'average-card-buttons': CardAverageButtons
};

export default ({type, data}: {type: string; data: IDataElement}) => {
  const Element = Dictionary[type] as React.SFC<CardProps>;
  return (<Element data={data}/>);
};
