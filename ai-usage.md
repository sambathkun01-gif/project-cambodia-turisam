# AI Usage

## Purpose

The Cambodia Tourism project can use AI as a travel assistant that helps visitors discover destinations, food, culture, and travel ideas in Cambodia.

## Recommended Features

- Answer questions about Cambodian destinations and culture.
- Recommend destinations based on interests such as temples, beaches, nature, food, or wildlife.
- Create simple itineraries based on trip length and preferred activities.
- Explain local customs and respectful travel behavior.
- Suggest related pages from this website.

## Suggested User Flow

1. The user opens an AI assistant panel.
2. The user asks a question or selects a suggested prompt.
3. The frontend sends the question and selected language to a backend endpoint.
4. The backend adds trusted Cambodia Tourism data as context.
5. The backend calls the AI provider and returns the answer.
6. The frontend displays the answer in English or Khmer.

## Important Security Rule

Never place an AI provider API key in Vue components or expose it in browser code. Store the key on a server or serverless function in an environment variable such as:

```env
OPENAI_API_KEY=your_api_key_here
```

The browser should call an application endpoint such as `/api/ai`, not the AI provider directly.

## Recommended Context Data

The assistant should use the local data in `src/data` as trusted context:

- `destinations.json`
- `provinces.json`
- `foods.json`
- `culture.json`
- `festivals.json`

The assistant should prefer this local content over unsupported guesses. When information is unavailable, it should say so clearly and recommend checking official tourism or travel sources.

## Language Support

The assistant should receive the current language from the application:

```json
{
	"language": "EN",
	"message": "What should I visit in Siem Reap?"
}
```

Use `KH` for Khmer responses. Keep destination names, prices, dates, and safety information clear and easy to verify.

## Safety and Quality Rules

- Do not invent opening hours, prices, visa rules, or emergency information.
- Do not present medical, legal, or immigration advice as guaranteed fact.
- Mention when information may change and suggest checking official sources.
- Avoid collecting passports, payment details, API keys, or other sensitive information.
- Keep responses concise and practical.
- Recommend respectful behavior at temples and cultural sites.

## Example Prompts

- “Plan a three-day trip to Siem Reap.”
- “Which Cambodian destinations are best for beaches?”
- “What food should I try in Cambodia?”
- “How should I dress when visiting a pagoda?”
- “សូមណែនាំកន្លែងទេសចរណ៍នៅកម្ពុជា។”

## Implementation Note

The current Vite application is a frontend. A small backend or serverless API route should be added before enabling live AI requests. This keeps the provider key private and allows the application to validate requests, limit usage, and attach local tourism data safely.
