// import React, { useState, useRef } from "react";
// import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CssBaseline from "@mui/material/CssBaseline";
// import StarIcon from "@mui/icons-material/StarBorder";
// import Typography from "@mui/material/Typography";
// import GlobalStyles from "@mui/material/GlobalStyles";
// import Container from "@mui/material/Container";
// import MobileStepper from "@mui/material/MobileStepper";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const tiers = Array.from({ length: 99 }, (_, i) => i + 1).map((number) => ({
//   title: `Plano ${number}`,
//   price: number,
//   description: [
//     `${number} usuários incluídos`,
//     `${number} GB de armazenamento`,
//     "Acesso ao centro de ajuda",
//     "Suporte por e-mail",
//   ],
//   buttonText: `Inscreva-se por ${number}`,
//   buttonVariant: "outlined",
// }));

// const defaultTheme = createTheme();
// export default function Pricing() {
//   const sliderRef = useRef(null);
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Número de cards a serem exibidos ao mesmo tempo
//     slidesToScroll: 1,
//   };

//   const theme = useTheme();
//   const [coins, setCoins] = useState(0);
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setCoins(coins + 1);
//     sliderRef.current.slickNext();
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     setCoins(coins - 1);
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <GlobalStyles
//         styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
//       />
//       <CssBaseline />
//       {/* Hero unit */}
//       <Container
//         disableGutters
//         maxWidth="sm"
//         component="main"
//         sx={{ pt: 8, pb: 6 }}
//       >
//         <Typography
//           component="h1"
//           variant="h2"
//           align="center"
//           color="text.primary"
//           gutterBottom
//           fontFamily="Silkscreen, sans-serif"
//           border="solid 1px"
//           sx={{ whiteSpace: "nowrap" }}
//         >
//           INCERT COINS: {coins}
//         </Typography>
//         <Typography
//           variant="h5"
//           align="center"
//           color="text.secondary"
//           component="p"
//         >
//           Quickly build an effective pricing table for your potential customers
//           with this layout. It&apos;s built with default MUI components with
//           little customization.
//         </Typography>
//       </Container>

//       <Container maxWidth="md" component="main">
//         <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
//           {tiers.map((tier) => (
//             <div
//               key={tier.title}
//               style={{ display: "flex", justifyContent: "center" }}
//             >
//               <Card sx={{ maxWidth: 345, minWidth: 250, width: "90%" }}>
//                 <CardHeader
//                   title={tier.title}
//                   subheader={tier.subheader}
//                   titleTypographyProps={{ align: "center" }}
//                   action={tier.title === "Pro" ? <StarIcon /> : null}
//                   subheaderTypographyProps={{ align: "center" }}
//                   sx={{
//                     backgroundColor: (theme) =>
//                       theme.palette.mode === "light"
//                         ? theme.palette.grey[200]
//                         : theme.palette.grey[700],
//                   }}
//                 />
//                 <CardContent>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "baseline",
//                       mb: 2,
//                     }}
//                   >
//                     <Typography
//                       component="h2"
//                       variant="h3"
//                       color="text.primary"
//                     >
//                       ${coins}
//                     </Typography>
//                     <Typography variant="h6" color="text.secondary">
//                       /mo
//                     </Typography>
//                   </Box>
//                   <ul>
//                     {tier.description.map((line) => (
//                       <Typography
//                         component="li"
//                         variant="subtitle1"
//                         align="center"
//                         key={line}
//                       >
//                         {line}
//                       </Typography>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </Slider>
//       </Container>

//       <Container>
//         <MobileStepper
//           variant="progress"
//           steps={100}
//           position="static"
//           activeStep={activeStep}
//           sx={{ width: "100%", flexGrow: 1 }}
//           nextButton={
//             <Button
//               size="small"
//               onClick={handleNext}
//               disabled={activeStep === 99}
//             >
//               Next
//               {theme.direction === "rtl" ? (
//                 <KeyboardArrowLeft />
//               ) : (
//                 <KeyboardArrowRight />
//               )}
//             </Button>
//           }
//           backButton={
//             <Button
//               size="small"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//             >
//               {theme.direction === "rtl" ? (
//                 <KeyboardArrowRight />
//               ) : (
//                 <KeyboardArrowLeft />
//               )}
//               Back
//             </Button>
//           }
//         />
//       </Container>
//     </ThemeProvider>
//   );
// }
import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './pages/insertCoins/style.css'
const Pricing = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.card'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });
  }, []);

  const updateCoins = (amount) => {
    setCoins(amount);
  };

  return (
    <div>
      <div className="coin-display">
        <h1>MOEDAS INSERT: {coins}</h1>
      </div>
      <div className="container">
        <div className="card" onMouseOver={() => updateCoins(100)}>
          <div className="content">
            <h2>01</h2>
            <h3>Pacote Inicial</h3>
            <p>
              Desbloqueie o básico com o Pacote Inicial! Receba <strong>100</strong> Moedas InCert para iniciar sua aventura.
            </p>
            <a href="link_de_pagamento_para_pacote_inicial">Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(250)}>
          <div className="content">
            <h2>02</h2>
            <h3>Pacote Avançado</h3>
            <p>
              Eleve seu jogo com o Pacote Avançado! Ganhe <strong>250</strong> Moedas InCert e vantagens exclusivas dentro do jogo.
            </p>
            <a href="link_de_pagamento_para_pacote_avancado">Comprar Agora</a>
          </div>
        </div>
        <div className="card" onMouseOver={() => updateCoins(500)}>
          <div className="content">
            <h2>03</h2>
            <h3>Coleção Master</h3>
            <p>
              Mergulhe na experiência de jogo definitiva com a Coleção Master! Aproveite incríveis <strong>500</strong> Moedas InCert e itens raros no jogo.
            </p>
            <a href="link_de_pagamento_para_colecao_master">Comprar Agora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
