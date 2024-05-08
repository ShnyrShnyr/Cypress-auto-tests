describe('Покемоны. Покупка АВА тренеру', function () {

    it('Полный путь покупки аватара тренеру', function () {
         cy.visit('https://pokemonbattle.me/'); // Зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('andreishnyrin@yandex.ru'); // ввели логин
         cy.get('#password').type('Zxasq1'); // ввели пароль
         cy.get('.auth__button').click(); //нажали войти
         cy.get('.header__btns > [href="/shop"]').click(); //вошли в магазин
         cy.get('.available > .shop__button').first().click(); // нажали купить определенного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // ввели номер карты
         cy.wait(2000);
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0230'); // ввели срок действия
         cy.wait(2000);
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввели CVV
         cy.wait(2000);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Shnyr Shnyr'); // ввели владельца
         cy.wait(2000);
         cy.get('.pay-btn').click(); // нажали оплатить
         cy.wait(5000);
         cy.get('#cardnumber').type('56456'); // ввели код из смс
         cy.wait(5000);
         cy.get('.payment__submit-button').click(); // нажали отправить
         cy.wait(5000); //подождали 5 секунд
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно') // получили ответ, что покупка прошла

    })
})

/* Напиши e2e (end-to-end) автотест для покемонов: на покупку нового аватара для своего тренера

При end-2-end тестировании мы проходим критический путь за пользователя. Например, это может быть покупка товара для вайлберис, заказ такси для яндекс.такси, а для покемонов — весь путь по покупке аватара или проведение одной битвы
В этом автотесте есть сложный момент — как каждый раз выбирать разный аватар.
Нужно искать карточку с аватором, у которой есть класс available. */