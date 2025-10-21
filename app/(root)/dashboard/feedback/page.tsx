import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const FeedbackPage = () => {
  const mockFeedback = {
    totalScore: 85,
    categoryScores: [
      { name: 'Technical Knowledge', score: 88, comment: 'Strong understanding of React concepts and JavaScript fundamentals.' },
      { name: 'Problem Solving', score: 82, comment: 'Good approach to breaking down complex problems.' },
      { name: 'Communication', score: 90, comment: 'Clear and articulate explanations of technical concepts.' },
      { name: 'Code Quality', score: 80, comment: 'Well-structured code with good naming conventions.' }
    ],
    strengths: [
      'Excellent knowledge of React Hooks and state management',
      'Clear communication and explanation of concepts',
      'Good understanding of JavaScript ES6+ features',
      'Effective problem-solving approach'
    ],
    improvements: [
      'Practice more complex algorithmic problems',
      'Deepen knowledge of performance optimization techniques',
      'Learn more about testing strategies and frameworks',
      'Explore advanced TypeScript features'
    ],
    finalAssessment: 'Overall excellent performance! You demonstrated strong technical knowledge and communication skills. Focus on the improvement areas mentioned to further enhance your interview performance.'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="PrepWise" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-primary-200">Interview Feedback</h1>
        </div>
        <Link href="/dashboard">
          <Button className="btn-secondary">Back to Dashboard</Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-6xl mx-auto">
        <div className="section-feedback">
          {/* Overall Score */}
          <div className="card-border">
            <div className="card p-8 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Interview Complete!</h2>
              <div className="text-6xl font-bold text-primary-200 mb-4">
                {mockFeedback.totalScore}/100
              </div>
              <p className="text-xl text-light-100">Overall Performance Score</p>
            </div>
          </div>

          {/* Category Scores */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Detailed Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mockFeedback.categoryScores.map((category, index) => (
                <div key={index} className="card-border">
                  <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <span className="text-2xl font-bold text-primary-200">{category.score}/100</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-3 mb-4">
                      <div 
                        className="progress h-3 rounded-full" 
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                    <p className="text-light-100">{category.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths and Improvements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="card-border">
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Strengths
                </h2>
                <ul className="space-y-3">
                  {mockFeedback.strengths.map((strength, index) => (
                    <li key={index} className="text-light-100 flex items-start gap-2">
                      <span className="text-success-100 mt-1">•</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Areas for Improvement */}
            <div className="card-border">
              <div className="card p-6">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  Areas for Improvement
                </h2>
                <ul className="space-y-3">
                  {mockFeedback.improvements.map((improvement, index) => (
                    <li key={index} className="text-light-100 flex items-start gap-2">
                      <span className="text-primary-200 mt-1">•</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="card-border">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Final Assessment</h2>
              <p className="text-lg text-light-100 leading-relaxed">
                {mockFeedback.finalAssessment}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="buttons">
            <Link href="/dashboard/new-interview">
              <Button className="btn-primary text-lg px-8 py-4">
                Start Another Interview
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="btn-secondary text-lg px-8 py-4">
                Back to Dashboard
              </Button>
            </Link>
            <Button className="btn-secondary text-lg px-8 py-4">
              Download Report
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FeedbackPage