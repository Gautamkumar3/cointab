import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { color } from "framer-motion";
import React, { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toast = useToast();

  const handleFetchUser = () => {
    if (loading) {
      toast({
        title: "error",
        description: "Data fetching is in process please wait for some time",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      setLoading(true);
      axios
        .post("http://localhost:8000/user")
        .then((res) => {
          toast({
            title: "success",
            description: "Data fetched successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setLoading(false);
        })
        .catch((er) => {
          setError(true);
        });
    }
  };

  return (
    <Box h="100vh">
      <Heading my={"5%"}>Home</Heading>
      {loading ? (
        <Text color={"green"} fontSize="25px">
          Data Fetching....
        </Text>
      ) : (
        ""
      )}
      <Flex justify={"center"} align="center" h={"50vh"}>
        <HStack spacing={5}>
          <Button
            colorScheme={"whatsapp"}
            p={8}
            fontSize="25px"
            border="2px"
            onClick={handleFetchUser}
            _hover={{
              background: "#fff",
              border: "2px solid green",
              color: "green",
            }}
          >
            Fetch User
          </Button>
          <Button
            colorScheme={"whatsapp"}
            p={8}
            fontSize="25px"
            border="2px"
            _hover={{
              background: "#fff",
              border: "2px solid green",
              color: "green",
            }}
          >
            Delete User
          </Button>
          <Button
            p={8}
            fontSize="25px"
            colorScheme={"whatsapp"}
            border="2px"
            _hover={{
              background: "#fff",
              border: "2px solid green",
              color: "green",
            }}
          >
            User Details
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Home;
