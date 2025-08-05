"use client";

import { useEditorStore } from "@/context/editorStore";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDown,
  CodeIcon,
  ImageIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  MinusIcon,
  PlusIcon,
  Redo2,
  SearchIcon,
  SpellCheck,
  UnderlineIcon,
  Undo2,
  UploadIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { type Level } from "@tiptap/extension-heading";
import { useState } from "react";
import { TextColorButton } from "./textColorButton";
import { HighLightColorButton } from "./hightlightColorButton";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    Icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        Icon: Undo2,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        Icon: Redo2,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Spell Check",
        Icon: SpellCheck,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        Icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italic",
        Icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        Icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
  ];

  const ToolbarButton = ({
    label,
    Icon,
    onClick,
  }: {
    label: string;
    onClick: () => void;
    Icon: LucideIcon;
  }) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={onClick}
              className="flex items-center justify-center w-7 h-6 shrink-0 rounded-sm border border-white cursor-pointer"
            >
              <Icon className="size-4 text-white" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const FontFamilyButton = () => {
    const fonts = [
      { name: "Arial" },
      { name: "Verdana" },
      { name: "Tahoma" },
      { name: "Trebuchet MS" },
      { name: "Times New Roman" },
      { name: "Georgia" },
      { name: "Garamond" },
      { name: "Courier New" },
      { name: "Brush Script MT" },
    ];

    return (
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <DropdownMenuTrigger asChild>
              <TooltipTrigger asChild>
                <button
                  style={{
                    fontFamily:
                      editor?.getAttributes("textStyle").fontFamily || "Arial",
                  }}
                  className="px-2 w-[150px] py-1 border border-white rounded-sm text-white text-sm flex items-center justify-between gap-2 whitespace-nowrap"
                >
                  {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                  <ChevronDown className="size-4" />
                </button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <TooltipContent>
              <p>Font Family</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent>
          {fonts.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={() =>
                editor?.chain().focus().setFontFamily(item.name).run()
              }
              style={{ fontFamily: item.name }}
              className="text-sm text0-white"
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  // const HeadingLevelButton = () => {
  //   const headings = [
  //     {
  //       label: "Normal text",
  //       value: 0,
  //       fontSize: "16px",
  //     },
  //     {
  //       label: "Heading 1",
  //       value: 1,
  //       fontSize: "32px",
  //     },
  //     {
  //       label: "Heading 2",
  //       value: 2,
  //       fontSize: "28px",
  //     },
  //     {
  //       label: "Heading 3",
  //       value: 3,
  //       fontSize: "25px",
  //     },
  //     {
  //       label: "Heading 4",
  //       value: 4,
  //       fontSize: "20px",
  //     },
  //     {
  //       label: "Heading 5",
  //       value: 5,
  //       fontSize: "16px",
  //     },
  //   ];

  //   const getCurrentHeading = () => {
  //     for (let level = 1; level <= 5; level++) {
  //       if (editor?.isActive("heading", { level })) {
  //         return `Heading ${level}`;
  //       }
  //     }
  //     return "Normal Text";
  //   };

  //   return (
  //     <DropdownMenu>
  //       <TooltipProvider>
  //         <Tooltip>
  //           <DropdownMenuTrigger asChild>
  //             <TooltipTrigger asChild>
  //               <button className="px-2 py-1 border border-white rounded-sm text-sm text-white flex items-center justify-between gap-2 whitespace-nowrap">
  //                 {getCurrentHeading()}
  //                 <ChevronDown className="size-4" />
  //               </button>
  //             </TooltipTrigger>
  //           </DropdownMenuTrigger>
  //           <TooltipContent>
  //             <p>Heading</p>
  //           </TooltipContent>
  //         </Tooltip>
  //       </TooltipProvider>
  //       <DropdownMenuContent className="flex flex-col gap-2">
  //         {headings.map((item) => (
  //           <DropdownMenuItem
  //             key={item.value}
  //             onClick={() => {
  //               if (item.value === 0) {
  //                 editor?.chain().focus().setParagraph().run();
  //               } else {
  //                 editor
  //                   ?.chain()
  //                   .focus()
  //                   .toggleHeading({ level: item.value as Level })
  //                   .run();
  //               }
  //             }}
  //             style={{ fontSize: item.fontSize }}
  //             className="text-primary"
  //           >
  //             {item.label}
  //           </DropdownMenuItem>
  //         ))}
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   );
  // };

  const FontSizeButton = () => {
    const currentFontSize = editor?.getAttributes("textStyle").fontSize
      ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
      : "16";

    const [fontSize, setFontSize] = useState(currentFontSize);
    const [inputValue, setInputValue] = useState(fontSize);
    const [isEditing, setIsEditing] = useState(false);

    const updateFontSize = (newSize: string) => {
      const size = parseInt(newSize);
      if (!isNaN(size) && size > 0 && size <= 200) {
        editor?.chain().focus().setFontSize(`${size}px`).run();
        setFontSize(newSize);
        setInputValue(newSize);
        setIsEditing(false);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
      updateFontSize(inputValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        updateFontSize(inputValue);
        editor?.commands.focus();
      }
    };

    const increament = () => {
      const newSize = parseInt(fontSize) + 1;
      updateFontSize(newSize.toString());
    };
    const decreament = () => {
      const newSize = parseInt(fontSize) - 1;
      if (newSize > 0) {
        updateFontSize(newSize.toString());
      }
    };

    return (
      <div className="flex items-center gap-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={decreament}
                className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm border border-white hover:bg-primary"
              >
                <MinusIcon className="size-4 text-white" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Decrease</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="h-7 w-10 text-sm rounded-sm border border-white text-white text-center bg-transparent focus:outline-none focus:ring-0"
          />
        ) : (
          <button
            onClick={() => {
              setIsEditing(true);
              setFontSize(currentFontSize);
            }}
            className="h-7 w-10 text-sm rounded-sm bg-transparent cursor-text border border-white text-center text-white"
          >
            {currentFontSize}
          </button>
        )}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={increament}
                className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm border border-white hover:bg-primary"
              >
                <PlusIcon className="size-4 text-white" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Increase</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  const ImageButton = () => {
    const { editor } = useEditorStore();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const onChange = (src: string) => {
      editor?.chain().focus().setImage({ src }).run();
    };
    const onUpload = () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          // const imageUrl = URL.createObjectURL(file);
          // console.log
          onChange(`/${file.name}`);
        }
      };
      input.click();
    };
    const handleImageUrlSubmit = () => {
      if (imageUrl) {
        onChange(imageUrl);
        setImageUrl("");
        setIsDialogOpen(false);
      }
    };
    return (
      <>
        <DropdownMenu>
          <TooltipProvider>
            <Tooltip>
              <DropdownMenuTrigger asChild>
                <TooltipTrigger asChild>
                  <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm">
                    <ImageIcon className="size-4 text-white" />
                  </button>
                </TooltipTrigger>
              </DropdownMenuTrigger>
              <TooltipContent>
                <p>Image</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={onUpload}>
              <UploadIcon className="size-4 mr-2" />
              Upload
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
              <SearchIcon className="size-4 mr-2" />
              Paste image url
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insert image URL</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Insert image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleImageUrlSubmit();
                }
              }}
            />
            <DialogFooter>
              <Button onClick={handleImageUrlSubmit}>Insert</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  const AlignButton = () => {
    const { editor } = useEditorStore();

    const alignments = [
      {
        label: "Align Left",
        value: "left",
        Icon: AlignLeftIcon,
      },
      {
        label: "Align Center",
        value: "center",
        Icon: AlignCenterIcon,
      },
      {
        label: "Align Right",
        value: "right",
        Icon: AlignRightIcon,
      },
    ];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm text-white">
            <AlignLeftIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
          {alignments.map(({ label, value, Icon }) => (
            <button
              key={value}
              onClick={() => editor?.chain().focus().setTextAlign(value).run()}
              className="flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-100/80"
            >
              <Icon className="size-4" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const CodeButton = () => {
    const { editor } = useEditorStore();
    const handleCodeToggle = () => {
      if (!editor) return;

      if (editor.isActive("codeBlock")) {
        editor.commands.toggleCodeBlock();
      } else {
        editor.commands.setCodeBlock();
      }
    };
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={handleCodeToggle}
              className="flex items-center justify-center w-7 h-7 shrink-0 rounded-sm border border-white cursor-pointer"
            >
              <CodeIcon className="size-4 text-white" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Code</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const ListButton = () => {
    const { editor } = useEditorStore();

    const lists = [
      {
        label: "Bullet List",
        Icon: ListIcon,
        isActive: () => editor?.isActive("bulletList"),
        onClick: () => editor?.chain().focus().toggleBulletList().run(),
      },
      {
        label: "Ordered List",
        Icon: ListOrderedIcon,
        isActive: () => editor?.isActive("orderedList"),
        onClick: () => editor?.chain().focus().toggleOrderedList().run(),
      },
    ];

    return (
      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <DropdownMenuTrigger asChild>
              <TooltipTrigger asChild>
                <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm border border-white px-1.5 overflow-hidden text-sm">
                  <ListIcon className="size-4 text-white" />
                </button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
              {lists.map(({ label, Icon, onClick, isActive }) => (
                <button
                  key={label}
                  onClick={onClick}
                  className={cn(
                    "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-100/80",
                    isActive() && "bg-neutral-200/80"
                  )}
                >
                  <Icon className="size-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </DropdownMenuContent>
            <TooltipContent>
              <p>Lists</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DropdownMenu>
    );
  };

  return (
    <div className="flex items-center justify-start gap-3 border-b border-gray-400 py-2 px-3 overflow-x-scroll xl:overflow-x-hidden custom-scrollbar overflow-y-hidden bg-primary">
      {sections[0].map((item, index) => (
        <ToolbarButton key={index} {...item} />
      ))}
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      {sections[1].map((item, index) => (
        <ToolbarButton key={index} {...item} />
      ))}
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <TextColorButton />
      <AlignButton />
      <FontSizeButton />
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <FontFamilyButton />
      {/* <HeadingLevelButton /> */}
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <ListButton />
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <CodeButton />
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <HighLightColorButton />
      <Separator
        orientation="vertical"
        className="bg-gray-400 w-[1px] h-[20px]"
      />
      <ImageButton />
    </div>
  );
};
