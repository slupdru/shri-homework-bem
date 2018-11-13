import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle/TitleSubTitle';
import DescriptionLine from '../../DescriptionLine';
import IconLine from '../../IconLine';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card = ({ data }: CardProps) => (
  <div className={cnCard({type: 'info', size: 'average', cardType: 'temperature'})}>
  <div className={cnCard('Container')}>
  <TitleSubTitle classNames={[cnCard('TitleSubTitle')]} {...data}/>
  <DescriptionLine classNames={[cnCard('DescriptionLine')]} {...data}/>
  <div className="Card-InfoLine">
    <div className="Card-Temperature">
      <span>Температура: </span><span className="Card-TemperatureText Card-TemperatureInner">{data.data.temperature}</span>
    </div>
    <div className="Card-Temperature">
      <span>Влажность: </span><span className="Card-TemperatureText Card-Humidity">{data.data.humidity}</span>
    </div>
  </div>
  <IconLine classNames={[cnCard('IconLine')]}/>
  </div>
</div>
);
export default Card;
