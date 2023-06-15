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

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Tarifas Moviles page sections
import Tarifas from "./sections/tarifas";
import TarifasCompartidas from "./sections/tarifasCompartidas";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import tarifas_moviles from "assets/images/tarifas_moviles.webp";
import CenteredFooter from "examples/Footers/CenteredFooter";

function TarifasMoviles() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "pages/landing-pages/presentation",
          label: "Home",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="70vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.2),
              rgba(gradients.dark.state, 0.2)
            )}, url(${tarifas_moviles})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            mt={5}
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Tarifas Móviles
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Aquí tienes una selección de nuestras tarifas. Si no encuentras la tuya, llámanos, que
              tenemos más. Gigas que se acumulan, una gran relación calidad-precio y nuestro soporte
              personalizado. ¿Qué más se puede pedir?
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Tarifas />
        <TarifasCompartidas />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default TarifasMoviles;
