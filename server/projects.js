var express = require('express');
var router = express.Router();


// Create a Fake database
const infoCards = [{
    title: 'Google',
    content: 'Ad ex laborum pariatur dolor.',
    moreUrl: null
  },
  {
    title: 'Google',
    content: 'Ad ex laborum pariatur dolor.',
    moreUrl: null
  },
  {
    title: 'Google',
    content: 'Ad ex laborum pariatur dolor.',
    moreUrl: null
  },
];

const projects = [{
    title: 'Google',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  },
  {
    title: 'Facebook',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  },
  {
    title: 'Apple',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  },
  {
    title: 'Pewdiepie',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  },
  {
    title: 'H20Delirious',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  },
  {
    title: 'Cartoonz',
    content: 'Fugiat nulla in duis occaecat minim exercitation magna id labore.',
    imgUrl: 'https://via.placeholder.com/700x400',
    projectUrl: null
  }
];
// finish declare database
router.get('/', function (req, res) {
  var query = (req.query[q] || '').toLowerCase();
  if (query) {
    const foundProjects = projects.filter(
      project => project.name.toLowerCase().indexOf(query) != -1
    );
    return res.status(200).json(foundProjects);
  }
  return res.status(200).json(projects);
});
module.exports = router;
