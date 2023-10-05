import { Component } from "react";
import { Container } from "react-bootstrap";
import{Row,Col} from "react-bootstrap";
import CardMovie from "./CardMovie";

class MovieList extends Component{
    state = {
       movies:[],
       isLoading:false,
       isError:false 
    }

    // MovieUrl= "https://www.omdbapi.com/?apikey=d35b2b10&s=";
    movieQuery=this.props.query;

    //CREAO METODO CHE MI DA UNA RISPOSTA
    getMovies = async () => {
        try {
          let response = await fetch(
            "https://www.omdbapi.com/?apikey=3c39360a&s=" + this.props.query
          );
          if (response.ok) {
            let data = await response.json();
            this.setState({
                //dentro l array movies ci metto data
              movies: data.Search,
              isLoading: false,
            });
          } else {
            console.log("errore nella chiamata");
            this.setState({
              isLoading: false,
              isError: true,
            });
          }
        } catch (error) {
          console.log(error);
          this.setState({
            isLoading: false,
            isError: true,
          });
        }
      };
    
      componentDidMount() {
        this.getMovies();
      }

    render(){
        return(
            <Container className="Bg-card my-5">
            <h2 className="text-white">Results:{this.props.title}</h2>
            <Col>
            <Row className="d-flex flex-row flex-nowrap scrollX">
            {
                this.state.movies.slice(0, 6).map(movie => {
                    return <CardMovie key={movie.imdbID} movie={movie} />
                })
                
            }

            </Row>
            </Col>
            </Container>
        )
    }
}
export default MovieList;