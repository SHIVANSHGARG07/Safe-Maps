import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../constants/data';
import { Link } from 'react-router-dom';
const center = [30.7675, 76.5754]; // Chandigarh University coordinates

function Featured() {
  return (
    <div className="w-full py-20">
      {/* Featured Projects Section */}
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight font-bold">""Guiding paths, mapping safety.""


        </h1>
      </div>

      {/* //two Section */}
      <div className="flex  ">
        <div className="w-1/2 ">

          <h1 className="text-7xl mt-4 ml-10 p-14 font-semibold">Our Features</h1>
          <div className="flex flex-row">

            <div>
            <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 1
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>

          <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 3
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>

          <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 5
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>
            </div>

            <div>
            <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 2
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>

          <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 4
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>

          <Link to="/feature">
            <button className="flex gap-10 uppercase items-center px-8 py-4 ml-[5vw] font-semibold bg-white rounded-full mt-10 text-black">
              Feature 6
              <div className="w-5 h-4 bg-black rounded-full"></div>
            </button>
          </Link>
            </div>
           
          </div>
         

          
        </div>


        <div className=" relative w-3/5 z-10 mr-4 p-4 h-[500px] mt-10 rounded-full">
          <MapContainer center={center} zoom={10} style={{ width: '100%', height: '100%' }}>
            <TileLayer
              url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=0MToyaAJOZ8K4FPZZIIj"
              //  url="https://api.maptiler.com/maps/satellite/tiles.json?key=0MToyaAJOZ8K4FPZZIIj"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {statesData.features.map((state, index) => {
              const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
              return (
                <Polygon
                  key={index}
                  pathOptions={{
                    fillColor: '#FD8D3C',
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: 'white',
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        dashArray: '',
                        fillColor: '#BD0026',
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        color: 'white',
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: '3',
                        color: 'white',
                        fillColor: '#A63554',
                      });
                    },
                    click: (e) => {
                      // Your click handler code here
                    },
                  }}
                />
              );
            })}
          </MapContainer>
        </div>

      </div>




    </div>
  );
}

export default Featured;
