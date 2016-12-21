import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import CameraButtons from './CameraButtons';

const Platform = require('react-native').Platform;
const ImagePicker = require('react-native-image-picker');

export default class CameraRoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.takePhoto = this.takePhoto.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  setImage(response) {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //If it is iOS, remove 'file://' prefix
      let source = { uri: response.uri.replace('file://', ''), isStatic: true };

      //If android, don't need to remove the 'file://'' prefix
      if (Platform.OS === 'android') {
        source = { uri: response.uri, isStatic: true };
      }

      this.setState({ image: source });
    }
  }
  takePhoto() {
    ImagePicker.launchCamera({ noData: true }, this.setImage);
  }
  chooseImage() {
    ImagePicker.launchImageLibrary({ noData: true }, this.setImage);
  }
  renderButtonOrPic() {
    if (!this.state.image) {
      return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.takePhoto}>
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.chooseImage}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Image style={{ flex: 1 }} source={this.state.image} />
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderButtonOrPic()}
      </View> 
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'gray',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
};
