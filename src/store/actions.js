import axios from "axios";
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "START" });
    return axios
      .get("https://api.covid19api.com/summary")
      .then((response) => response.data)
      .then((data) => dispatch({ type: "FetchData", data: data }))
      .catch((err) => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
  };
};

export const onSearch = (data, country) => {
  //console.log("data: ", data, country);
  let filteredData = data?.Countries?.filter((e) =>
    e.Country.includes(country)
  );
  return (dispatch) => {
    dispatch({
      type: "FetchData",
      data: { ...data, filteredData: filteredData },
    });
  };
};
