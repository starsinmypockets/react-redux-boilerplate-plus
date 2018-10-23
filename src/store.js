import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const preloadedState = {
  UI: {
    leftNav: {
      open: true,
      models: true,
      data: false,
      files: true,
      integrations: true,
    },
  },
  Content: {
    models: [
      {
        name: 'Left Field Pastures',
        description: 'A description of it',
        id: 'abc123',
      },
      {
        name: 'Right Field Pastures',
        description: 'A description of it',
        id: 'abcdef1',
      },
      {
        name: 'Right Field Pastures',
        description: 'A description of it',
        id: 'def1',
      },
    ],
    data: [],
    integrations: [],
    files: [
      {
        name: 'pasture_left.csv',
        path: '/',
        id: '1',
      },
      {
        name: 'pasture_right.csv',
        path: '/',
        id: '2',
      },
      {
        name: 'later_one.csv',
        path: '/tmp/later/',
        id: '3',
      },
    ],
  },
};

export default function configureStore() {
  return createStore(rootReducer, preloadedState, enhancers);
}
