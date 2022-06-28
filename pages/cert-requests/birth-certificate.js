import { useContext } from 'react'

import MainContext from '../../src/MainContext'

import MobileModal from '../../components/MobileModal'

export default function BirthCertificateRequest() {
    const { otpVerified } = useContext(MainContext)
    console.log(otpVerified)
    return (
      <>
        <div className="w-screen">
            {!otpVerified && <MobileModal/>}
            <div className="flex-1 w-full px-8 mx-auto md:px-16 lg:px-10 max-w-6xl mt-16">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name(s)</label>
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                        Sex
                                        </label>
                                        <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                        <option>Male</option>
                                        <option>Female</option>
                        
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                        <input datepicker="true" type="date"  id="dob" autoComplete="date-of-birth"
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">Place of Birth</label>
                                        <div className="mt-1">
                                            <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3 py-2"
                                            placeholder="Khudu Ward, Chobokwane.&#10;Ghanzi District, Botswana"
                                           
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">Please include Ward name if not born in a hospital</p>
                                    </div>
                                    
                                    <div className="col-span-6 sm:col-span-6">
                                        <hr/>
                                    </div>
                                    
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="father-name" className="block text-sm font-medium text-gray-700">Fathers Name and Surname</label>
                                        <input type="text" name="father-name" id="father-name" autoComplete="given-name"
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="mother-name" className="block text-sm font-medium text-gray-700">Mothers Name and Surname</label>
                                        <input type="text" name="mother-name" id="mother-name" autoComplete="given-name"
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="file-attachment" className="block text-sm font-medium text-gray-700">Attachment</label>
                                        <input type="file" name="file-attachment" id="file-attachment" autoComplete="given-name"
                                        className="mt-1 px-2 py-1 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Attachment Name</label>
                                        <input type="text" name="attachment" id="attachment"
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
      </>
    )
  }
  