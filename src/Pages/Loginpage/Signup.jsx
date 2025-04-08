// pages/Signup.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast, Text } from '@chakra-ui/react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      toast({
        title: 'Signup failed',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <VStack spacing={4} as="form" onSubmit={handleSignup}>
        <Text fontSize="2xl" fontWeight="bold">Sign Up</Text>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com" 
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••" 
          />
        </FormControl>
        <Button 
          colorScheme="blue" 
          width="full"
          type="submit"
          isLoading={loading}
        >
          Create Account
        </Button>
        <Text>
          Already have an account?{' '}
          <Link to="/login" style={{color: '#3182ce'}}>Log in</Link>
        </Text>
      </VStack>
    </Box>
  );
}