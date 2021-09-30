import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LandingPageCard from "./LandingPageCard";
import "./LandingPage.css";
import { Post } from "./PostType";
import { appContext } from "./AppContext";
import { ProductService } from "./ProductService";

function LandingPage() {
  const [postList, setPosts] = useState<Post[]>([]);
  const { searchQuery } = useContext(appContext);

  ProductService.getAllProducts().then((response) => response.data).then((result) => setPosts(result));

  return (
    <>
      <div className="App">
        <Container className="allContainer">
          <Row>
            {postList
              .filter((value) => {
                return (
                  value.title.toLowerCase().includes(searchQuery) ||
                  !searchQuery
                );
              })
              .map((post: Post) => {
                return (
                  <>
                    <Col md={4}>
                      <LandingPageCard
                        id={post.id}
                        img_src={post.img_src}
                        title={post.title}
                        price={post.price}
                        desc={post.desc}
                      />
                    </Col>
                  </>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
