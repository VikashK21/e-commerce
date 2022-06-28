export const TYPES = {
  GETALL: "GETALL",
  ERROR: "ERROR"
};

export const initialState = {
  products: [
    {
      name: "tomatoes",
      description: "This is reddish and fresh veg.",
      price: "23",
      image:
        "https://static4.depositphotos.com/1017505/320/i/450/depositphotos_3201839-stock-photo-three-tomatoes.jpg"
    }
  ],
  error: ""
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GETALL:
      return { products: action.payload };
    case TYPES.ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};

export default AppReducer;
