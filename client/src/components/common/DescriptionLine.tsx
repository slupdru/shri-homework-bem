import * as React from 'react';
import { cn } from '@bem-react/classname';

export interface IDescriptionLine extends IClassNamesProps {
  description: string | null;
}
const cnDescriptionLine = cn('DescriptionLine');
const DescriptionLine: React.SFC<IDescriptionLine> = ({ description, classNames }) => (
  <div>
    {description ? <div className={cnDescriptionLine(null, classNames)}>
    {description}
  </div> : null}
  </div>

);
export default DescriptionLine;
