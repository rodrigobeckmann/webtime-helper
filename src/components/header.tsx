import { HeaderContainer } from "../styles";
import { change, toggleMenu } from '../app/slicers/setThemeSlice';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { Icon } from '../styles';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { MenuListButton, Tittle } from "../styles";
import list from '../assets/list.svg';

export default function Header() {


  const { isDarkMode } = useAppSelector(state => state.setTheme);
  const dispatch = useAppDispatch();

  return (
    <HeaderContainer>
      <MenuListButton onClick={() => dispatch(toggleMenu())}>{<Icon id='listButton' style={{ width: '70px', padding: '40px', aspectRatio: '1', alignSelf: 'center', justifySelf: 'center' }} src={list} />}</MenuListButton>
      <Tittle>WebTimeHelper</Tittle>
      {isDarkMode ?
        <Icon onClick={() => dispatch(change())} style={{ height: '50px', width: '50px', position: 'fixed', right: '1vw' }} id='sunIcon' src={sun} alt="sun icon" />
        : <Icon onClick={() => dispatch(change())} style={{ height: '50px', width: '50px', position: 'fixed', right: '1vw' }} id='moonIcon' src={moon} alt="moon icon" />
      }

    </HeaderContainer>
  );
}
