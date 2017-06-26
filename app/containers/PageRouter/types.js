/* @flow */

type Location = {
  pathname: string,
  search: string,
  hash: string,
};

export type RouterState = {
  location: Location,
};
