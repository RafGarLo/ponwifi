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

function FibraPaquetes() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 100MB + Móvil 153GB"
                  description="100MB de fibra simétrica por tan sólo 35 euros al mes."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="electric_bolt"
                  title="Internet Fibra 300MB + Móvil 180GB"
                  description="300MB de fibra simétrica por tan sólo 39 euros al mes."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="electric_bolt"
                  title="Internet Fibra 600MB + Móvil 153GB"
                  description="600MB de fibra simétrica por tan sólo 43 euros al mes."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="network_check"
                  title="Internet Fibra 600MB + Móvil 270GB"
                  description="600MB de fibra simétrica por tan sólo 46 euros al mes."
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="wifi_tethering"
                title={
                  <>
                    Internet + móvil
                    <br />
                    paquetes disponibles
                  </>
                }
                description="Internet Fibra máxima velocidad en zonas de cobertura, y líneas móviles para acompañar."
              />
              <RotatingCardBack
                image={bgBack}
                title="La zona en la que vives varía el precio."
                description="Dependiendo de dónde vivas, siempre buscaremos el mejor precio disponible para tí."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Te esperamos",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FibraPaquetes;
