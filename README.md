Overwhelm is a productivity focused web application that helps users turn mental overload into clear, actionable steps. Instead of trying to “do everything,” users describe what feels overwhelming and the web application breaks it down into small, manageable tasks paired with a 25 minute focus timer.
The goal is to reduce anxiety, increase clarity, and help users take the first small step.

Features
📝 Describe what feels overwhelming in plain text
🧩 Break problems into actionable steps
⏱️ Built-in 25-minute focus timer (Pomodoro-style)
🌗 Light / Dark mode toggle
✅ Step completion tracking
🎯 Minimal, calming UI for focus

Tech Stack
Frontend: React, Vite, JavaScript, CSS
Backend: Node.js, Express (architecture)
AI: Tambo AI (integration architecture)
Deployment: Vercel (frontend)

This project is architected to integrate Tambo AI through a secure backend.
Planned flow:
User input is sent from the React frontend to the backend.
The backend communicates with the Tambo API using environment variables.
Tambo processes the input and returns structured, actionable steps.
The frontend displays these steps to the user.
For demo stability during the hackathon, the AI response is currently mocked while preserving the complete backend integration architecture. This ensures a smooth user experience without compromising the intended design.
Environment variables are required for backend AI integration and are not committed to the repository for security reasons.
