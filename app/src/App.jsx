import styled from "styled-components";
import { useState } from "react";

const BASE_URL="http://localhost:9000";

const App=()=> {
  const [data, setData]= useState(null);

  const fetchFoodData = async ()=> {

    const response = await fetch(BASE_URL);
    
    const json=await response.json();
    console.log(json);
  };
  fetchFoodData();

  return (
    <Container>
      <TopContainer>
        <img src="/logo2.png"/>
        <div className="search">
          <input type="text" placeholder="Search food.."></input>
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCards>

        </FoodCards>
      </FoodCardContainer>
    </Container>
  );
}

export default App;
const Container=styled.div`



`;

const TopContainer=styled.div`
max-width:95%;
margin:0 auto;
min-height: 120px;
display:flex;
justify-content: space-between;
padding:16px;
padding-bottom: 0;
align-items: center;

img{
  width:28vh;
}

input{
  background-color: transparent;
  color:#f6e9cb;
  height:5vh;
  width:20vw;
  border:1px solid #6D5D6E;
  border-radius:5px;
  font-size: .9em;
  padding: 0 10px;
  outline:none;
}
input:focus {
  box-shadow: 0 0 8px #4F4557;
  transition: box-shadow 0.3s ease-in-out; 
  }
  input::placeholder {
  color: #6D5D6E;
}
`;

const FilterContainer= styled.section`
display:flex;
gap:12px;
justify-content: center;
padding-bottom: 16px;
`;

const Button= styled.button`
background:#FFBD59;
border:none;
border-radius:5px;
color:#393646;
padding: 6px 12px;
`;

const FoodCardContainer=styled.section`
 height:calc(100vh - 165px);
background-image: url("/bg.png");
 background-size: cover;

`;
const FoodCards=styled.div`

`;