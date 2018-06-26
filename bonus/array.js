var array_one = ['apple', 'dog', 'cat', 'food', 'kite', 'elephant', 'lunch', 'book', 'laptop'];
var array_two = ['dog', 'goose', 'kite', 'meal', 'laptop', ]

// As per the instructions I am using the map method to loop through each array and directly compare each index for matches. If a match occurs, I am adding it to the repeat variable and then console.logging the repeat variable after the first map. 
let repeat = '';
array_one.map(items_one => {
    array_two.map(items_two => {
        items_one === items_two && (repeat += `${items_one} `);
    })
})
console.log(repeat);







