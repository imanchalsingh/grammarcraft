import {
  Dialog,
  Typography,
  DialogContent,
  Divider,
  Button,
} from "@mui/material";
import Logo from "./logo.png";
import React from "react";
import DialogActions from "@mui/material/DialogActions";

const CommonPopup = (props: any) => {
  return (
    <Dialog fullScreen open={props.open}>
      <div>
        <img style={{ width: "350px" }} src={Logo} alt="" />
      </div>

      <Divider />
      <DialogContent className="content">
        <Typography sx={{ fontFamily: "Marhey" }} variant="h4">
          {props.data.topic}
        </Typography>
        <Typography sx={{ fontFamily: "Acme" }} variant="h5">
          "{props.data.definition}"
        </Typography>
        <Typography
          sx={{
            fontFamily: "Marhey",
            color: "#e60000",
            textDecoration: "underline",
            marginTop: "20px",
          }}
          variant="h4"
        >
          Rules:
        </Typography>
        <ul>
          {props.data.rules &&
            props.data.rules.map((item: any) => {
              return (
                <li>
                  <Typography variant="h6" sx={{ fontFamily: "Acme" }}>
                    {item}
                  </Typography>
                </li>
              );
            })}
        </ul>
        <Typography
          sx={{
            fontFamily: "Marhey",
            color: "#e60000",
            textDecoration: "underline",
            marginTop: "20px",
          }}
          variant="h4"
        >
          Examples:
        </Typography>
        <ul>
          {props.data.examples &&
            props.data.examples.map((item: any) => {
              return (
                <li>
                  <Typography variant="h6" sx={{ fontFamily: "Acme" }}>
                    {item}
                  </Typography>
                </li>
              );
            })}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.setOpen(false);
          }}
          sx={{
            fontFamily: "Acme",
            color: "#002e4d",
          }}
        >
          Go Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommonPopup;
