/**
 * SKILL ACADEMY - Cozy Classroom Learning Game
 * =============================================
 * Learn Claude Agent Skills in a warm study room!
 * Now with PRACTICAL CHALLENGES!
 */

const CONFIG = {
    WIDTH: 640,
    HEIGHT: 480,
    TILE: 32,

    COLORS: {
        // Floor
        WOOD_FLOOR_LIGHT: 0xd4a574,
        WOOD_FLOOR_MID: 0xc49464,
        WOOD_FLOOR_DARK: 0xa67c52,

        // Walls
        WALL_CREAM: 0xf5e6d3,
        WALL_SHADOW: 0xe0d0b8,
        WALL_TRIM: 0x8b7355,

        // Furniture
        DESK_LIGHT: 0xdeb887,
        DESK_MID: 0xc9a66b,
        DESK_DARK: 0x8b6914,

        BOOKSHELF_LIGHT: 0xa0522d,
        BOOKSHELF_MID: 0x8b4513,
        BOOKSHELF_DARK: 0x5c3317,

        // Books
        BOOK_RED: 0xc44536,
        BOOK_BLUE: 0x4a6fa5,
        BOOK_GREEN: 0x4a7c59,
        BOOK_YELLOW: 0xd4a03c,
        BOOK_PURPLE: 0x7b5ea7,

        // Computer
        MONITOR_FRAME: 0x2c2c2c,
        MONITOR_SCREEN: 0x1e3a5f,
        MONITOR_GLOW: 0x4a90d9,

        // Whiteboard
        WHITEBOARD: 0xf8f8f8,
        WHITEBOARD_FRAME: 0x696969,

        // Chair
        CHAIR_SEAT: 0x8b4513,
        CHAIR_FRAME: 0x3c3c3c,

        // Rug
        RUG_MAIN: 0x8b2500,
        RUG_BORDER: 0x5c1a00,
        RUG_PATTERN: 0xcd853f,

        // Window
        WINDOW_FRAME: 0xf5f5dc,
        WINDOW_GLASS: 0x87ceeb,
        WINDOW_LIGHT: 0xfffacd,

        // Plant
        POT: 0xb87333,
        PLANT_DARK: 0x2d5a27,
        PLANT_LIGHT: 0x4a8b3c,

        // Lamp
        LAMP_BASE: 0xb8860b,
        LAMP_SHADE: 0xfff8dc,
        LAMP_GLOW: 0xffeaa7,

        // Character
        SKIN: 0xf0c8a0,
        HAIR_BROWN: 0x5c4033,
        SHIRT_BLUE: 0x4a6fa5,
        PANTS: 0x2c3e50,

        // UI
        UI_BG: 0xfaf3e0,
        UI_BORDER: 0x5c4033,
        UI_TEXT: 0x2c1810,

        // Challenge colors
        CORRECT: 0x4a7c59,
        WRONG: 0xc44536,
        OPTION_BG: 0xe8dcc8,
        OPTION_HOVER: 0xffd700,
    }
};

// Challenge Data
const CHALLENGES = {
    whiteboard: {
        name: "Build Your First Skill",
        intro: "Let's build a SKILL.md file step by step!",
        questions: [
            {
                question: "What goes FIRST in a SKILL.md file?",
                options: ["Markdown instructions", "YAML frontmatter (---)", "A title heading", "Import statements"],
                correct: 1,
                explanation: "YAML frontmatter starts with --- and contains metadata!"
            },
            {
                question: "Which field is REQUIRED in the YAML?",
                options: ["version", "authors", "name", "tools"],
                correct: 2,
                explanation: "The 'name' field is required to identify your skill!"
            },
            {
                question: "What's a good skill name format?",
                options: ["My Cool Skill!", "my-cool-skill", "MY_COOL_SKILL", "myCoolSkill"],
                correct: 1,
                explanation: "Use lowercase with hyphens (kebab-case) for skill names!"
            }
        ]
    },
    bookshelf: {
        name: "Fix the Errors",
        intro: "Find what's WRONG in these SKILL.md snippets!",
        questions: [
            {
                question: "What's wrong here?\n---\nName: my-skill\ndescription: A skill\n---",
                options: ["Nothing wrong", "'Name' should be 'name'", "Missing version", "Wrong dashes"],
                correct: 1,
                explanation: "YAML is case-sensitive! Use lowercase 'name'."
            },
            {
                question: "What's missing?\n---\ndescription: Helps with coding\nversion: 1.0\n---",
                options: ["The 'tools' field", "The 'name' field", "More dashes", "A blank line"],
                correct: 1,
                explanation: "The 'name' field is required - it's the skill identifier!"
            },
            {
                question: "What's wrong?\n--\nname: my-skill\ndescription: A skill\n--",
                options: ["Need THREE dashes (---)", "Name is too short", "Missing quotes", "Nothing wrong"],
                correct: 0,
                explanation: "YAML frontmatter requires exactly three dashes: ---"
            }
        ]
    },
    computer: {
        name: "Match Tools to Tasks",
        intro: "Match the right TOOL to each TASK!",
        questions: [
            {
                question: "Task: Search for current information online",
                options: ["file-read", "bash", "web-search", "calculator"],
                correct: 2,
                explanation: "web-search finds current info from the internet!"
            },
            {
                question: "Task: Read the contents of a config file",
                options: ["web-search", "file-read", "bash", "image-gen"],
                correct: 1,
                explanation: "file-read accesses and reads local files!"
            },
            {
                question: "Task: Run a Python script",
                options: ["file-read", "web-search", "calculator", "bash"],
                correct: 3,
                explanation: "bash executes shell commands including scripts!"
            },
            {
                question: "What do SKILLS do with TOOLS?",
                options: ["Replace them", "Define WHEN/HOW to use them", "Delete them", "Create new ones"],
                correct: 1,
                explanation: "Skills guide WHEN and HOW Claude uses its tools!"
            }
        ]
    },
    desk: {
        name: "Skill Master Challenge",
        intro: "Final test - prove you're a Skill Master!",
        questions: [
            {
                question: "Where should you put edge case docs?",
                options: ["In SKILL.md directly", "In references/ folder", "In a comment", "Nowhere"],
                correct: 1,
                explanation: "Use references/ for detailed docs - keeps SKILL.md clean!"
            },
            {
                question: "How do you load a doc on-demand?",
                options: ["import doc.md", "@references/doc.md", "include: doc.md", "load(doc.md)"],
                correct: 1,
                explanation: "Use @file syntax to load docs only when needed!"
            },
            {
                question: "How can skills use other skills?",
                options: ["They can't", "Using dependencies: []", "Copy-paste them", "Magic"],
                correct: 1,
                explanation: "Skills can depend on other skills via dependencies field!"
            },
            {
                question: "What's the recommended SKILL.md max length?",
                options: ["100 lines", "500 lines", "1000 lines", "No limit"],
                correct: 1,
                explanation: "Keep SKILL.md under 500 lines for efficiency!"
            },
            {
                question: "Where should pre-written code go?",
                options: ["In SKILL.md", "In scripts/ folder", "In a comment", "Inline only"],
                correct: 1,
                explanation: "Put reusable scripts in scripts/ folder!"
            }
        ]
    }
};

// ============================================================================
// BOOT SCENE
// ============================================================================
class BootScene extends Phaser.Scene {
    constructor() { super('Boot'); }

    preload() {
        const W = CONFIG.WIDTH, H = CONFIG.HEIGHT;
        this.add.rectangle(W/2, H/2, W, H, 0x2c1810);

        const barBg = this.add.rectangle(W/2, H/2+30, 260, 16, 0x1a1a1a).setStrokeStyle(2, 0xc49464);
        this.loadBar = this.add.rectangle(W/2-125, H/2+30, 0, 10, 0xc49464).setOrigin(0, 0.5);

        this.add.text(W/2, H/2-40, 'SKILL ACADEMY', {
            fontFamily: '"Press Start 2P"', fontSize: '24px', color: '#f5e6d3'
        }).setOrigin(0.5);

        this.add.text(W/2, H/2-10, 'Setting up classroom...', {
            fontFamily: 'Arial', fontSize: '12px', color: '#a0a0a0'
        }).setOrigin(0.5);

        this.loadProgress = 0;
    }

    create() {
        this.tweens.add({
            targets: this, loadProgress: 250,
            duration: 500, ease: 'Cubic.easeOut',
            onUpdate: () => { this.loadBar.width = this.loadProgress; },
            onComplete: () => {
                this.generateTextures();
                this.cameras.main.fadeOut(300);
                this.time.delayedCall(300, () => this.scene.start('Menu'));
            }
        });
    }

    generateTextures() {
        this.genFloor();
        this.genWall();
        this.genDesk();
        this.genChair();
        this.genBookshelf();
        this.genComputer();
        this.genWhiteboard();
        this.genWindow();
        this.genRug();
        this.genPlant();
        this.genLamp();
        this.genPlayer();
        this.genTeacher();
        this.genHighlight();
        this.genQuestionMark();
        this.genCheckmark();
        this.genStar();
    }

    fillGradient(g, x, y, w, h, colorTop, colorBot) {
        for (let i = 0; i < h; i++) {
            const t = i / h;
            const color = Phaser.Display.Color.Interpolate.ColorWithColor(
                Phaser.Display.Color.ValueToColor(colorTop),
                Phaser.Display.Color.ValueToColor(colorBot),
                100, Math.floor(t * 100)
            );
            g.fillStyle(Phaser.Display.Color.GetColor(color.r, color.g, color.b));
            g.fillRect(x, y + i, w, 1);
        }
    }

    genFloor() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        this.fillGradient(g, 0, 0, T, T, C.WOOD_FLOOR_LIGHT, C.WOOD_FLOOR_MID);
        g.lineStyle(1, C.WOOD_FLOOR_DARK, 0.3);
        g.lineBetween(0, 8, T, 8);
        g.lineBetween(0, 24, T, 24);
        g.lineStyle(1, C.WOOD_FLOOR_LIGHT, 0.4);
        g.lineBetween(0, 4, T, 4);
        g.lineBetween(0, 20, T, 20);
        g.generateTexture('floor', T, T);
        g.destroy();
    }

    genWall() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        this.fillGradient(g, 0, 0, T, T, C.WALL_CREAM, C.WALL_SHADOW);
        g.fillStyle(C.WALL_CREAM, 0.3);
        g.fillRect(4, 4, 8, 8);
        g.fillRect(20, 16, 8, 8);
        g.generateTexture('wall', T, T);
        g.destroy();

        const g2 = this.make.graphics({add:false});
        g2.fillStyle(C.WALL_TRIM);
        g2.fillRoundedRect(0, 20, T, 12, 2);
        g2.fillStyle(0xffffff, 0.2);
        g2.fillRect(0, 20, T, 2);
        g2.generateTexture('wall_trim', T, T);
        g2.destroy();
    }

    genDesk() {
        const T = CONFIG.TILE * 2, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        this.fillGradient(g, 4, 8, T-8, 24, C.DESK_LIGHT, C.DESK_MID);
        g.lineStyle(2, C.DESK_DARK);
        g.strokeRoundedRect(4, 8, T-8, 24, 3);
        g.fillStyle(C.DESK_DARK);
        g.fillRoundedRect(8, 32, 8, 28, 2);
        g.fillRoundedRect(T-16, 32, 8, 28, 2);
        g.fillStyle(C.DESK_MID);
        g.fillRoundedRect(20, 34, 24, 16, 2);
        g.lineStyle(1, C.DESK_DARK);
        g.strokeRoundedRect(20, 34, 24, 16, 2);
        g.fillStyle(C.DESK_DARK);
        g.fillRoundedRect(28, 40, 8, 4, 2);
        g.generateTexture('desk', T, T);
        g.destroy();
    }

    genChair() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.CHAIR_FRAME);
        g.fillRoundedRect(6, 20, 4, 12, 1);
        g.fillRoundedRect(22, 20, 4, 12, 1);
        g.fillStyle(C.CHAIR_SEAT);
        g.fillRoundedRect(4, 14, 24, 8, 3);
        g.fillRoundedRect(8, 2, 16, 14, 3);
        g.fillStyle(0xffffff, 0.2);
        g.fillRoundedRect(10, 4, 6, 8, 2);
        g.generateTexture('chair', T, T);
        g.destroy();
    }

    genBookshelf() {
        const T = CONFIG.TILE * 2, H = CONFIG.TILE * 3, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.BOOKSHELF_MID);
        g.fillRoundedRect(0, 0, T, H, 4);
        g.fillStyle(C.BOOKSHELF_DARK);
        g.fillRect(4, 0, T-8, H);
        g.fillStyle(C.BOOKSHELF_MID);
        g.fillRect(4, 30, T-8, 4);
        g.fillRect(4, 62, T-8, 4);
        const bookColors = [C.BOOK_RED, C.BOOK_BLUE, C.BOOK_GREEN, C.BOOK_YELLOW, C.BOOK_PURPLE];
        let x = 8;
        for (let shelf = 0; shelf < 3; shelf++) {
            const y = shelf * 32 + 6;
            x = 8;
            for (let i = 0; i < 5; i++) {
                const bw = 6 + Math.random() * 4;
                const bh = 20 + Math.random() * 4;
                g.fillStyle(bookColors[(shelf + i) % 5]);
                g.fillRoundedRect(x, y + (24 - bh), bw, bh, 1);
                g.fillStyle(0xffffff, 0.3);
                g.fillRect(x + 1, y + (24 - bh) + 2, 2, bh - 4);
                x += bw + 2;
            }
        }
        g.fillStyle(C.BOOKSHELF_LIGHT, 0.3);
        g.fillRect(0, 0, 4, H);
        g.generateTexture('bookshelf', T, H);
        g.destroy();
    }

    genComputer() {
        const T = CONFIG.TILE * 2, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.MONITOR_FRAME);
        g.fillRoundedRect(26, 44, 12, 16, 2);
        g.fillRoundedRect(20, 56, 24, 6, 2);
        g.fillRoundedRect(4, 4, 56, 42, 4);
        g.fillStyle(C.MONITOR_SCREEN);
        g.fillRoundedRect(8, 8, 48, 34, 2);
        g.fillStyle(C.MONITOR_GLOW, 0.3);
        g.fillRect(12, 12, 40, 2);
        g.fillRect(12, 18, 30, 2);
        g.fillRect(12, 24, 35, 2);
        g.fillRect(12, 30, 25, 2);
        g.fillStyle(0x00ff00);
        g.fillCircle(32, 48, 2);
        g.fillStyle(0x2c2c2c);
        g.fillRoundedRect(10, 52, 44, 10, 2);
        g.fillStyle(0x4a4a4a);
        for (let i = 0; i < 8; i++) {
            g.fillRect(14 + i * 5, 54, 4, 2);
            g.fillRect(14 + i * 5, 58, 4, 2);
        }
        g.generateTexture('computer', T, T);
        g.destroy();
    }

    genWhiteboard() {
        const W = CONFIG.TILE * 4, H = CONFIG.TILE * 2, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.WHITEBOARD_FRAME);
        g.fillRoundedRect(0, 0, W, H, 4);
        g.fillStyle(C.WHITEBOARD);
        g.fillRoundedRect(4, 4, W-8, H-8, 2);
        g.lineStyle(2, 0x2c5aa0);
        g.strokeRect(20, 15, 40, 25);
        g.lineBetween(60, 27, 90, 27);
        g.strokeRect(90, 15, 30, 25);
        g.fillStyle(0x2c5aa0);
        g.fillCircle(75, 27, 3);
        g.fillStyle(0x333333, 0.6);
        g.fillRect(24, 20, 32, 3);
        g.fillRect(24, 28, 28, 3);
        g.fillRect(94, 22, 22, 3);
        g.fillStyle(0x808080);
        g.fillRoundedRect(W/2 - 30, H - 6, 60, 6, 2);
        g.fillStyle(0xff0000);
        g.fillRoundedRect(W/2 - 24, H - 5, 12, 4, 1);
        g.fillStyle(0x0000ff);
        g.fillRoundedRect(W/2 - 8, H - 5, 12, 4, 1);
        g.fillStyle(0x00aa00);
        g.fillRoundedRect(W/2 + 8, H - 5, 12, 4, 1);
        g.generateTexture('whiteboard', W, H);
        g.destroy();
    }

    genWindow() {
        const W = CONFIG.TILE * 2, H = CONFIG.TILE * 2, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.WINDOW_FRAME);
        g.fillRoundedRect(0, 0, W, H, 4);
        g.fillStyle(C.WINDOW_GLASS);
        g.fillRoundedRect(4, 4, 26, 26, 2);
        g.fillRoundedRect(34, 4, 26, 26, 2);
        g.fillRoundedRect(4, 34, 26, 26, 2);
        g.fillRoundedRect(34, 34, 26, 26, 2);
        g.fillStyle(0xffffff, 0.4);
        g.fillRoundedRect(6, 6, 10, 10, 2);
        g.fillRoundedRect(36, 6, 10, 10, 2);
        g.fillStyle(C.WINDOW_LIGHT, 0.2);
        g.fillCircle(W/2, H/2, 20);
        g.generateTexture('window', W, H);
        g.destroy();
    }

    genRug() {
        const W = CONFIG.TILE * 4, H = CONFIG.TILE * 3, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.RUG_MAIN);
        g.fillRoundedRect(0, 0, W, H, 6);
        g.lineStyle(6, C.RUG_BORDER);
        g.strokeRoundedRect(6, 6, W-12, H-12, 4);
        g.fillStyle(C.RUG_PATTERN, 0.4);
        g.fillRoundedRect(W/2 - 20, H/2 - 15, 40, 30, 4);
        g.fillStyle(C.RUG_PATTERN, 0.6);
        g.fillCircle(20, 20, 8);
        g.fillCircle(W-20, 20, 8);
        g.fillCircle(20, H-20, 8);
        g.fillCircle(W-20, H-20, 8);
        g.generateTexture('rug', W, H);
        g.destroy();
    }

    genPlant() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.POT);
        g.beginPath();
        g.moveTo(8, 20);
        g.lineTo(24, 20);
        g.lineTo(22, 32);
        g.lineTo(10, 32);
        g.closePath();
        g.fillPath();
        g.fillStyle(0xcd8500);
        g.fillRoundedRect(6, 18, 20, 4, 2);
        g.fillStyle(0x4a3728);
        g.fillEllipse(16, 20, 12, 4);
        g.fillStyle(C.PLANT_DARK);
        g.fillEllipse(10, 10, 8, 12);
        g.fillEllipse(22, 8, 8, 14);
        g.fillEllipse(16, 6, 6, 10);
        g.fillStyle(C.PLANT_LIGHT);
        g.fillEllipse(8, 8, 5, 8);
        g.fillEllipse(20, 6, 5, 10);
        g.fillEllipse(14, 4, 4, 6);
        g.generateTexture('plant', T, T);
        g.destroy();
    }

    genLamp() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const g = this.make.graphics({add:false});
        g.fillStyle(C.LAMP_BASE);
        g.fillEllipse(16, 30, 10, 4);
        g.fillRoundedRect(14, 12, 4, 18, 1);
        g.fillStyle(C.LAMP_SHADE);
        g.beginPath();
        g.moveTo(6, 14);
        g.lineTo(26, 14);
        g.lineTo(22, 4);
        g.lineTo(10, 4);
        g.closePath();
        g.fillPath();
        g.fillStyle(C.LAMP_GLOW, 0.4);
        g.fillCircle(16, 10, 12);
        g.generateTexture('lamp', T, T);
        g.destroy();
    }

    genPlayer() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const dirs = ['down', 'up', 'left', 'right'];
        dirs.forEach(dir => {
            const g = this.make.graphics({add:false});
            g.fillStyle(0x000000, 0.3);
            g.fillEllipse(16, 30, 12, 4);
            g.fillStyle(C.PANTS);
            g.fillRoundedRect(10, 22, 5, 8, 2);
            g.fillRoundedRect(17, 22, 5, 8, 2);
            g.fillStyle(C.SHIRT_BLUE);
            g.fillRoundedRect(8, 12, 16, 12, 4);
            if (dir === 'left') {
                g.fillRoundedRect(20, 14, 4, 8, 2);
            } else if (dir === 'right') {
                g.fillRoundedRect(8, 14, 4, 8, 2);
            } else {
                g.fillRoundedRect(6, 14, 4, 8, 2);
                g.fillRoundedRect(22, 14, 4, 8, 2);
            }
            g.fillStyle(C.SKIN);
            g.fillRoundedRect(10, 2, 12, 12, 4);
            g.fillStyle(C.HAIR_BROWN);
            if (dir === 'up') {
                g.fillRoundedRect(10, 0, 12, 8, 4);
            } else {
                g.fillRoundedRect(10, 0, 12, 6, 4);
                if (dir === 'left') {
                    g.fillRoundedRect(18, 2, 6, 8, 2);
                } else if (dir === 'right') {
                    g.fillRoundedRect(8, 2, 6, 8, 2);
                }
            }
            if (dir !== 'up') {
                g.fillStyle(0xffffff);
                if (dir === 'down') {
                    g.fillCircle(13, 8, 2);
                    g.fillCircle(19, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(13, 8, 1);
                    g.fillCircle(19, 8, 1);
                } else if (dir === 'left') {
                    g.fillCircle(12, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(11, 8, 1);
                } else {
                    g.fillCircle(20, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(21, 8, 1);
                }
            }
            g.generateTexture(`player_${dir}`, T, T);
            g.destroy();
        });
    }

    genTeacher() {
        const T = CONFIG.TILE, C = CONFIG.COLORS;
        const dirs = ['down', 'up', 'left', 'right'];
        dirs.forEach(dir => {
            const g = this.make.graphics({add:false});
            g.fillStyle(0x000000, 0.3);
            g.fillEllipse(16, 30, 12, 4);
            g.fillStyle(0x1a1a2e);
            g.fillRoundedRect(10, 22, 5, 8, 2);
            g.fillRoundedRect(17, 22, 5, 8, 2);
            g.fillStyle(0x8b4513);
            g.fillRoundedRect(8, 12, 16, 12, 4);
            g.fillStyle(0xf5f5dc);
            g.fillRoundedRect(12, 12, 8, 4, 2);
            if (dir === 'left') {
                g.fillRoundedRect(20, 14, 4, 8, 2);
            } else if (dir === 'right') {
                g.fillRoundedRect(8, 14, 4, 8, 2);
            } else {
                g.fillRoundedRect(6, 14, 4, 8, 2);
                g.fillRoundedRect(22, 14, 4, 8, 2);
            }
            g.fillStyle(C.SKIN);
            g.fillRoundedRect(10, 2, 12, 12, 4);
            g.fillStyle(0x808080);
            if (dir === 'up') {
                g.fillRoundedRect(10, 0, 12, 8, 4);
            } else {
                g.fillRoundedRect(10, 0, 12, 6, 4);
                if (dir === 'left') {
                    g.fillRoundedRect(18, 2, 6, 6, 2);
                } else if (dir === 'right') {
                    g.fillRoundedRect(8, 2, 6, 6, 2);
                }
            }
            if (dir !== 'up') {
                g.lineStyle(1, 0x2c2c2c);
                if (dir === 'down') {
                    g.fillStyle(0xffffff);
                    g.fillCircle(13, 8, 2);
                    g.fillCircle(19, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(13, 8, 1);
                    g.fillCircle(19, 8, 1);
                    g.strokeCircle(13, 8, 3);
                    g.strokeCircle(19, 8, 3);
                } else if (dir === 'left') {
                    g.fillStyle(0xffffff);
                    g.fillCircle(12, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(11, 8, 1);
                    g.strokeCircle(12, 8, 3);
                } else {
                    g.fillStyle(0xffffff);
                    g.fillCircle(20, 8, 2);
                    g.fillStyle(0x2c1810);
                    g.fillCircle(21, 8, 1);
                    g.strokeCircle(20, 8, 3);
                }
            }
            g.generateTexture(`teacher_${dir}`, T, T);
            g.destroy();
        });
    }

    genHighlight() {
        const T = CONFIG.TILE;
        const g = this.make.graphics({add:false});
        g.lineStyle(3, 0xffd700, 0.8);
        g.strokeRoundedRect(2, 2, T-4, T-4, 4);
        g.fillStyle(0xffd700, 0.2);
        g.fillRoundedRect(2, 2, T-4, T-4, 4);
        g.generateTexture('highlight', T, T);
        g.destroy();
    }

    genQuestionMark() {
        const T = CONFIG.TILE;
        const g = this.make.graphics({add:false});
        g.fillStyle(0xffd700, 0.3);
        g.fillCircle(T/2, T/2, 12);
        g.fillStyle(0xffd700);
        g.fillRoundedRect(10, 6, 12, 4, 2);
        g.fillRoundedRect(18, 8, 4, 8, 2);
        g.fillRoundedRect(12, 14, 8, 4, 2);
        g.fillRoundedRect(14, 16, 4, 6, 2);
        g.fillCircle(16, 26, 3);
        g.generateTexture('question_mark', T, T);
        g.destroy();
    }

    genCheckmark() {
        const T = CONFIG.TILE;
        const g = this.make.graphics({add:false});
        g.fillStyle(CONFIG.COLORS.CORRECT, 0.3);
        g.fillCircle(T/2, T/2, 14);
        g.lineStyle(4, CONFIG.COLORS.CORRECT);
        g.beginPath();
        g.moveTo(8, 16);
        g.lineTo(14, 22);
        g.lineTo(24, 10);
        g.strokePath();
        g.generateTexture('checkmark', T, T);
        g.destroy();
    }

    genStar() {
        const g = this.make.graphics({add:false});
        g.fillStyle(0xffd700);
        const cx = 16, cy = 16, or = 14, ir = 6;
        g.beginPath();
        for (let i = 0; i < 10; i++) {
            const r = i % 2 === 0 ? or : ir;
            const angle = (i * Math.PI / 5) - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) g.moveTo(x, y);
            else g.lineTo(x, y);
        }
        g.closePath();
        g.fillPath();
        g.generateTexture('star', 32, 32);
        g.destroy();
    }
}

// ============================================================================
// MENU SCENE - Simple Title Screen
// ============================================================================
class MenuScene extends Phaser.Scene {
    constructor() { super('Menu'); }

    create() {
        const W = CONFIG.WIDTH, H = CONFIG.HEIGHT;

        // Warm background
        this.add.rectangle(W/2, H/2, W, H, 0x2c1810);

        // Decorative top bar
        this.add.rectangle(W/2, 20, W, 40, 0x4a2c20);
        this.add.rectangle(W/2, 40, W, 3, 0xffd700);

        // Title
        this.add.text(W/2 + 2, 90, 'SKILL ACADEMY', {
            fontFamily: '"Press Start 2P"', fontSize: '32px', color: '#1a0a00'
        }).setOrigin(0.5).setAlpha(0.4);

        this.add.text(W/2, 88, 'SKILL ACADEMY', {
            fontFamily: '"Press Start 2P"', fontSize: '32px', color: '#ffd700'
        }).setOrigin(0.5);

        // Subtitle
        this.add.text(W/2, 130, 'Master Claude Agent Skills', {
            fontFamily: '"Press Start 2P"', fontSize: '10px', color: '#c49464'
        }).setOrigin(0.5);

        // Decorative line
        this.add.rectangle(W/2, 155, 250, 2, 0x8b6914);

        // Instructions box
        const box = this.add.graphics();
        box.fillStyle(0x3d2a1a, 0.9);
        box.fillRoundedRect(W/2 - 200, 175, 400, 140, 8);
        box.lineStyle(2, 0x8b6914);
        box.strokeRoundedRect(W/2 - 200, 175, 400, 140, 8);

        this.add.text(W/2, 195, 'HOW TO PLAY', {
            fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#ffd700'
        }).setOrigin(0.5);

        const instructions = [
            '1. Explore the classroom',
            '2. Learn at each station (dialogues)',
            '3. Take the quiz after learning',
            '4. Complete all 4 stations to graduate!'
        ];
        instructions.forEach((txt, i) => {
            this.add.text(W/2, 225 + i * 22, txt, {
                fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#c49464'
            }).setOrigin(0.5);
        });

        // Bottom bar
        this.add.rectangle(W/2, H - 60, W, 2, 0x8b6914);

        // Start prompt
        const prompt = this.add.text(W/2, H - 35, 'PRESS SPACE TO START', {
            fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#ffd700'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: prompt,
            alpha: 0.3,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

        // Controls hint
        this.add.text(W/2, H - 12, 'Move: ARROWS/WASD | Interact: SPACE', {
            fontFamily: '"Press Start 2P"', fontSize: '7px', color: '#6b5344'
        }).setOrigin(0.5);

        // Input
        this.input.keyboard.once('keydown-SPACE', () => this.startGame());
        this.input.keyboard.once('keydown-ENTER', () => this.startGame());

        this.cameras.main.fadeIn(400);
    }

    startGame() {
        this.cameras.main.fadeOut(300);
        this.time.delayedCall(300, () => this.scene.start('Game'));
    }
}


// ============================================================================
// GAME SCENE
// ============================================================================
class GameScene extends Phaser.Scene {
    constructor() { super('Game'); }

    create() {
        this.dialogueActive = false;
        this.currentStation = null;
        this.dialogueIndex = 0;

        // Unified mode state - Learn then Quiz at each station
        this.challengeActive = false;
        this.currentChallenge = null;
        this.questionIndex = 0;
        this.selectedOption = 0;
        this.score = 0;
        this.totalQuestions = 0;

        // Track both learning and quiz completion per station
        this.stationProgress = {
            whiteboard: { learned: false, quizzed: false },
            bookshelf: { learned: false, quizzed: false },
            computer: { learned: false, quizzed: false },
            desk: { learned: false, quizzed: false }
        };
        this.stationScores = { whiteboard: 0, bookshelf: 0, computer: 0, desk: 0 };

        this.createRoom();
        this.createFurniture();
        this.createPlayer();
        this.createUI();
        this.createChallengeUI();

        this.cameras.main.fadeIn(500);

        this.time.delayedCall(600, () => {
            this.showNotification('Learn at each station, then take the quiz!');
        });
    }

    createRoom() {
        const T = CONFIG.TILE;
        for (let y = 3; y < 15; y++) {
            for (let x = 0; x < 20; x++) {
                this.add.image(x*T, y*T, 'floor').setOrigin(0);
            }
        }
        for (let x = 0; x < 20; x++) {
            for (let y = 0; y < 3; y++) {
                this.add.image(x*T, y*T, 'wall').setOrigin(0);
            }
            this.add.image(x*T, 2*T, 'wall_trim').setOrigin(0);
        }
        this.add.image(6*CONFIG.TILE, 7*CONFIG.TILE, 'rug').setOrigin(0);
    }

    createFurniture() {
        const T = CONFIG.TILE;
        this.stations = [];

        this.add.image(9*T, 0, 'window').setOrigin(0);

        // Whiteboard
        const whiteboard = this.add.image(2*T, T/2, 'whiteboard').setOrigin(0);
        this.stations.push({
            sprite: whiteboard,
            x: 3, y: 3, width: 4, height: 1,
            name: 'Whiteboard',
            challengeKey: 'whiteboard',
            dialogues: [
                "Welcome to Skill Basics!",
                "A SKILL is a reusable instruction package for Claude.",
                "Think of it like a recipe - it tells Claude exactly how to behave.",
                "Skills live in folders with a special SKILL.md file.",
                "The SKILL.md file has two parts:",
                "1. YAML frontmatter (metadata at the top)",
                "2. Markdown instructions (the actual guidance)",
                "Skills make Claude consistent and predictable!",
                "Same skill = Same behavior, every time."
            ]
        });

        // Bookshelf
        const bookshelf = this.add.image(17*T, 3*T, 'bookshelf').setOrigin(0);
        this.stations.push({
            sprite: bookshelf,
            x: 17, y: 5, width: 2, height: 2,
            name: 'Bookshelf',
            challengeKey: 'bookshelf',
            dialogues: [
                "Let's learn about SKILL.md structure!",
                "Every SKILL.md starts with YAML frontmatter:",
                "---\nname: my-skill\ndescription: What this does\n---",
                "Required fields: name, description",
                "Optional: version, tools, authors, dependencies",
                "After the YAML comes your instructions in Markdown!",
                "Keep instructions clear and specific!"
            ]
        });

        // Computer
        const computer = this.add.image(13*T, 5*T, 'computer').setOrigin(0);
        this.stations.push({
            sprite: computer,
            x: 13, y: 6, width: 2, height: 2,
            name: 'Computer',
            challengeKey: 'computer',
            dialogues: [
                "Welcome to Tools & Integration!",
                "TOOLS are Claude's built-in abilities.",
                "Reading files, running code, web search...",
                "SKILLS tell Claude WHEN and HOW to use tools!",
                "Tool = WHAT Claude CAN do",
                "Skill = HOW Claude SHOULD do it",
                "In SKILL.md, you can request specific tools:",
                "tools:\n  - web-search\n  - calculator"
            ]
        });

        // Desk
        const desk = this.add.image(T, 9*T, 'desk').setOrigin(0);
        this.add.image(2*T, 11*T, 'chair').setOrigin(0);
        this.stations.push({
            sprite: desk,
            x: 1, y: 10, width: 2, height: 2,
            name: 'Study Desk',
            challengeKey: 'desk',
            dialogues: [
                "Advanced Tips - The Final Lesson!",
                "TIP 1: Use @file references to load docs on demand",
                "TIP 2: Put pre-written code in scripts/ folder",
                "TIP 3: Skills can depend on other skills!",
                "dependencies: [code-style, testing]",
                "TIP 4: Keep SKILL.md under 500 lines",
                "Put edge cases in references/ folder",
                "Visit agentskills.io for full specification!"
            ]
        });

        // Decorative
        this.add.image(16*T, 10*T, 'plant').setOrigin(0);
        this.add.image(T, 5*T, 'lamp').setOrigin(0);

        // Teacher
        this.teacher = this.add.image(8*T, 5*T, 'teacher_down').setOrigin(0).setDepth(8);
        this.teacherMarker = this.add.image(8*T + 16, 4*T - 8, 'question_mark').setDepth(9);
        this.tweens.add({
            targets: this.teacherMarker, y: this.teacherMarker.y - 6,
            duration: 800, yoyo: true, repeat: -1, ease: 'Sine.easeInOut'
        });

        this.stations.push({
            sprite: this.teacher,
            x: 8, y: 5, width: 1, height: 1,
            name: 'Claudeooo',
            isTeacher: true,
            dialogues: this.getTeacherDialogues()
        });

        // Station completion markers
        this.stationMarkers = {};
        ['whiteboard', 'bookshelf', 'computer', 'desk'].forEach(key => {
            const station = this.stations.find(s => s.challengeKey === key);
            if (station) {
                const marker = this.add.image(
                    (station.x + station.width/2) * T,
                    (station.y - 0.5) * T,
                    'checkmark'
                ).setDepth(20).setVisible(false).setScale(0.8);
                this.stationMarkers[key] = marker;
            }
        });

        // Highlights
        this.highlights = [];
        this.stations.forEach(station => {
            for (let dx = 0; dx < station.width; dx++) {
                const h = this.add.image((station.x + dx)*T, station.y*T, 'highlight')
                    .setOrigin(0).setAlpha(0).setDepth(5);
                this.highlights.push({highlight: h, station: station});
            }
        });
    }

    getTeacherDialogues() {
        return [
            "Welcome to Skill Academy, student!",
            "I'm Claudeooo, your guide.",
            "[HOW IT WORKS]",
            "Visit each station to LEARN first...",
            "Then take a QUIZ to test yourself!",
            "[STATIONS]",
            "1. WHITEBOARD - Skill basics",
            "2. BOOKSHELF - SKILL.md structure",
            "3. COMPUTER - Tools & integration",
            "4. DESK - Advanced tips",
            "Complete all 4 to graduate!",
            "Good luck, student!"
        ];
    }

    createPlayer() {
        const T = CONFIG.TILE;
        this.player = this.add.image(10*T, 10*T, 'player_down').setDepth(10);
        this.player.gridX = 10;
        this.player.gridY = 10;
        this.player.facing = 'down';
        this.player.isMoving = false;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');
        this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.escKey = this.input.keyboard.addKey('ESC');
        this.oneKey = this.input.keyboard.addKey('ONE');
        this.twoKey = this.input.keyboard.addKey('TWO');
        this.threeKey = this.input.keyboard.addKey('THREE');
        this.fourKey = this.input.keyboard.addKey('FOUR');
    }

    createUI() {
        const W = CONFIG.WIDTH, H = CONFIG.HEIGHT, C = CONFIG.COLORS;

        // Dialogue box
        this.dialogueContainer = this.add.container(0, 0).setDepth(100).setVisible(false);

        const bg = this.add.graphics();
        bg.fillStyle(C.UI_BG);
        bg.fillRoundedRect(20, H-140, W-40, 120, 12);
        bg.lineStyle(4, C.UI_BORDER);
        bg.strokeRoundedRect(20, H-140, W-40, 120, 12);
        this.dialogueContainer.add(bg);

        const nameBg = this.add.graphics();
        nameBg.fillStyle(C.UI_BORDER);
        nameBg.fillRoundedRect(30, H-158, 140, 24, 8);
        nameBg.fillStyle(C.UI_BG);
        nameBg.fillRoundedRect(34, H-154, 132, 16, 6);
        this.dialogueContainer.add(nameBg);

        this.stationName = this.add.text(40, H-150, '', {
            fontFamily: '"Press Start 2P"', fontSize: '9px', color: '#2c1810'
        });
        this.dialogueContainer.add(this.stationName);

        this.dialogueText = this.add.text(40, H-120, '', {
            fontFamily: '"Press Start 2P"', fontSize: '10px', color: '#2c1810',
            wordWrap: {width: W-100}, lineSpacing: 8
        });
        this.dialogueContainer.add(this.dialogueText);

        this.pageText = this.add.text(W-80, H-40, '', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#8b7355'
        });
        this.dialogueContainer.add(this.pageText);

        this.contArrow = this.add.text(W-50, H-40, '>', {
            fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#2c1810'
        });
        this.dialogueContainer.add(this.contArrow);
        this.tweens.add({
            targets: this.contArrow, x: W-44,
            duration: 300, yoyo: true, repeat: -1
        });

        // Notification
        this.notification = this.add.container(W/2, -40).setDepth(100);
        const notifBg = this.add.graphics();
        notifBg.fillStyle(C.UI_BORDER);
        notifBg.fillRoundedRect(-250, -16, 500, 32, 8);
        notifBg.fillStyle(C.UI_BG);
        notifBg.fillRoundedRect(-246, -12, 492, 24, 6);
        this.notification.add(notifBg);

        this.notifText = this.add.text(0, 0, '', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#2c1810'
        }).setOrigin(0.5);
        this.notification.add(this.notifText);

        // Progress display
        this.scoreText = this.add.text(W-10, 10, '', {
            fontFamily: '"Press Start 2P"', fontSize: '10px', color: '#ffd700'
        }).setOrigin(1, 0).setDepth(50);
        this.updateProgressDisplay();

        // Title
        this.add.text(10, 10, 'SKILL ACADEMY', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#c49464'
        }).setDepth(50);

        // Controls
        this.add.text(W/2, H-8, 'ARROWS: Move  SPACE: Interact  ESC: Back/Close', {
            fontFamily: '"Press Start 2P"', fontSize: '7px', color: '#8b7355'
        }).setOrigin(0.5);
    }

    createChallengeUI() {
        const W = CONFIG.WIDTH, H = CONFIG.HEIGHT, C = CONFIG.COLORS;

        // Challenge container
        this.challengeContainer = this.add.container(0, 0).setDepth(150).setVisible(false);

        // Dark overlay
        const overlay = this.add.rectangle(W/2, H/2, W, H, 0x000000, 0.7);
        this.challengeContainer.add(overlay);

        // Main challenge box
        const challengeBg = this.add.graphics();
        challengeBg.fillStyle(C.UI_BG);
        challengeBg.fillRoundedRect(40, 40, W-80, H-80, 16);
        challengeBg.lineStyle(4, C.UI_BORDER);
        challengeBg.strokeRoundedRect(40, 40, W-80, H-80, 16);
        this.challengeContainer.add(challengeBg);

        // Challenge title
        this.challengeTitle = this.add.text(W/2, 70, '', {
            fontFamily: '"Press Start 2P"', fontSize: '14px', color: '#2c1810'
        }).setOrigin(0.5);
        this.challengeContainer.add(this.challengeTitle);

        // Question text
        this.questionText = this.add.text(W/2, 130, '', {
            fontFamily: '"Press Start 2P"', fontSize: '10px', color: '#2c1810',
            wordWrap: {width: W-120}, align: 'center', lineSpacing: 6
        }).setOrigin(0.5, 0);
        this.challengeContainer.add(this.questionText);

        // Options
        this.optionTexts = [];
        this.optionBgs = [];
        for (let i = 0; i < 4; i++) {
            const y = 220 + i * 50;
            const optBg = this.add.graphics();
            this.optionBgs.push(optBg);
            this.challengeContainer.add(optBg);

            const optText = this.add.text(W/2, y + 18, '', {
                fontFamily: '"Press Start 2P"', fontSize: '9px', color: '#2c1810',
                wordWrap: {width: W-160}
            }).setOrigin(0.5);
            this.optionTexts.push(optText);
            this.challengeContainer.add(optText);
        }

        // Progress indicator
        this.progressText = this.add.text(W/2, H-60, '', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#8b7355'
        }).setOrigin(0.5);
        this.challengeContainer.add(this.progressText);

        // Hint text
        this.hintText = this.add.text(W/2, H-80, 'Use UP/DOWN to select, SPACE to confirm', {
            fontFamily: '"Press Start 2P"', fontSize: '7px', color: '#8b7355'
        }).setOrigin(0.5);
        this.challengeContainer.add(this.hintText);

        // Feedback container
        this.feedbackContainer = this.add.container(0, 0).setDepth(160).setVisible(false);
        const feedbackOverlay = this.add.rectangle(W/2, H/2, W, H, 0x000000, 0.8);
        this.feedbackContainer.add(feedbackOverlay);

        const feedbackBox = this.add.graphics();
        feedbackBox.fillStyle(C.UI_BG);
        feedbackBox.fillRoundedRect(80, 120, W-160, 200, 16);
        feedbackBox.lineStyle(4, C.UI_BORDER);
        feedbackBox.strokeRoundedRect(80, 120, W-160, 200, 16);
        this.feedbackContainer.add(feedbackBox);

        this.feedbackTitle = this.add.text(W/2, 150, '', {
            fontFamily: '"Press Start 2P"', fontSize: '16px', color: '#2c1810'
        }).setOrigin(0.5);
        this.feedbackContainer.add(this.feedbackTitle);

        this.feedbackText = this.add.text(W/2, 210, '', {
            fontFamily: '"Press Start 2P"', fontSize: '9px', color: '#2c1810',
            wordWrap: {width: W-200}, align: 'center', lineSpacing: 6
        }).setOrigin(0.5, 0);
        this.feedbackContainer.add(this.feedbackText);

        this.feedbackHint = this.add.text(W/2, 290, 'Press SPACE to continue', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#8b7355'
        }).setOrigin(0.5);
        this.feedbackContainer.add(this.feedbackHint);
    }

    updateProgressDisplay() {
        const completed = Object.values(this.stationProgress).filter(s => s.learned && s.quizzed).length;
        this.scoreText.setText(`Progress: ${completed}/4 | Score: ${this.score}`);
    }

    showNotification(text) {
        this.notifText.setText(text);
        this.tweens.add({
            targets: this.notification, y: 30,
            duration: 300, ease: 'Back.easeOut',
            onComplete: () => {
                this.time.delayedCall(3000, () => {
                    this.tweens.add({
                        targets: this.notification, y: -40,
                        duration: 300, ease: 'Back.easeIn'
                    });
                });
            }
        });
    }

    update() {
        // Feedback screen input - only if challenge is active
        if (this.feedbackContainer && this.feedbackContainer.visible && this.currentChallenge) {
            if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
                this.feedbackContainer.setVisible(false);
                if (this.questionIndex >= this.currentChallenge.questions.length) {
                    this.endChallenge();
                } else {
                    this.challengeActive = true;
                    this.showQuestion();
                }
            }
            return;
        }

        // Challenge screen input
        if (this.challengeActive && this.challengeContainer && this.challengeContainer.visible) {
            // Handle intro screen - SPACE starts the quiz
            if (this.showingIntro) {
                if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
                    this.showingIntro = false;
                    this.showQuestion();
                }
                if (Phaser.Input.Keyboard.JustDown(this.escKey)) {
                    this.closeChallenge();
                }
                return;
            }

            // Handle question screen
            if (Phaser.Input.Keyboard.JustDown(this.cursors.up) || Phaser.Input.Keyboard.JustDown(this.wasd.W)) {
                this.selectedOption = Math.max(0, this.selectedOption - 1);
                this.updateOptionHighlights();
            }
            if (Phaser.Input.Keyboard.JustDown(this.cursors.down) || Phaser.Input.Keyboard.JustDown(this.wasd.S)) {
                this.selectedOption = Math.min(3, this.selectedOption + 1);
                this.updateOptionHighlights();
            }
            if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
                this.submitAnswer();
            }
            if (Phaser.Input.Keyboard.JustDown(this.escKey)) {
                this.closeChallenge();
            }
            // Number keys for quick selection
            if (Phaser.Input.Keyboard.JustDown(this.oneKey)) { this.selectedOption = 0; this.submitAnswer(); }
            if (Phaser.Input.Keyboard.JustDown(this.twoKey)) { this.selectedOption = 1; this.submitAnswer(); }
            if (Phaser.Input.Keyboard.JustDown(this.threeKey)) { this.selectedOption = 2; this.submitAnswer(); }
            if (Phaser.Input.Keyboard.JustDown(this.fourKey)) { this.selectedOption = 3; this.submitAnswer(); }
            return;
        }

        this.updateHighlights();

        if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.dialogueActive ? this.advanceDialogue() : this.tryInteract();
        }

        if (this.dialogueActive) {
            if (Phaser.Input.Keyboard.JustDown(this.escKey)) {
                this.closeDialogue();
            }
            if (Phaser.Input.Keyboard.JustDown(this.cursors.left) ||
                Phaser.Input.Keyboard.JustDown(this.wasd.A)) {
                this.previousDialogue();
            }
            return;
        }

        if (!this.player.isMoving) {
            if (this.cursors.up.isDown || this.wasd.W.isDown) this.tryMove('up');
            else if (this.cursors.down.isDown || this.wasd.S.isDown) this.tryMove('down');
            else if (this.cursors.left.isDown || this.wasd.A.isDown) this.tryMove('left');
            else if (this.cursors.right.isDown || this.wasd.D.isDown) this.tryMove('right');
        }
    }

    updateHighlights() {
        const px = this.player.gridX, py = this.player.gridY;
        this.highlights.forEach(({highlight, station}) => {
            const near = Math.abs(px - station.x) <= station.width &&
                        Math.abs(py - station.y) <= 1;
            highlight.setAlpha(near ? 0.6 : 0);
        });
    }

    tryMove(dir) {
        const T = CONFIG.TILE;
        const dx = dir === 'left' ? -1 : dir === 'right' ? 1 : 0;
        const dy = dir === 'up' ? -1 : dir === 'down' ? 1 : 0;
        const newX = this.player.gridX + dx;
        const newY = this.player.gridY + dy;

        this.player.facing = dir;
        this.player.setTexture(`player_${dir}`);

        if (newX < 1 || newX > 18 || newY < 4 || newY > 13) return;
        if (this.isBlocked(newX, newY)) return;

        this.player.isMoving = true;
        this.player.gridX = newX;
        this.player.gridY = newY;

        this.tweens.add({
            targets: this.player,
            x: newX * T + T/2,
            y: newY * T + T/2,
            duration: 120,
            onComplete: () => { this.player.isMoving = false; }
        });
    }

    isBlocked(x, y) {
        const blocked = [
            {x: 17, y: 3}, {x: 18, y: 3}, {x: 17, y: 4}, {x: 18, y: 4},
            {x: 13, y: 5}, {x: 14, y: 5},
            {x: 1, y: 9}, {x: 2, y: 9}, {x: 1, y: 10}, {x: 2, y: 10},
            {x: 2, y: 11},
            {x: 16, y: 10},
            {x: 1, y: 5},
            {x: 8, y: 5}
        ];
        return blocked.some(b => b.x === x && b.y === y);
    }

    tryInteract() {
        const px = this.player.gridX, py = this.player.gridY;

        for (const station of this.stations) {
            const inRange = px >= station.x - 1 && px <= station.x + station.width &&
                           py >= station.y - 1 && py <= station.y + 1;
            if (inRange) {
                // Teacher has no challenge key - just show dialogues
                if (station.isTeacher || !station.challengeKey) {
                    this.showDialogue(station);
                    return;
                }

                const progress = this.stationProgress[station.challengeKey];

                // Already fully completed
                if (progress.learned && progress.quizzed) {
                    this.showNotification(`${station.name} complete! Check other stations.`);
                    return;
                }

                // Haven't learned yet - show dialogues first
                if (!progress.learned) {
                    this.showDialogue(station);
                    return;
                }

                // Learned but not quizzed - start quiz
                if (progress.learned && !progress.quizzed) {
                    this.startChallenge(station.challengeKey, station.name);
                    return;
                }

                return;
            }
        }
    }

    // Dialogue methods
    showDialogue(station) {
        this.dialogueActive = true;
        this.currentStation = station;
        this.dialogueIndex = 0;

        this.stationName.setText(station.name);
        this.updateDialogue();
        this.dialogueContainer.setVisible(true).setAlpha(0);
        this.tweens.add({targets: this.dialogueContainer, alpha: 1, duration: 150});
    }

    updateDialogue() {
        this.dialogueText.setText(this.currentStation.dialogues[this.dialogueIndex]);
        this.pageText.setText(`${this.dialogueIndex + 1}/${this.currentStation.dialogues.length}`);
    }

    advanceDialogue() {
        this.dialogueIndex++;
        if (this.dialogueIndex >= this.currentStation.dialogues.length) {
            this.closeDialogue();
        } else {
            this.updateDialogue();
        }
    }

    previousDialogue() {
        if (this.dialogueIndex > 0) {
            this.dialogueIndex--;
            this.updateDialogue();
        }
    }

    closeDialogue() {
        const station = this.currentStation;

        this.tweens.add({
            targets: this.dialogueContainer, alpha: 0, duration: 150,
            onComplete: () => {
                this.dialogueContainer.setVisible(false);
                this.dialogueActive = false;
                this.currentStation = null;
                this.input.keyboard.resetKeys();

                // Mark station as learned and auto-start quiz (if it has one)
                if (station && station.challengeKey && !station.isTeacher) {
                    const progress = this.stationProgress[station.challengeKey];
                    if (!progress.learned) {
                        progress.learned = true;
                        this.showNotification('Lesson complete! Quiz starting...');
                        this.time.delayedCall(1500, () => {
                            this.startChallenge(station.challengeKey, station.name);
                        });
                    }
                }
            }
        });
    }

    // Challenge methods
    startChallenge(key, stationName) {
        this.challengeActive = true;
        this.showingIntro = true; // Flag to prevent immediate answer submission
        this.currentChallenge = CHALLENGES[key];
        this.currentChallengeKey = key;
        this.questionIndex = 0;
        this.selectedOption = 0;
        this.challengeScore = 0;

        this.challengeTitle.setText(this.currentChallenge.name);
        this.challengeContainer.setVisible(true);

        // Show intro then first question
        this.questionText.setText(this.currentChallenge.intro);
        this.optionTexts.forEach(t => t.setText(''));
        this.optionBgs.forEach(bg => bg.clear());
        this.progressText.setText('Press SPACE to begin');
        this.hintText.setText('');
    }

    showQuestion() {
        const W = CONFIG.WIDTH;
        const q = this.currentChallenge.questions[this.questionIndex];

        this.questionText.setText(q.question);
        this.progressText.setText(`Question ${this.questionIndex + 1} of ${this.currentChallenge.questions.length}`);
        this.hintText.setText('UP/DOWN or 1-4 to select, SPACE to confirm');

        q.options.forEach((opt, i) => {
            this.optionTexts[i].setText(`${i + 1}. ${opt}`);
        });

        this.selectedOption = 0;
        this.updateOptionHighlights();
    }

    updateOptionHighlights() {
        const W = CONFIG.WIDTH, C = CONFIG.COLORS;

        this.optionBgs.forEach((bg, i) => {
            bg.clear();
            const y = 220 + i * 50;
            const isSelected = i === this.selectedOption;

            bg.fillStyle(isSelected ? C.OPTION_HOVER : C.OPTION_BG, isSelected ? 0.5 : 0.3);
            bg.fillRoundedRect(70, y, W-140, 40, 8);

            if (isSelected) {
                bg.lineStyle(3, C.OPTION_HOVER);
                bg.strokeRoundedRect(70, y, W-140, 40, 8);
            }
        });
    }

    submitAnswer() {
        const q = this.currentChallenge.questions[this.questionIndex];
        const isCorrect = this.selectedOption === q.correct;

        if (isCorrect) {
            this.score++;
            this.challengeScore++;
            this.feedbackTitle.setText('CORRECT!').setColor('#4a7c59');
        } else {
            this.feedbackTitle.setText('INCORRECT').setColor('#c44536');
        }

        this.feedbackText.setText(q.explanation);
        this.feedbackContainer.setVisible(true);
        this.challengeContainer.setVisible(false);

        this.questionIndex++;
        this.totalQuestions++;
        this.updateProgressDisplay();
    }

    endChallenge() {
        const total = this.currentChallenge.questions.length;
        const score = this.challengeScore;
        const percent = Math.round((score / total) * 100);

        // Mark station as quizzed
        this.stationProgress[this.currentChallengeKey].quizzed = true;
        this.stationScores[this.currentChallengeKey] = score;

        // Show completion marker
        if (this.stationMarkers[this.currentChallengeKey]) {
            this.stationMarkers[this.currentChallengeKey].setVisible(true);
            this.tweens.add({
                targets: this.stationMarkers[this.currentChallengeKey],
                scale: 1.2,
                duration: 200,
                yoyo: true
            });
        }

        let message = '';
        if (percent === 100) {
            message = `PERFECT! ${score}/${total} - You're a master!`;
        } else if (percent >= 70) {
            message = `Great job! ${score}/${total} (${percent}%)`;
        } else {
            message = `${score}/${total} (${percent}%) - Keep learning!`;
        }

        this.showNotification(message);
        this.updateProgressDisplay();

        // Check if all stations complete (learned + quizzed)
        const allComplete = Object.values(this.stationProgress).every(s => s.learned && s.quizzed);
        if (allComplete) {
            this.time.delayedCall(2000, () => this.showGraduation());
        }

        // Reset all challenge state
        this.challengeActive = false;
        this.showingIntro = false;
        this.challengeContainer.setVisible(false);
        this.feedbackContainer.setVisible(false);
        this.currentChallenge = null;

        // Reset keyboard and add small delay before movement allowed
        this.input.keyboard.resetKeys();
        this.player.isMoving = true;
        this.time.delayedCall(300, () => {
            this.player.isMoving = false;
        });
    }

    closeChallenge() {
        this.challengeActive = false;
        this.showingIntro = false;
        this.challengeContainer.setVisible(false);
        this.feedbackContainer.setVisible(false);
        this.currentChallenge = null;
        this.input.keyboard.resetKeys();
    }

    showGraduation() {
        const W = CONFIG.WIDTH, H = CONFIG.HEIGHT;

        // Calculate total score
        const totalScore = Object.values(this.stationScores).reduce((a, b) => a + b, 0);
        const maxScore = Object.values(CHALLENGES).reduce((a, c) => a + c.questions.length, 0);
        const percent = Math.round((totalScore / maxScore) * 100);

        // Create graduation screen
        const gradContainer = this.add.container(0, 0).setDepth(200);

        const overlay = this.add.rectangle(W/2, H/2, W, H, 0x2c1810, 0.95);
        gradContainer.add(overlay);

        // Stars animation
        for (let i = 0; i < 5; i++) {
            const star = this.add.image(W/2 - 100 + i * 50, 80, 'star').setScale(0);
            gradContainer.add(star);
            this.tweens.add({
                targets: star,
                scale: 1,
                angle: 360,
                duration: 500,
                delay: i * 100,
                ease: 'Back.easeOut'
            });
        }

        const title = this.add.text(W/2, 140, 'CONGRATULATIONS!', {
            fontFamily: '"Press Start 2P"', fontSize: '20px', color: '#ffd700'
        }).setOrigin(0.5);
        gradContainer.add(title);

        const subtitle = this.add.text(W/2, 180, 'You completed Skill Academy!', {
            fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#f5e6d3'
        }).setOrigin(0.5);
        gradContainer.add(subtitle);

        // Score breakdown
        const breakdown = this.add.text(W/2, 230, 'Your Results:', {
            fontFamily: '"Press Start 2P"', fontSize: '10px', color: '#c49464'
        }).setOrigin(0.5);
        gradContainer.add(breakdown);

        const stationNames = {
            whiteboard: 'Whiteboard',
            bookshelf: 'Bookshelf',
            computer: 'Computer',
            desk: 'Study Desk'
        };

        let y = 260;
        for (const [key, score] of Object.entries(this.stationScores)) {
            const max = CHALLENGES[key].questions.length;
            const text = this.add.text(W/2, y, `${stationNames[key]}: ${score}/${max}`, {
                fontFamily: '"Press Start 2P"', fontSize: '9px', color: '#f5e6d3'
            }).setOrigin(0.5);
            gradContainer.add(text);
            y += 25;
        }

        const totalText = this.add.text(W/2, y + 10, `TOTAL: ${totalScore}/${maxScore} (${percent}%)`, {
            fontFamily: '"Press Start 2P"', fontSize: '12px', color: '#ffd700'
        }).setOrigin(0.5);
        gradContainer.add(totalText);

        // Grade
        let grade = 'F';
        if (percent >= 90) grade = 'A+';
        else if (percent >= 80) grade = 'A';
        else if (percent >= 70) grade = 'B';
        else if (percent >= 60) grade = 'C';
        else if (percent >= 50) grade = 'D';

        const gradeText = this.add.text(W/2, y + 50, `Grade: ${grade}`, {
            fontFamily: '"Press Start 2P"', fontSize: '16px', color: '#ffd700'
        }).setOrigin(0.5);
        gradContainer.add(gradeText);

        const hint = this.add.text(W/2, H - 40, 'Press SPACE to return to menu', {
            fontFamily: '"Press Start 2P"', fontSize: '8px', color: '#8b7355'
        }).setOrigin(0.5);
        gradContainer.add(hint);

        this.tweens.add({
            targets: hint, alpha: 0.3,
            duration: 500, yoyo: true, repeat: -1
        });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(500);
            this.time.delayedCall(500, () => this.scene.start('Menu'));
        });
    }
}

// ============================================================================
// INITIALIZE
// ============================================================================
new Phaser.Game({
    type: Phaser.CANVAS,
    width: CONFIG.WIDTH,
    height: CONFIG.HEIGHT,
    parent: 'game-container',
    pixelArt: false,
    antialias: true,
    scale: {mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH},
    scene: [BootScene, MenuScene, GameScene]
});

console.log('%c SKILL ACADEMY', 'font-size:20px;font-weight:bold;color:#f5e6d3;background:#2c1810;padding:8px 16px;border-radius:4px');
console.log('%cLearn Claude Agent Skills - Now with CHALLENGES!', 'font-size:12px;color:#c49464');
