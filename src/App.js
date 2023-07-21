import { Suspense, useState } from 'react'
import './App.css';
import { useTranslation } from 'react-i18next';

const locales = {
  en: { title: 'English' },
  ru: { title: 'Russian' },
}

function App() {
  const [messages, setMessages] = useState(0);
  const { t, i18n } = useTranslation()


  return (
    <div className="App">
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              type='submit'
              onClick={() => i18n.changeLanguage(locale)}
              style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }}>
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>

      <h1>{t('main.header')}</h1>

      <button onClick={() => setMessages(messages + 1)}>+1 message</button>
      <p>
        {t('main.new_messages', { count: messages })}
      </p>

      <p>
        {t('main.current_date', { date: new Date() })}
      </p>

      <p>
        {t('main.incoming_message', { from: 'Alex' })}<br />
        {t('main.message_contents', { body: 'How are you doing?', context: 'male' })}
      </p>

      {/* <h1>{t('ola')}</h1>   */}

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
