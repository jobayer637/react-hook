import React, { useState, useCallback } from 'react'

const CounterTwo = () => {

    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)


    const handleCounterTwo = (num) => {
        num === 0 ? setCountTwo(0) : setCountTwo(countTwo + num)
    }

    const handleCounterOne = useCallback((num) => {
        let x = 0;
        while (x < 1000000000) {
            x++
        }
        num === 0 ? setCountOne(0) : setCountOne(countOne + num)
    }, [countOne])



    return (<div className="my-5">
        <div>
            <button className="btn btn-outline-dark mb-2">counter one = {countOne}</button>
            <br />
            <button className="btn btn-dark mx-2" onClick={() => handleCounterOne(1)} >Increment</button>
            <button className="btn btn-dark mx-2" onClick={() => handleCounterOne(-1)} >Decrement</button>
            <button className="btn btn-dark mx-2" onClick={() => handleCounterOne(0)} >Reset</button>
        </div>
        <div className="my-5">
            <button className="btn btn-outline-dark mb-2">counter two = {countTwo}</button>
            <br />
            <button className="btn btn-dark mx-2" onClick={() => handleCounterTwo(1)} >Increment</button>
            <button className="btn btn-dark mx-2" onClick={() => handleCounterTwo(-1)} >Decrement</button>
            <button className="btn btn-dark mx-2" onClick={() => handleCounterTwo(0)} >Reset</button>
        </div>
    </div>)
}

export default CounterTwo