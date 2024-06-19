class ArticleEditorPage {

    verifyURL() {
        cy.url()
            .should('include', '/editor')
    }
    
    verifyFavoriteIconIsVisible() {
        cy.get('.btn-outline-primary')
            .should('be.visible')
            .and('contain', "Favorite Article");
    }

}

export default new ArticleEditorPage();