import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'
import WebApp from '@twa-dev/sdk'

WebApp.expand()
WebApp.SettingsButton.hide()
WebApp.enableClosingConfirmation()
WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://mini-web-app-telegram.vercel.app/tonconnect-manifest.json"
      uiPreferences={{ theme: THEME.LIGHT }}
      walletsListConfiguration={{
        includeWallets: [{
          appName: "mini-web-app",
          name: "Connect to TON Network",
          imageUrl: "https://mini-web-app-telegram.vercel.app/favicon.svg",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["ios", "android", "macos", "windows", "linux"]
        }],
      }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>,
)
