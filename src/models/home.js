import * as home from '../services/home'

export default {

  namespace: 'home',

  state: {
    menuTop: {
      data: [{
        name: ''
      }
      ]

    },
    menuLeft: {}

  },

  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/') {
          dispatch({type: 'fetch', payload: query});
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      const {data} = yield call(home.query);
      yield put({type: 'save', payload: {data}});

    },
  },

  reducers: {
    save(state, action) {
      const menuTop = action.payload.data;
      return {...state, ...{menuTop}};
    },
  },

};
