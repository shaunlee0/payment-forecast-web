angular.module('paymentForecastApp')
    .controller('HomeCtrl', [
        '$scope', '$http',
        function ($scope, $http) {

            var vm = this;

            vm.message = 'Hello World Test';


            vm.submit = function(){
                console.log('Submitted');
            }
        }
    ]);