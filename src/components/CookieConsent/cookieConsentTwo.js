import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useCookies } from "react-cookie";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const declineCookieConsent = () => {
    setCookie("cookieConsent", false, { path: "/" });
  };
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Esta página web usa cookies"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Puede aceptar, acceder a nuestra política de privacidad, o declinar cookies.{" "}
            <a href={"/pages/landing-pages/politicaPrivacidad"}>Política de Privacidad</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={giveCookieConsent}>Declinar</Button>
          <Button onClick={declineCookieConsent}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
