"use client";

import { Box, Image, Spacer } from "@chakra-ui/react";
import { css } from "@emotion/react";

export function Header() {
  return (
    <Box
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Image
        src="./icon.png"
        css={css`
          width: 105px;
        `}
      ></Image>
      <Box
        css={css`
          color: #4fcf8f;
          font-size: 48px;
          font-weight: bold;
        `}
      >
        Liscript
      </Box>
      <Spacer />
      <Image
        src="./menu.png"
        css={css`
          width: 6%;
          margin-right: 2%;
        `}
      ></Image>
    </Box>
  );
}
