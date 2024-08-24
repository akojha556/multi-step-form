"use client"
import React from 'react'
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

const page = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default page