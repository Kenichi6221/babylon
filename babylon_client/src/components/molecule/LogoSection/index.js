import React from 'react';
import Section from 'components/atomic/Section';
import Anchor from 'components/atomic/anchor';
import Figure from 'components/atomic/Figure';
import Image from 'components/atomic/Image';
import Picture from 'components/atomic/Picture';

const LogoSection = () => {
  const image = (
    <Picture>
      <source
        media="(max-width: 767px)"
        sizes="(max-width: 1534px) 100vw, 1534px"
        srcSet="images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_200.png 200w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_559.png 559w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_816.png 816w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_1026.png 1026w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_1253.png 1253w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_1467.png 1467w,
                images/logo/logo_s0ixsk_ar_1_1,c_fill,g_auto__c_scale,w_1534.png 1534w"
      ></source>
      <source
        media="(min-width: 768px) and (max-width: 991px)"
        sizes="(max-width: 1983px) 70vw, 1388px"
        srcSet="images/logo/logo_s0ixsk_ar_4_3,c_fill,g_auto__c_scale,w_538.png 538w,
                images/logo/logo_s0ixsk_ar_4_3,c_fill,g_auto__c_scale,w_808.png 808w,
                images/logo/logo_s0ixsk_ar_4_3,c_fill,g_auto__c_scale,w_1029.png 1029w,
                images/logo/logo_s0ixsk_ar_4_3,c_fill,g_auto__c_scale,w_1270.png 1270w,
                images/logo/logo_s0ixsk_ar_4_3,c_fill,g_auto__c_scale,w_1388.png 1388w"
      ></source>
      <source
        media="(min-width: 992px) and (max-width: 1199px)"
        sizes="(max-width: 2400px) 60vw, 1440px"
        srcSet="images/logo/logo_s0ixsk_ar_16_9,c_fill,g_auto__c_scale,w_596.png 596w,
                images/logo/logo_s0ixsk_ar_16_9,c_fill,g_auto__c_scale,w_887.png 887w,
                images/logo/logo_s0ixsk_ar_16_9,c_fill,g_auto__c_scale,w_1149.png 1149w,
                images/logo/logo_s0ixsk_ar_16_9,c_fill,g_auto__c_scale,w_1380.png 1380w,
                images/logo/logo_s0ixsk_ar_16_9,c_fill,g_auto__c_scale,w_1440.png 1440w"
      ></source>
      <Image
        sizes="(max-width: 5723px) 40vw, 2289px"
        srcSet="images/logo/logo_s0ixsk_c_scale,w_480.png 480w,
                images/logo/logo_s0ixsk_c_scale,w_767.png 767w,
                images/logo/logo_s0ixsk_c_scale,w_1005.png 1005w,
                images/logo/logo_s0ixsk_c_scale,w_1213.png 1213w,
                images/logo/logo_s0ixsk_c_scale,w_1421.png 1421w,
                images/logo/logo_s0ixsk_c_scale,w_1612.png 1612w,
                images/logo/logo_s0ixsk_c_scale,w_1793.png 1793w,
                images/logo/logo_s0ixsk_c_scale,w_1992.png 1992w,
                images/logo/logo_s0ixsk_c_scale,w_2156.png 2156w,
                images/logo/logo_s0ixsk_c_scale,w_2289.png 2289w"
        src="/images/logo/logo_s0ixsk_c_scale,w_2289.png"
        alt="logo babylon app"
      />
    </Picture>
  );
  return (
    <>
      <Section height="5rem">
        <Anchor>
          <Figure>{image}</Figure>
        </Anchor>
      </Section>
    </>
  );
};

export default LogoSection;
