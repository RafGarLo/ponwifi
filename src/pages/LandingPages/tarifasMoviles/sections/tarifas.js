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
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

function Tarifas() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid title="TARIFAS" container justifyContent="flex-start">
            <Grid item xs={12} md={5} lg={4}>
              <MKBox mb={4}>
                <DefaultReviewCard
                  color="transparent"
                  rating={2}
                  name="La de 6 euros"
                  review="Llamadas ilimitadas + 8GB de datos"
                  reviewTwo="6€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="light"
                  name="La de 9 euros"
                  review="Llamadas ilimitadas + 21GB de datos"
                  reviewTwo="9€ al mes"
                  rating={2}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="transparent"
                  rating={2.5}
                  name="La de 11 euros"
                  review="Llamadas ilimitadas + 27GB de datos"
                  reviewTwo="11€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="light"
                  rating={3}
                  name="La de 12 euros"
                  review="Llamadas ilimitadas + 60GB de datos"
                  reviewTwo="12€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="transparent"
                  rating={4}
                  name="Triple Gigas 1"
                  review="Llamadas ilimitadas + 153GB de datos"
                  reviewTwo="12,90€ al mes"
                />
              </MKBox>
            </Grid>

            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="light"
                  rating={4.5}
                  name="Triple Gigas 2"
                  review="Llamadas ilimitadas + 180GB de datos"
                  reviewTwo="13,90€ al mes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard color="transparent" rating={""} name="" review="" reviewTwo="" />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <DefaultReviewCard
                  color="success"
                  rating={5}
                  name="Triple Gigas 3 - La Brutal"
                  review="Llamadas ilimitadas + 270GB de datos"
                  reviewTwo="17,90€ al mes"
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
