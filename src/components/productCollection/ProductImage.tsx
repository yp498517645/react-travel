/**
 * 产品卡片
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Typography } from "antd";
import { Link } from 'react-router-dom'

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductImage: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title,
}) => {
  const { t } = useTranslation()
  return (
    <Link to={`detail`}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} { t('home_page.start_from') }
        </Typography.Text>
      </div>
    </Link>
  );
};
