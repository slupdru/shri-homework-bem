import * as React from 'react';
import { cn } from '@bem-react/classname';
import {ITitleSubTitle} from './index';
const cnTitleSubTitle = cn('TitleSubTitle');
const TitleSubTitle: React.SFC<ITitleSubTitle> = ({ icon, title, source, time, classNames}) => (
        <div className={cnTitleSubTitle(null, classNames)}>
      <div className={cnTitleSubTitle('TitleLine')}>
        <img className={cnTitleSubTitle('Icon')} src={`src/images/${icon}.svg`}/>
        <div className={cnTitleSubTitle('Title')}>{title}</div>
      </div>
      <div className={cnTitleSubTitle('SubtitleLine')}>
        <div className={cnTitleSubTitle('Source')}>{source}</div>
        <div className={cnTitleSubTitle('Time')}>{time}</div>
      </div>
    </div>
);
export default TitleSubTitle;
