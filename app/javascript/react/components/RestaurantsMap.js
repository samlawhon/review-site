import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

const RestaurantMap = props => {

  const restaurants = props.restaurantsData.map((restaurant) => (
    <Marker position={[restaurant.latitude, restaurant.longitude]} key={restaurant.id}>
      <Popup>
        <Link to={`restaurant/${restaurant.id}`}>
          {restaurant.name}
        </Link>
      </Popup>
    </Marker>
  ));

  return (
    <Map center={props.coords} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {restaurants}
    </Map>
  );
}

export default RestaurantMap;
