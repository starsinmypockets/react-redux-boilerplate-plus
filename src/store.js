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
        id: 'm1',
      },
      {
        name: 'Model Number 2',
        description: 'A description of Model 2',
        id: 'm2',
      },
      {
        name: 'Model Number 3',
        description: 'A description of Model 3',
        id: 'm3',
      },
    ],
    data: [
      {
        name: 'Data Item 1',
        description: 'A description of Data Item 1',
        id: 'd1',
      },
      {
        name: 'Data Item 2',
        description: 'A description of Data Item 2',
        id: 'd2',
      },
    
    ],
    files: [
      {
        name: 'file1.csv',
        directory: '/',
        id: 'f1',
      },
      {
        name: 'file2.csv',
        directory: '/',
        id: 'f2',
      },
      {
        name: 'file3.csv',
        directory: '/tmp/later/',
        id: 'f3',
      },
    ],
  },
};

export default function configureStore() {
  return createStore(rootReducer, preloadedState, enhancers);
}
