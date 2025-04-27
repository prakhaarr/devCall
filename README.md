# devCall - Real-time Interview Platform with Video & Code Collaboration

devCall is a modern interview platform that combines video conferencing with real-time code collaboration, designed specifically for technical interviews and pair programming sessions. Built with developer experience in mind, it offers seamless integration of video calls, shared code editing, and interview management features.

## Key Features 🚀

🎥 **High-quality Video Calls**  
- Powered by Stream.io's reliable video infrastructure
- Screen sharing capabilities
- Recording functionality for later review

💻 **Real-time Code Collaboration**  
- Shared code editor with syntax highlighting
- Support for multiple programming languages
- Live code execution (optional integration)

📅 **Interview Management**  
- Schedule interviews with calendar integration
- Role-based access (Interviewer/Candidate)
- Upcoming interviews dashboard
- Interview recording storage

🔒 **Secure Authentication**  
- Clerk-powered user authentication
- Role-based access control
- Session management

📊 **Candidate Evaluation**  
- Interview feedback system
- Rating and comments functionality
- Recording playback with timestamped notes

## Tech Stack 💻

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Convex (Real-time database & functions)
- **Video**: Stream.io (Video & audio calling)
- **Authentication**: Clerk
- **UI**: Shadcn UI + Tailwind CSS
- **Icons**: Lucide React
- **Date Management**: date-fns
- **State Management**: React Query + Convex

## Getting Started 🛠️

### Prerequisites

- Node.js 18+
- npm 9+
- Convex account
- Stream.io account
- Clerk account

## License 📄

**Copyright Notice**  
© 2025 Prakhar Gupta. All rights reserved.

This project and its source code are protected under copyright law. No part of this software may be:

- Copied
- Modified
- Distributed
- Used for commercial purposes

without explicit written permission from the copyright holder.

**Exception**  
The MIT License grants specific permissions outlined below:

MIT License

Permission is hereby granted... [keep full MIT text from your LICENSE file]

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/devcall.git
cd devcall
npm install
npm run dev
