/**
 * Created by shanshan on 8/30/15.
 */
myApp.controller('shanshanController', function ($scope) {
    $scope.qty = 1;
    $scope.cost = 2;
    $scope.inCurr = 'EUR';
    $scope.currencies = ['USD', 'EUR', 'CNY'];
    $scope.usdToForeignRates = {USD: 1, EUR: 0.74, CNY: 6.09};

    $scope.total = function total(outCurr) {
        return this.convertCurrency($scope.qty * $scope.cost, $scope.inCur, outCurr);
    };
    $scope.convertCurrency = function (amount, inCurr, outCurr) {
        return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    $scope.pay = function pay() {
        window.alert("Thanks!");
    };
});