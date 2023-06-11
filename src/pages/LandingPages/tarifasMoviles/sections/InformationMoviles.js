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

// Material Kit 2 React examples
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function InformationMoviles() {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            variant="contained"
            icon="star"
            title="La de 9 euros"
            description="LLamadas ilimitadas + 21 GB de datos"
            descriptionTwo="8,90€ al mes"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            variant="gradient"
            icon="star"
            title="La de 11 euros"
            description="Llamadas ilimitadas + 27 GB de datos"
            descriptionTwo="10,90€ al mes"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            icon="star"
            title="La de 12 euros"
            description="Llamadas ilimitadas + 60 GB de datos"
            descriptionTwo="11,90€ al mes"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            variant="gradient"
            icon="star"
            title="Triple Gigas 1"
            description="Llamadas ilimitadas + 150 GB de datos"
            descriptionTwo="13,90€ al mes"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            icon="star"
            title="Triple Gigas 2"
            description="LLamadas ilimitadas + 180 GB de datos"
            descriptionTwo="15,90€ al mes"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FilledInfoCard
            variant="gradient"
            icon="star"
            title="Triple Gigas 3 la Brutal"
            description="Llamadas ilimitadas + 270 GB de datos"
            descriptionTwo="18,90€ al mes"
          />
        </Grid>
        {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1664913920468-e04086b46b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            title="Tenemos lo que necesitas"
            description="Contamos con la cobertura de red Movistar, Vodafone y Orange."
            action={{
              type: "internal",
              route: "pages/company/about-us", // RECUERDA CREAR ESTA SECCIÓN PARA QUE ENRUTE ALLÍ
              color: "info",
              label: "TE FALTA ENRUTAR",
            }}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default InformationMoviles;
