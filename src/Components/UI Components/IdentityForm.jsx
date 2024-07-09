import { Link } from "react-router-dom";
export default function IdentityForm({ currentPage }) {
  return (
    <div className="auth-content">
      <div className="auth undefined">
        <div className="auth-main">
          <h3>
            {currentPage === "signup"
              ? "Sign up to Salinaka"
              : "Sign in to Salinaka"}
          </h3>
          <form action="#">
            {currentPage === "signup" ? (
              <div className="auth-field">
                <div className="input-group">
                  <label className="label-input" for="fullname">
                    * Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    className="input-form undefined"
                    name="fullname"
                    placeholder="John Doe"
                    value=""
                    style={{ textTransform: "capitalize" }}
                    required
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="auth-field">
              <div className="input-group">
                <label className="label-input" for="email">
                  * Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-form undefined"
                  name="email"
                  placeholder="test@example.com"
                  value=""
                />
              </div>
            </div>
            <div className="auth-field">
              <div className="input-group">
                <label className="label-input" for="password">
                  * Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input-form undefined"
                  name="password"
                  placeholder="Your Password"
                  value=""
                />
              </div>
            </div>
            <br />
            <div
              className={
                currentPage === "signup"
                  ? "auth-field auth-action auth-action-signup"
                  : "auth-field auth-action"
              }
            >
              {currentPage === "signup" ? (
                ""
              ) : (
                <Link
                  to={"/forgot_password"}
                  style={{ textDecoration: "underline" }}
                >
                  <span>Forgot password?</span>
                </Link>
              )}
              <button className="button auth-button" type="submit">
                {currentPage === "signup" ? "Sign Up" : "Sign In"}
                <span
                  aria-label="arrow-right"
                  className="anticon anticon-arrow-right"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="arrow-right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="auth-divider">
          <h6>OR</h6>
        </div>
        <div className="auth-provider">
          <button
            className="button auth-provider-button provider-facebook"
            type="button"
          >
            <span aria-label="facebook" className="anticon anticon-facebook">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="facebook"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path>
              </svg>
            </span>
            Continue with Facebook
          </button>
          <button
            className="button auth-provider-button provider-google"
            type="button"
          >
            <span aria-label="google" className="anticon anticon-google">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="google"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
              </svg>
            </span>
            Continue with Google
          </button>
          <button
            className="button auth-provider-button provider-github"
            type="button"
          >
            <span aria-label="github" className="anticon anticon-github">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="github"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </span>
            Continue with GitHub
          </button>
        </div>
      </div>
      <div className="auth-message">
        <span className="auth-info">
          <strong>Already have an account?</strong>
        </span>
        <button
          className="button button-small button-border button-border-gray"
          type="button"
        >
          {currentPage === "signup" ? (
            <Link to={"/signin"}>Sign in</Link>
          ) : (
            <Link to={"/signup"}>Sign up</Link>
          )}
        </button>
      </div>
    </div>
  );
}
