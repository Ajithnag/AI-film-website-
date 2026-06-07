# AI Film Website

Generate realistic AI-powered films of 2-3 hours in length from uploaded screenplays.

## Project Overview

This platform allows users to:
- Upload screenplays in various formats (.txt, .pdf)
- Generate realistic AI films based on the screenplay
- View and download generated films
- Manage multiple film projects

## Tech Stack

### Frontend
- **Framework**: React 18
- **UI Library**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Video Player**: React Player

### Backend
- **Runtime**: Node.js (Express)
- **API**: RESTful API with WebSocket support for real-time updates
- **Database**: MongoDB
- **Task Queue**: Bull (Redis-based)
- **File Storage**: AWS S3 / Local storage

### AI & Video Generation
- **Video Generation API**: Runway ML / OpenAI API
- **Screenplay Parser**: Custom parser + PDFjs
- **Video Processing**: FFmpeg

### DevOps
- **Containerization**: Docker
- **Deployment**: Docker Compose (local), AWS/Heroku (production)

## Project Structure

```
AI-film-website/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── redux/           # Redux store & slices
│   │   ├── services/        # API services
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # Global styles
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/                 # Node.js/Express server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Database models
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   ├── config/          # Configuration files
│   │   └── server.js        # Express setup
│   ├── tests/               # Test files
│   ├── .env.example         # Environment variables template
│   ├── package.json
│   └── docker-compose.yml
├── ai-service/              # Python AI service
│   ├── src/
│   │   ├── screenplay_parser.py
│   │   ├── video_generator.py
│   │   ├── api_client.py
│   │   └── utils.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── main.py
└── docker-compose.yml       # Main orchestration
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)
- MongoDB
- Redis (optional, for task queue)
- Docker & Docker Compose

### Installation

#### Option 1: Local Development

**Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

**Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

#### Option 2: Docker
```bash
docker-compose up -d
```

## Features

### Phase 1 (MVP)
- [x] Project structure setup
- [ ] Screenplay upload interface
- [ ] Basic screenplay parsing
- [ ] AI video generation integration
- [ ] Video playback
- [ ] User authentication

### Phase 2
- [ ] Advanced screenplay editing
- [ ] Character consistency engine
- [ ] Scene preview generation
- [ ] Batch processing
- [ ] Progress tracking with WebSockets

### Phase 3
- [ ] Collaboration features
- [ ] Version history
- [ ] Export options (MP4, 4K, etc.)
- [ ] Subtitle generation
- [ ] Payment integration

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Films
- `GET /api/films` - List all films
- `POST /api/films` - Create new film project
- `GET /api/films/:id` - Get film details
- `PUT /api/films/:id` - Update film
- `DELETE /api/films/:id` - Delete film

### Screenplay Upload
- `POST /api/screenplay/upload` - Upload screenplay
- `GET /api/screenplay/:id` - Get screenplay content
- `POST /api/screenplay/:id/parse` - Parse screenplay

### Generation
- `POST /api/generate/:filmId` - Start film generation
- `GET /api/generate/:jobId/status` - Check generation status
- `WS /socket.io` - WebSocket connection for real-time updates

## Environment Variables

See `.env.example` files in respective directories.

## Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Submit a pull request

## License

MIT

## Contact

For more information, visit [GitHub Repository](https://github.com/Ajithnag/AI-film-website-)
