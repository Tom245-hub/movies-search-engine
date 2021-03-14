import React, { useState } from 'react';
import styled from 'styled-components';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import InfoSearch from './components/InfoSearch';


const SearchContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #111;
`

const ResultContainer = styled.div`
  width: 100%;
`

const SearchRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`

const App = () => {

  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState<any>([]);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState('');
  const [countMovies, setCountMovies] = useState(6);


  const getResultAPI = (e: any, title: string, year: number, type: string) => {
    e.preventDefault();

    setSending(true);
    setCountMovies(6);

    const getSearchParams = () => {

      let urlParams = '';

      if (title) {
        urlParams = urlParams + "s=" + title + "&";
      } else if (!title) {
        urlParams = urlParams;
      }

      if (year) {
        urlParams = urlParams + "y=" + year + "&";
      } else if (year) {
        urlParams = urlParams;
      }

      if (type) {
        urlParams = urlParams + "type=" + type + "&";
      } else if (!type) {
        urlParams = urlParams;
      }

      return urlParams;
    }

    fetch("http://www.omdbapi.com/?" + getSearchParams() + "apikey=44643742")
      .then(response => response.json())
      .then(response => {

        if (response.Response === 'False') {
          setErrors(response.Error)
        } else if (response.Response === 'True') {
          setResult(response)
          setErrors('')
        }

      });
  }

  return (
    <div>

      <SearchContainer>

        <SearchRow>

          <MovieSearch
            title={title}
            setTitle={setTitle}
            year={year}
            setYear={setYear}
            type={type}
            setType={setType}
            getResultAPI={getResultAPI}
          />

        </SearchRow>

        <SearchRow>

          <InfoSearch
            sending={sending}
            title={title}
            year={year}
            errors={errors}
            result={result}
          />

        </SearchRow>

      </SearchContainer>

      <ResultContainer>
        <MovieList
          sending={sending}
          countMovies={countMovies}
          setCountMovies={setCountMovies}
          result={result}
        />
      </ResultContainer>

    </div >
  );
}

export default App;