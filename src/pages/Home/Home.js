import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../utils/api.utils';
import LoginSchema from '../../utils/validators/LoginSchema';
import styles from './Home.module.css';

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
      await userLogin(formData);
      if (!error) setLoginForm({ formData, submitted: true });
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <div className={styles.DesignText}>
          Design APIs fast, Manage content easily.
        </div>
        <img className={styles.peopleImg} src="assets/home-people.svg" alt="home-people" />
      </div>
      <div className={styles.Rectangle}>
        <div className={styles['Login-to-your-CMS-a']}>
          Login to your CMS+ account
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">
            <div className={styles.Email}>Email</div>
            <input
              className={styles.inputBox}
              name="email"
              type="email"
              onChange={formik.handleChange}
            />
          </label>
          {formik.errors.email && (
          <p>{formik.errors.email}</p>
          )}

          <label htmlFor="password">
            <div className={styles.Password}>Password</div>
            <input
              className={styles.inputBox}
              name="password"
              type="password"
              onChange={formik.handleChange}
            />
          </label>
          {formik.errors.password && (
          <p>{formik.errors.password}</p>
          )}
          {error === 'email and password do not match' ? <div>email and password do not match</div> : <div />}
          {error === 'no user found with given email' ? <div>No user found with given email. Please register</div> : <div />}
          <button className={styles.LoginButton} type="submit">Login</button>
          <div className={styles.ForgotPassword}>Forgot Password?</div>
        </form>
      </div>
    </div>
  );
};

export default Home;
