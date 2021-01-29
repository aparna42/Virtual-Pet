
class Food {
    constructor() {
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage('Images/Milk.png');
    }

    updateFoodStock(foodStock) {
        //enter code to update foodStock here
    }

    deductFood() {
        if (this.foodStock > 0) {
            //enter code to deduct food here
        }
    }

    getFoodStock() {
        //enter code to return foodStock here
    }

    display() {
        //write code to display the bigger milk bottle in front of the dog

        if (this.foodStock != 0) {
            for (var i = 0; i < this.foodStock; i++) {
                //write code here to display milk bottles in a line 
                //if milk bottles are bigger in number, you can display them in multiple rows
            }
        }
    }
}
    
    
    