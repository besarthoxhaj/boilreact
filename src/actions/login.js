'use strict';

import * as types from '../action_types.js';
import fetch from 'isomorphic-fetch';
import config from '../config.js';
const { serverRoot } = config;
import apis from '../apis/index.js';
import * as alert from './alert.js';
import * as router from './router.js';

export const updateLoginInput = (field,value) => ({type:types.LOGIN_UPDATE_INPUT,field,value});
export const resetLogin = () => ({type:types.RESET_LOGIN});

export const submitLogin = () => (dispatch,getState) => {

  const {
    login:{email,password}
  } = getState();

  if (!email || !password) {
    return dispatch(alert.show('Error','Enter both email and password please'));
  } else {
    apis.localStorage.setItem('SESSION_TOKEN','SESSION_TOKEN');
    dispatch(router.navigateTo({name:'home'}));
  }

  // dispatch(modal.show({
  //   transparent:true,
  //   animated:false,
  //   route:'loading',
  //   text:'Wait...'
  // }));

  // const req = {
  //   method:'POST',
  //   headers: {'Content-type':'application/json'},
  //   body:JSON.stringify({email,password})
  // };

  // return fetch(`${serverRoot}/login`,req)
  // .then(response => response.json())
  // .then(json => {
  //   if (json.status === 'success') {
  //     apis.localStorage.setItem('SESSION_TOKEN',json.token);
  //   } else {
  //     // server error
  //   }
  // })
  // .catch(error => {
  //   // error
  // });
};
