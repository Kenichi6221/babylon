import React from 'react';
import Link from 'next/link';
import AtomicAnchorButton from 'components/atomic/anchor/AnchorButton';
import PropTypes from 'prop-types';

const AnchorButton = (props) => {
  const { href, as, text } = props;
  return (
    <Link href={href} as={as}>
      <AtomicAnchorButton>{text}</AtomicAnchorButton>
    </Link>
  );
};

AnchorButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
};

export default AnchorButton;
