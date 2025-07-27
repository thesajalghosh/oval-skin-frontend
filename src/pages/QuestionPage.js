import React, { useRef, useState } from 'react'
import { ALL_QUESTION_LIST } from '../Constant.Others';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const QuestionPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate()
  const { user_id } = useParams()
  const [loading, setLoading] = useState(false)
  const startTimeRef = useRef(Date.now())



  function toRawAnswerFormatFromObject(cleanedAnswers, totalCount = null) {
    const result = [];

    const keys = Object.keys(cleanedAnswers);
    const count = totalCount || keys.length;

    for (let i = 0; i < count; i++) {
      const key = `answer_${i + 1}`;
      const value = cleanedAnswers[i] ? cleanedAnswers[i] : {};
      result.push({ [key]: value });
    }

    return result;
  }

  // const handleAnswerSubmit = async (temp_answer, totalTimeInMinutes) => {
  //   setLoading(true)
  //   const start = Date.now();
  //   const payload = {
  //     "answers": toRawAnswerFormatFromObject(temp_answer),
  //     "is_quiz_completed": true,
  //     "avg_total_time_per_completion": Number(totalTimeInMinutes),
  //     "avg_time_per_qst": Number((totalTimeInMinutes / ALL_QUESTION_LIST.length).toFixed(2)),

  //   }
  //   try {
  //     const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_API}/oval_skin/questioniar/${user_id}`, payload)

  //     console.log(data);
  //     if (data?.success) {
  //       navigate(`/result-page/${data?.unique_id}`)
  //     }

  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  // const elapsed = Date.now() - start;
  //      const minLoading = 12000; // 15 seconds in ms
  //      const remaining = minLoading - elapsed;
  //      if (remaining > 0) {
  //        setTimeout(() => setLoading(false), remaining);
  //      } else {
  //        setLoading(false);
  //      }
  //   }

  // }

  const handleAnswerSubmit = async (temp_answer, totalTimeInMinutes) => {
    setLoading(true);
    const start = Date.now();

    const payload = {
      answers: toRawAnswerFormatFromObject(temp_answer),
      is_quiz_completed: true,
      avg_total_time_per_completion: Number(totalTimeInMinutes),
      avg_time_per_qst: Number((totalTimeInMinutes / ALL_QUESTION_LIST.length).toFixed(2)),
    };

    let resultData = null;

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/oval_skin/questioniar/${user_id}`,
        payload
      );

      if (data?.success) {
        resultData = data;
      }
    } catch (error) {
      console.log(error);
    } finally {
      const elapsed = Date.now() - start;
      const minLoading = 6000; // 12 seconds
      const remaining = minLoading - elapsed;

      const finish = () => {
        setLoading(false);
        if (resultData?.success) {
          navigate(`/result-page/${resultData?.unique_id}`);
        }
      };

      if (remaining > 0) {
        setTimeout(finish, remaining);
      } else {
        finish();
      }
    }
  };



  const handleOptionSelect = (optionText) => {
    const { key, option, skin_type } = optionText
    // console.log("option", option)
    const temp_answer = { ...answers, [step]: "Skip" === option ? {} : { key, option, skin_type } }
    setAnswers(temp_answer);
    setTimeout(() => {
      if (step < ALL_QUESTION_LIST.length - 1) {
        setStep(step + 1);
      } else {
        const endTime = Date.now();
        const totalTimeInMinutes = ((endTime - startTimeRef.current) / 1000 / 60).toFixed(2);
        handleAnswerSubmit(temp_answer, totalTimeInMinutes)

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
    <>
      {loading && (
        <div className="h-screen flex flex-col justify-center items-center bg-[#FCFBF8] text-center font-noto">
          {/* Dots */}
          <div className="flex gap-[35px] mb-6">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>

          {/* Text */}
          <h2 className="font-semibold text-[24px] text-[#262522] mb-1 mx-[40px] font-noto">
            Analyzing your skin persona…
          </h2>
          <p className="text-sm text-[#262522] opacity-80 font-noto">
            Your Oval Type is almost ready
          </p>
        </div>
      )}
      {!loading && <div className="flex flex-col items-center bg-[#fdfbf8] p-4 h-[100%] font-noto">
        <div className='flex justify-between w-[100%] text-[20px] mt-2 mb-5'>

          <MdKeyboardBackspace size={20} onClick={handleBackButton} />
          <div className='text-[#434343] text-[14px] font-semibold font-noto'>Skin analysis</div>
          <div className='text-[#434343] text-[12px] font-semibold font-noto'>{step + 1}/{ALL_QUESTION_LIST.length}</div>

        </div>
        <div className="w-full h-[10px] bg-white rounded-full mb-6 mt-4">
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
              <h2 className="text-[24px] font-bold font-noto">{currentQ.question}</h2>

              <div className="flex flex-col gap-3 mt-[24px]">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[step]?.option === opt.option;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt)}
                      className={`flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-[16px] shadow text-[16px] text-gray-800
              ${isSelected ? '!bg-[#9c836b] !text-white' : 'border border-transparent'}`}
                    >
                      <span className="text-xl">{opt.icon}</span>
                      <span className="">{opt.option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white h-[5vh] w-[92%] rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 top-full mt-[-27px] z-10"></div>
            <div className="bg-white h-[5vh] w-[88%] rounded-xl shadow-lg absolute left-1/2 -translate-x-1/2 top-full mt-[-15px] z-0"></div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default QuestionPage