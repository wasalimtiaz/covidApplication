import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import { fetchData } from "../store/actions";
import { connect } from "react-redux";

const Cards = (props) => {
  const { onFetchData, data } = props;
 // console.log(data);
  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Cases" bordered={false}>
            <li>{data?.Global?.TotalConfirmed}</li>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Deaths" bordered={false}>
            <li>{data?.Global?.TotalDeaths}</li>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recovered" bordered={false}>
            <li>{data?.Global?.TotalRecovered}</li>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return { isLoading: state.isLoading, data: state.data, error: state.error };
};

const mapDispatchprops = (dispatch) => {
  return {
    onFetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStatetoProps, mapDispatchprops)(Cards);
