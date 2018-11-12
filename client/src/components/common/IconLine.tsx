import * as React from 'react';
import { cn } from '@bem-react/classname';

const cnCard = cn('Card');
const IconLine: React.SFC<{}> = () => (
  <div>
    <img src="src/images/cross.svg" className={cnCard('HoveredIcon', {type: 'close'})}/>
    <img src="src/images/Next.svg" className={cnCard('HoveredIcon', {type: 'next'})}/>
  </div>

);
export default IconLine;
