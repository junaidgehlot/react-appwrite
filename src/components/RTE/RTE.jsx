import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-ful">
      {label && <label htmlFor="">{label}</label>}
      <Controller
        name={name || "Content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autoLink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "acchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
