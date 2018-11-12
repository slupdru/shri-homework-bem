import * as React from 'react';
import { cn } from '@bem-react/classname';
import TitleSubTitle from '../../TitleSubTitle/TitleSubTitle';
import DescriptionLine from '../../DescriptionLine';
import IconLine from '../../IconLine';
const cnCard = cn('Card');
import {CardProps} from '../index';

const Card = ({ data }: CardProps) => (
  <div className={cnCard({type: 'info', size: 'average', cardType: 'music'})}>
  <div className={cnCard('Container')}>
  <TitleSubTitle {...data}/>
  <div>
    <DescriptionLine {...data}/>
        <div className={cnCard('Music')}>
          <img className={cnCard('Albumcover')} src={data.data.albumcover}/>
          <div className={cnCard('MusicInfo')}>
            <div className={cnCard('MusicName')}>
            {`${data.data.artist} - ${data.data.track.name}`}
            </div>
            <div className={cnCard('Timelineblock')}>
              <div className={cnCard('TimelineContainer')}>
                <div className={cnCard('Timeline')}>
                </div>
                <div className={cnCard('MusicLength')}>
                  {data.data.track.length}
                </div>
              </div>
              <div className={cnCard('MusicTime')}>
              </div>
            </div>
          </div>
        </div>
        <div className={cnCard('Player')}>
          <div className={cnCard('PlayerButtonsContainer')}>
            <img src="src/images/Prev.svg" className={cnCard('playerButton', {side: 'left'})}/>
            <img src="src/images/Prev.svg" className={cnCard('playerButton', {side: 'right'})}/>
          </div>
          <div className={cnCard('Timelineblock')}>
            <div className={cnCard('TimelineContainer')}>
              <div className={cnCard('Timeline')}></div>
              <div className={cnCard('MusicVolume')}>
              {`${data.data.volume}%`}
              </div>
            </div>
            <div className={cnCard('MusicTime')}>
            </div>
          </div>
        </div>
      </div>
      <IconLine/>
  </div>
</div>
);

export default Card;
