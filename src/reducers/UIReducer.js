export default (state = {}, action) => {
  switch (action.type) {
    case 'UI_ACTION':
      let newState = JSON.parse(JSON.stringify(state));
      const path = action.payload[0];
      const val = action.payload[1];

      newState[path[0]][path[1]] = val;
      return newState;
    default:
      return state;
  }
};
