# Twitter Bot with AI-Generated Tweets

This project is a Twitter bot that generates tweets using the GPT-2 model from Hugging Face's API and posts them on Twitter. The bot is scheduled to run at the start of every hour.

## Setup Instructions

### Prerequisites

- Node.js
- npm
- A Twitter Developer account
- A Hugging Face account

### Getting API Keys

#### Twitter API Keys

1. Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard).
2. Create a new project and app if you don't already have one.
3. In the app settings, navigate to the "Keys and tokens" section.
4. Generate the following keys and tokens:
   - API Key
   - API Secret Key
   - Access Token
   - Access Token Secret

#### Hugging Face API Key

1. Go to the [Hugging Face website](https://huggingface.co/).
2. Sign up for an account if you don't already have one.
3. Navigate to your account settings and find the API tokens section.
4. Generate an API token.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashu-14-oct/auto-tweeting-bot.git
   cd your-repo-name
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root of the project and add the following environment variables:
   ```bash
    TWITTER_API_KEY=your-twitter-api-key
    TWITTER_API_SECRET=your-twitter-api-secret
    TWITTER_ACCESS_TOKEN=your-twitter-access-token
    TWITTER_ACCESS_SECRET=your-twitter-access-secret
    HUGGING_FACE_API_KEY=your-hugging-face-api-key
   ```

4. Run the bot manually to ensure it works:
   ```bash
   npx ts-node src/bot.ts
   ```