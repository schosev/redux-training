import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { addError } from './actions'

//--<Provider> is a component that you can wrap around any component tree, 
//--and it will place the store in Context. Context is a feature, that will allow 
//--any child React component to interact with the store, if they want to.

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
  store.dispatch(addError(error.message))
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React  //globally exposing react to the window
window.store = store  //globally exposing the store to the window

window.addEventListener("error", handleError)

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('react-container')
)

//added below to just create an error to test the errors
//foo = bar
