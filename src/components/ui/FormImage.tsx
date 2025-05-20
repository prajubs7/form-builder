import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, type ChangeEvent } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  const [fileNames, setFileNames] = useState<File[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const data = Array.from(event.target.files);
      setFileNames(data);
      console.log(data);
    }
  };
  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => handleChange(event)}
          multiple
        />
      </Button>
      <List>
        {fileNames.map((data, index) => (
          <ListItem key={index}>
            <ListItemText>{data.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
