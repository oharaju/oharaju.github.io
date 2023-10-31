import styled from "styled-components";
import colors from "@/tokens/colors";

export const BoxLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const LinkIcon = styled.a`
  background-color: ${colors.white};
  color: ${colors.dark};
  opacity: 0.6;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`