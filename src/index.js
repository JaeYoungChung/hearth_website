import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import global_en from './translations/en/global.json';
import global_ko from './translations/ko/global.json';
import global_ja from './translations/ja/global.json';
import { HelmetProvider } from "react-helmet-async";

i18next.init({
    interporlation: {escapeValue: false},
    lng: "en",
    resources: {
        en: {
            global: global_en,
        },
        ko: {
            global: global_ko,
        },
        ja: {
            global: global_ja,
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <React.StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </I18nextProvider>
        </BrowserRouter>
    </React.StrictMode>
)