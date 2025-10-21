# PrepWise 🎯

**AI-Powered Mock Interview Platform**

PrepWise is a cutting-edge mock interview platform that leverages artificial intelligence to help job seekers prepare for technical interviews. Practice with AI-generated questions, receive detailed feedback, and improve your interview skills in a realistic environment.

## ✨ Features

- 🤖 **AI-Powered Interviews**: Conduct mock interviews with intelligent AI agents
- 📊 **Detailed Feedback**: Get comprehensive analysis of your performance
- 💼 **Role-Specific Questions**: Tailored questions based on job roles and experience levels
- 🛠️ **Tech Stack Support**: Questions customized for specific technologies
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI/UX**: Clean, professional interface with dark theme support
- 🔒 **Secure Authentication**: User authentication and session management

## 🚀 Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons

### Forms & Validation
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### UI Components
- **Class Variance Authority** - Component variants
- **Tailwind Merge** - Tailwind class merging
- **Sonner** - Toast notifications
- **Next Themes** - Theme management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (Next.js)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Prep_Wise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
Prep_Wise/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   └── layout.tsx
│   ├── (root)/                   # Main application routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── ui/                      # UI components
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── sonner.tsx
│   ├── FormField.tsx            # Form field component
│   └── authForm.tsx             # Authentication form
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   ├── constants/
│   │   └── index.ts
│   ├── types/
│   │   ├── index.d.ts           # Type definitions
│   │   └── vapi.d.ts
│   ├── pattern.png              # Background pattern
│   └── utils.ts
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Styling

The project uses a custom design system with:

- **Dark Theme**: Primary theme with professional appearance
- **Custom Color Palette**: Branded colors for primary, secondary, and accent
- **Component Classes**: Reusable component styles
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and micro-interactions

### Key Design Elements
- Gradient backgrounds (`dark-gradient`, `blue-gradient`)
- Custom button variants (`btn-primary`, `btn-secondary`)
- Card layouts with borders (`card-border`)
- Form styling (`form` class)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with the following variables:
```env
# Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with custom utilities and components defined in `globals.css`.

## 🚦 Getting Started - Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Make your changes**
   - Edit pages in `app/` directory
   - Add components in `components/` directory
   - Update styles in `globals.css`

3. **Test your changes**
   - The app will hot-reload automatically
   - Check the browser console for any errors

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📱 Features in Detail

### Authentication System
- User registration and login
- Form validation with Zod
- Toast notifications for user feedback
- Responsive authentication forms

### Interview Management
- Role-based interview creation
- Technology stack selection
- Question generation and management
- Interview session tracking

### Feedback System
- Comprehensive performance analysis
- Category-based scoring
- Strengths and improvement areas
- Detailed assessment reports

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Issues & Support

If you encounter any issues or need support:

1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem
4. Add relevant screenshots or error messages

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Follow their Next.js deployment guide
- **Railway**: Use their Next.js template
- **Docker**: Create a Dockerfile for containerization

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)

---

**Built with ❤️ by the PrepWise Team**

For more information, visit our [website](http://localhost:3000) or contact us at support@prepwise.com