// 游戏数据
const games = [
    {
        id: 1,
        name: "Candy Crush",
        category: "puzzle",
        icon: "fas fa-candy-cane",
        description: "经典的三消游戏，匹配糖果获得高分",
        url: "01-Candy-Crush-Game/index.html",
        color: "from-pink-500 to-purple-500"
    },
    {
        id: 2,
        name: "Archery Game",
        category: "action",
        icon: "fas fa-bullseye",
        description: "精准射箭游戏，考验你的瞄准技巧",
        url: "02-Archery-Game/index.html",
        color: "from-green-500 to-blue-500"
    },
    {
        id: 3,
        name: "Speed Typing",
        category: "puzzle",
        icon: "fas fa-keyboard",
        description: "提升打字速度的挑战游戏",
        url: "03-Speed-Typing-Game/index.html",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 4,
        name: "Breakout",
        category: "classic",
        icon: "fas fa-cube",
        description: "经典的打砖块游戏，破坏所有砖块",
        url: "04-Breakout-Game/index.html",
        color: "from-red-500 to-pink-500"
    },
    {
        id: 5,
        name: "Minesweeper",
        category: "puzzle",
        icon: "fas fa-bomb",
        description: "经典扫雷游戏，找出所有地雷",
        url: "05-Minesweeper-Game/index.html",
        color: "from-gray-600 to-gray-800"
    },
    {
        id: 6,
        name: "Tower Blocks",
        category: "arcade",
        icon: "fas fa-building",
        description: "堆叠积木建造最高塔",
        url: "06-Tower-Blocks/index.html",
        color: "from-blue-500 to-purple-500"
    },
    {
        id: 7,
        name: "Ping Pong",
        category: "classic",
        icon: "fas fa-table-tennis",
        description: "经典乒乓球对战游戏",
        url: "07-Ping-Pong-Game/index.html",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 8,
        name: "Tetris",
        category: "classic",
        icon: "fas fa-puzzle-piece",
        description: "经典俄罗斯方块游戏",
        url: "08-Tetris-Game/index.html",
        color: "from-cyan-500 to-blue-500"
    },
    {
        id: 9,
        name: "Tilting Maze",
        category: "puzzle",
        icon: "fas fa-maze",
        description: "重力迷宫游戏，倾斜设备控制小球",
        url: "09-Tilting-Maze-Game/index.html",
        color: "from-green-600 to-blue-600"
    },
    {
        id: 10,
        name: "Memory Card",
        category: "puzzle",
        icon: "fas fa-brain",
        description: "记忆翻牌游戏，测试你的记忆力",
        url: "10-Memory-Card-Game/index.html",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 11,
        name: "Rock Paper Scissors",
        category: "classic",
        icon: "fas fa-hand-peace",
        description: "经典剪刀石头布游戏",
        url: "11-Rock-Paper-Scissors/index.html",
        color: "from-indigo-500 to-purple-500"
    },
    {
        id: 12,
        name: "Number Guessing",
        category: "puzzle",
        icon: "fas fa-question-circle",
        description: "数字猜测游戏，猜出正确数字",
        url: "12-Type-Number-Guessing-Game/index.html",
        color: "from-teal-500 to-green-500"
    },
    {
        id: 13,
        name: "Tic Tac Toe",
        category: "classic",
        icon: "fas fa-times",
        description: "经典井字棋游戏",
        url: "13-Tic-Tac-Toe/index.html",
        color: "from-red-500 to-blue-500"
    },
    {
        id: 14,
        name: "Snake Game",
        category: "classic",
        icon: "fas fa-snake",
        description: "经典贪吃蛇游戏",
        url: "14-Snake-Game/index.html",
        color: "from-green-500 to-lime-500"
    },
    {
        id: 15,
        name: "Connect Four",
        category: "puzzle",
        icon: "fas fa-circle",
        description: "四子连珠游戏，横竖斜连成四子",
        url: "15-Connect-Four-Game/index.html",
        color: "from-red-600 to-yellow-600"
    },
    {
        id: 16,
        name: "Insect Catch",
        category: "action",
        icon: "fas fa-bug",
        description: "捕捉昆虫游戏，快速点击昆虫",
        url: "16-Insect-Catch-Game/index.html",
        color: "from-green-600 to-brown-600"
    },
    {
        id: 17,
        name: "Typing Game",
        category: "puzzle",
        icon: "fas fa-font",
        description: "打字练习游戏，提升打字技能",
        url: "17-Typing-Game/index.html",
        color: "from-blue-600 to-purple-600"
    },
    {
        id: 18,
        name: "Hangman",
        category: "puzzle",
        icon: "fas fa-user-times",
        description: "猜单词游戏，拯救hangman",
        url: "18-Hangman-Game/index.html",
        color: "from-gray-700 to-red-700"
    },
    {
        id: 19,
        name: "Flappy Bird",
        category: "arcade",
        icon: "fas fa-dove",
        description: "经典flappy bird游戏，穿越管道",
        url: "19-Flappy-Bird-Game/index.html",
        color: "from-cyan-400 to-blue-400"
    },
    {
        id: 20,
        name: "Crossy Road",
        category: "arcade",
        icon: "fas fa-road",
        description: "过马路游戏，避开车辆到达对岸",
        url: "20-Crossy-Road-Game/index.html",
        color: "from-green-400 to-blue-400"
    },
    {
        id: 21,
        name: "2048",
        category: "puzzle",
        icon: "fas fa-calculator",
        description: "数字合成游戏，得到2048",
        url: "21-2048-Game/index.html",
        color: "from-yellow-400 to-orange-400"
    },
    {
        id: 22,
        name: "Dice Roll",
        category: "classic",
        icon: "fas fa-dice",
        description: "骰子模拟器，体验掷骰子的乐趣",
        url: "22-Dice-Roll-Simulator/index.html",
        color: "from-red-400 to-pink-400"
    },
    {
        id: 23,
        name: "Shape Clicker",
        category: "action",
        icon: "fas fa-shapes",
        description: "图形点击游戏，快速点击目标图形",
        url: "23-Shape-Clicker-Game/index.html",
        color: "from-purple-400 to-pink-400"
    },
    {
        id: 24,
        name: "Advanced Typing",
        category: "puzzle",
        icon: "fas fa-keyboard",
        description: "高级打字游戏，挑战打字极限",
        url: "24-Typing-Game/index.html",
        color: "from-indigo-400 to-purple-400"
    },
    {
        id: 25,
        name: "Voice Number Guess",
        category: "puzzle",
        icon: "fas fa-microphone",
        description: "语音数字猜测游戏，用语音输入",
        url: "25-Speak-Number-Guessing-Game/index.html",
        color: "from-teal-400 to-green-400"
    },
    {
        id: 26,
        name: "Fruit Slicer",
        category: "action",
        icon: "fas fa-apple-alt",
        description: "水果忍者游戏，切开各种水果",
        url: "26-Fruit-Slicer-Game/index.html",
        color: "from-red-400 to-orange-400"
    },
    {
        id: 27,
        name: "Quiz Game",
        category: "puzzle",
        icon: "fas fa-question",
        description: "知识问答游戏，测试你的知识",
        url: "27-Quiz-Game/index.html",
        color: "from-blue-500 to-indigo-500"
    },
    {
        id: 28,
        name: "Emoji Catcher",
        category: "action",
        icon: "fas fa-smile",
        description: "表情符号捕捉游戏，收集各种emoji",
        url: "28-Emoji-Catcher-Game/index.html",
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: 29,
        name: "Whack A Mole",
        category: "arcade",
        icon: "fas fa-hammer",
        description: "打地鼠游戏，快速击打出现的地鼠",
        url: "29-Whack-A-Mole-Game/index.html",
        color: "from-brown-600 to-yellow-600"
    },
    {
        id: 30,
        name: "Simon Says",
        category: "puzzle",
        icon: "fas fa-memory",
        description: "记忆序列游戏，重复正确的顺序",
        url: "30-Simon-Says-Game/index.html",
        color: "from-green-500 to-blue-500"
    }
];

// 粒子系统
let particles = [];
let particleCount = 100;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particles-container');
    
    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear();
    
    // 更新和绘制粒子
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-0.5, 0.5);
        this.vy = random(-0.5, 0.5);
        this.size = random(1, 3);
        this.opacity = random(0.3, 0.8);
        this.color = random(['#00ffff', '#ff00ff', '#ffff00', '#00ff00']);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // 边界检测
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // 保持在画布内
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
    
    display() {
        fill(this.color + Math.floor(this.opacity * 255).toString(16));
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}

// 渲染游戏卡片
function renderGames(gamesToShow = games) {
    const grid = document.getElementById('games-grid');
    grid.innerHTML = '';
    
    gamesToShow.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card rounded-xl p-6 group';
        gameCard.innerHTML = `
            <div class="text-center">
                <div class="mb-4">
                    <i class="${game.icon} game-icon bg-gradient-to-r ${game.color}"></i>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2 orbitron">${game.name}</h3>
                <p class="text-gray-300 mb-6 text-sm leading-relaxed">${game.description}</p>
                <button onclick="playGame('${game.url}')" class="play-btn w-full py-3 px-6 rounded-lg text-white font-bold text-lg orbitron">
                    <i class="fas fa-play mr-2"></i>
                    开始游戏
                </button>
            </div>
        `;
        grid.appendChild(gameCard);
    });
}

// 开始游戏
function playGame(url) {
    window.open(url, '_blank');
}

// 分类过滤
function filterGames(category) {
    const buttons = document.querySelectorAll('.category-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderGames();
    } else {
        const filteredGames = games.filter(game => game.category === category);
        renderGames(filteredGames);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderGames();
    
    // 添加分类过滤器事件
    const filterButtons = document.querySelectorAll('.category-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            filterGames(category);
        });
    });
});