

class Strategy {
    indicators = [];
    conditions = [];
    decisions = [];

    constructor(indicators = [], conditions = [], decisions = []) {
        this.indicators = indicators;
        this.conditions = conditions;
        this.decisions = decisions;
     }

    buildStrategy(){
        //if condition [i] = 0, crossing up
        //if condition [i] = 1, crossing down
        //custom value is 0, price is 1, indicators numbered 2-22, 

        //Looking for crossing up signals
        if(condition[0] == 0){
            //Signals when one indicator is above the other
            if(indicators[0].value > indicators[1].value){
                return decision[0];
            }
        }
        //Looking for crossing down signals
        else if(condition[0] == 1){
            //Signals when one indicator is below the other
            if(indicators[0].value < indicators[1].value){
                return decision[1];
            }
        }
    }

    executeTrade(){


    }
}

module.exports = Strategy;