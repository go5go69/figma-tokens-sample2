/* eslint-disable */
import { FTSProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * FTS
 * Function for dynamically creating and auto-completing
 * FTS design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function fts(
  dsysStyles: FTSProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--FTS-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--fts-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--fts-${entry[0]}`] = `var( --fts-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
