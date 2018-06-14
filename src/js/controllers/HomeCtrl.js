angular.module('paymentForecastApp')
    .controller('HomeCtrl', [
        '$scope', '$http',
        function ($scope, $http) {

            var vm = this;

            vm.message = 'Hello World Test';


            vm.submit = function () {
                $http.get("http://localhost:8080/payment-forecast/")
                    .then(function (result) {
                        console.log(result);
                        vm.paymentForecast = result.data;
                    });
            }
        }
    ]);