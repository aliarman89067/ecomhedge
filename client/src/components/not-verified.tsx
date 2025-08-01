import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NotVerified = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill all the fields.");
      return;
    }
    try {
      setIsPending(true);
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/verify/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        navigate(`/verification/${data.id}`);
      } else {
        toast.error("Email or Password is wrong.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-charcoal max-w-lg w-full p-10 rounded-lg flex flex-col gap-5"
      >
        <h1 className="text-white text-lg font-semibold">Login</h1>
        <div className="flex flex-col gap-1">
          <label>
            <span className="text-white text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-9 rounded-md bg-transparent px-3 outline-transparent border border-gray-300 text-white text-base"
            />
          </label>
          <label>
            <span className="text-white text-sm">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-9 rounded-md bg-transparent px-3 outline-transparent border border-gray-300 text-white text-base"
            />
          </label>
        </div>
        <Button disabled={isPending} type="submit" variant="secondary">
          {isPending ? "Please Wait..." : "Login"}
        </Button>
      </form>
    </div>
  );
};
