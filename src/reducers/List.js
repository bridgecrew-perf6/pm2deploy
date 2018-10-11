const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        list: action.payload
      };
    case "DELETE_LIST":
      return {
        list: []
      };
    default:
      return state;
  }
};
