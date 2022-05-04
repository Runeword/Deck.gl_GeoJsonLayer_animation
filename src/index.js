import { Deck } from "@deck.gl/core";
import { MapboxLayer } from "@deck.gl/mapbox";
import { GeoJsonLayer } from "@deck.gl/layers";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGF0c3V5YWthbmVtb3RvIiwiYSI6ImNrM3o5cjQ2MTFudmQzbm8yaTE4ajk4ZGEifQ.vQp8xczg9D1EDaJOXF-dyQ";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: [ 2.368057803, 48.866637048 ],
  controller: true,
  zoom: 18,
  pitch: 40
});

const deck = new Deck({
  gl: map.painter.context.gl,
  layers: [
    new GeoJsonLayer({
    id: 'buildingHeight',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [
                  2.368057803,
                  48.866637048
                ],
                [
                  2.36810017,
                  48.86673183
                ],
                [
                  2.368179798,
                  48.866716156
                ],
                [
                  2.36819564,
                  48.86675312
                ],
                [
                  2.368215589,
                  48.866742643
                ],
                [
                  2.368295888,
                  48.86670023
                ],
                [
                  2.368294547,
                  48.866698218
                ],
                [
                  2.368250056,
                  48.866600608
                ],
                [
                  2.368181648,
                  48.866613557
                ],
                [
                  2.368057803,
                  48.866637048
                ]
              ]
            ]
          },
          properties: {
            h: 17.8,
          }
        }
      ]
    },
    extruded: true,
    elevationScale: 0,
    getElevation: ({properties}) => {
        console.log('properties', properties)
        return properties.h
    },
    transitions: {
      elevationScale: {
        duration: 1000,
        type: 'interpolation'
      }
    },
    filled: true,
    wireframe: true,
    autoHighlight: true,
    pickable: true,
    visible: true,
    minZoom: 17,
    opacity: 0.8
  })
  ]
});

// wait for map to be ready
map.on("load", () => {
  // add to mapbox
  map.addLayer(new MapboxLayer({ id: "buildingHeight", deck }));

  // update the layer
  deck.setProps({
    layers: [
      new GeoJsonLayer({
    id: 'buildingHeight',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [
                  2.368057803,
                  48.866637048
                ],
                [
                  2.36810017,
                  48.86673183
                ],
                [
                  2.368179798,
                  48.866716156
                ],
                [
                  2.36819564,
                  48.86675312
                ],
                [
                  2.368215589,
                  48.866742643
                ],
                [
                  2.368295888,
                  48.86670023
                ],
                [
                  2.368294547,
                  48.866698218
                ],
                [
                  2.368250056,
                  48.866600608
                ],
                [
                  2.368181648,
                  48.866613557
                ],
                [
                  2.368057803,
                  48.866637048
                ]
              ]
            ]
          },
          properties: {
            h: 17.8,
          }
        }
      ]
    },
    extruded: true,
    elevationScale: 1,
    getElevation: ({properties}) => {
          console.log('properties', properties)
          return properties.h
    },
    transitions: {
      elevationScale: {
        duration: 500,
        type: 'interpolation'
      }
    },
    filled: true,
    wireframe: true,
    autoHighlight: true,
    pickable: true,
    visible: true,
    minZoom: 17,
    opacity: 0.8
  })
    ]
  });
});
