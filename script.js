// Lista de Pizzas corrigida com os caminhos da sua pasta local
const pizzas = [
    { nome: "Pizza de Salmão", img: "imagens/pizza de salmão.jpg" },
    { nome: "Frango com Catupiry", img: "imagens/frangocomcatupiry.jpg" },
    { nome: "Calabresa", img: "imagens/calabresa.jpg" },
    { nome: "Portuguesa", img: "imagens/portuguesa.jpg" },
    { nome: "Pizza Sensação", img: "imagens/pizzasensação.jpg" },
    { nome: "Pizza de Prestígio", img: "imagens/pizza de prestigio.jpg" },
    { nome: "Atum Especial", img: "imagens/pizza atum especial.jpg" }
];

const depoimentos = [
    { nome: "Ricardo S.", texto: "A melhor pizza artesanal da região. Massa leve e sabor incrível!", estrelas: 5 },
    { nome: "Ana Julia", texto: "O atendimento pelo WhatsApp foi super rápido. A Pizza Sensação é viciante.", estrelas: 5 },
    { nome: "Marcos V.", texto: "Ingredientes de altíssima qualidade. Chegou quentinha via iFood.", estrelas: 5 },
    { nome: "Beatriz M.", texto: "Opções vegetarianas criativas e muito saborosas. Virei cliente fiel.", estrelas: 5 },
    { nome: "Pedro H.", texto: "A Portuguesa é muito recheada, do jeito que eu gosto. Nota dez!", estrelas: 4 },
    { nome: "Carla F.", texto: "Uma verdadeira experiência italiana em casa. Recomendo muito.", estrelas: 5 }
];

const containerPizzas = document.getElementById('pizzas-container');
const containerDeps = document.getElementById('testimonials-container');
const modal = document.getElementById('modalPedido');
const modalNome = document.getElementById('modalPizzaNome');

// Carregar Catálogo de Pizzas
pizzas.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pizza-card';
    
    // O encodeURI ajuda o navegador a entender caminhos com espaços ou acentos
    const caminhoImagem = encodeURI(p.img);
    
    card.innerHTML = `
        <div class="pizza-img" style="background-image: url('${caminhoImagem}')"></div>
        <div class="pizza-info"><h3>${p.nome}</h3></div>
    `;
    
    card.onclick = () => {
        modalNome.innerText = "Pedir: " + p.nome;
        modal.style.display = 'flex';
    };
    containerPizzas.appendChild(card);
});

// Carregar Depoimentos
depoimentos.forEach(d => {
    containerDeps.innerHTML += `
        <div class="testimonial-card">
            <div class="stars">${'<i class="fas fa-star"></i>'.repeat(d.stars || d.estrelas)}</div>
            <p>"${d.texto}"</p>
            <strong>- ${d.nome}</strong>
        </div>
    `;
});

// Lógica para fechar o Modal
document.querySelector('.close-btn').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };