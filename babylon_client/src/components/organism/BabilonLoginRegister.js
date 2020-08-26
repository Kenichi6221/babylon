import React from 'react';
import ContainerSection from 'components/atomic/Section/ContainerSection';
import { SectionActions } from 'components/atomic/Section/SectionActions';
import AnchorButton from 'components/molecule/Button/AnchorButton';
import IntroduceAppSection from 'components/molecule/Section/IntroduceAppSection';

const BabilonLoginRegister = () => {
  return (
    <ContainerSection>
      <IntroduceAppSection />
      <SectionActions>
        <AnchorButton href="/login" text="log in" />
        <AnchorButton href="/register" text="register" />
      </SectionActions>
    </ContainerSection>
  );
};

export default BabilonLoginRegister;
