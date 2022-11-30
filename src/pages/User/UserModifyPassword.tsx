import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { string } from "zod"
import UserInput from "../../components/Input";

export default function UserModifyPassword(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const inputValueHandler = (event: React.FormEvent): void => {
    const { name, value } = event.target as HTMLInputElement;

    setInputValue((prventValue) => ({ ...prventValue, [name]: value }));
  };
  return (
    <div className=" flex flex-col items-center  py-40">
      <form action="#" className="flex w-1/3 max-w-md flex-col pt-4">
        <h1 className="text-center  text-4xl">修改密碼</h1>

        <UserInput
          title="密碼"
          inputType="password"
          name="password"
          id="password"
          inputPlaceHolder="請輸入 8 位以上英數字元，且包含各一個大小寫英文的密碼"
          inputValueHandler={inputValueHandler}
          inputValue={inputValue}
        />
        <UserInput
          title="確認密碼"
          inputType="password"
          name="confirmPassword"
          id="confirmPassword"
          inputPlaceHolder=""
          inputValueHandler={inputValueHandler}
          inputValue={inputValue}
        />
        <button
          type="button"
          onClick={() => {
            axios
              .post(
                `https://petcity.rocket-coding.com/user/resetpassword?guid=${
                  id as string
                }`,
                {
                  NewPassword: inputValue.password,
                  ConfirmedPassword: inputValue.confirmPassword,
                }
              )
              .then((res) => {
                console.log(res);
                navigate("/login");
              })
              .catch((err) => {
                console.log(err);
                throw new Error(err);
              });
          }}
          className="mt-8 rounded-full bg-second py-2 text-white"
        >
          送出
        </button>

        <div className=" relative text-center">
          {/* <div
            className="after:1/2 my-4 before:absolute before:top-1/2 before:left-4 
          before:h-0.5 before:w-5/12 before:bg-gray-300 before:content-[''] after:absolute after:right-4 
          after:top-1/2 after:h-0.5 after:w-5/12 after:bg-gray-300 after:content-['']"
          >
            或
          </div> */}
        </div>
      </form>
    </div>
  );
}
