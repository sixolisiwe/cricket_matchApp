const assert = require("assert");
const cricketApp = require('../cricketMatch');


describe('cricketApp for Score Overs', function () {


    it('should check the score total for over1', function () {
        const app = cricketApp();
        var scoreType = app.scoreString("1-1-1 2")
        assert.deepEqual(app.getScoreTotal(), 5 );
    });
    
    it('should check the score total for over2', function () {
        const app = cricketApp();
        var scoreType = app.scoreString("1-2-1 2")
        assert.deepEqual(app.getScoreTotal(), 6 );
    });

    it('should check the score total for over3', function () {
        const app = cricketApp();
        var scoreType = app.scoreString("4-2-1 2")
        assert.deepEqual(app.getScoreTotal(), 9 );
    });
    it('should check the score total for over4', function () {
        const app = cricketApp();
        var scoreType = app.scoreString("--2-w 2")
        assert.deepEqual(app.getScoreTotal(), 4 );
    });

    it('should check the score total for over5', function () {
        const app = cricketApp();
        var scoreType = app.scoreString("------")
        assert.deepEqual(app.getScoreTotal(), 0 );
    });

// })
// describe('cricketApp for wickets on Overs', function () {


//     it('should check the score total for over1', function () {
//         const app = cricketApp();
//         var wicketType = app.wicketSet("1-1-1 2")
//         assert.deepEqual(app.wicketGet(), 0 );
//     });

//     it('should check the score total for over1', function () {
//         const app = cricketApp();
//         var wicketType = app.wicketSet("1-w-w 2")
//         assert.deepEqual(app.wicketGet(), 2 );
//     });
    
//     it('should check the score total for over2', function () {
//         const app = cricketApp();
//         var wicketType = app.wicketSet("w-w-w-")
//         assert.deepEqual(app.wicketGet(), 2 );

//     });
})
