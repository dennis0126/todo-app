const filtersDefaultState = {};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_FILTER_ALL":
      return {};
    case "SET_FILTER_ACTIVE":
      return {
        completed: false,
      };
    case "SET_FILTER_COMPLETED":
      return {
        completed: true,
      };
    default:
      return state;
  }
};

export default filtersReducer;
