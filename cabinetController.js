angular.module('directoryApp',[])
.controller('cabinetController', function($scope){
$scope.list= [
    {
       	image: 'http://buycabinetdirect.com/media/wysiwyg/SE-LEVEL1.jpg',
    	type: 'Assembled',
		color:'Espresso' ,
		snippet:'Assembled Shaker Espresso 10x10 Kitchen',
		age: '1'
	}, {
		image: 'http://buycabinetdirect.com/media/wysiwyg/New_Espresso_Shaker.jpg',
		type: 'Assembled',
		color:'Espresso',
		snippet:'Assembled New Shaker Espresso 10x10 Kitchen',
		age: '2'
	}, {
		image: 'http://buycabinetdirect.com/media/wysiwyg/MY-LEVEL1.jpg',
		type: 'Assembled',
		color:'Chestnut',
		snippet:'Assembled Dark Chestnut 10x10 Kitchen',
		age: '3'
	}, {
       	image: 'http://buycabinetdirect.com/media/wysiwyg/CHB-LEVEL3.jpg',
    	type: 'Assembled',
		color:'Chocolate' ,
		snippet:'Assembled Chocolate Glaze 10x10 Kitchen',
		age: '4'
	}, {
		image: 'http://buycabinetdirect.com/media/wysiwyg/CA-LEVEL2.jpg',
    	type: 'Assembled',
		color:'Cherry' ,
		snippet:'Assembled Cherry Antique 10x10 Kitchen',
		age: '5'
	}, {
		image: 'http://buycabinetdirect.com/media/wysiwyg/CNS-LEVEL1.jpg',
    	type: 'Assembled',
		color:'Cinnamon' ,
		snippet:'Assembled Cinnamon Shaker 10x10 Kitchen',
		age: '6'
	}] 
});



