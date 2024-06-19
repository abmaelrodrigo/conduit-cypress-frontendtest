
class Header {

    verifyAccountIsCreated(userName) {
        cy.get('[class="nav-link"]')
            .eq(2)
            .should('contain', userName)

    }

    clickOnNewArticle() {
        cy.get('[class="nav-item"]')
            .eq(1)
            .should('contain', "New Article")
            .click();
    }

}

export default new Header();