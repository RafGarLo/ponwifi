// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import blackLogoNoBckg from "assets/images/small-logos/blackLogoNoBckg.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Ponwifi Pontevedra",
    image: blackLogoNoBckg,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ponwifi.pontevedra.es/",
    },
  ],
  menus: [
    {
      name: "Nuestra Empresa",
      items: [{ name: "about us", href: "/pages/landing-pages/presentation" }],
    },
    {
      name: "Contacto",
      items: [{ name: "contacto", route: "/pages/landing-pages/contacto" }],
    },
    {
      name: "legal",
      items: [
        {
          name: "Politica de Privacidad",
          href: "/pages/landing-pages/PoliticaPrivacidad",
        },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],

  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
