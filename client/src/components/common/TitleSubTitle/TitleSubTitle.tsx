import * as React from 'react';
import { cn } from '@bem-react/classname';
import {ITitleSubTitle} from './index';
const cnCard = cn('Card');
const TitleSubTitle: React.SFC<ITitleSubTitle> = ({ icon, title, source, time}) => (
        <div className={cnCard('TitleSubTitle')}>
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
export default TitleSubTitle;
