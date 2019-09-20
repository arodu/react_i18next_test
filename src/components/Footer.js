import React from 'react';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>{ t('Footer') }</footer>
  );
}

export default Footer;
