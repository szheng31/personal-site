"use client"
import React, { useState } from 'react';
import { useTransitionRouter } from 'next-view-transitions'



function VinylImage({ imageSrc, link, spin }: { imageSrc: string, link: string, spin: boolean }) {
    const router = useTransitionRouter();
    const [clicked, setClicked] = useState(false);


    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {


        setClicked(true);

        if (spin) {
            router.push(link);
        } else {
            setTimeout(() => {
                router.push(link);
            }, 1500); // Match the animation duration
        }


    };

    return (
        <div className="overflow-hidden grid justify-center place-items-center space-y-5">
            <div className={`flex justify-center ${spin ? 'animate-spin-slow' : ''}`}>
                <div className={`cursor-pointer  place-self-center relative aspect-square w-3/5 ${(clicked && !spin) ? 'animate-slide-down' : ''} transition-transform duration-1000 z-0`}>
                    <img onClick={handleClick} src={imageSrc} alt="Vinyl Image" className="w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-gray-800 ring-inset" />
                    <div className="absolute top-1/2 left-1/2 w-1/6 h-1/6 bg-white rounded-full shadow-inner transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>

            <div className='pt-10'>

            </div>
            <hr className={`border-black border-t-4 rounded w-2/3 ${(clicked && !spin) ? 'show animate-fade-in' : 'hidden pt-5'} z-10`}></hr>


        </div>


    );
}

export default VinylImage;