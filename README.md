# 🎬 ReEnding - AI Movie Ending Generator

Reimagine your favorite movie endings with AI. Type an alternate ending you wish had happened, and watch it come to life as an AI-generated video clip.

![ReEnding Demo](./public/demo.png)

## ✨ What It Does

Users describe a movie they watched and an alternate ending they envisioned. The app generates a short AI video visualizing that alternate ending — no filmmaking skills required.

**Example prompts:**

- "Inception: Instead of the ambiguous top spinning, it clearly falls over and Dom is home for real"
- "Titanic: Jack climbs onto the door with Rose, both survive floating together in the Atlantic"
- "The Shawshank Redemption: Red decides to stay in the halfway house instead of joining Andy"

## 🚀 Live Demo

**[Try it here](your-vercel-url-here)** _(will add after deployment)_

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **AI Video Generation**: Replicate API (Zeroscope v2 XL model)
- **Deployment**: Vercel
- **Architecture**: Server-side API routes for secure API key handling

## 🏗️ How It Works

1. User enters a movie ending prompt
2. Frontend sends POST request to `/api/generate`
3. Server calls Replicate's text-to-video AI model
4. AI generates a ~3 second video clip (takes 1-2 minutes)
5. Video URL returned and displayed in browser

## 📦 Local Setup

```bash
# Clone the repo
git clone https://github.com/MarziaSaidi/yourending.git
cd yourending

# Install dependencies
npm install

# Add your Replicate API token to .env.local
REPLICATE_API_TOKEN=r8_your_token_here

# Run locally
npm run dev
```

Visit `http://localhost:3000`

## 🎯 Technical Highlights

- **Async video generation** with loading states and error handling
- **Type-safe API** using TypeScript interfaces
- **Prompt validation** (600 character limit, required fields)
- **Graceful error handling** with user-friendly messages
- **Environment variable security** (API keys never exposed to client)

## 🎓 What I Learned

- Integrating third-party AI APIs (Replicate)
- Handling long-running async operations in Next.js
- Building type-safe API routes with proper error handling
- Managing API costs and rate limits
- Setting user expectations for AI-generated content

## 📝 Current Limitations (MVP Scope)

- Video quality is abstract/stylized (limitation of current text-to-video models)
- ~1-2 minute generation time
- No user authentication or video history
- Single video generation at a time

## 🔮 Future Enhancements

- User accounts and video gallery
- Higher quality models (when available/affordable)
- Social sharing features
- Prompt suggestions based on popular movies
- Save/download generated videos

## 👤 Author

**Marzia Saidi**
