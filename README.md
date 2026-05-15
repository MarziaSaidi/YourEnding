# YourEnding

YourEnding is an MVP AI movie ending generator built with Next.js 14. A user types the ending they wish a movie had, the app sends that prompt to Runway, and the returned short-form video clip plays directly in the UI.

## What it does

- Takes a natural-language alternate movie ending prompt
- Sends the prompt to Runway's text-to-video flow
- Waits for generation to finish, then returns a playable clip
- Presents the result in a product-style landing page

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Runway ML SDK
- Vercel for deployment

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local env file:

   ```bash
   cp .env.example .env.local
   ```

3. Add your Runway API key to `.env.local`:

   ```bash
   RUNWAY_API_KEY=your_runway_api_key
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`

## API flow

- `POST /api/generate`
- Validates the prompt
- Calls Runway with `model: "gen4.5"`, `promptText`, `ratio: "1280:720"`, and `duration: 5`
- Waits for the generated output URL and returns it to the client

## MVP notes

- No auth
- No social feed
- No real movie footage
- Supabase and Cloudinary are not wired yet in this first MVP scaffold

## Next recommended steps

1. Add persistence for prompts and generated URLs in Supabase.
2. Mirror finished clips into Cloudinary for delivery and transformations.
3. Add example screenshots or a GIF after the first successful generation.
