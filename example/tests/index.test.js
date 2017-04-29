import React from 'react';
import { shallow } from 'enzyme';
import { prettyPrint } from 'html';
import cheerio from 'cheerio';
import syncFlow from 'sync-flow';
import test from 'tape';
import Carousel from './index';

const log = (elm) => {
  return prettyPrint(
    elm, {indent_size: 2}
  );
};

describe('<Carousel />', () => {
  it('Expect to have unit tests specified', (done) => {

    const wrapperOne = shallow(<Carousel />);
    const wrapperTwo = shallow(<Carousel />);
    const instanceOne = wrapperOne.instance();
    const instanceTwo = wrapperTwo.instance();

    const btnOne = wrapperOne.find('button[data-func-next]');
    const btnTwo = wrapperTwo.find('button[data-func-next]');

    const exec = [
      () => {
        instanceOne.change({keyCode:39});
      },
      () => {
        expect(instanceOne.state.list).toEqual(['002','003']);
      },
      () => {
        wrapperOne.find('button[data-func-next]').simulate('click');
      },
      () => {
        expect(instanceOne.state.list).toEqual(['003','004']);
        expect(log(wrapperOne.html())).toMatchSnapshot();
        wrapperOne.find('button[data-func-prev]').simulate('click');
      },
      () => {
        expect(instanceOne.state.list).toEqual(['002','003']);
        expect(log(wrapperOne.html())).toMatchSnapshot();
        done();
      }
    ];

    syncFlow(exec, (error) => {
      console.log('ERROR_TEST:',error);
      expect(error).toEqual(undefined);
      done();
    },100);
  });
});
