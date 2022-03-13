import React from "react";
import { Header, Footer } from "../../components";
import { Descriptions } from "antd";
import DetailComponent from "../../components/detailInfo";

export default function Detail() {
  return (
    <>
      <Header />
      <DetailComponent />
      <Footer />
    </>
  );
}
