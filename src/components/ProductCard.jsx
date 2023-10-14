import { Card } from "antd";
import { EyeOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import Rating from "./Rating";
import Swal from "sweetalert2";
import { connect } from "react-redux";
const ProductCard = ({
  recipe,
  showModal,
  handleCard,
  dispatch,
  favorites,
}) => {
  const { Meta } = Card;
  const findFavorite = favorites.find((favor) => favor.id === recipe.id);
  const addFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorites, { id: id }],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: `${recipe.name} added to favorite list successfully`,
    });
  };
  const removeFromFavorite = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorites.filter((favor) => favor.id !== id)],
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: `${recipe.name} removed from favorite list successfully`,
    });
  };
  return (
    <Card
      style={{ width: 300 }}
      hoverable
      onClick={() => handleCard(recipe)}
      cover={
        <img
          alt=""
          style={{ height: 200, objectFit: "cover " }}
          src={recipe.images[0]}
        />
      }
      actions={[
        <EyeOutlined onClick={showModal} />,
        !findFavorite ? (
          <HeartOutlined onClick={() => addFavorite(recipe.id)} />
        ) : (
          <HeartFilled onClick={() => removeFromFavorite(recipe.id)} />
        ),
      ]}
    >
      <Meta title={recipe.name} description={<Rating rate={recipe.rate} />} />
    </Card>
  );
};
const mapToStore = (a) => a;
export default connect(mapToStore)(ProductCard);
