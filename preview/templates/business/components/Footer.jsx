// React Libraries
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'


import styled from 'styled-components';
const InvoiceFooter = styled.div`
  flex: none;
  h4 {
    padding-bottom: 0.83333em;
    border-bottom: 4px solid #efefd1;
  }
  .footer {
    padding-top: 0.83333em;
    border-top: 4px solid #efefd1;
  }
  ${props =>
    props.customAccentColor &&
    `
    h4 { border-bottom: 4px solid ${props.accentColor}; }
    .footer { border-top: 4px solid ${props.accentColor}; }
  `};
`;

// Component
function Footer({ t, invoice, configs }) {
  const { language, accentColor, customAccentColor  } = configs;
  return invoice.note ? (
    <InvoiceFooter
      accentColor={accentColor}
      customAccentColor={customAccentColor}
    >
      <ReactMarkdown className="footer" source={invoice.note} escapeHtml={false} />
    </InvoiceFooter>
  ) : null;
}

Footer.propTypes = {
  configs: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default Footer;
