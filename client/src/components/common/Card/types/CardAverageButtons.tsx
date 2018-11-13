import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle/TitleSubTitle';
import DescriptionLine from '../../DescriptionLine';
import { withBemMod, ModBody } from '@bem-react/core';
import IconLine from '../../IconLine';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card = ({data}: CardProps) => (
  <div className={cnCard({type: 'info', size: 'average', cardType: 'buttons'})}>
  <div className={cnCard('Container')}>
  <TitleSubTitle classNames={[cnCard('TitleSubTitle')]} type="critical" {...data}/>
  <div>
  <DescriptionLine classNames={[cnCard('DescriptionLine')]} {...data}/>
  <div className={cnCard('ButtonsLine')}>
      <a className={cnCard('Button', {type: 'yes'})}>{data.data.buttons[0]}</a>
      <a className={cnCard('Button', {type: 'no'})}>{data.data.buttons[1]}</a>
    </div>
  </div>
  <IconLine classNames={[cnCard('IconLine')]}/>
  </div>
</div>
);

export default Card;
