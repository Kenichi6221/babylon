import React from 'react';

import H1 from 'components/atomic/Title/H1';
import Section from 'components/atomic/Section';

const TitleSection = (props) => {
  const { title } = props;
  return (
    <Section>
      <H1>{title}</H1>
    </Section>
  );
};

export default TitleSection;
