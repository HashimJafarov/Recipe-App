import { useState } from "react";
import { connect } from "react-redux";
import { recipe } from "../MockData/mockData";
import { Space } from "antd";
import ProductCard from "../components/ProductCard";
import ModalCard from "../components/ModalCard";
const Favorites = ({ favorites }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  const handleCard = (item) => {
    setSelectedItem(item);
  };
  return (
    <section className="favorites">
      <div className="container">
        <Space wrap>
          {favorites.length ? (
            favorites.map((favor) => {
              const findFavorites = recipe.find(
                (recipe) => recipe.id === favor.id
              );
              return (
                <ProductCard
                  key={findFavorites.id}
                  recipe={findFavorites}
                  handleCard={handleCard}
                  showModal={showModal}
                />
              );
            })
          ) : (
            <div className="image" style={{ width: "1200px" }}>
              <img
                src="https://www.healthkart.com/connect/wp-content/uploads/2022/07/900x500_thumbnail_HK-Empty-Calories-Definition-Food-List-and-Examples.png"
                alt="logo"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>
          )}
          <ModalCard
            handleCancel={handleCancel}
            selectedItem={selectedItem}
            isModalOpen={isModalOpen}
          />
        </Space>
      </div>
    </section>
  );
};
const mapToStore = (a) => a;
export default connect(mapToStore)(Favorites);
