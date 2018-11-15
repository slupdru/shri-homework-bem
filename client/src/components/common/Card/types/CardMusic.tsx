import { cn } from "@bem-react/classname";
import { ModBody, withBemMod } from "@bem-react/core";
import * as React from "react";
import CardBasePart from "../CardBasePart";
const cnCard = cn("Card");
import {ICardProps} from "../index";

const Card: ModBody<ICardProps> = (Base, { data, className }) => (
  <CardBasePart data={data} className={className}>
  <div className={cnCard("Music")}>
          <img className={cnCard("Albumcover")} src={data.data.albumcover}/>
          <div className={cnCard("MusicInfo")}>
            <div className={cnCard("MusicName")}>
            {`${data.data.artist} - ${data.data.track.name}`}
            </div>
            <div className={cnCard("Timelineblock")}>
              <div className={cnCard("TimelineContainer")}>
                <div className={cnCard("Timeline")}/>
                <div className={cnCard("Timeregulator")}/>
                <div className={cnCard("MusicLength")}>
                  {data.data.track.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cnCard("Player")}>
          <div className={cnCard("PlayerButtonsContainer")}>
            <img src="src/images/Prev.svg" className={cnCard("playerButton", {side: "left"})}/>
            <img src="src/images/Prev.svg" className={cnCard("playerButton", {side: "right"})}/>
          </div>
          <div className={cnCard("Timelineblock")}>
            <div className={cnCard("TimelineContainer")}>
              <div className={cnCard("Timeline")}/>
              <div className={cnCard("Timeregulator")}/>
              <div className={cnCard("MusicVolume")}>
              {`${data.data.volume}%`}
              </div>
            </div>
          </div>
        </div>
  </CardBasePart>
);

const CardEX = withBemMod<ICardProps>("Card", { dataType: "music" }, Card);
export default CardEX;
