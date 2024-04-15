import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MyModal from "../components/MyModal";
import { useState } from "react";

const BlogCard = ({ blogCards, setBlogCards }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const handleModal = (itemTitle, itemBody) => {
    setShowModal(!showModal);
    setTitle(itemTitle);
    setBody(itemBody);
  };

  return (
    <>
      <Container>
        <Row>
          {blogCards.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card className="card text-center my-2">
                <Card.Header
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    {item.title.substring(0, 16)}
                    {item.title.length > 15 ? "..." : ""}
                  </span>
                  <span onClick={() => setBlogCards(item.id)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                  </span>
                </Card.Header>
                <Card.Body style={{ height: "10rem" }}>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    onClick={() => handleModal(item.title, item.body)}
                    variant="warning"
                  >
                    See Details
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {showModal && (
        <MyModal
          title={title}
          body={body}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default BlogCard;

