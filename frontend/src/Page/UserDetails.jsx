import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Spinner,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import UserTable from "../Component/UserTable";
import Pagination from "../Component/Pagination";
import { Link } from "react-router-dom";

const getUser = async (page, limit, q = "") => {
  console.log(q);
  let res = await axios.get(
    `https://cointab-api.onrender.com/user?page=${page}&limit=${limit}&q=${q}`
  );
  return res.data;
};

const UserDetails = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleCountry = (e) => {
    setQuery(e.target.value);
    getUser(page, limit, e.target.value).then((res) => {
      setData(res.data);
      setCount(res.users_count);
      setLoading(false);
    });
  };

  const handleFilter = (value) => {
    setQuery(value);
    getUser(page, limit, value).then((res) => {
      console.log(res);
      setData(res.data);
      setCount(res.users_count);
      setLoading(false);
    });
  };

  const handleReset = () => {
    setLoading(true);
    getUser(page, limit).then((res) => {
      setData(res.data);
      setCount(res.users_count);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getUser(page, limit, query).then((res) => {
      setData(res.data);
      setCount(res.users_count);
      setLoading(false);
    });
  }, [page]);

  return (
    <>
      <Flex w="95vw">
        <Box width={"16%"}>
          <Heading color="whatsapp.500" fontSize={"25px"} my={5}>
            Total User : {count}
          </Heading>
          <Heading my={5}>Filter</Heading>
          <Button
            colorScheme={"blue"}
            w="200px"
            my={1}
            onClick={() => handleFilter("male")}
          >
            Male
          </Button>
          <Button
            colorScheme={"blue"}
            w="200px"
            my={1}
            onClick={() => handleFilter("female")}
          >
            Female
          </Button>
          <Button
            colorScheme={"blue"}
            w="200px"
            my={1}
            onClick={() => handleFilter("lessthanthirty")}
          >
            Age &lt; 30
          </Button>
          <Button
            colorScheme={"blue"}
            w="200px"
            my={1}
            onClick={() => handleFilter("greterthanequaltothirty")}
          >
            Age &ge; 30{" "}
          </Button>
          <Select
            ml={2}
            w="200px"
            my={1}
            bg="#3182CE"
            color={"gray.300"}
            placeholder="Select your country"
            onChange={handleCountry}
          >
            <option value="India">India</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Iran">Iran</option>
          </Select>
          <Button colorScheme={"blue"} w="200px" my={1} onClick={handleReset}>
            Reset
          </Button>
          <Link to={"/"}>
            <Button colorScheme={"whatsapp"} w="200px" my={5}>
              Go to home page
            </Button>
          </Link>
        </Box>
        {data.length == 0 ? (
          <Heading textAlign={"center"} w="80vw" mt={"10%"}>
            No user found
          </Heading>
        ) : (
          <Box>
            <TableContainer w="fit-content">
              <Table variant="striped">
                <Thead background="tomato" h="12vh">
                  <Tr>
                    <Th fontSize={"20px"} color="#fff">
                      Profile
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Name
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Email
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Phone
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Gender
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Age
                    </Th>
                    <Th fontSize={"20px"} color="#fff">
                      Country
                    </Th>
                  </Tr>
                </Thead>
                {loading ? (
                  <Box ml={"150%"} mt="50%">
                    <Spinner
                      thickness="10px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      width={"200px"}
                      h="200px"
                    />
                  </Box>
                ) : (
                  <Tbody>
                    <UserTable data={data} />
                  </Tbody>
                )}
              </Table>
            </TableContainer>
          </Box>
        )}
      </Flex>
      {!loading ? (
        <Flex flexWrap={"wrap"} justify="center" w="60%" m="auto" my={5}>
          <Pagination
            total={Math.ceil(count / limit)}
            page={page}
            setPage={setPage}
          />
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};

export default UserDetails;
