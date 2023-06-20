import {
  ChakraProvider,
  Image,
  Text,
  Box,
  Card,
  Stack,
  CardBody,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import geoLocation from "../../assets/icon/locatio.png";
import TodaySpecial from "../../assets/todayspecial.png";
import domi from "../../assets/domi.png";
import restaurant1 from "../../assets/restaurant/rest1.png";
import Footer from "../../components/footer/Footer";
import { FaStar } from "react-icons/fa";
import CarruselCategory from "../../components/carruselCategory/CarruselCategory";



const Home = () => {

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 1.2,
    slidesToScroll: 1,
  };

  return (
    <>
      <ChakraProvider>
        <Box display="flex" alignItems="left" flexDirection="column" p={6}>
          <Box display="flex" alignItems="center" p={2}>
            <Image src={geoLocation} alt="Location Icon" w="35px" ml={2} />
            <Box display="flex" flexDirection="column" p={2}>
              <Text color="#FFE031" fontSize="m" fontWeight="bold" mr={2}>
                DELIVER TO
              </Text>
              <Text>882 Well St, New-York</Text>
            </Box>
          </Box>

          {/*............ CARRUSEL ENVIOS......... */}
          <Slider {...settings2}>
            <Box display="flex" flexDirection="row ">
              <Image
                src={TodaySpecial}
                alt="Today Special"
                borderRadius="9px"
                w="325px"
              />
            </Box>
            <Box>
              <Image
                src={domi}
                alt="Domicilio"
                borderRadius="9px"
                w="125px"
                marginLeft="40px"
              />
            </Box>
          </Slider>

          <Text fontSize="s" color="#414141" fontWeight="light" p={3}>
            Restaurants and cafes
          </Text>

          {/*............ CARRUSEL CATEGORIAS......... */}
          <CarruselCategory/>

       
          {/*............ CARD DE RESTAURANTES.......... */}
          <Box
            display="flex"
            alignItems="center"
            w="358px"
            h="106px"
            p={2}
            borderRadius="18px"
            marginTop="40px"
          >
            <Card
              display="flex"
              flexDirection="row"
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                // maxW={{ base: "40%", sm: "300px" }}
                width="167px"
                height="136px"
                src={restaurant1}
                alt="restaurant1"
                borderRadius="10px"
                style={{
                  clipPath: "polygon(100% 0, 100% 15%, 60% 100%, 0 100%, 0 0)",
                }}
                // borderRadius="7% 176% 124% -4%/19% 0% 87% 62%"
              />

              <Stack>
                <CardBody padding="13px" width="224px" padding-top="17px">
                  <Text size="md">Pardes Restaurant</Text>

                  {/* Agregar rating de estrellas */}
                  <Box display="flex" alignItems="center">
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="gray" />
                  </Box>

                  <Text py="2" fontSize="15px" letterSpacing="-0.3px">
                    Work time 09:30 - 23:00
                  </Text>
                  <Text py="0" fontSize="xs" color="#A7A7A7">
                    Before you 4$
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Box>
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default Home;
