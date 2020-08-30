import React from 'react';
import IntroductionSection from 'components/atomic/Section/IntroductionSection';
import Figure from 'components/atomic/Figure';
import Image from 'components/atomic/Image';
import FigureCaptionIntroduction from 'components/FigureCaption';

const IntroduceAppSection = () => {
  return (
    <IntroductionSection>
      <Figure>
        <Image
          sizes="(max-width: 1800px) 100vw, 1800px"
          srcSet="/images/welcome/welcomeImage_w_200.png 200w,
                  /images/welcome/welcomeImage_w_895.png 895w,
                  /images/welcome/welcomeImage_w_1336.png 1336w,
                  /images/welcome/welcomeImage_w_1400.png 1400w,
                  /images/welcome/welcomeImage_w_1800.png 1800w"
          src="/images/welcome/welcomeImage.png"
          alt="babylon app welcome"
        />
        <FigureCaptionIntroduction>
          hello this app is amazing if you want to share your wise
        </FigureCaptionIntroduction>
      </Figure>
    </IntroductionSection>
  );
};

export default IntroduceAppSection;
