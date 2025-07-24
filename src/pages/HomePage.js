import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from "../images/logo.png"
import ALL_IMAGE from "../images/group_image.png"
import Ellipse from "../images/main_ellp.png"
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
        axios.get('https://ipinfo.io/json')
            .then((res) => {
                setIpData(res.data);
            })
            .catch((err) => {
                console.error('Failed to fetch IP info:', err);
            });
    }, []);

    console.log("ipData", ipData)
    const handleStartTest = async () => {
        setButtonLoading(true)
        const browser_data = detect();
        const payload = {
            unique_id: generateUniqueUserId(),
            country: ipData?.country,
            countryCode: ipData?.country,
            ip_address: ipData?.ip,
            region: ipData?.region,
            zip: ipData?.postal,
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
            <div className='flex justify-center w-[100%] mt-[20px]'>
                <img src={LOGO} alt='logo' className='h-[20px] w-[70px]' />
            </div>
            <div className='flex flex-col justify-center items-center w-[100%] mt-[20px]'>

      <div className='flex item-center justify-center relative mt-[10px]'>


                <img src={Ellipse} alt='ellipse' className='' />
                <img src={ALL_IMAGE} alt='image_result' className='absolute top-0 left-[5%] ' />
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
