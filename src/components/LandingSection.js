import React from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.js";
import avatar from './../images/portrait.jpg'

const greeting = "Hello, I am Alfonso!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
      <div>
        <Avatar
          name="Alfonso"
          src={avatar}
          size="2xl"
          boxShadow='dark-lg'
          marginBottom="30px"/>
      </div>
    <Heading as="h1" size="xs" textShadow='1px 1px #000000'>{greeting}</Heading>
    <Heading as="h2" size="lg" textShadow='1px 1px #000000'>{bio1}</Heading>
    <Heading as="h2" size="lg" textShadow='1px 1px #000000'>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
