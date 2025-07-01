const quizData = [
    {
        question: "Quel est le principal vecteur des attaques de phishing ?",
        answers: ["SMS", "Email", "Réseaux sociaux", "Téléphone"],
        correct: 1,
        explanation: "87% des attaques de phishing utilisent l'email comme vecteur principal d'attaque."
    },
    {
        question: "Quelle est la longueur minimale recommandée pour un mot de passe sécurisé ?",
        answers: ["6 caractères", "8 caractères", "12 caractères", "16 caractères"],
        correct: 2,
        explanation: "Un mot de passe de 12 caractères minimum avec des caractères variés est recommandé pour une sécurité optimale."
    },
    {
        question: "Que signifie le 'S' dans HTTPS ?",
        answers: ["Secure", "Safe", "Strong", "Standard"],
        correct: 0,
        explanation: "HTTPS signifie HyperText Transfer Protocol Secure, garantissant le chiffrement des données."
    },
    {
        question: "Quelle action ne devez-vous JAMAIS faire avec un email suspect ?",
        answers: ["Le signaler", "Le supprimer", "Cliquer sur les liens", "Le transférer aux collègues"],
        correct: 2,
        explanation: "Ne cliquez jamais sur les liens d'un email suspect, ils peuvent mener à des sites malveillants."
    },
    {
        question: "Combien de copies de sauvegarde recommande la règle 3-2-1 ?",
        answers: ["2 copies", "3 copies", "4 copies", "5 copies"],
        correct: 1,
        explanation: "La règle 3-2-1 : 3 copies au total, 2 sur supports différents, 1 hors site."
    },
    {
        question: "Qu'est-ce qui caractérise un email de phishing ?",
        answers: [
            "Un email provenant de votre banque avec votre nom complet",
            "Un email créant un sentiment d'urgence avec une adresse suspecte",
            "Un email de promotion d'un magasin connu"
        ],
        correct: 1,
        explanation: "Un email de phishing crée généralement un sentiment d'urgence et provient d'une adresse suspecte."
    },
    {
        question: "Que devez-vous faire si vous recevez un email suspect ?",
        answers: [
            "Cliquer sur le lien pour vérifier s'il est légitime",
            "Le supprimer immédiatement sans le signaler",
            "Le signaler à votre équipe IT et ne pas cliquer sur les liens"
        ],
        correct: 2,
        explanation: "Il faut toujours signaler les emails suspects et éviter de cliquer sur les liens."
    },
    {
        question: "Quelle est la meilleure protection contre le phishing ?",
        answers: [
            "Un antivirus puissant uniquement",
            "La formation et la sensibilisation des utilisateurs",
            "Éviter complètement l'utilisation d'emails"
        ],
        correct: 1,
        explanation: "La formation et la sensibilisation des utilisateurs restent la meilleure défense."
    },
    {
        question: "Comment reconnaître une URL suspecte ?",
        answers: [
            "Elle contient 'https://'",
            "Elle ressemble au site officiel mais avec des différences subtiles",
            "Elle est courte et simple"
        ],
        correct: 1,
        explanation: "Les URLs suspectes imitent souvent les sites officiels avec de subtiles différences."
    },
    {
        question: "Qu'est-ce que le spear phishing ?",
        answers: [
            "Une attaque par email de masse non ciblée",
            "Une attaque hautement personnalisée visant des individus spécifiques",
            "Une technique de pêche en mer"
        ],
        correct: 1,
        explanation: "Le spear phishing est une attaque ciblée et hautement personnalisée."
    },
    {
        question: "Quelle est la meilleure pratique pour les mots de passe ?",
        answers: ["Le même partout", "Différent pour chaque site", "Seulement des chiffres", "Écrit sur papier"],
        correct: 1,
        explanation: "Utilisez un mot de passe unique et complexe pour chaque compte ou service."
    },
    {
        question: "Que faire si vous recevez un email urgent de votre banque ?",
        answers: ["Cliquer immédiatement", "Appeler la banque", "Ignorer", "Transférer"],
        correct: 1,
        explanation: "Contactez toujours votre banque directement par téléphone pour vérifier l'authenticité."
    },
    {
        question: "Quelle information ne devez-vous JAMAIS partager sur les réseaux sociaux ?",
        answers: ["Vos hobbies", "Vos mots de passe", "Vos photos de vacances", "Votre musique préférée"],
        correct: 1,
        explanation: "Ne partagez jamais vos mots de passe ou informations sensibles sur les réseaux sociaux."
    },
    {
        question: "Que signifie l'authentification à deux facteurs (2FA) ?",
        answers: ["Deux mots de passe", "Mot de passe + code", "Deux comptes", "Double vérification"],
        correct: 1,
        explanation: "La 2FA combine votre mot de passe avec un code temporaire envoyé sur votre téléphone."
    },
    {
        question: "À quelle fréquence devriez-vous mettre à jour vos logiciels ?",
        answers: ["Une fois par an", "Quand ça plante", "Dès que possible", "Jamais"],
        correct: 2,
        explanation: "Mettez à jour vos logiciels dès que possible pour corriger les failles de sécurité."
    }
];

const articleContent = {
    phishing: {
        title: "🎣 Phishing : L'hameçon numérique",
        content: `
            <div class="space-y-6">
                <div class="bg-red-50 border-l-4 border-red-400 p-4">
                    <p class="text-sm text-red-700">
                        <strong>Alerte :</strong> 3,4 milliards d'emails de phishing envoyés quotidiennement dans le monde.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Qu'est-ce que le phishing ?</h3>
                <p>Le phishing (hameçonnage) est une technique d'ingénierie sociale utilisée par les cybercriminels pour obtenir frauduleusement des informations sensibles telles que :</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Identifiants de connexion</li>
                    <li>Mots de passe</li>
                    <li>Numéros de carte bancaire</li>
                    <li>Informations personnelles</li>
                    <li>Données confidentielles d'entreprise</li>
                </ul>
                
                <h3 class="text-xl font-semibold">Types de phishing</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-red-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-red-800 mb-2">📧 Email Phishing</h4>
                        <p class="text-sm text-red-700">Emails frauduleux imitant des organisations légitimes pour voler des informations personnelles.</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-orange-800 mb-2">📱 SMS Phishing (Smishing)</h4>
                        <p class="text-sm text-orange-700">Messages texte malveillants contenant des liens ou demandant des informations sensibles.</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-purple-800 mb-2">☎️ Voice Phishing (Vishing)</h4>
                        <p class="text-sm text-purple-700">Appels téléphoniques frauduleux se faisant passer pour des institutions de confiance.</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">🎯 Spear Phishing</h4>
                        <p class="text-sm text-blue-700">Attaques ciblées personnalisées visant des individus ou organisations spécifiques.</p>
                    </div>
                    <div class="bg-teal-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-teal-800 mb-2">🏢 Whaling</h4>
                        <p class="text-sm text-teal-700">Phishing ciblant spécifiquement les dirigeants d'entreprise.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Principes psychologiques</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-yellow-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-yellow-800 mb-2">⚡ Urgence</h4>
                        <p class="text-sm text-yellow-700">Créer un sentiment d'urgence pour pousser à l'action immédiate sans réflexion.</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-green-800 mb-2">🎭 Autorité</h4>
                        <p class="text-sm text-green-700">Se faire passer pour une autorité légitime (banque, administration, etc.).</p>
                    </div>
                    <div class="bg-indigo-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-indigo-800 mb-2">😰 Peur</h4>
                        <p class="text-sm text-indigo-700">Instiller la peur de conséquences négatives (compte suspendu, amende, etc.).</p>
                    </div>
                    <div class="bg-pink-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-pink-800 mb-2">🎁 Appât du gain</h4>
                        <p class="text-sm text-pink-700">Promettre des récompenses ou des gains financiers importants.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Processus d'une attaque</h3>
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div class="bg-blue-100 p-4 rounded-full text-center font-semibold text-blue-800 w-24 h-24 flex items-center justify-center">1. Préparation</div>
                    <div class="bg-blue-100 p-4 rounded-full text-center font-semibold text-blue-800 w-24 h-24 flex items-center justify-center">2. Ciblage</div>
                    <div class="bg-blue-100 p-4 rounded-full text-center font-semibold text-blue-800 w-24 h-24 flex items-center justify-center">3. Envoi</div>
                    <div class="bg-blue-100 p-4 rounded-full text-center font-semibold text-blue-800 w-24 h-24 flex items-center justify-center">4. Hameçonnage</div>
                    <div class="bg-blue-100 p-4 rounded-full text-center font-semibold text-blue-800 w-24 h-24 flex items-center justify-center">5. Exploitation</div>
                </div>
                
                <h3 class="text-xl font-semibold">Simulation d'un email de phishing</h3>
                <div class="bg-white p-6 rounded-lg border-l-4 border-red-400 warning-box">
                    <p class="text-sm text-gray-600 mb-4"><strong>ATTENTION :</strong> Ceci est une simulation éducative. Ne jamais reproduire ces techniques à des fins malveillantes.</p>
                    <div class="border-b-2 border-red-400 pb-2 mb-4">
                        <strong>De :</strong> noreply@banque-securite.com<br>
                        <strong>À :</strong> client.exemple@email.com<br>
                        <strong>Objet :</strong> 🚨 URGENT - Suspension temporaire de votre compte
                    </div>
                    <p>Cher(e) Client(e),</p>
                    <p>Nous avons détecté une activité suspecte sur votre compte bancaire. Pour votre sécurité, nous avons temporairement suspendu l'accès à vos services en ligne.</p>
                    <p class="bg-red-50 p-2 border-l-4 border-red-400 my-2">⏰ <strong>Action requise dans les 24 heures</strong><br>Votre compte sera définitivement fermé si vous ne confirmez pas votre identité.</p>
                    <p>Pour réactiver votre compte, <a href="#" class="text-red-600 underline">cliquez ici</a>.</p>
                    <p class="text-sm text-gray-500">https://banque-securite-verification.net/confirm/account</p>
                    <p>Cordialement,<br>L'équipe Sécurité de votre Banque</p>
                </div>
                
                <h3 class="text-xl font-semibold">Signaux d'alarme</h3>
                <ul class="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Urgence artificielle</strong> : "24 heures", "définitivement fermé"</li>
                    <li><strong>Adresse suspecte</strong> : Domaine différent de la vraie banque</li>
                    <li><strong>Demande d'action</strong> : Clic sur lien pour "confirmer"</li>
                    <li><strong>Menace</strong> : Fermeture du compte</li>
                    <li><strong>Généralité</strong> : "Cher(e) Client(e)" sans nom personnalisé</li>
                    <li><strong>URL trompeuse</strong> : Domaine similaire mais incorrect</li>
                </ul>
                
                <h3 class="text-xl font-semibold">Comparatif : Attaquant vs Victime</h3>
                <table class="w-full border-collapse bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th class="bg-green-100 text-green-800 p-4 text-left">Aspect</th>
                            <th class="bg-green-100 text-green-800 p-4 text-left">Avantages pour l'attaquant</th>
                            <th class="bg-green-100 text-green-800 p-4 text-left">Inconvénients pour l'attaquant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-4 border-b">Coût</td>
                            <td class="p-4 border-b">Très faible coût d'exécution</td>
                            <td class="p-4 border-b">Investissement initial en infrastructure</td>
                        </tr>
                        <tr class="bg-gray-50">
                            <td class="p-4 border-b">Échelle</td>
                            <td class="p-4 border-b">Attaque de masse possible</td>
                            <td class="p-4 border-b">Taux de réussite généralement faible</td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b">Détection</td>
                            <td class="p-4 border-b">Difficile à tracer initialement</td>
                            <td class="p-4 border-b">Facilement détectable par les filtres modernes</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3 class="text-xl font-semibold">Mesures de prévention</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-green-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-green-800 mb-2">👥 Pour les utilisateurs</h4>
                        <ul class="text-sm text-green-700 space-y-1">
                            <li>• Vérifier l'adresse de l'expéditeur</li>
                            <li>• Survoler les liens sans cliquer</li>
                            <li>• Contacter directement l'organisation</li>
                            <li>• Utiliser l'authentification à deux facteurs</li>
                            <li>• Se former aux techniques de phishing</li>
                        </ul>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">🏢 Pour les organisations</h4>
                        <ul class="text-sm text-blue-700 space-y-1">
                            <li>• Filtres anti-spam avancés</li>
                            <li>• Authentification SPF/DKIM/DMARC</li>
                            <li>• Simulations d'attaques contrôlées</li>
                            <li>• Plan de réponse aux incidents</li>
                            <li>• Formation régulière des employés</li>
                        </ul>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Que faire si vous êtes victime ?</h3>
                <div class="bg-blue-50 p-6 rounded-lg warning-box">
                    <h4 class="font-semibold text-blue-800 mb-3">💡 Plan d'action d'urgence</h4>
                    <ol class="list-decimal pl-6 space-y-2 text-blue-700">
                        <li>Arrêter immédiatement toute action sur l'email suspect</li>
                        <li>Signaler l'incident à l'équipe IT/sécurité</li>
                        <li>Déconnecter la machine du réseau si nécessaire</li>
                        <li>Changer tous les mots de passe potentiellement compromis</li>
                        <li>Scanner le système à la recherche de malwares</li>
                        <li>Documenter l'incident pour analyse future</li>
                        <li>Signaler aux autorités via <a href="https://www.cybermalveillance.gouv.fr" target="_blank" class="underline">cybermalveillance.gouv.fr</a></li>
                    </ol>
                </div>
            </div>
        `
    },
    passwords: {
        title: "🔐 Mots de passe sécurisés",
        content: `
            <div class="space-y-6">
                <div class="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <p class="text-sm text-orange-700">
                        <strong>Statistique :</strong> 81% des violations de données sont dues à des mots de passe faibles ou volés.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Créer un mot de passe fort</h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold mb-3">✅ Caractéristiques d'un bon mot de passe</h4>
                        <ul class="space-y-2 text-sm">
                            <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Au moins 12 caractères</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Mélange de majuscules et minuscules</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Chiffres et caractères spéciaux</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Unique pour chaque compte</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Pas d'informations personnelles</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-3">❌ À éviter absolument</h4>
                        <ul class="space-y-2 text-sm">
                            <li class="flex items-center"><span class="text-red-500 mr-2">•</span> 123456, password, azerty</li>
                            <li class="flex items-center"><span class="text-red-500 mr-2">•</span> Votre nom ou date de naissance</li>
                            <li class="flex items-center"><span class="text-red-500 mr-2">•</span> Mots du dictionnaire seuls</li>
                            <li class="flex items-center"><span class="text-red-500 mr-2">•</span> Réutiliser le même mot de passe</li>
                            <li class="flex items-center"><span class="text-red-500 mr-2">•</span> Le partager avec quelqu'un</li>
                        </ul>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Techniques de création</h3>
                <div class="space-y-4">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-blue-800 mb-2">Méthode des phrases de passe</h4>
                        <p class="text-sm text-blue-700 mb-2">Créez une phrase mémorable et transformez-la :</p>
                        <div class="bg-white p-3 rounded border">
                            <p class="text-sm">"J'ai 25 ans et j'adore les pizza!" → <code>J'25a&j'♥les🍕!</code></p>
                        </div>
                    </div>
                    
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-semibold text-purple-800 mb-2">Méthode de l'acronyme</h4>
                        <p class="text-sm text-purple-700 mb-2">Prenez la première lettre de chaque mot d'une phrase :</p>
                        <div class="bg-white p-3 rounded border">
                            <p class="text-sm">"Mon chat noir mange 3 croquettes à 18h" → <code>McnM3cA18h!</code></p>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Gestionnaires de mots de passe</h3>
                <div class="bg-green-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-green-800 mb-3">🛡️ Pourquoi utiliser un gestionnaire ?</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <ul class="space-y-2 text-sm text-green-700">
                            <li>• Génère des mots de passe complexes</li>
                            <li>• Stockage sécurisé et chiffré</li>
                            <li>• Un seul mot de passe à retenir</li>
                            <li>• Synchronisation multi-appareils</li>
                        </ul>
                        <ul class="space-y-2 text-sm text-green-700">
                            <li>• Détection des mots de passe faibles</li>
                            <li>• Alerte en cas de violation</li>
                            <li>• Remplissage automatique</li>
                            <li>• Partage sécurisé</li>
                        </ul>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-yellow-800 mb-2">⚡ Test de force de mot de passe</h4>
                    <p class="text-sm text-yellow-700">Un mot de passe de 8 caractères peut être cracké en quelques heures, tandis qu'un mot de passe de 12 caractères prendrait des milliers d'années avec la technologie actuelle.</p>
                </div>
            </div>
        `
    },
    social: {
        title: "📱 Réseaux sociaux : Attention aux pièges",
        content: `
            <div class="space-y-6">
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p class="text-sm text-yellow-700">
                        <strong>Attention :</strong> 78% des utilisateurs partagent trop d'informations personnelles sur les réseaux sociaux.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Les risques des réseaux sociaux</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="space-y-4">
                        <div class="bg-red-50 p-4 rounded-lg principe-card">
                            <h4 class="font-semibold text-red-800 mb-2">🎯 Ingénierie sociale</h4>
                            <p class="text-sm text-red-700">Les cybercriminels utilisent vos informations publiques pour créer des attaques personnalisées et crédibles.</p>
                        </div>
                        
                        <div class="bg-orange-50 p-4 rounded-lg principe-card">
                            <h4 class="font-semibold text-orange-800 mb-2">🔍 Usurpation d'identité</h4>
                            <p class="text-sm text-orange-700">Vos photos et informations peuvent être utilisées pour créer de faux profils à votre nom.</p>
                        </div>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="bg-purple-50 p-4 rounded-lg principe-card">
                            <h4 class="font-semibold text-purple-800 mb-2">📍 Géolocalisation</h4>
                            <p class="text-sm text-purple-700">Le partage de votre localisation peut révéler vos habitudes et compromettre votre sécurité physique.</p>
                        </div>
                        
                        <div class="bg-blue-50 p-4 rounded-lg principe-card">
                            <h4 class="font-semibold text-blue-800 mb-2">💼 Impact professionnel</h4>
                            <p class="text-sm text-blue-700">Vos publications peuvent affecter votre réputation et vos opportunités professionnelles.</p>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Informations à ne jamais partager</h3>
                <div class="bg-red-50 p-6 rounded-lg">
                    <div class="grid md:grid-cols-2 gap-4">
                        <ul class="space-y-2 text-sm text-red-700">
                            <li>• Numéro de sécurité sociale</li>
                            <li>• Adresse complète</li>
                            <li>• Numéros de téléphone</li>
                            <li>• Informations bancaires</li>
                            <li>• Mots de passe</li>
                        </ul>
                        <ul class="space-y-2 text-sm text-red-700">
                            <li>• Photos de documents officiels</li>
                            <li>• Planning détaillé</li>
                            <li>• Informations sur vos enfants</li>
                            <li>• Détails sur vos voyages</li>
                            <li>• Problèmes personnels</li>
                        </ul>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Paramètres de confidentialité</h3>
                <div class="space-y-4">
                    <div class="border-l-4 border-green-400 pl-4">
                        <h4 class="font-semibold">Profil privé</h4>
                        <p class="text-sm text-gray-600">Configurez votre profil en privé pour contrôler qui peut voir vos publications.</p>
                    </div>
                    <div class="border-l-4 border-blue-400 pl-4">
                        <h4 class="font-semibold">Géolocalisation</h4>
                        <p class="text-sm text-gray-600">Désactivez le partage automatique de localisation sur vos photos et publications.</p>
                    </div>
                    <div class="border-l-4 border-purple-400 pl-4">
                        <h4 class="font-semibold">Indexation</h4>
                        <p class="text-sm text-gray-600">Empêchez les moteurs de recherche d'indexer votre profil.</p>
                    </div>
                </div>
                
                <div class="bg-green-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-green-800 mb-3">✅ Bonnes pratiques</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                        <ul class="space-y-2 text-sm text-green-700">
                            <li>• Vérifiez régulièrement vos paramètres</li>
                            <li>• Limitez vos amis/contacts</li>
                            <li>• Réfléchissez avant de publier</li>
                            <li>• Utilisez l'authentification à deux facteurs</li>
                        </ul>
                        <ul class="space-y-2 text-sm text-green-700">
                            <li>• Méfiez-vous des applications tierces</li>
                            <li>• Surveillez les mentions de votre nom</li>
                            <li>• Éduquez vos proches</li>
                            <li>• Signalez les contenus suspects</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    wifi: {
        title: "📶 WiFi public : Zone de danger",
        content: `
            <div class="space-y-6">
                <div class="bg-red-50 border-l-4 border-red-400 p-4">
                    <p class="text-sm text-red-700">
                        <strong>Danger :</strong> 69% des utilisateurs se connectent automatiquement aux WiFi publics sans vérification.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Pourquoi les WiFi publics sont-ils dangereux ?</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-orange-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-orange-800 mb-2">🕳️ Absence de chiffrement</h4>
                        <p class="text-sm text-orange-700">La plupart des WiFi publics ne chiffrent pas les données, rendant votre trafic visible à tous.</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-red-800 mb-2">🎭 Faux points d'accès</h4>
                        <p class="text-sm text-red-700">Les pirates créent de faux hotspots avec des noms attractifs pour intercepter vos données.</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-purple-800 mb-2">👥 Utilisateurs malveillants</h4>
                        <p class="text-sm text-purple-700">D'autres utilisateurs du réseau peuvent espionner votre trafic avec des outils simples.</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">🦠 Malware</h4>
                        <p class="text-sm text-blue-700">Les réseaux compromis peuvent injecter des logiciels malveillants sur votre appareil.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Attaques courantes sur WiFi public</h3>
                <div class="space-y-4">
                    <div class="border-l-4 border-red-400 pl-4">
                        <h4 class="font-semibold">Man-in-the-Middle (MITM)</h4>
                        <p class="text-sm text-gray-600">L'attaquant s'interpose entre vous et le site web pour intercepter vos communications.</p>
                    </div>
                    <div class="border-l-4 border-orange-400 pl-4">
                        <h4 class="font-semibold">Packet Sniffing</h4>
                        <p class="text-sm text-gray-600">Capture et analyse de tous les paquets de données transitant sur le réseau.</p>
                    </div>
                    <div class="border-l-4 border-purple-400 pl-4">
                        <h4 class="font-semibold">Evil Twin</h4>
                        <p class="text-sm text-gray-600">Création d'un faux point d'accès imitant un réseau légitime.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Se protéger sur WiFi public</h3>
                <div class="bg-green-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-green-800 mb-3">🛡️ Mesures de protection</h4>
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">1.</span>
                            <div>
                                <h5 class="font-semibold">Utilisez un VPN</h5>
                                <p class="text-sm text-green-700">Chiffrez tout votre trafic avec un VPN fiable et réputé.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">2.</span>
                            <div>
                                <h5 class="font-semibold">Vérifiez HTTPS</h5>
                                <p class="text-sm text-green-700">Assurez-vous que tous les sites utilisent HTTPS (cadenas dans l'URL).</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">3.</span>
                            <div>
                                <h5 class="font-semibold">Désactivez le partage</h5>
                                <p class="text-sm text-green-700">Mettez votre appareil en mode "réseau public" pour désactiver le partage de fichiers.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">4.</span>
                            <div>
                                <h5 class="font-semibold">Évitez les données sensibles</h5>
                                <p class="text-sm text-green-700">Ne vous connectez pas à vos comptes bancaires ou ne saisissez pas d'informations sensibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Alternatives au WiFi public</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">📱 Partage de connexion</h4>
                        <p class="text-sm text-blue-700">Utilisez votre smartphone comme hotspot personnel, plus sécurisé que le WiFi public.</p>
                    </div>
                    <div class="bg-indigo-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-indigo-800 mb-2">💳 Forfait data</h4>
                        <p class="text-sm text-indigo-700">Investissez dans un forfait data généreux pour éviter la dépendance au WiFi public.</p>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-yellow-800 mb-2">⚠️ Règle d'or</h4>
                    <p class="text-sm text-yellow-700">Si c'est gratuit et ouvert, considérez que tout le monde peut voir ce que vous faites. Agissez en conséquence !</p>
                </div>
            </div>
        `
    },
    ransomware: {
        title: "🦠 Ransomware : La rançon numérique",
        content: `
            <div class="space-y-6">
                <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
                    <p class="text-sm text-purple-700">
                        <strong>Alerte :</strong> Les attaques de ransomware ont augmenté de 150% entre 2020 et 2024.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Qu'est-ce qu'un ransomware ?</h3>
                <p>Un ransomware est un type de logiciel malveillant qui chiffre vos fichiers et exige une rançon (souvent en cryptomonnaie) pour les déverrouiller. Les victimes perdent l'accès à leurs données critiques et peuvent subir des pertes financières importantes.</p>
                
                <h3 class="text-xl font-semibold">Comment se propage-t-il ?</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-red-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-red-800 mb-2">📧 Phishing</h4>
                        <p class="text-sm text-red-700">Les emails frauduleux contenant des pièces jointes ou des liens malveillants sont la principale porte d'entrée.</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-orange-800 mb-2">🕳️ Failles logicielles</h4>
                        <p class="text-sm text-orange-700">Les logiciels non mis à jour permettent aux attaquants d'exploiter des vulnérabilités.</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-purple-800 mb-2">📥 Téléchargements malveillants</h4>
                        <p class="text-sm text-purple-700">Télécharger des fichiers ou logiciels depuis des sources non fiables peut installer un ransomware.</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">📶 Réseaux compromis</h4>
                        <p class="text-sm text-blue-700">Un appareil infecté sur un réseau peut propager le ransomware aux autres appareils.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Conséquences d'une attaque</h3>
                <div class="space-y-4">
                    <div class="border-l-4 border-red-400 pl-4">
                        <h4 class="font-semibold">Perte de données</h4>
                        <p class="text-sm text-gray-600">Même après paiement, il n'y a aucune garantie de récupérer vos fichiers.</p>
                    </div>
                    <div class="border-l-4 border-orange-400 pl-4">
                        <h4 class="font-semibold">Coût financier</h4>
                        <p class="text-sm text-gray-600">Les coûts incluent la rançon, la perte de productivité et les frais de récupération.</p>
                    </div>
                    <div class="border-l-4 border-purple-400 pl-4">
                        <h4 class="font-semibold">Atteinte à la réputation</h4>
                        <p class="text-sm text-gray-600">Une violation peut nuire à la confiance des clients et partenaires.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Prévention contre les ransomwares</h3>
                <div class="bg-green-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-green-800 mb-3">🛡️ Mesures de protection</h4>
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">1.</span>
                            <div>
                                <h5 class="font-semibold">Sauvegardes régulières</h5>
                                <p class="text-sm text-green-700">Suivez la règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">2.</span>
                            <div>
                                <h5 class="font-semibold">Mises à jour</h5>
                                <p class="text-sm text-green-700">Maintenez tous vos logiciels et systèmes à jour pour corriger les failles.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">3.</span>
                            <div>
                                <h5 class="font-semibold">Formation</h5>
                                <p class="text-sm text-green-700">Sensibilisez-vous aux techniques de phishing pour éviter les infections.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">4.</span>
                            <div>
                                <h5 class="font-semibold">Antivirus</h5>
                                <p class="text-sm text-green-700">Utilisez un logiciel antivirus fiable avec détection des ransomwares.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Que faire en cas d'attaque ?</h3>
                <div class="bg-blue-50 p-6 rounded-lg warning-box">
                    <h4 class="font-semibold text-blue-800 mb-3">💡 Plan d'action d'urgence</h4>
                    <ol class="list-decimal pl-6 space-y-2 text-blue-700">
                        <li>Déconnectez immédiatement l'appareil infecté du réseau</li>
                        <li>Signalez l'incident à votre équipe IT ou à un expert</li>
                        <li>Ne payez pas la rançon (aucune garantie de récupération)</li>
                        <li>Restaurez vos données à partir d'une sauvegarde</li>
                        <li>Analysez le système pour supprimer le malware</li>
                        <li>Signalez aux autorités via <a href="https://www.cybermalveillance.gouv.fr" target="_blank" class="underline">cybermalveillance.gouv.fr</a></li>
                    </ol>
                </div>
            </div>
        `
    },
    updates: {
        title: "🔄 Mises à jour : Votre bouclier",
        content: `
            <div class="space-y-6">
                <div class="bg-green-50 border-l-4 border-green-400 p-4">
                    <p class="text-sm text-green-700">
                        <strong>Statistique :</strong> 60% des violations de données exploitent des failles connues mais non corrigées.
                    </p>
                </div>
                
                <h3 class="text-xl font-semibold">Pourquoi les mises à jour sont-elles essentielles ?</h3>
                <p>Les mises à jour logicielles corrigent les vulnérabilités exploitées par les cybercriminels. Négliger les mises à jour expose vos appareils à des attaques évitables.</p>
                
                <h3 class="text-xl font-semibold">Types de mises à jour</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-blue-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-blue-800 mb-2">🖥️ Système d'exploitation</h4>
                        <p class="text-sm text-blue-700">Windows, macOS, Linux : les mises à jour du système protègent contre les exploits.</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-purple-800 mb-2">🌐 Navigateurs</h4>
                        <p class="text-sm text-purple-700">Chrome, Firefox, Safari : les navigateurs sont des cibles fréquentes.</p>
                    </div>
                    <div class="bg-orange-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-orange-800 mb-2">📱 Applications</h4>
                        <p class="text-sm text-orange-700">Mettez à jour toutes les applications, y compris les apps mobiles.</p>
                    </div>
                    <div class="bg-red-50 p-4 rounded-lg principe-card">
                        <h4 class="font-semibold text-red-800 mb-2">🔒 Antivirus</h4>
                        <p class="text-sm text-red-700">Les bases de données antivirus doivent être à jour pour détecter les nouvelles menaces.</p>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Bonnes pratiques</h3>
                <div class="bg-green-50 p-6 rounded-lg">
                    <h4 class="font-semibold text-green-800 mb-3">✅ Conseils pour rester à jour</h4>
                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">1.</span>
                            <div>
                                <h5 class="font-semibold">Activez les mises à jour automatiques</h5>
                                <p class="text-sm text-green-700">Laissez votre système gérer les mises à jour pour plus de simplicité.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">2.</span>
                            <div>
                                <h5 class="font-semibold">Vérifiez régulièrement</h5>
                                <p class="text-sm text-green-700">Vérifiez les mises à jour manuellement si l'automatisation est désactivée.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">3.</span>
                            <div>
                                <h5 class="font-semibold">Redémarrez après mise à jour</h5>
                                <p class="text-sm text-green-700">Certaines mises à jour nécessitent un redémarrage pour être effectives.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <span class="text-green-600 font-bold">4.</span>
                            <div>
                                <h5 class="font-semibold">Utilisez des sources officielles</h5>
                                <p class="text-sm text-green-700">Téléchargez uniquement depuis les stores officiels ou sites fiables.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h3 class="text-xl font-semibold">Que faire si une mise à jour échoue ?</h3>
                <div class="bg-blue-50 p-6 rounded-lg warning-box">
                    <h4 class="font-semibold text-blue-800 mb-3">💡 Étapes de dépannage</h4>
                    <ol class="list-decimal pl-6 space-y-2 text-blue-700">
                        <li>Vérifiez votre connexion Internet</li>
                        <li>Redémarrez votre appareil</li>
                        <li>Libérez de l'espace disque</li>
                        <li>Consultez le support technique du logiciel</li>
                        <li>Contactez un professionnel si nécessaire</li>
                    </ol>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-yellow-800 mb-2">⚠️ Attention</h4>
                    <p class="text-sm text-yellow-700">Ne retardez pas les mises à jour. Chaque jour sans mise à jour augmente votre vulnérabilité.</p>
                </div>
            </div>
        `
    }
};

const tipsData = [
    {
        emoji: "✅",
        title: "Utilisez l'authentification à deux facteurs",
        description: "Activez la 2FA sur tous vos comptes importants. Une couche de sécurité supplémentaire qui fait la différence.",
        color: "green"
    },
    {
        emoji: "🔄",
        title: "Maintenez vos logiciels à jour",
        description: "Les mises à jour corrigent les failles de sécurité. Activez les mises à jour automatiques quand c'est possible.",
        color: "blue"
    },
    {
        emoji: "🔐",
        title: "Gestionnaire de mots de passe",
        description: "Utilisez un gestionnaire pour créer et stocker des mots de passe uniques et complexes pour chaque compte.",
        color: "purple"
    },
    {
        emoji: "⏸️",
        title: "Pause réflexion",
        description: "Prenez le temps de réfléchir avant d'agir, surtout face à une demande urgente.",
        color: "indigo"
    },
    {
        emoji: "⚠️",
        title: "Méfiez-vous des emails suspects",
        description: "Vérifiez l'expéditeur, les liens et les pièces jointes. En cas de doute, contactez directement l'organisation.",
        color: "red"
    },
    {
        emoji: "💾",
        title: "Sauvegardez régulièrement",
        description: "La règle 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Protégez-vous contre les ransomwares.",
        color: "orange"
    },
    {
        emoji: "🌐",
        title: "Sécurisez votre navigation",
        description: "Utilisez HTTPS, évitez les WiFi publics pour les données sensibles, et considérez un VPN.",
        color: "yellow"
    },
    {
        emoji: "🎓",
        title: "Formez-vous régulièrement",
        description: "Participez à des sessions de sensibilisation pour reconnaître les nouvelles techniques de phishing.",
        color: "teal"
    }
];