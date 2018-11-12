import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle';
import WhiteBlock from '../../WhiteBlock';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card = ({ data }: CardProps) => (
  <div className={cnCard({type: 'critical', size: 'average'})}>
  <div className={cnCard('Container')}>
    <TitleSubTitle type="critical" {...data}/>
    <WhiteBlock {...data}/>
  </div>
</div>
);

export default Card;
