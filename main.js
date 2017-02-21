import Exponent from 'exponent';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Animation = Exponent.DangerZone.Lottie;

class App extends React.Component {
  state = {
    progress: new Animated.Value(0)
  };

  componentDidMount() {
    this._startAnimation();
  }

  _startAnimation = () => {
    Animated
      .timing(this.state.progress, {
        toValue: 1,
        duration: 4000
      })
      .start(this._reverseAnimation);
  };

  _reverseAnimation = () => {
    Animated
      .timing(this.state.progress, {
        toValue: 0,
        duration: 4000
      })
      .start(this._startAnimation);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          progress={this.state.progress}
          style={{
            width: 300,
            height: 300
          }}
          source={require('./logo.json')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Exponent.registerRootComponent(App);
