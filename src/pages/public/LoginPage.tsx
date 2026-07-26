import { GraduationCap, LockKeyhole, Mail } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  type Location,
} from "react-router-dom";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../features/auth/authSlice";
import "./LoginPage.scss";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginErrors = {
  email?: string;
  password?: string;
};

type LoginLocationState = {
  from?: Location;
};

function LoginPage() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as LoginLocationState | null;

  const redirectPath = locationState?.from?.pathname || "/dashboard";

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<LoginErrors>({});

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", {
        replace: true,
      });
    }
  }, [isLoggedIn, navigate]);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      email: event.target.value,
    });

    if (errors.email) {
      setErrors({
        ...errors,
        email: undefined,
      });
    }
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      password: event.target.value,
    });

    if (errors.password) {
      setErrors({
        ...errors,
        password: undefined,
      });
    }
  }

  function handleRememberChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      rememberMe: event.target.checked,
    });
  }

  function validateForm() {
    const newErrors: LoginErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formIsValid = validateForm();

    if (!formIsValid) {
      return;
    }

    dispatch(
      login({
        name: "you",
        email: form.email.trim(),
      }),
    );

    navigate(redirectPath, {
      replace: true,
    });
  }

  if (isLoggedIn) {
    return (
      <section className="login-page">
        <div className="login-page__logged-in">
          <span className="login-page__main-icon">
            <GraduationCap size={28} />
          </span>

          <h1>You are already signed in</h1>

          <p>Continue to your private learning dashboard.</p>

          <Link className="login-page__dashboard-link" to="/dashboard">
            Go to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="login-page">
      <div className="login-page__heading">
        <span className="login-page__main-icon">
          <GraduationCap size={28} />
        </span>

        <h1>Welcome back</h1>

        <p>Sign in to access your courses and dashboard.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="login-form__group">
          <label htmlFor="email">Email address</label>

          <div
            className={
              errors.email
                ? "login-form__field login-form__field--error"
                : "login-form__field"
            }
          >
            <Mail size={18} />

            <input
              id="email"
              type="email"
              value={form.email}
              placeholder="you@example.com"
              autoComplete="email"
              onChange={handleEmailChange}
            />
          </div>

          {errors.email && (
            <span className="login-form__error">{errors.email}</span>
          )}
        </div>

        <div className="login-form__group">
          <label htmlFor="password">Password</label>

          <div
            className={
              errors.password
                ? "login-form__field login-form__field--error"
                : "login-form__field"
            }
          >
            <LockKeyhole size={18} />

            <input
              id="password"
              type="password"
              value={form.password}
              placeholder="Enter your password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
          </div>

          {errors.password && (
            <span className="login-form__error">{errors.password}</span>
          )}
        </div>

        <div className="login-form__options">
          <label className="login-form__remember">
            <input
              type="checkbox"
              checked={form.rememberMe}
              onChange={handleRememberChange}
            />

            <span>Remember me</span>
          </label>

          <button className="login-form__forgot" type="button">
            Forgot password?
          </button>
        </div>

        <button className="login-form__submit" type="submit">
          Sign in
        </button>

        <div className="login-form__divider">
          <span>Don&apos;t have an account?</span>
        </div>

        <button className="login-form__create" type="button">
          Create a free account
        </button>
      </form>

      <p className="login-page__demo">
        Demo credentials: any valid email and password with at least 6
        characters.
      </p>
    </section>
  );
}

export default LoginPage;
