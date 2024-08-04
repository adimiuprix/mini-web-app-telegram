import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '@/components/ui/button'
import {TelegramIcon} from './icons/TelegramIcon'

function App() {
  return (
    <>
      <div className='bg-gradient-to-b from-sky-300 to-transparent h-screen'>
        <div class="px-3 py-36">
            <div class="mx-auto max-w-screen-lg">
                <div class="text-center">
                    <a class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80" href="https://t.me/augom" target="_blank" rel="noopener">
                        <TelegramIcon /> <p className='pl-2'>Follow Adi Miuprix on telegram</p>
                    </a>
                </div>

                <div class="mt-3 text-center text-4xl font-bold tracking-tight">
                    Selamat Datang Di <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Mini Web App</span> Dengan Telegram.
                </div>

                <div class="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
                    Aplikasi scafolding untuk membangun mini app di telegram menggunakan beberapa dependecies dan open source.
                </div>

                <div class="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
                    <a className={buttonVariants({ variant: 'outline', size: 'lg' })} href="https://github.com/adimiuprix/mini-web-app-telegram">
                      <GitHubLogoIcon className="mr-2 size-5" /> Explain on GitHub
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
