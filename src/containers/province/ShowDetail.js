import React from "react";
import MyModal from "../../components/MyModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubDistricts, fetchVillages } from "../../redux/actions";

const ShowDetail = ({ button, selName }) => {
  // const token = sessionStorage.getItem("token");

  const dispatch = useDispatch();

  // const handleDistChange = (e, { value }) => {
  //   dispatch(fetchSubDistricts(value));
  // };

  // const optionsDist = districts.map((item) => ({
  //   key: item.id,
  //   text: item.nama,
  //   value: item.id,
  // }));

  return (
    <MyModal
      userName={selName}
      button={button}
      // optionsDist={optionsDist}
      // handleDistChange={handleDistChange}
    />
  );
};

export default ShowDetail;
