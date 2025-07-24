import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaCheckCircle, FaExclamation, FaRegStickyNote, FaSearch, FaThermometerHalf, FaTimesCircle } from 'react-icons/fa';
import { IoMdShare } from "react-icons/io";
import Product from "../images/result_group.png"
import Ellipse from "../images/ellipse.png"
import { ALL_RESULT_LIST } from '../Constant.Others';
import { useParams } from 'react-router-dom';
import { ImFolderDownload } from "react-icons/im";
import FLARE_D from "../images/FLARE_D.jpg"
import BLOOM_D from "../images/BLOOM_D.jpg"
import CLAM_D from "../images/CALM_D.jpg"
import DUSK_D from "../images/DUSK_D.jpg"
import FORGE_D from "../images/FORGE_D.jpg"
import GLOW_D from "../images/GLOW_D.jpg"
import HAZE_D from "../images/HAZE_D.jpg"
import MUSE_D from "../images/MUSE_D.jpg"
import axios from 'axios';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

const ResultPage = () => {
  const [finalResult, setFinalResult] = useState({})
  const [loading, setLoading] = useState(true)
  const { user_id } = useParams()
  const [shareModal, setShareModal] = useState(false)
  const IMAGE_MAP = {
    "FLARE": FLARE_D,
    "BLOOM": BLOOM_D,
    "CLAM": CLAM_D,
    "DUSK": DUSK_D,
    "FORGE": FORGE_D,
    "GLOW": GLOW_D,
    "HAZE": HAZE_D,
    "MUSE": MUSE_D
  }

  // ...existing code...
  const getResultDetails = async () => {
    setLoading(true);
    const start = Date.now();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/oval_skin/${user_id}`);
      // setFinalResult(data); // Uncomment and use if you want to update finalResult with API data
      console.log("ALL_RESULT_LIST?.[data?.skin_type]", ALL_RESULT_LIST?.[data?.data?.result_type], data?.data?.result_type)
      setFinalResult(ALL_RESULT_LIST?.[data?.data?.result_type])
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {
      const elapsed = Date.now() - start;
      const minLoading = 12000; // 15 seconds in ms
      const remaining = minLoading - elapsed;
      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    }
  }
  // ...existing code...

  useEffect(() => {
    getResultDetails()

  }, [])

  const handleImageDownload = () => {
    const skinType = finalResult?.skin_type;
    if (!skinType) return;

    // Get the image from IMAGE_MAP using the skin type (make sure the key matches)
    const imageSrc = IMAGE_MAP[skinType.toUpperCase()];
    if (!imageSrc) return;

    // Create a hidden link and trigger download
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `${skinType.replace(/\s+/g, "_").toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {loading && (
        <div className="h-screen flex flex-col justify-center items-center bg-[#FCFBF8] text-center">
          {/* Dots */}
          <div className="flex gap-3 mb-6">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>

          {/* Text */}
          <h2 className="font-semibold text-[1.5rem] text-[#262522] mb-1 mx-[40px]">
            Analyzing your skin persona…
          </h2>
          <p className="text-sm text-[#262522] opacity-80">
            Your Oval Type is almost ready
          </p>
        </div>
      )}


      {!loading && <div className='bg-[#FAF9F5] w-full h-screen overflow-y-auto flex flex-col item-center p-6 font-roboto'>
        <div className='flex justify-between mt-[30px] item-center'>
          <div className='w-[90%] text-center text-[25px]'>Your oval type is</div>

          <IoMdShare size={25} className='mt-2' onClick={()=>setShareModal(true)}/>

        </div>
        <h2 className='text-center text-[1.5rem] font-bold'>{finalResult?.skin_type}</h2>
        <p className='text-center'>{finalResult?.type_subline}</p>

        <div className='flex item-center justify-center relative mt-[10px]'>

          <img src={Ellipse} alt='ellipse' className='' />
          <img src={finalResult?.image} alt='image_result' className='absolute top-0 left-[30%]' />
        </div>
        {/* about section */}
        <div className="border border-2 rounded-xl p-4 text-left border-black mt-6">
          <div className="flex items-center gap-2 mb-2">
            <FaRegStickyNote className="text-gray-700" />
            <p className="font-semibold text-gray-800">About your oval type</p>
          </div>
          <p className="text-sm text-gray-600">
            {finalResult?.about}
          </p>
        </div>
        {/* skin overview */}
        <div className="bg-white w-full rounded-xl p-6 shadow-md w-fit max-w-md mt-[20px]">
          <div className="flex items-center mb-4 text-lg font-semibold">
            <FaSearch className="mr-2 text-gray-500" />
            Skin overview
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            {/* Sebum production */}
            <div className="flex justify-between">
              <span>Sebum production:</span>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
                {finalResult?.skin_overview?.sebum_production}
              </span>
            </div>

            {/* Pores */}
            <div className="flex justify-between">
              <span>Pores:</span>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
                {finalResult?.skin_overview?.pore}
              </span>
            </div>

            {/* Sensitivity */}
            <div className="flex justify-between">
              <span>Sensitivity:</span>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-red-600">
                {finalResult?.skin_overview?.sensitivity
                }
              </span>
            </div>

            {/* Common concerns */}
            <div className="flex justify-between">
              <span>Common concerns:</span>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-red-500">
                {finalResult?.skin_overview?.concerns}
              </span>
            </div>
          </div>
        </div>
        {/* dos and donts */}
        <div className=" w-full max-w-md text-sm mt-[30px]">
          <div className="mb-2 font-semibold text-base flex items-center gap-2">
            <span>✅❌</span>
            Your glow routine Do’s and Don’ts
          </div>
          <p className="text-gray-500 mb-4">Here's what works for FLARE type</p>

          <div className="space-y-2">
            {finalResult?.dos_and_donts?.do?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-[#EFEADF] rounded-full px-3 py-3 text-green-700"
              >
                <FaCheckCircle className="text-green-600" size={20} />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}

            {finalResult?.dos_and_donts?.dont?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-[#EFEADF] rounded-full px-3 py-3 text-red-700"
              >
                <FaTimesCircle className="text-red-600" size={20} />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Tips */}
        <div className="space-y-6 mt-[30px]">
          {finalResult?.tips?.map((tip_item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#2B2928] border-1 p-4 shadow-sm"
            >
              <div className="flex items-start flex-col gap-2">

                <h3 className="font-semibold text-gray-900">{tip_item?.tip}</h3>
                <p className="text-sm text-gray-600 mt-1">{tip_item.reason}</p>

              </div>
            </div>
          ))}
        </div>
        {/* personalize message */}
        <div className="max-w-sm mx-auto bg-white rounded-2xl p-6 shadow-md text-center mt-[30px]">
          {/* Title */}
          <h2 className="text-xl font-semibold mb-2">Tailored just for you</h2>
          <p className="text-gray-600 text-sm mb-6">
            Your personalized lineup of trending K-beauty picks — chosen to bring balance, calm, and glow to your skin.
          </p>

          {/* Product cards */}
          {/* <div className="relative h-[30vh] mb-8">
     
          <div className="absolute top-4 left-0 w-[120px] rotate-[-12deg] bg-[#f0e7f7] rounded-xl shadow-md p-2 text-left text-xs">
            <div className="mb-1 font-semibold text-purple-700">🥶 Tired-out skin</div>
            <img src={TopImage} alt='top-image' className="h-[30px] w-[15px]"/>
            <div className="font-medium">Anua</div>
            <div className="text-[11px]">Rice Toner + Ceramide Milky</div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] bg-[#d5e6d8] rotate-[5deg] rounded-xl shadow-md p-2 text-left text-xs z-10">
            <div className="mb-1 font-semibold text-yellow-800">🧬 Cosmeceutical-tested</div>
            <img src={OneBelowImage}  alt='one-step-image' className="h-[80px] w-[45px]"/>
            <div className="font-medium">Anua</div>
            <div className="text-[11px]">Heartleaf Succinic Moisture Cleansing Foam</div>
          </div>

          <div className="absolute top-6 right-0 w-[120px] rotate-[10deg] bg-[#fcdde6] rounded-xl shadow-md p-2 text-left text-xs">
            <div className="mb-1 font-semibold text-pink-700">💗 Meltskin</div>
            <img src={twoBelowImage} alt='two-step-image' className="h-[30px] w-[15px]"/>
            <div className="font-medium">PDRN Pink Peptide Serum</div>
            <div className="text-[11px]">30ml</div>
          </div>
        </div> */}
          <div>
            <img src={Product} alt='result_page' />
          </div>

          {/* Email input */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-rose-200 text-sm"
            />
            <button className="w-full bg-[#8b6f5e] hover:bg-[#775c4d] text-white font-medium py-2 rounded-full text-sm">
              Get my routine
            </button>
          </div>
        </div>
        {/* share option */}
        <div
          className="text-[1.1rem] w-full text-gray-800 underline flex items-center justify-center gap-1 w-fit mt-[40px] mb-[40px]"
          onClick={() => handleImageDownload()}
        >
          {/* <span role="img" aria-label="camera">📸</span> */}

          <ImFolderDownload size={25} />
          <span>Download Your Oval Type</span>
        </div>
      </div>}

    {shareModal && (
  <>
    
    {/* <div
      className="fixed inset-0 bg-black bg-opacity-40 z-40"
      onClick={() => setShareModal(false)}
    >

    </div>
    <div className="fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-lg p-6 flex flex-col items-center animate-slide-up">
      <div className="w-12 h-1 bg-gray-300 rounded-full mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">Share your Oval Type</h3>
      <p className="text-gray-600 mb-4 text-center">
        Share your result with friends!
      </p>
      <div className="flex gap-4 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setShareModal(false);
          }}
        >
          Copy Link
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full"
          onClick={() => {
            window.open(
              `https://wa.me/?text=Check%20out%20my%20Oval%20Type!%20${window.location.href}`,
              "_blank"
            );
            setShareModal(false);
          }}
        >
          WhatsApp
        </button>
      </div>
      <button
        className="text-gray-500 mt-2"
        onClick={() => setShareModal(false)}
      >
        Close
      </button>
    </div> */}

     <div
      className="fixed inset-0 bg-black bg-opacity-40 z-40"
      onClick={() => setShareModal(false)}
    ></div>
    <div className="fixed left-0 right-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-lg p-6 flex flex-col items-center animate-slide-up">
      <div className="w-12 h-1 bg-gray-300 rounded-full mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">Share your Oval Type</h3>
      <p className="text-gray-600 mb-4 text-center">
        Share your result with friends!
      </p>
      <div className="flex gap-4 mb-4">
        <FacebookShareButton url={window.location.href} quote="Check out my Oval Type result!">
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href} title="Check out my Oval Type result!">
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <WhatsappShareButton url={window.location.href} title="Check out my Oval Type result!">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={window.location.href} title="Check out my Oval Type result!">
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
      <button
        className="text-gray-500 mt-2"
        onClick={() => setShareModal(false)}
      >
        Close
      </button>
    </div>
    </>)}
    
    </>
  )
}

export default ResultPage