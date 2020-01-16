/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Config from '../config';
import Logo from '../static/images/insertLogo.svg';
import SearchIcon from '../static/images/search.svg';
// import './styles/style.scss';


const getSlug = url => {
  const parts = url.split('/');
  return parts.length > 2 ? parts[parts.length - 2] : '';
};

class Menu extends Component {
  state = {
    token: null,
    username: null,
    dropdownIsOpen: false
  };

  componentDidMount() {
    const token = localStorage.getItem(Config.AUTH_TOKEN);
    const username = localStorage.getItem(Config.USERNAME);
    this.setState({ token, username });
  }

  toggleMenuDropdown = () => {
    this.setState((prevState) => ({
      dropdownIsOpen: !prevState.dropdownIsOpen
    }))
  }


  render() {
    const { menu } = this.props;
    const { token, username } = this.state;

    const handleSelectChange = (e) => {
      location.href = e.target.value;
    }

    return (
      <div className="menu">
        <div className="flex justify-between center-l">
          <div className="links dn flex-l w-100 justify-between items-center">
            {menu.items.map(item => {
              if (item.object === 'custom') {

                return (
                  <div className="dropdown-container" key={item.title}>
                  <button onClick={this.toggleMenuDropdown} key={item.ID}>{item.title}</button>
                  <ul> {this.state.dropdownIsOpen && item.child_items ?
                    item.child_items.map(child_item => (
                      <li><a href={child_item.url} key={child_item.ID}>{child_item.title}</a></li>
                    )) : null }</ul>
                  </div>
                );
              }
              const slug = getSlug(item.url);
              const actualPage = item.object === 'category' ? 'category' : 'post';
              return (
                <Link
                  as={`/${item.object}/${slug}`}
                  href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                  key={item.ID}
                >
                  <a>{item.title}</a>
                </Link>
              );
            })}
          <div className="brand bb flex justify-center items-center w-100 justify-between-l bn-l">
            <Link href="/">
              <a className="ie-header-logo">
                <Logo width={224} height={54}/>
              </a>
            </Link>
          </div>
          <Link href="/search">
              <a>
                <SearchIcon width={25} height={25} className="pr3"/>
              </a>
          </Link>
          </div>
        </div>
        <div className="dropdown bb flex justify-center items-center dn-l">
          <select
            onChange={handleSelectChange}
          >
            <option value={false}>Menu</option>
            {menu.items.map(item => {
              if (item.object === 'custom') {
                return (
                  <option
                    value={item.url}
                    key={item.ID}
                  >
                    {item.title}
                  </option>
                );
              }
              const slug = getSlug(item.url);
              const actualPage = item.object === 'category' ? 'category' : 'post';
              return (
                <option
                  value={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                  key={item.ID}
                >
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
        <style jsx>{`
          .menu {
            background-color: #4337A0;
          }

          button {
            background-color: #4337A0;
            color: #fff;
            border: none;
            text-align: left;
          }

          a {
            color: #fff;
          }

          .dropdown-container {
            display: flex;
            flex-direction: column;
            margin: 1rem .5rem;
            width: 34%;
            position: relative;
          }
          
          ul {
            padding: 1rem 0;
            margin-block-end: 0;
            position: absolute;
          }

          li {
            background: #4337A0;
            color: #fff;
            padding: .25rem .5rem;
          }

          li:before {
            content: '';
            padding-right: 0;
            margin-left: 0;
          }

          #menu-last-item {
            right: 0;
            padding-right: 2rem;
          }
        `}</style>
      </div>
    );
  }
}
export default Menu;
