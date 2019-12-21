import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Maps extends React.Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
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

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "70%", height: "70%", position: "relative" }}
        zoom={14}
        initialCenter={{
          lat: 49.277912,
          lng: -123.1173159
        }}
      >
        <Marker
          name="Public Washrooms"
          onClick={this.onMarkerClick}
          position={{ lat: 49.277912, lng: -123.1173159 }}
        />
        <Marker
          name="David Lam Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2770384, lng: -123.1082255 }}
        />
        <Marker
          name="Harbour Green Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.289335, lng: -123.1217715 }}
        />
        <Marker
          name="Canada Place"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2883436, lng: -123.1153855 }}
        />
        <Marker
          name="Granville Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2588092, lng: -123.1420738 }}
        />
        <Marker
          name="Tatlow Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2695388, lng: -123.1692126 }}
        />
        <Marker
          name="Hadden Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2275369, lng: -123.1476764 }}
        />
        <Marker
          name="Firehall Library"
          onClick={this.onMarkerClick}
          position={{ lat: 49.262872, lng: -123.137576 }}
        />
        <Marker
          name="Grandview Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2739592, lng: -123.0695801 }}
        />
        <Marker
          name="Andy Livingstone Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2788226, lng: -123.1057978 }}
        />
        <Marker
          name="Stanley Park"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2933866, lng: -123.139224 }}
        />
        <Marker
          name="Carnegie Centre"
          onClick={this.onMarkerClick}
          position={{ lat: 49.281052, lng: -123.1001272 }}
        />
        <Marker
          name="Richards Street"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2759501, lng: -123.1238664 }}
        />
        <Marker
          name="Public Washroom W Georgia"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2828432, lng: -123.1190605 }}
        />
        <Marker
          name="Main at Terminal Public Washroom"
          onClick={this.onMarkerClick}
          position={{ lat: 49.2730027, lng: -123.0994833 }}
        />

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
