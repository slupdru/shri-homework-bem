import * as React from 'react';
import { cn } from '@bem-react/classname';
import { withBemMod, ModBody } from '@bem-react/core';
const cnCard = cn('Card');
import {ITitleSubTitle} from '../index';

const TitleSubTitle: ModBody<ITitleSubTitle> = (Base, { icon, title, source, time, className}) => (
  <div className={className}>
  <div className={cnCard('TitleLine')}>
    <img className={cnCard('Icon')} src={`src/images/${icon}.svg`}/>
    <div className={cnCard('Title')}>{title}</div>
  </div>
  <div className={cnCard('SubtitleLine')}>
    <div className={cnCard('Source')}>{source}</div>
    <div className={cnCard('Time')}>{time}</div>
  </div>
</div>
);

const TitleSubTitleCritical = withBemMod<ITitleSubTitle>('Card-TitleSubTitle', { type: 'critical' }, TitleSubTitle);
export default TitleSubTitleCritical;
