import * as React from 'react';
import { cn } from '@bem-react/classname';
const cnHeader = cn('Header');
interface Header {
  children: React.ReactChild;
}
export const Header: React.SFC<Header> = ({ children }) => (
<header className={cnHeader()}>
{children}
</header>
);
