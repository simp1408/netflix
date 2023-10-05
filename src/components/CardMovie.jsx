import { Component } from "react";
import {Card,Col} from "react-bootstrap";
import {Button} from "react-bootstrap";


class CardMovie extends Component{
  state={
    isShow:false,
  }

  hoverCard=()=>{
    this.setState({
      isShow:true,
    })
  }

  noHoverCard=()=>{
    this.setState({
      isShow:false
    })
  }

    render(){

        return(
      <Col  xs={12} sm={6} md={2}>
      <Card className="card" onMouseEnter={this.hoverCard} onMouseLeave={this.noHoverCard}>
      <Card.Img className="cardDimension" 
      variant="top" 
      src={this.props.movie.Poster}/>
      {/* quando passo cn il mouse */}
      

      

     
      <Card.Body className="Bg-card">
        <Card.Title className="Bg-card text-white text-truncate">{this.props.movie.Title}</Card.Title>
        <Card.Text className="Bg-card text-white">
        {this.props.movie.Year}
        </Card.Text>
        <Button variant="primary">Details Movie</Button>
      </Card.Body>
    </Card>
    </Col>
        )
    }
}
export default CardMovie;