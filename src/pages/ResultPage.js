import React from 'react'
import { FaArrowUp, FaCheckCircle, FaExclamation, FaRegStickyNote, FaSearch, FaThermometerHalf, FaTimesCircle } from 'react-icons/fa';
import { IoMdShare } from "react-icons/io";
import TopImage from "../images/top.png";
import OneBelowImage from "../images/below.png";
import twoBelowImage from "../images/below2.png"

const ResultPage = () => {

  const dos = [
    "Lightweight hydration that won’t clog",
    "Barrier-repairing (use ceramides & panthenol)",
    "Gentle sebum-balancing (use niacinamide)"
  ];

  const donts = [
    "Over-cleansing or stripping the skin",
    "High-percentage acids or physical scrubs",
    "Layering too many actives at once"
  ];
  const tips = [
    {
      icon: "💧",
      title: "Use a mist throughout the day",
      description: "This way it can keep skin hydrated without layering too many products."
    },
    {
      icon: "📅",
      title: "Only double cleanse on certain days",
      description:
        "Double cleanse only when wearing makeup or sunscreen, not twice daily, to avoid stripping your barrier."
    }
  ];
  return (
    <div className='bg-[#FAF9F5] w-full h-screen overflow-y-auto flex flex-col item-center p-6 font-roboto'>
      <div className='flex justify-between mt-[30px] item-center'>
        <div className='w-[90%] text-center text-[25px]'>Your oval type is</div>
        <IoMdShare size={25} className='mt-2' />
      </div>
      <h2 className='text-center text-[1.5rem] font-bold'>DUSK</h2>
      <p className='text-center'>The moddy minimalist</p>

      <div className='flex item-center justify-center'>

        <div className="w-[157.01px] h-[209.54px] bg-[#F7F1E8] opacity-100 rounded-full rotate-[-45deg]"></div>
      </div>
      {/* about section */}
      <div className="border border-2 rounded-xl p-4 text-left border-black mt-6">
        <div className="flex items-center gap-2 mb-2">
          <FaRegStickyNote className="text-gray-700" />
          <p className="font-semibold text-gray-800">About your oval type</p>
        </div>
        <p className="text-sm text-gray-600">
          With dry, small-pored skin and a high tendency for irritation, Dusk types walk a fine line. Your skin barrier is easily overwhelmed — reacting to weather changes, product overload, or even stress. Redness, flaking, or stinging may come and go unpredictably. But once supported with the right routine, your skin softens into a beautifully calm, even-toned state.
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
              <FaArrowUp className="text-gray-600" />
              High
            </span>
          </div>

          {/* Pores */}
          <div className="flex justify-between">
            <span>Pores:</span>
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
              <FaSearch className="text-gray-600" />
              Visible and congested
            </span>
          </div>

          {/* Sensitivity */}
          <div className="flex justify-between">
            <span>Sensitivity:</span>
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-red-600">
              <FaExclamation className="text-red-600" />
              High - easily irritated
            </span>
          </div>

          {/* Common concerns */}
          <div className="flex justify-between">
            <span>Common concerns:</span>
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm text-red-500">
              <FaThermometerHalf className="text-red-500" />
              Inflammation
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
          {dos.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-[#EFEADF] rounded-full px-3 py-3 text-green-700"
            >
              <FaCheckCircle className="text-green-600" size={20} />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}

          {donts.map((item, idx) => (
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
        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#2B2928] border-1 p-4 shadow-sm"
          >
            <div className="flex items-start gap-2">
              <span className="text-xl">{tip.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
              </div>
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
        <div className="relative h-[30vh] mb-8">
          {/* Left card */}
          <div className="absolute top-4 left-0 w-[120px] rotate-[-12deg] bg-[#f0e7f7] rounded-xl shadow-md p-2 text-left text-xs">
            <div className="mb-1 font-semibold text-purple-700">🥶 Tired-out skin</div>
            <img src={TopImage} alt='top-image' className="h-[30px] w-[15px]"/>
            <div className="font-medium">Anua</div>
            <div className="text-[11px]">Rice Toner + Ceramide Milky</div>
          </div>

          {/* Middle card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130px] bg-[#d5e6d8] rotate-[5deg] rounded-xl shadow-md p-2 text-left text-xs z-10">
            <div className="mb-1 font-semibold text-yellow-800">🧬 Cosmeceutical-tested</div>
            <img src={OneBelowImage}  alt='one-step-image' className="h-[80px] w-[45px]"/>
            <div className="font-medium">Anua</div>
            <div className="text-[11px]">Heartleaf Succinic Moisture Cleansing Foam</div>
          </div>

          {/* Right card */}
          <div className="absolute top-6 right-0 w-[120px] rotate-[10deg] bg-[#fcdde6] rounded-xl shadow-md p-2 text-left text-xs">
            <div className="mb-1 font-semibold text-pink-700">💗 Meltskin</div>
            <img src={twoBelowImage} alt='two-step-image' className="h-[30px] w-[15px]"/>
            <div className="font-medium">PDRN Pink Peptide Serum</div>
            <div className="text-[11px]">30ml</div>
          </div>
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
      <div className="text-[1.1rem] w-full text-gray-800 underline flex items-center justify-center gap-1 w-fit mt-[40px] mb-[40px]">
        <span role="img" aria-label="camera">📸</span>
        <span>Share Your Oval Type</span>
      </div>
    </div>
  )
}

export default ResultPage