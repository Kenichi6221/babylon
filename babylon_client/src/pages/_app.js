import React from 'react';
import '../styles/normalize.css';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import { Provider } from 'react-redux';
import store from 'redux/store';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
