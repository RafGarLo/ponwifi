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
    // {
    //   name: "Nuestra Empresa",
    //   items: [
    //     { name: "about us", href: "https://www.creative-tim.com/presentation" },
    //     { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
    //     { name: "blog", href: "https://www.creative-tim.com/blog" },
    //   ],
    // },
    {
      name: "Contacto",
      items: [
        { name: "contacto", href: "https://www.ponwifi.es/pages/landing-pages/contact-us" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
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
