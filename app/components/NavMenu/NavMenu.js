// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import routes from '../../constants/routes';
import routesNames from '../../constants/routesNames';

type Props = {
  exclude: string
};

const NavMenu = (props: Props) => {
  return (
    <div className={`${styles.container} row justify-around`}>
      {Object.keys(routes).map(item => {
        return props.exclude !== routes[item] ? (
          <Link key={routesNames[item]} to={routes[item]}>
            {routesNames[item]}
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default NavMenu;
