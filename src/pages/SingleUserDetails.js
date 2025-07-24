import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleUserDetails = () => {
    const { user_id } = useParams()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState([])

    const getSingleUser = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/oval_skin/${user_id}`);
            console.log(data)
            if(data?.success){
                setUserData(data?.data)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getSingleUser()

    },[])

    console.log(userData)
    return (
        <div>
            <ResultCard data={userData}/>
        </div>
    )
}

export default SingleUserDetails;

const ResultCard = ({ data }) => {
  const {
    unique_id,
    device_type,
    browser,
    country,
    region,
    city,
    result_type,
    is_quiz_completed,
    avg_time_per_qst,
    avg_total_time_per_completion,
    createdAt,
    timezone,
  } = data;

  const answers = Object.entries(data)
    .filter(([key, val]) => key.startsWith("answer_") && val && Object.keys(val).length > 0)
    .map(([key, val], index) => (
      <div
        key={key}
        className="border border-purple-200 dark:border-purple-500 rounded-xl p-4 shadow transition-all hover:shadow-md bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-700"
      >
        <p className="font-bold text-sm text-purple-700 dark:text-purple-300 mb-1">
          Question {index + 1}
        </p>
        <p className="text-gray-800 dark:text-gray-200">{val.option}</p>
      </div>
    ));

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 mb-2 sm:mb-0">
          🧴 Skin Type Quiz Result
        </h2>
        <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
          ID: #{unique_id}
        </span>
      </div>

      {/* Device Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-800 dark:text-gray-200">
        <div><strong>📱 Device:</strong> {device_type}</div>
        <div><strong>🌐 Browser:</strong> {browser}</div>
        <div><strong>📍 Location:</strong> {city}, {region}, {country}</div>
        <div><strong>🕒 Timezone:</strong> {timezone}</div>
        <div><strong>✅ Completed:</strong> {is_quiz_completed ? "Yes" : "No"}</div>
        <div><strong>📅 Submitted:</strong> {new Date(createdAt).toLocaleString()}</div>
      </div>

      {/* Result Box */}
      <div className="bg-purple-100 dark:bg-purple-900/20 p-5 rounded-2xl shadow-inner border border-purple-300 dark:border-purple-600">
        <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300">
          🌟 Your Skin Type Result: <span className="underline">{result_type}</span>
        </h3>
        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
          🕐 Avg Time Per Question: <strong>{avg_time_per_qst}s</strong><br />
          ⏱️ Total Completion Time: <strong>{avg_total_time_per_completion}s</strong>
        </p>
      </div>

      {/* Answers Section */}
      <div>
        <h4 className="text-md font-bold text-gray-800 dark:text-white mb-3">
          📝 Your Answers
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {answers}
        </div>
      </div>

      {/* Share Button */}
    
    </div>
  );
};


