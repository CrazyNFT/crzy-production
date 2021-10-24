import { FC, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import {
  makeStyles,
  createStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    container: {
      borderRadius: 4,
      overflow: "hidden",
      height: "100%",
      width: "100%",
    },
    root: {
      height: "100%",
      width: "100%",
      borderRadius: 4,
      backgroundColor: alpha(palette.primary.main, 0.1),
      border: `2px dashed ${palette.primary.main}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    dragActive: {
      backgroundColor: alpha(palette.primary.main, 0.4),
    },
    dragAccept: {
      backgroundColor: alpha(palette.success.main, 0.1),
    },
    dragReject: {
      backgroundColor: alpha(palette.error.main, 0.1),
    },
  })
);

interface ImageDropZoneProps {
  styles?: React.CSSProperties;
  name: string;
}

const ImageDropZone: FC<ImageDropZoneProps> = ({ children, styles, name }) => {
  const classes = useStyles();
  const { setValue } = useFormContext();
  const [file, setFile] = useState(null);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/jpg, image/png",
    maxFiles: 1,
    multiple: false,
    onDrop: async (acceptedFiles: Array<any>) => {
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFile(acceptedFiles[0]);
      setValue(name, acceptedFiles[0]);
    },
  });

  // Revoking the data uris to avoid memory leaks
  useEffect(
    () => () => {
      !!file && URL.revokeObjectURL(file.preview);
    },
    [file]
  );

  return (
    <div className={classes.container}>
      <Paper
        variant="outlined"
        {...getRootProps()}
        className={clsx(classes.root, {
          [classes.dragActive]: isDragActive,
          [classes.dragAccept]: isDragAccept,
          [classes.dragReject]: isDragReject,
        })}
        style={styles}
      >
        <input {...getInputProps()} />
        {children}
      </Paper>
    </div>
  );
};

export default ImageDropZone;
