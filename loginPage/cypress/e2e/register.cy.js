import { errorMessages } from '../../components/Register';
describe('register page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5174/');
  })
  describe('Error Messages', () => {
  it('name input throws error for less than 2 characters', () => {
    //Arrange
    //cy.visit('http://localhost:5174/')
    //Act
    cy.get('[data-cy="ad-input"]').type("al")
    //Assert
    //cy.contains(errorMessages.ad);
    })
    it('surname input throws error for less than 2 characters', () => {
      //Arrange
      //cy.visit('http://localhost:5174/')
      //Act
      cy.get('[data-cy="soyad-input"]').type("sa")
      //Assert
      cy.contains(errorMessages.soyad);
      })
      it('email input throws error for invalid email', () => {
        //Arrange
        //cy.visit('http://localhost:5174/')
        //Act
        cy.get('[data-cy="email-input"]').type("alper@alp.")
        //Assert
        cy.contains(errorMessages.email);
      })
      it('password input throws error for less than 8 characters', () => {
        //Arrange
        //cy.visit('http://localhost:5174/')
        //Act
        cy.get('[data-cy="password-input"]').type("1234")
        //Assert
        cy.contains(errorMessages.Sifre);
      })
      it('password input throws error for less than 8 characters', () => {
        //Arrange
        //cy.visit('http://localhost:5174/')
        //Act
        cy.get('[data-cy="password-input"]').type("1234")
        //Assert
        cy.contains(errorMessages.Sifre);
      })
      it('button is disabled for unvalidated inputs', () => {
        //Arrange
        //cy.visit('http://localhost:5174/')
        //Act
        cy.get('[data-cy="password-input"]').type("1234")
        //Assert
        cy.get('[data-cy="submit-button"]').should("be.disabled")
      })
      
    
  })
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      //Arrange
      //cy.visit('http://localhost:5174/')
      //Act
      cy.get('[data-cy="ad-input"]').type("Alper");
      cy.get('[data-cy="soyad-input"]').type("Genc");
      cy.get('[data-cy="email-input"]').type("alpergenc@gmail.com");
      cy.get('[data-cy="password-input"]').type("123456Aa*");
      //Assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
      });

        
      
    });
});