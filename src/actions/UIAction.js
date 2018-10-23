export const UIAction = (part, state) => dispatch => {
 dispatch({
  type: 'UI_ACTION',
  payload: [part, state]
 })
}
