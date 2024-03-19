import QRCode from 'react-qr-code'
import './style.css'
import { useState } from 'react'

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput('');
    }

    return (
        <div className='qr-code-generator'>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    id=""
                    value={input}
                    placeholder='Enter your value here' />
                <button
                    onClick={handleGenerateQrCode}
                    disabled={input && input.trim() !== '' ? false : true}>
                    Generate
                </button>
            </div>
            <div>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={250}
                    bgColor='#fff' />
            </div>
        </div>
    )
}

export default QRCodeGenerator