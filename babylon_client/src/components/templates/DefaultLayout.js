import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/molecule/Header';
import ContainerSection from 'components/atomic/Section/ContainerSection';
import useSecureAuthentication from 'customHooks/useSecureAuthentication';
import ContainerMainSection from 'components/atomic/Section/ContainerMainSection';
import FastMenuSection from 'components/atomic/Section/FastMenuSection';
import TitleSection from 'components/molecule/TitleSection';
import {
  HomeIcon,
  SearchIcon,
  NotificationIcon,
  MessageIcon,
} from 'components/molecule/Icons';

const DefaultLayout = ({ children, title }) => {
  const {
    autheticationWasChecked,
    isAuthenticated,
    error,
  } = useSecureAuthentication();

  if (!autheticationWasChecked || error) {
    return null;
  }
  return (
    isAuthenticated &&
     (
      <ContainerSection>
        <Header title={title} />
        <TitleSection title={title} />
        <ContainerMainSection>{children}</ContainerMainSection>
        <FastMenuSection>
          <HomeIcon />
          <SearchIcon />
          <NotificationIcon />
          <MessageIcon />
        </FastMenuSection>
      </ContainerSection>
    )
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultLayout;
