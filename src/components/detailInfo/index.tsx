import React, { useEffect, useState } from "react";
import { Divider, Image } from "antd";

import styles from "./index.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DetailComponent() {
  const [productList1, setproductList1] = useState<any>([]);
  useEffect(() => {
    const a = async () => {
      const  res = await axios.get("/users/findinfo");
      console.log(res)
      setproductList1(res.data.result.data)

    };
    a();
    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      {productList1.map((item) => {
        return (
          <div className={styles.warper} key={item.id}>
            <Image
              className={styles.image}
              width={200}
              src={item["touristRoutePictures"][0].url}
            ></Image>
            <div className={styles.contentWarper}>
              <p className={styles.title}>{item["title"]}</p>
              <div className={styles.content}>
                <p>{item["price"]}</p>
                <h1>4.9分</h1>
                <Divider type="vertical" />
                <Link to="/ticket">订票</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
