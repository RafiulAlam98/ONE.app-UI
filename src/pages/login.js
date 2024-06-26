/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Alert, Col, Row, Spin, Typography } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/SignUp.module.css";
import { useUserLoginMutation } from "@/redux/slice/api/userApi";
import { saveDataToBrowser } from "@/helpers/utils/saveData";
import { useRouter } from "next/router";
import { storeUserInfo, storeUserRole } from "@/services/auth.service";
import { ADMIN, USER } from "@/constants/user-constant";
const { Text } = Typography;

const login = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await userLogin(data);
      console.log(res);
      if (res.data.statusCode === 200) {
        const { accessToken, role } = res.data.data;
        storeUserInfo(accessToken);
        storeUserRole(role);
        console.log(res.data.data);
        setSuccessMessage(res.message);
        if (role === USER) {
          router.push("/user-profile");
        } else if (role === ADMIN) {
          router.push("/admin");
        } else {
          router.push("/super-admin");
        }

        setLoading(false);
        return <Alert message={res.message} type="success" />;
      } else {
        console.log(res?.error.data.message);
        setErrorMessage(res?.error.data.message);
      }
    } catch (error) {
      console.log(error);
      <Alert message={error.message} type="error" />;

      setLoading(false);
    }
  };
  console.log(errorMessage);
  return (
    <section>
      <Row justify="space-between">
        <Col className="gutter-row" span={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=sph"
              alt=""
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
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
                }}
              >
                <div
                  style={{
                    maxWidth: 500,
                    margin: "auto",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    padding: "16px 20px",
                    borderRadius: "8px",
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
                    <span style={{ borderBottom: "2px solid" }}> SIGN IN</span>
                  </Typography>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      placeholder="Enter Email "
                      style={{
                        marginBottom: 14,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="email"
                      className={styles.customInput}
                    />
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter Password"
                      style={{
                        marginBottom: 14,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="password"
                      className={styles.customInput}
                    />
                    {errors.exampleRequired && <span>Password Required</span>}

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

                    {errorMessage ? (
                      <Text
                        style={{ padding: "8px", display: "block" }}
                        type="danger"
                      >
                        {errorMessage}
                      </Text>
                    ) : (
                      <Text style={{ padding: "8px" }} type="success">
                        {successMessage}
                      </Text>
                    )}
                    <Link style={{ textDecoration: "none" }} href="/signup">
                      <Typography className={styles.formText}>
                        Not Have an Account? Sign Up
                      </Typography>{" "}
                    </Link>
                  </form>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default login;
