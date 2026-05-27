// ==================== UI COMPONENTS ====================
// File: js/ui-components.js
// Membangun semua komponen UI untuk aplikasi JLPT N4 Simulator

// ==================== HELPER FUNCTIONS ====================
const UIConfig = {
    categoryColors: {
        kanji: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        vocabulary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        grammar: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        reading: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        particle: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
        verb: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        listening: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    },
    
    difficultyColors: {
        'Mudah': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        'Menengah': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
        'Agak Sulit': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        'Sulit': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    },
    
    categoryNames: {
        kanji: '📖 Kanji', vocabulary: '📚 Kosakata', grammar: '✍️ Grammar',
        reading: '📄 Membaca', particle: '🔤 Partikel', verb: '⚡ Bentuk Kata Kerja',
        listening: '🎧 Listening'
    }
};

// ==================== QUESTION CARD COMPONENT ====================
const QuestionCard = {
    render: (question, currentIndex, totalQuestions, isAnswered, userAnswer, onAnswer, onNext) => {
        if (!question) return '<div class="text-center p-8">Loading...</div>';
        
        const categoryColor = UIConfig.categoryColors[question.category] || 'bg-gray-100';
        const categoryName = UIConfig.categoryNames[question.category] || question.category;
        const difficultyColor = UIConfig.difficultyColors[question.explanation?.difficulty] || 'bg-gray-100';
        
        let optionsHtml = '';
        question.options.forEach(opt => {
            let optionClass = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md hover:scale-[1.01]';
            const isSelected = isAnswered && userAnswer?.selectedValue === opt.value;
            const isCorrectOpt = opt.value === question.answer;
            
            if (isAnswered && isCorrectOpt) {
                optionClass += ' border-green-500 bg-green-50 dark:bg-green-900/20';
            } else if (isAnswered && isSelected && !isCorrectOpt) {
                optionClass += ' border-red-500 bg-red-50 dark:bg-red-900/20';
            } else if (isSelected) {
                optionClass += ' border-orange-500 bg-orange-50 dark:bg-orange-900/20';
            } else {
                optionClass += ' border-gray-200 dark:border-gray-700 hover:border-orange-300';
            }
            
            optionsHtml += `
                <button onclick="(${onAnswer})(this, '${question.id}', '${opt.value}', '${opt.label}', ${opt.value === question.answer})" 
                    ${isAnswered ? 'disabled' : ''}
                    class="${optionClass} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}">
                    <div class="flex items-start space-x-3">
                        <span class="font-bold text-gray-600 dark:text-gray-400 min-w-[30px]">${opt.label}.</span>
                        <span class="text-gray-700 dark:text-gray-200 flex-1">${opt.text}</span>
                        ${isAnswered && isCorrectOpt ? '<span class="text-green-500 text-xl">✓</span>' : ''}
                        ${isAnswered && isSelected && !isCorrectOpt ? '<span class="text-red-500 text-xl">✗</span>' : ''}
                    </div>
                </button>
            `;
        });
        
        let explanationHtml = '';
        if (isAnswered && question.explanation) {
            const exp = question.explanation;
            const correctOption = question.options.find(opt => opt.value === question.answer);
            
            explanationHtml = `
                <div class="mt-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500 fade-in">
                    <div class="flex items-start space-x-3">
                        <span class="text-2xl">💡</span>
                        <div class="flex-1 space-y-3">
                            <div><span class="font-bold text-green-600">✓ Jawaban Benar:</span> ${exp.correctAnswer} (${correctOption?.text || ''})</div>
                            ${exp.reading ? `<div class="bg-white dark:bg-gray-800 p-2 rounded"><span class="font-bold text-purple-600">🔊 Cara Membaca:</span> ${exp.reading.kanji} | ${exp.reading.furigana} | ${exp.reading.romaji}</div>` : ''}
                            <div><span class="font-bold text-blue-600">📖 Arti Kalimat:</span> ${exp.translation}</div>
                            ${exp.perWordMeaning ? `<div><span class="font-bold text-indigo-600">📝 Arti Per Kata:</span><div class="grid grid-cols-2 gap-1 mt-1">${exp.perWordMeaning.map(w => `<div class="bg-gray-100 dark:bg-gray-700 p-1 rounded text-sm">${w.word} (${w.reading}) = ${w.meaning}</div>`).join('')}</div></div>` : ''}
                            ${exp.grammar ? `<div><span class="font-bold text-green-600">📚 Grammar:</span> ${exp.grammar.pattern} - ${exp.grammar.explanation}</div>` : ''}
                            <div><span class="font-bold text-emerald-600">✅ Kenapa Benar:</span> ${exp.whyCorrect}</div>
                            ${exp.whyWrong ? `<div><span class="font-bold text-red-600">❌ Pilihan Lain Salah:</span>${Object.entries(exp.whyWrong).map(([k,v]) => `<div class="ml-4">• ${k}: ${v}</div>`).join('')}</div>` : ''}
                            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded"><span class="font-bold text-yellow-600">💪 Tips:</span> ${exp.tips}</div>
                            <div class="flex justify-between"><span class="px-2 py-1 rounded-full text-xs ${difficultyColor}">⭐ ${exp.difficulty || 'Menengah'}</span><span>🏷️ ${categoryName}</span></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden fade-in">
                <div class="h-2 bg-gray-200 dark:bg-gray-700">
                    <div class="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500" style="width: ${((currentIndex + 1) / totalQuestions) * 100}%"></div>
                </div>
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-center mb-6 flex-wrap gap-2">
                        <div class="flex items-center space-x-3">
                            <span class="px-3 py-1 rounded-full text-sm font-semibold ${categoryColor}">${categoryName}</span>
                            <span class="text-gray-500 dark:text-gray-400 text-sm">Soal ${currentIndex + 1} / ${totalQuestions}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            ${[1,2,3].map(i => `<div class="w-2 h-2 rounded-full ${i <= (question.explanation?.difficulty === 'Mudah' ? 1 : question.explanation?.difficulty === 'Menengah' ? 2 : question.explanation?.difficulty === 'Agak Sulit' ? 2 : 3) ? 'bg-orange-500' : 'bg-gray-300'}'></div>`).join('')}
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">${question.question}</h3>
                        ${question.furigana ? `<p class="text-gray-500 dark:text-gray-400 text-sm">${question.furigana}</p>` : ''}
                    </div>
                    
                    <div class="space-y-3 mb-6">${optionsHtml}</div>
                    
                    ${explanationHtml}
                    
                    ${isAnswered ? `
                        <button onclick="(${onNext})()" 
                            class="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            ${currentIndex + 1 === totalQuestions ? '🏆 Selesai Ujian' : '→ Soal Selanjutnya'}
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }
};

// ==================== PROGRESS BAR COMPONENT ====================
const ProgressBar = {
    render: (percentage, label = 'Progress', color = 'from-blue-500 to-green-500') => {
        return `
            <div class="w-full">
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>${label}</span>
                    <span>${Math.round(percentage)}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div class="bg-gradient-to-r ${color} h-2.5 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }
};

// ==================== RESULT SCREEN COMPONENT ====================
const ResultScreen = {
    render: (score, total, percentage, message, stats, onRestart, onReview) => {
        let messageHtml = '';
        let colorClass = '';
        
        if (percentage >= 80) {
            messageHtml = '🎉 Luar biasa! Anda siap ujian N4!';
            colorClass = 'text-green-600';
        } else if (percentage >= 60) {
            messageHtml = '👍 Bagus! Sedikit lagi tingkatkan latihan.';
            colorClass = 'text-blue-600';
        } else {
            messageHtml = '💪 Terus semangat! Latihan lagi ya.';
            colorClass = 'text-orange-600';
        }
        
        // Category stats
        let categoryStatsHtml = '';
        if (stats.categoryStats && Object.keys(stats.categoryStats).length > 0) {
            categoryStatsHtml = `
                <div class="mt-6 text-left">
                    <h4 class="font-semibold mb-2">📊 Statistik per Kategori:</h4>
                    <div class="space-y-2">
                        ${Object.entries(stats.categoryStats).map(([cat, data]) => `
                            <div>
                                <div class="flex justify-between text-sm">
                                    <span>${UIConfig.categoryNames[cat] || cat}</span>
                                    <span>${data.correct}/${data.total} (${Math.round((data.correct/data.total)*100)}%)</span>
                                </div>
                                <div class="w-full bg-gray-200 rounded-full h-1.5">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: ${(data.correct/data.total)*100}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center fade-in max-w-2xl mx-auto">
                <div class="text-6xl mb-4">📊</div>
                <h2 class="text-3xl font-bold mb-4">Ujian Selesai!</h2>
                <div class="text-5xl font-bold mb-2">${score} / ${total}</div>
                <div class="${colorClass} text-xl mb-4">${messageHtml}</div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-6">
                    <div class="bg-gradient-to-r from-green-500 to-blue-500 h-4 rounded-full transition-all duration-1000" style="width: ${percentage}%"></div>
                </div>
                
                ${categoryStatsHtml}
                
                <div class="flex flex-col sm:flex-row gap-3 mt-6">
                    <button onclick="(${onReview})()" class="flex-1 bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition">
                        📖 Review Jawaban
                    </button>
                    <button onclick="(${onRestart})()" class="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition">
                        🔄 Latihan Lagi
                    </button>
                </div>
            </div>
        `;
    }
};

// ==================== REVIEW PANEL COMPONENT ====================
const ReviewPanel = {
    render: (answersList, onBack) => {
        if (!answersList || answersList.length === 0) {
            return `
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
                    <p class="text-gray-500">Belum ada jawaban untuk direview</p>
                    <button onclick="(${onBack})()" class="mt-4 bg-gray-500 text-white px-6 py-2 rounded-xl">Kembali</button>
                </div>
            `;
        }
        
        let itemsHtml = '';
        answersList.forEach(item => {
            const statusClass = item.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-red-500 bg-red-50 dark:bg-red-900/20';
            const statusIcon = item.isCorrect ? '✓' : '✗';
            const statusText = item.isCorrect ? 'Benar' : 'Salah';
            
            itemsHtml += `
                <div class="border-2 ${statusClass} rounded-xl p-4 mb-3">
                    <div class="flex justify-between items-start flex-wrap gap-2">
                        <div class="flex items-center space-x-2">
                            <span class="font-bold text-lg">${item.index}.</span>
                            <span class="px-2 py-0.5 rounded-full text-xs ${UIConfig.categoryColors[item.category] || 'bg-gray-200'}">${item.categoryName}</span>
                            <span class="px-2 py-0.5 rounded-full text-xs ${item.isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}">${statusIcon} ${statusText}</span>
                        </div>
                        <span class="text-xs text-gray-500">⭐ ${item.difficulty}</span>
                    </div>
                    <p class="mt-2 font-medium">${item.question}</p>
                    <div class="mt-2 text-sm">
                        <p><span class="font-semibold">Jawaban Anda:</span> ${item.userAnswerText || item.userAnswer || '-'}</p>
                        <p><span class="font-semibold text-green-600">Jawaban Benar:</span> ${item.correctAnswerText}</p>
                        ${item.explanation?.whyCorrect ? `<p class="text-gray-600 text-xs mt-1">💡 ${item.explanation.whyCorrect.substring(0, 100)}${item.explanation.whyCorrect.length > 100 ? '...' : ''}</p>` : ''}
                    </div>
                </div>
            `;
        });
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 fade-in">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold">📖 Review Jawaban</h2>
                    <button onclick="(${onBack})()" class="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition">← Kembali</button>
                </div>
                <div class="max-h-[70vh] overflow-y-auto space-y-3 pr-2">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }
};

// ==================== SIDEBAR COMPONENT ====================
const Sidebar = {
    render: (questions, answers, currentIndex, onJumpTo) => {
        let buttonsHtml = '';
        questions.forEach((q, idx) => {
            const isAnswered = answers[q.id];
            let btnClass = 'w-10 h-10 rounded-lg font-semibold transition-all duration-200';
            
            if (isAnswered) {
                btnClass += isAnswered.isCorrect ? ' bg-green-500 text-white' : ' bg-red-500 text-white';
            } else {
                btnClass += ' bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300';
            }
            
            if (idx === currentIndex) {
                btnClass += ' ring-4 ring-orange-300 scale-110';
            }
            
            buttonsHtml += `<button onclick="(${onJumpTo})(${idx})" class="${btnClass}">${idx + 1}</button>`;
        });
        
        const answeredCount = Object.keys(answers).length;
        const correctCount = Object.values(answers).filter(a => a.isCorrect).length;
        
        return `
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 h-fit sticky top-20">
                <h3 class="font-bold text-center text-gray-800 dark:text-white mb-4">📋 Daftar Soal</h3>
                <div class="grid grid-cols-5 gap-2 mb-4">
                    ${buttonsHtml}
                </div>
                <div class="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                    <div class="flex justify-between text-sm">
                        <div class="flex items-center space-x-2"><div class="w-4 h-4 bg-green-500 rounded"></div><span>Benar</span></div>
                        <div class="flex items-center space-x-2"><div class="w-4 h-4 bg-red-500 rounded"></div><span>Salah</span></div>
                        <div class="flex items-center space-x-2"><div class="w-4 h-4 bg-gray-300 rounded"></div><span>Kosong</span></div>
                    </div>
                    <div class="text-center text-sm pt-2 border-t">
                        <p>Terjawab: ${answeredCount}/${questions.length}</p>
                        <p class="font-bold text-orange-600">Skor: ${Math.round((correctCount/questions.length)*100)}%</p>
                    </div>
                </div>
            </div>
        `;
    }
};

// ==================== CATEGORY FILTER COMPONENT ====================
const CategoryFilter = {
    render: (categories, currentFilter, onFilterChange) => {
        let buttonsHtml = '';
        categories.forEach(cat => {
            const isActive = currentFilter === cat.value;
            const activeClass = isActive 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300';
            
            buttonsHtml += `
                <button onclick="(${onFilterChange})('${cat.value}')" 
                    class="px-3 py-2 rounded-lg text-sm transition-all ${activeClass}">
                    ${cat.icon} ${cat.label}
                </button>
            `;
        });
        
        return `
            <div class="flex flex-wrap gap-2 mb-4">
                ${buttonsHtml}
            </div>
        `;
    }
};

// ==================== HOME SCREEN COMPONENT ====================
const HomeScreen = {
    render: (totalQuestions, answeredCount, score, filterCategories, currentFilter, onFilterChange, onStart, onToggleShuffle, isShuffled, onToggleTimer, timerActive, onReset) => {
        const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
        
        return `
            <div class="space-y-8 fade-in">
                <!-- Hero Section -->
                <div class="text-center mb-12">
                    <div class="inline-block p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                    <!-- Stats Card -->
                    <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">📊 Progress Belajar</h3>
                        ${ProgressBar.render(percentage, 'Skor Keseluruhan', 'from-orange-500 to-red-500')}
                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <div class="text-2xl font-bold text-blue-600">${answeredCount}</div>
                                <div class="text-sm text-gray-600">Soal Terjawab</div>
                            </div>
                            <div class="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <div class="text-2xl font-bold text-green-600">${score}</div>
                                <div class="text-sm text-gray-600">Jawaban Benar</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Settings Card -->
                    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                        <h3 class="text-xl font-bold mb-4">⚙️ Pengaturan</h3>
                        ${CategoryFilter.render(filterCategories, currentFilter, onFilterChange)}
                        <div class="flex gap-3 mb-4">
                            <button onclick="(${onToggleShuffle})()" class="flex-1 px-3 py-2 rounded-lg text-sm ${isShuffled ? 'bg-purple-500 text-white' : 'bg-gray-200'}">
                                🔀 Acak Soal
                            </button>
                            <button onclick="(${onToggleTimer})()" class="flex-1 px-3 py-2 rounded-lg text-sm ${timerActive ? 'bg-teal-500 text-white' : 'bg-gray-200'}">
                                ⏱️ Timer
                            </button>
                            <button onclick="(${onReset})()" class="px-3 py-2 rounded-lg text-sm bg-red-500 text-white">
                                🔄 Reset
                            </button>
                        </div>
                        <button onclick="(${onStart})()" class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-2">
                            🚀 Mulai Ujian
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};

// ==================== EXPORT ====================
window.UIComponents = {
    QuestionCard,
    ProgressBar,
    ResultScreen,
    ReviewPanel,
    Sidebar,
    CategoryFilter,
    HomeScreen,
    UIConfig
};

console.log('✅ PART 8 loaded - UI Components siap digunakan');