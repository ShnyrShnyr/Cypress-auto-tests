describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Нашли локатор логина и вели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Нашли локатор пароля и ввели венрый пароль
         cy.get('#loginButton').click(); // Нашли кнопку войти и кликнули на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что текст совпадает
         cy.get('#messageHeader').should('be.visible'); // Текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что крестик виден пользователям
    })
    it('Забыл пароль?', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нашли кнопку забыли пароль и нажали ее
         cy.get('#mailForgot').type('aas280883@gmail.com'); // Ввели любую почту
         cy.get('#restoreEmailButton').click(); //нажали восстановить пароль
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Получили подтверждение, что письмо отправилено
         cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверяем, что крестик виден пользователям
    })  
    it('НЕ верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввели правильный логин
         cy.get('#pass').type('iLoveqas1'); //Ввели НЕ правильный пароль
         cy.get('#loginButton').click(); // Кликнули на нее
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что текст совпадает
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что крестик виден пользователям
         })

    it('Верный пароль и НЕ верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnik.ru'); //Ввели НЕ правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
         cy.get('#loginButton').click(); // Кликнули на нее
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что текст совпадает
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что крестик виден пользователям
         })
    it('Верный пароль и логин без @', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('germandolnikov.ru'); //Ввели НЕ правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
         cy.get('#loginButton').click(); // Кликнули на нее
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем, что текст совпадает
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что крестик виден пользователям
         }) 
    it('Приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели НЕ правильный логин
         cy.get('#pass').type('iLoveqastudio1'); //Ввели правильный пароль
         cy.get('#loginButton').click(); // Кликнули на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что текст совпадает
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что крестик виден пользователям
         })     
})