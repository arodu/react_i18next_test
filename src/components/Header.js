import React from 'react';
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header>{ t('Header') }</header>
  );
}

export default Header;
