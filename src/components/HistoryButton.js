import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HistoryButton = () => {
  return (
    <LinkContainer>
      <Link style={{textDecoration: 'none'}} to="/history">
        <Container>
          <History>
            <h2>History</h2>
          </History>
        </Container>
      </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  margin-left: 200px;
  padding: 0 50px 0 50px;
  border-radius: 50px;
  border: 1px solid white;
`
const Container = styled.div``

const History = styled.div`
  color: white;
`

export default HistoryButton