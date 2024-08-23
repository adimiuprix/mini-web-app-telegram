import { buttonVariants } from '../components/ui/button'

function Account() {
  return (
    <>
        <div className='h-screen bg-gradient-to-b from-sky-300 to-transparent'>
          <div class="px-3 py-36">
            
            <div class="p-8 mx-auto mt-10 max-w-screen-md bg-white bg-opacity-10 rounded-2xl border border-opacity-30 shadow-lg backdrop-blur-sm transition-transform duration-300 transform hover:scale-105">
              <div class="text-3xl font-bold text-center text-blue-900">Detail Akun</div>
              <div class="mt-6">
                <p class="text-lg font-medium text-blue-900"><strong>Nama:</strong> <span class="text-blue-900">Adi Miuprix</span></p>
                <p class="mt-4 text-lg font-medium text-blue-900"><strong>Email:</strong> <span class="text-blue-900">adi@miuprix.com</span></p>
                <p class="mt-4 text-lg font-medium text-blue-900"><strong>Telegram ID:</strong> <span class="text-blue-900">@augom</span></p>
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