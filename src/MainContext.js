import { createContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({children}){

    const [otpVerified, setOtpVerified] = useState(false);
    const [otp, setOtp] = useState(null);

    const updateOtpVerified = (val) =>{
        setOtpVerified(val)
    }

    const genOtp = (otp) =>{

       
        setOtp(otp)
    }
    
    return(
        <MainContext.Provider value={{ otpVerified, updateOtpVerified, genOtp }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContext;