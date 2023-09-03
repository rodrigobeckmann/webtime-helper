import styled from 'styled-components'

//dark pallete: https://coolors.co/222222-2b2e32-9a9a9a-232323-262626-232323-1400f6-5d5d5d-170e82-282828
//light pallete: https://coolors.co/9e6240-dea47e-f8f2dc-ffffff-447a9c-8cb4cd-96bbd2-9bbed4

const mobileResolution = {
    maxWidth: '740px',
    maxHeight: '480px',
}


export const openedMenu = {
    menuVisibility: 'flex',
}

export const closedMenu = {
    menuVisibility: 'none',
}

export const DarkTheme = {
    menuColor: '#2B2E32',
    buttonColor: '#3D3D3D',
    selectedButtonColor: '#222222',
    backgroundColor: '#222222',
    clockColor: '#f1f1f1',
    progressBarBG: 'white',
    fillerBarBG: 'aqua',
    modalBackGround: '#5D5D5D',
    modalFontColor: 'black',
    buttonBackground: '#180E81',
    modalHeaderColor: '#2B2E32',
    windowBackground: '#22222266',
    buttonFontColor: 'white',
    iconColor: 'invert(100%) sepia(0%) saturate(2402%) hue-rotate(13deg) brightness(110%) contrast(101%)',
    clockContainerBG: '#FFFFFF1A',
    pathHeaderBG: '#2B2E3299',
}

export const LightTheme = {
    menuColor: '#447A9C',
    buttonColor: '#9BBED4',
    selectedButtonColor: '#F8F2DC',
    backgroundColor: '#F8F2DC',
    clockColor: 'black',
    progressBarBG: 'white',
    fillerBarBG: 'aqua',
    modalBackGround: '#F8F2DC',
    modalFontColor: 'black',
    buttonBackground: '#96BBD2',
    modalHeaderColor: '#447A9C',
    windowBackground: '#22222266',
    buttonFontColor: 'black',
    iconColor: 'invert(0%) sepia(100%) saturate(7499%) hue-rotate(32deg) brightness(106%) contrast(94%)',
    clockContainerBG: '#0000001A',
    pathHeaderBG: '#447A9C99',
}

export const PathHeader = styled.h2`
display: none;
@media screen and (max-width: ${mobileResolution.maxWidth}) {
    display: flex;
background-color: ${(props) => props.theme.pathHeaderBG};
justify-content: center;
font-size: 20px;
font-family: 'Roboto', sans-serif;
color: ${(props) => props.theme.clockColor};
    }
`;

export const HeaderContainer = styled.header`
display: flex;
flex-direction: row;   
background-color: ${(props) => props.theme.menuColor}; 
width: 100%;
height: 100px;
`;

export const Aside = styled.aside`
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.menuColor};
height: 100%;
width: 100px;
@media screen and (max-width: ${mobileResolution.maxWidth}) {
width: 150px;
    display: ${(props) => props.theme.menuVisibility};
z-index: 10;
@keyframes menuFadeIn {
    from { height: 0% }
    to { height: 100% }
}
animation: menuFadeIn 500ms ;
}
`;

export const MenuListButton = styled.div`
display: none;
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
display: flex;
background-color: transparent;
border: none;
}
`;

export const LabelDivisor = styled.div`
height: 1px;
background-color: ${(props) => props.theme.backgroundColor};
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) => props.theme.buttonColor};
font-family: 'Roboto', sans-serif;
font-size: 12px;
color: ${(props) => props.theme.clockColor};
&:hover{
    opacity: 0.8;
}
@media screen and (max-width: ${mobileResolution.maxWidth}) {
    display: ${(props) => props.theme.menuVisibility};
    height: 20%;
    font-size: 150%;
    &:hover{
        opacity: 1;
    }
}
`;

export const Tittle = styled.h1`
display: flex;
font-family: 'Roboto', sans-serif;
align-self: center;
margin-left: 20px;
font-size: 50px;
font-family: 'REM', sans-serif;
color: ${(props) => props.theme.clockColor};
@media screen and (max-width: ${mobileResolution.maxWidth}) {
margin-left: 0;
font-size: 20px;
}
`;

export const Icon = styled.img`
width: 50%;
filter: ${(props) => props.theme.iconColor};
@media screen and (max-width: ${mobileResolution.maxWidth}) {
    height: 100%;
}
`;

export const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.backgroundColor};
width: 100%;
height: 100%;
`;

export const OutletContainer = styled.div`
position: absolute;
height: calc(100% - 100px);
width: calc(100% - 100px);
margin-top: 50px;
margin-left: 50px;
justify-content: center;
align-items: center;
display: flex;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
width: 100%;
margin-left: 0;
}
`;

export const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 100%;
height: 100%;
justify-content: center;
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
flex-direction: column;
}
`;

// export const ContainerColumn = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 20px;
// width: 100%;
// height: auto;
// justify-content: center;
// @media only screen and (max-width: ${mobileResolution.maxWidth}) {
//     position: fixed;
// flex-direction: column;
// bottom: 0;
// }
// `;

export const ContainerRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
    position: fixed;
flex-direction: column;
bottom: 50px;
}
`;

export const ClockContainer = styled.h2`
font-family: digital;
font-size: 8vw;
color: ${(props) => props.theme.clockColor};
background-color: ${(props) => props.theme.clockContainerBG};
padding: 10px;
border-radius: 5px;
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
font-size: 15vw;
}
`;

export const MillisecondsContainer = styled.span`
font-size: 2vw;
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
font-size: 4vw;
}
`;

export const ProgressBar = styled.div`
width: 50%;
height: 20px;
border: 1px solid black;
background-color: ${(props) => props.theme.progressBarBG};
@media only screen and (max-width: ${mobileResolution.maxWidth}) {
width: 90%;
}
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
width: 100%;
height: 100%;
font-size: 20px;
text-align: center;
justify-content: center;
font-size: 50px;
padding: 0;
border: 1px solid black;
background-color: transparent;
&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
@media screen and (max-width: ${mobileResolution.maxWidth}) {
font-size: 80px;
}
`

export const InputLabel = styled.label`
color: ${(props) => props.theme.modalFontColor};
display: flex;
flex-direction: column;
align-items: center;
border: 10px solid ${(props) => props.theme.modalBackGround};
font-family: 'Roboto', sans-serif;
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
background-color: ${(props) => props.theme.modalHeaderColor};
@media screen and (max-width: ${mobileResolution.maxWidth}) {
background-color: ${(props) => props.theme.modalHeaderColor};
}
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
bottom: 10px;
background-color: green;
`;

export const ModalCancelButton = styled.button`
position: fixed;
right: 120px;
bottom: 10px;
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

export const ModalBackGround = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
left: -100px;
top: -100px;
background-color: ${(props) => props.theme.windowBackground};
z-index: 9;
@media screen and (max-width: ${mobileResolution.maxWidth}) {
left: 0;
}
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
@keyframes modalFadeIn {
    from { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
animation: modalFadeIn 0.5s;
@media screen and (max-width: ${mobileResolution.maxWidth}) {
width: 90%;
height: 30%;
}
`;

export const AdSenseContainer = styled.div`
position: absolute;
display: flex;
left: 90%;
top: 50%;
transform: translate(-90%, -50%);
`;

export const Button = styled.button`
background-color: ${(props) => props.theme.buttonBackground};
border: none;
width: 150px;
aspect-ratio: 4;
font-family: 'Roboto', sans-serif;
font-size: 16px;
margin: 10px;
color: ${(props) => props.theme.buttonFontColor};
@media screen and (max-width: ${mobileResolution.maxWidth}) {
width: 200px;
font-size: 30px;
}
`;

export const PomodoroInterval = styled.h1`
position: fixed;
top: 0px;
font-family: 'Roboto', sans-serif;
font-size: 25px;
background-color: ${(props) => props.theme.buttonColor};
padding: 5px 10px;
justify-content: center;
border-radius: 10px;
color: ${(props) => props.theme.clockColor};
@media screen and (max-width: ${mobileResolution.maxWidth}) {
position: fixed;
top: 40px;
}
`;

