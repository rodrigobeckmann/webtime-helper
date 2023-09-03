import stopwatch from '../assets/stopwatch.svg';
import timer from '../assets/timer.svg';
import pomodoro from '../assets/pomodoro.svg';
import { useNavigate } from 'react-router-dom';
import { Aside, Label, Icon, openedMenu, closedMenu, LabelDivisor } from '../styles';
import { toggleMenuOff } from '../app/slicers/setThemeSlice';
import { useTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { useRef, useEffect } from 'react';


export default function AsideNavBar() {

  const isMenuShown = useAppSelector(state => state.setTheme.isMenuShown);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const buttonRef: React.LegacyRef<HTMLElement> = useRef(null)


  const theme = useTheme();

  const buttonSelectedTheme = {

    backgroundColor: `${theme.selectedButtonColor}`,

  }

  const navigateTo = (path: string) => {
    if (path === location.pathname) return;
    dispatch(toggleMenuOff());
    navigate(path);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: any) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target) && e.target.id !== 'listButton') {
      dispatch(toggleMenuOff());
    }
  }

  return (
    <ThemeProvider theme={isMenuShown ? openedMenu : closedMenu}>
      <Aside ref={buttonRef}>


        <Label htmlFor="timerIcon" style={location.pathname === '/' ? buttonSelectedTheme : {}} onClick={() => navigateTo('/')} >
          <Icon id='timerIcon' src={timer} alt="timer icon" />
          Temporizador
        </Label>

        <LabelDivisor />

        <Label htmlFor="stopWatchIcon" style={location.pathname === '/stopwatch' ? buttonSelectedTheme : {}} onClick={() => navigateTo('/stopwatch')}>
          <Icon id='stopWatchIcon' src={stopwatch} alt="stopwatch icon" />
          Cronômetro
        </Label>

        <LabelDivisor />

        <Label htmlFor="pomodoroIcon" style={location.pathname === '/pomodoro' ? buttonSelectedTheme : {}} onClick={() => navigateTo('/pomodoro')}>
          <Icon id='pomodoroIcon' src={pomodoro} alt="pomodoro icon" />
          Pomodoro
        </Label>

        <LabelDivisor />

      </Aside>
    </ThemeProvider>
  );
}
