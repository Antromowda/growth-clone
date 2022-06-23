import {
  Container, TopBar, MainHeader, MenuBar,
} from './styles';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Container>
      <TopBar>
        <p>
          <b>Qualidade internacional</b>
          {' '}
          comprovada e preço
          {' '}
          <b>direto da fábrica</b>
        </p>
      </TopBar>
      <MainHeader>
        <img src={logo} alt="Logo Growth Suplementos" />
      </MainHeader>
      <MenuBar>
        <a href="/"><span>Categorias</span></a>
        <a href="/"><span>Top 20</span></a>
        <a href="/"><span>Lançamentos</span></a>
        <a href="/"><span>Objetivos</span></a>
        <a href="/"><span>Whey Protein</span></a>
        <a href="/"><span>Roupas</span></a>
        <a href="/"><span>Team Growth</span></a>
        <a href="/"><span>G Pontos</span></a>
      </MenuBar>
    </Container>
  );
}

export default Header;
