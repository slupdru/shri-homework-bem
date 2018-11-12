import * as React from 'react';
import { cn } from '@bem-react/classname';
const cnMain = cn('Main');
interface Main {
  children: React.ReactChild;
  title: string;
}
export const Main: React.SFC<Main> = ({ children, title }) => (
<main className={cnMain()}>
<div className={cnMain('Container')}>
  <div className={cnMain('Title')}>{title}</div>
{children}
</div>

</main>
);
