import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/ken-alfonso.jpg";
import photo2 from "../images/keyboard.jpg";
import photo3 from "../images/namasduo.jpg";
import photo4 from "../images/orchestra.jpg";

interface Projects {
  title: string;
  description: string;
  imageSrc: string;
  website: string;
}

const projects: Projects[] = [
  {
    title: "In Honour of Horák",
    description:
      " In this debut album, we have included only pieces that HoráK loved to play or that were written for him. Works by Sluka, Hindemith, Martinů and more.",
      imageSrc: photo1,
      website: "https://muse-press.com/en/product/mpcd0001/",
  },
  {
    title: "Official Piano Website",
    description:
      "Find all the upcoming concerts on my agenda or take a look at the last recordings and videos on my gallery. Feel free to contact me for any special request!",
      imageSrc: photo2,
      website: "https://alfonsogonzalezpiano.com/",
  },
  {
    title: "NamasDuo - Piano Duo",
    description:
      "A piano duo that offers a unique concert experience, emphasizing communication with the audience and between musicians. Discover our story on our website.",
      imageSrc: photo3,
      website: "https://namasduopiano.com/",
  },
  {
    title: "Orchestra Performer",
    description:
      "Take a look at some of my performances with the RTVE or JONDE among others!",
      imageSrc: photo4,
      website: "https://alfonsogonzalezpiano.com/",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" fontSize="6xl" margin="20px" textShadow='1px 1px #000000'>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, minmax(0, 1fr))"]}
        gridGap={16}
        alignItems= {["flex-start", "flex-start", "flex-start", "center", "center", "center"]}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            website={project.website}
            data-testid="card"
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
