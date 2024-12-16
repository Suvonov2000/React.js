import styled from "styled-components";

const Wrapper = styled.div`
width:80%;
height:78px;
margin:auto;
display:flex;
align-Items:center;
justify-content:space-between;
border-bottom: 0.3px solid #46A35880;

.img{
cursor:pointer;
}

`;


Wrapper.Left = styled.div``;
Wrapper.Middle = styled.div`
display:flex;
align-items:center;
gap:50px;
`;
Wrapper.Middle.Item =styled.h3`
margin: 0 10px;
cursor: pointer;
font-family: Cera Pro;
font-size: 16px;
font-weight: 400;
line-height: 20.11px;
text-align: left;
position:relative;

&::before {
content:" ";
display:none;
position:absolute;
width:100%;
height:3px;
background-color: #46A358;
bottom:-29px;
}

&:hover::before{
display:block;
}
`;

Wrapper.Right = styled.div`
display:flex;
align-items:center;
gap:20px;

.icon{
font-size:20px;
}
`;

export {Wrapper};