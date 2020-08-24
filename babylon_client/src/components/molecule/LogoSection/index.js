import React from 'react';
import Section from 'components/atomic/Section';
import Anchor from 'components/atomic/anchor';
import Figure from 'components/atomic/Figure';
import Image from 'components/atomic/Image';

const LogoSection = () => {
  const image = <Image src="/images/logo.png" />;
  return (
    <>
      <Section height="7rem">
        <Anchor>
          <Figure>{image}</Figure>
        </Anchor>
      </Section>
    </>
  );
};

export default LogoSection;
