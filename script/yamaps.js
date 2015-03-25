
    ymaps.ready(init);
        var myMap, 
            myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 13,
        });
	myMap.behaviors.disable(['scrollZoom']);
	$('#map').on('click', function(){
		myMap.behaviors.enable(['scrollZoom']);
	})
    }