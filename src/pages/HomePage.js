import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from "../images/logo.png"
import ST1 from "../images/s1.png"
import ST2 from "../images/s2.png"
import ST3 from "../images/s3.png"
import ST4 from "../images/s4.png"
import ST5 from "../images/s5.png"
import ST6 from "../images/s6.png"
import ST7 from "../images/s7.png"
import ST8 from "../images/s8.png"
import axios from 'axios';
import { detect } from "detect-browser";

const HomePage = () => {
    const navigate = useNavigate();
    const [ipData, setIpData] = useState(null);
    const [browserDetails, setBrowserDetails] = useState("")
    const [buttonLoading, setButtonLoading] = useState()


    function generateUniqueUserId() {
        const timestamp = Date.now(); // current time in ms
        const random = Math.floor(Math.random() * 1000); // 0–999
        return Number(`${timestamp}${random}`);
    }

    useEffect(() => {
        axios.get('http://ip-api.com/json')
            .then((res) => {
                setIpData(res.data);
            })
            .catch((err) => {
                console.error('Failed to fetch IP info:', err);
            });
    }, []);

    const handleStartTest = async () => {
        setButtonLoading(true)
        const browser_data = detect();
        const payload = {
            unique_id: generateUniqueUserId(),
            country: ipData?.country,
            countryCode: ipData?.countryCode,
            ip_address: ipData?.query,
            region: ipData?.regionName,
            zip: ipData?.zip,
            timezone: ipData?.timezone,
            city: ipData?.city,
            browser: browser_data?.name,
            device_type: browser_data?.os
        }
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/oval_skin`, payload)
            console.log("response_data", data)
            if (data.success) {
                navigate(`/question-page/${data?.data?.unique_id}`);
            }


        } catch (error) {
            console.log(error)

        } finally {
            setButtonLoading(false)
        }

    };


    return (
        <div className="flex flex-col items-center  pt-[20px] bg-[#FAF9F5] h-[100vh]">
            <div className='flex justify-center w-[100%]'>
                <img src={LOGO} alt='logo' className='h-[20px] w-[70px]' />
            </div>
            <div className='flex flex-col justify-center items-center w-[100%] mt-[100px]'>
                <div className="relative w-[450px] h-[260px] bg-[#f5ede6] rounded-full mx-auto rotate-[30deg] mb-[40px] -ml-[25px]">
                    {/* Back row */}
                    <img src={ST5} alt="ST5" className="absolute top-[15%] left-[25%] w-[42px] -rotate-[30deg] scale-[7.5] z-10" />
                    <img src={ST6} alt="ST6" className="absolute top-[7%] left-[42%] w-[42px] -rotate-[30deg] scale-[7.5] z-20" />
                    <img src={ST8} alt="ST8" className="absolute top-[16%] left-[60%] w-[42px] -rotate-[30deg] scale-[7.5] z-10" />

                    {/* Middle row */}
                    <img src={ST2} alt="ST2" className="absolute top-[42%] left-[25%] w-[42px] -rotate-[30deg] scale-[7.5] z-20" />
                    <img src={ST4} alt="ST4" className="absolute top-[35%] left-[40%] w-[42px] -rotate-[30deg] scale-[8.5] z-20" />
                    <img src={ST7} alt="ST7" className="absolute top-[38%] left-[55%] w-[42px] -rotate-[30deg] scale-[7.5] z-30" />

                    {/* Front row */}
                    <img src={ST1} alt="ST1" className="absolute top-[63%] left-[35%] w-[42px] -rotate-[30deg] scale-[7.5] z-40" />
                    <img src={ST3} alt="ST3" className="absolute top-[58%] left-[50%] w-[42px] -rotate-[30deg] scale-[7.5] z-40" />
                </div>
                <div>
                    <h1 className="text-[30px] font-semibold text-gray-800 leading-tight flex flex-col mt-4 font-noto">
                        <span >
                            What’s Your
                        </span>{" "}
                        <span className="font-bold">
                            Oval Type?
                        </span>
                    </h1>
                </div>
                <div className='font-noto flex flex-col items-center justify-center text-[13px] mt-2'>

                    <p>Discover and decode your skin</p>
                    <p>personality</p>
                </div>
                {/* <button
                    onClick={handleStartTest}
                    className="bg-[#9C836B] text-white px-6 py-3 rounded-xl text-[1.2rem] mt-6 md:text-base hover:bg-blue-700 transition duration-300 shadow-md"
                >
                    Start the skin quiz
                </button> */}
                <button
                    onClick={handleStartTest}
                    className="bg-[#9C836B] text-white px-6 py-3 rounded-xl text-[1.2rem] mt-6 md:text-base hover:bg-[#9C836B] transition duration-300 shadow-md flex items-center justify-center relative"
                    disabled={buttonLoading}
                >
                    {buttonLoading && (
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        </span>
                    )}
                    <span className={buttonLoading ? "opacity-40" : ""}>
                        Start the skin quiz
                    </span>
                </button>
            </div>
        </div>

    );
};

export default HomePage;
