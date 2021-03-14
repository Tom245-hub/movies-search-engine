import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Div = styled.div`
  width: 160px;
  height: 40px;
  background: #ffc200;
  border-radius: 3px;
  border: none;
  color: #000;
  margin-top: 15px;
`

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 100%;
`

const InputTitle = styled.input`
    padding: 10px;
    color: #111;
    background: #f9f9f9;
    border: none;
    border-radius: 3px 0 0 3px;
    width: 220px;
`

const InputYear = styled.input`
    padding: 10px;
    color: #111;
    background: #f9f9f9;
    width: 100px;
    border: none;
`

const SelectType = styled.select`
    padding: 9px;
    color: #111;
    background: #f9f9f9;
    width: 100px;
    border: none;
    option {
        padding: 5px;
    }
`

const ButtonSearch = styled.button`
    padding: 10px;
    color: #111;
    background: #ffc200;
    border-radius: 0 3px 3px 0;
    border: none;
    cursor: pointer;
`

const MovieSearch = (props: any) => {

    return (
        <div>

            <SearchForm onSubmit={(e) => props.getResultAPI(e, props.title, props.year, props.type)}>

                <InputTitle type="text" placeholder="Type title..." value={props.title} onChange={(e) => props.setTitle(e.target.value)} />

                <InputYear type="number" placeholder="Type year..." value={props.year} onChange={(e) => props.setYear(parseInt(e.target.value))} />

                <SelectType value={props.type} onChange={(e) => props.setType(e.target.value)}>
                    <option>type - all</option>
                    <option value="movie">movie</option>
                    <option value="game">game</option>
                    <option value="series">series</option>
                </SelectType>

                <ButtonSearch type="submit"><FontAwesomeIcon icon={faSearch} /></ButtonSearch>

            </SearchForm>

        </div>
    );
}

export default MovieSearch;


