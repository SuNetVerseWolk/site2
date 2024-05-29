import getApi from "api/get";
import React from "react";
import LogInBtn from "./LogInBtn";

const UserBtn = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = getApi({
    key: ["user"],
    path: "/users/" + localStorage.getItem("id"),
  });

  return (
    <>
      {localStorage.getItem("id") ? (
        isLoading ? (
          "Загрузка..."
        ) : !isError ? (
          <button>{user.login}</button>
        ) : (
          <LogInBtn />
        )
      ) : (
        <LogInBtn />
      )}
    </>
  );
};

export default UserBtn;
