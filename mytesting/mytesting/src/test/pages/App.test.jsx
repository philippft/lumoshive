/* eslint-disable no-undef */
// import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
// render > untuk menampilkan komponen ke virtual DOM / fake DOM testing
// screen > untuk mengakses elemen di virtual DOM / fake DOM testing
// fireEvent > untuk mensimulasikan aksi user (klick, input, dll)

import App from '../../App'

import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from '../../redux/counterReducer'

const renderDenganRedux = (
  komponen,
  { initialState, store = createStore(counterReducer, initialState) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {komponen}
      </Provider>
    ),
    store
  }
}

describe('Test Integrasi App Component', () => {
  // komponen app berinteriaksi dengan state redux
  test('merender komponen app dan berinterasi dengan state redux', () => {

    renderDenganRedux(<App />)


    expect(screen.getByAltText("Vite logo")).toBeInTheDocument()
    expect(screen.getByAltText("React logo")).toBeInTheDocument()

    // Cek State Awal

    // ambil tombol berdasarka role button
    const buttonHitung = screen.getByRole('button')
    // pastikan text awal count is 0
    expect(buttonHitung).toHaveTextContent('count is 0')


    // interaksi user
    fireEvent.click(buttonHitung)
    // pastikan text count is 1
    expect(buttonHitung).toHaveTextContent('count is 1')

    fireEvent.click(buttonHitung)
    // pastikan text count is 2
    expect(buttonHitung).toHaveTextContent('count is 2')
  })

})
