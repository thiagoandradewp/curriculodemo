// Atualiza o ano automaticamente no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Configura o botão de WhatsApp
const phoneNumber = "87988300984";
const message = "Olá Thiago! Vi seu site e gostaria de saber mais sobre seus serviços.";
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
document.getElementById("whatsappBtn").href = whatsappLink;
