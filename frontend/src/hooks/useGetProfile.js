import axios from "axios";
import React, { useEffect } from "react";
import { USER_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getMyProfile(res.data.user));
      } catch (error) {
        console.log(`error on get user profile || ${error} `);
      }
    };
    fetchMyProfile();
  }, [id]);
};

export default useGetProfile;
