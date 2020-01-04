import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { flexbox } from "@material-ui/system";

const mapStyle = {
  width: "40%",
  height: "50%",
  position: "relative"
};

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) => {
    console.log(props, marker);
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
