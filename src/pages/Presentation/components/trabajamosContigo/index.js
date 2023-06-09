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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TrabajamosContigo() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Trabajamos contigo
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Fibra - Móvil - Fijo - TV - Seguridad
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Contamos con un amplio portfolio de acuerdos y proveedores que nos permiten ofrecerte
            tarifas de internet, televisión y móvil baratas, con el mejor servicio.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TrabajamosContigo;
