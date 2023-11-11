describe('home page', () => {
  
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })

  it("h1 contains the correct text", () => {
    cy.getByData('hero-heading')
      .contains(/Testing Next.js Applications with Cypress/i)
  })

  it("the features on the homepage are correct", () => {
    cy.get('dt').eq(0).contains(/4 courses/i)
    cy.get('dt').eq(1).contains("25+ Lessons")
    cy.get('dt').eq(2).contains(/Free and Open Source/i)
  })
})