import React, { Component } from 'react';
import { 
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Animated,
  TouchableHighlight,
  Switch } from 'react-native';
//import Switch from 'react-native-material-switch';
import userService from '../../lib/userService';
import Visited from '../../lib/totalSpotsVisited';
import FBLogIOButton from '../login/FBLogIOButton';


const { width, height } = Dimensions.get('window');

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          bounceValue: new Animated.Value(0),
          showAllSpots: false
        };
    }
    componentWillMount() {
      Visited(userService.currentUser.id).then((res) => {
        this.setState({
          visited: res.length
        });
      });
      this.setState({ showAllSpots: userService.currentUser.showAllSpots });
    }
    render() {
    const displayName = userService.currentUser.displayName || 'Anonymous';
    return (
      <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
        <Image
          source={require('../../images/room.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{displayName.slice(0, displayName.indexOf(' '))}</Text>
              <Image
                style={styles.profilePic}
                source={{ uri: userService.currentUser.profileUrl }}
              />
              <Text style={styles.unlocked}>
                Total spots unlocked: {this.state.visited}
              </Text>
            </View>
            <Text style={styles.directions}>
              To permanently unlock a photo, you must come within 1000 feet and rate it. 
              Or, you can choose to show all photos on default.
            </Text>
            <View style={styles.switchRow}>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.switchText}>
                  Hide spoilers
                </Text>
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Switch
                  style={styles.switch}
                  onValueChange={() => {
                    userService.changeShowSpots(userService.currentUser.id);
                    this.setState({ showAllSpots: !this.state.showAllSpots });
                  }}
                   value={this.state.showAllSpots}
                />
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.switchText}>
                  Show spoilers
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center', marginBottom: 20 }}>
              <FBLogIOButton 
                logoutCallback={this.props.logoutCallback} 
                loginCallback={this.props.loginCallback} 
              />
            </View>
          </View>
        </Image>
      </View>

            
        );
    }
}


const styles = {
  backgroundImage: {
    height,
    width
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: height - 65,
    marginHorizontal: 15
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#EFEFF4',
    fontSize: 40,
    marginBottom: 5
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#EFEFF4',
    alignSelf: 'center'
  },
  unlocked: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#EFEFF4',
    fontSize: 26,
    marginTop: 5
  },
  directions: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#EFEFF4',
    fontSize: 20,
  },
  switchRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  switchText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#EFEFF4',
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 10,
    width: width / 4,
  },
  switch: {
    marginTop: 20
  }
};


export default Profile;
