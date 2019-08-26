// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import routesNames from '../../constants/routesNames';
import styles from './Home.css';
import poeLogo from './poelogo.png';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <img src={poeLogo} alt="POE Logo" height={180} />
        <h2>Path of Exile Helpers</h2>
        <div className="column">
          {Object.keys(routes).map(item => {
            return routes.HOME !== routes[item] ? (
              <Link key={routesNames[item]} to={routes[item]}>
                {routesNames[item]}
              </Link>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}
