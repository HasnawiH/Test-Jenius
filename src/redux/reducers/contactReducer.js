const initialState = {
    listAll: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "GET_CONTACT" :
        return {
          ...state,
          listAll: action.payload
        }
      default:
        return state;
    }
  }
  