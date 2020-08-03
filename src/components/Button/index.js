import styled from 'styled-components';

export const ButtonLink = styled.a`
    padding: 1rem;
    color: white;
    text-decoration: none;
    border: solid 0.5px white;
    outline: none;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    cursor: pointer;
    box-sizing: border-box;
    &:hover,
    &:focus{
        opacity: .5;
    }
`;
