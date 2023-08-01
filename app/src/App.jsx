import styled from "styled-components";
import {useEffect,useState } from "react";
import SearchResult from "./components/SearchResult";

export const BASE_URL="http://localhost:9000";

const App=()=> {
  const [data, setData]= useState(null);
  const [filteredData,setFilteredData]=useState(null);
  const [loading, setLoading]=useState(false);
  const [error,setError]= useState(null);
  const [selectedBtn,setSelectedBtn]= useState("all");

  useEffect(()=>{
    const fetchFoodData = async ()=> {
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
      
        const json=await response.json();
  
        setData(json);
        setFilteredData(json);
        setLoading(false);
      }catch(error){
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  },[]);

const searchFood= (e)=>{
  const searchValue= e.target.value;
  console.log(searchValue);            //consoles what is typed
  if (searchValue==""){
    setFilteredData("null");
  }
  const filter = data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
   // const textMatch=food.text.toLowerCase().includes(searchValue.toLowerCase());
    //return nameMatch || textMatch;}
  );
  setFilteredData(filter);
};

const filterFood= (type)=>{
  if(type=="all"){
    setFilteredData(data);
    setSelectedBtn("all");
    return;
  }
  const filter=data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase())
  );
  setFilteredData(filter);
  setSelectedBtn(type);
};
  if (error) return <div>{error}</div>;
  if (loading)return <div>loading...</div>

  return (
  <>
    <Container>
      <TopContainer>
        <img src="/logo2.png"/>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="Search food.."></input>
        </div>
      </TopContainer>
      <FilterContainer>
        <Button onClick={()=>filterFood("all")}>All</Button>
        <Button onClick={()=>filterFood("Breakfast")}>Breakfast</Button>
        <Button onClick={()=>filterFood("Lunch")}>Lunch</Button>
        <Button onClick={()=>filterFood("Dinner")}>Dinner</Button>
      </FilterContainer>
    </Container>
      <SearchResult data={filteredData}/>
</>

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
flex-wrap:wrap;
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
  width:150px;
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
@media (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100%;
    }
    input{
      width:60vw;
    }
    .search {
      margin-top: 16px; 
      margin-bottom: 16px;
    }
  }
`;

const FilterContainer= styled.section`
display:flex;
gap:12px;
justify-content: center;
padding-bottom: 16px;
`;

export const Button= styled.button`
background:#FFBD59;
border:none;
border-radius:5px;
color:#393646;
padding: 6px 12px;
cursor: pointer;
&:hover{
  background-color:#D9D9D9;
}
`;

