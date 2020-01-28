import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todos } from './reducers';

const reducer = combineReducers({ visibilityFilter, todos });
const store = createStore(reducer);

// get state
store.getState();    // { visibilityFilter: SHOW_ALL', todos: [] }

// dispatch action
store.dispatch({ type: 'COMPLETE_TODO', index: 1 });

// subscribe for state changes, returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

unsubscribe();      // unregister the listener