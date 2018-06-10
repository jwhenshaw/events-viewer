import React from 'react';
import { compose, mapProps } from 'recompose';
import { StyleSheet, Text, View } from 'react-native';

import { withTheme } from '../../';
import summaryDataHoC from './summaryDataHoC';

class EventSummary extends React.Component {
  render() {
    const { loading, styles, _id, label, summary } = this.props;

    if (loading) {
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>;
    }

    return (
      <View style={styles.container}>
        <Text>{label}</Text>
        <Text>{summary}</Text>
      </View>
    );
  }
}

const styles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.background.grey,
      height: 96,
      margin: 8,
    },
  });

const propMapper = props => {
  const { loading, data, ...otherProps } = props;
  if (loading) {
    return {
      loading,
      ...otherProps,
    };
  }
  const { _id, label, summary } = data;
  return {
    _id,
    label,
    summary,
    ...otherProps,
  };
};

export default compose(
  withTheme(styles),
  summaryDataHoC,
  mapProps(propMapper),
)(EventSummary);
