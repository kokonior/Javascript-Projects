# DiscordEarsBot
A speech-to-text bot for Discord written in NodeJS.
Can be useful for hearing impaired and deaf people.

## Getting Started:


[![Discord Ears Bot Demo](https://img.youtube.com/vi/IKIlnaCDZcI/0.jpg)](https://www.youtube.com/watch?v=IKIlnaCDZcI "Discord Ears Bot Demo")


## Developers

### Heroku
If you don't have a linux server/machine then you can use Heroku for hosting your bot 24/7 and it's free.
1. Fork this GitHub repository
2. Create Discord Bot, Invite it to your server and get the API Token
3. Create new Heroku app, use the GitHub method and Deploy DiscordEarsBot
5. Under "resources" disable "web" and enable "worker" dyno instead.
6. Provide the DISCORD_TOK Config Var under "settings"

### Manual Installation
You need nodeJS version 12.x or 14.x with npm on your machine, use `node -v` to check your version.
Execute the following commands:
```
git clone https://github.com/healzer/DiscordEarsBot.git
cd DiscordEarsBot
npm install
```
Proivde the Discord API Token using `DISCORD_TOK` Env Variable or in `settings.json`.

Finally run `node index.js`. You can also use pm2 or nodemon to keep the bot running 24/7.

## Usage

By now you have a discord server, the DiscordEarsBot is running and is a part of your server. Make sure your server has a text and voice channel.

1. Enter one of your voice channels.
2. In one of your text channels type: `*join`, the bot will join the voice channel.
3. Everything said within that channel will be transcribed into text (as long as the bot is within the voice channel).
4. Type `*leave` to make the bot leave the voice channel.
5. Type `*help` for a list of commands.

### notes:
- When the bot is inside a voice channel it listens to all speech and transcribes audio into text.
- Each user is a separate audio channel, the bot hears everyone separately.
- Only when your user picture turns green in the voice channel will the bot receive your audio.
- A long pause interrupts the audio input.
- For Google Speech & WitAI: The duration of a single audio input is limited to 20 seconds, longer audio is not transcribed.


### Vosk API
This is our default Speech-to-Text method. The Vosk API is a free & open-source solution that runs locally (offline). By default only `english` is enabled. Developers can change or include more language models from here: https://alphacephei.com/vosk/models

### WitAI
Installation:
1. set SPEECH_METHOD to `witai`
2. use your Server Access Token for WITAI_TOK

WitAI supports over 120 languages (https://wit.ai/faq), however only one language can be used at a time.
If you're not speaking English on Discord, then change your default language on WitAI under "settings" for your app.

You can also change the language using the following bot command: `*lang <code>` 
`<code>` should be an ISO 639-1 language code (2 digits): https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

### Google Speech API
You can use Google's Speech-to-Text API as follows:
1. set SPEECH_METHOD to `google`
2. For non-English transcriptions: open `index.js`, inside the function `transcribe_gspeech` change the value of `languageCode`.
3. Enable Google Speech API here: https://console.cloud.google.com/apis/library/speech.googleapis.com
4. Create a new Service Account (or use your existing one): https://console.cloud.google.com/apis/credentials
5. Create a new Service Account Key (or use existing) and download the json file.
6. Put the json file inside your bot directory and rename it to `gspeech_key.json`.

### Mozilla DeepSpeech (experimental)
Using Mozilla DeepSpeech for speech recognition, [tutorial](https://medium.com/@ilyanevolin/discord-stt-bot-using-mozilla-deepspeech-e77ee28937eb).
