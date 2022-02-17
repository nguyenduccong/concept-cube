import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Common/Header/Header';
import RoutesWrapper from './Components/Pages/Routers/Router';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['localStorage', 'cookie','htmlTag', 'localStorage','path', 'subdomain'],
      caches: ['localStorage','cookie'], 
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense: false
    }
  });

function App() {
  return (
    <BrowserRouter>
      <Header />
    <div >
      <Route path="/" component={RoutesWrapper} />
    </div>
  </BrowserRouter>
  );
}

export default App;
