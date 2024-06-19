import Header from "./Header";

class SignUpPage {
    generateUserData() {
        cy.request('https://randomuser.me/api/')
            .then((body) => {
                const fileContent = JSON.stringify(body)
                //console.log('body ' + fileContent)
                cy.writeFile('cypress/fixtures/userData.json', fileContent)
            })

    }

    creatAnAccount() {
        this.generateUserData();

        cy.readFile('cypress/fixtures/userData.json').then(userData => {
            let userName = userData.body.results[0].login.username;
            cy.get('[placeholder="Username"]')
                .type(userName);

            cy.get('[placeholder="Email"]')
                .type(userData.body.results[0].email);

            cy.get('[placeholder="Password"]')
                .type(userData.body.results[0].login.password + userData.body.results[0].name.first + '#');

            cy.get('[class="btn btn-lg btn-primary pull-xs-right"]')
                .click();

            // Assert account is created
            Header.verifyAccountIsCreated(userName);


        })





    }



}

export default new SignUpPage();