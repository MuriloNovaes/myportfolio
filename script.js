document.addEventListener("DOMContentLoaded", () => {
    // Exibir nome fixo
    document.getElementById("nome").textContent = "Murilo Barbosa Novaes";
    
    // Carregar partículas
    particlesJS.load('particles-js', './particles-config.json', function() {
        console.log('Partículas carregadas com sucesso!');
    });
    
    // Efeito de digitação no subtítulo
    const typingElement = document.getElementById("typing-effect");
    const text = "Desenvolvedor | Cloud | IA";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Botão de voltar ao topo
    const scrollTopButton = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });
    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Animação de fade-in ao rolar a página
    const fadeElements = document.querySelectorAll(".fade-in");
    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    // Scrollspy - Destacar link no menu
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Modal para certificações
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close-btn");
    document.querySelectorAll(".modal-trigger").forEach(item => {
        item.addEventListener("click", () => {
            modalText.textContent = item.innerHTML;
            modal.style.display = "block";
        });
    });
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
