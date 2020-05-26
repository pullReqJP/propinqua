import React from 'react';
import Link from 'next/link';
import B from '../../lib/basepath';

type HeaderProps = {};

type HeaderState = {
  isToggleOn: boolean;
  isChecked: boolean;
};

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props) {
    super(props);
    console.log('constructor');
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

  render() {
    return (
      <nav className="apple-menu font-pq">
        <ul className="flex items-baseline justify-around p-1">
          <li className="absolute left-0">
            <input
              type="checkbox"
              name="hidden"
              id="hidden"
              className="hidden"
              defaultChecked={this.state.isChecked}
            />
            <label htmlFor="hidden" onClick={this.handleClick}>
              {this.state.isToggleOn ? 'on' : 'off'}
              pq
            </label>
          </li>
          <li>
            <Link href={B('/')}>
              <a className="text-3xl">pullReq</a>
            </Link>
          </li>
        </ul>
        {/* <Link href={B('/')}>
          <a className="text-3xl">pullReq</a>
        </Link>
        <Link href={B('/product')}>
          <a className="text-xl">product</a>
        </Link>
        <Link href={B('/information')}>
          <a className="text-xl">information</a>
        </Link> */}
      </nav>
    );
  }
}
