import React from "react";
import { useCookies } from "react-cookie";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

const CookieConsent = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const declineCookieConsent = () => {
    setCookie("cookieConsent", false, { path: "/" });
  };

  return (
    <div className="cookie-consent">
      <MKBox>
        <MKTypography>
          Esta página web utiliza cookies. Puede aceptar, acceder a nuestra política de privacidad,
          o declinar cookies.{" "}
          <a href={"/pages/landing-pages/politicaPrivacidad"}>Política de Privacidad</a>
        </MKTypography>
      </MKBox>
      <MKButton onClick={giveCookieConsent}>Aceptar</MKButton>
      <MKButton onClick={declineCookieConsent}>Declinar</MKButton>
    </div>
  );
};

export default CookieConsent;
