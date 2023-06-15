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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image

function Contacto() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "pages/landing-pages/presentation",
          label: "HOME",
          color: "info",
        }}
        sticky
      />

      {/* <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            lg={6}
            xl={4}
            ml={{ xs: "auto", lg: 6 }}
            mr={{ xs: "auto", lg: 6 }}
          >
            <MKBox
              bgColor="white"
              borderRadius="xl"
              shadow="lg"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              mt={{ xs: 20, sm: 18, md: 20 }}
              mb={{ xs: 20, sm: 18, md: 20 }}
              mx={3}
            >
              <MKBox
                variant="gradient"
                bgColor="info"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={2}
                mt={-3}
              >
                <MKTypography variant="h3" color="white">
                  Contacto
                </MKTypography>
              </MKBox>
              <MKBox p={3}>
                <MKTypography variant="body2" color="text" mb={3}>
                  Aquí podrás encontrar diferentes métodos de contacto.
                </MKTypography>
                <MKBox width="100%" component="form" method="post" autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Nombre"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label="Email"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        type=""
                        variant="standard"
                        label="Teléfono"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MKInput
                        variant="standard"
                        label="What can we help you?"
                        placeholder="Describe your problem in at least 250 characters"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        fullWidth
                        rows={6}
                      />
                    </Grid>
                  </Grid>
                  <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                    <MKButton type="submit" variant="gradient" color="info">
                      Send Message
                    </MKButton>
                  </Grid>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
        </Grid>
      </Grid> */}
      <MKBox p={15} minHeight="75vh">
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} lg={4}>
            <FilledInfoCard
              variant="contained"
              icon="call"
              title="Llámanos aquí   "
              description="986 061 400"
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <FilledInfoCard
              variant="contained"
              icon="smartphone"
              title="También puedes llamarnos aquí"
              description="698 905 120"
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <FilledInfoCard
              variant="contained"
              icon="email"
              title="Nuestro correo"
              description="rafael.garcia@ponwifi.es"
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <FilledInfoCard
              variant="contained"
              icon="schedule"
              title="Nuestro horario"
              description="Lu-Vi 9.00-14.30 <> 16.30-20.30"
              descriptionTwo="Sab 10h-14h"
            />
          </Grid>
        </Grid>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Contacto;
