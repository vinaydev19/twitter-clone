import React, { useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Outlet, useNavigate } from "react-router-dom";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";
import useGetMyTweets from "../hooks/useGetMyTweets";

function Home() {
  const { user, otherUsers } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto pt-5">
        <LeftSide />
        <Outlet />
        <RightSide otherUsers={otherUsers} />
      </div>
    </>
  );
}

export default Home;
