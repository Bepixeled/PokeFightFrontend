import axios from "axios";

export const useAxios = () => {
  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getData };
};

export default useAxios;
