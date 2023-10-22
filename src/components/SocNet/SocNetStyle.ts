import styled from "@emotion/styled";

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



& > li:not(:last-child){
margin-right: 25px;

@media (min-width: 768px){
    margin-right: 32px;
}
}

@media (min-width: 768px){
& > li:last-child{
margin-right: 30px;
}
}
`