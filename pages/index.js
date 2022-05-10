import { useEffect } from 'react'
import Experience from 'src/three/Experience/Experience'
import { ImQrcode } from 'react-icons/im'
import { SiGhostery } from 'react-icons/si'

export default function Home() {
    useEffect(() => {
        new Experience(document.querySelector('canvas.webgl'))
    })

    return (
        <div className="h-screen w-screen flex justify-center items-center gap-4">
            <div className="card relative bg-darkish p-3">
                <div className="absolute bottom-4 text-white flex justify-center items-center gap-4">
                    <div className="p-3 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-10">
                        <ImQrcode size={24} />
                    </div>
                    <div className="p-3 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-10">
                        <SiGhostery size={24} />
                    </div>
                </div>
            </div>
            <canvas className="webgl"></canvas>
        </div>
    )
}
