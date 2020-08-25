import React from 'react';
import LogoSection from 'components/molecule/LogoSection';
import TitleSection from 'components/molecule/TitleSection';
import PropTypes from 'prop-types';

const LoginLayout = ({ children, title }) => {
  return (
    <>
      <LogoSection />
      <TitleSection title={title} />
      {children}
    </>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default LoginLayout;
