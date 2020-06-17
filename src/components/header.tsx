import React from 'react';
import Link from 'next/link';
import B from '../../lib/basepath';
import IconCompany from 'react-svg-loader!./icon_company.svg';
import IconService from 'react-svg-loader!./icon_service.svg';
import IconHikari from 'react-svg-loader!./icon_hikari.svg';
import IconContact from 'react-svg-loader!./icon_contact.svg';

type HeaderProps = {};

type HeaderState = {
  isToggleOn: boolean;
  isChecked: boolean;
};

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: Readonly<HeaderProps>) {
    super(props);
    console.log('Header');
    this.state = {
      isToggleOn: true,
      isChecked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  menuTree = {
    company: {
      会社概要: 'company#会社概要',
      事業内容: 'company#事業内容',
    },
    service: {
      HP: 'service#hp',
      system: 'service#system',
      hikari: 'service#hikari',
    },
    hikari: {},
    contact: {},
  };

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      isChecked: !state.isChecked,
    }));
    console.log(this.state);
  }

  Menu = (props: { name: string }) => {
    let array: string[] = Object.keys(this.menuTree[props.name]);
    let icon: JSX.Element;
    switch (props.name) {
      case 'company':
        icon = (
          <IconCompany
            className="m-auto h-full stroke-current stroke-regular"
            width={'1.25rem'}
            height={'1.25rem'}
          />
        );
        break;

      case 'service':
        icon = (
          <IconService
            className="m-auto h-full stroke-current stroke-regular"
            width={'1.25rem'}
            height={'1.25rem'}
          />
        );
        break;

      case 'hikari':
        icon = (
          <IconHikari
            className="m-auto h-full stroke-current stroke-regular"
            width={'1.25rem'}
            height={'1.25rem'}
          />
        );
        break;

      case 'contact':
        icon = (
          <IconContact
            className="m-auto h-full stroke-current stroke-regular"
            width={'1.25rem'}
            height={'1.25rem'}
          />
        );
        break;

      default:
        icon = <></>;
        break;
    }

    return (
      <div className="menu-icon relative rounded w-8 h-8 hidden md:block">
        <Link href={B('/' + props.name)}>
          <a>{icon}</a>
        </Link>
        <div className="menu-link-wrap">
          {array.map((item) => (
            <Link key={item} href={B('/' + this.menuTree[props.name][item])}>
              <a className="menu-link whitespace-no-wrap">{item}</a>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  MenuToggle = () => {
    var menuicon: string;
    menuicon =
      'absolute transform bg-white w-full h-px rounded-thin duration-300';
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
                this.state.isChecked
                  ? 'top-3 -rotate-45 transform -translate-y-1/2'
                  : 'top-2 rotate-0'
              }`}
            />
            <div
              className={`${menuicon} ${
                this.state.isChecked
                  ? 'bottom-3 rotate-45 transform translate-y-1/2'
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
          : 'absolute top-12 -left-full duration-300 md:hidden'
      }
    >
      <ul
        className="
        bg-black
        bg-opacity-75
        divide-y
        divide-black
        text-xl 
        leading-none
        md:hidden
        "
      >
        {/* 企業情報 */}
        <li className="px-4 py-1 menu-icon">
          <Link href={B('/company')}>
            <a className="flex items-center">
              <IconCompany
                className="my-auto mr-1 h-full stroke-current stroke-regular"
                width={'1.25rem'}
                height={'1.25rem'}
              />
              <span className="pq-text-align">企業情報</span>
            </a>
          </Link>
        </li>
        <li className="px-4 py-1 pl-10 menu-icon">
          <Link href={B('/company#会社概要')}>
            <a>
              <span className="pq-text-align">会社概要</span>
            </a>
          </Link>
        </li>
        <li className="px-4 py-1 pl-10 menu-icon">
          <Link href={B('/company#事業内容')}>
            <a>
              <span className="pq-text-align">事業内容</span>
            </a>
          </Link>
        </li>

        {/* サービス */}
        <li className="px-4 py-1 menu-icon">
          <Link href={B('/service')}>
            <a className="flex items-center">
              <IconService
                className="my-auto mr-1 h-full stroke-current stroke-regular"
                width={'1.25rem'}
                height={'1.25rem'}
              />
              <span className="pq-text-align">サービス</span>
            </a>
          </Link>
        </li>
        <li className="px-4 py-1 pl-10 menu-icon">
          <Link href={B('/service#hp')}>
            <a>
              <span className="pq-text-align">HPの作成・リニューアル</span>
            </a>
          </Link>
        </li>
        <li className="px-4 py-1 pl-10 menu-icon">
          <Link href={B('/service#system')}>
            <a>
              <span className="pq-text-align">システム受託開発</span>
            </a>
          </Link>
        </li>
        <li className="px-4 py-1 pl-10 menu-icon">
          <Link href={B('/service#hikari')}>
            <a>
              <span className="pq-text-align">p q ひかり　光サービス</span>
            </a>
          </Link>
        </li>

        {/* p q ひかり */}
        <li className="px-4 py-1 menu-icon">
          <Link href={B('/hikari')}>
            <a className="flex items-center">
              <IconHikari
                className="my-auto mr-1 h-full stroke-current stroke-regular"
                width={'1.25rem'}
                height={'1.25rem'}
              />
              <span className="pq-text-align">p q ひかり</span>
            </a>
          </Link>
        </li>

        {/* コンタクト */}
        <li className="px-4 py-1 menu-icon">
          <Link href={B('/contact')}>
            <a className="flex items-center">
              <IconContact
                className="my-auto mr-1 h-full stroke-current stroke-regular"
                width={'1.25rem'}
                height={'1.25rem'}
              />
              <span className="pq-text-align">コンタクト</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );

  render() {
    return (
      <nav className="apple-menu font-pq">
        <ul>
          <li className="absolute top-1/2 transform -translate-y-1/2 left-4 md:hidden">
            <this.MenuToggle />
          </li>
          <li className="text-center">
            <Link href={B('/')}>
              <a className="text-2xl">pullReq</a>
            </Link>
          </li>
          <li className="absolute bottom-0 left-offset-16">
            <div className="flex justify-start items-center h-full">
              <this.Menu name="company" />
              <this.Menu name="service" />
              <this.Menu name="hikari" />
              <this.Menu name="contact" />
            </div>
          </li>
        </ul>
        <this.SubMenu />
      </nav>
    );
  }
}
