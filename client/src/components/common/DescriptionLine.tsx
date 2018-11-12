import * as React from 'react';
import { cn } from '@bem-react/classname';

export interface IDescriptionLine {
  description: string | null;
}
const cnCard = cn('Card');
const DescriptionLine: React.SFC<IDescriptionLine> = ({ description }) => (
  <div>
    {description ? <div className={cnCard('DescriptionLine')}>
    {description}
  </div> : null}
  </div>

);
export default DescriptionLine;
