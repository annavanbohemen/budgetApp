var budgetController = (function() {

 // some code

})();

var UIController = (function() {

    // some code for UI

})();

var appController = (function(budgetCtrl, UICtrl) {

    var addItem = function() {

        // 1. input data

        // 2. Add item to budgetController

        //3. Add item to UIController

        //4. calculate the budget

        //5. display the budget - UI
        console.log('it works')
    };

    document.querySelector('.add__btn').addEventListener('click', function(){
        
        addItem();

    });

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            addItem();
        }
       
    });



})(budgetController, UIController);