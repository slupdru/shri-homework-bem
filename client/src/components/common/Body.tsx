import * as React from 'react';
import { cn } from '@bem-react/classname';
const cnBody = cn('Body');
interface Body {
  children: any;
}
export const Body: React.SFC<Body> = ({ children }) => (
<div className={cnBody()}>
{children}
</div>
);
