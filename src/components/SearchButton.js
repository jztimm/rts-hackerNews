import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SearchButton = () => {
  return (
    <LinkContainer>
      <Link style={{textDecoration: 'none'}} to="/search">
        <Container>
          <Search>
              <h2>Search</h2>
          </Search>
        </Container>
      </Link>
    </LinkContainer>
  )
}


const LinkContainer = styled.div`
  margin-right: 200px;
  padding: 0 50px 0 50px;
  border-radius: 50px;
  border: 1px solid white;
`
const Container = styled.div``

const Search = styled.div`
  color: white;
`

export default SearchButton