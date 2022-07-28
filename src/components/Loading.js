import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Container>
      <Span>Loading . . .</Span>
    </Container>
  )
}

const Container = styled.div``

const Span = styled.span`
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 75px;
`

export default Loading