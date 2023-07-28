import styled from 'styled-components'

export const DarkTheme = {
    menuColor: '#2c2f33',
    buttonColor: '#99aab5',
    backgroundColor: '#232323',
    clockColor: '#f1f1f1',
    progressBarBG: 'white',
    fillerBarBG: 'aqua',
    modalBackGround: '#ffffffF2',
    modalFontColor: 'black',
}

export const LightTheme = {
    menuColor: '#2c2f33',
    buttonColor: '#99aab5',
    backgroundColor: 'white',
    clockColor: '#f1f1f1',
    progressBarBG: 'white',
    fillerBarBG: 'aqua',
    modalBackGround: 'white',
    modalFontColor: 'black',
}

export const Aside = styled.aside`
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.menuColor};
height: 100vh;
width: 100px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;
border-radius: 10px;
background-color: ${(props) => props.theme.buttonColor};
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
background-color: ${(props) => props.theme.backgroundColor};
filter: ${(props) => props.theme.modalFilter};
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
color: ${(props) => props.theme.clockColor};
`;

export const ProgressBar = styled.div`
width: 100%;
height: 20px;
border: 1px solid black;
background-color: ${(props) => props.theme.progressBarBG};
`;

export const FillerBar = styled.div`
background-color: aqua;
height: 20px;
width: 0%;
background-color: ${(props) => props.theme.fillerBarBG};
`;

export const Input = styled.input`
display: flex;
flex-direction: column;
width: 80%;
height: 100%;
font-size: 20px;
text-align: center;
justify-content: center;
margin: 10px;
font-size: 50px;
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`

export const InputLabel = styled.label`
color: ${(props) => props.theme.modalFontColor};
display: flex;
flex-direction: column;
align-items: center;
`;

export const TimezoneContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const InputContainerHeader = styled.div`
position: fixed;
top: 0;
width: 100%;
left: 0;
border-radius: 10px 10px 0 0;
height: 20px;
background-color: aqua;
`;

export const ExitButton = styled.button`
position: fixed;
padding: 0;
right: 5px;
border: none;
background-color: transparent;
`;

export const ModalConfirmButton = styled.button`
position: fixed;
right: 20px;
bottom: 20px;
background-color: green;
`;

export const ModalCancelButton = styled.button`
position: fixed;
right: 120px;
bottom: 20px;
background-color: red;
`;

export const InputsContainer = styled.div`
display: flex;
position: absolute;
top: 20px;
flex-direction: row;
width: 100%;
height: 70%;
`;

export const ModalContainer = styled.div`
display: flex;
position: fixed;
background-color: ${(props) => props.theme.modalBackGround};
border-radius: 10px;
gap: 20px;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 10;
width: 400px;
height: 200px;
`;

export const AdSenseContainer = styled.div`
position: absolute;
display: flex;
left: 90%;
top: 50%;
transform: translate(-90%, -50%);
`;