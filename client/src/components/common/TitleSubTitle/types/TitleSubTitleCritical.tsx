import * as React from 'react';
import { cn , classnames} from '@bem-react/classname';
import { withBemMod, ModBody } from '@bem-react/core';
const cnTitleSubTitle = cn('TitleSubTitle');
import {ITitleSubTitle} from '../index';

const TitleSubTitle: ModBody<ITitleSubTitle> = (Base, { icon, title, source, time, classNames, className}) => {
  const classString = classNames ? `${className} ${classNames}` : className;
  return (
  <div className={classString}>
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
};

const TitleSubTitleCritical = withBemMod<ITitleSubTitle>('TitleSubTitle', { type: 'critical' }, TitleSubTitle);
export default TitleSubTitleCritical;
