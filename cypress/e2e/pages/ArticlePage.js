
class ArticlePage {

    verifyURL() {
        cy.url()
            .should('include', '/articles/')
    }

    verifyFavoriteIconIsVisible() {
        cy.get('.btn-outline-primary')
            .should('be.visible')
            .and('contain', "Favorite Article");
    }

    fillInArticleFields() {
        cy.get('[placeholder="Article Title"]')
            .type('My Title');

        cy.get('[class="form-group"]')
            .eq(1)
            .type('Article Description');

        cy.get('[class="form-group"]')
            .eq(2)
            .type('Lorem ipsum');

        cy.get('[class="form-group"]')
            .eq(3)
            .type('#mytag');
    }

    clickOnPublishAnArtcile() {
        cy.intercept('POST', 'https://api.realworld.io/api/articles')
            .as('postAnArticle');


        cy.get('[class="btn btn-lg pull-xs-right btn-primary"]')
            .should('contain', 'Publish Article')
            .click();

        // Assertion to know if the article was published

        cy.wait('@postAnArticle').its('response.statusCode').should('eq', 201);
            
    }

}

export default new ArticlePage();