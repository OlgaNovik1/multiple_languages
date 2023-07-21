import { Suspense } from 'react'
// import './i18n'
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation()


  return (
    <div className="App">
      <h1>{t('main.header')}</h1>
    </div>
  );
}



export default function WrappedApp() {
  return (
    <Suspense fallback='loading...'>
      <App />
    </Suspense>
  )
};
