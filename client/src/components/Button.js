import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-tranform:capitalize;
height: 50px;
justify-content: center;
align-item: center;
font-size:1.2rem;
background: transparent;
border:0.05rem solid var(--lightGreen);
border-color:${props => (props.cart? 'var(--mainYellow)':"var(--lightGreen)")};
color: ${props =>props.cart? "var(--mainYellow)": "var(--lightGreen)"};
border-radius:0.5rem;
padding:0.2rem 0.2rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart? "var(--mainYellow)": "var(--lightGreen)"};
    color:var(--mainWhite);
    border:0.05rem solid var(--mainWhite);
}
&:focus{
    outline:none;
}
`;