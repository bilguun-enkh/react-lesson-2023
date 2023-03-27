import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useContext } from 'react';
import { RestaurantContext } from '../context/restaurants.context';
import { NeighborhoodContext } from '../context/neighborhoods.context';

export default function Map() {
    const restaurants = useContext(RestaurantContext)
    const neighborhoods = useContext(NeighborhoodContext)
    console.log(restaurants)
    console.log("neighborhoods", neighborhoods)
    return (
        <div>
            <h1>My Map</h1>
            <MapContainer center={[40.579505, -73.98241999999999]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {restaurants.map((marker, index) => {
                    return (
                        <Marker position={[marker.address.coord[1], marker.address.coord[0]]} key={index}>
                            <Popup>
                                {marker.address.coord[1]} {marker.address.coord[0]}
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}