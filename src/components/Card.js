import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, website }) => {

  return (

    <VStack spacing={10} align='stretch'>
        <div>
              <Image
              borderRadius="lg"
              boxShadow='dark-lg'
              src={imageSrc} />
        </div>
        <div>
              <Heading marginBottom="10px">{title}</Heading>
              <Text>{description}</Text>
              <Text marginTop="5px"><a href={website} target="blank">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a></Text>
        </div>
    </VStack>

  );
};

export default Card;
