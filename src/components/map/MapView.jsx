"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import { Expand, X } from 'lucide-react'

mapboxgl.accessToken = "pk.eyJ1IjoibWF0aGlzcHAiLCJhIjoiY203OWx5NDVxMDV6OTJzcXQwcTBmcm0xMSJ9.RG7F0_4UHw1YTr6lsHh_Ew"; // Replace with your Mapbox token

export default function MapView({ latitude = 41.41, longitude = 2.19, zoom = 11, scroll = false }) {
  const mapContainerRef = useRef(null);

  const [map, setMap] = useState (null);

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mathispp/cm79ly6ur001c01s7cmzk82rp', // Mapbox style URL
      // center: [longitude, latitude],
      // zoom: zoom,
      bounds: new mapboxgl.LngLatBounds(
        new mapboxgl.LngLat(2.1310542496310916, 41.51270289951682),
        new mapboxgl.LngLat( 1.9800926624938882, 41.448647813743605)
      ),
    });

    if (!scroll)
      map.scrollZoom.disable()

    // new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);

    map.on('load', () => {
      // Fetch the local GeoJSON file

      fetch('/data/bounds.geojson')
        .then((response) => response.json())
        .then((data) => {
          // Add the GeoJSON data as a source
          map.addSource('barcelona', {
            type: 'geojson',
            data: data,
          });
              setMap(map);

        })
    });

    map.on('zoomend', ()=> {
      console.log(map.getBounds());
    })

    return () => map.remove(); // Cleanup on unmount
  }, [latitude, longitude, zoom]);



  const [layer, setLayer] = useState('hot');

  useEffect(() => {
    if (map?.getLayer('outline'))
      map?.removeLayer('outline')

    if (map?.getLayer('fill'))
      map?.removeLayer('fill')


    map?.addLayer({
      id: 'fill',
      type: 'fill',
      source: 'barcelona',
      layout: {},
      paint: {
        'fill-color': '#000E37',
        'fill-opacity': 0.1,
      },
    });

    // Add an outline layer for the GeoJSON data
    map?.addLayer({
      id: 'outline',
      type: 'line',
      source: 'barcelona',
      layout: {},
      paint: {
        'line-color': '#000E37',
        'line-width': 1,
        'line-opacity': 0.9,
      },
    });
  }, [layer, map])


  return (
    <div ref={mapContainerRef} className={`w-full h-full`}></div>
  );
  return;
}
