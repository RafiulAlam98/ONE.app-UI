/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from "antd";
import { useForm } from "react-hook-form";
import styles from "@/styles/SignUp.module.css";

const signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
          <label style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}>
            Email
          </label>
          <input
            {...register("email", { required: "Email Address is required" })}
            placeholder="Enter Email "
            style={{
              marginBottom: 12,
              width: "100%",
              height: "24px",
              borderRadius: "4px",
            }}
            type="email"
            className={styles.customInput}
          />
          <label style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}>
            Password
          </label>
          <input
            {...register("password", { required: true })}
            placeholder="Enter Password"
            style={{
              marginBottom: 12,
              width: "100%",
              height: "24px",
              borderRadius: "4px",
            }}
            type="password"
            className={styles.customInput}
          />
          {errors.exampleRequired && <span>Password Required</span>}
          <label style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}>
            Phone{" "}
          </label>
          <input
            {...register("phoneNumber")}
            placeholder="Enter Phone Number"
            style={{
              marginBottom: 12,
              width: "100%",
              height: "24px",
              borderRadius: "4px",
            }}
            type="text"
            className={styles.customInput}
          />

          <input
            style={{
              backgroundColor: "#059862",
              border: "none",
              color: "white",
              padding: 8,
              marginTop: 8,
              marginBottom: 8,
              fontSize: 14,
              borderRadius: 6,
              width: 100,
            }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default signup;


