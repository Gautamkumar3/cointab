import { Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ total, page, setPage }) => {
  const pages = new Array(total || 10).fill(0).map((el, i) => (
    <Button
      key={i + 1}
      isDisabled={page === i + 1}
      colorScheme={"whatsapp"}
      m={1}
      onClick={() => setPage(i + 1)}
    >
      {i + 1}
    </Button>
  ));

  return pages;
};

export default Pagination;
