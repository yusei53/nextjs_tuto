"use client";

import { Box, Image, Spacer, Input } from "@chakra-ui/react";
import { css } from "@emotion/react";

export function Main() {
  return (
    <>
      <Box
        css={css`
          height: 87vh;
          background-color: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Input
          css={css`
            width: 40%;
            height: 75%;
            background-color: #fff;
            margin-right: 3%;
            border-radius: 7px;
            border: 1px solid #000;
          `}
        ></Input>
        <Box
          css={css`
            width: 40%;
            height: 75%;
            background-color: #fff;
            margin-left: 3%;
            border-radius: 7px;
            border: 1px solid #000;
          `}
        ></Box>
      </Box>
    </>
  );
}
