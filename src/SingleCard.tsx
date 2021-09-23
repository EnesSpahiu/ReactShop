import { Button, Card} from "react-bootstrap";
import "./SingleProduct.css";
import { Post } from "./PostType";

function SingleCard(props: Post) {

    return (
      <Card className="singleCard">
        <Card.Body className="singleBody">
          <Card.Text className="font">{props.id}</Card.Text>
          <Card.Img src={props.img_src} />
          <Card.Title className="font">{props.title}</Card.Title>
          <Card.Text className="font">{props.price} CHF</Card.Text>
          <Card.Text className="font">{props.desc}</Card.Text>
          <Button href="http://localhost:3000/"> Back </Button>
          </Card.Body>
        </Card>
    );
  }

  export default SingleCard;