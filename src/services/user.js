import axios from "axios";

export const getUserInformation = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}`
  );
};
