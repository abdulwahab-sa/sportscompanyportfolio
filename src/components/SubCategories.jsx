import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
padding: 20px;
display: flex;
`;




const SubCategories = ({items}) => {
  return (
    <Container>
{items.map((item) => {
    <Product item = {item}/>
})}
<h3>subcat</h3>
    </Container>
  )
}

export default SubCategories