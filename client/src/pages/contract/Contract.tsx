import { Toolbar } from "@/pages/contract/toolbar";
import Editor from "./editor";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditorStore } from "@/context/editorStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contractTypes } from "@/constant";
import { Loading } from "@/components/loading";
import { NotVerified } from "@/components/not-verified";
import axios from "axios";
import { toast } from "sonner";

export const Contract = () => {
  const navigate = useNavigate();
  const [isVerify, setIsVerify] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [selectedType, setSelectedType] = useState<{
    label: string;
    title: string;
  }>(contractTypes[0]);
  let PAGE_SIZE = 8;

  const { html, addHtml, resetHtml, changeType } = useEditorStore();

  useEffect(() => {
    const verifyUser = async () => {
      setIsVerify(true);
      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/v1/verify",
          {
            withCredentials: true,
          }
        );

        if (!data.isVerify) {
          setIsVerified(false);
        } else {
          setIsVerified(true);
        }
      } catch (error) {
        toast.error("Something went wrong please try again later");
        console.log(error);
      } finally {
        setIsVerify(false);
      }
    };
    verifyUser();
  }, []);

  useEffect(() => {
    if (!isVerified) return;
    const loadHtml = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/contract/${selectedType.label}`,
          {
            withCredentials: true,
          }
        );

        if (data) {
          const formatedHtml = data.html.map((item: any) => ({
            key: item.key,
            value: item.value,
          }));
          formatedHtml.forEach((item: any) => {
            addHtml(item);
          });
          changeType(selectedType.label);
        } else {
          resetHtml();
          changeType(selectedType.label);
        }
      } catch (error) {
        toast.error("Something went wrong please try again later");
        console.log(error);
      }
    };

    loadHtml();
  }, [selectedType, isVerified]);

  const handleUpateContract = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/contract/update",
        {
          html,
          type: selectedType.label,
        },
        { withCredentials: true }
      );
      console.log(data);
    } catch (error) {
      toast.error("Something went wrong please try again later");
      console.log(error);
    }
  };

  const handleCreateContract = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/contract/create",
        { html, type: selectedType.label },
        { withCredentials: true }
      );
      const { contractId } = data;
      navigate(`/contract/${selectedType.label}/${contractId}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (isVerify) {
    return <Loading />;
  }
  if (!isVerified) {
    return <NotVerified />;
  }

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <div className="flex items-center gap-4">
        <Button onClick={handleUpateContract}>Update Contract</Button>
        <Button onClick={handleCreateContract}>Create Contract</Button>
        <Select
          value={selectedType.label}
          onValueChange={(value) => {
            const targetType = contractTypes.find(
              (item) => item.label === value
            );
            setSelectedType(targetType!);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent className="z-[100]">
            {contractTypes.map((item, index) => (
              <SelectItem key={index} value={item.label}>
                {item.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="fixed top-16 z-[100]">
        <Toolbar />
      </div>
      <div className="flex flex-col gap-5 mt-16">
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <Editor pageNumber={index + 1} />
        ))}
      </div>
    </div>
  );
};
