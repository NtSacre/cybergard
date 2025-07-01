let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize articles
    renderArticles();
    // Initialize tips
    renderTips();
    // Setup animations
    setupAnimations();
});

// Render articles dynamically
function renderArticles() {
    const articlesContainer = document.getElementById('articles-container');
    const articles = [
        {
            id: 'phishing',
            emoji: '🎣',
            title: 'Phishing : L\'hameçon numérique',
            description: 'Les emails frauduleux représentent 87% des cyberattaques. Apprenez à les reconnaître.',
            color: 'red',
            level: 'Critique',
            readTime: '7 min'
        },
        {
            id: 'passwords',
            emoji: '🔐',
            title: 'Mots de passe sécurisés',
            description: 'Votre première ligne de défense. Créez des mots de passe inviolables.',
            color: 'orange',
            level: 'Important',
            readTime: '3 min'
        },
        {
            id: 'social',
            emoji: '📱',
            title: 'Réseaux sociaux : Attention aux pièges',
            description: 'Vos données personnelles valent de l\'or. Protégez votre vie privée.',
            color: 'yellow',
            level: 'Modéré',
            readTime: '4 min'
        },
        {
            id: 'wifi',
            emoji: '📶',
            title: 'WiFi public : Zone de danger',
            description: 'Les réseaux publics sont des nids à pirates. Naviguez en sécurité.',
            color: 'blue',
            level: 'Important',
            readTime: '6 min'
        },
        {
            id: 'ransomware',
            emoji: '🦠',
            title: 'Ransomware : La rançon numérique',
            description: 'Vos fichiers pris en otage. Prévention et réaction face au chantage.',
            color: 'purple',
            level: 'Critique',
            readTime: '7 min'
        },
        {
            id: 'updates',
            emoji: '🔄',
            title: 'Mises à jour : Votre bouclier',
            description: 'Les failles de sécurité se corrigent. Ne négligez jamais les mises à jour.',
            color: 'green',
            level: 'Essentiel',
            readTime: '2 min'
        }
    ];

    articlesContainer.innerHTML = articles.map(article => `
        <article class="bg-gradient-to-br from-${article.color}-50 to-${article.color}-100 rounded-xl p-6 hover-lift hover:shadow-xl transition-all duration-300 cursor-pointer" onclick="openArticle('${article.id}')">
            <div class="text-4xl mb-4">${article.emoji}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">${article.title}</h3>
            <p class="text-gray-700 mb-4">${article.description}</p>
            <div class="flex items-center justify-between">
                <span class="bg-${article.color}-200 text-${article.color}-800 px-3 py-1 rounded-full text-sm font-medium">${article.level}</span>
                <span class="text-sm text-gray-500">${article.readTime} de lecture</span>
            </div>
        </article>
    `).join('');
}

// Render tips dynamically
function renderTips() {
    const tipsContainer = document.getElementById('tips-container');
    tipsContainer.innerHTML = `
        <div class="space-y-6">
            ${tipsData.slice(0, 4).map(tip => `
                <div class="flex items-start space-x-4 p-6 bg-${tip.color}-50 rounded-lg tip-card">
                    <div class="text-2xl">${tip.emoji}</div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-2">${tip.title}</h3>
                        <p class="text-gray-600">${tip.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="space-y-6">
            ${tipsData.slice(4).map(tip => `
                <div class="flex items-start space-x-4 p-6 bg-${tip.color}-50 rounded-lg tip-card">
                    <div class="text-2xl">${tip.emoji}</div>
                    <div>
                        <h3 class="font-semibold text-gray-900 mb-2">${tip.title}</h3>
                        <p class="text-gray-600">${tip.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Close alert banner
function closeAlert() {
    document.getElementById('alert-banner').style.display = 'none';
}

// Particle effect for hero section
function createParticles() {
    const section = document.getElementById('accueil');
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    section.style.position = 'relative';
    section.style.overflow = 'hidden';
    section.appendChild(particle);
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 6000);
}
setInterval(createParticles, 800);

// Typewriter effect for hero title and card animations
function setupAnimations() {
    const title = document.getElementById('hero-title');
    const originalText = title.textContent;
    title.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 500);

    // Card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
                entry.target.classList.add('hover-lift');
            } else {
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.opacity = '0.5';
                entry.target.classList.remove('hover-lift');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.principe-card, .tip-card, .warning-box').forEach(card => {
        card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0.5';
        observer.observe(card);
    });
}

// Quiz functionality
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('score').textContent = score;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / quizData.length) * 100}%`;
    document.getElementById('question-text').textContent = question.question;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = question.answers.map((answer, index) => `
        <button onclick="selectAnswer(${index})" class="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border ${selectedAnswer === index ? 'border-primary' : 'border-gray-200'}">
            ${answer}
        </button>
    `).join('');

    document.getElementById('question-result').classList.add('hidden');
    document.getElementById('next-question').classList.add('hidden');
}

function selectAnswer(index) {
    selectedAnswer = index;
    const question = quizData[currentQuestionIndex];
    const resultText = document.getElementById('result-text');
    const explanation = document.getElementById('explanation');
    const questionResult = document.getElementById('question-result');

    // Update button styles
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach((btn, idx) => {
        btn.classList.remove('border-primary', 'bg-green-100', 'bg-red-100');
        if (idx === question.correct) {
            btn.classList.add('bg-green-100', 'border-green-500');
        } else if (idx === index && index !== question.correct) {
            btn.classList.add('bg-red-100', 'border-red-500');
        }
    });

    // Show result
    if (index === question.correct) {
        score++;
        document.getElementById('score').textContent = score;
        resultText.textContent = 'Correct !';
        resultText.classList.remove('text-red-600');
        resultText.classList.add('text-green-600');
    } else {
        resultText.textContent = 'Incorrect';
        resultText.classList.remove('text-green-600');
        resultText.classList.add('text-red-600');
    }
    explanation.textContent = question.explanation;
    questionResult.classList.remove('hidden');
    document.getElementById('next-question').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    selectedAnswer = null;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    const percentage = (score / quizData.length) * 100;
    const resultsEmoji = document.getElementById('results-emoji');
    const resultsTitle = document.getElementById('results-title');
    const resultsMessage = document.getElementById('results-message');
    const finalScore = document.getElementById('final-score');

    finalScore.textContent = `${score}/${quizData.length}`;
    
    if (percentage >= 80) {
        resultsEmoji.textContent = '🏆';
        resultsTitle.textContent = 'Excellent travail !';
        resultsMessage.textContent = 'Vous êtes un véritable CyberGuard ! Continuez à rester vigilant.';
    } else if (percentage >= 50) {
        resultsEmoji.textContent = '👍';
        resultsTitle.textContent = 'Bon effort !';
        resultsMessage.textContent = 'Vous avez de bonnes bases, mais il y a encore des progrès à faire.';
    } else {
        resultsEmoji.textContent = '📚';
        resultsTitle.textContent = 'Il est temps de réviser !';
        resultsMessage.textContent = 'Explorez nos articles pour renforcer vos connaissances en cybersécurité.';
    }
}

function restartQuiz() {
    document.getElementById('quiz-results').classList.add('hidden');
    startQuiz();
}

// Article modal
function openArticle(articleId) {
    const modal = document.getElementById('article-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    const article = articleContent[articleId];
    if (article) {
        modalTitle.textContent = article.title;
        modalContent.innerHTML = article.content;
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    document.getElementById('article-modal').classList.add('hidden');
}