// mock API response
const API = [
  {
    title: '123',
    id: 123,
    description: 'Foo bar baz',
    contentType: 'model',
  },
  {
    title: '123',
    id: 124,
    description: 'Foo bar baz',
    contentType: 'model',
  },
  {
    title: '123',
    id: 125,
    description: 'Foo bar baz',
    contentType: 'model',
  },
];

const FetchAPIContentStarted = () => ({
  type: 'FETCH_API_CONTENT_STARTED',
})

const FetchAPIContentSuccess = res => ({
  type: 'FETCH_API_CONTENT_SUCCESS',
  payload: res,
});

const FetchAPIContentFailure = err => ({
  type: 'FETCH_API_CONTENT_FAILURE',
  payload: err,
});

export const FetchAPIContentAction = opts => dispatch => {
  console.log('FA', opts)
  dispatch(FetchAPIContentStarted());
  const res = API[opts.id];

  // @@TODO IMPLEMENT FETCH
  setTimeout(() => {
    if (res) {
      dispatch(FetchAPIContentSuccess(res));
    } else {
      dispatch(
        FetchAPIContentFailure({
          payload: 'Bad ID',
        }),
      );
    }
  }, 1600);
};
