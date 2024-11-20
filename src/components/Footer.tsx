import {Box, Flex} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box backgroundColor="#18181b" data-testid="footer">
      <footer >
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Alfonso Gonzalez • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
