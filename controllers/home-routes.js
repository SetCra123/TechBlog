const router = require('express').Router();
const { Blog } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');