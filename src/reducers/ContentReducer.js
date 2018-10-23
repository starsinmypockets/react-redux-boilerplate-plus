export default (state = {}, action) => {
  switch (action.type) {
    case 'MODEL_ACTION':
      return {};
    case 'DATA_ACTION':
      return {};
    case 'FILES_ACTION':
      return {};
    case 'INTEGRATIONS_ACTION':
      return {};
    case 'FETCH_API_CONTENT_STARTED': {
      console.log(state, action);
      const newState = JSON.parse(JSON.stringify(state));
      newState.isFetching = true;
      return newState;
    }
    case 'FETCH_API_CONTENT_SUCCESS': {
      console.log(state, action);
      const newState = JSON.parse(JSON.stringify(state));
      newState.isFetching = false;
      newState.activeContent = action.payload;
      return newState;
    }
    case 'FETCH_API_CONTENT_FAILURE':
      console.log(state, action);
      return state;
    default:
      return state;
  }
};
