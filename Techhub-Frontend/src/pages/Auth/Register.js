import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../components/SharedComponents/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/reducers/auth/authSlice";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import signin from "../../Images/login.jpg";
import Loader from "../../components/SharedComponents/Loader";
import { getUserInfo } from "../../redux/reducers/user/userSlice";

import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const navigate = useNavigate();
  // const [recaptchaValue, setRecaptchaValue] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const { isLoading, user, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate only alphabets for the name field
    if (name === "name" && !/^[A-Za-z\s]+$/.test(value)) {
      return; // If the input contains anything other than alphabets, do not update state
    }

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const selectImageHandler = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImagePrev(fileReader.result);
      setImage(file);
    };
  };
  // const handleRecaptchaChange = (value) => {
  //   setRecaptchaValue(value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (recaptchaValue) {
    const userData = new FormData();
    // Handle form submission based on isSignUp prop
    const { name, email, password, confirmPassword } = formData;

    if (!name) {
      return toast.error("Name is Required.");
    }
    if (!email) {
      return toast.error("Email is Required.");
    }
    if (!password) {
      return toast.error("Password is Required.");
    }
    if (!confirmPassword) {
      return toast.error("Confirm Password is Required.");
    }

    if (password !== confirmPassword) {
      return toast.error("Password and Confirm Password Not Matched.");
    }

    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("file", image);

    console.log(image);

    dispatch(register(userData));
    // }

    // else {
    //   return toast.error("ReCaptcha is Required !...");
    // }
  };

  // Side Effects
  useEffect(() => {
    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && message) {
      toast.success(message);
      dispatch(reset());
    }

    if (user) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
      }
    }
  }, [isError, message, user, isLoading]);

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="d-flex vh-100">
            <div className="w-40 d-none d-md-block">
              <img
                src={signin} // Replace with actual image source
                className="img-fluid"
                alt="Login Illustration"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  marginTop: "10px",
                }}
              />
            </div>
            <Container className="w-50 authWidth p-5">
              <Row>
                <h3
                  className="mb-4"
                  style={{
                    color: "#A45EE9",
                    textAlign: "center",
                    marginTop: "-60px",
                  }}
                >
                  Sign Up
                </h3>
                <Col>
                  <Form
                    onSubmit={handleSubmit}
                    style={{ borderRadius: "10px", marginTop: "-50px" }}
                  >
                    <Avatar
                      src={imagePrev}
                      alt={"Error"}
                      style={{
                        borderRadius: "50%",
                        maxWidth: "40px",  // Ensure the image doesn't exceed this width
                        maxHeight: "40px",
                        objectFit: "contain",
                      }}
                    />
                    <div style={{ marginTop: "-30px" }}></div>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />

                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            border: "2px solid #A45EE9",
                            outline: "none",
                            fontSize: "1.5rem",
                            color: "#A45EE9",
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            border: "2px solid #A45EE9",
                            outline: "none",
                            fontSize: "1.5rem",
                            color: "#A45EE9",
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="profilePicture">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/jpeg, image/png, img/gif"
                        onChange={selectImageHandler}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      className="mt-3"
                      style={{ backgroundColor: "#A45EE9", borderRadius: "8px" }}
                    >
                      Register
                    </Button>

                    <div className="forgot-password mt-2">
                      <p style={{ color: "#A45EE9" }}>
                        Already have an account?{" "}
                        <Link
                          to="/Login"
                          style={{
                            marginLeft: "10px",
                            color: "#A45EE9",
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                        >
                          Login Here
                        </Link>
                      </p>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
