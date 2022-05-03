import { Deck } from "@deck.gl/core";
import { MapboxLayer } from "@deck.gl/mapbox";
import { ScatterplotLayer } from "@deck.gl/layers";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGF0c3V5YWthbmVtb3RvIiwiYSI6ImNrM3o5cjQ2MTFudmQzbm8yaTE4ajk4ZGEifQ.vQp8xczg9D1EDaJOXF-dyQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [-74.5, 40],
  controller: true,
  zoom: 15
});

const deck = new Deck({
  gl: map.painter.context.gl,
  layers: [
    new ScatterplotLayer({
      id: "my-scatterplot",
      data: [{ position: [-74.5, 40], size: 100 }],
      getPosition: (d) => d.position,
      getRadius: (d) => d.size,
      getFillColor: [255, 0, 0],
      pickable: true,
      onHover: (info) => {
        console.log("info", info);
      }
    })
  ]
});

// wait for map to be ready
map.on("load", () => {
  // add to mapbox
  map.addLayer(new MapboxLayer({ id: "my-scatterplot", deck }));

  // update the layer
  deck.setProps({
    layers: [
      new ScatterplotLayer({
        id: "my-scatterplot",
        data: [{ position: [-74.5, 40], size: 100 }],
        getPosition: (d) => d.position,
        getRadius: (d) => d.size,
        getFillColor: [0, 0, 255],
        pickable: true,
        onHover: (info) => {
          console.log("info", info);
        }
      })
    ]
  });
});
