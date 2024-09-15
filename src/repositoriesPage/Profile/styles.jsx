import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: 768) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: 768) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin- bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: 1.5rem;
`;

export const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;

  @media screen and (max-width: 768) {
    display: none
  }
`;

export const Inner = styled.div`
  padding: 1 rem;

  @media screen and (max-width: 768) {
    display: none
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5rem;

  svg {
    margin-right: 10px;
  }

  a {
    color: white;
  }
`;


