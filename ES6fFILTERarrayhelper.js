var products = [

{name : 'cucumber', type : 'vegetable'},

{name : 'banmana', type : 'fruit'},
{name : 'celery', type : 'vegetable'},
{name : 'orange', type : 'fruit'}
  ];


var filteredProducts = [];

//make a filter statement that just returns fruit that was check marked from a list

products.filter(function(product)  {
	return product.type === 'fruit';
});

filteredProducts;