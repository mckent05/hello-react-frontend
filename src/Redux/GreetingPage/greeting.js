const GET_DATA = 'store/greetingPage/GET_DATA';

const initialState = [];

const fetchData = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const getData = () => async (dispatch) => {
  const data = await fetch('http://127.0.0.1:3000/api/v1/greeting/');
  console.log(data);
  const response = await data.json();
  dispatch(fetchData(response.message));
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [action.payload];

    default:
      return state;
  }
};

export default greetingReducer;
