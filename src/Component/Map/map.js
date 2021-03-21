import React, {  useState } from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import './map.css'
import SimpleImageSlider from "react-simple-image-slider";
const Map = () => {
    const [selected, setSelected] = useState({});
    const images = [
        { url: "images/1.jpg" },
        { url: "images/2.jpg" },
        { url: "images/3.jpg" },
        { url: "images/4.jpg" },
        { url: "images/5.jpg" },
        { url: "images/6.jpg" },
        { url: "images/7.jpg" },
      ];
    
    const mapStyle = {
        height: '100vh',
        width: '100%'
    }
    const center = {
        lat: 44.540102001884414, lng: 18.673506875630693
    }

    const locations = [
        {
           name: "Tehnoloski fakultet",
           location: {
               lat: 44.53926669141312, lng: 18.66147958836878
           },
           logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Ftehnoloski.png?alt=media&token=8ec5680a-3f16-4db3-afcb-c7be64997953",
        },
        {
            name: "Masinski fakultet",
            location: {
                lat: 44.53929133911183, lng: 18.663099502849274
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fmasinski.png?alt=media&token=4c17210d-042a-4f6f-9d22-cc20a88acdbd",
         },
         {
            name: "PMF",
            location: {
                lat: 44.53943602502955, lng: 18.66350999656085
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fpmf.jpg?alt=media&token=a20e9bf9-8c5e-4c1d-b29b-e527cb6667c8",
         },
         {
            name: "Ekonomski fakultet",
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fekonomija.jpg?alt=media&token=ca2e6e4a-320e-4b76-919c-7dcf109a8fef",
            location: {
                lat: 44.539101028766886, lng: 18.662187069243892
            },
         },
         {
            name: "Farmaceutski fakultet",
            location: {
                lat: 44.53912779400724, lng: 18.6626135404788
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Ffarmacija.png?alt=media&token=dbf74cf6-0d94-44a9-abd2-c951824badfd",
         },
         {
            name: "RGGF",
            location: {
                lat: 44.53973432908175, lng: 18.66425060836757
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Frggf.png?alt=media&token=87af4348-3995-4cb7-8c43-2354a6f19f86",
         },
         {
            name: "Pravni fakultet",
            location: {
                lat: 44.53996143681621, lng: 18.66337816860024
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fpravni.png?alt=media&token=fcc27ddf-a1c8-4495-8ffb-8bbd2e45d4c4",
         },
         {
            name: "Medicinski fakultet",
            location: {
                lat: 44.53843284764338, lng: 18.665747397584028
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fmedicina.png?alt=media&token=66ff83e1-20d8-4b3a-9136-4a62d497eccb",
         },
         {
            name: "Filozofski fakultet",
            location: {
                lat: 44.53203407196683, lng: 18.68700115532805
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Ffilozofski.jpg?alt=media&token=ed0c34e4-3fe3-4ffb-93b6-b376cbcced96",
         },
         {
            name: "Fakultet za tjelesni odgoj i sport fakultet",
            location: {
                lat: 44.53742102289046, lng:  18.68670059896406,
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Ffit.png?alt=media&token=b0bd8e36-2f00-4450-9f5a-73316634fda2",
         },
         {
            name: "Elektrotehnicki fakultet",
            location: {
                lat: 44.537864311208985, lng:  18.674715268821114
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Ffet.jpg?alt=media&token=9ffa7c4e-1395-4565-9b86-44ff09039512",
         },
         {
            name: "Edukacijsko-rehabilitacijski fakultet",
            location: {
                lat: 44.53885002422685, lng: 18.66689939287128
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fedukacijsko.jpg?alt=media&token=85ec02a4-13ba-4f7e-b196-3e84d8726eef",
         },
         {
            name: "Akademija dramskih umjetnosti",
            location: {
                lat: 44.53850431976047, lng: 18.666689514306977
            },
            logo: "https://firebasestorage.googleapis.com/v0/b/smart-university-f745f.appspot.com/o/logos%2Fakademija.png?alt=media&token=a382306d-e681-467c-b722-960d06717b69",
         },
    ];
    const onSelect = (item) => {
        setSelected(item)
    }
    
    return(
        <div className="map">
            <LoadScript
            googleMapsApiKey="AIzaSyC-av57qcgfL_2bWYuJIE6oWVLr77WjnHc"
            >

            <GoogleMap
            mapContainerStyle={mapStyle}
            center={center}
            zoom={14}>
                {
                    locations.map(item => {
                        return(
                        <Marker key={item.name} 
                        position={item.location} 
                        onClick={() => onSelect(item)}>

                        </Marker>
                        )
                        
                    })
                }
                {
                    selected.location &&
                    (
                    <InfoWindow
                    clickable={true}
                    position={selected.location}
                    onCloseClick={() => setSelected({})}
                    >
                        <p>{selected.name}</p>
                    </InfoWindow>
                    )
                }
                <div className="sidebarmap">
                    <h2>Lista fakulteta:</h2>
                    <a href="/"><button>X</button></a>
                {
                    locations.map(item => {
                        return(
                            <div className="fakultetsidebar">
                                <img className="logofakultet" src={item.logo} alt="" />
                        <button className="imefakultet" key={item.name} 
                        position={item.location} 
                        onClick={() => onSelect(item)}>
                            {item.name}
                        </button>
                               
                        </div>
                        )
                        
                    })
                }
                </div>
                </GoogleMap>

            </LoadScript>
                       

        </div>
    )    
    }

export default Map;