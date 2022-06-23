import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 195px;
  `;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background-color: #000;
  color: #009EDF;
  font-size: 18px;
  `;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  background-color: #009EDF;
`;

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  background-color: #054A66;
  color: #FFF;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #FFF;
  }
`;
