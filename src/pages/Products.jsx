import { useState } from "react";
import { Space } from "antd";
import { recipe } from "../MockData/mockData";
import ProductCard from "../components/ProductCard";
import ModalCard from "../components/ModalCard";
const Products = () => {
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
    <section className="products">
      <div className="container">
        <Space wrap>
          {recipe.map((recipe) => {
            return (
              <ProductCard
                key={recipe.id}
                handleCard={handleCard}
                recipe={recipe}
                showModal={showModal}
              />
            );
          })}
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

export default Products;
