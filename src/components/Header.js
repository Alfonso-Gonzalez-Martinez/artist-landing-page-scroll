import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Pi4n0",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alfonso-gonzalez-martinez/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];



const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const previousScrollPosition = useRef(0);
  const [isHidden, setIsHidden] = useState(false)
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    if(currentScrollPosition > previousScrollPosition.current){
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    previousScrollPosition.current = currentScrollPosition;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${isHidden ? "-200px" : "0px"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */
              socials.map((element, index) => (
                <a key={index} href={element.url} style={{marginRight: "13px"}}>
                  <FontAwesomeIcon icon={element.icon} size="2x" />
                </a>
                ))
            }
          </nav>
          <nav>
            <HStack spacing={8} textAlign="center">
              {/* Add links to Projects and Contact me section */}
                <a href="#contactme-section" onClick={handleClick("contactme")}>Contact me</a>
                <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
