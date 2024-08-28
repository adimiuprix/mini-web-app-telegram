import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '../components/ui/button'
import { TelegramIcon } from '../icons/TelegramIcon'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useIsConnectionRestored } from '@tonconnect/ui-react'
import { useTonAddress } from '@tonconnect/ui-react'

import { WebApp } from '@twa-dev/sdk'

function Home() {
  // Mengecek apakah telah conect atau belum
  const isConnect = useIsConnectionRestored()

  // Render alamat wallet
  const Address = useTonAddress()

  const initData = WebApp.initDataUnsafe
  setUserName(initData.user?.username || 'No Username');
  
  return (
    <>
      <div className='h-screen bg-gradient-to-b from-sky-300 to-transparent'>
        <div class="px-3 py-10">
          <div className="flex flex-col justify-center items-center mb-8">
            <TonConnectButton />
          </div>
          <div class="mx-auto max-w-screen-lg">
            <div class="text-center">
              <a class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80" href="https://t.me/augom" target="_blank" rel="noopener">
                <TelegramIcon />
                <p className='pl-2'>Follow Adi Miuprix on telegram {userName}</p>
              </a>
            </div>
            <div class="mt-3 text-4xl font-bold tracking-tight text-center">
              Selamat Datang Di <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Mini Web App</span> Dengan Telegram.
            </div>
            <div class="mx-auto mt-5 max-w-screen-md text-xl text-center text-muted-foreground">
              Aplikasi scafolding untuk membangun mini app di telegram menggunakan beberapa dependecies dan open source.
            </div>
            <div class="flex gap-y-3 gap-x-5 justify-center mt-8 max-sm:flex-col">
              <a className={buttonVariants({ variant: 'outline', size: 'lg' })} href="https://github.com/adimiuprix/mini-web-app-telegram">
              <GitHubLogoIcon className="mr-2 size-5" />
              Explain on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>        
    </>
  )
}

export default Home