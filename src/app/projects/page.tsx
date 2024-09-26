import VinylImage from "../components/VinylImage";
import witness from "../imgs/judge-dashboard.gif"
import bridgingseas from "../imgs/bridgingseas.png"
import site from "../imgs/bridgingsite.png"

export default function Projects() {
    

    return (
        <div className="grid grid-cols-3 pt-3 bg-gradient-to-l from-[#E09C89] to-[#7be5e5] min-h-screen w-full">
            <div className="col-span-2">
                <p className="animate-slide-in sm:text-9xl text-8xl">Projects</p>
                <div className="ml-3">
                <p className="py-4 text-4xl ">Witness</p>
                <a href="https://github.com/VandyHacks/witness" >
                    <img className="w-[700px] h-[400px]" src={witness.src}></img>
                </a>
                
                <p className="pt-4">- As a part of VandyHacks, helped redesign parts of the Judging Dashboard, making the design more intuitive.
                </p>
                <p>- Designed new "Analytics" tab, accumulating data about hackers for easy planning.
                </p>
                <div className="h-6">

                </div>
                <p className="py-5 text-4xl">BridgingSeas</p>
                <a href="https://github.com/BridgingSeas/bridgingseasweb">
                    <img className="w-[700px] h-[400px]" src={site.src}></img>
                </a>
                
                <p className="pt-4">-Built the BridgingSeas website to help advertise the club to future sponsors.</p>
                <p className="pb-5">-Utilized SvelteKit to create components used throughout the website for future additions.</p>
                </div>
                
            </div>
            
            
            <div  className="flex justify-items-center animate-top-down">
                <VinylImage imageSrc={bridgingseas.src} link="/" spin={true} />
            </div>
            
        </div>



    );
}

