import React from 'react';
import IntroductionSection from 'components/atomic/Section/IntroductionSection';
import Figure from 'components/atomic/Figure';
import Image from 'components/atomic/Image';
import FigureCaptionIntroduction from 'components/FigureCaption';

const IntroduceAppSection = () => {
  return (
    <IntroductionSection>
      <Figure>
        <Image src="/images/welcomeImage.png" />
        <FigureCaptionIntroduction>
          hello this app is amazing if you want to share your wise
        </FigureCaptionIntroduction>
      </Figure>
    </IntroductionSection>
  );
};

export default IntroduceAppSection;
