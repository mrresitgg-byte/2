import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { quizzes } from "@/data/quizzes";
import { QuizIntro } from "@/components/quiz/QuizIntro";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type QuizState = "intro" | "questions" | "result";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const quiz = quizzes.find((q) => q.id === id);

  useEffect(() => {
    if (!quiz) {
      navigate("/");
    }
  }, [quiz, navigate]);

  if (!quiz) return null;

  const pageTitle = `${quiz.title} - Dizi Ruhun`;
  const pageDescription = `${quiz.description} ${quiz.questions.length} soruluk bu eğlenceli dizi testi ile kendini keşfet!`;
  const pageUrl = `https://diziruhun.com/quiz/${quiz.id}`;
  const pageImage = `/dizi-ruhun.png`;

  const handleStart = () => {
    setQuizState("questions");
  };

  const handleAnswer = (resultId: string) => {
    const newAnswers = [...answers, resultId];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState("result");
    }
  };

  const handleRetake = () => {
    setQuizState("intro");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getResult = () => {
    const resultCounts: { [key: string]: number } = {};
    answers.forEach((answer) => {
      resultCounts[answer] = (resultCounts[answer] || 0) + 1;
    });

    const mostCommonResultId = Object.keys(resultCounts).reduce((a, b) =>
      resultCounts[a] > resultCounts[b] ? a : b
    );

    return quiz.results.find((r) => r.id === mostCommonResultId) || quiz.results[0];
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>
      <div className="min-h-screen bg-background">
      <header className="border-b border-white/10 sticky top-0 bg-white/10 backdrop-blur-lg z-10 shadow-lg">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="hover:bg-white/10 text-white shrink-0 px-2 sm:px-4"
            >
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Ana Sayfa</span>
            </Button>
            <h1 className="text-sm sm:text-lg md:text-xl font-semibold text-white truncate">{quiz.title}</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-4 sm:py-8 px-2 sm:px-4">
        {quizState === "intro" && (
          <QuizIntro
            title={quiz.title}
            description={quiz.description}
            icon={quiz.icon}
            emoji={quiz.emoji}
            onStart={handleStart}
          />
        )}

        {quizState === "questions" && (
          <QuizQuestion
            question={quiz.questions[currentQuestionIndex].text}
            options={quiz.questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quiz.questions.length}
          />
        )}

        {quizState === "result" && (
          <QuizResult
            character={getResult().character}
            description={getResult().description}
            quizTitle={quiz.title}
            onRetake={handleRetake}
          />
        )}
      </main>
    </div>
    </>
  );
};

export default QuizPage;
