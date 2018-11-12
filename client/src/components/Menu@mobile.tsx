import * as React from 'react';
// import { default as MenuCommon } from './common/Menu';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import { Dispatch } from 'redux';
const cnMenu = cn('Menu');
const Menu = () => {
  return <nav className={cnMenu({device: 'mobile'})}>
    <a className={cnMenu('LogoLink')} href="index.html"><img className={cnMenu('Logo')} src="src/images/Logo.png"/></a>
    <img src="src/images/icon_list_m@1x.svg" alt="" className={cnMenu('Item', {type: 'mobileButton'})}/>
</nav>;
};
export default Menu;
