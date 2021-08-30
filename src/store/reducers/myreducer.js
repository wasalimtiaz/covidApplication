const intialState = {
  isLoading: false,
  data: [],
  error: null,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, isLoading: true };
    case "FetchData":
      return { ...state, data: action.data, isLoading: false };
    case "ERROR":
      return { ...state, error: action.msg, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
