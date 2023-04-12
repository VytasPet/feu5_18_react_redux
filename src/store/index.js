// gyvens app wide state
import { createStore } from 'redux';

const initState = { counter: 0 };

// reducer function
function counterReducer(state = initState, action) {}

// store sukurimas
const store = createStore(counterReducer);

export default store;
