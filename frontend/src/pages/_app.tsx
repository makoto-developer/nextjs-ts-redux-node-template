import { Provider } from 'react-redux'

import Footer from '../components/Footer'
import Header from '../components/Header'

import s from './_app.module.scss'
import { useService } from './_app_service'

import type { AppProps } from 'next/app'

import '../styles/color.modules.scss'
import '../styles/main.modules.scss'
import '../styles/reset.modules.scss'

function App({
  Component,
  pageProps,
}: AppProps) {
  const { store } = useService()

  return (
    <div className={s.App}>
      <div className={s.App_Main}>
        <Provider store={store}>
          <Header />
          <div className={s.App_Container}>
            {/*<Component className={s.Container} {...pageProps} />*/}
            <Component
              style={s.Container}

              {...pageProps}
            />
          </div>
          <Footer />
        </Provider>
      </div>
    </div>
  )
}

export default App
