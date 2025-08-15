import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
  { link: 'https://facebook.com', iconName: 'icofont-facebook', className: 'facebook' },
  { link: 'https://twitter.com', iconName: 'icofont-twitter', className: 'twitter' },
  { link: 'https://linkedin.com', iconName: 'icofont-linkedin', className: 'linkedin' },
  { link: 'https://instagram.com', iconName: 'icofont-instagram', className: 'instagram' },
  { link: 'https://pinterest.com', iconName: 'icofont-pinterest', className: 'pinterest' },
];

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || `Signup failed with status ${res.status}`);
      }

      // success → redirect
      navigate("/admin-create-user");
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={'Register Now'} curPage={'Sign Up'} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>

            <form className="account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <button className="lab-btn" type="submit" disabled={loading}>
                  <span>{loading ? "Submitting..." : btnText}</span>
                </button>
              </div>
            </form>

            <div className="account-bottom">
              <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
              <span className="or"><span>or</span></span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a href={val.link} className={val.className} target="_blank" rel="noopener noreferrer">
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
