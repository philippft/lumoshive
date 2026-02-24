/* eslint-disable no-undef */
describe('Testing Tombol Hitung', () => {
  it('Klik tombol hitung', () => {

    // Mengujungi URL aplikasi / website kita
    cy.visit('http://localhost:5173/')

    // // Klik tombol "increment"
    // cy.get('button[cy-data="increment"]').click()

    // // Memastikan tombol "increment" memiliki teks "count is 1"
    // cy.contains('count is 1').should('be.visible')

    // // Klik tombol "increment" memiliki text "count is 2"
    // cy.get('button[cy-data="increment"]').click()
    // cy.contains('count is 2').should('be.visible')

    // Simulasi pengjuan tombol klick berulang 50x
    for (let i = 0; i < 1000; i++) {
      cy.get('button[cy-data="increment"]').click()
      cy.contains('count is ' + (i + 1)).should('be.visible')
    }

  })
})