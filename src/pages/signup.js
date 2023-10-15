/* eslint-disable react-hooks/rules-of-hooks */
import { UserOutlined } from "@ant-design/icons";
import { Col, Input, Row, Typography, Watermark } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

const signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div
      style={{
        backgroundColor: "",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "8px 16px",
          borderRadius: 10,
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#6E58D8",
            fontWeight: 600,
            paddingBottom: 16,
          }}
        >
          <span style={{ borderBottom: "2px solid" }}> SIGN UP</span>
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="Email or Phone"
            style={{
              marginBottom: 8,
              width: "100%",
              height: "24px",
              borderRadius: "4px",
            }}
          />
          <input
            {...register("password", { required: true })}
            placeholder="Email or Phone"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            style={{ marginBottom: 8 }}
          />
          {errors.exampleRequired && <span>Password Required</span>}
          
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default signup;
