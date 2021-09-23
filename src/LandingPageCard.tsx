import { Button, Card} from "react-bootstrap";
import "./LandingPage.css";
import {useHistory} from "react-router-dom";
import { Post } from "./PostType";

function LandingPageCard(props: Post) {

  let history = useHistory();

    return (
      <Card className="allCard">
        <Card.Body className="allBody">
          <Card.Text className="font">{props.id}</Card.Text>
          <Card.Img src={props.img_src} />
          <Card.Title className="font">{props.title}</Card.Title>
          <Card.Text className="font">{props.price} CHF</Card.Text>
          <Card.Text className="font">{props.desc}</Card.Text>
          <Button onClick={() => history.push("/posts/" + props.id)}> Click Me </Button>
          </Card.Body>
        </Card>
    );
  }

  export default LandingPageCard;