import React from "react";
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
} from "@chakra-ui/react";

const UserDetails = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead background="whatsapp.700" h="10vh" color="red">
          <Tr color="red">
            <Th>Profile</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Gender</Th>
            <Th>Age</Th>
            <Th>Location</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserDetails;
