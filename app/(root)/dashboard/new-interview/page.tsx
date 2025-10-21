"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const NewInterviewPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    role: '',
    level: 'Junior',
    techStack: [],
    duration: '30'
  })

  const handleTechStackChange = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech) 
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.role.trim()) {
      toast.error('Please enter a job role')
      return
    }
    if (formData.techStack.length === 0) {
      toast.error('Please select at least one technology')
      return
    }
    
    toast.success('Interview session created! Starting...')
    // Simulate API call delay
    setTimeout(() => {
      router.push('/dashboard/interview-session')
    }, 1000)
  }

  const techOptions = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-100 to-dark-300">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center gap-2">
            <img src="/logo.svg" alt="PrepWise" className="h-8 w-8" />
            <h1 className="text-2xl font-bold text-primary-200">PrepWise</h1>
          </Link>
        </div>
        <Link href="/dashboard">
          <Button className="btn-secondary">Back to Dashboard</Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Setup New Interview</h1>
          <p className="text-light-100">Configure your mock interview session</p>
        </div>

        <div className="card-border">
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Role */}
              <div>
                <label className="block text-white font-medium mb-2">Job Role *</label>
                <Input
                  type="text"
                  placeholder="e.g., Frontend Developer, Backend Engineer, Full Stack Developer"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="input"
                />
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-white font-medium mb-2">Experience Level</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
                  className="w-full bg-dark-200 rounded-full min-h-12 px-5 text-white border border-input"
                >
                  <option value="Junior">Junior (0-2 years)</option>
                  <option value="Mid">Mid-level (2-5 years)</option>
                  <option value="Senior">Senior (5+ years)</option>
                </select>
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-white font-medium mb-2">Technology Stack *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {techOptions.map((tech) => (
                    <label key={tech} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.techStack.includes(tech)}
                        onChange={() => handleTechStackChange(tech)}
                        className="w-4 h-4 accent-primary-200"
                      />
                      <span className="text-light-100">{tech}</span>
                    </label>
                  ))}
                </div>
                {formData.techStack.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-light-100">Selected: {formData.techStack.join(', ')}</p>
                  </div>
                )}
              </div>

              {/* Interview Duration */}
              <div>
                <label className="block text-white font-medium mb-2">Interview Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full bg-dark-200 rounded-full min-h-12 px-5 text-white border border-input"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="btn-primary w-full text-lg py-3">
                  Start Interview Session
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewInterviewPage