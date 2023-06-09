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
                description="Tenemos tarifas móviles que van desde los 6 euros para ahorrar, hasta los 400GB para los que lo quieren todo."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
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
                  description="100MB de fibra simétrica por tan sólo 21 euros al mes."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 300MB"
                  description="300MB de fibra simétrica por tan sólo 25 euros al mes."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 600MB"
                  description="600MB de fibra simétrica por tan sólo 30 euros al mes."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 1GB"
                  description="1GB de fibra simétrica por tan sólo 38 euros al mes."
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
