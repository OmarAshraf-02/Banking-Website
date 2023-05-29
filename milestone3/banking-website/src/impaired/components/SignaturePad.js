import React, { useRef } from 'react';
// import SignatureCanvas from 'react-signature-canvas';
import { Button } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';
import { useSpeechSynthesis } from 'react-speech-kit';

const SignaturePad = () => {
    const { speak , cancel } = useSpeechSynthesis();
    const speakText = (text) => {
      speak({ text });
    };
    const signatureRef = useRef();

    const handleClear = () => {
        signatureRef.current.clear();
    };

    const handleSave = () => {
        const signatureData = signatureRef.current.toDataURL();
        // Do something with the signature data, e.g., save it to state or send it to the server
        console.log(signatureData);
    };

    return (
        <div
        onMouseLeave={() => cancel()} 
        onMouseEnter={() => {speakText('Please sign here with your bank signature')}}
        >
            <SignatureCanvas
                ref={signatureRef}
                canvasProps={{
                    width: 400,
                    height: 200,
                    style: { border: '1px solid black' }
                }}
            />
            <div>
                <Button
                onMouseLeave={() => cancel()} 
                onMouseEnter={() => {speakText('Clear button , Please press if you want to repeat your signature')}} 
                variant="contained" onClick={handleClear} style={{ marginRight: 8 }}>
                    Clear
                </Button>
                {/* <Button variant="contained" onClick={handleSave} color="primary">
                    Save
                </Button> */}
            </div>
        </div>
    );
};

export default SignaturePad