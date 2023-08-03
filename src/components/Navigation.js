import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ShoppingCart} from "@mui/icons-material";
import {Badge} from "@mui/material";
import { IconButton } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#607d8b",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default function Navigation(props) {
  console.log(props)
  return (
    <ThemeProvider theme={theme}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping Guide </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>

          <IconButton color="primary" size="large">
            <Badge badgeContent={props.data.length} color="secondary">
              <ShoppingCart />
            </Badge>  
          </IconButton>
        </Container>
      </Navbar>
    </ThemeProvider>
  );
}
