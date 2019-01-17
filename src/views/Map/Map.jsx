import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Logo from '../../components/Logo/Logo'
import Title from '../../components/Title'

import style from './styles.module.scss'

const styles = {
  backgroundColor: "rgb(237, 205, 31)",
  width: '130px',
  height: '50px',
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "40px",
  borderTopRightRadius: "30px",
  borderBottomRightRadius: "30px",
}

const AnyReactComponent = () => <div style={styles}><Logo /></div>;



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.643421,
      lng: 37.850379
    },
    zoom: 15,
    option: {
      styles: [
        {
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#1e2d3b"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#edcd75"
            },
            {
              "visibility": "simplified"
            },
            {
              "weight": 2.5
            }
          ]
        }
      ]
    }
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <section id="map">
        <Title className={style.Title}>мы здесь</Title>
        <div style={{ height: '600px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBGTv9kQmJjzdshxaBdaqZFj6HqKKL81nE' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={this.props.option}
          >
            <AnyReactComponent
              lat={55.643421}
              lng={37.850379}
            />
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}

export default SimpleMap;