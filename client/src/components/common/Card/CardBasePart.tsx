import { cn } from "@bem-react/classname";
import * as React from "react";
const cnCard = cn("Card");
interface ICardBasePart {
  data: IDataElement;
  className: string;
  clildren?: any;
}
const CardBasePart: React.SFC<ICardBasePart> = ({ data, className, children }) => (
  <div className={className}>
        <div className={cnCard("TitleSubTitle")}>
                <div className={cnCard("TitleLine")}>
                  <img className={cnCard("Icon")} src={`src/images/${data.icon}.svg`}/>
                  <div className={cnCard("Title")}>{data.title}</div>
      </div>
      <div className={cnCard("SubtitleLine")}>
        <div className={cnCard("Source")}>{data.source}</div>
        <div className={cnCard("Time")}>{data.time}</div>
      </div>
    </div>
    <div className={cnCard("WhiteBlock")}>
    {data.description ? <div className={cnCard("DescriptionLine")}>
      {data.description}
    </div> : null}
    {children}
    </div>
    <div className={cnCard("IconLine")}>
    <img src="src/images/cross.svg" className={cnCard("HoveredIcon", {type: "close"})}/>
    <img src="src/images/Next.svg" className={cnCard("HoveredIcon", {type: "next"})}/>
  </div>
  </div>
);

export default CardBasePart;
