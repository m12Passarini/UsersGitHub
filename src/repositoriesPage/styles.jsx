import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.aside`
  background-color: #191919;
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section `
  background-color: #282828;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576) {
    padding: 40px 20px;
  }
`;

