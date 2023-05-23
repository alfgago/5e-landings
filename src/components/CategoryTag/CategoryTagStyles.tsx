import styled from "styled-components"

interface CategoryTagStylesProps {
  background: string
  text: string
}

export const CategoryTagStyles = styled.span<CategoryTagStylesProps>`
  display: inline-block;
  position: relative;
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  line-height: 25px;
  padding: 0 14px;
  border-radius: 25px;
  white-space: nowrap;
`
