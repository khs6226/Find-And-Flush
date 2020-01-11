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
  // state = {
  //   activeMarker: {},
  //   selectedPlace: {},
  //   showingInfoWindow: false
  // };

  Markers = () => {
    return this.context.washrooms.map((washroom, i) => {
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
  getMarker = marker => {
    console.log(marker);
  };
  onMarkerClick = (props, marker) => {
    // console.log(marker);
    this.context.SetSelected(props);
    this.context.SetActiveMarker(marker);
    this.context.SetshowingInfoWindow(true);
    // this.setState({
    //   activeMarker: marker,
    //   selectedPlace: props,
    //   showingInfoWindow: true
    // });

    // let propsCopy = JSON.parse(JSON.stringify(props));
    // let propsCopy = props;
    // propsCopy.position = { lat: 49.2828432, lng: -123.1190605 };

    // this.setState({
    //   activeMarker: marker,
    //   selectedPlace: propsCopy,
    //   showingInfoWindow: true
    // });
  };

  onInfoWindowClose = () => {
    this.context.SetActiveMarker(null);
    this.context.SetshowingInfoWindow(false);
  };

  onMapClicked = () => {
    if (this.context.showingInfoWindow) {
      this.context.SetActiveMarker(null);
      this.context.SetshowingInfoWindow(false);
    }
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
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 49.277912,
          lng: -123.1173159
        }}
      >
        {this.Markers()}
        <InfoWindow
          marker={this.context.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.context.showingInfoWindow}
        >
          <div>
            <p>{this.context.Selected ? this.context.Selected.name : null}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD9OZgtNameQpcI0tfxlREL235_bDYr7WY"
})(Maps);
