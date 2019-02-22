import React from 'react';
import styled from 'styled-components';

// Reference Visual

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container">
//         <div className="container-left">
//           <span>TOPICS</span><span>SEARCH</span>
//         </div>
//         <div className="container-center">
//           <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
//         </div>
//         <div className="container-right">
//           <span>LOG IN</span>
//         </div>
//       </div>
//     </div>
//   )
// }




const TbDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
@media (min-width: 1280px) {
    width: 1280px;
  }
`;

const LeftContainer = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const CenterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

const RightContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const LeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const CenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
&:hover{
  text-decoration: underline;
}
&:last-child {
  margin-right: 0;
}
`;

const RightSpan = styled.span`
cursor: pointer;
`;

const TopBar = () => {
  return (
    <TbDiv>
      <MainContainer>
        <LeftContainer>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </LeftContainer>

        <CenterContainer>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </CenterContainer>

        <RightContainer>
          <RightSpan>LOG IN</RightSpan>
        </RightContainer>
      </MainContainer>
    </TbDiv>
  )
}







export default TopBar;