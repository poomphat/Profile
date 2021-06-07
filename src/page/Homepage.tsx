import React from "react";
import { Row, Col, Divider, Avatar } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import ProfilePic from "../asset/profile.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-start pb-8 font-bold">
          <span className="text-5xl sm:text-6xl md:text-9xl font-san text-white">
            <span className="text-green-500">Poomphat...</span> Wawongmoon
          </span>
        </div>

        <Row gutter={16}>
          <Col className="mb-4" xl={6}>
            <div className="bg-gray-600 p-5 rounded-xl shadow-md text-white">
              <Avatar size={100} icon="P" src={ProfilePic} />
              <p className="text-base font-semibold">Poomphat Wawongmoon</p>
              <Divider style={{ color: "white", borderColor: "white" }}>
                Profile
              </Divider>
              <p className="text-base font-semibold">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
          </Col>
          <Col className="mb-4" xl={18}>
            <Row gutter={16}>
              <Col className="mb-4" xl={24}>
                <div className="bg-gray-600 p-5 rounded-xl shadow-md text-white backdrop-opacity-100 backdrop-filter">
                  <p className="text-2xl font-sans font-bold">
                    Test Tailwind CSS
                  </p>
                  <hr className="text-black m-3" />
                  <p className="text-base font-semibold">
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.”
                  </p>
                </div>
              </Col>
              <Col className="mb-4" xl={24}>
                <div className="flex p-8 font-bold">
                  <span className="text-xl sm:text-2xl md:text-5xl font-sans  items-center flex text-white space-x-4">
                    <span> My work </span>
                    <ArrowRightOutlined />{" "}
                    <Link to="/mywork" className="text-green-500 mb-0">
                      Click here
                    </Link>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Homepage;
