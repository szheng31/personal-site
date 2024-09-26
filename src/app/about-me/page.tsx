import VinylImage from "../components/VinylImage";
import bridgingseas from "../imgs/bridgingseas.png"
import stan from "../imgs/stan.jpg";
import stan2 from "../imgs/me.jpeg";



export default function AboutMe() {


    return (
        <div className="grid md:grid-cols-2 pt-3 bg-gradient-to-l from-orange-500 to-yellow-400 min-h-screen w-full">
            <div>
                <p className="animate-slide-in sm:text-9xl text-8xl">About Me</p>

                <div>
                
                <p className="sm:text-2xl text-[16px] m-2">
                    I'm currently a sophmore at Vanderbilt University studying 
                    Computer Science and Applied Mathematics, with a minor in Electrical/Computer Engineering. I've done a bit of everything, trying out web 
                    development, AI, and systems, but I'm interested more in the intersection
                    of Computer Engineering and Science, hoping to delve deeper into the low
                    level and nitty gritty parts of computing. In my free time, I love to collect
                    vinyls and play ultimate frisbee!
                </p>
                <a href="/StanleyZhengResume.pdf">
                    <p className="m-2 text-[16px] sm:text-2xl underline underline-offset-4">Resume</p>
                </a>
                
                </div>
            </div>




            <div className="flex justify-items-center animate-top-down">
                <VinylImage imageSrc={stan.src} link="/" spin={true} />
            </div>

        </div>



    );
}

