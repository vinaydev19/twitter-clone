import React from "react";
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { getMyProfile, getOtherUsers, getUser } from "../redux/userSlice";
import toast from "react-hot-toast";

function LeftSide() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="w-[24px] ml-4"
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
            alt="twitter-logo"
          />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <CiHome size={"24px"} />
            <h1 className="font-bold ml-2 text-lg">Home</h1>
          </Link>
          <Link className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <CiHashtag size={"24px"} />
            <h1 className="font-bold ml-2 text-lg">Explore</h1>
          </Link>
          <Link className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <IoIosNotifications size={"24px"} />
            <h1 className="font-bold ml-2 text-lg">Notification</h1>
          </Link>
          <Link
            to={`/profile/${user?._id}`}
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <CgProfile size={"24px"} />
            <h1 className="font-bold ml-2 text-lg">Profile</h1>
          </Link>
          <div
            onClick={logOutHandler}
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <CiLogout size={"24px"} />
            <h1 className="font-bold ml-2 text-lg">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
