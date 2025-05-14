// import { Box, Flex, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Stack, Button } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
// import { Link as ReachLink } from 'react-router-dom'
// import logo from './../../Assets/logo.png';


// export default function Navbar() {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     return (
//         <>
//             <Box id='navbar' bg={useColorModeValue( 'blue.500')} px={4}>
//                 <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//                     <ReachLink to='/'>
//                         <Box><img style={{ height: '44px' }} className='logo' src={logo} alt="logo" /></Box>
//                     </ReachLink>

//                     <HStack spacing={8} alignItems={'center'}>
//                         <HStack
//                             as={'nav'}
//                             spacing={4}
//                             display={{ base: 'none', md: 'flex' }}>
//                             <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'blue.50' }} to={'/'} >Home </ReachLink>
//                             <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'blue.50' }} to={'/about'}> About</ReachLink>
//                         </HStack>
//                         <Button onClick={toggleColorMode}>
//                             {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//                         </Button>
//                     </HStack>

//                     <IconButton
//                         size={'md'}
//                         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//                         aria-label={'Open Menu'}
//                         display={{ md: 'none' }}
//                         onClick={isOpen ? onClose : onOpen}
//                     />

//                 </Flex>

//                 {isOpen ? (
//                     <Box pb={4} display={{ md: 'none' }}>
//                         <Stack as={'nav'} spacing={4}>
//                             <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/'} >Home </ReachLink>
//                             <ReachLink px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/about'}> About</ReachLink>
//                         </Stack>
//                     </Box>
//                 ) : null}
//             </Box>
//         </>
//     );
// }

// import { 
//     Box, Flex, HStack, IconButton, useDisclosure, 
//     useColorMode, useColorModeValue, Stack, Button,
//     Menu, MenuButton, MenuList, MenuItem, Avatar,
//     Text, Spinner, useToast
//   } from '@chakra-ui/react';
//   import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
//   import { Link as RouterLink, useNavigate } from 'react-router-dom';
//   import { auth } from '../../firebase';
//   import { signOut } from 'firebase/auth';
//   import { useAuthState } from 'react-firebase-hooks/auth';
//   import logo from './../../Assets/logo.png';
// //   import { useState } from 'react';
  
//   export default function Navbar() {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();
//     const toast = useToast();
//     const bgColor = useColorModeValue('blue.500', 'blue.700');
//     const hoverBg = useColorModeValue('blue.50', 'blue.600');
  
//     const handleLogout = async () => {
//       try {
//         await signOut(auth);
//         toast({
//           title: 'Logged out successfully',
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/');
//       } catch (error) {
//         toast({
//           title: 'Logout failed',
//           description: error.message,
//           status: 'error',
//           duration: 5000,
//           isClosable: true,
//         });
//       }
//     };
  
//     if (loading) return <Flex justify="center" p={4}><Spinner size="xl" /></Flex>;
//     if (error) return <Box p={4} color="red.500">Error: {error.message}</Box>;
  
//     return (
//       <Box id='navbar' bg={bgColor} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <RouterLink to='/'>
//             <Box><img style={{ height: '44px' }} src={logo} alt="logo" /></Box>
//           </RouterLink>
  
//           <HStack spacing={8} alignItems={'center'}>
//             <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//               <RouterLink to='/'>
//                 <Button variant="ghost" _hover={{ bg: hoverBg }}>Home</Button>
//               </RouterLink>
//               <RouterLink to='/about'>
//                 <Button variant="ghost" _hover={{ bg: hoverBg }}>About</Button>
//               </RouterLink>
//             </HStack>
  
//             <Button onClick={toggleColorMode}>
//               {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//             </Button>
  
//             {user ? (
//               <Menu>
//                 <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
//                   <HStack spacing={1}>
//                     <Avatar size={'sm'} name={user.email} src={user.photoURL || ''} />
//                     <Text display={{ base: 'none', md: 'block' }} color="white">{user.email}</Text>
//                     <ChevronDownIcon color="white" />
//                   </HStack>
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
//                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             ) : (
//               <HStack spacing={2}>
//                 <Button 
//                   variant={'outline'} 
//                   color="white"
//                   _hover={{ bg: 'blue.600' }}
//                   onClick={() => navigate('/login')}
//                 >
//                   Login
//                 </Button>
//                 <Button 
//                   colorScheme={'blue'} 
//                   onClick={() => navigate('/signup')}
//                 >
//                   Sign Up
//                 </Button>
//               </HStack>
//             )}
//           </HStack>
  
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//         </Flex>
  
//         {isOpen && (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               <RouterLink to='/'><Button w="full" variant="ghost" onClick={onClose}>Home</Button></RouterLink>
//               <RouterLink to='/about'><Button w="full" variant="ghost" onClick={onClose}>About</Button></RouterLink>
//               {user ? (
//                 <Button w="full" variant="outline" onClick={handleLogout}>Logout</Button>
//               ) : (
//                 <>
//                   <Button w="full" variant="outline" onClick={() => { navigate('/login'); onClose(); }}>Login</Button>
//                   <Button w="full" colorScheme="blue" onClick={() => { navigate('/signup'); onClose(); }}>Sign Up</Button>
//                 </>
//               )}
//             </Stack>
//           </Box>
//         )}
//       </Box>
//     );
//   }








import { 
  Box, Flex, HStack, IconButton, useDisclosure, 
  useColorMode, useColorModeValue, Stack, Button,
  Menu, MenuButton, MenuList, MenuItem, Avatar,
  Text, Spinner, useToast
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from './../../Assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const toast = useToast();
  const bgColor = useColorModeValue('blue.500', 'blue.700');
  const hoverBg = useColorModeValue('blue.50', 'blue.600');
  const textColor = useColorModeValue('white', 'whiteAlpha.900');

  const handleLogout = async () => {
      try {
          await signOut(auth);
          toast({
              title: 'Logged out successfully',
              status: 'success',
              duration: 3000,
              isClosable: true,
          });
          navigate('/');
      } catch (error) {
          toast({
              title: 'Logout failed',
              description: error.message,
              status: 'error',
              duration: 5000,
              isClosable: true,
          });
      }
  };

  if (loading) return <Flex justify="center" p={4}><Spinner size="xl" /></Flex>;
  if (error) return <Box p={4} color="red.500">Error: {error.message}</Box>;

  return (
      <Box id='navbar' bg={bgColor} px={4} className="nav-container">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <RouterLink to='/home' className="nav-logo">
                  <Box><img src={logo} alt="logo" /></Box>
              </RouterLink>

              <HStack spacing={8} alignItems={'center'}>
                  <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} className="nav-menu">
                      <RouterLink to='/introduction'>
                          <Button variant="ghost" _hover={{ bg: hoverBg }} color={textColor} className="nav-menu-item nav-button">Home</Button>
                      </RouterLink>
                      <RouterLink to='/about'>
                          <Button variant="ghost" _hover={{ bg: hoverBg }} color={textColor} className="nav-menu-item nav-button">About</Button>
                      </RouterLink>
                  </HStack>

                  <Button onClick={toggleColorMode} className="theme-toggle" aria-label="Toggle color mode">
                      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>

                  {user ? (
                      <Menu>
                          <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
                              <HStack spacing={1}>
                                  <Avatar size={'sm'} name={user.email} src={user.photoURL || ''} className="nav-avatar" />
                                  <Text display={{ base: 'none', md: 'block' }} color={textColor}>{user.email}</Text>
                                  <ChevronDownIcon color={textColor} />
                              </HStack>
                          </MenuButton>
                          <MenuList>
                              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                              <MenuItem onClick={handleLogout}>Logout</MenuItem>
                          </MenuList>
                      </Menu>
                  ) : (
                      <HStack spacing={2} className="nav-menu">
                          <Button 
                              variant={'outline'} 
                              color={textColor}
                              _hover={{ bg: 'blue.600' }}
                              onClick={() => navigate('/login')}
                              className="nav-button"
                          >
                              Login
                          </Button>
                          <Button 
                              colorScheme={'blue'} 
                              onClick={() => navigate('/signup')}
                              className="nav-button"
                          >
                              Sign Up
                          </Button>
                      </HStack>
                  )}
              </HStack>

              <IconButton
                  size={'md'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={'Open Menu'}
                  display={{ md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
                  color={textColor}
                  variant="ghost"
                  className="mobile-menu-button"
              />
          </Flex>

          <Box pb={4} display={{ md: 'none' }} className={`mobile-menu ${isOpen ? 'open' : ''}`}>
              <Stack as={'nav'} spacing={4}>
                  <RouterLink to='/introduction'><Button w="full" variant="ghost" onClick={onClose} color={textColor} className="nav-button">Home</Button></RouterLink>
                  <RouterLink to='/about'><Button w="full" variant="ghost" onClick={onClose} color={textColor} className="nav-button">About</Button></RouterLink>
                  {user ? (
                      <Button w="full" variant="outline" onClick={handleLogout} className="nav-button">Logout</Button>
                  ) : (
                      <>
                          <Button w="full" variant="outline" onClick={() => { navigate('/login'); onClose(); }} className="nav-button">Login</Button>
                          <Button w="full" colorScheme="blue" onClick={() => { navigate('/signup'); onClose(); }} className="nav-button">Sign Up</Button>
                      </>
                  )}
              </Stack>
          </Box>
      </Box>
  );
}