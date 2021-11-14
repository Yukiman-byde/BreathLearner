import React from 'react'
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function CategoryButton({title}) {
    return (
        <CategoryContainer>
            <p>{title}</p>
            <ExpandMoreIconComponent />
        </CategoryContainer>
    )
}

export default CategoryButton;

const CategoryContainer = styled.div`
    border-radius: 20px;
    display: flex;
    background-color: #F5D68E;
    width: 150px;
    height: 80px;
    text-align: center;
    align-items: center;
    cursor: pointer;

    p {
    margin-left: auto;
    margin-right: auto;
    }

    :hover{
      background-color: #F7DDA1;
    }
`;

const ExpandMoreIconComponent = styled(ExpandMoreIcon)`

`;
