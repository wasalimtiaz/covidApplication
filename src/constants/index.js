export const columns = [
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Cases",
    dataIndex: "cases",
    key: "cases",
    sorter: (a, b) => {
      return a.cases > b.cases;
    },
  },
  {
    title: "Deaths",
    dataIndex: "deaths",
    key: "deaths",
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    key: "recovered",
  },
];
