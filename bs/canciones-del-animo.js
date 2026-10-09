const moods = {
    estresada: { label: 'Estrés', heading: 'Canciones para cuando todo pesa', description: 'Del trabajo o por Sebastián: respira, esta selección es para ti.', message: 'Isa, no tienes que poder con todo hoy. Estoy contigo, mi vida.' },
    enojada: { label: 'Enojo', heading: 'Canciones para soltar el enojo', description: 'Para cuando estás enojada o sientes que alguien se te pone en contra.', message: 'Mi reina, puedes sentir todo esto. Yo sigo aquí para ti.' },
    orgullosa: { label: 'Orgullo propio', heading: 'Canciones para celebrar lo que eres', description: 'Para reconocer todo lo que has logrado por ti misma.', message: 'Mira todo lo que has conseguido, Isa. Qué orgullo tan grande me das.' },
    feliz: { label: 'Feliz', heading: 'Canciones para cuando estás feliz', description: 'Una selección para acompañar un buen día.', message: 'Me hace feliz verte feliz. Guarda este momento en el corazón.' },
    'muy-feliz': { label: 'Muy feliz', heading: 'Canciones para cuando estás muy feliz', description: 'Para esos días en que la alegría no cabe en el pecho.', message: 'Ojalá pudiera guardar esta sonrisa y devolvértela siempre.' },
    extrañando: { label: 'Extrañando a alguien', heading: 'Canciones para cuando extrañas a alguien', description: 'Para tener cerca, aunque sea por una canción, a quien te hace falta.', message: 'Aunque alguien te haga falta, aquí tienes un abrazo mío.' },
    'muy-triste': { label: 'Muy triste', heading: 'Canciones para cuando estás muy triste', description: 'No tienes que apurarte a sentirte mejor. Tómate tu tiempo.', message: 'No tienes que fingir que todo está bien. Quédate cerca de mí.' },
    decepcionada: { label: 'Decepcionada de ti', heading: 'Canciones para cuando te decepcionas de ti misma', description: 'Un momento difícil no define todo lo que eres.', message: 'Un momento difícil no cambia lo increíble que eres. Te quiero completa.' },
    'se-odia': { label: 'Dura contigo misma', heading: 'Canciones para los días en que te cuesta quererte', description: 'Para acompañarte sin juzgar lo que sientes.', message: 'Cuando te cueste quererte, déjame recordarte cuánto te quiero.' },
    enamorada: { label: 'Enamorada', heading: 'Canciones para cuando estás enamorada', description: 'Para eso que se siente sin explicación.', message: 'Qué bonito que tu corazón todavía se emocione así, mi vida.' },
    triste: { label: 'Triste', heading: 'Canciones para cuando estás triste', description: 'Para escuchar lo que sientes, a tu ritmo.', message: 'No estás sola en este ratito, Isa. Te abrazo desde aquí.' },
    'autoestima-baja': { label: 'Autoestima baja', heading: 'Canciones para cuando baja tu autoestima', description: 'Para esos días en que cuesta mirarte con cariño.', message: 'Ojalá pudieras verte con los ojos con que yo te veo.' },
    'triangulo-amoroso': { label: 'Triángulo amoroso', heading: 'Canciones para un triángulo amoroso', description: 'Cuando el corazón no sabe muy bien hacia dónde ir.', message: 'No tienes que resolver el corazón en un solo día, mi reina.' },
    frustrada: { label: 'Frustrada', heading: 'Canciones para cuando estás frustrada', description: 'Para darle espacio a todo eso que te está pesando.', message: 'Respira, Isa. Un paso pequeño también cuenta. Estoy contigo.' },
    arrecha: { label: 'Arrecha', heading: 'Canciones para cuando estás arrecha', description: 'Una selección para acompañar esa energía intensa.', message: 'Suelta toda esa energía, mi reina. Yo me quedo contigo después.' },
    empoderada: { label: 'Empoderada', heading: 'Canciones para sentirte empoderada', description: 'Para volver a ocupar tu espacio con fuerza.', message: 'Que nunca se te olvide la fuerza que llevas dentro.' },
    crisis: { label: 'En crisis', heading: 'Canciones para una crisis', description: 'Para no atravesar este momento en silencio.', message: 'Quédate conmigo un momento. No tienes que poder sola.' },
    depresion: { label: 'Deprimida', heading: 'Canciones para cuando estás deprimida', description: 'Ve a tu propio ritmo y busca apoyo en alguien de confianza.', message: 'No tienes que pasar esto sola. Busca mi mano y a alguien de confianza.' },
    dependiente: { label: 'Dependiente de tu pareja', heading: 'Canciones para cuando dependes mucho de tu pareja', description: 'Para escuchar lo que necesitas, sin juzgarte.', message: 'Te quiero, y también quiero que nunca olvides la vida que es tuya.' },
    alegre: { label: 'Alegre', heading: 'Canciones para cuando estás alegre', description: 'Una canción para mantener arriba ese ánimo.', message: 'Que esta alegría te dure; gracias por dejarme compartirla contigo.' }
};

const youtubeVideoIds = {
    'I Can Do It with a Broken Heart': 'Sl6en1NPTYM',
    "Who's Afraid of Little Old Me?": 'vOZFiX6hDXQ',
    "Bad Blood (Taylor's Version)": 'lUvBk4owRNU',
    "Now That We Don't Talk (Taylor's Version)": 'yF4ulRTCn44',
    'Picture to Burn': 'yCMqcFAigRg',
    Manchild: 'aSugSGCC12I',
    'My Man on Willpower': 'KbzNB2sRnVQ',
    'thanK you aIMee': 'oaBJlKXBvjk',
    "Sparks Fly (Taylor's Version)": 'UlFrV5GJA_4',
    Mean: 'jYa1eI1hpDE',
    'Better Than Revenge': 'KaTrCOBBJ1I',
    Mastermind: 'Tmz1lz0zcLQ',
    Red: 'R_rUYuFtNO4',
    Fearless: '7lLigiVgJsE',
    'Love Story': '8xg3vE8Ie_E',
    'You Belong with Me': 'VuNIsY6JdUw',
    'You Need to Calm Down': 'Dkk9gvTmCXY',
    "It's Nice to Have a Friend": 'eaP1VswBF28',
    Daylight: 'u9raS7-NisU',
    Gorgeous: 'EUoe7cf0HYw',
    'A Place in This World': 'pYFqLzFoHo0',
    'Sweeter Than Fiction': 'ytGqUs3UIPk',
    'Hope Ur OK': 'ZLlsmB1D4Q0',
    'Love Is Embarrassing': 'AXi213cWgYM',
    Karma: 'XzOvgu3GPwY',
    'The Man': 'AqAJLh9wuZ0',
    "Back to December (Taylor's Version)": 'qc2Z-OX9wnc',
    Haunted: '4cC6fw8EqWU',
    'All Too Well': 'sRxrwjOtIag',
    'Better Man': 'Kq_wmYznmG0',
    'Castles Crumbling': 'V80A8qN4fR8',
    'Anti-Hero': 'b1kbLwvqugk',
    'This Love': 'mvxQYPR4lmU',
    'King of My Heart': '5U7bF68xcRg',
    'Dancing with Our Hands Tied': 'erGyUphZSt8',
    'Call It What You Want': 'V54CEElTF_U',
    Crazier: 'B0p4Lv0t124',
    'So American': 'W-PGNyhmSKA',
    'Bigger Than the Whole Sky': 'l8Tps3PITx4',
    "Don't You": '_Q6lCEhl2mQ',
    'The Archer': '8KpKc3C9V3w',
    "Could've, Would've, Should've": 'B-MfwP_RmHY',
    'Favorite Crime': 'AyX_LL9nWSE',
    "Pretty Isn't Pretty": 'G0R7Z2A0XeY',
    Mirrorball: 'KaM1bCuG4xo',
    'This Is Me Trying': '9bdLTPNrlEg',
    'The Way I Loved You': 'DlexmDDSDZ0',
    'Only the Young': 'GJU-S1t2r1M',
    '...Ready For It?': 'wIft-t-MQuE',
    'So It Goes...': 'iAv1Y1YIwm8',
    Dress: 'FNEoPctNIUE',
    'Look What You Made Me Do': '3tmd-ClpJxA',
    Vampire: 'RlPNh_PBZb4',
    'Get Him Back!': 'ZsJ-BHohXRI',
    'My Way': 'qQzdAsjWGPg',
    Expectations: 'nBv5BzFpvvE',
    'Serena Joy': 'NI0rodDL-U8',
    'Stupid Song': 'Rt9tW3cMLhI',
    'U + Me = ❤️': 'p-YnaSsGsPU',
    Purple: 'nXIXeFgBAa8',
    Begged: 'NmGGDYyJ8tU',
    Less: 'Z4BGtpcp1Jg',
    'Cigarette Smoke': 'mA9HZEJfmGw',
    'The Cure': 'mGgMZpGYiy8',
    "What's Wrong with Me?": 'oOEGRpfitAg',
    'Maggots for Brains': 'lwiQSOaI_XE'
};

const taylor = title => ({ title, artist: 'Taylor Swift' });
const olivia = title => ({ title, artist: 'Olivia Rodrigo' });
const sabrina = title => ({ title, artist: 'Sabrina Carpenter' });
const songsByMood = {
    estresada: [taylor('I Can Do It with a Broken Heart')],
    enojada: [
        taylor("Who's Afraid of Little Old Me?"),
        taylor("Bad Blood (Taylor's Version)"),
        taylor("Now That We Don't Talk (Taylor's Version)"),
        taylor('Picture to Burn'),
        sabrina('Manchild'),
        sabrina('My Man on Willpower')
    ],
    orgullosa: [taylor('thanK you aIMee')],
    feliz: [
        taylor("Sparks Fly (Taylor's Version)"),
        taylor('Mean'),
        taylor('Better Than Revenge'),
        taylor('Mastermind'),
        taylor('Red'),
        taylor('Fearless'),
        taylor('Love Story'),
        taylor('You Belong with Me'),
        taylor('You Need to Calm Down'),
        taylor("It's Nice to Have a Friend"),
        taylor('Daylight'),
        taylor('Gorgeous'),
        taylor('A Place in This World'),
        taylor('Sweeter Than Fiction'),
        sabrina('Manchild'),
        { title: 'My Way' },
        { title: 'Expectations' },
        { title: 'Serena Joy' },
        olivia('Hope Ur OK'),
        olivia("Love Is Embarrassing")
    ],
    'muy-feliz': [taylor('Karma'), taylor('The Man')],
    extrañando: [taylor('Back to December (Taylor\'s Version)')],
    'muy-triste': [taylor('Haunted'), taylor('All Too Well'), taylor('Better Man')],
    decepcionada: [taylor('Castles Crumbling')],
    'se-odia': [taylor('Anti-Hero')],
    enamorada: [
        taylor('This Love'),
        taylor('King of My Heart'),
        taylor('Dancing with Our Hands Tied'),
        taylor('Call It What You Want'),
        taylor('Crazier'),
        { title: 'Stupid Song' },
        { title: 'U + Me = ❤️' },
        olivia('So American')
    ],
    triste: [
        taylor('Bigger Than the Whole Sky'),
        taylor("Don't You"),
        taylor('The Archer'),
        taylor("Could've, Would've, Should've"),
        { title: 'Purple' },
        { title: 'Begged' },
        { title: 'Less' },
        { title: 'Cigarette Smoke' },
        olivia('Favorite Crime'),
        olivia("Pretty Isn't Pretty")
    ],
    'autoestima-baja': [taylor('Mirrorball'), taylor('This Is Me Trying')],
    'triangulo-amoroso': [taylor('The Way I Loved You')],
    frustrada: [taylor('Only the Young')],
    arrecha: [taylor('...Ready For It?'), taylor('So It Goes...'), taylor('Dress')],
    empoderada: [taylor('Look What You Made Me Do')],
    crisis: [{ title: 'The Cure' }],
    depresion: [{ title: "What's Wrong with Me?" }, olivia('Vampire')],
    dependiente: [{ title: 'Maggots for Brains' }],
    alegre: [olivia('Get Him Back!')]
};

const selectedMood = new URLSearchParams(window.location.search).get('estado');
const mood = moods[selectedMood] ?? null;
const songList = document.querySelector('#song-list');
const emptyState = document.querySelector('#empty-state');
const moodTitle = document.querySelector('#mood-title');
const moodDescription = document.querySelector('#mood-description');
const moodCrumb = document.querySelector('#mood-crumb');

if (mood) {
    document.title = `${mood.heading} | Feliz 5 día de tu semana mágica mi amor`;
    moodTitle.textContent = mood.heading;
    moodDescription.textContent = mood.description;
    moodCrumb.textContent = mood.label;
}

const songs = mood ? songsByMood[selectedMood] : [];
const artworkRequests = [];

function setCardFlipped(card, flipped, focusCard = false) {
    const front = card.querySelector('.song-face-front');
    const back = card.querySelector('.song-face-back');
    card.classList.toggle('is-flipped', flipped);
    front.inert = flipped;
    back.inert = !flipped;
    front.setAttribute('aria-hidden', String(flipped));
    back.setAttribute('aria-hidden', String(!flipped));

    if (focusCard) {
        card.querySelector(flipped ? '.song-flip-back' : '.song-flip-front').focus();
    }
}

function normalizeArtworkText(value) {
    return value.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\([^)]*version[^)]*\)/gi, '')
        .replace(/\[[^\]]*(?:version|from the vault)[^\]]*\]/gi, '')
        .replace(/[^a-z0-9]/g, '');
}

async function loadArtwork({ song, image, vinyl }) {
    const search = new URL('https://itunes.apple.com/search');
    search.searchParams.set('term', [song.title, song.artist].filter(Boolean).join(' '));
    search.searchParams.set('entity', 'song');
    search.searchParams.set('limit', '10');

    try {
        const response = await fetch(search);
        if (!response.ok) return;

        const data = await response.json();
        const titleKey = normalizeArtworkText(song.title);
        const artistKey = song.artist ? normalizeArtworkText(song.artist) : null;
        const match = data.results.find(result =>
            normalizeArtworkText(result.trackName) === titleKey &&
            (!artistKey || normalizeArtworkText(result.artistName) === artistKey)
        );

        if (!match?.artworkUrl100) return;

        const record = vinyl.querySelector('.song-vinyl-link');
        image.addEventListener('error', () => record.classList.remove('has-artwork'), { once: true });
        record.classList.add('has-artwork');
        image.src = match.artworkUrl100.replace(/\/\d+x\d+bb\./, '/600x600bb.');
    } catch {
        // Keep the animated vinyl visible if artwork lookup is unavailable.
    }
}

async function loadArtworkInBatches(requests) {
    for (let index = 0; index < requests.length; index += 4) {
        await Promise.all(requests.slice(index, index + 4).map(loadArtwork));
    }
}

if (songs.length === 0) {
    emptyState.hidden = false;
} else {
    songs.forEach((song, index) => {
        const item = document.createElement('article');
        const cardInner = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const vinyl = document.createElement('div');
        const recordLink = document.createElement('a');
        const cover = document.createElement('img');
        const recordCenter = document.createElement('span');
        const frontCopy = document.createElement('div');
        const sideLabel = document.createElement('p');
        const title = document.createElement('h2');
        const artist = document.createElement('p');
        const frontFlip = document.createElement('button');
        const backLabel = document.createElement('p');
        const message = document.createElement('p');
        const backActions = document.createElement('div');
        const backFlip = document.createElement('button');
        const youtubeLink = document.createElement('a');
        const search = new URL('https://www.youtube.com/results');

        item.className = 'song-item';
        item.style.animationDelay = `${index * 60}ms`;
        search.searchParams.set('search_query', [song.title, song.artist].filter(Boolean).join(' '));
        const videoUrl = youtubeVideoIds[song.title]
            ? `https://www.youtube.com/watch?v=${youtubeVideoIds[song.title]}`
            : search.href;

        cardInner.className = 'song-card-inner';
        front.className = 'song-face song-face-front';
        front.setAttribute('aria-hidden', 'false');
        back.className = 'song-face song-face-back';
        back.setAttribute('aria-hidden', 'true');
        back.inert = true;

        vinyl.className = 'song-vinyl';
        recordLink.className = 'song-vinyl-link';
        recordLink.href = videoUrl;
        recordLink.target = '_blank';
        recordLink.rel = 'noopener noreferrer';
        recordLink.setAttribute('aria-label', `Escuchar ${song.title}${song.artist ? ` de ${song.artist}` : ''} en YouTube`);
        cover.alt = '';
        cover.loading = 'lazy';
        recordCenter.setAttribute('aria-hidden', 'true');
        vinyl.append(recordLink);
        recordLink.append(cover, recordCenter);

        frontCopy.className = 'song-front-copy';
        sideLabel.className = 'song-side-label';
        sideLabel.textContent = 'UNA CANCIÓN PARA TI';
        title.className = 'song-title';
        title.textContent = song.title;
        artist.className = 'song-artist';
        artist.textContent = song.artist ?? 'Artista';
        frontFlip.className = 'song-flip-button song-flip-front';
        frontFlip.type = 'button';
        frontFlip.textContent = 'Leer tu mensaje ↻';
        frontCopy.append(sideLabel, title, artist, frontFlip);
        front.append(vinyl, frontCopy);

        backLabel.className = 'song-back-label';
        backLabel.textContent = 'UNA NOTA PARA TI';
        message.className = 'song-message';
        message.textContent = song.message ?? mood.message;
        backActions.className = 'song-back-actions';
        backFlip.className = 'song-flip-button song-flip-back';
        backFlip.type = 'button';
        backFlip.textContent = '↶ Ver el disco';
        youtubeLink.className = 'song-youtube-link';
        youtubeLink.href = videoUrl;
        youtubeLink.target = '_blank';
        youtubeLink.rel = 'noopener noreferrer';
        youtubeLink.textContent = 'Escuchar en YouTube ↗';
        backActions.append(backFlip, youtubeLink);
        back.append(backLabel, message, backActions);
        cardInner.append(front, back);
        item.append(cardInner);

        frontFlip.addEventListener('click', () => setCardFlipped(item, true, true));
        backFlip.addEventListener('click', () => setCardFlipped(item, false, true));
        if (window.matchMedia('(hover: hover)').matches) {
            recordLink.addEventListener('mouseenter', () => setCardFlipped(item, true));
            item.addEventListener('mouseleave', () => {
                if (!item.contains(document.activeElement)) setCardFlipped(item, false);
            });
        }

        artworkRequests.push({ song, image: cover, vinyl });
        songList.append(item);
    });

    loadArtworkInBatches(artworkRequests);
}