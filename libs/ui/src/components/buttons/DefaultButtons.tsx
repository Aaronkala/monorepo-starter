import styled from "styled-components"

export const Button = styled.button`
  border: 0;
  padding: 1.2em 2.4em;
  background: ${props => props.theme.colors.coolGray[80]};
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.coolGray[70]};
  }

  &:active {
    opacity: 0.8;
  }
`
