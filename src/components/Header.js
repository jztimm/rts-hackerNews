import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to='/'>
        <Container>
            <img src="/images/HackerNewsLogo.png" alt="Hacker News Logo" />
        </Container>
      </Link>
      <Subtitle>
        <h3>
          Your favorite site for all of your hacker related news!
        </h3>
      </Subtitle>
    </>
    
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`

const Subtitle = styled.div`
  color: white;
  display: flex;
  justify-content: center;
`

export default Header