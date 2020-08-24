import React from 'react';

import H1 from 'components/atomic/Title/H1';
import Section from 'components/atomic/Section';
import PropTypes from 'prop-types';

const TitleSection = (props) => {
  const { title } = props;
  return (
    <Section>
      <H1>{title}</H1>
    </Section>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
};

export default TitleSection;
