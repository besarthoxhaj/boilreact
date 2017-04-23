import test from 'tape';
import createStore from './helpers/store';

test('hello', t => {
  const store = createStore();
  console.log('store',store.getState());
  t.ok('good');
  t.end();
});
