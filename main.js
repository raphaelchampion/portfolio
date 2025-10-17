window.onload = () => {

    const header = document.querySelector('.barre-superieure');
    const links = document.querySelectorAll('.menu .lien');
    const bubble = document.querySelector('.bulle');
    const sections = document.querySelectorAll('main > section');
    const scrollIndicator = document.createElement('div'); 
    const footer = document.querySelector('.vagues-footer'); // On cible le footer

    scrollIndicator.classList.add('scroll-indicator');
    document.body.prepend(scrollIndicator); 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    /* ---------------------------------------------------- */
    /* 1. Fonction Copie (Footer)                           */
    /* ---------------------------------------------------- */
    window.copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(message); 
        }).catch(err => {
            console.error('Erreur lors de la copie: ', err);
        });
    };

    /* ---------------------------------------------------- */
    /* 2. Gestion de la Bulle animée                        */
    /* ---------------------------------------------------- */
    function moveBubble(el) {
        if (!el || !bubble) return;
        const menu = bubble.parentElement; 
        if (!menu) return;
        const elRect = el.getBoundingClientRect();
        const parentRect = menu.getBoundingClientRect();
        bubble.style.left = `${elRect.left - parentRect.left}px`;
        bubble.style.width = `${elRect.width}px`;
    }

    const activeLinkInitial = document.querySelector('.lien.actif');
    if (activeLinkInitial) {
        moveBubble(activeLinkInitial);
    }

    links.forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                links.forEach(l => l.classList.remove('actif'));
                link.classList.add('actif');
                moveBubble(link);
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 105,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.lien.actif');
        if (activeLink) moveBubble(activeLink);
    });

    /* ---------------------------------------------------- */
    /* 3. Gestion du Scroll (Bulle & Barre)                 */
    /* ---------------------------------------------------- */
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            
            // A. Barre de Progression (CORRIGÉ POUR LE FOOTER)
            const footerHeight = footer.offsetHeight;
            const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const maxIndicatorHeight = window.innerHeight - footerHeight; // Hauteur max que la barre peut atteindre en pixels

            const scrollFraction = window.scrollY / totalScrollableHeight; // Progrès du scroll (de 0 à 1)
            let indicatorHeight = scrollFraction * maxIndicatorHeight; // Hauteur actuelle de la barre en pixels

            // On s'assure que la barre ne dépasse jamais la hauteur maximale
            indicatorHeight = Math.min(indicatorHeight, maxIndicatorHeight);
            
            scrollIndicator.style.height = `${indicatorHeight}px`; // On applique la hauteur en pixels

            // B. Mise à jour de la Bulle/Lien actif (inchangé)
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSectionId = '';

            sections.forEach(section => {
                if (section.id && section.offsetTop <= scrollPosition) {
                    currentSectionId = section.id;
                }
            });

            const activeLink = document.querySelector(`.menu a[data-section="${currentSectionId}"]`);
            
            if (activeLink && !activeLink.classList.contains('actif')) {
                links.forEach(l => l.classList.remove('actif'));
                activeLink.classList.add('actif');
                moveBubble(activeLink);
            }
        });
    }

    /* ---------------------------------------------------- */
    /* 4. Barres de Compétences (Inchangé)                  */
    /* ---------------------------------------------------- */
    function initializeSkillBars() {
        const colors = {
            faible: '#ff4500',
            moyen: '#1e90ff',
            eleve: '#228b22'
        };
        document.querySelectorAll('.barre-progression').forEach(bar => {
            const level = parseInt(bar.dataset.level); 
            const innerBar = bar.querySelector('.barre-interne');
            let color = level < 40 ? colors.faible : (level <= 70 ? colors.moyen : colors.eleve);
            innerBar.style.backgroundColor = color;
            setTimeout(() => {
                innerBar.style.width = `${level}%`;
            }, 100); 
        });
    }
    initializeSkillBars();
};