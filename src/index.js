import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import axios from "axios";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { generateWeekRange } from "./components/data";
import logo from "./img/logo.jpg";
import WetherData from "./components/WeatherData";
const { Header, Content, Footer } = Layout;
const days = generateWeekRange();

const Componenta = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 1;

  useEffect(() => {
    const getWeather = async () => {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=50.43&lon=30.51&units=metric&appid=221767eb29eee4be32af3f35e5918d3a"
      );
      setData(res.data.daily);
    };
    getWeather();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {days.map((el, index) => {
              return (
                <Menu.Item
                  onClick={() => paginate(index + 1)}
                  data={index + 1}
                  key={el}
                >{`${moment(el).format("dddd")}`}</Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
          <div className="site-layout-content">
            <WetherData data={currentPosts} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </>
  );
};

ReactDOM.render(<Componenta />, document.getElementById("container"));
