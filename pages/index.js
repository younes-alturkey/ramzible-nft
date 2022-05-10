import { useEffect, useState, useRef } from 'react'
import Experience from 'src/three/Experience/Experience'
import { ImQrcode } from 'react-icons/im'
import { SiGhostery } from 'react-icons/si'
import { GiHand } from 'react-icons/gi'

export default function Home() {
    const [experience, setExperience] = useState(null)
    const [animation, setAnimation] = useState('idle')
    const [mode, setMode] = useState('default')
    const cardRef = useRef(null)
    const nftImg = 'images/jeddah-season-banner.png'
    const qrImg = 'images/random-qr.png'

    const changeImg = img => {
        cardRef.current.style.backgroundImage = `url('${img}')`
    }

    useEffect(() => {
        changeImg(nftImg)
        setExperience(new Experience(document.querySelector('canvas.webgl')))
        console.log('rendered')
    }, [])

    return (
        <div className="h-screen w-screen flex justify-center items-center gap-4 relative">
            <div
                className="card relative bg-darkish p-3 z-10 bg-opacity-0"
                ref={cardRef}
            >
                <div className="absolute bottom-4 right-4 text-white flex flex-row-reverse justify-center items-center gap-4">
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 ${
                            mode == 'qrCode' && ' text-red-500'
                        }`}
                        onClick={() => {
                            if (mode !== 'qrCode') {
                                setMode('qrCode')
                                changeImg(qrImg)
                            } else {
                                setMode('default')
                                changeImg(nftImg)
                            }
                        }}
                    >
                        <ImQrcode size={24} />
                    </div>
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 ${
                            mode == 'soul' && ' text-red-500'
                        }`}
                        onClick={() => {
                            if (mode !== 'soul') {
                                setMode('soul')
                                changeImg('')
                            } else {
                                setMode('default')
                                changeImg(nftImg)
                            }
                        }}
                    >
                        <SiGhostery size={24} />
                    </div>
                </div>
                <div
                    className={`absolute bottom-20 right-4 p-3 rounded-full cursor-pointer bg-darkish text-white hover:bg-opacity-70 transition-colors duration-200 ${
                        mode !== 'soul' && 'hidden'
                    }`}
                    onClick={() => {
                        experience.world.fox.animation.play(animation)
                        animation === 'idle'
                            ? setAnimation('running')
                            : setAnimation('idle')
                    }}
                >
                    <GiHand size={28} />
                </div>
                <div className="absolute bottom-4 left-4 text-white flex flex-row-reverse justify-center items-center gap-4 select-none">
                    <div className="bg-red-600 text-white p-3 rounded-full text-xl">
                        JED
                    </div>
                </div>
                <div className="absolute top-10 right-0 bg-red-500 text-white py-3 px-6 shadow text-xl select-none">
                    <p>2022</p>
                </div>
            </div>
            <canvas className="webgl absolute z-0"></canvas>
        </div>
    )
}
