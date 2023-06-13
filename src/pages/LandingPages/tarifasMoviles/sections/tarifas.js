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
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function Tarifas() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid title="TARIFAS" container justifyContent="flex-start">
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="gradient"
                  icon="star"
                  title="La de 6 euros"
                  description="Llamadas ilimitadas + 8GB de datos"
                  descriptionTwo="6€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="contained"
                  icon="star"
                  title="La de 9 euros"
                  description="Llamadas ilimitadas + 21GB de datos"
                  descriptionTwo="9€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="gradient"
                  icon="star"
                  title="La de 11 euros"
                  description="Llamadas ilimitadas + 27GB de datos"
                  descriptionTwo="11€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="contained"
                  icon="star"
                  title="La de 12 euros"
                  description="Llamadas ilimitadas + 60GB de datos"
                  descriptionTwo="12€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="gradient"
                  icon="star"
                  title="Triple Gigas 1"
                  description="Llamadas ilimitadas + 153GB de datos"
                  descriptionTwo="12,90€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="contained"
                  icon="star"
                  title="Triple Gigas 2"
                  description="Llamadas ilimitadas + 180GB de datos"
                  descriptionTwo="13,90€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={12}>
              <MKBox mb={5}>
                <FilledInfoCard
                  variant="gradient"
                  icon="star"
                  title="Triple Gigas 3 - La Brutal"
                  description="Llamadas ilimitadas + 270GB de datos"
                  descriptionTwo="17,90€ al mes"
                />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Tarifas;
