import styled from "styled-components"

export const ListPostStyles = styled.div`
  position: relative;
  display: block;
  width: 100%;

  .post {
    display: block;
  }

  img {
    width: 100%;
  }

  h3 {
    margin-bottom: 10px;
  }

  .post-categories {
    display: inline-flex;
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .post-content {
    padding: 0 10px;
  }
`
