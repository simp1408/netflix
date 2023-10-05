
import { Container } from "react-bootstrap"
import MovieList from "./MovieList";

import Home from "./Home";

const Gallery=()=>{
    return(
        <Container className="Bg-card vh-100">
            <Home/>
            <MovieList query="Attack%20on%20Titan" title="Attack On Titan"/>
            <MovieList query="batman" title="Batman"/>
            <MovieList query="marvel" title="Marvel"/>
           
        </Container>
    )
}
export default Gallery;