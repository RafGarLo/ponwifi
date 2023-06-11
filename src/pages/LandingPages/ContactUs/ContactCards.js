import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components

// Material Kit 2 React examples

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

function ContactCards() {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <FilledInfoCard icon="call" title="Aquí puedes llamarnos" description="986 061 400" />
        <FilledInfoCard icon="smartphone" title="Teléfono" description="698 905 120" />
        <FilledInfoCard icon="mail" title="Nuestro correo" description="rafael.garcia@ponwifi.es" />
        <FilledInfoCard
          icon="schedule"
          title="Nuestro horario"
          description="Lun-Vi: 9.00-14.30 <> 16.30-20.30"
          descritionTwo="Sa: 10h-14h"
        />
      </Grid>
    </Container>
  );
}

export default ContactCards;
