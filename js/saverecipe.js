/**
 * Created by tsamb on 12/13/2016.
 */
var database = firebase.database();
var recipe_list = database.ref('recipe');

// var DEBUG = true;
//
// var database = new firebase.database();
//

// var  recipe_name_text = document.getElementById('recipename').value;
// var recipe_intro_text = document.getElementById('recipeintroduction').value;
// var servings_text = document.getElementById('servings').value;
// console.log("recipe_name_text", recipe_name_text);
// console.log("recipe_intro_text", recipe_intro_text);
// console.log("servings_text", servings_text);

// recipe_list.child('value').then(function(snapshot) {
//     // var username = snapshot.val().username;
//     console.log(snapshot.val().recipe) ;
//     console.log("recipe_name", snapshot.val().recipe_name);
//     // ...
// });

firebase.database().ref('recipe').on("child_added", function(snapshot) {
    // console.log(snapshot.val());
    console.log('recipe_name:',snapshot.val().recipe_name ) ;
    console.log('recipe_intro:',snapshot.val().recipe_intro ) ;
    console.log('servings:',snapshot.val().servings ) ;
    console.log('prep_time:',snapshot.val().prep_time ) ;
    console.log('cook_time:',snapshot.val().cook_time ) ;
    console.log('rest_time:',snapshot.val().rest_time ) ;
    console.log('ingredient_name:',snapshot.val().ingredient_name ) ;
    console.log('quantity:',snapshot.val().quantity ) ;
    console.log('unit:',snapshot.val().unit) ;
    console.log('step:',snapshot.val().step ) ;
    console.log('cuisine:',snapshot.val().cuisine ) ;
    console.log('main_ingredient:',snapshot.val().main_ingredient ) ;
    console.log('dietary_consideration:',snapshot.val().dietary_consideration) ;

    // console.log(recipe.recipe_name );
}, function (error) {
    console.log("Error: " + error.code);
});

var recipe_form_submit_button = document.getElementById('post_button');
recipe_form_submit_button.addEventListener('click', save_recipe.bind(this));

function save_recipe(){
    var  recipe_name_text = document.getElementById('recipename').value;
    var recipe_intro_text = document.getElementById('recipeintroduction').value;
    var servings_text = document.getElementById('servings').value;
    var prep_time = document.getElementById('preptime').value;
    var cook_time = document.getElementById('cooktime').value;
    var rest_time = document.getElementById('resttime').value;
    var ingredient_name = document.getElementById('ingredientname').value;
    var quantity = document.getElementById('quantity').value;
    var unit = document.getElementById('unit').value;
    var step = document.getElementById('step').value;
    var cuisine = document.getElementById('cuisine').value;
    var main_ingredient = document.getElementById('mainingredient').value;
    var dietary_consideration = document.getElementById('dietaryconsideration').value;


    recipe_list.push({'recipe_name': recipe_name_text,
                    'recipe_intro': recipe_intro_text,
            'servings': servings_text,
        'prep_time': prep_time,
        'cook_time': cook_time,
        'rest_time': rest_time,
        'ingredient_name': ingredient_name,
        'quantity': quantity,
        'unit': unit,
        'step': step,
        'cuisine': cuisine,
        'main_ingredient': main_ingredient,
        'dietary_consideration': dietary_consideration

    });
console.log("recipe_name_text", recipe_name_text);
console.log("recipe_intro_text", recipe_intro_text);
console.log("servings_text", servings_text);
    console.log("prep_time", prep_time);
    console.log("cook_time",cook_time);
    console.log("rest_time", rest_time);
    console.log("ingredient_name", ingredient_name);
    console.log("quantity", quantity);
    console.log("unit", unit);
    console.log("step", step);
    console.log("cuisine", cuisine);
    console.log("main_ingredient", main_ingredient);
    console.log("dietary_consideration", dietary_consideration);

}
//

//
// function save_recipe (event ) {
//     var new_recipe = database.child('recipe');
//     new_recipe
//         .push({
//             recipe_name: recipe_name_text,
//             recipe_intro: recipe_intro_text,
//             servings: servings_text
//         });
// }

// var recipe = database.ref('recipename');
// var introduction = database.ref('introduction');
// var servings = database.ref('servings');
//

//
// function save_recipe(event ) {
//     print_message () ;
//     var recipe_name_text = recipename.value ;
//     var new_recipe = {
//         me
//     }
//
// }