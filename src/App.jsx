import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '@/components/ui/button'
import {TelegramIcon} from './icons/TelegramIcon'

function App() {
  return (
    <>
      <div className='h-screen bg-gradient-to-b from-sky-300 to-transparent'>
        <div class="px-3 py-36">
            <div class="mx-auto max-w-screen-lg">
                <div class="text-center">
                    <a class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80" href="https://t.me/augom" target="_blank" rel="noopener">
                        <TelegramIcon /> <p className='pl-2'>Follow Adi Miuprix on telegram</p>
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
                      <GitHubLogoIcon className="mr-2 size-5" /> Explain on GitHub
                    </a>
                </div>
            </div>
        </div>
      </div>
      
      <nav class="flex fixed bottom-0 left-0 justify-around items-center px-4 py-2 w-full bg-blue-500 rounded-t-3xl border-t border-sky-700 shadow-lg">
        <a href="/home" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
            <span class="text-3xl">🏠</span>
            <span class="text-xs font-semibold">Home</span>
        </a>
        <a href="/account" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
            <span class="text-3xl">👤</span>
            <span class="text-xs font-semibold">Account</span>
        </a>
        <a href="/reff" class="flex flex-col items-center text-white transition duration-300 hover:text-pink-200">
            <span class="text-3xl">🔗</span>
            <span class="text-xs font-semibold">Reff</span>
        </a>
      </nav>      
    </>
  )
}

export default App
