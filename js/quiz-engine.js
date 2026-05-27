// ==================== QUIZ ENGINE LOGIC ====================
// File: js/quiz-engine.js
// Mengelola semua fungsi quiz: randomizer, score, answer checker, progress, timer

// ==================== STATE MANAGEMENT ====================
const QuizState = {
    // State variables
    currentIndex: 0,
    answers: {},
    quizStarted: false,
    quizCompleted: false,
    reviewMode: false,
    filterCategory: 'all',
    isShuffled: false,
    shuffledQuestions: null,
    
    // Timer variables
    timerActive: false,
    timeLeft: 0,
    timerInterval: null,
    
    // Statistics
    startTime: null,
    endTime: null,
    
    // Getter methods
    getFilteredQuestions: () => {
        let qs = window.questionsAll || [];
        if (QuizState.filterCategory !== 'all') {
            qs = qs.filter(q => q.category === QuizState.filterCategory);
        }
        if (QuizState.isShuffled && QuizState.shuffledQuestions) {
            return QuizState.shuffledQuestions;
        }
        return qs;
    },
    
    getCurrentQuestion: () => {
        const filtered = QuizState.getFilteredQuestions();
        return filtered[QuizState.currentIndex];
    },
    
    getTotalQuestions: () => {
        return QuizState.getFilteredQuestions().length;
    },
    
    getAnsweredCount: () => {
        return Object.keys(QuizState.answers).length;
    },
    
    getScore: () => {
        return Object.values(QuizState.answers).filter(a => a.isCorrect).length;
    },
    
    getScorePercentage: () => {
        const total = QuizState.getTotalQuestions();
        return total > 0 ? (QuizState.getScore() / total) * 100 : 0;
    },
    
    getProgressPercentage: () => {
        const total = QuizState.getTotalQuestions();
        return total > 0 ? (QuizState.getAnsweredCount() / total) * 100 : 0;
    },
    
    isQuestionAnswered: (questionId) => {
        return !!QuizState.answers[questionId];
    },
    
    getAnswerForQuestion: (questionId) => {
        return QuizState.answers[questionId] || null;
    }
};

// ==================== RANDOMIZER SYSTEM ====================
const Randomizer = {
    // Shuffle questions array
    shuffleQuestions: (questions) => {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    // Shuffle options within a question
    shuffleOptions: (question) => {
        const shuffledOptions = [...question.options];
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        return { ...question, options: shuffledOptions };
    },
    
    // Apply shuffle to all questions
    applyShuffleToAll: (questions, shouldShuffle) => {
        if (!shouldShuffle) return questions;
        let shuffled = Randomizer.shuffleQuestions(questions);
        shuffled = shuffled.map(q => Randomizer.shuffleOptions(q));
        return shuffled;
    },
    
    // Toggle shuffle mode
    toggleShuffle: (enabled) => {
        QuizState.isShuffled = enabled;
        if (enabled && window.questionsAll) {
            QuizState.shuffledQuestions = Randomizer.applyShuffleToAll(
                QuizState.getFilteredQuestions(), 
                true
            );
        } else {
            QuizState.shuffledQuestions = null;
        }
        // Reset current position when shuffling
        QuizState.currentIndex = 0;
        return QuizState.shuffledQuestions;
    }
};

// ==================== ANSWER CHECKER SYSTEM ====================
const AnswerChecker = {
    // Check if answer is correct
    isAnswerCorrect: (question, selectedValue) => {
        return question.answer === selectedValue;
    },
    
    // Record answer
    recordAnswer: (questionId, selectedValue, selectedLabel, isCorrect, questionObj) => {
        if (QuizState.answers[questionId]) return false;
        
        QuizState.answers[questionId] = {
            selected: selectedLabel,
            selectedValue: selectedValue,
            isCorrect: isCorrect,
            question: questionObj,
            answeredAt: new Date().toISOString()
        };
        
        // Auto-save to localStorage
        AnswerChecker.saveAnswersToLocal();
        
        return true;
    },
    
    // Get explanation for answer
    getExplanation: (question, userAnswer) => {
        const exp = question.explanation;
        if (!exp) return null;
        
        const correctOption = question.options.find(opt => opt.value === question.answer);
        const userSelectedOption = question.options.find(opt => opt.value === userAnswer?.selectedValue);
        
        return {
            isCorrect: userAnswer?.isCorrect || false,
            correctAnswer: exp.correctAnswer,
            correctAnswerText: correctOption?.text || '',
            userAnswerText: userSelectedOption?.text || '',
            reading: exp.reading,
            translation: exp.translation,
            perWordMeaning: exp.perWordMeaning,
            grammar: exp.grammar,
            whyCorrect: exp.whyCorrect,
            whyWrong: exp.whyWrong,
            tips: exp.tips,
            difficulty: exp.difficulty
        };
    },
    
    // Calculate detailed statistics
    getDetailedStats: () => {
        const answers = QuizState.answers;
        const total = QuizState.getTotalQuestions();
        const answered = Object.keys(answers).length;
        const correct = Object.values(answers).filter(a => a.isCorrect).length;
        const incorrect = answered - correct;
        
        // Per category stats
        const categoryStats = {};
        Object.values(answers).forEach(answer => {
            if (answer.question) {
                const cat = answer.question.category;
                if (!categoryStats[cat]) {
                    categoryStats[cat] = { correct: 0, total: 0 };
                }
                categoryStats[cat].total++;
                if (answer.isCorrect) categoryStats[cat].correct++;
            }
        });
        
        // Per difficulty stats
        const difficultyStats = {};
        Object.values(answers).forEach(answer => {
            if (answer.question && answer.question.explanation) {
                const diff = answer.question.explanation.difficulty || 'Menengah';
                if (!difficultyStats[diff]) {
                    difficultyStats[diff] = { correct: 0, total: 0 };
                }
                difficultyStats[diff].total++;
                if (answer.isCorrect) difficultyStats[diff].correct++;
            }
        });
        
        return {
            total,
            answered,
            correct,
            incorrect,
            percentage: total > 0 ? (correct / total) * 100 : 0,
            categoryStats,
            difficultyStats
        };
    },
    
    // Save answers to localStorage
    saveAnswersToLocal: () => {
        try {
            localStorage.setItem('jlpt_answers', JSON.stringify(QuizState.answers));
            localStorage.setItem('jlpt_progress', JSON.stringify({
                currentIndex: QuizState.currentIndex,
                filterCategory: QuizState.filterCategory,
                timestamp: new Date().toISOString()
            }));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    },
    
    // Load answers from localStorage
    loadAnswersFromLocal: () => {
        try {
            const saved = localStorage.getItem('jlpt_answers');
            if (saved) {
                QuizState.answers = JSON.parse(saved);
            }
            const progress = localStorage.getItem('jlpt_progress');
            if (progress) {
                const data = JSON.parse(progress);
                QuizState.currentIndex = data.currentIndex || 0;
                QuizState.filterCategory = data.filterCategory || 'all';
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    },
    
    // Clear all saved data
    clearSavedData: () => {
        localStorage.removeItem('jlpt_answers');
        localStorage.removeItem('jlpt_progress');
        QuizState.answers = {};
        QuizState.currentIndex = 0;
    }
};

// ==================== PROGRESS SYSTEM ====================
const ProgressSystem = {
    // Navigate to next question
    nextQuestion: () => {
        const total = QuizState.getTotalQuestions();
        if (QuizState.currentIndex + 1 < total) {
            QuizState.currentIndex++;
            return true;
        } else {
            QuizState.quizCompleted = true;
            QuizState.endTime = Date.now();
            if (QuizState.timerInterval) {
                clearInterval(QuizState.timerInterval);
                QuizState.timerInterval = null;
            }
            return false;
        }
    },
    
    // Navigate to previous question
    previousQuestion: () => {
        if (QuizState.currentIndex > 0) {
            QuizState.currentIndex--;
            return true;
        }
        return false;
    },
    
    // Jump to specific question
    jumpToQuestion: (index) => {
        const total = QuizState.getTotalQuestions();
        if (index >= 0 && index < total) {
            QuizState.currentIndex = index;
            return true;
        }
        return false;
    },
    
    // Reset quiz
    resetQuiz: (keepSettings = false) => {
        QuizState.answers = {};
        QuizState.currentIndex = 0;
        QuizState.quizCompleted = false;
        QuizState.reviewMode = false;
        QuizState.endTime = null;
        
        if (!keepSettings) {
            QuizState.filterCategory = 'all';
            QuizState.isShuffled = false;
            QuizState.shuffledQuestions = null;
            QuizState.timerActive = false;
            if (QuizState.timerInterval) {
                clearInterval(QuizState.timerInterval);
                QuizState.timerInterval = null;
            }
        }
        
        AnswerChecker.clearSavedData();
    },
    
    // Get progress summary
    getProgressSummary: () => {
        const total = QuizState.getTotalQuestions();
        const answered = QuizState.getAnsweredCount();
        const correct = QuizState.getScore();
        
        return {
            total,
            answered,
            remaining: total - answered,
            correct,
            incorrect: answered - correct,
            percentageComplete: (answered / total) * 100,
            percentageScore: total > 0 ? (correct / total) * 100 : 0
        };
    },
    
    // Get questions by status (answered/unanswered/correct/incorrect)
    getQuestionsByStatus: () => {
        const questions = QuizState.getFilteredQuestions();
        const answered = [];
        const unanswered = [];
        const correct = [];
        const incorrect = [];
        
        questions.forEach((q, idx) => {
            const answer = QuizState.answers[q.id];
            if (answer) {
                answered.push({ ...q, index: idx, userAnswer: answer });
                if (answer.isCorrect) {
                    correct.push({ ...q, index: idx, userAnswer: answer });
                } else {
                    incorrect.push({ ...q, index: idx, userAnswer: answer });
                }
            } else {
                unanswered.push({ ...q, index: idx });
            }
        });
        
        return { answered, unanswered, correct, incorrect };
    }
};

// ==================== TIMER SYSTEM ====================
const TimerSystem = {
    // Timer presets (in seconds)
    presets: {
        noLimit: 0,
        quick: 600,      // 10 minutes
        standard: 1800,  // 30 minutes
        full: 3600       // 60 minutes
    },
    
    // Start timer
    startTimer: (seconds, onTick, onExpire) => {
        if (QuizState.timerInterval) {
            clearInterval(QuizState.timerInterval);
        }
        
        QuizState.timerActive = true;
        QuizState.timeLeft = seconds;
        QuizState.startTime = Date.now();
        
        if (seconds > 0 && onTick) {
            QuizState.timerInterval = setInterval(() => {
                if (QuizState.timeLeft > 0) {
                    QuizState.timeLeft--;
                    onTick(QuizState.timeLeft);
                    
                    // Auto-submit when time runs out
                    if (QuizState.timeLeft === 0 && onExpire) {
                        clearInterval(QuizState.timerInterval);
                        QuizState.timerInterval = null;
                        onExpire();
                    }
                } else {
                    clearInterval(QuizState.timerInterval);
                    QuizState.timerInterval = null;
                }
            }, 1000);
        }
    },
    
    // Stop timer
    stopTimer: () => {
        if (QuizState.timerInterval) {
            clearInterval(QuizState.timerInterval);
            QuizState.timerInterval = null;
        }
        QuizState.timerActive = false;
    },
    
    // Format time display (MM:SS)
    formatTime: (seconds) => {
        if (seconds <= 0) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    // Get remaining time
    getRemainingTime: () => {
        return QuizState.timeLeft;
    },
    
    // Check if timer is active
    isTimerActive: () => {
        return QuizState.timerActive && QuizState.timerInterval !== null;
    },
    
    // Set timer from preset
    setTimerPreset: (preset, onTick, onExpire) => {
        const seconds = TimerSystem.presets[preset] || 0;
        if (seconds > 0) {
            TimerSystem.startTimer(seconds, onTick, onExpire);
        }
        return seconds;
    }
};

// ==================== FILTER SYSTEM ====================
const FilterSystem = {
    // Available categories
    categories: [
        { value: 'all', label: 'Semua', icon: '📚' },
        { value: 'kanji', label: 'Kanji', icon: '📖' },
        { value: 'vocabulary', label: 'Kosakata', icon: '📚' },
        { value: 'grammar', label: 'Grammar', icon: '✍️' },
        { value: 'particle', label: 'Partikel', icon: '🔤' },
        { value: 'verb', label: 'Verb', icon: '⚡' },
        { value: 'reading', label: 'Membaca', icon: '📄' },
        { value: 'listening', label: 'Listening', icon: '🎧' }
    ],
    
    // Set category filter
    setFilter: (category) => {
        QuizState.filterCategory = category;
        // Reset shuffle when filter changes
        if (QuizState.isShuffled) {
            QuizState.shuffledQuestions = null;
            QuizState.isShuffled = false;
        }
        QuizState.currentIndex = 0;
        return QuizState.getFilteredQuestions();
    },
    
    // Get current filter
    getCurrentFilter: () => {
        return QuizState.filterCategory;
    },
    
    // Get filtered stats
    getFilteredStats: () => {
        const filtered = QuizState.getFilteredQuestions();
        const answered = filtered.filter(q => QuizState.answers[q.id]).length;
        const correct = filtered.filter(q => {
            const ans = QuizState.answers[q.id];
            return ans && ans.isCorrect;
        }).length;
        
        return {
            total: filtered.length,
            answered,
            correct,
            percentage: filtered.length > 0 ? (correct / filtered.length) * 100 : 0
        };
    }
};

// ==================== REVIEW SYSTEM ====================
const ReviewSystem = {
    // Enter review mode
    enterReviewMode: () => {
        QuizState.reviewMode = true;
    },
    
    // Exit review mode
    exitReviewMode: () => {
        QuizState.reviewMode = false;
    },
    
    // Get all answers for review
    getAllAnswersForReview: () => {
        const questions = QuizState.getFilteredQuestions();
        return questions.map((q, idx) => {
            const answer = QuizState.answers[q.id];
            const isCorrect = answer ? answer.isCorrect : false;
            const userAnswer = answer ? answer.selected : null;
            const correctOption = q.options.find(opt => opt.value === q.answer);
            
            return {
                id: q.id,
                index: idx + 1,
                question: q.question,
                category: q.category,
                categoryName: q.categoryName,
                difficulty: q.explanation?.difficulty || 'Menengah',
                userAnswer: userAnswer,
                userAnswerText: answer ? q.options.find(opt => opt.value === answer.selectedValue)?.text : null,
                correctAnswer: q.answer,
                correctAnswerText: correctOption?.text,
                isCorrect: isCorrect,
                explanation: q.explanation
            };
        });
    },
    
    // Get weak areas (categories with low scores)
    getWeakAreas: () => {
        const stats = AnswerChecker.getDetailedStats();
        const weakAreas = [];
        
        Object.entries(stats.categoryStats).forEach(([cat, data]) => {
            const percentage = (data.correct / data.total) * 100;
            if (percentage < 60 && data.total >= 2) {
                weakAreas.push({
                    category: cat,
                    percentage: percentage,
                    correct: data.correct,
                    total: data.total
                });
            }
        });
        
        return weakAreas.sort((a, b) => a.percentage - b.percentage);
    },
    
    // Get recommendations based on performance
    getRecommendations: () => {
        const weakAreas = ReviewSystem.getWeakAreas();
        const scorePercentage = QuizState.getScorePercentage();
        const recommendations = [];
        
        if (scorePercentage >= 80) {
            recommendations.push('🎉 Bagus sekali! Anda siap untuk ujian N4 sebenarnya!');
            recommendations.push('💪 Coba tantang diri dengan soal N3 untuk peningkatan lebih lanjut');
        } else if (scorePercentage >= 60) {
            recommendations.push('👍 Cukup baik! Fokus pada area yang masih lemah');
            recommendations.push('📖 Perbanyak latihan grammar dan kosakata baru');
        } else {
            recommendations.push('💪 Terus semangat! Belajar dari kesalahan adalah proses normal');
            recommendations.push('📚 Mulai dengan mempelajari ulang grammar dasar N5 dan N4');
        }
        
        weakAreas.forEach(area => {
            const categoryNames = {
                kanji: 'Kanji', vocabulary: 'Kosakata', grammar: 'Grammar',
                particle: 'Partikel', verb: 'Verb', reading: 'Membaca', listening: 'Listening'
            };
            recommendations.push(`📌 Perbanyak latihan untuk kategori ${categoryNames[area.category] || area.category} (${Math.round(area.percentage)}% benar)`);
        });
        
        return recommendations;
    }
};

// ==================== EXPORT/INITIALIZATION ====================
const QuizEngine = {
    // Initialize the engine
    init: (questions) => {
        window.questionsAll = questions;
        AnswerChecker.loadAnswersFromLocal();
        console.log('✅ Quiz Engine initialized with', questions?.length || 0, 'questions');
        return QuizState;
    },
    
    // Get all modules
    state: QuizState,
    randomizer: Randomizer,
    answerChecker: AnswerChecker,
    progress: ProgressSystem,
    timer: TimerSystem,
    filter: FilterSystem,
    review: ReviewSystem,
    
    // Quick methods
    getCurrentQuestion: () => QuizState.getCurrentQuestion(),
    getTotalQuestions: () => QuizState.getTotalQuestions(),
    getScore: () => QuizState.getScore(),
    getProgress: () => QuizState.getProgressPercentage(),
    isQuizCompleted: () => QuizState.quizCompleted
};

// Export to window for global access
window.QuizEngine = QuizEngine;
window.QuizState = QuizState;

console.log('✅ PART 7 loaded - Quiz Engine Logic siap digunakan');