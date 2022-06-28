import { useState } from "react"
import axios from "axios";

export default function MobileModal() {
    // const [showOtpPage, setShowOtpPage] = useState(false)

    const [mobile, setMoble] = useState('')

    const sendOtp = () => {

        const min = Math.pow(10, (6-1));
        const max = Math.pow(10, (6));
        let otp = Math.floor(Math.random() * (max - min) + min);

        let username = process.env.BULKSMS_USER;
        let password = process.env.BULKSMS_PASS;

        let postData = JSON.stringify({
        'to' : ['+26775255432'],
        'body': 'Your OTP is: 123'
        });

    //     let options = {
            
    //         method: 'POST',
    //         mode: 'cors',
            
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Content-Length': postData.length,
    //             'Access-Control-Allow-Origin': 'http://localhost:3000',
    //             'Access-Control-Allow-Credentials': true,
    //             'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
    //         },
    //         body:  postData
            
    //     };
    //     let x = Buffer.from(username + ':' + password).toString('base64');
    //     console.log(x)
    //    fetch('https://api.bulksms.com/v1/messages', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     headers: {
    //         accept: 'application/json',
    //         'Content-Type': 'application/json',
    //         'Content-Length': postData.length,
    //         'Access-Control-Allow-Credentials': true,
    //         'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
    //     },
    //     body: postData
        
    //    })
    //     .then(function(res){
    //         console.log(res)
    //         // return res.json()
    //     })
    //     .then(function(resJson){
    //         console.log(resJson)
    //         // return resJson;
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //         // return error;
    //     })


        // var postData = {
        //     email: "test@test.com",
        //     password: "password"
        //   };
          
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Authorization': 'Basic '+process.env.BULKSMS
                // 'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
            }
          };
          
          axios.post('https://api.bulksms.com/v1/messages', postData, axiosConfig)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          })


    }
    return (
      <>
        
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                
                <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            
                                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Please provide your mobile number</h3>
                                <div className="mt-2">
                                    <div className="col-span-8 sm:col-span-6">
                                        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                        <input type="text" name="attachment" id="attachment"
                                        placeholder="75255432"
                                        value={mobile}
                                        onChange={(e) => setMoble(e.target.value)}
                                        className="mt-1 px-3 py-2 border bg-white  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse justify-between ">
                        <button onClick={() => sendOtp()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Proceed</button>
                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  