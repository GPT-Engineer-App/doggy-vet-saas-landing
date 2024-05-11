import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaStethoscope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1583511666445-775f1f2116f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE3MTU0NDU4NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Happy Dog" />
        <Heading as="h1" size="2xl" textAlign="center">
          VetSaaS - Comprehensive Care for Your Furry Friends
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Dedicated software solutions for veterinarians to manage and enhance the health care of pets.
        </Text>
        <Button rightIcon={<FaStethoscope />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
