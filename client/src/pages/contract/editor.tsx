import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
// import History from "@tiptap/extension-history";
import FontFamily from "@tiptap/extension-font-family";
import { FontSizeExtension } from "@/extensions/font-size";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import TextAlign from "@tiptap/extension-text-align";
import { CodeBlock } from "@tiptap/extension-code-block";
import { useEditorStore } from "@/context/editorStore";
import { useEffect } from "react";

interface Props {
  pageNumber: number;
}

export default function Editor({ pageNumber }: Props) {
  const { addHtml, setEditor, html, type } = useEditorStore();
  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
      setEditor(editor);
    },
    onUpdate({ editor }) {
      addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
      setEditor(editor);
    },
    // onDestroy() {
    //   addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
    // },
    onSelectionUpdate({ editor }) {
      addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
      setEditor(editor);
    },
    onFocus({ editor }) {
      addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
      setEditor(editor);
    },
    onContentError({ editor }) {
      addHtml({ key: `page-${pageNumber}`, value: editor.getHTML() });
      setEditor(editor);
    },
    extensions: [
      StarterKit.configure({}),
      FontSizeExtension,
      TextStyle,
      Underline,
      // History,
      FontFamily,
      Color,
      Heading,
      Image,
      ImageResize,
      CodeBlock.configure({
        defaultLanguage: "plaintext",
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: html.find((item) => item.key === `page-${pageNumber}`)?.value,
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1123px] w-[816px] p-6 cursor-text",
      },
    },
  });
  useEffect(() => {
    editor?.commands.setContent(
      html.find((item) => item.key === `page-${pageNumber}`)?.value ?? ""
    );
  }, [type]);

  return <EditorContent editor={editor} />;
}
