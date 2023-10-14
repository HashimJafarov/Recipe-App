import { Rate } from "antd";
const Rating = ({ rate }) => {
  return <Rate disabled allowHalf defaultValue={rate} />;
};

export default Rating;
