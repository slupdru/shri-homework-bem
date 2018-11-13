import * as React from 'react';
import { cn } from '@bem-react/classname';
import {IDescriptionLine, default as DescriptionLine} from './DescriptionLine';
import IconLine from './IconLine';

const cnWhiteBlock = cn('WhiteBlock');
const WhiteBlock: React.SFC<IDescriptionLine> = ({ description, classNames }) => (
  <div className={cnWhiteBlock(null, classNames)}>
  <DescriptionLine classNames={[cnWhiteBlock('DescriptionLine')]} description={description}/>
  <IconLine classNames={[cnWhiteBlock('IconLine')]}/>
  </div>
);
export default WhiteBlock;
