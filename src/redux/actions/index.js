import {
  getUsers,
} from "../../api/api";
import {
  GET_USERS,
} from "./types";

const fetchUsers = (token) => {
  return async (dispatch) => {
    try {
      const res = await getUsers(token);
      await dispatch({ type: GET_USERS, users: res.data });
    } catch (e) {
      throw e;
    }
  };
};

// const fetchDistricts = (id) => {
//   return async (dispatch) => {
//     try {
//       const res = await getDistricts(id);
//       await dispatch({
//         type: SET_DISTRICTS,
//         districts: res.kota_kabupaten,
//       });
//     } catch (e) {
//       throw e;
//     }
//   };
// };
//
// const fetchSubDistricts = (value) => {
//   return async (dispatch) => {
//     try {
//       const res = await getSubDistricts(value);
//       await dispatch({
//         type: SET_SUBDISTRICTS,
//         subDistricts: res.kecamatan,
//       });
//     } catch (e) {
//       throw e;
//     }
//   };
// };
//
// const fetchVillages = (value) => {
//   return async (dispatch) => {
//     try {
//       const res = await getVillage(value);
//       await dispatch({ type: SET_VILLAGES, villages: res.kelurahan });
//     } catch (e) {
//       throw e;
//     }
//   };
// };

export { fetchUsers };
