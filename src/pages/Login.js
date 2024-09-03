import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, Checkbox, Link, Image, Text, Stack, Divider, HStack } from '@chakra-ui/react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'hello@example.com' && password === 'password') {
      setError('');
      // Perform login action
    } else {
      setError('Please enter correct password');
    }
  };
