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
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
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
            value: parseFloat(document.querySelector('.add__value').value)
            }
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            //create HTML string with placeholder txt
            if (type === 'inc') {
                element = '.income__list'

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
            } else if (type === 'exp') {
                element = '.expenses__list'

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            // replace placeholder text with date
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArray;

            // returns a list
            fields = document.querySelectorAll('.add__description' + ', ' + '.add__value');
            // makes it an array
            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current) {
                current.value = "";
            });

            fieldsArray[0].focus();
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

    var updateBudget = function() {
        //1. calculate the budget

        //2. returns the budget

        //3. display the budget - UI
    }

    var addItem = function() {
        var input, newItem
        // 1. input data
        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        // 2. Add item to budgetController
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add item to UIController
        UICtrl.addListItem(newItem, input.type);

        //4. clear the fields
        UICtrl.clearFields();
        
        //calculate and update budget
        updateBudget();

        } else {
            alert('please add description and/or value')
        }
    };

return {
    init: function() {
        allEventListeners();
    }
}

})(budgetController, UIController);

appController.init();