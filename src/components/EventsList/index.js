import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import EventSummary from '../EventSummary';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

class EventsList extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.container}
        data={[
          { key: 'Devin' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <EventSummary />}
      />
    );
  }
}

export default EventsList;
