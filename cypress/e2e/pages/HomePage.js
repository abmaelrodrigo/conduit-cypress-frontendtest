
class HomePage {

    clickOnFirstArticleTitle() {
        cy.get('[class="preview-link"]')
            .first()
            .click();

    }

}

export default new HomePage();