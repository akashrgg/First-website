
function sendEmail(){
     Email.send({
          Host : "smtp.gmail.com",
          Username : "akashzzh146@gmail.com",
          Password : "akash123",
          To : 'akashqq146@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Enquiry",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}


function show(){
  document.getElementById("wa").innerHTML=" 1. Learn Fundamentals: HTML, CSS, JavaScript: Master front-end technologies for building user interfaces and interactive web experiences.Version Control: Learn Git and GitHub for managing code changes and collaborating with other developers.2. Front-end Development:Framework/Libraries: Dive deeper into popular front-end frameworks and libraries like React.js, Angular, or Vue.js for building scalable and dynamic web applications. Responsive Design: Understand responsive design principles and CSS frameworks like Bootstrap or Tailwind CSS for creating mobile-friendly layouts.3. Back-end Development:Server-side Programming: Learn server-side languages like Node.js, Python (with frameworks like Django or Flask), or Ruby on Rails for handling server-side logic and building APIs.Databases: Explore database systems such as SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB) for storing and retrieving data efficiently.4. APIs and Microservices:RESTful APIs: Understand the principles of RESTful architecture and how to design and consume APIs.Microservices Architecture: Learn about microservices architecture and how to build scalable and maintainable applications using microservices. 5. DevOps and Deployment:Cloud Platforms: Familiarize yourself with cloud platforms like AWS, Azure, or Google Cloud for deploying and managing applications.Containerization: Learn Docker for containerization and Kubernetes for orchestration to streamline deployment and scaling processes.6. Security:Web Security Basics: Understand common web security vulnerabilities (e.g., Cross-Site Scripting, SQL Injection) and best practices for securing web applications.Authentication and Authorization: Implement authentication and authorization mechanisms using technologies like JSON Web Tokens (JWT) or OAuth.7. Testing and Quality Assurance: Unit Testing: Learn unit testing frameworks like Jest, Mocha, or Jasmine for testing individual components of your application.Integration and End-to-End Testing: Explore tools like Selenium or Cypress for testing the functionality and user experience of your application. 8. Continuous Integration and Delivery (CI/CD):Automated Build Pipelines: Set up CI/CD pipelines using tools like Jenkins, Travis CI, or GitLab CI for automating build, test, and deployment processes.Monitoring and  Explore New Technologies: Stay curious and keep exploring new technologies, frameworks, and tools to stay relevant in the ever"
  
}
function shows(){

}
