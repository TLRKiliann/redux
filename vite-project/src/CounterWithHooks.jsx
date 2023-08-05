import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = useCallback(() => dispatch(actions.increment()))
  const decrement = useCallback(() => dispatch(actions.decrement()))
  return (
    <p>
      Compteur:
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </p>
  )
}

export default Counter