import stopwatch from '../assets/stopwatch.svg';
import timer from '../assets/timer.svg';
import sun from '../assets/sun.svg';
import { useNavigate } from 'react-router-dom';
import { Aside, Label, Icon } from '../styles';
import { useDispatch } from 'react-redux';
import { change } from '../app/slicers/setThemeSlice';

export default function AsideNavBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Aside>

      <Label htmlFor="timerIcon" onClick={() => navigate('/')} >
        <Icon id='timerIcon' src={timer} alt="timer icon" />
        Temporizador
      </Label>

      <Label htmlFor="stopWatchIcon" onClick={() => navigate('/stopwatch')}>
        <Icon id='stopWatchIcon' src={stopwatch} alt="stopwatch icon" />
        Cronômetro
      </Label>

      <Icon onClick={() => dispatch(change())} id='sunIcon' src={sun} alt="sun icon" />

    </Aside>
  );
}
