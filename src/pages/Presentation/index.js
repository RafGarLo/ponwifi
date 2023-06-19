/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useCookies } from "react-cookie";

// Material Kit 2 React examples
//import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import AlertDialogSlide from "components/CookieConsent/cookieConsentTwo";

// Presentation page sections
import Fibra from "pages/Presentation/sections/Fibra";
import FibraPaquetes from "./sections/FibraPaquetes";

// Presentation page components
import TrabajamosContigo from "pages/Presentation/components/trabajamosContigo";

// Routes
import routes from "routes";

// Images
import Blog_Banner_Ponwifi from "assets/images/Blog_Banner_Ponwifi.webp";
import MyNavbar from "examples/Navbars/myNavbar/myNavbar";

function Presentation() {
  // eslint-disable-next-line no-unused-vars
  const [cookies] = useCookies(["cookieConsent"]);
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/presentation",
          color: "light",
          label: "home",
        }}
        sticky
      /> */}
      <MyNavbar />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${Blog_Banner_Ponwifi})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={2}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Ponwifi Pontevedra{" "}
            </MKTypography>
            <MKBox variant="gradient" borderRadius="10px" shadow="5px" opacity={0.7}>
              <MKTypography
                variant="body1"
                color="dark"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                Aquí encontrarás geniales tarifas en telecomunicaciones y gran trato a nuestros
                clientes.
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {!cookies.cookieConsent && <AlertDialogSlide />}
        <Fibra />
        <Container sx={{ mt: 6 }}>
          <TrabajamosContigo />
        </Container>
        <FibraPaquetes />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={routes} />
      </MKBox>
    </>
  );
}

export default Presentation;
