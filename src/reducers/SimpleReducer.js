export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
        i: state.i ? state.i + 1 : 1,
      };
    case 'UI_ACTION':
      console.log(action, state)
      return {
        leftNav: {
          open: true
        }
      }

    default:
      return state;
  }
};
