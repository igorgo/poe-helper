/* eslint-disable react/no-array-index-key,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
// @flow

import React from 'react';
import styles from './styles.css';
import pics from './images';
import type {
  ChaosRecipeItemType,
  ChaosRecipeStore
} from '../../reducers/types';
import routes from '../../constants/routes';
import NavMenu from '../NavMenu/NavMenu';

export const rows = {
  weapon: {
    length: 12,
    height: 3,
    width: 1
  },
  helmet: {
    length: 6,
    height: 2,
    width: 2
  },
  body: {
    length: 6,
    height: 3,
    width: 2
  },
  glove: {
    length: 6,
    height: 2,
    width: 2
  },
  boot: {
    length: 6,
    height: 2,
    width: 2
  },
  ring: {
    length: 12,
    height: 1,
    width: 1
  },
  amulet: {
    length: 6,
    height: 1,
    width: 1
  },
  belt: {
    length: 6,
    height: 1,
    width: 2
  }
};

type PoeItemProps = {
  pic: string,
  width: number,
  height: number,
  value: boolean,
  id: string
};

const PoeItem = (props: PoeItemProps) => {
  const { pic, width, height, value, id } = props;
  return (
    <img
      id={id}
      className="col-auto"
      alt={pic}
      src={pics[pic]}
      width={width * 30}
      height={height * 30}
      style={{
        opacity: value ? 1 : 0.2
      }}
    />
  );
};

type PoeItemRowProps = {
  type: ChaosRecipeItemType,
  length: number,
  height: number,
  width: number,
  value: number,
  onIncrement: (itemType: ChaosRecipeItemType) => void,
  onDecrement: (itemType: ChaosRecipeItemType) => void
};

export const PoeItemRow = (props: PoeItemRowProps) => {
  const {
    length = 6,
    height = 2,
    width = 2,
    type,
    value,
    onIncrement,
    onDecrement
  } = props;
  const handleLeftClick = event => {
    event.stopPropagation();
    if (onIncrement) {
      onIncrement(type);
    }
  };

  const handleRightClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (onDecrement) {
      onDecrement(type);
    }
  };
  return (
    <div
      className="row justify-around"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {[...Array(length)].map((item, idx) => (
        <PoeItem
          key={`${type}-${idx}`}
          id={`${type}${idx}`}
          pic={type}
          width={width}
          height={height}
          value={value > idx}
        />
      ))}
    </div>
  );
};

type ChaosRecipeProps = {
  counts: ChaosRecipeStore,
  increment: (itemType: ChaosRecipeItemType) => void,
  decrement: (itemType: ChaosRecipeItemType) => void,
  reset: () => void,
  minusSet: () => void
};

const ChaosRecipeHelper = (props: ChaosRecipeProps) => {
  const { counts, increment, decrement, reset, minusSet } = props;
  return (
    <div className="vp-height full-width non-selectable column">
      <div
        className={`row justify-center items-center ${styles.contentContainer}`}
      >
        <div className={`${styles.container} col-auto`}>
          <div
            className={`${styles.buttonsContainer} row justify-around items-center`}
          >
            <button
              type="button"
              className={`${styles.btn} col-auto`}
              onClick={reset}
            >
              Reset
            </button>
            <button
              type="button"
              className={`${styles.btn} col-auto`}
              onClick={minusSet}
            >
              Minus set
            </button>
          </div>
          <div className={`${styles.gridContainer} column`}>
            {Object.keys(rows).map(type => (
              <PoeItemRow
                key={type}
                type={type}
                length={rows[type].length}
                height={rows[type].height}
                width={rows[type].width}
                value={counts[type]}
                onDecrement={decrement}
                onIncrement={increment}
              />
            ))}
          </div>
        </div>
      </div>
      <NavMenu exclude={routes.CHAOS_RECIPE} />
    </div>
  );
};

export default ChaosRecipeHelper;
