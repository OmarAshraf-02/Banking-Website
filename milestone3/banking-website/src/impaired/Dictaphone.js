import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';



const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    const navigate = useNavigate();
  
    useEffect(() => {
      if (transcript.toLowerCase().includes('go to')) {
        const page = extractPageFromTranscript(transcript);
        navigateToPage(page);
      }
    }, [transcript]);
  
    const extractPageFromTranscript = (transcript) => {
      // Extract the page name from the transcript
      // You can implement your own logic based on the expected speech command format
      // For example, if the command is "Go to page name", you can extract the page name using regex or string manipulation
      const command = transcript.toLowerCase();
      const page = command.replace('go to', '').trim();
      return page;
    };
  
    const navigateToPage = (page) => {
      // Navigate to the specified page using navigate()
      navigate(`/${page}`);
      resetTranscript();
    };
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    );
  };
  
 export default Dictaphone