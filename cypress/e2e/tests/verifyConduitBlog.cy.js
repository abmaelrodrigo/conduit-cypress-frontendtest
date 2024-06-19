/// <reference types="cypress" />

import ArticlePage from "../pages/ArticlePage";
import Header from "../pages/Header";
import HomePage from "../pages/HomePage"
import SignUpPage from "../pages/SignUpPage";

context('Access an article', () => {
    beforeEach(() => {
        cy.visit('/');
    });


    it('Verify user can access an article on Homepage', () => {
        HomePage.clickOnFirstArticleTitle();
        ArticlePage.verifyURL();
        ArticlePage.verifyFavoriteIconIsVisible();
    })
});

context('Create an article', () => {
    beforeEach(() => {
        cy.visit('/register');
    });


    it('Verify user can create an account', () => {
        SignUpPage.creatAnAccount();
        
    })
});


context('Post an article', () => {
    beforeEach(() => {
        cy.visit('/register');
    });


    it('Verify user can post an article', () => {
        SignUpPage.creatAnAccount();
        Header.clickOnNewArticle();
        ArticlePage.fillInArticleFields();
        ArticlePage.clickOnPublishAnArtcile();

        
    })
});


