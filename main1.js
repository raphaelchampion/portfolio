window.onload = () => {

    const header = document.querySelector('.barre-superieure');
    const links = document.querySelectorAll('.menu .lien');
    const bubble = document.querySelector('.bulle');
    const sections = document.querySelectorAll('main > section');
    const scrollIndicator = document.createElement('div'); 
    const footer = document.querySelector('.vagues-footer');

    scrollIndicator.classList.add('scroll-indicator');
    document.body.prepend(scrollIndicator); 

    // Header dynamique au défilement
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 1. Fonction Copie (Footer)
    window.copyToClipboard = (text, message) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(message); 
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
        });
    };

    // 2. Gestion de la Bulle animée
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

    // Clic sur les liens internes (#)
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

    // 3. Gestion du Scroll (Indicateur & ScrollSpy)
    if (sections.length > 0) {
        window.addEventListener('scroll', () => {
            const footerHeight = footer ? footer.offsetHeight : 0;
            const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const maxIndicatorHeight = window.innerHeight - footerHeight;

            const scrollFraction = window.scrollY / totalScrollableHeight;
            let indicatorHeight = scrollFraction * maxIndicatorHeight;

            indicatorHeight = Math.min(indicatorHeight, maxIndicatorHeight);
            scrollIndicator.style.height = `${indicatorHeight}px`;

            const scrollPosition = window.scrollY + 150; 
            let currentSectionId = '';

            sections.forEach(section => {
                if (section.id && section.offsetTop <= scrollPosition) {
                    currentSectionId = section.id;
                }
            });

            const activeLink = document.querySelector(`.menu a[data-section="${currentSectionId}"], .menu a[href="#${currentSectionId}"]`);
            
            if (activeLink && !activeLink.classList.contains('actif')) {
                links.forEach(l => l.classList.remove('actif'));
                activeLink.classList.add('actif');
                moveBubble(activeLink);
            }
        });
    }

    // 4. Initialisation des barres de progression
    function initializeSkillBars() {
        const colors = {
            faible: '#ff4500',
            moyen: '#1e90ff',
            eleve: '#228b22'
        };
        document.querySelectorAll('.barre-progression').forEach(bar => {
            const level = parseInt(bar.dataset.level); 
            const innerBar = bar.querySelector('.barre-interne');
            if (innerBar) {
                let color = level < 40 ? colors.faible : (level <= 70 ? colors.moyen : colors.eleve);
                innerBar.style.backgroundColor = color;
                setTimeout(() => {
                    innerBar.style.width = `${level}%`;
                }, 100);
            }
        });
    }
    initializeSkillBars();
};