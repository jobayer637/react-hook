import React, { useReducer } from 'react'

const initialState = {
    count: 0
}
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (<div className="my-5">
        <div>
            <button className="btn btn-outline-dark mb-2">counter one = {counter.count}</button>
            <br />
            <button className="btn btn-dark mx-2" onClick={() => dispatch('increment')} >Increment</button>
            <button className="btn btn-dark mx-2" onClick={() => dispatch('decrement')} >Decrement</button>
            <button className="btn btn-dark mx-2" onClick={() => dispatch('reset')} >Reset</button>
        </div>
        <div className="my-5">
            <button className="btn btn-outline-dark mb-2">counter two = {counter.count}</button>
            <br />
            <button className="btn btn-dark mx-2" onClick={() => dispatch('increment')} >Increment</button>
            <button className="btn btn-dark mx-2" onClick={() => dispatch('decrement')} >Decrement</button>
            <button className="btn btn-dark mx-2" onClick={() => dispatch('reset')} >Reset</button>
        </div>
    </div>)
}

export default Counter