describe('Navigation', function () {
    'use strict';

    var $window;

    beforeEach(function() {
        browser().navigateTo('/');
    });

    // it('should redirect to home if none hash is present, or a invalid one', function(){
    //     browser().navigateTo('/');
    //     expect( browser().location().url() ).toBe('/home');

    //     browser().navigateTo('#/non-existent-hash');
    //     expect( browser().location().url() ).toBe('/home');
    // });

    // it('should navigate to a different page when clicking in one of the section buttons', function() {
    //     element( 'li:first-child a' ).click();
    //     expect( browser().location().url() ).toBe('/solucoes');
    // });

    // it('should redirect to the previous url when the back button is clicked', function(){
    //     var prev = browser().navigateTo('/#/home');
    //     element( 'li:first-child a' ).click();
    //     expect( browser().location().url() ).not().toBe( prev );
    //     // #TODO: simulate back button
    // });

    // describe('Hash change', function(){
    //     it('should change after clicking one section button', function() {
    //         var prev = browser().navigateTo('/#/home');
    //         element( 'li:first-child a' ).click();
    //         expect( browser().location().url() ).not().toBe( prev );
    //     });

    //     it('should change to match the href attr of the button clicked', function() {
    //         element( 'li:first-child a' ).query(function(el, done){
    //             var href = el.attr('href').replace('#', '');
    //             el.click();
    //             expect( browser().location().url() ).toBe( href );
    //             done();
    //         });
    //     });
    // });

});