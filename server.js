const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Project = mongoose.model('Project', projectSchema);
const BlogPost = mongoose.model('BlogPost', blogSchema);

app.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.get('/blog', async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
