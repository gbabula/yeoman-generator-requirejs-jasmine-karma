/* global describe, it */

define(['main'], function(main) {

    describe('main module test', function() {

        it('should return a valid version', function() {
            expect(main.version).toEqual(_.VERSION);
        });

    });

});
