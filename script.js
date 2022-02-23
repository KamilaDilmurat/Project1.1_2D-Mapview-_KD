

     require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (Map, MapView, Layer) {
        const map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation" 
        });

       var view = new MapView({
          map: map,
          container: "viewDiv",
         scale: 500000,
          center: [87.5, 43.8]
        });

        var layer = Layer.fromPortalItem({
          portalItem: {
            id: "2cdad2d703344d1fa2681bb5fb9fe221"
          }
        })
          .then(addLayer)
          .catch(rejection);
  
  var layer = Layer.fromPortalItem({
          portalItem: {
            id: "ec224b6e776c44ff8169d1f0fa27e5f2"
          }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }
        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });
  
var camera = new Camera({
        position: [
          -90.1994, // lon
          38, // lat
          10000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });


var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [ber, bei,stl].forEach(function(button) {
      button.style.display = '.esri-button';
      view.ui.add(button, 'bottom-right');
    });
    

ber.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 13.36,
          y: 52.56,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });

    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 116.4074,
          y: 39.9042,
          z: 5000000
        },
        tilt: 0,
        heading: 0
      });
    });
      
      
   stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
