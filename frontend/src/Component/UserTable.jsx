import { Box, Image, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

const UserTable = ({ data }) => {
  function getName(obj) {
    let name = "";
    for (let key in obj) {
      name += obj[key] + " ";
    }
    return name;
  }

  return (
    <>
      {data.map((user) => (
        <Tr>
          <Td>
            <Image h={"60px"} src={user.picture.large} borderRadius="50%" />
          </Td>

          <Td>{getName(user.name)}</Td>
          <Td>{user?.email}</Td>
          <Td>{user?.phone}</Td>
          <Td>{user?.gender}</Td>
          <Td>{user?.dob?.age} yr</Td>
          <Td>{user?.location?.country} </Td>
        </Tr>
      ))}
    </>
  );
};

export default UserTable;
