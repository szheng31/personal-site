"use client";

import VinylImage from "../components/VinylImage";
import vanderbilt from "../imgs/Dimensional V.png";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "JetBrainsMono",
      textTransform: "none",
    },
    h1: {
      fontSize: "1.875rem", // Base font size (text-3xl)
      "@media (min-width:640px)": {
        fontSize: "3rem", // Adjust font size to 5xl on screens >= 640px (sm)
      },
    },
  },
});

export default function Education() {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 pt-3 bg-gradient-to-l from-[#BDA567] to-[#FFFDD0] min-h-screen w-full">
      <div>
        <p className="animate-slide-in sm:text-9xl text-8xl">Background</p>

        <ThemeProvider theme={theme}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
                <TimelineConnector sx={{ backgroundColor: "black" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">Stuyvesant High School</Typography>
                <Typography>Bridging Seas IT Director</Typography>
                <Typography>Intro to CS TA</Typography>
                <Typography>CS Dojo Tutor</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
                <TimelineConnector sx={{ backgroundColor: "black" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">Columbia Pre-College</Typography>
                <Typography>
                  MATLAB Programming and Mathematical Modeling
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
                <TimelineConnector sx={{ backgroundColor: "black" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">theCoderSchool</Typography>
                <Typography>Code Coach</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
                <TimelineConnector sx={{ backgroundColor: "black" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">Chyron</Typography>
                <Typography>Consulting Intern</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
                <TimelineConnector sx={{ backgroundColor: "black" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">Vanderbilt University</Typography>
                <Typography>Computer Science and Applied Math Major</Typography>
                <Typography>Electrical/Computer Engineering Minor</Typography>
                <Typography>VandyHacks Development Team Member</Typography>
                <Typography>
                  Vanderbilt Ultimate Frisbee Recruitment Chair
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: "black", // Apply styles directly to TimelineDot
                    width: "16px",
                    height: "16px",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1">REIDD</Typography>
                <Typography>Software Engineering Intern</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ThemeProvider>
      </div>

      <div className="flex justify-items-center animate-top-down">
        <VinylImage imageSrc={vanderbilt.src} link="/" spin={true} />
      </div>
    </div>
  );
}
