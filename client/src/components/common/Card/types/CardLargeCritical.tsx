import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle';
import WhiteBlock from '../../WhiteBlock';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card= ({ data }: CardProps) => (
  <div className={cnCard({type: 'critical', size: 'large'})}>
  <div className={cnCard('Container')}>
  <TitleSubTitle classNames={[cnCard('TitleSubTitle')]} {...data}/>
  <WhiteBlock {...data}/>
  </div>
</div>
);

export default Card;
