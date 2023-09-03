import { updateTimerHours, updateTimerMinutes, updateTimerSeconds, handleSetTime, closeModal, updateMilliseconds } from '../app/slicers/timerSlice';
import { Input, InputLabel, ModalContainer, InputContainerHeader, ExitButton, ModalConfirmButton, ModalCancelButton, InputsContainer, ModalBackGround } from '../styles';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import exit from '../assets/exit.svg';
import { useEffect, useRef } from 'react';


export default function TimerModal() {

    const dispatch = useAppDispatch();
    const modalRef: React.LegacyRef<HTMLDivElement> = useRef(null);

    const { timerClock } = useAppSelector((state) => state.timer);

    const { hours, minutes, seconds, milliseconds } = timerClock;

    useEffect(() => {

        dispatch(updateMilliseconds())

    }, [hours, minutes, seconds])

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    const handleOutsideClick = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            dispatch(closeModal());
        }
    }

    return (
        <ModalBackGround >
            <ModalContainer ref={modalRef} >

                <InputContainerHeader><ExitButton onClick={() => dispatch(closeModal())}>{<img src={exit} style={{ height: '20px', width: '20px' }} />}</ExitButton></InputContainerHeader>

                <InputsContainer>

                    <InputLabel htmlFor="hours">
                        HORAS
                        <Input
                            type="number"
                            id="hours"
                            value={hours.toString()}
                            onChange={({ target }) => dispatch(updateTimerHours(target.valueAsNumber))}
                        />
                    </InputLabel>

                    <InputLabel htmlFor="minutes">
                        MINUTOS
                        <Input
                            type="number"
                            id="minutes"
                            value={minutes.toString()}
                            onChange={({ target }) => dispatch(updateTimerMinutes(target.valueAsNumber))}
                        />
                    </InputLabel>

                    <InputLabel htmlFor="seconds">
                        SEGUNDOS
                        <Input
                            type="number"
                            id="seconds"
                            value={seconds.toString()}
                            onChange={({ target }) => dispatch(updateTimerSeconds(target.valueAsNumber))}
                        />
                    </InputLabel>

                </InputsContainer>

                <ModalCancelButton onClick={() => dispatch(closeModal())}>Cancelar</ModalCancelButton>
                <ModalConfirmButton disabled={milliseconds === 0 ? true : false} onClick={() => dispatch(handleSetTime())}>Confirmar</ModalConfirmButton>

            </ModalContainer>
        </ModalBackGround>
    )
}