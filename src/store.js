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
        name: 'Model Number 1',
        description: 'A description of Model 1',
        id: 'abc123',
      },
      {
        name: 'Model Number 2',
        description: 'A description of Model 2',
        id: 'abcdef1',
      },
      {
        name: 'Model Number 3',
        description: 'A description of Model 3',
        id: 'def1',
      },
    ],
    data: [],
    integrations: [],
    files: [
      {
        name: 'file1.csv',
        directory: '/',
        id: '1',
      },
      {
        name: 'file2.csv',
        directory: '/',
        id: '2',
      },
      {
        name: 'file2.csv',
        directory: '/tmp/later/',
        id: '3',
      },
    ],
  },
};

export default function configureStore() {
  return createStore(rootReducer, preloadedState, enhancers);
}
