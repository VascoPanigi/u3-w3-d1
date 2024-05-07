const initialState = {
  favoriteCompany: {
    content: [],
  },
};

const favoriteCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favoriteCompany: {
          ...state.favoriteCompany,
          content: state.favoriteCompany.concat(action.payload),
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favoriteCompany: {
          ...state.favoriteCompany,
          content: state.favoriteCompany.content.filter((company) => company !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default favoriteCompanyReducer;
