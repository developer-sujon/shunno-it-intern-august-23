//External Lib Import
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import * as yup from "yup";

//Internal Lib Import
import { useLoginMutation } from "../../redux/services/auth.service";

const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const { t } = useTranslation();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "devoloper.sujon@gmail.com",
      password: "pass123456",
    },
    resolver: yupResolver(
      yup.object({
        email: yup
          .string()
          .required(t("email number is required"))
          .email(t("invalid email address")),
        password: yup
          .string()
          .required(t("password is required."))
          .min(8, t("password must be 8 digits long")),
      })
    ),
  });

  /*
   * form handle submit
   */
  const submitForm = (values) => {
    login(values);
  };

  return (
    <form
      className="flex min-h-[70vh] gap-3 justify-center flex-col p-4 "
      onSubmit={handleSubmit(submitForm)}
      onReset={reset}
    >
      <h3 className="text-5xl text-center mb-2 font-bold">{t("login here")}</h3>
      <hr />

      {error && (
        <span className="text-red-500">
          {error?.message || t("something went wrong")}
        </span>
      )}

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="email"
        placeholder={t("email")}
        {...register("email")}
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <input
        className="bg-gray-50 rounded py-1 px-2 border-[1px] focus:outline-sky-500/50"
        type="password"
        placeholder={t("password")}
        {...register("password")}
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <input
        disabled={isLoading}
        className="border-[1px] border-red-100 bg-red-50 text-red-400 rounded font-semibold tracking-wider py-1 cursor-pointer hover:bg-red-100"
        type="submit"
        value={isLoading ? "login..." : t("login")}
      />
      <hr />
      <p className="text-gray-500">
        {`Don't have an account?`}{" "}
        <Link
          className="text-cyan-700 hover:underline hover:text-orange-600"
          to="/auth/register"
        >
          {t("register here")}
        </Link>
      </p>
    </form>
  );
};

export default Login;
