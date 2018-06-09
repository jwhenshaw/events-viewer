import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import theme from './theme';

const headerStyle = {
  backgroundColor: theme.palette.primary.dark,
};

export default stylesWithoutTheme => {
  const styles = stylesWithoutTheme(theme);
  return Component => {
    Component.navigationOptions = {
      ...Component.navigationOptions,
      headerStyle,
    };
    const WithStyles = props => <Component {...props} styles={styles} />;

    return hoistNonReactStatic(WithStyles, Component);
  };
};
