import { Link, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

const Navigation = ({ onClick }) => {
  const location = useLocation();

  const isActiveLink = (link) => {
    console.log(location.pathname === link);
    return location.pathname === link;
  };
  return (
    <Stack
      align={["flex-start", "flex-start", "center"]}
      justify="center"
      spacing={[4, 4, 10]}
      direction={["column", "column", "row"]}
    >
      <Link
        fontWeight={isActiveLink("/") ? 700 : 300}
        as={ReactRouterLink}
        to="/"
        onClick={onClick}
      >
        Home
      </Link>
      <Link
        fontWeight={isActiveLink("/about") ? 700 : 300}
        as={ReactRouterLink}
        to="/about"
        onClick={onClick}
      >
        About
      </Link>
      <Link
        fontWeight={isActiveLink("/grants") ? 700 : 300}
        as={ReactRouterLink}
        to="/grants"
        onClick={onClick}
      >
        Grants
      </Link>
      <Link
        fontWeight={isActiveLink("/proposals") ? 700 : 300}
        as={ReactRouterLink}
        to="/proposals"
        onClick={onClick}
      >
        DAO
      </Link>

      <Link
        fontWeight={isActiveLink("/faq") ? 700 : 300}
        as={ReactRouterLink}
        to="/faq"
        onClick={onClick}
      >
        FAQ
      </Link>
    </Stack>
  );
};

export default Navigation;
