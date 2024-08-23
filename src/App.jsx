import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'
import Home from "./pages/Home"
import Account from "./pages/Account"
import Referral from "./pages/Referral"

function App() {
  return (
    <>
      <BrowserRouter>
          <TonConnectUIProvider
            manifestUrl="https://mini-web-app-telegram.vercel.app/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.LIGHT }}
            walletsListConfiguration={{
              includeWallets: [
                {
                  appName: "mini-web-app",
                  name: "Connect to TON Network",
                  imageUrl: "https://mini-web-app-telegram.vercel.app/favicon.svg",
                  bridgeUrl: "https://bridge.tonapi.io/bridge",
                  platforms: ["ios", "android", "macos", "windows", "linux"]
                }
              ],
            }}
          >
            <nav class="flex fixed bottom-0 left-0 justify-around items-center px-4 py-2 w-full bg-blue-500 rounded-t-3xl border-t border-sky-700 shadow-lg">
              <Link to="/" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
                  <span class="text-3xl">🏠</span>
                  <span class="text-xs font-semibold">Home</span>
              </Link>
              <Link to="/account" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
                  <span class="text-3xl">👤</span>
                  <span class="text-xs font-semibold">Account</span>
              </Link>
              <Link to="/reff" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
                  <span class="text-3xl">🔗</span>
                  <span class="text-xs font-semibold">Reff</span>
              </Link>
            </nav>
          </TonConnectUIProvider>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="reff" element={<Referral />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
