import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import RepoCard from "../component/RepoCard";
import { Result } from "antd";
import { Link } from "react-router-dom";

function Workpage() {
  const [data, setData] = useState([]);
  const [isDataAvailable, setisDataAvailable] = useState<boolean>(true);

  useEffect(() => {
    const fetchMyWorkData = async () => {
      await axios
        .get(`https://api.github.com/users/poomphat/repos`)
        .then((res) => {
          const data = res.data;
          setData(data);
        })
        .catch((error) => {
          console.log(error); //Logs a string: Error: Request failed with status code 404
          setisDataAvailable(false);
        });
    };
    fetchMyWorkData();
  }, []);
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-start pb-8 font-bold">
          <span className="text-3xl sm:text-4xl md:text-9xl font-san text-white">
            <span className="text-green-500">My</span> Work
          </span>
        </div>

        {isDataAvailable ? (
          <Row gutter={16}>
            {data?.map((item) => {
              return (
                <Col className="mb-4" xl={6}>
                  <RepoCard Repo={item} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Result
            status="403"
            extra={
            <>
            <p className="text-4xl text-white font-sans">Data not available</p>
            <p className="text-lg text-white font-sans">Sorry, Plaease try again later</p>
            <Link to="/" className="text-xl font-sans">Back Home</Link>
            </>
            }
          />
        )}
      </div>
    </>
  );
}

export default Workpage;
