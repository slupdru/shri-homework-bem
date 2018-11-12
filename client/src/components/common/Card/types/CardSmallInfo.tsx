import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle';
import DescriptionLine from '../../DescriptionLine';
import IconLine from '../../IconLine';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card = ({ data }: CardProps) => (
  <div className={cnCard({type: 'info', size: 'small'})}>
  <div className={cnCard('Container')}>
  <TitleSubTitle {...data}/>
  <DescriptionLine {...data}/>
  <IconLine/>
  </div>
</div>
);

export default Card;
