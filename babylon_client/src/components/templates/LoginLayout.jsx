import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/molecule/Header';
import ContainerSection from 'components/atomic/Section/ContainerSection';

const LoginLayout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <ContainerSection>{children}</ContainerSection>
    </>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default LoginLayout;
