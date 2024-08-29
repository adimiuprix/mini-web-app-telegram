import { buttonVariants } from '../components/ui/button'
import WebApp from '@twa-dev/sdk'

// Mendapatkan username
const userName = WebApp.initDataUnsafe.user?.username ?? 'undefined'
const firstName = WebApp.initDataUnsafe.user?.first_name ?? 'undefined'
const lastName = WebApp.initDataUnsafe.user?.last_name ?? 'undefined'
const idUser = WebApp.initDataUnsafe.user?.id ?? 'undefined'

function Account() {

  return (
    <>
        <div className='h-screen bg-gradient-to-b from-sky-300 to-transparent'>
          <div class="px-3 py-10">
            
            <div class="p-10 mx-auto max-w-screen-lg bg-white bg-opacity-10 rounded-3xl border border-white border-opacity-20 shadow-xl backdrop-blur-lg">
              <div class="text-3xl font-bold text-center text-blue-900">Detail Akun</div>
              <div class="mt-6">
                <p class="text-lg font-medium text-blue-900"><strong>Id user:</strong> <span class="text-blue-900">{idUser}</span></p>
                <p class="text-lg font-medium text-blue-900"><strong>Username:</strong> <span class="text-blue-900">{userName}</span></p>
                <p class="mt-4 text-lg font-medium text-blue-900"><strong>Nama depan:</strong> <span class="text-blue-900">{firstName}</span></p>
                <p class="mt-4 text-lg font-medium text-blue-900"><strong>Nama belakang:</strong> <span class="text-blue-900">{lastName}</span></p>
              </div>
              <div class="flex gap-y-3 gap-x-5 justify-center mt-8 max-sm:flex-col">
                <a className={buttonVariants({ variant: 'outline', size: 'lg' })} href="https://github.com/adimiuprix/mini-web-app-telegram">
                  Follow On github
                </a>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Account