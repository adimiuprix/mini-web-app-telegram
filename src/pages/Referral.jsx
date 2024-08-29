import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import { useTonAddress } from '@tonconnect/ui-react'

const Referral = () => {

  const Address = useTonAddress()
  
  const [startParam, setStartParam] = useState('')

  useEffect(() => {
    const param = WebApp.initDataUnsafe.start_param
    setStartParam(param)
  }, [])

  return (
    <>
        <div className='h-screen bg-gradient-to-b from-sky-300 to-transparent'>
          <div class="px-3 py-10">
            
            <div class="p-10 mx-auto max-w-screen-lg bg-white bg-opacity-10 rounded-3xl border border-white border-opacity-20 shadow-xl backdrop-blur-lg">
              <div class="text-center">
                <h1 class="text-4xl font-bold text-blue-900">Program Referral</h1>
                <p class="mt-4 text-lg text-gray-800">Ajak teman-temanmu bergabung dan dapatkan reward menarik!</p>
              </div>
              <p>Start Param: {startParam}</p>
              <div class="mt-10">
                <div class="flex flex-col items-center">
                  <label for="referralLink" class="mb-2 text-lg text-black">Link Referral Anda</label>
                  <div class="flex items-center w-full max-w-lg bg-gray-800 bg-opacity-50 rounded-full shadow-lg">
                    <input type="text" id="referralLink" value="https://yourapp.com/referral/AdiMiuprix" readonly class="px-4 py-2 w-full text-white bg-transparent rounded-l-full focus:outline-none" />
                    <button onclick="copyReferralLink()" class="px-4 py-2 text-white bg-blue-500 rounded-r-full transition-colors duration-300 hover:bg-blue-400">Salin</button>
                  </div>
                </div>
                
                <div class="mt-8 text-center">
                  <p class="text-lg text-gray-800">Bagikan link ini kepada teman-temanmu dan dapatkan reward ketika mereka mendaftar menggunakan link tersebut.</p>
                </div>

                <div class="flex justify-center mt-10">
                  <button class="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg transition-transform duration-300 hover:bg-green-400">Lihat Reward</button>
                </div>
              </div>
            </div>

          </div>
        </div>

    </>
  )
}

export default Referral