import React from 'react'
import styled from 'styled-components'
import HistoryButton from './HistoryButton'
import SearchButton from './SearchButton'

const ButtonContainer = () => {
  return (
    <Container>
      <SearchButton />
      <HistoryButton />
    </Container>
  )
}

const Container = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  padding-top: 100px
`

export default ButtonContainer