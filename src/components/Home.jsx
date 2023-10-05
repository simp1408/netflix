import Container from "react-bootstrap/esm/Container";
import Dropdown from 'react-bootstrap/Dropdown';

const home = ()=>{
    return(
        <Container>
          
            <div className="d-flex align-items-center p-3 mb-5">
               

                <span className="fs-3 text-white">Tv Shows</span>
                <div className="dropdown">

                    <Dropdown className="ml-3">
                    <Dropdown.Toggle variant="dark" id="dropdown-basic"className="border border-1 rounded-0 pl-5">
                        Genres
                    </Dropdown.Toggle >

                    <Dropdown.Menu className="">
                        <Dropdown.Item  href="#/action-1">Anime</Dropdown.Item>
                        <Dropdown.Item   href="#/action-2">Fantasy</Dropdown.Item>
                        <Dropdown.Item   href="#/action-3">Horror</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
          
            </div>
              
        </Container>
    )

}
export default home;