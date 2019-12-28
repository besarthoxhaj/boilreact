'use strict';

export const CenterWrapper = require('./CenterWrapper').default;
export const LoopProps = require('./LoopProps').default;
export const Space = require('./Space').default;

export const wait = t => new Promise(ok => setTimeout(ok, t));