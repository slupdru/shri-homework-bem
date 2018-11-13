import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnIconLine = cn('IconLine');
const IconLine: React.SFC<IClassNamesProps> = ({classNames}) => (
  <div className={cnIconLine(null, classNames)}>
    <img src="src/images/cross.svg" className={cnIconLine('HoveredIcon', {type: 'close'})}/>
    <img src="src/images/Next.svg" className={cnIconLine('HoveredIcon', {type: 'next'})}/>
  </div>

);
export default IconLine;
