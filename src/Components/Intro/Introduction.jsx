// import {
//   Flex,
//   Container,
//   Heading,
//   Stack,
//   Text,
//   Button,
//   Box,
// } from "@chakra-ui/react";
// import "./introduction.css";
// // import homeLogo from './../../Assets/home-logo.png'
// import footerLogo from "./../../Assets/footerlogo.png";
// import { Image } from "@chakra-ui/react";
// import { useContext } from "react";
// import ResumeContext from "../../Context/ResumeContext";
// import ThemeTemplateData from "../../db/ThemeTemplateData";
// import { Helmet } from "react-helmet";

// export default function Introduction() {
//   const {
//     selectBtn,
//     setSelectBtn,
//     setCurrentTheme,
//     showComponent,
//     setShowComponent,
//   } = useContext(ResumeContext);

//   const handleSelectTemplate = () => {
//     setSelectBtn(!selectBtn);
//   };

//   const showTheme = (e) => {
//     setShowComponent(!showComponent);
//     setCurrentTheme(e.target.id);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Resume Builder - Create Your Resume in Minutes</title>
//         <meta
//           name="description"
//           content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!"
//         />
//         <meta
//           name="keywords"
//           content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume"
//         />
//         <meta name="robots" content="index,follow" />
//         <meta name="author" content="Hardik Desai" />
//         <meta
//           property="og:image"
//           content="https://avatars.githubusercontent.com/u/87645745?v=4"
//         />
//         <meta
//           property="og:url"
//           content="https://quick-resume.netlify.app/about"
//         />
//         <meta property="og:type" content="website" />
//       </Helmet>

//       <Container
//         my={{ base: 1.5, md: 16 }}
//         justifyContent={"space-between"}
//         flexDirection={{ base: "column", md: "column", sm: "column" }}
//         display={"flex"}
//         alignItems={"center"}
//         maxW={"7xl"}
//       >
//         <Stack
//           width={{ base: "95%", md: "47%" }}
//           textAlign={"center"}
//           align={"center"}
//           spacing={{ base: 8, md: 10 }}
//           py={{ base: 1.5, md: 10, sm: "14" }}
//         >
//           {selectBtn ? (
//             <>
//               <Heading
//                 fontWeight={600}
//                 fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
//                 lineHeight={"110%"}
//               >
              
//                  Craft Your Perfect{" "}  Resume {""}
//                 <Text as={"span"} color={"blue.500"}>
                 
//                   in Minutes
//                 </Text>
                 
//               </Heading>

              
              
              

//               <Text color={"gray.500"} maxW={"3xl"} fontSize={'xl'} fontWeight={'700'}>

//                 {/* Craft a job-winning resume effortlessly with 3CV’s intuitive
//                 builder */}
//                  Stand out from the crowd with a professionally designed resume
//                        tailored to your career goals.
//               </Text>
             

//               <Flex
//                 _dark={{ color: "gray.50" }}
//                 textAlign={"start"}
//                 flexDirection={"column"}
//                 w={"full"}
//               >
//                 <Box className="Bullet_Points">
//                   <Button>1</Button>
//                   <Text
//                     _dark={{ color: "gray.400" }}
//                     color={"gray.900"}
//                     fontSize={"l"}
//                   >

//                     Pick Your Style And Browse our collection of professional templates.
//                   </Text>
//                 </Box>
//                 <Box className="Bullet_Points">
//                   <Button>2</Button>
//                   <Text
//                     _dark={{ color: "gray.400" }}
//                     color={"gray.900"}
//                     fontSize={"l"}
//                   >

//                     Our smart forms guide you through each section (experience, skills, education) with ease.
//                   </Text>
//                 </Box>
//                 <Box className="Bullet_Points">
//                   <Button>3</Button>
//                   <Text
//                     _dark={{ color: "gray.400" }}
//                     color={"gray.900"}
//                     fontSize={"l"}
//                   >

//                     Get a polished PDF resume in minutes – no design skills required.
//                   </Text>
//                 </Box>
//               </Flex>
//             </>
//           ) : (
//             <Heading
//               m={"1.5"}
//               textAlign={{ base: "center", md: "start" }}
//               fontWeight={600}
//               fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
//               lineHeight={"110%"}
//             >
//               Select your{" "}
//               <Text as={"span"} color={"blue.500"}>
//                 choice{" "}
//               </Text>
//               Template
//             </Heading>
//           )}
//         </Stack>

//         {selectBtn ? (

//           <Stack direction="column" align="center" spacing={4} p={4}>
//             <Image
//               src={footerLogo}
//               alt="3CV Logo"
//               style={{ width: "250px" }}
//               //   w={{ base: "500px", md: "200px" }}
//               filter="hue-rotate(15deg)"
//               transition="all 0.3s ease"
//               _hover={{
//                 transform: "scale(1.05)",
//                 filter: "hue-rotate(0deg) brightness(1.1)",
//               }}
//             />

//             <Button
//               onClick={handleSelectTemplate}
//               rounded={"xl"}
//               px={8}
//               py={6}
//               fontSize={"lg"}
//               fontWeight={"bold"}
//               colorScheme={"blue"}
//               bgGradient="linear(to-r, lightblue.300, teal.400)"
//               _hover={{
//                 bgGradient: "linear(to-r, lightblue.400, teal.500)",
//                 transform: "translateY(-2px)",
//                 boxShadow: "xl",
//               }}
              
              
//               _active={{
//                 transform: "translateY(0)",
//               }}
//               boxShadow="md"
//             >
//               Start Your Journey with ProCV









//             </Button>
//           </Stack>
//         ) : (
//           <>
//             <Box maxW={{ base: "100%", md: "61%" }} className="templatesList">
//               {ThemeTemplateData.map((item, index) => {
//                 return (
//                   <div key={index} className="template" onClick={showTheme}>
//                     <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
//                   </div>
//                 );
//               })}
//             </Box>
//           </>
//         )}
//       </Container>
//     </>
//   );
// }

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image,
  Badge,
  Icon,
  HStack,
  VStack,
  SimpleGrid,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import "./introduction.css";
import footerLogo from "./../../Assets/footerlogo.png";
import { useContext } from "react";
import ResumeContext from "../../Context/ResumeContext";
import ThemeTemplateData from "../../db/ThemeTemplateData";
import { Helmet } from "react-helmet";
import { FaCheck, FaRegLightbulb, FaFileDownload, FaAward, FaUserTie } from "react-icons/fa";
import { MdTimer, MdOutlineDesignServices } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase"; // adjust path as needed


export default function Introduction() {

//   const [user] = useAuthState(auth);
// const navigate = useNavigate();

  const {
    selectBtn,
    setSelectBtn,
    setCurrentTheme,
    showComponent,
    setShowComponent,
  } = useContext(ResumeContext);

  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const headingColor = useColorModeValue("blue.500", "blue.300");

  const handleSelectTemplate = () => {
    setSelectBtn(!selectBtn);
  };

  const showTheme = (e) => {
    setShowComponent(!showComponent);
    setCurrentTheme(e.target.id);
  };

  // New feature: User testimonials
  const testimonials = [
    {
      quote: "I got 3 interviews in the first week after using this builder!",
      name: "Sarah J.",
      role: "Marketing Manager"
    },
    {
      quote: "The templates helped me stand out from other applicants.",
      name: "Michael T.",
      role: "Software Engineer"
    },
    {
      quote: "Finally a resume builder that doesn't require design skills!",
      name: "Emily R.",
      role: "Recent Graduate"
    }
  ];

  // New feature: Resume statistics
  const stats = [
    { value: "2x", label: "More interviews" },
    { value: "30+", label: "Professional templates" },
    { value: "1M+", label: "Resumes created" },
    { value: "85%", label: "Success rate" }
  ];

  return (
    <>
      <Helmet>
        <title>Resume Builder - Create Your Resume in Minutes</title>
        <meta
          name="description"
          content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!"
        />
        <meta
          name="keywords"
          content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Hardik Desai" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/87645745?v=4"
        />
        <meta
          property="og:url"
          content="https://quick-resume.netlify.app/about"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Container
        my={{ base: 1.5, md: 16 }}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "column", sm: "column" }}
        display={"flex"}
        alignItems={"center"}
        maxW={"7xl"}
      >
        <Stack
          width={{ base: "95%", md: "47%" }}
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 1.5, md: 10, sm: "14" }}
        >
          {selectBtn ? (
            <>
              <Badge 
                colorScheme="blue" 
                px={3} 
                py={1} 
                borderRadius="full"
                fontSize="md"
                fontWeight="bold"
                alignSelf="center"
              >
                TRUSTED BY 1M+ USERS
              </Badge>
              
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Craft Your Perfect{" "}  
                <Text as={"span"} color={headingColor}>
                  Resume in Minutes
                </Text>
              </Heading>

              <Text color={"gray.500"} maxW={"3xl"} fontSize={'xl'} fontWeight={'700'}>
                Stand out from the crowd with a professionally designed resume
                tailored to your career goals.
              </Text>

              {/* New feature: Key benefits with icons */}
              <VStack spacing={6} align="start" w="full">
                <HStack spacing={4}>
                  <Icon as={FaRegLightbulb} color="blue.500" boxSize={6} />
                  <Text fontSize="lg">ATS-friendly templates that get noticed</Text>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={MdTimer} color="blue.500" boxSize={6} />
                  <Text fontSize="lg">Create a resume in 15 minutes</Text>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={FaFileDownload} color="blue.500" boxSize={6} />
                  <Text fontSize="lg">Download as PDF with one click</Text>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={FaCheck} color="green.500" boxSize={6} />
                  <Text fontSize="lg">Proven success with real users</Text>
                </HStack>
                <HStack spacing={4}>
                  <Icon as={MdOutlineDesignServices} color="blue.500" boxSize={6} />
                  <Text fontSize="lg">Professional designs for every industry</Text>
                </HStack>
              </VStack>

              <Flex
                _dark={{ color: "gray.50" }}
                textAlign={"start"}
                flexDirection={"column"}
                w={"full"}
              >
                <Box className="Bullet_Points">
                  <Button>1</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"l"}
                  >
                    Pick Your Style And Browse our collection of professional templates.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>2</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"l"}
                  >
                    Our smart forms guide you through each section (experience, skills, education) with ease.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>3</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"l"}
                  >
                    Get a polished PDF resume in minutes – no design skills required.
                  </Text>
                </Box>
              </Flex>
            </>
          ) : (
            <Heading
              m={"1.5"}
              textAlign={{ base: "center", md: "start" }}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Select your{" "}
              <Text as={"span"} color={headingColor}>
                choice{" "}
              </Text>
              Template
            </Heading>
          )}
        </Stack>

        {selectBtn ? (
          <Stack direction="column" align="center" spacing={4} p={4}>
            <Image
              src={footerLogo}
              alt="3CV Logo"
              style={{ width: "250px" }}
              filter="hue-rotate(15deg)"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                filter: "hue-rotate(0deg) brightness(1.1)",
              }}
            />

            <Button
              onClick={handleSelectTemplate}
              size={buttonSize}
              rounded={"xl"}
              px={8}
              py={6}
              fontSize={"lg"}
              fontWeight={"bold"}
              colorScheme={"blue"}
              bgGradient="linear(to-r, lightblue.300, teal.400)"
              _hover={{
                bgGradient: "linear(to-r, lightblue.400, teal.500)",
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              boxShadow="md"
              rightIcon={<FaUserTie />}
            >
              Start Your Journey with ProCV
            </Button>

            {/* New feature: Success statistics */}
            <SimpleGrid columns={2} spacing={4} mt={8}>
              {stats.map((stat, index) => (
                <Box key={index} textAlign="center">
                  <Text fontSize="3xl" fontWeight="bold" color="blue.500">
                    {stat.value}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        ) : (
          <>
            <Box maxW={{ base: "100%", md: "61%" }} className="templatesList">
              {ThemeTemplateData.map((item, index) => {
                return (
                  <div key={index} className="template" onClick={showTheme}>
                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                    {/* New feature: Popular badge */}
                    {index === 1 && (
                      <Badge 
                        colorScheme="green" 
                        position="absolute" 
                        top={2} 
                        right={2}
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        MOST POPULAR
                      </Badge>
                    )}
                  </div>
                );
              })}
            </Box>

            {/* New feature: User testimonials section */}
            <Box mt={16} w="full" textAlign="center">
              <Heading size="lg" mb={8}>
                What Our Users Say
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {testimonials.map((testimonial, index) => (
                  <Box 
                    key={index} 
                    p={6} 
                    borderWidth="1px" 
                    borderRadius="lg"
                    boxShadow="md"
                  >
                    <Icon as={FaAward} color="blue.500" boxSize={6} mb={4} />
                    <Text fontStyle="italic" mb={4}>
                      "{testimonial.quote}"
                    </Text>
                    <Text fontWeight="bold">{testimonial.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

