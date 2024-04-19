import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const TestHello = () => {
 const startlisten=()=> SpeechRecognition.startListening({ continuous: true,language:'en-IN' })
  const { transcript, browserSupportsSpeechRecognition,resetTranscript} = useSpeechRecognition()
  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>
      <div className='textarea'>
        {transcript}
      </div>
      <div>
   <button onClick={resetTranscript}>Reset</button>
   <button onClick={startlisten}>Start</button>
   <button onClick={SpeechRecognition.stopListening}>Stop</button>
   </div>
    </div>
  )
}

export default TestHello

