import * as React from 'react';
import { cn } from '@bem-react/classname';
import {IDescriptionLine, default as DescriptionLine} from './DescriptionLine';
import IconLine from './IconLine';

const cnCard = cn('Card');
const WhiteBlock: React.SFC<IDescriptionLine> = ({ description }) => (
  <div className={cnCard('WhiteBlock')}>
  <DescriptionLine description={description}/>
  <IconLine/>
  </div>
);
export default WhiteBlock;
