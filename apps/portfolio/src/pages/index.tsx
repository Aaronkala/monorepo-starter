import React from "react"
import styled from "styled-components"

import { Button } from "@aaronhakala/ui"

const Homepage: React.FC = () => {
  return (
    <Wrapper>
      <Stack>
        <Button>Oh yeah</Button>
        <Button>Ooooh boy</Button>
        <Button>Cool boy</Button>
      </Stack>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 5rem;
`

const Stack = styled.div`
  & > * {
    display: block;
    & + * {
      margin-top: 1rem;
    }
  }
`

export default Homepage
