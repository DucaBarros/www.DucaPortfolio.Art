// Konami Code Pop-up Alert
document.addEventListener('DOMContentLoaded', function () {
    const konamiCode = [
                'KeyX'
                // 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                // 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
                // 'KeyB', 'KeyA'
            ];
    let userInput = [];

    document.addEventListener('keydown', function (e) {
        userInput.push(e.code);

        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }

        if (userInput.length === konamiCode.length) {
            if (userInput.every((key, index) => key === konamiCode[index])) {
                showCustomAlert('Easter Egg Activated!', '🎮 Welcome to the Matrix! 🎮', '🕶️');
                document.body.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 3000);
                userInput = [];
            }
        }
    });
});


// Matrix Falling Numbers Animation
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles-container');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = Math.random() > 0.5 ? '1' : '0'; // random 0 or 1
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 25000);
    }
    
    setInterval(createParticle, 200);
});

//Particles-animation
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles-container');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 96 + '%';
        particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 25000);
    }
    
    setInterval(createParticle, 200);
});


// Skills-Chart (DEACTIVATED)
// document.addEventListener('DOMContentLoaded', function() {
//     const chartDom = document.getElementById('skills-chart');
//     const myChart = echarts.init(chartDom);
    
//     const option = {
//         animation: false,
//         radar: {
//             indicator: [
//                 { name: 'JavaScript', max: 100 },
//                 { name: 'Python', max: 100 },
//                 { name: 'HTML/CSS', max: 100 },
//                 { name: 'AI/ML', max: 100 },
//                 { name: 'Data Science', max: 100 },
//                 { name: 'Problem Solving', max: 100 }
//             ],
//             axisLine: {
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.2)'
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: 'rgba(255, 255, 255, 0.1)'
//                 }
//             },
//             axisLabel: {
//                 color: '#e0e6ed'
//             },
//             name: {
//                 textStyle: {
//                     color: '#e0e6ed'
//                 }
//             }
//         },
//         series: [{
//             type: 'radar',
//             data: [{
//                 value: [90, 85, 95, 70, 75, 88],
//                 areaStyle: {
//                     color: 'rgba(0, 255, 157, 0.1)'
//                 },
//                 lineStyle: {
//                     color: '#00ff9d'
//                 },
//                 itemStyle: {
//                     color: '#00ff9d'
//                 }
//             }]
//         }]
//     };
    
//     myChart.setOption(option);
// });
