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

export const Contract = () => {
  let PAGE_SIZE = 8;
  let contractTypes = [
    {
      label: "amazon-fba",
      title: "Amazon FBA",
    },
    {
      label: "amazon-private",
      title: "Amazon Private",
    },
    {
      label: "amazon-reinstatement",
      title: "Amazon Reinstatement",
    },
    {
      label: "shopify-automation",
      title: "Shopify Automation",
    },
    {
      label: "walmart-automation",
      title: "Walmart Automation",
    },
    {
      label: "tiktok-automation",
      title: "Tiktok Automation",
    },
  ];

  const { html } = useEditorStore();

  const handleUpateContract = async () => {
    console.log(html);
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <div className="flex items-center gap-4">
        <Button onClick={handleUpateContract}>Update Contract</Button>
        <Button>Create Contract</Button>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
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
