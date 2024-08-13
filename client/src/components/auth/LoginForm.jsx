import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../services/api";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials(result));
    } catch (err) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="email" required />
      <input {...register("password")} type="password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
