import { useEditorStore } from "@/context/editorStore";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SketchPicker } from "react-color";
import type { ColorResult } from "react-color";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const HighLightColorButton = () => {
  const { editor } = useEditorStore();
  const [value, setValue] = useState(
    editor?.getAttributes("highlight").color || "#ffffff"
  );

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
    setValue(color.hex);
  };
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm">
                <span className="text-sm text-white">A</span>
                <div
                  style={{ backgroundColor: value }}
                  className="h-1 w-full"
                />
              </button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent>
            <p>Highlight</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="p-2.5">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
