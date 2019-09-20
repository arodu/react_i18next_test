import React from 'react';
import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();

  return (
    <div>{ t('Welcome to React') }</div>
  );
}

export default Content;
