/* App Controllers */

function PhoneCatCtrl($route) {
  var self = this;

  $route.when('/phones',
              {template: 'partials/phone-list.html',   controller: PhoneListCtrl});
  $route.when('/phones/:phoneId',
              {template: 'partials/phone-detail.html', controller: PhoneDetailCtrl});
  $route.otherwise({redirectTo: '/phones'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });

  $route.parent(this);
}

//PhoneCatCtrl.$inject = ['$route'];

function PhoneListCtrl($xhr) {
   var self = this;

   $xhr('GET', '/phonecat/_design/phonecat/_view/phones', function(code, response) {
     self.phones = response.rows;
   });

   self.orderProp = 'age';
}
//PhoneListCtrl.$inject = ['Phone'];


function PhoneDetailCtrl($xhr) {
  var self = this;

   $xhr('GET', '/phonecat/' + self.params.phoneId, function(code, response) {
     self.phone = response;
     self.mainImageUrl = response.images[0];
   });


  // self.phone = Phone_.get({phoneId: self.params.phoneId}, function(phone) {
  //   self.mainImageUrl = phone.images[0];
  // });

  // self.setImage = function(imageUrl) {
  //   self.mainImageUrl = imageUrl;
  // };
}

//PhoneDetailCtrl.$inject = ['Phone'];
