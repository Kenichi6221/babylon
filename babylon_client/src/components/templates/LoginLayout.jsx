import React from 'react';
import PropTypes from 'prop-types';
//import Header from 'components/molecule/Header';
import ContainerMainSection from 'components/atomic/Section/ContainerMainSection';
import TitleSection from 'components/molecule/TitleSection';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('components/molecule/Header'));

const LoginLayout = ({ children, title }) => {
  return (
    <>
      <DynamicHeader title={title} />
      <TitleSection title={title} />
      <ContainerMainSection>{children}</ContainerMainSection>
    </>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default LoginLayout;
