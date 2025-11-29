// URL do verificador de senhas
const passwordCheckerUrl = 'https://8080-itec60tupoejz07ypezw2-2bea3699.manusvm.computer';

// Gerar QR Code ao carregar a página
window.addEventListener('load', generateQRCode);

/**
 * Gera o QR Code que direciona para o verificador de senhas
 */
function generateQRCode() {
    const qrcodeDiv = document.getElementById('qrcode');
    qrcodeDiv.innerHTML = ''; // Limpar QR Code anterior

    new QRCode(qrcodeDiv, {
        text: passwordCheckerUrl,
        width: 280,
        height: 280,
        colorDark: '#1f2937',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

/**
 * Copia a URL para a área de transferência
 */
function copyToClipboard() {
    const url = document.getElementById('urlBox').textContent;
    navigator.clipboard.writeText(url).then(() => {
        const message = document.getElementById('successMessage');
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }).catch(err => {
        alert('Erro ao copiar: ' + err);
    });
}

/**
 * Abre a URL do verificador de senhas em uma nova aba
 */
function openUrl() {
    window.open(passwordCheckerUrl, '_blank');
}

/**
 * Baixa o QR Code como imagem PNG
 */
function downloadQRCode() {
    const canvas = document.querySelector('#qrcode canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode-verificador-senhas.png';
        link.click();
    } else {
        alert('QR Code ainda não foi gerado. Aguarde um momento.');
    }
}

/**
 * Salvar URL no localStorage para referência
 */
window.addEventListener('beforeunload', () => {
    localStorage.setItem('passwordCheckerUrl', passwordCheckerUrl);
});


