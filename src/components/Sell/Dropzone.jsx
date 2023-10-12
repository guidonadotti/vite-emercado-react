import { useContext, useEffect } from "react";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { SellContext } from "../../contexts/SellContext";

export default function DropzoneImg() {
  const { dropzone } = useContext(SellContext);
  const { files, setFiles } = dropzone;

  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  useEffect(() => console.log(files), [files]);
  return (
    <Dropzone
      name="asdasd"
      localization="ES-es"
      accept="image/*"
      onChange={updateFiles}
      value={files}
      label="Arrastre sus imágenes aquí"
    >
      {files.map((file) => (
        <FileMosaic key={`Imagen-del-dropzone-${file.id}`} {...file} preview />
      ))}
    </Dropzone>
  );
}
