import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { flexbox } from "@material-ui/system";
import WashroomContext from "../../api/WashroomContext";

const mapStyle = {
  width: "50%",
  height: "100%",
  position: "relative"
};

class Maps extends React.Component {
  static contextType = WashroomContext;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  Markers = () => {
    this.context.washrooms.map((washroom, i) => {
      // console.log(washroom.position);
      return (
        <Marker
          name={washroom.name}
          onClick={this.onMarkerClick}
          position={washroom.position}
          ref={this.myRef}
          key={i}
        />
      );
    });
  };

  onMarkerClick = (props, marker) => {
    //console.log(props, marker);
    // this.setState({
    //   activeMarker: marker,
    //   selectedPlace: props,
    //   showingInfoWindow: true
    // });

    // let propsCopy = JSON.parse(JSON.stringify(props));
    let propsCopy = props;
    propsCopy.position = { lat: 49.2828432, lng: -123.1190605 };

    this.setState({
      activeMarker: marker,
      selectedPlace: propsCopy,
      showingInfoWindow: true
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  componentDidMount = () => {
    console.log(`my ref is ${this.myRef}`);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyle}
        initialCenter={{
          lat: 49.277912,
          lng: -123.1173159
        }}
      >
        {/* add a for loop
        
        <Marker
          name="Public Washrooms"
          onClick={this.onMarkerClick}
          position={{ lat: 49.277912, lng: -123.1173159 }}
          ref={this.myRef}
        /> */}
        {this.Markers()}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD9OZgtNameQpcI0tfxlREL235_bDYr7WY"
})(Maps);
