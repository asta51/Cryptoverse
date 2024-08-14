// src/BitcoinComponent.js

import React from 'react';
import bitcoinHtml from './Bitcoin';  // Import the HTML string

const BitcoinComponent = () => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: bitcoinHtml }}
    />
  );
};

export default BitcoinComponent;
