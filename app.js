var budgetController = (function() {

 // some code

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

        // 1. input data
        var input = UICtrl.getInput();
        // 2. Add item to budgetController

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