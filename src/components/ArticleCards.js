import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MainURL = 'http://hn.algolia.com/api/v1/items/'
const TestURL = 'https://randomuser.me/api/?results='


const ArticleCards = () => {
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [foundArticles, setFoundArticles] = useState([]);
  

  const get100Articles = async MainURL => {
    const maxArticles = 10;
    
    for (let i = 1; i <= maxArticles; i++) {
      const response = await fetch((MainURL+i))
      const json = await response.json()
      setArticlesInfo(current => [...current, json]);
    }
    setIsLoaded(true);
    setFoundArticles(articlesInfo)
  }

  useEffect(() => {
    get100Articles(MainURL)
  }, [])

  useEffect(() => {
    if (isLoaded === true);
  }, [isLoaded])

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

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = articlesInfo.filter((articles) => {
        return articles.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundArticles(results);
    } else {
      setFoundArticles(articlesInfo);
      // If the text field is empty, show all users
    }

    setSearchInput(keyword);
  };

  return (
    <ArticleCardContainer>      
      <CardContainer>
          {!isLoaded ?
            console.log("Is False " + isLoaded)
            :
            articlesInfo.map(articles => (
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
            ))
          }
      </CardContainer>      
    </ArticleCardContainer>
  )
}

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

const CardInfo = styled.div`

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

export default ArticleCards