import { useEffect, useState, useRef } from 'react'
import Experience from 'src/three/Experience/Experience'
import { ImQrcode } from 'react-icons/im'
import { SiGhostery } from 'react-icons/si'
import { GiHand } from 'react-icons/gi'

export default function Home() {
    const [experience, setExperience] = useState(null)
    const [rotating, setRotating] = useState(false)
    const [mode, setMode] = useState('default')
    const nftImg = 'images/jeddah-season-banner.png'
    const qrImg = 'images/random-qr.png'

    useEffect(() => {
        setExperience(new Experience(document.querySelector('canvas.webgl')))
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center items-center gap-4 relative">
            <div className="relative p-3 select-none">
                <img
                    src={nftImg}
                    className={`rounded-3xl ${mode !== 'default' && 'hidden'}`}
                    draggable={false}
                />
                <img
                    src={qrImg}
                    className={`rounded-3xl ${mode !== 'qrCode' && 'hidden'}`}
                    draggable={false}
                />
                <canvas
                    className={`webgl z-10 rounded-3xl ${
                        mode !== 'soul' && 'hidden'
                    }`}
                ></canvas>
                <div className="absolute bottom-8 right-8 text-white flex flex-row-reverse justify-center items-center gap-4">
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 ${
                            mode == 'qrCode' && ' text-red-500'
                        }`}
                        onClick={() => {
                            mode === 'qrCode'
                                ? setMode('default')
                                : setMode('qrCode')
                        }}
                    >
                        <ImQrcode size={24} />
                    </div>
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 ${
                            mode == 'soul' && 'text-red-500'
                        }`}
                        onClick={() => {
                            mode === 'soul'
                                ? setMode('default')
                                : setMode('soul')
                        }}
                    >
                        <SiGhostery size={24} />
                    </div>
                </div>
                <div
                    className={`absolute bottom-24 right-8 p-3 rounded-full cursor-pointer bg-darkish text-white hover:bg-opacity-70 transition-colors duration-200 ${
                        mode !== 'soul' && 'hidden'
                    } ${rotating && 'text-red-500'}`}
                    onClick={() => {
                        if (!rotating) {
                            setRotating(true)
                            experience.world.shiranui.rotate()
                            setTimeout(() => setRotating(false), 990)
                        }
                    }}
                >
                    <GiHand size={28} />
                </div>
                <div className="absolute bottom-8 left-8 text-white flex flex-row-reverse justify-center items-center gap-4 select-none">
                    <div className="bg-red-600 text-white p-3 rounded-full text-xl">
                        JED
                    </div>
                </div>
                <div className="absolute top-10 right-3 bg-red-500 text-white py-3 px-6 shadow text-xl select-none rounded-sm">
                    <p>2022</p>
                </div>
            </div>
        </div>
    )
}
