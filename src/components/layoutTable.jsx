import React, { useEffect } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import { columns } from "../constants";

const LayoutTable = (props) => {
  const { onFetchData, data } = props;
  //console.log(props);
  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  const renderTableHeader = (data) => {
    let formattedData = data.map((e) => {
      return {
        key: e.ID,
        country: e.Country,
        cases: e.TotalConfirmed,
        deaths: e.TotalDeaths,
        recovered: e.TotalRecovered,
      };
    });
    return formattedData;
  };

  const dataBase = renderTableHeader(data?.Countries ?? []);

  return (
    <div>
      <br />
      <br />
      <Table
        columns={columns}
        //dataSource={renderTableHeader(data?.Countries ?? [])}
        dataSource={
          data.filteredData ? renderTableHeader(data.filteredData) : dataBase
        }
      />
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

export default connect(mapStatetoProps, mapDispatchprops)(LayoutTable);
