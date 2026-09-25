# Cambodia Tourism

A Vue 3 and Vite tourism portal for discovering Cambodia's destinations, provinces, food, festivals, and culture.

## How to Run

1. Open a terminal in the project folder.
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:5173` in your browser.

Stop the server with `Ctrl+C`.

### Final Run Checklist

```bash
npm install
npm run build
npm run dev
```

Then open `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Integration

### Application shell

- `src/App.vue` provides the shared Navbar, router outlet, and Footer.
- `src/router/index.js` defines the application routes.
- `src/style.css` contains Tailwind, daisyUI, and project theme styles.

### Language switching

English and Khmer are managed by `src/composables/useLanguage.js`.

```js
import { useLanguage } from '@/composables/useLanguage'

const { language, t, toggleLanguage } = useLanguage()
```

Use `t('key')` for interface text. The selected language is saved in `localStorage` under `language`.

Data records use Khmer fields such as `nameKh`, `descriptionKh`, `descKh`, and `textKh` when available.

### Theme switching

The Navbar controls light and dark mode. The selected theme is saved in `localStorage` under `theme`, and shared dark-mode styles are defined in `src/style.css`.

### Local data and images

Tourism content is stored in `src/data`:

- `destinations.json`
- `provinces.json`
- `foods.json`
- `culture.json`
- `festivals.json`

Images are served locally from `public/images`. The Cambodia flag is available at `public/flag/cambodia.svg`.

### Adding a destination

Add a record to `src/data/destinations.json` with English and Khmer values:

```json
{
	"id": 12,
	"name": "Example Destination",
	"nameKh": "គោលដៅគំរូ",
	"province": "Kampot",
	"provinceKh": "កំពត",
	"category": "Nature",
	"categoryKh": "ធម្មជាតិ",
	"description": "English description.",
	"descriptionKh": "ការពិពណ៌នាជាភាសាខ្មែរ។",
	"image": "/images/destinations/example.png",
	"rating": 4.5
}
```

Place the matching image under `public/images/destinations` and reference it with a root-relative path beginning with `/images/`.

## AI Integration

See [ai-usage.md](ai-usage.md) for the recommended AI travel assistant architecture and API key security rules. Provider API keys must stay on a backend or serverless function and must never be placed in frontend Vue files.
