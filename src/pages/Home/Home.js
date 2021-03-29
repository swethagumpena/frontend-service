import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../utils/api.utils';
import LoginSchema from '../../utils/validators/LoginSchema';

const Home = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    formData: {
      email: '',
      password: '',
    },
    submitted: false,
  });

  const userLogin = async (formData) => {
    const userInfo = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const data = await loginUser(userInfo);
      if (data) {
        localStorage.setItem(
          'token',
          data.token,
        );
      }
      history.push('/content');
    } catch (e) {
      setError(e.message);
    }
  };

  const formik = useFormik({
    initialValues: loginForm.formData,
    validationSchema: LoginSchema,
    onSubmit: async (formData) => {
    //   setLoading(true);
      await userLogin(formData);
      //   setLoading(false);
      if (!error) setLoginForm({ formData, submitted: true });
    },
  });

  //   let check = null;
  //   if (!loading && loginForm.submitted) {
  //     if (error) {
  //       check = <div>email and password do not match</div>;
  //     }
  //   }

  return (
    <div>
      <h1>
        Login
      </h1>
      <>
        <p>Enter your details</p>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              placeholder="Swetha"
              onChange={formik.handleChange}
            />
          </label>
          {formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}

          <label htmlFor="password">
            Password:
            <input
              name="password"
              type="password"
                // placeholder="Gumpena"
              onChange={formik.handleChange}
            />
          </label>
          {formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
          {error === 'email and password do not match' ? <div>email and password do not match</div> : <div />}
          {error === 'no user found with given email' ? <div>No user found with given email. Please register</div> : <div />}
          {/* <div>
            {check}
          </div> */}
          <button type="submit">Login</button>
        </form>
      </>

    </div>
  );
};

export default Home;
