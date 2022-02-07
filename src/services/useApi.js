import axios from "axios";

export const getUserInformation = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}`
  );
};

export const getUserPerformance = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/performance`
  );
};
export const getUserActivity = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/activity`
  );
};

export const getUserAverage = () => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/user/${process.env.REACT_APP_USER_ID}/average-sessions`
  );
};
