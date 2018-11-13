import * as React from 'react';
import { cn } from '@bem-react/classname';
const cnFooter = cn('Footer');

const elementsArr = ['Помощь', 'Обратная связь', 'Разработчикам', 'Условия пользования'];
const Footer: React.SFC<{}> = () => (
<footer className={cnFooter()}>
    <div className={cnFooter('Leftblock')}>
    {elementsArr.map((el, index) => (<a key={index} className={cnFooter('Element')}>{el}</a>))}
    </div>
    <div className={cnFooter('Rightblock')}>
      © 2001–2017 ООО «Яндекс»
    </div>
</footer>
);
export default Footer;
