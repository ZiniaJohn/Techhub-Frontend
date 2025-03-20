import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../Images/login.jpg";
import { login, reset } from "../../redux/reducers/auth/authSlice";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email) {
      return toast.error("Email is Required.");
    }
    if (!password) {
      return toast.error("Password is Required.");
    }

    dispatch(login(formData));
  };

  useEffect(() => {
    if (user && message) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
        toast.success(message);
        dispatch(reset());
      }
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }

    if (user) {
      if (user.role === "admin") {
        navigate("/admin/analytics");
      } else {
        navigate("/");
      }
    }
  }, [user, isError, message, dispatch]);

  return (
    <div className="d-flex vh-100">
        <div className="w-40 d-none d-md-block">
            <img 
                src={signin}  
                className="img-fluid h-100 w-100"
                alt="Login Illustration" 
                style={{ objectFit: 'cover', 
                  width: "70%",  // Adjust width (reduce size)
                  height: "70%", // Adjust height (reduce size)
                  objectFit: "cover",
                  marginTop: "55px" }}// Moves the image down }}
            />
        </div>
        <div className="w-50 d-flex align-items-center justify-content-center">
            <div className="p-4" style={{ width: '300px',marginTop: "80px" }}>
                <h1 className="mb-4" style={{  color: "#A45EE9",textAlign:"center",marginTop: "35px" }}>
                Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange} 
                            required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange} 
                                required
                            />
                            <Button
                                variant="outline-secondary"
                                 onClick={() => setShowPassword(!showPassword)}
                                 style={{border: "2px solid #A45EE9",  
                                  outline: "none", fontSize: "1.5rem", color: "#A45EE9",}}>
                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                        </InputGroup>
                    </Form.Group>
                    
                    <Button type="submit"
                     className="btn btn-success w-100 rounded-3"
                     style={{ backgroundColor: "#A45EE9", borderRadius: "8px" }}
                     >
                        Login
                    </Button>
                </Form>
                <div className="mt-3">
                <span style={{ color: "#A45EE9" }}>Don't have an account?{" "}<Link to="/register" 
                style={{color:"#A45EE9" ,fontWeight: "bold", textDecoration: "underline"}}>
                 Sign Up</Link>
                </span>
                <p className="mt-2"><Link to="/forget-password" 
                  style={{ color: "#A45EE9", fontWeight: "bold", textDecoration: "underline" }}>
                    Forgot Password?</Link></p>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;
