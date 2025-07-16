import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div class="login-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="Spotify Logo"
          class="spotify-logo"
        />
        <h2>Log in to Spotify</h2>

        <div class="login-options">
          <button class="social-btn">Continue with Google</button>
          <button class="social-btn">Continue with Facebook</button>
          <button class="social-btn">Continue with Apple</button>
          <button class="social-btn">Continue with phone number</button>
        </div>

        <form class="login-form">
          <label for="email">Email or username</label>
          <input type="text" id="email" placeholder="Email or username" />
          <button class="continue-btn" type="submit">
            Continue
          </button>
        </form>

        <div class="login-footer">
          <p>
            Don't have an account? <a href="#">Sign up for Spotify</a>
          </p>
        </div>

        <p class="recaptcha-notice">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>
          and
          <a href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </a>
          apply.
        </p>
      </div>
    </div>
  );
};

export default Login;
