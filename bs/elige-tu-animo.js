const featuredSongs = {
    estresada: [['I Can Do It with a Broken Heart', 'Taylor Swift']],
    enojada: [["Who's Afraid of Little Old Me?", 'Taylor Swift'], ['Manchild', 'Sabrina Carpenter']],
    orgullosa: [['thanK you aIMee', 'Taylor Swift']],
    feliz: [["Sparks Fly (Taylor's Version)", 'Taylor Swift'], ['Love Is Embarrassing', 'Olivia Rodrigo']],
    'muy-feliz': [['Karma', 'Taylor Swift']],
    extrañando: [["Back to December (Taylor's Version)", 'Taylor Swift']],
    'muy-triste': [['All Too Well', 'Taylor Swift']],
    decepcionada: [['Castles Crumbling', 'Taylor Swift']],
    'se-odia': [['Anti-Hero', 'Taylor Swift']],
    enamorada: [['This Love', 'Taylor Swift'], ['So American', 'Olivia Rodrigo']],
    triste: [['Bigger Than the Whole Sky', 'Taylor Swift'], ['Favorite Crime', 'Olivia Rodrigo']],
    'autoestima-baja': [['Mirrorball', 'Taylor Swift']],
    'triangulo-amoroso': [['The Way I Loved You', 'Taylor Swift']],
    frustrada: [['Only the Young', 'Taylor Swift']],
    arrecha: [['...Ready For It?', 'Taylor Swift']],
    empoderada: [['Look What You Made Me Do', 'Taylor Swift']],
    crisis: [['This Is Me Trying', 'Taylor Swift']],
    depresion: [['Vampire', 'Olivia Rodrigo']],
    dependiente: [['The Archer', 'Taylor Swift']],
    alegre: [['Get Him Back!', 'Olivia Rodrigo']]
};

function normalizeText(value) {
    return value.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\([^)]*version[^)]*\)/gi, '')
        .replace(/[^a-z0-9]/g, '');
}

async function loadMoodArtwork(moodOption, song) {
    const [title, artist] = song;
    const search = new URL('https://itunes.apple.com/search');
    search.searchParams.set('term', `${title} ${artist}`);
    search.searchParams.set('entity', 'song');
    search.searchParams.set('limit', '10');

    try {
        const response = await fetch(search);
        if (!response.ok) return;

        const data = await response.json();
        const artistKey = normalizeText(artist);
        const titleKey = normalizeText(title);
        const match = data.results.find(result =>
            normalizeText(result.artistName) === artistKey &&
            normalizeText(result.trackName) === titleKey
        ) ?? data.results.find(result => normalizeText(result.artistName) === artistKey);

        if (!match?.artworkUrl100) return;

        const image = document.createElement('img');
        image.src = match.artworkUrl100.replace(/\/\d+x\d+bb\./, '/300x300bb.');
        image.alt = '';
        image.loading = 'lazy';
        image.addEventListener('error', () => image.remove(), { once: true });
        moodOption.querySelector('.mood-artwork').append(image);
    } catch {
        // Keep the colored panel visible if the lookup is unavailable.
    }
}

const artworkRequests = [...document.querySelectorAll('.mood-option')].flatMap(moodOption =>
    (featuredSongs[moodOption.dataset.mood] ?? []).map(song => [moodOption, song])
);

async function loadArtworkInBatches() {
    for (let index = 0; index < artworkRequests.length; index += 4) {
        await Promise.all(artworkRequests.slice(index, index + 4).map(([moodOption, song]) =>
            loadMoodArtwork(moodOption, song)
        ));
    }
}

loadArtworkInBatches();
