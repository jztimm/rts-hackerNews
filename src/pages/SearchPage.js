import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header';
import Loading from '../components/Loading';

const MainURL = 'http://hn.algolia.com/api/v1/items/'

const SearchPage = (props) => {
  
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [uniqueArticlesInfo, setUniqueArticlesInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundArticles, setFoundArticles] = useState([]);

  const [clcikedArticleNames, setClcikedArticleNames] = useState([]);
  const [clcikedArticleHistory, setClcikedArticleHistory] = useState([]);

  props.func(clcikedArticleHistory)

  // const handleErrors = (res) => {
  //   if (!res.ok) {
  //     throw Error(res.statusText)
  //   }
  //   return res
  // }

  const get100Articles = async MainURL => {
    const maxArticles = 10;
    
    for (let i = 1; i <= maxArticles; i++) {
      if (i !== 5 && i !== 26 && i !== 28 && i !== 29 && i !== 40 && i !== 48) {
        const response = await fetch((MainURL+i))
        const json = await response.json()
        setArticlesInfo(current => [...current, json]);
      }
    }
    setIsLoaded(true);
  }

  const saveClickedArticles = (e) => {
    e.preventDefault();
    // setClcikedArticleNames(current => [...current, e.target.textContent])
    setClcikedArticleHistory(current => [...current, uniqueArticlesInfo.find(item => item.title === e.target.textContent)])
  }


  useEffect(() => {
    get100Articles(MainURL)
  }, [])

  useEffect(() => {
    if (isLoaded === true);
    uniqueArticlesArray()
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

  const uniqueArticlesArray = () => {

    let articlesMap = articlesInfo.filter((c, index) => {
      return articlesInfo.indexOf(c) === index;
    });

    let uniqueObjArray = [
      ...new Map(articlesMap.map((item) => [item["title"], item])).values(),
    ];
    
    setUniqueArticlesInfo(uniqueObjArray)
    setFoundArticles(uniqueObjArray)
  }

  // Filter articles
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      let uniqueArticles = uniqueArticlesInfo.filter((c, index) => {
        return uniqueArticlesInfo.indexOf(c) === index;
      });
      
      
      const results = uniqueArticles.filter((articles) => {
        return articles.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      // console.log(results);
      setFoundArticles(results);
      // setDisplayedFoundArticles()
    } else {
      setFoundArticles(uniqueArticlesInfo)
      // If the text field is empty, show all users
    }

    setSearchInput(keyword);
  };


  return (
    <Container>
      <Header />
      <SearchContainer>
        <SearchBar>
          <Input
            type="text"
            placeholder="Search for an article..."
            value={searchInput}
            onChange={filter}
          />
        </SearchBar>
        <SearchIcon color="White" style={{ 
          position: 'absolute',
          placeItem: 'center',
          color: 'black',
          fontSize: '18S',
          height: '40px',
          width: '50px',
          backgroundColor: 'white',
          marginTop: '23px',
          marginLeft: '130px',
          borderRadius: '99px'
        }} />
      </SearchContainer>

      <ArticleCardContainer>      
        <CardContainer>
          {!isLoaded ?
            // console.log("Is False " + isLoaded)
            <Loading />
            :
            foundArticles.map(articles => (
              <CardDescription>
                <TitleHeader>
                  <a 
                    href={articles.url}
                    style={{textDecoration: 'none', color: 'white'}}
                    onMouseOver={mouseHover}
                    onMouseOut={mouseOut}
                    onClick={saveClickedArticles}
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
    </Container>
  )
}

const Container = styled.div`
`

  const SearchContainer = styled.div`
  display: flex;
  background: none;
  border: 0;
  align-items: center;
  justify-content: center;
`

const SearchBar = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 45px;
`

const Input = styled.input`
  font-size: 18px;
  padding: 15px;
  margin: 10px;
  background: white;
  border: none;
  outline: none;
  border-radius: 50px;
  width: 300px;
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



export default SearchPage