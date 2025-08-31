
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import postsData from '../data/posts.js';


const customIcon = L.icon({ //L.icon è la classe di leaflet che serve per creare e customizzare le icone nella mappa.
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [20, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});



export default function Map() {
    const center = [38.7223, -9.1393]; //mappa centrata inizialmente sul portogallo

    return (
        <MapContainer center={center} zoom={6} className='leaflet-map'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {postsData.map((post) => (
                <Marker key={post.id} position={[post.lat, post.lng]} icon={customIcon}> {/*al marker fornisco tutte le posizioni esatte */}
                    <Popup>
                        <strong>{post.titolo}</strong><br /> {/*nel popup metto cio che voglio visualizzare accanto al marker */}
                        {post.luogo}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
