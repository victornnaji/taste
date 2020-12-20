import Nav from "components/Nav";
import styled from "styled-components";
import {theme} from "styles";
import bg from 'assets/background.svg';

function App() {
  return (
    <StyledApp bg={bg}>
      <Nav />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-image: url(${props => props.bg});
  background-color: ${theme.colors.mainBlack};
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  color: ${theme.colors.mainWhite};
  font-family: ${theme.fonts.Josefin}
`;

export default App;
