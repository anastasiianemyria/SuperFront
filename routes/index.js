var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get product data

  res.render('index', { title: 'Zlagoda' , product: []});
});

router.get('/cashier-queries', function(req, res, next) {
  let checks = [{check_number:"1", id_employee:"1", card_number:"1", print_date:"17-04-2021", total_sum:"100", vat:"12"},
    {check_number:"2", id_employee:"3", card_number:"4", print_date:"12-04-2021", total_sum:"109", vat:"52"}];

  res.render('cashierQueriesPage', { title: 'Zlagoda',checks:checks});
});

router.get('/cashier', function(req, res, next) {


  res.render('cashierQueryPage', { title: 'Zlagoda'});
});

router.get('/categories', function(req, res, next) {
  let categories = [{category_number: "1", category_name:"category1"},{category_number: "2", category_name:"category2"},{category_number: "3", category_name:"category3"}];

  res.render('categoriesPage', { title: 'Zlagoda', categories:categories});
});

router.get('/checks', function(req, res, next) {
  let checks = [{check_number:"1", id_employee:"1", card_number:"1", print_date:"17-04-2021", total_sum:"100", vat:"12"},
    {check_number:"2", id_employee:"3", card_number:"4", print_date:"12-04-2021", total_sum:"109", vat:"52"}];

  res.render('checksPage', { title: 'Zlagoda', checks:checks});
});

router.get('/clients', function(req, res, next) {
  let clients = [{card_number:"1", cust_surname:"Nemyria", cust_name:"Nastia", cust_patronymic: "Maksymivna", phone_number: "0978856643", city: "Kyiv", zip_code: "3456", discount:"10"},
    {card_number:"2", cust_surname:"Markova", cust_name:"Julia", cust_patronymic: "Andriivna", phone_number: "0979879640", city: "Kyiv", zip_code: "0956", discount:"10"}];

  res.render('clientsPage', { title: 'Zlagoda', clients:clients});
});

router.get('/manager-queries', function(req, res, next) {
  // get product data

  res.render('managerQueriesPage', { title: 'Zlagoda'});
});

router.get('/products', function(req, res, next) {
  let products = [{id_product: "1", category_number: "1", product_name:"chocolate", characteristics:"tasty chocolate"},
    {id_product: "2", category_number: "5", product_name:"ice cream", characteristics:"tasty icecream"},
    {id_product: "3", category_number: "4", product_name:"coffee", characteristics:"tasty coffee"}];

  res.render('productsPage', { title: 'Zlagoda', products: products});
});

router.get('/employ', function(req, res, next) {
  let employees = [{id_employee: "1", empl_surname: "Ochrimenko", empl_name:"Nastia", empl_patronymic:"Juriivna", working_role:"cashier",
    salary:"15000", date_of_birth: "01-03-2000", date_of_start: "09-05-2020", phone_number: "0987745313", city: "Brovary", street:"Nezalezhnosti",zip_code:"18"},
    {id_employee: "2", empl_surname: "Nemyria", empl_name:"Grigoriy", empl_patronymic:"Volodymyrovych", working_role:"manager",
      salary:"20000", date_of_birth: "09-12-2000", date_of_start: "09-07-2019", phone_number: "0987700313", city: "Brovary", street:"Volodymyra",zip_code:"34"}];
  res.render('employPage', { title: 'Zlagoda', employees:employees});
});


/*router.get('/kek', function(req, res, next) {
  // get product data
  let product = [{name: "1", price: "1"}, {name: "1", price: "1"},{name: "1", price: "1"},]
let products = [{id_product: "1", category_number: "1", product_name:"chocolate", characteristics:"tasty chocolate"},
    {id_product: "2", category_number: "5", product_name:"ice cream", characteristics:"tasty icecream"},
    {id_product: "3", category_number: "4", product_name:"coffee", characteristics:"tasty coffee"}];



  res.render('kek', {products: product});
});*/
/*router.get('/error', function(req, res, next) {
  // get product data

  res.render('error', { message: 'Error'});
});*/

module.exports = router;
