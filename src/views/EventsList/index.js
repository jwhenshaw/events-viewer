import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme } from '../../';

class EventsList extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  render() {
    const { styles } = this.props;

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default withTheme(styles)(EventsList);
