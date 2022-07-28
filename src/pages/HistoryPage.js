import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const HistoryPage = (articleHistory) => {
  const mouseHover = (e) => {
    e.target.style.color = '#5861c1'
  }
  const mouseOut = (e) => {
    e.target.style.color = 'white'
  }

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
      age--;
    }
    return age;
  }

  function getComments(children) {
    return children.length
  }

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          Recent History
        </TitleContainer>
        {articleHistory.articleHistory.length === 0
        ?
          <ArticleCardContainer>
                <h2>No recent history</h2>
          </ArticleCardContainer>
        :
          <ArticleCardContainer>
            <CardContainer>
              {articleHistory.articleHistory.map(articles => (
                
                <CardDescription>
                  <TitleHeader>
                    <a 
                      href={articles.url}
                      style={{textDecoration: 'none', color: 'white'}}
                      onMouseOver={mouseHover}
                      onMouseOut={mouseOut}
                    >
                      <h2 style={{backgroundColor: '#1e2142', marginLeft: '20px'}}>{articles.title}</h2>
                    </a>
                  </TitleHeader>
                  <SubInfo>
                    {articles.points} points | {articles.author} | {getAge(articles.created_at.slice(0,4))} years ago | {getComments(articles.children)} comments
                  </SubInfo>
                </CardDescription>
              ))}
          </CardContainer>
          </ArticleCardContainer>
        }
      </Container>
    </>
  )
}
  
  const Container = styled.div`
    color: white;
  `

  const TitleContainer = styled.div`
    display: flex;
    background: none;
    align-items: center;
    margin: 25px;
    color: white;
    font-weight: bold;
    font-size: 45px;
  `

  const ArticleCardContainer = styled.div`
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 10px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
  `

const CardContainer = styled.div`
background-color: none;
`

const CardDescription = styled.div`
margin: 10px;
border-radius: 10px;
overflow: hidden;
background-color: #1e2142;
box-shadow: 0px 6px 10px -9px rgba(0, 0, 0, 0.75);
transition: transform 100ms ease-in;
text-decoration: "none";
`
const TitleHeader = styled.div`
display: inline-block;
background-color: #1e2142;
`

const SubInfo = styled.div`
margin: 20px;
margin-top: -15px;
background-color: #1e2142;
font-size: 12px;
color: lightgrey;
cursor: default;
`

export default HistoryPage