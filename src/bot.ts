import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { TwitterApi } from "twitter-api-v2";

console.log("keyyy",process.env.HUGGING_FACE_API_KEY);


const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY!,
  appSecret: process.env.TWITTER_API_SECRET!,
  accessToken: process.env.TWITTER_ACCESS_TOKEN!,
  accessSecret: process.env.TWITTER_ACCESS_SECRET!,
});

const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 3) + '...';
};

async function generateTweets(): Promise<string | null> {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: "software engineer" },
      { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
    );

    const generatedText = response.data[0].generated_text;
    const tweetText = truncateText(generatedText, 280);
    return tweetText;
  } catch (e) {
    console.error('Error generating tweet:', e);
    return null;
  }
}

async function postTweet(text: string): Promise<void> {
    try {
        await twitterClient.v2.tweet(text);
        console.log("tweeted:", text);
    } catch (error) {
        console.error('Error posting tweet:', error);
    }
}

async function main(): Promise<void> {
    const tweet = await generateTweets();
    console.log(tweet);
    
    if(tweet){
        await postTweet(tweet);
    }
}

main();
