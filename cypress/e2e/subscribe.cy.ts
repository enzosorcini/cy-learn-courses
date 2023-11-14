describe("Newsletter subscribe form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData('email-input').type("some@mail.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains("some@mail.com")
    })

    it("does NOT allow an invalid email address", () => {
        cy.getByData('email-input').type("lalala")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it("does not allow subscriptions from already subscribed emails", () => {
        cy.getByData('email-input').type("john@example.com")
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message')
            .should('exist')
            .contains("john@example.com already exists")
    })
})