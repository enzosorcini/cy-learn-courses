describe("User journey", () => {
    it.only("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit("http://localhost:3000")
        //opens course page
        cy.getByData('course-0').find('a').contains(/get started/i).click()
        cy.location('pathname').should('equal', '/testing-your-first-application')
        //starts first lesson
        cy.getByData('next-lesson-button').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/app-install-and-overview')
        //finishes first lesson and starts second one
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/installing-cypress-and-writing-our-first-test')
        //finishes second lesson and starts third one
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should('equal', '/testing-your-first-application/setting-up-data-before-each-test')
        //finishes third lesson and the course
        //should be redirected to home page
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should('equal', '/')
    })

})