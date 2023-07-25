import stopwatch from '../assets/stopwatch.svg';
import timer from '../assets/timer.svg';
import { useNavigate } from 'react-router-dom';
import { Aside, Label, Icon } from '../styles';

export default function AsideNavBar() {

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

    </Aside>
  );
}
