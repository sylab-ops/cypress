/// <reference types="cypress" />


it('Google Search Test', () => {
    cy.visit('https://google.com')
    Cypress.Cookies.debug(false)
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').clear().type("Current trends in cybersecurity 2023{enter}")
    cy.contains('Videos').click()
    cy.wait(4000) // or {timeout:5000}
})