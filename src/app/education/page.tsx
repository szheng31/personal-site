import VinylImage from "../components/VinylImage";
import bridgingseas from "../imgs/bridgingseas.png"
import vanderbilt from "../imgs/Dimensional V.png"
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function Education() {
    

    return (
        <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 pt-3 bg-gradient-to-l from-[#BDA567] to-[#FFFDD0]  min-h-screen w-full">
            <div>
                
                <p className="animate-slide-in sm:text-9xl text-8xl">Education</p>
                <Timeline sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                <TimelineConnector className="bg-black" />
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    Stuyvesant High School
                                </Typography>
                                <Typography className="font-[JetBrainsMono]">
                                    Bridging Seas IT Director
                                    </Typography>
                                    <Typography className="font-[JetBrainsMono]">
                                    Intro to CS TA
                                    </Typography>
                                    <Typography className="font-[JetBrainsMono]">
                                    CS Dojo Tutor
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                <TimelineConnector className="bg-black" />
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    Columbia Pre-College
                                </Typography>
                                <Typography className="font-[JetBrainsMono]">
                                    MATLAB Programming and Mathematical Modeling
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                <TimelineConnector className="bg-black" />
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    theCoderSchool
                                </Typography>
                                <Typography className="font-[JetBrainsMono]">
                                    Code Coach
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                <TimelineConnector className="bg-black "  />
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    Chyron
                                </Typography>
                                <Typography className="font-[JetBrainsMono] ">
                                    Consulting Intern
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                <TimelineConnector className="bg-black" />
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    Vanderbilt University
                                </Typography>
                                <Typography className="font-[JetBrainsMono]">
                                    Computer Science and Applied Math Major
                                    </Typography>
                                    <Typography className="font-[JetBrainsMono]">
                                    Electrical/Computer Engineering Minor
                                    </Typography>
                                    <Typography className="font-[JetBrainsMono]">
                                    VandyHacks Development Team Member
                                    </Typography>
                                    <Typography className="font-[JetBrainsMono]">
                                    Vanderbilt Ultimate Frisbee Recruitment Chair
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot className="bg-black" />
                                
                            </TimelineSeparator>

                            <TimelineContent className="font-[JetBrainsMono]">
                                <Typography className="font-[JetBrainsMono] sm:text-5xl text-3xl">
                                    REIDD
                                </Typography>
                                <Typography className="font-[JetBrainsMono]">
                                    Software Engineering Intern
                                    </Typography>
                            </TimelineContent>

                        </TimelineItem>
                        
                        
                    </Timeline>
                
                </div>
                
            
            
            

            <div  className="flex justify-items-center animate-top-down">
                <VinylImage imageSrc={vanderbilt.src} link="/" spin={true} />
            </div>
            
        </div>



    );
}

