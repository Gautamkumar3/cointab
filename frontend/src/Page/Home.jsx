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
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const toast = useToast();

  // ######## function for toast ###########

  function handleToast(title, description, status) {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  }

  // ############# Fetch user ####################

  const handleFetchUser = async () => {
    if (loading) {
      return handleToast(
        "error",
        "Users data fetching is in progress please wait for some time",
        "error"
      );
    } else {
      setLoading(true);
      await axios
        .post("https://cointab-api.onrender.com/user")
        .then((res) => {
          setLoading(false);
          return handleToast(
            "success",
            "Users data fetched successfully",
            "success"
          );
        })
        .catch((er) => {
          setError(true);
        });
    }
  };

  // ############# Delete all users #######################

  const handleDelete = async () => {
    console.log(deleteLoading);
    if (deleteLoading) {
      return handleToast(
        "error",
        "Users is still deleting from database please wait for some time",
        "error"
      );
    } else {
      setDeleteLoading(true);
      setTimeout(() => {
        axios
          .delete("https://cointab-api.onrender.com/user")
          .then((res) => {
            setDeleteLoading(false);
            return handleToast(
              "success",
              "Users deleted successfully",
              "success"
            );
          })
          .catch((er) => {
            setError(true);
          });
      }, 2000);
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
      {deleteLoading ? (
        <Text color={"red"} fontSize="25px">
          Data deleting....
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
            Fetch Users
          </Button>
          <Button
            onClick={handleDelete}
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
            Delete Users
          </Button>
          <Link to="user_details">
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
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Home;
