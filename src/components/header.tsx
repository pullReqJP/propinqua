import React from 'react';
import Link from 'next/link';
import B from '../../lib/basepath';
import IconService from 'react-svg-loader!./icon_service.svg';

type HeaderProps = {};

type HeaderState = {
  isToggleOn: boolean;
  isChecked: boolean;
};

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    console.log('Header');
    this.state = {
      isToggleOn: true,
      isChecked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      isChecked: !state.isChecked,
    }));
    console.log(this.state);
  }

  MenuIcon = () => {
    var menuicon: string;
    menuicon =
      'absolute inset-x-auto transform bg-white w-full h-px rounded-thin duration-300';
    return (
      <>
        <input
          type="checkbox"
          name="hidden"
          id="hidden"
          className="hidden"
          defaultChecked={this.state.isChecked}
        />
        <label htmlFor="hidden" onClick={this.handleClick}>
          <div className="relative w-6 h-6 text-2xl font-light">
            <div
              className={`${menuicon} ${
                this.state.isChecked ? 'top-3 -rotate-45' : 'top-2 rotate-0'
              }`}
            />
            <div
              className={`${menuicon} ${
                this.state.isChecked
                  ? 'bottom-3 rotate-45'
                  : 'bottom-2 rotate-0'
              }`}
            />
          </div>
        </label>
      </>
    );
  };

  SubMenu = () => (
    <nav
      className={
        this.state.isChecked
          ? 'absolute top-12 left-0 duration-300'
          : 'absolute top-12 -left-full duration-300 md:relative md:inline-block md:left-auto md:top-0'
      }
    >
      <ul
        className="
        bg-black
        bg-opacity-75
        divide-y
        divide-black
        md:flex
        md:bg-opacity-0
        md:divide-y-0
        "
      >
        <li className="px-4 py-1">
          <IconService
            width={50}
            height={50}
            // color={'#000'}
          />
          {/* <Link href={B('/product')}>
            <a className="text-xl">product</a>
          </Link> */}
        </li>
        <li className="px-4 py-1">
          <Link href={B('/information')}>
            <a className="text-xl">information</a>
          </Link>
        </li>
        <li className="px-4 py-1">
          <Link href={B('/sample')}>
            <a className="text-xl">sample</a>
          </Link>
        </li>
      </ul>
    </nav>
  );

  render() {
    return (
      <nav className="apple-menu font-pq">
        <ul className="flex items-baseline justify-between px-4 py-1">
          <li className="my-auto md:hidden">
            <this.MenuIcon />
          </li>
          <li className="hidden md:inline-block" />
          <li>
            <Link href={B('/')}>
              <a className="text-2xl">pullReq</a>
            </Link>
          </li>
          <this.SubMenu />
          <li className="w-6" />
        </ul>
      </nav>
    );
  }
}
