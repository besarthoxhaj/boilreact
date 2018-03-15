import nock from 'nock';
import config from '../config';

export const btns = {
  cleanCookies: () => {
    console.log('CLEAN COOKIES');
  },
  openModal: (doc) => {
    return doc.querySelector(`[data-home-click="openModal"]`);
  },
  openAlert: (doc) => {
    return doc.querySelector(`[data-modal-click="openAlert"]`);
  },
  closeAlert: (doc) => {
    return doc.querySelector(`[data-alert-click="closeAlert"]`);
  },
  goToCounter: (doc) => {
    return doc.querySelector(`[data-home-click="goToCounter"]`);
  },
  keyDownRight: (win,doc) => {
    const event = new win.KeyboardEvent('keydown',{keyCode:39});
    doc.dispatchEvent(event);
  },
  keyDownLeft: (win,doc) => {
    const event = new win.KeyboardEvent('keydown',{keyCode:37});
    doc.dispatchEvent(event);
  },
  insertSearch: (win,doc,txt) => {
    const input = document.querySelector(`[data-search-input="changeText"]`);
    input.value = txt;
    const inputEvt = new window.Event('input', { bubbles: true });
    input.dispatchEvent(inputEvt);
  },
  enterSearch: (win,doc) => {
    const input = document.querySelector(`[data-search-input="changeText"]`);
    const event = new win.KeyboardEvent('keydown',{keyCode:13,key:'Enter',bubbles:true});
    input.dispatchEvent(event);
  }
};

export const intercept = (opts) => {
  if(opts.method === 'GET' || !opts.method) {
    nock(config('api') || opts.host)
    .get(config(opts.url) || opts.path)
    .query(obj => { return true })
    .reply(opts.status || 200, uri => { return opts.data });
  }
  if(opts.method === 'POST') {
    nock(config('api') || opts.host)
    .post(config(opts.url) || opts.path, reqBody => {
      if(opts.expectBody) opts.st.deepEqual(reqBody, opts.expectBody);
      return true;
    })
    .query(obj => {
      if(opts.query) opts.st.deepEqual(obj, opts.query);
      return true;
    })
    .reply(opts.status || 200, uri => { return opts.data });
  }
  if(opts.method === 'PUT') {
    nock(config('api') || opts.host)
    .put(config(opts.url) || opts.path, reqBody => {
      if(opts.expectBody) opts.st.deepEqual(reqBody, opts.expectBody);
      return true;
    })
    .query(obj => { return true })
    .reply(opts.status || 200, uri => { return opts.data });
  }
  if(opts.method === 'DELETE') {
    nock(config('api')|| opts.host)
    .delete(config(opts.url) || opts.path)
    .query(obj => { return true })
    .reply(opts.status || 200, uri => { return opts.data });
  }
};
