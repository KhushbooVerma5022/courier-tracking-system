import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
    Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
    { name: "Delhi", position: [28.6139, 77.2090], type: "North India" },
    { name: "Mumbai", position: [19.0760, 72.8777], type: "West India" },
    { name: "Jaipur", position: [26.9124, 75.7873], type: "Northwest India" },
    { name: "Ahmedabad", position: [23.0225, 72.5714], type: "West India" },
    { name: "Hyderabad", position: [17.3850, 78.4867], type: "South-Central India" },
    { name: "Bengaluru", position: [12.9716, 77.5946], type: "South India" },
    { name: "Chennai", position: [13.0827, 80.2707], type: "Southeast India" },
    { name: "Kolkata", position: [22.5726, 88.3639], type: "East India" },
];

const routes = [
    ["Delhi", "Jaipur"],
    ["Delhi", "Mumbai"],
    ["Mumbai", "Ahmedabad"],
    ["Mumbai", "Hyderabad"],
    ["Hyderabad", "Bengaluru"],
    ["Bengaluru", "Chennai"],
    ["Delhi", "Kolkata"],
];

const getLocation = (name) =>
    locations.find((location) => location.name === name).position;

const IndiaNetworkMap = () => {
    return (
        <div className="relative h-full min-h-[320px] w-full">
            <MapContainer
                center={[22.9734, 78.6569]}
                zoom={4.5}
                minZoom={4}
                maxZoom={10}
                scrollWheelZoom={false}
                className="h-full min-h-[320px] w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {routes.map(([from, to]) => (
                    <Polyline
                        key={`${from}-${to}`}
                        positions={[getLocation(from), getLocation(to)]}
                        pathOptions={{
                            color: "#680818",
                            weight: 2,
                            opacity: 0.65,
                            dashArray: "6 7",
                        }}
                    />
                ))}

                {locations.map((location) => (
                    <CircleMarker
                        key={location.name}
                        center={location.position}
                        radius={7}
                        pathOptions={{
                            color: "#ffffff",
                            weight: 2,
                            fillColor: "#a51c39",
                            fillOpacity: 1,
                        }}
                    >
                        <Popup>
                            <div>
                                <strong>{location.name}</strong>
                                <br />
                                <span>Illustrative network location</span>
                                <br />
                                <span>{location.type}</span>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>

            <div className="pointer-events-none absolute left-3 top-3 z-[400] rounded-lg border border-white/70 bg-white/90 px-3 py-2 text-xs font-bold text-[#680818] shadow-md backdrop-blur">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#a51c39]" />
                India Network Overview
            </div>
        </div>
    );
};

export default IndiaNetworkMap;
