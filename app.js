var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }
})();

var UIController = (function() {

    // some code for UI

})();

var appController = (function(budgetCtrl, UICtrl) {


})(budgetController, UIController);