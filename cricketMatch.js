module.exports = function cricketScores(totalOvers) {
    var currentTotal = 0;
    var lostWickets = 0;
    var gameOvers = 0;


    function scoreString(scoreType) {

        var scoreTotal = scoreType.split('');
        for (var i = 0; i < scoreTotal.length; i++) {
            var cricketItem = scoreTotal[i].trim();
            if (cricketItem === "-") {
                currentTotal += 0;
            }
            if (cricketItem > 0 && cricketItem < 7) {

                currentTotal += parseInt(cricketItem);
            }
            if (cricketItem === "w") {
                currentTotal += 0
            }
        }

    }

    function getScoreTotal() {

        return currentTotal;
    }


   // function wicketSet(wicketAll) {
    //     // var wicketTotal = wi.split('');
    //     wicketAll = currentTotal;
    //     var wicketsAll = []
    //     for (var i = 0; i < wicketAll.length; i++) {
    //         var wicketItem = wicketAll[i];
    //         if (wicketItem === "w") {
    //            wicketItem.push(wicketsAll);

    //         } 
    //     }
    //         if(wicketsAll.length >=10){
    //             gameOvers += wicketsAll
    //         }
            
    //         else {
    //             lostWickets++
    //         }


    // } 


    function wicketGet() {
        return lostWickets
    }

    return {
        scoreString,
        getScoreTotal,
        // wicketSet,
        // wicketGet
    }



}