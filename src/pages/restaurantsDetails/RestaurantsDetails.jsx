import {
  Box,
  Button,
  Card,
  CardBody,
  ChakraProvider,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../../assets/restaurant/Logo1rest.png";
import LettersLogo from "../../assets/restaurant/Logorest.png";
import restaurant1 from "../../assets/restaurant/rest1.png";
import { FaStar } from "react-icons/fa";
import CarruselCategory from "../../components/carruselCategory/CarruselCategory";
import { saladRestor } from "../../utils/data";

const RestaurantsDetails = () => {
  return (
    <>
      <ChakraProvider>
        {/* Logo restaurant */}
        <Box display="flex" alignItems="left" flexDirection="row" p={6}>
          <Icon as={ChevronLeftIcon} fontSize="2rem" />
          <Box
            display="flex"
            alignItems="center"
            marginLeft="116px"
            marginTop="40px"
          >
            <Image src={Logo} alt="logo restor" w="45px" />
            <Box display="flex" flexDirection="column" p={2}>
              <Image src={LettersLogo} alt="logo letter" />
            </Box>
          </Box>
        </Box>

        {/* Card restaurant */}
        <Box
          display="flex"
          alignItems="center"
          w={{ base: "358px", md: "500px" }} // Ajusta el ancho de la tarjeta según el tamaño de pantalla
          h="106px"
          p={2}
          borderRadius="18px"
          marginTop="20px"
          padding={6}
        >
          <Card display="flex" flexDirection="row" variant="outline">
            <Image
              objectFit="cover"
              width="145px"
              height="136px"
              src={restaurant1}
              alt="restaurant1"
              borderRadius="10px"
              style={{
                clipPath: "polygon(100% 0, 100% 15%, 60% 100%, 0 100%, 0 0)",
              }}
            />

            <Stack>
              <CardBody padding="13px" width="200px" paddingTop="1px">
                <Text size="md">Pardes Restaurant</Text>
                <Text py="2" fontSize="10px" letterSpacing="-0.3px">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </Text>

                {/* Agregar rating de estrellas */}
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="#FFC107" />
                    <FaStar size={14} color="gray" />
                  </Box>
                  <Button w="51px" h="16px">
                    <Text
                      fontSize="10px"
                      letterSpacing="-0.3px"
                      lineHeight="12px"
                    >
                      15-20 min
                    </Text>
                  </Button>
                </Box>
              </CardBody>
            </Stack>
          </Card>
        </Box>
        <Stack paddingTop="30px">
          <CarruselCategory />
        </Stack>

        {/* Mapeo de los datos de saladRestor */}
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          paddingTop="30px"
          p={6}
        >
          {saladRestor.map((item) => (
            <Card key={item.id}>
              <Image borderRadius="10px" src={item.image} alt={item.name} />
              <CardBody>
                <Text fontSize="14px">{item.name}</Text>
                <Text color="gray">{item.price}</Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ChakraProvider>
    </>
  );
};

export default RestaurantsDetails;
