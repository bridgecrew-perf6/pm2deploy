export const getItemsStart = storeKey => ({
  type: "@@template/LOAD_DATA",
  storeKey
});

export const addItems = ({ storeKey, data }) => ({
  type: "@@template/ADD_DATA",
  storeKey,
  data
});

export const resetList = storeKey => ({
  type: "@@template/RESET_DATA",
  storeKey
});

export const getItems = (dataSource, storeKey) => async dispatch => {
  dispatch(getItemsStart());

  const { data, error } = await dataSource();

  if (data) dispatch(addItems({ storeKey, data }));
  else if (error) dispatch(addItems({ storeKey, data }));
};

export default getItems;
