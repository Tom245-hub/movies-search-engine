import React, { useState } from 'react';
import styled from 'styled-components';


const ResultList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
`

const CardMovie = styled.div`
    width: 200px;
    border: 1px solid gray;
    margin: 15px;
    :hover {
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    }
`

const ContainerImage = styled.div`
    position: relative;
    padding-top: 70%;
`

const BoxImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .4s;
    ${CardMovie}:hover & {
        transform: scale(1.1);
    }
`

const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`

const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: grey;
    margin-top: 5px;
`

const Detail = styled.label`
    font-size: 16px;
    color: #111;
    font-weight: 600;
`

const Button = styled.div`
    width: 200px;
    font-size: 20px;
    color: #111;
    font-weight: 600;
    text-align: center;
    background:  #ffc200;
    padding: 10px 20px;
    margin: 0 auto;
    cursor: pointer;
`

const MovieList = (props: any) => {

    // const [countMovies, setCountMovies] = useState(6);

    const getImageUrl = (value: string) => {
        if (value == "N/A") {
            return 'https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=6&m=1007557230&s=612x612&w=0&h=2c6NHjfH4sWCgTNoZCDLQx10_PdIfl-dI-nyZ9wF_jI='
        } else {
            return value;
        }
    }

    return (
        <div>

            <ResultList>

                {props.result.Response === "True" && props.result.Search.slice(0, props.countMovies).map((item: any, index: number) =>

                    <CardMovie key={index}>
                        <ContainerImage >
                            <BoxImage>
                                <Image src={getImageUrl(item.Poster)} />
                            </BoxImage>
                        </ContainerImage>
                        <MovieDetails>
                            <Label>Title:</Label>
                            <Detail>{item.Title}</Detail>
                            <Label>Year:</Label>
                            <Detail>{item.Year}</Detail>
                            <Label>Type:</Label>
                            <Detail>{item.Type}</Detail>
                        </MovieDetails>
                    </CardMovie>

                )}

            </ResultList>

            {
                props.result.Response === "True" && props.countMovies === 6
                && <Button onClick={() => props.setCountMovies(props.result.Search.length)}>More result</Button>
            }

        </div>
    );
}

export default MovieList;
