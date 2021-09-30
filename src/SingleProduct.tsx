import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import SingleCard from "./SingleCard";
import "./SingleProduct.css";
import {ProductService} from "./ProductService"

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

ProductService.getSingleProduct(id).then((response) => response.data).then((result) => setPostItem(result));

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
