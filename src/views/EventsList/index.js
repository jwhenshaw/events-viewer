import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withTheme } from '../../';
import EventsList from '../../components/EventsList';

class EventsListView extends React.Component {
  static navigationOptions = {
    title: 'Events',
  };

  render() {
    const { styles } = this.props;

    return (
      <View style={styles.container}>
        <EventsList />
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

export default withTheme(styles)(EventsListView);
