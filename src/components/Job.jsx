import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

const Job = ({ data }) => (
  <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={5}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={2}>
      <Button>
        <BiHeart />
      </Button>
    </Col>
    <Col xs={2}>
      <Button>remove</Button>
    </Col>
  </Row>
);

export default Job;
