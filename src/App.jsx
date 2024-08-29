import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import Account from './pages/Account'
import Referral from './pages/Referral'
import WebApp from '@twa-dev/sdk'

WebApp.setHeaderColor('#1a1a1a')

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="reff" element={<Referral />} />
        </Routes>

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
      </BrowserRouter>

    </>
  )
}

export default App