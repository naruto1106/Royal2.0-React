import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';

import AppContext from 'context/Context';
import Logo from 'components/common/Logo';
import { getRoutes } from 'routes/routes';
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { navbarBreakPoint, topNavbarBreakpoint } from 'config';
import { CBreadcrumbRouter } from 'components/common/Breadcrumb';

const NavbarTop = () => {
  const {
    config: { showBurgerMenu, navbarPosition, navbarCollapsed },
    setConfig
  } = useContext(AppContext);
  const { currentModule, currentPage, currentDataID } = useSelector(
    state => state.theme
  );
  const { headerShow } = useSelector(state => state.theme);

  const { pathname } = useLocation();
  const isChat = pathname.includes('chat');

  const [showDropShadow, setShowDropShadow] = useState(false);

  const handleBurgerMenu = () => {
    navbarPosition === 'top' && setConfig('navbarCollapsed', !navbarCollapsed);
    (navbarPosition === 'vertical' || navbarPosition === 'combo') &&
      setConfig('showBurgerMenu', !showBurgerMenu);
  };

  const setDropShadow = () => {
    const el = document.documentElement;
    if (el.scrollTop > 0) {
      setShowDropShadow(true);
    } else {
      setShowDropShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', setDropShadow);
    return () => window.removeEventListener('scroll', setDropShadow);
  }, []);

  if (!headerShow) return <div className="pt-4" />;

  return (
    <Navbar
      className={classNames('navbar-glass  fs--1 navbar-top sticky-kit', {
        // 'navbar-glass-shadow': showDropShadow
        'navbar-glass-shadow': showDropShadow && !isChat
      })}
      expand={
        navbarPosition === 'top' || navbarPosition === 'combo'
          ? topNavbarBreakpoint
          : true
      }
    >
      <Navbar.Toggle
        className={classNames('toggle-icon-wrapper me-md-3 me-2', {
          'd-lg-none': navbarPosition === 'top',
          [`d-${navbarBreakPoint}-none`]:
            navbarPosition === 'vertical' || navbarPosition === 'combo'
        })}
        as="div"
      >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>

      <Logo at="navbar-top" width={110} id="topLogo" />

      <Nav
        navbar
        className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
        as="ul"
      >
        <Nav.Item as="li">
          <CBreadcrumbRouter
            className="border-0 m-0 pe-3"
            routes={getRoutes(
              currentModule ?? '',
              currentDataID ?? '',
              currentPage ?? ''
            )}
          />
        </Nav.Item>
      </Nav>

      <TopNavRightSideNavItem />
    </Navbar>
  );
};

export default NavbarTop;
