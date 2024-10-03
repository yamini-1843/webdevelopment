document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
    fetchBlogPosts();
  });
  
  function fetchProjects() {
    fetch('http://localhost:5000/projects')
      .then(response => response.json())
      .then(data => {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = data.map(project => `<div>${project.name}</div>`).join('');
      });
  }
  
  function fetchBlogPosts() {
    fetch('http://localhost:5000/blog')
      .then(response => response.json())
      .then(data => {
        const blogList = document.getElementById('blog-list');
        blogList.innerHTML = data.map(post => `<div>${post.title}</div>`).join('');
      });
  }
  