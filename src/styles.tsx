import styled from 'styled-components'

const menuColor = '#2c2f33';
const buttonColor = '#99aab5';
const backgroundColor = '#232323';
const clockColor = '#f1f1f1';
const progressBarBG = 'white';
const fillerBarBG = 'aqua';

export const Aside = styled.aside`
display: flex;
flex-direction: column;
background-color: ${menuColor};
height: 100vh;
width: 100px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;
border-radius: 10px;
background-color: ${buttonColor};
font-family: 'Roboto', sans-serif;
font-size: 12px;
&:hover{
    opacity: 0.8;
}
`;

export const Icon = styled.img`
width: 50%;
`;

export const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${backgroundColor};
`;

export const OutletContainer = styled.div`
position: absolute;
display: flex;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;

export const ContainerColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

export const ContainerRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const ClockContainer = styled.h2`
font-family: digital;
font-size: 120px;
letter-spacing: -20px;
color: ${clockColor};
`;

export const ProgressBar = styled.div`
width: 100%;
height: 20px;
border: 1px solid black;
background-color: ${progressBarBG};
`;

export const FillerBar = styled.div`
background-color: aqua;
height: 20px;
width: 0%;
background-color: ${fillerBarBG};
`;

export const Input = styled.input`
width: 30px;
height: 20px;
font-size: 20px;
text-align: center;
justify-content: center;
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const InputLabel = styled.label`
color: ${clockColor};
`;

export const TimezoneContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const InputsContainer = styled.div`
display: flex;
position: fixed;
background-color: ${menuColor};
border-radius: 10px;
gap: 20px;
padding: 150px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;