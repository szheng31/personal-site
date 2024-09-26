import Image from "next/image";
import InfoBox from "./components/InfoBox";
import vanderbilt from './imgs/Dimensional V.png';
import bridgingseas from './imgs/bridgingseas.png'
import stan from './imgs/stan.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function Home() {  

  return (
    <div className="pt-3">
      <div className="grid md:grid-cols-2">
        <div>
          <p className="animate-slide-in sm:text-9xl text-8xl">Stanley</p>
          <p className="animate-slide-in sm:text-9xl text-8xl">Zheng</p>
          <a href="https://www.linkedin.com/in/szheng-swe" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: "3rem", color: "inherit" }} />
          </a>

          {/* GitHub */}
          <a href="https://github.com/szheng31" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: "3rem", color: "inherit" }} />
          </a>

          {/* Email */}
          <a href="mailto:stanley.zheng00@gmail.com">
            <EmailIcon sx={{ fontSize: "3rem", color: "inherit" }} />
          </a>
          <p className="ml-2">Click on a CD to learn more!</p>
        </div>


      </div>

      <div className="h-20"></div>
      <div className="flex grid  lg:grid-cols-3 sm:grid-row-3 ">
        <InfoBox name="Background" num="01" image={vanderbilt.src} link="/background" />
        <InfoBox name="Projects" num="02" link="/projects" image={bridgingseas.src} />
        <InfoBox name="About Me" num="03" link="/about-me" image={stan.src} />
      </div>

    </div>

  );
}
