import { Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ total, page, setPage }) => {
  const pages = new Array(total).fill(0).map((el, i) => (
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

  return (
    <>
      <Button
        colorScheme={"whatsapp"}
        m={1}
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </Button>
      {pages}
      <Button
        colorScheme={"whatsapp"}
        m={1}
        isDisabled={page === total}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </>
  );
};

export default Pagination;
