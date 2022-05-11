import { useEffect, useState, useRef } from 'react'
import Experience from 'src/three/Experience/Experience'
import { ImQrcode } from 'react-icons/im'
import { SiGhostery } from 'react-icons/si'
import { GiHand } from 'react-icons/gi'
import { FaLink, FaInfoCircle } from 'react-icons/fa'
import { GiSwapBag } from 'react-icons/gi'
import { MdLocationOn, MdOutlineContentCopy } from 'react-icons/md'
import { FaWallet } from 'react-icons/fa'

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
                <div
                    className={`card overflow-y-auto p-8 pb-24 bg-white bg-opacity-10 rounded-xl text-white flex flex-col justify-start items-center gap-8 ${
                        mode !== 'metadata' && 'hidden'
                    }`}
                >
                    <div className="flex flex-col justify-center items-center gap-4 cursor-pointer relative">
                        <FaWallet size={48} className="text-red-500" />
                        <p className="hover:text-red-500">
                            Owner Address: 0xdec1...9842 (you){' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p className="hover:text-red-500">
                            Creator Address: 0xdec1...9842{' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p>May-11-2022 02:03:50 PM +UTC</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 cursor-pointer relative">
                        <FaWallet size={48} className="text-red-500" />
                        <p className="hover:text-red-500">
                            Owner Address: 0xdec1...9842 (you){' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p className="hover:text-red-500">
                            Creator Address: 0xdec1...9842{' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p>May-11-2022 02:03:50 PM +UTC</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 cursor-pointer relative">
                        <FaWallet size={48} className="text-red-500" />
                        <p className="hover:text-red-500">
                            Owner Address: 0xdec1...9842 (you){' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p className="hover:text-red-500">
                            Creator Address: 0xdec1...9842{' '}
                            <MdOutlineContentCopy
                                size={18}
                                className="inline"
                            />
                        </p>
                        <p>May-11-2022 02:03:50 PM +UTC</p>
                    </div>
                </div>
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
                <div className="absolute bottom-8 right-0 left-0 text-white flex flex-row-reverse justify-center items-center gap-4">
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
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200`}
                    >
                        <GiSwapBag size={24} />
                    </div>
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200`}
                    >
                        <MdLocationOn size={24} />
                    </div>
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 `}
                    >
                        <a
                            href="https://younes.ninja"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLink size={24} />
                        </a>
                    </div>
                    <div
                        className={`p-3 rounded-full cursor-pointer bg-darkish hover:bg-opacity-70 transition-colors duration-200 ${
                            mode === 'metadata' && 'text-red-500'
                        }`}
                        onClick={() => {
                            mode === 'metadata'
                                ? setMode('default')
                                : setMode('metadata')
                        }}
                    >
                        <FaInfoCircle size={24} />
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
                <div
                    className={`absolute top-10 left-8 text-white flex flex-row-reverse justify-center items-center gap-4 select-none ${
                        mode === 'metadata' && 'hidden'
                    }`}
                >
                    <div className="bg-red-600 text-white p-3 rounded-full text-xl">
                        JED
                    </div>
                </div>
                <div
                    className={`absolute top-10 right-3 bg-red-500 text-white py-3 px-6 shadow text-xl select-none rounded-sm ${
                        mode === 'metadata' && 'hidden'
                    }`}
                >
                    <p>2022</p>
                </div>
            </div>
        </div>
    )
}
