import { useState } from "react";
import { useSignUpEmailPassword } from "@nhost/react";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    signUpEmailPassword(email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName,
      },
    });
  };

  if (isSuccess) {
    return <Navigate to="/" replace={true} />;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className="">
      <div className="">
        {needsEmailVerification ? (
          <p className="">
            Please check your mailbox and follow the verification link to verify
            your email.
          </p>
        ) : (
          <form onSubmit={handleOnSubmit} className="">
            <div className="">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={disableForm}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={disableForm}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disableForm}
              required
            />
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disableForm}
              required
            />

            <button type="submit" disabled={disableForm} className="">
              {isLoading ? <div>loading...</div> : "Create account"}
            </button>

            {isError ? <p className="">{error?.message}</p> : null}
          </form>
        )}
      </div>

      <p className="">
        Already have an account?{" "}
        <Link to="/sign-in" className="">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
