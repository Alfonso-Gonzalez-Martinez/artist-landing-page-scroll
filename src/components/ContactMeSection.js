import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection.js";
import useSubmit from "../hooks/useSubmit.js";
import {useAlertContext} from "../context/alertContext.js";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const url = "www.google.com"


  const handleResponse = () => {
    onOpen(response.type, response.message);
  }

  useEffect(() => {if(response){
    handleResponse();
      if(response.type === "success"){
        formik.resetForm()}} },[response]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },

    onSubmit: async (values) => {
        try {
          await submit(url, values);
        }
       catch(error){
        console.log(error);
       }

    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      type: Yup.string().optional(),
      comment: Yup.string().min(25, "Must be at least 25 characters"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack  w={["300px", "350px", "500px", "600px","800px","1024px"]} p={[25, 25, 25, 32, 32, 32]} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" textShadow='1px 1px #000000' fontSize="6xl">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">

          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>

              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps("firstName")}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                {...formik.getFieldProps("email")}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type"
                  {...formik.getFieldProps("type")}>
                  <option  style={{ color: 'black' }} value="hireMe" >Freelance project proposal</option>
                  <option  style={{ color: 'black' }} value="openSource">Consultancy session</option>
                  <option  style={{ color: 'black' }}value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps("comment")}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" marginTop="10px">
                {isLoading ? "Loading..." : "Submit"}
              </Button>

            </VStack>
          </form>

        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
