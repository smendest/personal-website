// Language toggle functionality
let currentLanguage = 'en';

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en][data-es]');
    const languageButton = document.querySelector('#languageToggle span:last-child');
    
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    
    elements.forEach(element => {
        if (currentLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-es');
        }
    });
    
    // Update button text
    if (languageButton) {
        languageButton.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// PDF download functionality
function downloadCV() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the PDF file path (you'll need to add your CV PDF file)
    const cvFileName = currentLanguage === 'en' ? 'CV_EN.pdf' : 'CV_ES.pdf';
    link.href = `cv/${cvFileName}`;
    link.download = cvFileName;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show a success message (optional)
    showDownloadMessage();
}

function showDownloadMessage() {
    const message = document.createElement('div');
    message.className = 'download-message';
    message.textContent = currentLanguage === 'en' ? 'CV download started!' : '¡Descarga del CV iniciada!';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--blue) 0%, var(--sapphire) 100%);
        color: var(--crust);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        toggleLanguage();
    }
    
    // Language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Download CV button
    const downloadButton = document.getElementById('downloadCV');
    if (downloadButton) {
        downloadButton.addEventListener('click', downloadCV);
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

// Utility function to create CV directory structure check
function checkCVFiles() {
    const cvFiles = ['CV_EN.pdf', 'CV_ES.pdf'];
    const missingFiles = [];
    
    cvFiles.forEach(file => {
        fetch(`cv/${file}`, { method: 'HEAD' })
            .then(response => {
                if (!response.ok) {
                    missingFiles.push(file);
                    console.warn(`CV file missing: ${file}`);
                }
            })
            .catch(error => {
                missingFiles.push(file);
                console.warn(`Error checking CV file: ${file}`, error);
            });
    });
    
    return missingFiles;
}

// Check CV files on load
window.addEventListener('load', checkCVFiles);
