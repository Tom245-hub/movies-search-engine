import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';


const InfoBox = styled.div`
  width: 350px;
  padding: 5px 10px;
  margin: 5px 0;
  background: #ffc200;
  border-radius: 3px;
  border: none;
  color: #000;
`

const Icon = styled.span`
    margin-right: 5px;
`

const InfoSearch = (props: any) => {

    return (
        <div>
            {props.sending && !props.title &&
                <InfoBox>
                    <Icon><FontAwesomeIcon icon={faExclamation} /></Icon>
                    You must type title or a few letters (e.g. Avatar).
                </InfoBox>
            }

            {props.sending && props.title.length >= 1 && props.title.length <= 2 &&
                <InfoBox>
                    <Icon><FontAwesomeIcon icon={faExclamation} /></Icon>
                    The title is too short. You must type more than two letters.
                </InfoBox>
            }

            {props.sending && props.year.toString().length >= 1 && props.year.toString().length <= 3 ||
                props.sending && props.year.toString().length >= 5 &&
                <InfoBox>
                    <Icon><FontAwesomeIcon icon={faExclamation} /></Icon>
                    The year must be 4 digits long (e.g. 2020)
                </InfoBox>
            }

            {props.sending && props.errors &&
                <InfoBox>
                    <Icon><FontAwesomeIcon icon={faExclamation} /></Icon>
                    {props.errors}
                </InfoBox>
            }
        </div>
    );
}

export default InfoSearch;
