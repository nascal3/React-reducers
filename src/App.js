import './App.css';
import {useReducer, useState} from "react";

function App() {

  const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, {count: 0, incrementBy: 1})

    function reducer(state, action) {
        const map = {
                'increment': {...state, count: state.count + action.payload + state.incrementBy},
                'decrement': {...state, count: state.count - action.payload - state.incrementBy},
                'setIncrementBy': {...state, incrementBy: action.payload}
            }

        return map[action.type]
    }

  return (
      <div className="App">
          <h2>useState: {count}</h2>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={() => setCount(count - 1)}>Decrease</button>

          <h2>reducer: {state.count}</h2>
          <input value={state.incrementBy}
            onChange={(e)=> dispatch({type: "setIncrementBy", payload: Number(e.target.value)})}
            type="text"
          />
          <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increase</button>
          <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrease</button>
      </div>
  );
}

export default App;
