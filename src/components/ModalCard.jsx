import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ModalCard = ({ isModalOpen, handleCancel, selectedItem }) => {
  return (
    <Modal
      title={selectedItem ? selectedItem.name : "Details"}
      open={isModalOpen}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      onCancel={handleCancel}
      className="modal"
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {selectedItem
          ? selectedItem.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  alt=""
                />
              </SwiperSlide>
            ))
          : ""}
      </Swiper>

      <p className="ingredients">Ingredients</p>
      {selectedItem
        ? selectedItem.ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))
        : ""}
      <p className="instructions">Instructions</p>
      {selectedItem
        ? selectedItem.instructions.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))
        : ""}
    </Modal>
  );
};

export default ModalCard;
