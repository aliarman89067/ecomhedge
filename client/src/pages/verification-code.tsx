import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const VerificationCode = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios.get(
        import.meta.env.VITE_API_BASE_URL! + `/api/v1/verify/${id}/${code}`,
        {
          withCredentials: true,
        }
      );
      navigate("/contract-management-cms");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong please try again later.");
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
        <h1 className="text-white text-lg font-semibold">Verify</h1>
        <div className="flex flex-col gap-1">
          <label>
            <span className="text-white text-sm">Code</span>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-9 rounded-md bg-transparent px-3 outline-transparent border border-gray-300 text-white text-base"
            />
          </label>
        </div>
        <Button disabled={isPending} type="submit" variant="secondary">
          {isPending ? "Please Wait..." : "Verify"}
        </Button>
      </form>
    </div>
  );
};

export default VerificationCode;
