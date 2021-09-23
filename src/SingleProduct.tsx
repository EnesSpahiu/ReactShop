import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import SingleCard from "./SingleCard";
import "./SingleProduct.css";

type Post = {
  id: number;
  price: number;
  title: string;
  desc: string;
  img_src: string;
};

type Postid = {
  id: string;
};

function SingleProduct() {
  const [postItem, setPostItem] = useState<Post>({} as Post);

  const { id } = useParams<Postid>();

  useEffect(() => {
    fetch("http://localhost:3001/posts/" + id)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPostItem(myJson);
      });
  }, [id]);

  return (
    <>
      <div className="App">
        <Container className="singleContainer">
          <SingleCard
            id={postItem.id}
            img_src={postItem.img_src}
            title={postItem.title}
            price={postItem.price}
            desc={postItem.desc}
          />
        </Container>

        <div className="footer">
          <div className="">
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
