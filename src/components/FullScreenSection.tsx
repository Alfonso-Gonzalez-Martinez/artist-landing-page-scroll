import { VStack, StackProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends StackProps {
  isDarkBackground: boolean;
  children: React.ReactNode;
}


const FullScreenSection: React.FC<FullScreenSectionProps> = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      data-testid="full-screen-section"
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
