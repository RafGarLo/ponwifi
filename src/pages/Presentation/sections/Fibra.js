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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Fibra() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="wifi"
                title={
                  <>
                    Internet en
                    <br />
                    todas sus versiones
                  </>
                }
                description="Internet Fibra a la máxima velocidad en zonas de cobertura, e Internet WIMAX donde no llega el resto."
              />
              <RotatingCardBack
                image={bgBack}
                title="¡No te ovides de tu móvil!"
                description="Tenemos tarifas móviles que van desde los 6 euros para ahorrar, hasta los 300GB para los que lo quieren todo."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contacto",
                  label: "Te esperamos",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 100MB"
                  descriptionService="100MB de fibra simétrica"
                  price="21€"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 300MB"
                  descriptionService="300MB de fibra simétrica"
                  price="25€"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="electric_bolt"
                  title="Internet Fibra 600MB"
                  descriptionService="600MB de fibra simétrica"
                  price="30€"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="electric_bolt"
                  title="Internet Fibra 1GB"
                  descriptionService="1GB de fibra simétrica"
                  price="38€"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Fibra;
