import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaCheckCircle, FaExclamation, FaRegCopy, FaRegStickyNote, FaSearch, FaThermometerHalf, FaTimesCircle } from 'react-icons/fa';
import { IoMdShare } from "react-icons/io";
import Product from "../images/result_group.svg"
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
import SHARE from "../images/share.svg"
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";
import { MdOutlineErrorOutline } from "react-icons/md";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share';
import { BiCheckCircle } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';

const ResultPage = () => {
  const [finalResult, setFinalResult] = useState({})
  const [loading, setLoading] = useState(true)
  const { user_id } = useParams()
  const [shareModal, setShareModal] = useState(false)
  const [emailSendModal, setEmailSendModal] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [emailSendButtonLoading, setEmailSendButtonLoading] = useState()
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
  const shareUrl = window.location.href;
  const shareText = "Check out my Oval Type result!";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  // ...existing code...
  const getResultDetails = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/oval_skin/${user_id}`);
      // setFinalResult(data); // Uncomment and use if you want to update finalResult with API data
      if (data.success) {
        setFinalResult(ALL_RESULT_LIST?.[data?.data?.result_type])

      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
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


  const handleSendEmail = async () => {
    setEmailSendButtonLoading(true)

    try {
      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}/oval_skin/update_single_feild/${user_id}`,
        {
          email: inputValue
        }
      );
      if (data?.success) {
        setEmailSendModal(true)
        setEmailSuccess(data?.is_email_sent)
      }

    } catch (error) {

      console.log(error);
    } finally {
      setEmailSendButtonLoading(false)
    }
  }

  const handleShareButton = async () => {
    try {

      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_API}/oval_skin/update_single_feild/${user_id}`,
        {
          is_share: true
        }
      );

    } catch (error) {

    }
  }

  const handleShareIcon = () => {
    handleShareButton()
    setShareModal(true)
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-[#8b6f5e] border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="text-lg text-gray-700 font-semibold">Loading...</div>
          </div>
        </div>
      )}
      {!loading && <div className='bg-[#FAF9F5] w-full h-screen overflow-y-auto flex flex-col item-center p-6 font-noto'>
        <div className='flex justify-between mt-[30px] item-center'>
          <div className='w-[95%] text-center text-[18px] ml-[25px]'>Your oval type is</div>

          {/* <IoMdShare size={25} className='mt-2' onClick={() => handleShareIcon()} /> */}
          <img src={SHARE} alt='share' onClick={() => handleShareIcon()} />

        </div>
        <h2 className='text-center text-[1.5rem] font-bold mt-[10px]'>{finalResult?.skin_type}</h2>
        <p className='text-center mt-[4px]'>{finalResult?.type_subline}</p>

        <div className='flex item-center justify-center'>

          {/* <img src={Ellipse} alt='ellipse' className='' /> */}
          <img src={finalResult?.image} alt='image_result' className='h-[200px] scale-125 mt-[10px]' />
        </div>
        {/* about section */}
        <div className="border border-[1px]  border-[#2b2928] rounded-[18px] p-6 text-left font-noto">
          <div className="flex items-center gap-2 mb-2">
            {/* <FaRegStickyNote className="text-gray-700" /> */}
            <p className="font-bold text-gray-800 text-[18px] font-noto">🧬 About your oval type</p>
          </div>
          <p className="text-sm text-gray-600 font-noto text-[16px]">
            {finalResult?.about}
          </p>
        </div>
        {/* skin overview */}
        <div className="bg-white w-full rounded-[25px] p-6 shadow-md w-fit max-w-md mt-[20px] border border-[1px] border-[#e0e0e0]">
          <div className="flex items-center mb-4 text-lg font-semibold">
            <FaSearch className="mr-2 text-gray-500" />
            Skin overview
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            {/* Sebum production */}
            <div className="flex justify-between">
              <span>Sebum production:</span>
              <span className="flex items-center gap-1 bg-[#efeadf] px-2 py-1 rounded-full font-noto font-bold text-[12px]">
                {finalResult?.skin_overview?.sebum_production}
              </span>
            </div>

            {/* Pores */}
            <div className="flex justify-between">
              <span>Pores:</span>
              <span className="flex items-center gap-1 bg-[#efeadf] px-2 py-1 rounded-full font-noto font-bold text-[12px]">
                {finalResult?.skin_overview?.pore}
              </span>
            </div>

            {/* Sensitivity */}
            <div className="flex justify-between">
              <span>Sensitivity:</span>
              <span className="flex items-center gap-1 bg-[#efeadf] px-2 py-1 rounded-full font-noto font-bold text-[12px]">
                {finalResult?.skin_overview?.sensitivity
                }
              </span>
            </div>

            {/* Common concerns */}
            <div className="flex justify-between">
              <span>Common concerns:</span>
              <span className="flex items-center gap-1 bg-[#efeadf] px-2 py-1 rounded-full font-noto font-bold text-[12px]">
                {finalResult?.skin_overview?.concerns}
              </span>
            </div>
          </div>
        </div>
        {/* dos and donts */}
        <div className=" w-full max-w-md text-sm mt-[30px]">
          <div className="font-bold text-base flex items-center gap-2 text-[18px] font-noto">
            <span>✅❌</span>
            Your glow routine Do’s and Don’ts
          </div>
          <p className="text-gray-500 mb-4">Here's what works for FLARE type</p>

          <div className="space-y-2">
            {finalResult?.dos_and_donts?.do?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-[#EFEADF] rounded-full px-3 py-3 text-[14px]"
              >
                <FaCheckCircle className="text-[#6bad4c]" size={20} />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}

            {finalResult?.dos_and_donts?.dont?.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-[#EFEADF] rounded-full px-3 py-3 text-[14px]"
              >
                <FaTimesCircle className="text-[#d95353]" size={20} />
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
              className="rounded-xl border border-[#2B2928] border-[1px] border-1 p-4 shadow-sm"
            >
              <div className="flex items-start flex-col gap-2">

                <h3 className="font-semibold text-gray-900">{tip_item?.tip}</h3>
                <p className="text-sm text-gray-600 mt-1">{tip_item.reason}</p>

              </div>
            </div>
          ))}
        </div>
        {/* personalize message */}
        <div className="max-w-sm mx-auto bg-white rounded-[25px] p-6 shadow-md text-center mt-[30px] border border-[1px]  border-[#e0e0e0] font-noto">
          {/* Title */}
          <h2 className="text-[24px] font-normal mb-2 font-noto">Tailored just for you</h2>
          <p className="text-gray-600 text-[16px] mb-6 font-noto">
            Your personalized lineup of trending K-beauty picks — chosen to bring balance, calm, and glow to your skin.
          </p>

          {/* Product cards */}
          <div>
            <img src={Product} alt='result_page' />
          </div>

          {/* Email input */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={inputValue}
              className="w-full h-[56px] px-4 py-2 border rounded-[16px] focus:outline-none focus:border-[#9C836B] text-[16px] font-noto"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="relative w-full h-[56px] bg-[#9c836b] hover:bg-[#775c4d] text-white font-medium py-2 font-bold
             rounded-[16px] text-[16px] font-noto"
              onClick={handleSendEmail}
            >
              {emailSendButtonLoading && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                </span>
              )}
              <span className={emailSendButtonLoading ? "opacity-0" : ""}>
                Get my routine
              </span>
            </button>

          </div>
        </div>
        {/* share option */}
        <div
          className="text-[1.1rem] w-full text-gray-800 flex items-center justify-center gap-1 w-fit mt-[40px] mb-[40px]"
          onClick={() => handleImageDownload()}
        >
          {/* <span role="img" aria-label="camera">📸</span> */}

          {/* <ImFolderDownload size={25} /> */}
          📂
          <span className='underline'> Download Your Oval Type</span>
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
            <div className="grid grid-cols-4 gap-4 mb-4 max-w-[200px]">
              <button
                onClick={handleCopy}
                className="w-[40px] h-[40px] rounded-full bg-gray-600 flex items-center justify-center text-white text-xl"
                title="Copy link"
              >
                <FaRegCopy />
              </button>

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

              <FacebookMessengerShareButton url={window.location.href} quote="Check out my Oval Type result!">
                <FacebookMessengerIcon size={40} round />
              </FacebookMessengerShareButton>

              <a
                href={`sms:&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
                className="w-[40px] h-[40px] rounded-full bg-blue-500 flex items-center justify-center text-white text-xl"
                title="iMessage"
              >
                💬
              </a>

              <a
                href={`sms:+1234567890?&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
                className="w-[40px] h-[40px] rounded-full bg-green-500 flex items-center justify-center text-white text-xl"
                title="SMS"
              >
                📱
              </a>
            </div>

            <button
              className="text-gray-500 mt-2"
              onClick={() => setShareModal(false)}
            >
              Close
            </button>
          </div>
        </>)}

      {emailSendModal && (
        <>
          {emailSuccess ?
            <div
              className="fixed w-[90%] top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all
           duration-500 animate-slide-down bg-gradient-to-r from-green-50 to-white border border-green-200 text-green-800
            rounded-xl p-4 flex items-start space-x-3 w-[90%] shadow-sm"
              style={{ animation: 'slideDown 0.5s' }}
            >
              <BiCheckCircle className="text-green-500" size={35} />
              <div>
                <p className="font-semibold text-sm text-gray-800">Sent!</p>
                <p>Your personalized routine is on its way—check your inbox!</p>
              </div>
              <RxCross2 size={35} onClick={() => setEmailSendModal(false)} />
            </div> :
            <div
              className="fixed w-[90%] top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all
           duration-500 animate-slide-down  border-1 border-red-500 bg-gradient-to-r from-red-100 to-red-50
            text-green-800 rounded-xl p-4 flex items-start space-x-3 w-[90%] shadow-sm"
              style={{ animation: 'slideDown 0.5s' }}
            >
              <MdOutlineErrorOutline className="text-red-500" size={35} />
              <div>
                <p className="font-semibold text-[18px] text-gray-800">Let’s try that again</p>
                <p className='text-sm text-gray-600'>Make sure your email is typed correctly and try once more.</p>
              </div>
              <RxCross2 size={35} onClick={() => setEmailSendModal(false)} />
            </div>

          }
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </>
  )
}

export default ResultPage