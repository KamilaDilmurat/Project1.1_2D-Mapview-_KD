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
          center: [-104.99, 39.74]
        });

        var layer = Layer.fromPortalItem({
          portalItem: {
            id: "99fd67933e754a1181cc755146be21ca"
          }
        })
          .then(addLayer)
          .catch(rejection);
  
  var layer = Layer.fromPortalItem({
          portalItem: {
            id: "ea534c7d48894b269722f410bc5f45ad"
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
