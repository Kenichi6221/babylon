import React from 'react';
import PropTypes from 'prop-types';
import LogoSection from '../LogoSection';
import TitleSection from '../TitleSection';
import Head from 'next/head';
const Header = ({ title }) => {
  return (
    <>
      <Head>
        <title>{`${title} | babylon`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LogoSection />
      <TitleSection title={title} />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
