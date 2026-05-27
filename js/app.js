// ==================== FINAL APP INTEGRATION ====================
// File: js/app.js
// Menggabungkan semua komponen dan menginisialisasi aplikasi

// ==================== APP STATE ====================
const AppState = {
    // UI State
    currentView: 'home', // home, quiz, result, review
    darkMode: false,
    
    // Quiz State (sync dengan QuizEngine)
    currentIndex: 0,
    answers: {},
    quizCompleted: false,
    filterCategory: 'all',
    isShuffled: false,
    
    // Timer State
    timerActive: false,
    timeLeft: 0,
    timerDisplay: '00:00',
    
    // UI Elements
    rootElement: null,
    
    // Filter categories
    filterCategories: [
        { value: 'all', label: 'Semua', icon: '📚' },
        { value: 'kanji', label: 'Kanji', icon: '📖' },
        { value: 'vocabulary', label: 'Kosakata', icon: '📚' },
        { value: 'grammar', label: 'Grammar', icon: '✍️' },
        { value: 'particle', label: 'Partikel', icon: '🔤' },
        { value: 'verb', label: 'Verb', icon: '⚡' },
        { value: 'reading', label: 'Membaca', icon: '📄' },
        { value: 'listening', label: 'Listening', icon: '🎧' }
    ]
};

// ==================== HELPER FUNCTIONS ====================
const Helpers = {
    // Get filtered questions
    getFilteredQuestions: () => {
        let qs = window.questionsAll || [];
        if (AppState.filterCategory !== 'all') {
            qs = qs.filter(q => q.category === AppState.filterCategory);
        }
        if (AppState.isShuffled) {
            qs = [...qs];
            for (let i = qs.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [qs[i], qs[j]] = [qs[j], qs[i]];
            }
        }
        return qs;
    },
    
    // Get current question
    getCurrentQuestion: () => {
        const filtered = Helpers.getFilteredQuestions();
        return filtered[AppState.currentIndex];
    },
    
    // Get total questions
    getTotalQuestions: () => {
        return Helpers.getFilteredQuestions().length;
    },
    
    // Get answered count
    getAnsweredCount: () => {
        return Object.keys(AppState.answers).length;
    },
    
    // Get score
    getScore: () => {
        return Object.values(AppState.answers).filter(a => a && a.isCorrect).length;
    },
    
    // Get score percentage
    getScorePercentage: () => {
        const total = Helpers.getTotalQuestions();
        return total > 0 ? (Helpers.getScore() / total) * 100 : 0;
    },
    
    // Get category stats
    getCategoryStats: () => {
        const stats = {};
        Object.values(AppState.answers).forEach(answer => {
            if (answer && answer.question) {
                const cat = answer.question.category;
                if (!stats[cat]) stats[cat] = { correct: 0, total: 0 };
                stats[cat].total++;
                if (answer.isCorrect) stats[cat].correct++;
            }
        });
        return stats;
    },
    
    // Save to localStorage
    saveToLocalStorage: () => {
        try {
            localStorage.setItem('jlpt_answers', JSON.stringify(AppState.answers));
            localStorage.setItem('jlpt_progress', JSON.stringify({
                currentIndex: AppState.currentIndex,
                filterCategory: AppState.filterCategory
            }));
            localStorage.setItem('jlpt_darkmode', AppState.darkMode);
        } catch(e) {}
    },
    
    // Load from localStorage
    loadFromLocalStorage: () => {
        try {
            const savedAnswers = localStorage.getItem('jlpt_answers');
            if (savedAnswers) AppState.answers = JSON.parse(savedAnswers);
            
            const savedProgress = localStorage.getItem('jlpt_progress');
            if (savedProgress) {
                const progress = JSON.parse(savedProgress);
                AppState.currentIndex = progress.currentIndex || 0;
                AppState.filterCategory = progress.filterCategory || 'all';
            }
            
            const savedDarkMode = localStorage.getItem('jlpt_darkmode');
            if (savedDarkMode !== null) AppState.darkMode = savedDarkMode === 'true';
        } catch(e) {}
    },
    
    // Reset quiz
    resetQuiz: () => {
        AppState.answers = {};
        AppState.currentIndex = 0;
        AppState.quizCompleted = false;
        AppState.timerActive = false;
        AppState.timeLeft = 0;
        AppState.timerDisplay = '00:00';
        if (window.timerInterval) {
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
        Helpers.saveToLocalStorage();
        AppState.currentView = 'home';
        AppRenderer.render();
    }
};

// ==================== TIMER FUNCTIONS ====================
const TimerManager = {
    startTimer: (minutes = 30) => {
        if (window.timerInterval) clearInterval(window.timerInterval);
        
        AppState.timerActive = true;
        AppState.timeLeft = minutes * 60;
        AppState.timerDisplay = Helpers.formatTime(AppState.timeLeft);
        
        window.timerInterval = setInterval(() => {
            if (AppState.timeLeft > 0 && AppState.currentView === 'quiz') {
                AppState.timeLeft--;
                AppState.timerDisplay = Helpers.formatTime(AppState.timeLeft);
                AppRenderer.render();
                
                if (AppState.timeLeft === 0) {
                    clearInterval(window.timerInterval);
                    AppState.quizCompleted = true;
                    AppState.currentView = 'result';
                    AppRenderer.render();
                }
            }
        }, 1000);
    },
    
    stopTimer: () => {
        if (window.timerInterval) {
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
        AppState.timerActive = false;
    },
    
    formatTime: (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
};

// ==================== EVENT HANDLERS ====================
const EventHandlers = {
    // Start quiz
    startQuiz: () => {
        AppState.currentView = 'quiz';
        AppState.currentIndex = 0;
        AppState.quizCompleted = false;
        
        if (AppState.timerActive) {
            TimerManager.startTimer(30);
        }
        
        AppRenderer.render();
    },
    
    // Handle answer
    handleAnswer: (event, questionId, selectedValue, selectedLabel, isCorrect) => {
        event.preventDefault();
        
        if (AppState.answers[questionId]) return;
        
        const question = Helpers.getCurrentQuestion();
        AppState.answers[questionId] = {
            selected: selectedLabel,
            selectedValue: selectedValue,
            isCorrect: isCorrect,
            question: question,
            answeredAt: new Date().toISOString()
        };
        
        Helpers.saveToLocalStorage();
        AppRenderer.render();
    },
    
    // Next question
    nextQuestion: () => {
        const total = Helpers.getTotalQuestions();
        if (AppState.currentIndex + 1 < total) {
            AppState.currentIndex++;
            AppRenderer.render();
        } else {
            AppState.quizCompleted = true;
            AppState.currentView = 'result';
            TimerManager.stopTimer();
            AppRenderer.render();
        }
    },
    
    // Jump to specific question
    jumpToQuestion: (index) => {
        AppState.currentIndex = index;
        AppRenderer.render();
    },
    
    // Restart quiz
    restartQuiz: () => {
        Helpers.resetQuiz();
        AppRenderer.render();
    },
    
    // Show review
    showReview: () => {
        AppState.currentView = 'review';
        AppRenderer.render();
    },
    
    // Back from review
    backFromReview: () => {
        AppState.currentView = 'result';
        AppRenderer.render();
    },
    
    // Change category filter
    changeFilter: (category) => {
        AppState.filterCategory = category;
        AppState.answers = {};
        AppState.currentIndex = 0;
        Helpers.saveToLocalStorage();
        AppRenderer.render();
    },
    
    // Toggle shuffle
    toggleShuffle: () => {
        AppState.isShuffled = !AppState.isShuffled;
        AppState.answers = {};
        AppState.currentIndex = 0;
        AppRenderer.render();
    },
    
    // Toggle timer
    toggleTimer: () => {
        AppState.timerActive = !AppState.timerActive;
        if (!AppState.timerActive && window.timerInterval) {
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
        AppRenderer.render();
    },
    
    // Toggle dark mode
    toggleDarkMode: () => {
        AppState.darkMode = !AppState.darkMode;
        if (AppState.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('jlpt_darkmode', AppState.darkMode);
        AppRenderer.render();
    },
    
    // Reset all data
    resetAllData: () => {
        if (confirm('Apakah Anda yakin ingin mereset semua progress? Data akan hilang permanen.')) {
            localStorage.removeItem('jlpt_answers');
            localStorage.removeItem('jlpt_progress');
            Helpers.resetQuiz();
            AppState.filterCategory = 'all';
            AppState.isShuffled = false;
            AppState.timerActive = false;
            AppRenderer.render();
        }
    }
};

// ==================== RENDERER SYSTEM ====================
const AppRenderer = {
    // Main render function
    render: () => {
        if (!AppState.rootElement) {
            AppState.rootElement = document.getElementById('root');
            if (!AppState.rootElement) {
                console.error('Root element not found!');
                return;
            }
        }
        
        let html = '';
        
        // Dark mode class
        if (AppState.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        // Header
        html += AppRenderer.renderHeader();
        
        // Main content based on view
        if (AppState.currentView === 'home') {
            html += AppRenderer.renderHome();
        } else if (AppState.currentView === 'quiz') {
            html += AppRenderer.renderQuiz();
        } else if (AppState.currentView === 'result') {
            html += AppRenderer.renderResult();
        } else if (AppState.currentView === 'review') {
            html += AppRenderer.renderReview();
        }
        
        AppState.rootElement.innerHTML = html;
    },
    
    // Header component
    renderHeader: () => {
        return `
            <header class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div class="container mx-auto px-4 py-3 max-w-7xl flex justify-between items-center">
                    <div class="flex items-center space-x-2 cursor-pointer" onclick="AppRenderer.goHome()">
                        <span class="text-2xl">🎌</span>
                        <span class="font-bold text-xl text-gray-800 dark:text-white">JLPT N4 Simulator</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        ${AppState.timerActive && AppState.currentView === 'quiz' ? `<span class="font-mono text-lg font-bold text-red-600 dark:text-red-400">⏱️ ${AppState.timerDisplay}</span>` : ''}
                        <button onclick="EventHandlers.toggleDarkMode()" class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 transition">
                            ${AppState.darkMode ? '☀️' : '🌙'}
                        </button>
                        <button onclick="EventHandlers.resetAllData()" class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 transition" title="Reset Semua Data">
                            🔄
                        </button>
                    </div>
                </div>
            </header>
        `;
    },
    
    // Home screen
    renderHome: () => {
        const total = Helpers.getTotalQuestions();
        const answered = Helpers.getAnsweredCount();
        const score = Helpers.getScore();
        const percentage = total > 0 ? (score / total) * 100 : 0;
        
        return `
            <div class="container mx-auto px-4 py-8 max-w-7xl">
                <div class="space-y-8 fade-in">
                    <div class="text-center mb-12">
                        <div class="inline-block p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                        </div>
                        <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-4">
                            JLPT N4 Simulator
                        </h1>
                        <p class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                            Persiapan ujian bahasa Jepang level N4 dengan 100 soal berkualitas dan penjelasan super detail
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">📊 Progress Belajar</h3>
                            <div class="mb-4">
                                <div class="flex justify-between text-sm mb-1"><span>Skor Keseluruhan</span><span>${Math.round(percentage)}%</span></div>
                                <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-gradient-to-r from-orange-500 to-red-500 h-2.5 rounded-full transition-all" style="width: ${percentage}%"></div></div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl"><div class="text-2xl font-bold text-blue-600">${answered}</div><div class="text-sm">Soal Terjawab</div></div>
                                <div class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl"><div class="text-2xl font-bold text-green-600">${score}</div><div class="text-sm">Jawaban Benar</div></div>
                            </div>
                        </div>
                        
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                            <h3 class="text-xl font-bold mb-4">⚙️ Pengaturan</h3>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${AppState.filterCategories.map(cat => `
                                    <button onclick="EventHandlers.changeFilter('${cat.value}')" 
                                        class="px-3 py-2 rounded-lg text-sm transition-all ${AppState.filterCategory === cat.value ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}">
                                        ${cat.icon} ${cat.label}
                                    </button>
                                `).join('')}
                            </div>
                            <div class="flex gap-3 mb-4">
                                <button onclick="EventHandlers.toggleShuffle()" class="flex-1 px-3 py-2 rounded-lg text-sm ${AppState.isShuffled ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}">🔀 Acak Soal</button>
                                <button onclick="EventHandlers.toggleTimer()" class="flex-1 px-3 py-2 rounded-lg text-sm ${AppState.timerActive ? 'bg-teal-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}">⏱️ Timer</button>
                            </div>
                            <button onclick="EventHandlers.startQuiz()" class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">🚀 Mulai Ujian</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Quiz screen
    renderQuiz: () => {
        const questions = Helpers.getFilteredQuestions();
        const total = questions.length;
        const currentQ = questions[AppState.currentIndex];
        const answered = AppState.answers[currentQ?.id];
        const isAnswered = !!answered;
        
        if (!currentQ) {
            return `<div class="container mx-auto px-4 py-8 text-center">Loading...</div>`;
        }
        
        const categoryColor = {
            kanji: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30',
            vocabulary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30',
            grammar: 'bg-green-100 text-green-700 dark:bg-green-900/30',
            reading: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30',
            particle: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30',
            verb: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30',
            listening: 'bg-red-100 text-red-700 dark:bg-red-900/30'
        }[currentQ.category] || 'bg-gray-100';
        
        let optionsHtml = '';
        currentQ.options.forEach(opt => {
            let optionClass = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-300';
            const isSelected = isAnswered && answered.selectedValue === opt.value;
            const isCorrectOpt = opt.value === currentQ.answer;
            
            if (isAnswered && isCorrectOpt) optionClass += ' border-green-500 bg-green-50 dark:bg-green-900/20';
            else if (isAnswered && isSelected && !isCorrectOpt) optionClass += ' border-red-500 bg-red-50 dark:bg-red-900/20';
            else if (isSelected) optionClass += ' border-orange-500 bg-orange-50 dark:bg-orange-900/20';
            else optionClass += ' border-gray-200 dark:border-gray-700 hover:border-orange-300 hover:shadow-md';
            
            optionsHtml += `
                <button onclick="EventHandlers.handleAnswer(event, '${currentQ.id}', '${opt.value}', '${opt.label}', ${opt.value === currentQ.answer})" 
                    ${isAnswered ? 'disabled' : ''}
                    class="${optionClass} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}">
                    <div class="flex items-start space-x-3">
                        <span class="font-bold min-w-[30px]">${opt.label}.</span>
                        <span class="flex-1">${opt.text}</span>
                        ${isAnswered && isCorrectOpt ? '<span class="text-green-500 text-xl">✓</span>' : ''}
                        ${isAnswered && isSelected && !isCorrectOpt ? '<span class="text-red-500 text-xl">✗</span>' : ''}
                    </div>
                </button>
            `;
        });
        
        let explanationHtml = '';
        if (isAnswered && currentQ.explanation) {
            const exp = currentQ.explanation;
            const correctOption = currentQ.options.find(opt => opt.value === currentQ.answer);
            explanationHtml = `
                <div class="mt-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500 fade-in">
                    <div class="space-y-3">
                        <div><span class="font-bold text-green-600">✓ Jawaban Benar:</span> ${exp.correctAnswer} (${correctOption?.text})</div>
                        ${exp.reading ? `<div class="bg-white dark:bg-gray-800 p-2 rounded"><span class="font-bold text-purple-600">🔊 Cara Membaca:</span> ${exp.reading.kanji} | ${exp.reading.furigana} | ${exp.reading.romaji}</div>` : ''}
                        <div><span class="font-bold text-blue-600">📖 Arti Kalimat:</span> ${exp.translation}</div>
                        ${exp.perWordMeaning ? `<div><span class="font-bold text-indigo-600">📝 Arti Per Kata:</span><div class="grid grid-cols-2 gap-1 mt-1">${exp.perWordMeaning.map(w => `<div class="bg-gray-100 dark:bg-gray-700 p-1 rounded text-sm">${w.word} (${w.reading}) = ${w.meaning}</div>`).join('')}</div></div>` : ''}
                        ${exp.grammar ? `<div><span class="font-bold text-green-600">📚 Grammar:</span> ${exp.grammar.pattern} - ${exp.grammar.explanation}</div>` : ''}
                        <div><span class="font-bold text-emerald-600">✅ Kenapa Benar:</span> ${exp.whyCorrect}</div>
                        ${exp.whyWrong ? `<div><span class="font-bold text-red-600">❌ Pilihan Lain Salah:</span>${Object.entries(exp.whyWrong).map(([k,v]) => `<div class="ml-4">• ${k}: ${v}</div>`).join('')}</div>` : ''}
                        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded"><span class="font-bold text-yellow-600">💪 Tips:</span> ${exp.tips}</div>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="container mx-auto px-4 py-8 max-w-7xl">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div class="lg:col-span-3">
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden fade-in">
                            <div class="h-2 bg-gray-200"><div class="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all" style="width: ${((AppState.currentIndex + 1) / total) * 100}%"></div></div>
                            <div class="p-6 md:p-8">
                                <div class="flex justify-between items-center mb-6 flex-wrap gap-2">
                                    <div class="flex items-center space-x-3">
                                        <span class="px-3 py-1 rounded-full text-sm font-semibold ${categoryColor}">${currentQ.categoryName || currentQ.category}</span>
                                        <span class="text-gray-500 text-sm">Soal ${AppState.currentIndex + 1} / ${total}</span>
                                    </div>
                                </div>
                                <div class="mb-8">
                                    <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">${currentQ.question}</h3>
                                    ${currentQ.furigana ? `<p class="text-gray-500 text-sm">${currentQ.furigana}</p>` : ''}
                                </div>
                                <div class="space-y-3 mb-6">${optionsHtml}</div>
                                ${explanationHtml}
                                ${isAnswered ? `
                                    <button onclick="EventHandlers.nextQuestion()" 
                                        class="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all">
                                        ${AppState.currentIndex + 1 === total ? '🏆 Selesai Ujian' : '→ Soal Selanjutnya'}
                                    </button>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 h-fit sticky top-20">
                        <h3 class="font-bold text-center mb-4">📋 Daftar Soal</h3>
                        <div class="grid grid-cols-5 gap-2 mb-4">
                            ${questions.map((q, idx) => {
                                const isAnsweredQ = AppState.answers[q.id];
                                let btnClass = 'w-10 h-10 rounded-lg font-semibold transition-all';
                                if (isAnsweredQ) btnClass += isAnsweredQ.isCorrect ? ' bg-green-500 text-white' : ' bg-red-500 text-white';
                                else btnClass += ' bg-gray-200 dark:bg-gray-700 hover:bg-gray-300';
                                if (idx === AppState.currentIndex) btnClass += ' ring-4 ring-orange-300 scale-110';
                                return `<button onclick="EventHandlers.jumpToQuestion(${idx})" class="${btnClass}">${idx + 1}</button>`;
                            }).join('')}
                        </div>
                        <div class="border-t pt-3 text-sm">
                            <div class="flex justify-between"><span>✅ Benar: ${Object.values(AppState.answers).filter(a=>a?.isCorrect).length}</span><span>❌ Salah: ${Object.values(AppState.answers).filter(a=>a && !a.isCorrect).length}</span><span>⬜ Kosong: ${total - Object.keys(AppState.answers).length}</span></div>
                        </div>
                        <button onclick="EventHandlers.restartQuiz()" class="mt-4 w-full bg-gray-500 text-white py-2 rounded-xl">🏠 Keluar</button>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Result screen
    renderResult: () => {
        const total = Helpers.getTotalQuestions();
        const score = Helpers.getScore();
        const percentage = (score / total) * 100;
        const stats = { categoryStats: Helpers.getCategoryStats() };
        
        let message = '', colorClass = '';
        if (percentage >= 80) { message = '🎉 Luar biasa! Anda siap ujian N4!'; colorClass = 'text-green-600'; }
        else if (percentage >= 60) { message = '👍 Bagus! Sedikit lagi tingkatkan latihan.'; colorClass = 'text-blue-600'; }
        else { message = '💪 Terus semangat! Latihan lagi ya.'; colorClass = 'text-orange-600'; }
        
        return `
            <div class="container mx-auto px-4 py-8 max-w-2xl">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center fade-in">
                    <div class="text-6xl mb-4">📊</div>
                    <h2 class="text-3xl font-bold mb-4">Ujian Selesai!</h2>
                    <div class="text-5xl font-bold mb-2">${score} / ${total}</div>
                    <div class="${colorClass} text-xl mb-4">${message}</div>
                    <div class="w-full bg-gray-200 rounded-full h-4 mb-6"><div class="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all" style="width: ${percentage}%"></div></div>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="EventHandlers.showReview()" class="flex-1 bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition">📖 Review Jawaban</button>
                        <button onclick="EventHandlers.restartQuiz()" class="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition">🔄 Latihan Lagi</button>
                    </div>
                </div>
            </div>
        `;
    },
    
    // Review screen
    renderReview: () => {
        const questions = Helpers.getFilteredQuestions();
        const reviewItems = questions.map((q, idx) => {
            const answer = AppState.answers[q.id];
            const isCorrect = answer ? answer.isCorrect : false;
            const correctOption = q.options.find(opt => opt.value === q.answer);
            return {
                index: idx + 1,
                question: q.question,
                category: q.category,
                categoryName: q.categoryName,
                difficulty: q.explanation?.difficulty || 'Menengah',
                userAnswerText: answer ? q.options.find(opt => opt.value === answer.selectedValue)?.text : '-',
                correctAnswerText: correctOption?.text,
                isCorrect: isCorrect,
                explanation: q.explanation
            };
        });
        
        return `
            <div class="container mx-auto px-4 py-8 max-w-3xl">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 fade-in">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-2xl font-bold">📖 Review Jawaban</h2>
                        <button onclick="EventHandlers.backFromReview()" class="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition">← Kembali</button>
                    </div>
                    <div class="max-h-[70vh] overflow-y-auto space-y-3 pr-2">
                        ${reviewItems.map(item => `
                            <div class="border-2 ${item.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20'} rounded-xl p-4">
                                <div class="flex justify-between flex-wrap gap-2">
                                    <div class="flex items-center space-x-2">
                                        <span class="font-bold">${item.index}.</span>
                                        <span class="px-2 py-0.5 rounded-full text-xs bg-gray-200">${item.categoryName}</span>
                                        <span class="px-2 py-0.5 rounded-full text-xs ${item.isCorrect ? 'bg-green-200' : 'bg-red-200'}">${item.isCorrect ? '✓ Benar' : '✗ Salah'}</span>
                                    </div>
                                    <span class="text-xs text-gray-500">⭐ ${item.difficulty}</span>
                                </div>
                                <p class="mt-2 font-medium">${item.question}</p>
                                <div class="mt-2 text-sm">
                                    <p><span class="font-semibold">Jawaban Anda:</span> ${item.userAnswerText}</p>
                                    <p><span class="font-semibold text-green-600">Jawaban Benar:</span> ${item.correctAnswerText}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },
    
    // Go to home
    goHome: () => {
        AppState.currentView = 'home';
        AppRenderer.render();
    }
};

// ==================== APP INITIALIZATION ====================
const AppInitializer = {
    init: () => {
        console.log('🚀 Initializing JLPT N4 Simulator...');
        
        // Load data dari localStorage
        Helpers.loadFromLocalStorage();
        
        // Set dark mode
        if (AppState.darkMode) {
            document.documentElement.classList.add('dark');
        }
        
        // Set root element
        AppState.rootElement = document.getElementById('root');
        
        if (!AppState.rootElement) {
            console.error('Root element not found! Make sure <div id="root"></div> exists in index.html');
            return;
        }
        
        // Verify data exists
        if (!window.questionsAll || window.questionsAll.length === 0) {
            console.warn('⚠️ No questions data found! Make sure questions-part-*.js loaded correctly');
            AppState.rootElement.innerHTML = `
                <div class="min-h-screen flex items-center justify-center p-4">
                    <div class="bg-red-100 dark:bg-red-900/20 border border-red-500 rounded-xl p-8 text-center max-w-md">
                        <div class="text-5xl mb-4">⚠️</div>
                        <h2 class="text-xl font-bold mb-2">Data Soal Tidak Ditemukan</h2>
                        <p class="text-gray-600 dark:text-gray-400 mb-4">Pastikan file questions-part-2.js, questions-part-3.js, questions-part-4.js, questions-part-5.js, questions-part-6.js sudah di-load dengan benar.</p>
                        <button onclick="location.reload()" class="bg-red-500 text-white px-6 py-2 rounded-xl">🔄 Muat Ulang</button>
                    </div>
                </div>
            `;
            return;
        }
        
        console.log(`✅ Data loaded: ${window.questionsAll.length} questions ready`);
        
        // Expose EventHandlers ke window
        window.EventHandlers = EventHandlers;
        window.AppRenderer = AppRenderer;
        
        // Initial render
        AppRenderer.render();
        
        console.log('✅ JLPT N4 Simulator Ready!');
    }
};

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AppInitializer.init());
} else {
    AppInitializer.init();
}