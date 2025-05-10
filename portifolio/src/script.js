// Efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste para a navbar fixa
                behavior: 'smooth'
            });
        }
    });
});

// Mudar a cor da navbar ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--secondary-color)';
        navbar.style.boxShadow = 'none';
    }
});

// Animação ao rolar a página (Scroll Reveal)
function scrollReveal() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight - revealPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Configuração inicial para as seções
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

// Carregar projetos dinamicamente (simulação)
document.addEventListener('DOMContentLoaded', function() {
    // Em um projeto real, você buscaria esses dados de uma API
    const projects = [
        {
            title: "Sistema de E-commerce",
            description: "Plataforma completa de e-commerce com carrinho e checkout.",
            image: "../imagens/ecommerce.jpeg",
            link: "#"
        },
        {
            title: "App de Clima",
            description: "Aplicativo que mostra previsão do tempo em tempo real.",
            image: "../imagens/appclima.jpg",
            link: "#"
        }
    ];
    
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Adicionar projetos dinamicamente
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-tile';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="project-link">Ver Projeto</a>
        `;
        projectsGrid.appendChild(projectElement);
    });
});