// ---------- Random quote logic ----------
const quotes = [
    // Dumb and Dumber
    "So you're telling me there's a chance? - Dumb and Dumber",
    "Just when I think you couldn't possibly be any dumber... - Dumb and Dumber",

    // The Big Lebowski
    "Yeah, well, you know, that's just, like, your opinion, man. - The Big Lebowski",
    "The Dude abides. - The Big Lebowski",
    "That rug really tied the room together. - The Big Lebowski",
    "Careful, man, there's a beverage here! - The Big Lebowski",
    "This aggression will not stand, man. - The Big Lebowski",
    "I'm the walrus. - The Big Lebowski",

    // Forrest Gump
    "Life is like a box of chocolates. You never know what you're gonna get. - Forrest Gump",
    "Stupid is as stupid does. - Forrest Gump",
    "I'm not a smart man, but I know what love is. - Forrest Gump",

    // Back to the Future
    "Roads? Where we're going, we don't need roads. - Back to the Future",
    "Great Scott! - Back to the Future",
    "If my calculations are correct, when this baby hits 88 miles per hour... you're gonna see some serious shit. - Back to the Future",

    // Monsters, Inc.
    "I'm watching you, Wazowski. Always watching. - Monsters, Inc.",

    // Cool Hand Luke
    "What we've got here is failure to communicate. - Cool Hand Luke",
    "Sometimes nothing can be a real cool hand. - Cool Hand Luke",

    // Django Unchained
    "I like the way you die, boy. - Django Unchained",

    // Pulp Fiction
    "Say 'what' again. I dare you! - Pulp Fiction",
    "They call it a Royale with cheese. - Pulp Fiction",
    "Zed's dead, baby. Zed's dead. - Pulp Fiction",
    "I'm gonna get medieval on your ass. - Pulp Fiction",

    // Rocky
    "Yo Adrian! - Rocky",
    "It ain't about how hard you hit. It’s about how hard you can get hit and keep moving forward. - Rocky",
    "There is no tomorrow! - Rocky",

    // The Hangover
    "You probably get this a lot. This isn’t the real Caesar’s Palace, is it? - The Hangover",

    // 21 Jump Street
    "You two sons of bitches are going to college! – 21 Jump Street",

    // Airplane!
    "Surely you can't be serious. - I am serious... and don't call me Shirley. - Airplane!",

    // Interstellar
    "Love is the one thing that transcends time and space. - Interstellar",
    "We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt. - Interstellar",
    "Do not go gentle into that good night. Rage, rage against the dying of the light. - Interstellar",

    // Classic Comedy & Other Famous Quotes
    "I am Groot. - Guardians of the Galaxy",
    "Inconceivable! - The Princess Bride",
    "I see dead people. - The Sixth Sense",
    "To infinity and beyond! - Toy Story",
    "I'll be back. - The Terminator"
];

// functions on load
window.addEventListener('DOMContentLoaded', () => {

    // place quote on screen
    const quoteEl = document.getElementById("quote");
    if (quoteEl) {
      quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }

    // view button
    const viewBtn = document.getElementById('viewBtn');
    if (viewBtn) {
        viewBtn.onclick = () => {
            window.location.href = '../html/viewMovies.html';
        };
    }

    // add button
    const addBtn = document.getElementById('addBtn');
    if (addBtn) {
        addBtn.onclick = () => {
            window.location.href = '../html/addMovie.html';
        };
    }
});