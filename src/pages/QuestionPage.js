import React, { useState } from 'react'
import { ALL_QUESTION_LIST } from '../Constant.Others';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate()

  const handleOptionSelect = (optionText) => {
    setAnswers({ ...answers, [step]: optionText });
    setTimeout(() => {
      if (step < ALL_QUESTION_LIST.length - 1) {
        setStep(step + 1);
      } else {
   navigate("/result-page")
      }
    }, 300); // Delay for smooth UX
  };

  const handleBackButton = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate(-1)
    }
  }

  const currentQ = ALL_QUESTION_LIST[step];
  return (
    <div className="flex flex-col items-center bg-[#fdfbf8] p-4 h-[100%] font-roboto">
      <div className='flex justify-between w-[100%] text-[20px] mt-2 mb-5'>

        <MdKeyboardBackspace size={30} onClick={handleBackButton} />
        <div>Skin analysis</div>
        <div className='text-[18px]'>{step + 1}/{ALL_QUESTION_LIST.length}</div>

      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6 mt-4">
        <div
          className="h-full bg-[#9C836B] rounded-full transition-all duration-300"
          style={{
            width: `${((step + 1) / ALL_QUESTION_LIST.length) * 100}%`,
          }}
        ></div>
      </div>

      <div className="w-[96%] max-w-md mx-auto h-[60vh] flex flex-col items-center relative">
        <div className="relative w-full z-20">

          <div className="w-full bg-white p-6 rounded-xl shadow-lg relative z-30">
            <p className="mb-6 text-gray-500">Select answer</p>
            <h2 className="text-xl font-semibold mb-4 h-[7vh]">{currentQ.question}</h2>

            <div className="flex flex-col gap-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt)}
                  className="flex items-center justify-start gap-2 bg-[#f9f9f9] hover:bg-[#eee] px-4 py-3 rounded-lg shadow text-left"
                >
                  <span className="text-xl">{opt.icon}</span>
                  <span className="text-gray-800">{opt.option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white h-[5vh] w-[92%] rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 top-full mt-[-27px] z-10"></div>
          <div className="bg-white h-[5vh] w-[88%] rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 top-full mt-[-15px] z-0"></div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage