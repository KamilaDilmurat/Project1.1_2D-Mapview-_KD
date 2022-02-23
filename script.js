require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (Map, MapView, Layer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 5,
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
      })
