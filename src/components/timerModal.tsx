import { updateTimerHours, updateTimerMinutes, updateTimerSeconds, handleSetTime, closeModal, updateMilliseconds } from '../app/slicers/timerSlice';
import { Input, InputLabel, ModalContainer, InputContainerHeader, ExitButton, ModalConfirmButton, ModalCancelButton, InputsContainer } from '../styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import exit from '../assets/exit.svg';
import { useEffect } from 'react';


export default function TimerModal() {

    const dispatch = useAppDispatch();

    const { timerClock } = useAppSelector((state) => state.timer);

    const { hours, minutes, seconds } = timerClock;

    useEffect(() => {

        dispatch(updateMilliseconds())

    }, [hours, minutes, seconds])

    return (
        <ModalContainer>

            <InputContainerHeader><ExitButton onClick={() => dispatch(closeModal())}>{<img src={exit} style={{ height: '20px', width: '20px' }} />}</ExitButton></InputContainerHeader>

            <InputsContainer>

                <InputLabel htmlFor="hours">
                    Horas
                    <Input
                        type="number"
                        id="hours"
                        value={hours.toString()}
                        onChange={({ target }) => dispatch(updateTimerHours(target.valueAsNumber))}
                    />
                </InputLabel>

                <InputLabel htmlFor="minutes">
                    Minutos
                    <Input
                        type="number"
                        id="minutes"
                        value={minutes.toString()}
                        onChange={({ target }) => dispatch(updateTimerMinutes(target.valueAsNumber))}
                    />
                </InputLabel>

                <InputLabel htmlFor="seconds">
                    Segundos
                    <Input
                        type="number"
                        id="seconds"
                        value={seconds.toString()}
                        onChange={({ target }) => dispatch(updateTimerSeconds(target.valueAsNumber))}
                    />
                </InputLabel>

            </InputsContainer>

            <ModalCancelButton onClick={() => dispatch(closeModal())}>Cancelar</ModalCancelButton>
            <ModalConfirmButton onClick={() => dispatch(handleSetTime())}>Confirmar</ModalConfirmButton>

        </ModalContainer>
    )
}