'use strict';

import createModalList from './create_modal_list.js';
import loading from '../components/modals/loading.js';

const modals = {
  loading,
};

export default createModalList(modals);
