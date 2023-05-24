import styled from "styled-components"

interface CategoryTagStylesProps {
  background: string
  text: string
}

export const CategoryTagStyles = styled.span<CategoryTagStylesProps>`
  display: inline-block;
  position: relative;
  color: ${(props) => props.text};
  line-height: 25px;
  padding: 0 14px;
  border-radius: 25px;
  white-space: nowrap;
  overflow: hidden;

  span {
    position: relative;
    z-index: 1;
  }

  &:before {
    transition: 0.5s ease all;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.background};
  }

  &:hover {
    &:before {
      background: radial-gradient(
        circle,
        ${(props) => props.background} 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`
