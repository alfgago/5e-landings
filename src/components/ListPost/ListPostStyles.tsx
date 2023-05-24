import styled from "styled-components"

export const ListPostStyles = styled.div`
  position: relative;
  display: block;
  width: 100%;

  .post {
    transition: 0.5s ease all;
    display: block;
    &:hover {
      h3 {
        text-decoration: underline;
      }
    }
  }

  img {
    width: 100%;
  }

  h3 {
    margin-bottom: 10px;
  }

  .post-categories {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .post-content {
    text-align: center;
    padding: 0 10px;
  }

  .post-excerpt {
    p {
      margin: 0;
    }
  }
`
