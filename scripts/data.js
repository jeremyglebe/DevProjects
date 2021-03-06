let DataService = {
    // PROPERTIES

    activeTags: new Set(),

    // GETTERS

    Tags() {
        let all = new Set();
        for (let project of this.Projects()) {
            for (let tag of project.tags) {
                all.add(tag);
            }
        }
        return [...all].sort();
    },

    ActiveTags() {
        return this.activeTags;
    },

    Projects() {
        return projects.sort((a, b) => a.title < b.title ? -1 : 1);
    },

    FilteredProjects() {
        return this.Projects().filter(
            (p) => {
                for (let f of this.ActiveTags()) {
                    if (!p.tags.includes(f)) return false;
                }
                return true;
            }
        );
    },

    // BUILDERS

    ThumbStyleURL(projectTitle) {
        return 'background-image: url("thumbs/' + projectTitle + '.png");';
    },

    // HANDLERS

    OnTagClicked(tag) {
        // If tag is null or otherwise invalid, reset filters (this is done intentionally with "Show All" button)
        if (!tag) {
            this.ActiveTags().clear()
        }
        // If the tag is already in the filter list, remove it
        else if (this.ActiveTags().has(tag)) {
            this.ActiveTags().delete(tag);
        }
        // If the tag is not in the filter list, add it
        else {
            this.ActiveTags().add(tag);
        }
    },

    // CHECKS

    IsFiltered() {
        return this.activeTags.size > 0;
    },

    IsNoResults() {
        return this.FilteredProjects().length === 0;
    },

    IsTagActive(tag) {
        return this.activeTags.has(tag);
    },
}

let projects =
    [
        {
            title: "Galactic Snake",
            desc: "Galactic Snake is a mobile friendly game about a giant robotic snake eating planets. "
                + "It was originally developed as part of the Midwestern State University ACM Chapter's Spring 2021 Game Jam. "
                + "It features authentication and a synchronized scoreboard in addition to its gameplay.",
            tags: ["Phaser", "Games", "Mobile", "Javascript", "Typescript", "Capacitor", "Firebase", "Backend"],
            srcLink: "https://github.com/jeremyglebe/galactic_snake",
            pubLink: "https://drowsyprof.itch.io/galactic-snake"
        },
        {
            title: "Spire Panic",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "Space RPG",
            desc: "Space RPG was originally developed by a friend and student of mine for my summer game design course. "
                + "After the assignment was completed and graded, I took an interest in it. "
                + "I helped flesh out gameplay and visuals to make it an overall more enjoyable experience. "
                + "The game is a bit like bejewled with some scary monsters and a space cowboy thrown into the mix. "
                + "(Thanks to Zachary Kingcade, the primary author of the project)",
            tags: ["Phaser", "Games", "Mobile", "Javascript", "Typescript"],
            pubLink: "https://zachkingcade.itch.io/space-rpg-beta"
        },
        {
            title: "Turtle Art Show",
            desc: "Turtle Art is a repository of small art & animation projects I have made using Python???s Turtle module. "
                + "It is mostly spirals and other patterns that can be generated out of looping commands.",
            tags: ["Python", "Turtle", "Brython", "Art", "Animation"],
            pubLink: "https://jeremyglebe.com/TurtleArt/",
            srcLink: "https://github.com/jeremyglebe/TurtleArt"
        },
        {
            title: "Insult Me!",
            desc: "My class of 5th/6th graders was making a pretty silly insult generator project to learn about arrays. "
                + "(Inspired by Nick Morgan???s book, ???JavaScript for Kids???) I decided to make my own version. "
                + "Then I decided to add emojis. Then cycling insults and a pause feature and - well it got out of hand. "
                + "Enjoy!",
            tags: ["p5.js", "Animation", "Mobile", "Javascript", "Silly"],
            pubLink: "https://jeremyglebe.com/InsultMe/",
            srcLink: "https://github.com/jeremyglebe/InsultMe"
        },
        {
            title: "Odin Grid",
            desc: "Odin Grid is a dynamic, customizable game grid for any and all digital tabletops. "
                + "No need to get a video editor. No need to tape a plastic grid over your screen. "
                + "Just launch Odin Grid and you are good to play",
            tags: ["p5.js", "Electron", "Javascript", "Tools"],
            pubLink: "https://drowsyprof.itch.io/odin",
            srcLink: "https://github.com/jeremyglebe/OdinGrid"
        },
        {
            title: "Knights Tour",
            desc: "The Knight???s Tour puzzle implemented as a C++ Console Application. (Styled as a game, not a solver) "
                + "This program was created when I was teaching Data Structures & Algorithms and was used as an in-class review.",
            tags: ["C++", "ASCII", "Art", "Games", "Text-Based"],
            pubLink: "https://jeremyglebe.com/KnightsTourCPP/",
            srcLink: "https://github.com/jeremyglebe/KnightsTourCPP"
        },
        {
            title: "Goblin Trap",
            desc: "A prototype stealth horror game built in Unreal Engine 4. I made this for 3D Game Programming at UNT. "
                + "The game takes place in a dark, mysterious dungeon. In one section of the crypt, you will be pursued by a "
                + "goblin dressed in gladiator armor. The game is incomplete. There is not a win condition. (Hence why I called "
                + "it Goblin Trap)",
            tags: ["Unreal Engine", "Games", "Stealth", "3D", "Blueprints", "Horror", "Prototype"],
            pubLink: "https://drowsyprof.itch.io/goblin-trap",
            srcLink: "https://github.com/jeremyglebe/GoblinTrap"
        },
        {
            title: "DevProjects",
            desc: "A collection of my personal projects. You're looking at it right now. The page uses Bulma CSS and CSS "
                + "Grid for layout. I built the tag/filter system using Javascript and Alpine.js. You can view the "
                + "source code on GitHub.",
            tags: ["Javascript", "Alpine.js", "Bulma", "CSS", "CSS Grid"],
            srcLink: "https://github.com/jeremyglebe/DevProjects"
        },
        {
            title: "TrIO",
            desc: "C++ library designed to streamline the use of unicode, colors, and unbuffered input in the terminal. Make everything from menu-driven programs to simple games without the complexity of GUI or graphics libraries. (Linked below is the GitHub repository for TrIO and the page for TrIOLife, which is a project built with TrIO)",
            tags: ["C++", "Text-Based", "Tools", "Education"],
            srcLink: "https://github.com/jeremyglebe/TrIO",
            pubLink: "https://jeremyglebe.com/TrIOLife/"
        }
    ];
