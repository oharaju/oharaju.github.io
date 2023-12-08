import styled from "styled-components";
import colors from "@/tokens/colors";

export const ButtonStyles = styled.button`
  border-color: ${colors.secondary};
  background-color: transparent;
  padding: 1rem 2rem;
  border: 1px solid;
  color: ${colors.secondary};
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.3px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.relax};
  }

  &:focus {
    outline: 2px dashed ${colors.secondary};
    outline-offset: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`