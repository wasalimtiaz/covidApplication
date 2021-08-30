import React, { useState, useEffect } from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import LayoutTable from "./layoutTable";
import { connect } from "react-redux";
import { onSearch } from "../store/actions";

const SearchBox = (props) => {
  const { onDataSearch, data } = props;
  const [val, setVal] = useState("");

  useEffect(() => {
    if (val) {
      onDataSearch(data, val);
    }
  }, [onDataSearch, val]);

  console.log("in search box: ", data);
  return (
    <React.Fragment>
      <Space direction="horizontal">
        <div>
          Search By:{" "}
          <Input
            placeholder="Search Country"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            style={{ width: 200 }}
          />
        </div>
      </Space>
      <LayoutTable />
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return { isLoading: state.isLoading, data: state.data, error: state.error };
};

const mapDispatchprops = (dispatch) => {
  return {
    onDataSearch: (data, country) => dispatch(onSearch(data, country)),
  };
};

export default connect(mapStatetoProps, mapDispatchprops)(SearchBox);
