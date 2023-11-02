/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, Spin, Typography } from "antd";
import { useForm } from "react-hook-form";
import styles from "@/styles/SignUp.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  useUserLoginMutation,
  useUserSignupMutation,
} from "@/redux/slice/api/userApi";
import { useState } from "react";

import { useRouter } from "next/router";
import { storeUserInfo } from "@/services/auth.service";
const { Text } = Typography;

const signup = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userSignUp] = useUserSignupMutation();
  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await userSignUp(data);
      if (res.data.statusCode === 200) {
        const res = await userLogin(data);
        if (res.data.statusCode === 200) {
          const { accessToken, role, email } = res.data.data;
          storeUserInfo(accessToken, role, email);
          setSuccessMessage(res.message);
          if (accessToken) {
            router.push("/user-profile");
          } else {
            router.push("/login");
          }

          setLoading(false);
          return <Alert message={res.message} type="success" />;
        }
      }
    } catch (error) {
      <Alert message={error.message} type="error" />;
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Link style={{ textDecoration: "none" }} href="/">
        {" "}
        <h4 style={{ margin: "8px 8px" }}>
          <ArrowLeftOutlined /> Back
        </h4>
      </Link>
      {loading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
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
              <label
                style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
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
              <label
                style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}
              >
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
              <label
                style={{ fontSize: 14, fontWeight: 600, color: "#6E58D8" }}
              >
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

              {loading === true ? (
                <Spin style={{ padding: 8 }} tip="Progressing" size="small">
                  <div className="content" />
                </Spin>
              ) : (
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
                  className={styles.formBtn}
                  type="submit"
                />
              )}
              {errorMessage ? (
                <Text
                  style={{ display: "inline-block", padding: "8px" }}
                  type="danger"
                >
                  {errorMessage}
                </Text>
              ) : (
                <Text
                  style={{ display: "inline-block", padding: "8px" }}
                  type="success"
                >
                  {successMessage}
                </Text>
              )}
              <Link style={{ textDecoration: "none" }} href="/login">
                <Typography className={styles.formText}>
                  Already have an account? Sign In
                </Typography>{" "}
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default signup;


