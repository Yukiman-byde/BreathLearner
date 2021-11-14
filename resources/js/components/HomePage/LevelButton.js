import React,{useState} from 'react'
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Modal from '@material-ui/core/Modal';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

function LevelButton({title, shows, descs}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = (e) => {
        setOpen(false);
    }

    const body = (
        <ModalBody>
          {shows.map((show,i) => (
              <BodyContent>
              <p>{show}</p><h3>{descs[i]}</h3>
              </BodyContent>
          ))}
        </ModalBody>
    )

    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }

      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
    return (
        <LevelButtonContainer onClick={handleOpen}>
              <p>{title}</p>
            <ExpandMoreIconComponent onClick={handleOpen}/>
            <Modal
                open={open}
                onClick={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </LevelButtonContainer>
    )
}

export default LevelButton;
const LevelButtonContainer = styled.div`
    display: flex;
    background-color: #F5D68E;
    width: 150px;
    height: 80px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
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

const ModalBody = styled.div`
   border: none;
   border-radius: 20px;
   background: #fff;
   max-width: 300px;
   height: 400px;
   background-color: whitesmoke;
   color: gray;

   p {
       background-color: #33EBFF;
       width: 30px;
       height: 30px;
       border-radius: 20px;
       text-align: center;
       align-items: center;
   }
`;

const BodyContent = styled.div`
  display:flex;

  h3 {
      margin-left: 30px;
      background-color: whitesmoke;

  }
  h3:hover{
       background-color: whitesmoke;
   }
`;

