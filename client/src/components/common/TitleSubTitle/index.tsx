import { compose, IClassNameProps } from '@bem-react/core';

import { default as Base } from './TitleSubTitle';
import { default as TitleSubTitleCritical } from './types/TitleSubTitleCritical';

export interface ITitleSubTitle extends IClassNameProps {
  icon: string;
  title: string;
  source: string;
  time: string;
  type?: string;
}

const TitleSubTitle = compose(
  TitleSubTitleCritical
)(Base);
export default TitleSubTitle;
