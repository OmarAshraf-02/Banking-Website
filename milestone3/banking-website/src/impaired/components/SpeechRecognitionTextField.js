import { TextField } from "@mui/material";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from "react";
function SpeechRecognitionTextField(probs){
    const [field , setField] = useState('');
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

    return (<TextField 
        onClick={() => {
          SpeechRecognition.startListening();
        }}
        onBlur={() => {
            setField(transcript);
            resetTranscript();
            SpeechRecognition.stopListening();
        }}
        value={field}
        {...probs}
    />);
}

export default SpeechRecognitionTextField;