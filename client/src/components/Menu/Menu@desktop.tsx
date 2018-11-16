// import { default as MenuCommon } from './common/Menu';
import { cn } from "@bem-react/classname";
import * as React from "react";
import { connect } from "react-redux";
import {getChangeActivePageAction, getChangeCardsAction} from "../../actions";
const menuLinksArr = [
  {
    href: "index.html",
    name: "События",
  },
  {
    name: "Сводка",
  },
  {
    name: "Устройства",
  },
  {
    name: "Сценарии",
  },
];

const cnMenu = cn("Menu");
const Menu = ({dispatch, activePage, state}: {state: IState; dispatch: any; activePage: number}) => {
  function onChangeFields(type: string, value: string | number) {
    dispatch(getChangeCardsAction(type, value));
  }
  return <nav className={cnMenu({device: "desktop"})}>
  <a className={cnMenu("LogoLink")} href="index.html"><img className={cnMenu("Logo")} src="src/images/Logo.png"/></a>
  <div className={cnMenu("LinkContainer")}>
  {menuLinksArr.map((el, index) => {

    return (
      <a
        key={index}
        href={el.href}
        onClick={() => { dispatch(getChangeActivePageAction(index)); }}
        className={cnMenu("Link", {active: activePage === index})}
      >
      {el.name}
      </a>
    );

  })}

  <select
    onChange={(event) => {onChangeFields("types", event.currentTarget.value); }}
    defaultValue="all"
    className={cnMenu("Selector")}
    id="type"
  >
    <option value="info">info</option>
    <option value="critical">crirical</option>
    <option value="all">all</option>
  </select>
  <div className={cnMenu("Selector")}>
    <span> Страница</span>
    <input
      onInput={(event) => {onChangeFields("page", event.currentTarget.value); }}
      defaultValue="1"
      id="page"
      type="text"
    />
    </div>
  <div className={cnMenu("Selector")}>
    <span>Количество на странице</span>
    <input
      onInput={(event) => {onChangeFields("itemsPerPage", event.currentTarget.value); }}
      defaultValue="10"
      id="quantity"
      type="text"
    />
  </div>
  </div>
</nav>;
};

export default connect((state: IState) => ({
  activePage: state.activePage,
  state,
}))(Menu);
