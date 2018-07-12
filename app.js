var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val){
            var newItem

            //create new ID for newItem
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0
            };

            //create newItem inc or exp
            if (type === exp) {
                newItem = new Expense(ID, des, val);
            } else if (type === inc) {
                newItem = new Income(ID, des, val);
            }
            
            //push tot data structure
            data.allItems[type].push(newItem);

            //return new element
            return newItem;
        }
    };

})();

var UIController = (function() {

    return {
        getInput: function(){

            return{
            type: document.querySelector('.add__type').value,
            description: document.querySelector('.add__description').value,
            value: document.querySelector('.add__value').value
            }
        }
    };

})();

var appController = (function(budgetCtrl, UICtrl) {

    var allEventListeners = function() {

        document.querySelector('.add__btn').addEventListener('click', addItem);

        document.addEventListener('keypress', function(event) {
    
            if (event.keyCode === 13 || event.which === 13) {
                addItem();
            }
           
        });
    }


    var addItem = function() {
        var input, newItem
        // 1. input data
        input = UICtrl.getInput();

        // 2. Add item to budgetController
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add item to UIController

        //4. calculate the budget

        //5. display the budget - UI
    
    };

return {
    init: function() {
        console.log('all setup?')
        allEventListeners();
    }
}

})(budgetController, UIController);

appController.init();