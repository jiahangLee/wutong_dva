import * as home from '../services/home'
export default {

  namespace: 'home',

  state: {
    menuTop: {},
    menuLeft: {}

  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          console.log("aaa");

          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload}, { call, put }) {
      const {data} = yield call(home.query);
      console.log("aaa");
      yield put({ type: 'save',payload:{data}});
      console.log("aaa");

    },
  },

  reducers: {
    save(state, action) {
      const menuTop = action.payload.data;
      const all = {...state, ...{menuTop}}
      return { ...state, ...{menuTop}};
    },
  },

};
