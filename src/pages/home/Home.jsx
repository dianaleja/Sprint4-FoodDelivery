import {
  ChakraProvider,
  Image,
  Text,
  Box,
  Button,
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
import iconAll from "../../assets/icon/all.png";
import iconHamburguer from "../../assets/icon/hamburguer.png";
import iconPizza from "../../assets/icon/pizza.png";
import iconSalad from "../../assets/icon/ensalada.png";
import iconCoffe from "../../assets/icon/taza-de-cafe.png";
import restaurant1 from "../../assets/restaurant/rest1.png";
import Footer from "../../components/footer/Footer";
import { FaStar } from "react-icons/fa";

const categories = [
  {
    id: 1,
    nombre: "All",
    image: iconAll,
  },
  {
    id: 2,
    nombre: "Fast food",

    image: iconHamburguer,
  },
  {
    id: 3,
    nombre: "Pizzas",

    image: iconPizza,
  },
  {
    id: 4,
    nombre: "Salad",

    image: iconSalad,
  },
  {
    id: 5,
    nombre: "Coffe",

    image: iconCoffe,
  },
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
          <Slider {...settings2}  >
            <Box display="flex" flexDirection="row"   
                  >
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
             
              />
            </Box>
          </Slider>

          <Text fontSize="s" color="#414141" fontWeight="light" p={3}>
            Restaurants and cafes
          </Text>

          {/*............ CARRUSEL CATEGORIAS......... */}

          <Slider {...settings}>
            {categories.map((category) => (
              <Box key={category.id} p={2}>
                <Button
                  bg="#FFE031"
                  w="100%" // El botón ocupará el 100% del espacio disponible
                  maxW="250px"
                  transition="all 0.3s"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Image
                      src={category.image}
                      alt={category.nombre}
                      marginRight="4px"
                    />
                    <Text marginLeft="px" fontSize="xs" fontWeight="light">
                      {category.nombre}
                    </Text>
                  </Box>
                </Button>
              </Box>
            ))}
          </Slider>

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
                maxW={{ base: "40%", sm: "200px" }}
                src={restaurant1}
                alt="restaurant1"
              />

              <Stack>
                <CardBody>
                  <Text size="md">Pardes Restaurant</Text>

                  {/* Agregar rating de estrellas */}
                  <Box display="flex" alignItems="center">
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="gray" />
                  </Box>

                  <Text py="2" size="s" letterSpacing="-0.3px">
                    Work time 09:30 - 23:00
                  </Text>
                  <Text py="0" fontSize="xs" color="#A7A7A7">
                    Before you 4$
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            w="358px"
            h="106px"
            p={2}
            borderRadius="18px"
            marginTop="70px"
          >
            <Card
              display="flex"
              flexDirection="row"
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "40%", sm: "200px" }}
                src={restaurant1}
                alt="restaurant1"
              />

              <Stack>
                <CardBody>
                  <Text size="md">Pardes Restaurant</Text>

                  {/* Agregar rating de estrellas */}
                  <Box display="flex" alignItems="center">
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="gray" />
                  </Box>

                  <Text py="2" size="s" letterSpacing="-0.3px">
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
