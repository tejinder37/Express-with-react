import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../services/api";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const result = await signup(data).unwrap();
      if (result.ok) {
        navigate("/login");
      }
      // Handle successful signup
    } catch (err) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        {" "}
        Name
        <input {...register("name")} type="text" required />
      </label>
      <label htmlFor="email">
        {" "}
        Email
        <input {...register("email")} type="email" required />
      </label>
      <label htmlFor="password">
        {" "}
        Password
        <input {...register("password")} type="password" required />
      </label>

      <label htmlFor="phone">
        Mobile Number
        <input {...register("phone")} type="number" required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
