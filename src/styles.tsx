import styled from 'styled-components'

const menuColor = 'blue';

export const Aside = styled.aside`
display: flex;
flex-direction: column;
background-color: ${menuColor};
height: 100vh;
width: 150px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
border-radius: 10px;
background-color: pink;
`;

export const Icon = styled.img`
width: 50%;
`;

export const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
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
`;

export const ProgressBar = styled.div`
width: 100%;
height: 20px;
border: 1px solid black;
`;

export const FillerBar = styled.div`
background-color: aqua;
height: 20px;
width: 0%;
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