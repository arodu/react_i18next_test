import React from 'react';

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locales from './locales'

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locales,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
