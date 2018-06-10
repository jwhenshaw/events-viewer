import React from 'react';

const mockData = {
  _id: 1,
  label: 'EventLabel',
  summary: 'This is an event about events, would you believe it.',
};

export default Component => props => {
  class DataFetcher extends React.Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      setTimeout(this.setReady, 750);
    }

    setReady = () => {
      this.setState({
        loading: false,
      });
    };

    render() {
      return <Component {...props} loading={this.state.loading} data={mockData} />;
    }
  }
  return <DataFetcher />;
};
