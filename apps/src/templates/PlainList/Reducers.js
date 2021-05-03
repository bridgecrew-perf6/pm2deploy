const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "@@template/LOAD_DATA":
      return {
        ...state
        // [action.storeKey]: {
        //   data: [],
        //   currentState: "idle"
        // }
      };
    case "@@template/ADD_DATA":
      return {
        ...state,
        [action.storeKey]: action.data
        // [action.storeKey]: {
        //   data: action.data
        // }
      };
    case "@@template/DELETE_DATA":
      return {
        ...state,
        [action.storeKey]: {}
      };
    default:
      return state;
  }
};
