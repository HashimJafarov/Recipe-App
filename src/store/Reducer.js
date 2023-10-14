const init = {
  favorites: [],
};
export default function Reducer(state = init, action) {
  switch (action.type) {
    case "SET_FAVORITE":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}
