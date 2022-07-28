import React from 'react'
import styled from 'styled-components'
import ArticleCards from './ArticleCards'

const NewsArticles = () => {
  return (
    <ArticlesContainer>
      <ArticleCards />
    </ArticlesContainer>
  )
}

const ArticlesContainer = styled.div`
  justify-content: center;
  align-items: center;
  color: white;
`

export default NewsArticles