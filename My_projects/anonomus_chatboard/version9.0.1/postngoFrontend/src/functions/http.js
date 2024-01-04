import axios from "axios";

// functions/http.js
export const createUser = async (Data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/User`,
      Data
    );
    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUser = async (
  adminUsername,
  adminpassword,
  classroomname,
  classroompassword
) => {
  try {
    let response;
    if (adminUsername) {
      response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/User?adminusername=${adminUsername}&adminpassword=${adminpassword}&classroomname=${classroomname}&classroompassword=${classroompassword}`
      );
    } else {
      response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/User`);
    }

    if (response.status === 200) {
      console.log("User(s) retrieved:", response.data);
      return response.data;
    }
    return null;
  } catch (err) {
    console.error("Error getting user:", err.message);
    return null;
  }
};
