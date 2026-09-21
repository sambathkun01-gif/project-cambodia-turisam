import { computed, ref } from 'vue'

const language = ref(localStorage.getItem('language') || 'EN')

const translations = {
  EN: {
    home: 'Home', destinations: 'Destinations', provinces: 'Provinces', culture: 'Culture',
    cuisine: 'Cuisine', about: 'About', contact: 'Contact', favorites: 'My Favorites',
    darkMode: 'Dark Mode', lightMode: 'Light Mode', english: 'English', khmer: 'Khmer',
    kingdomStrip: 'KINGDOM OF CAMBODIA - TOURISM PORTAL', kingdomOfWonder: 'Kingdom of Wonder',
    welcome: 'Welcome to the Kingdom of Wonder', discoverCambodia: 'Discover Cambodia',
    discoverCopy: 'From the majestic temples of Angkor to the white sands of Koh Rong, experience a land where ancient heritage meets vibrant modern life.',
    exploreDestinations: 'Explore Destinations', popularDestinations: 'Popular Destinations',
    mustVisit: 'Must Visit', viewAll: 'View All Destinations', livingHeritage: 'Living Heritage',
    cultureTitle: 'A Culture Thousands of Years in the Making', exploreCulture: 'Explore Culture',
    startPlanning: 'Start Planning Your Journey', planningCopy: 'Everything you need - visa info, best seasons, transport, and cultural etiquette.',
    contactUs: 'Contact Us', aboutPortal: 'About the portal', aboutTitle: 'Discover Cambodia',
    aboutCopy: 'Cambodia Tourism helps travelers explore the Kingdom of Wonder through its heritage, landscapes, cuisine and living culture.',
    ourPurpose: 'Our purpose', purposeTitle: 'A thoughtful guide to Cambodia',
    purposeCopy1: "From the temples of Angkor and the capital's riverside landmarks to quiet lakes, tropical islands and welcoming villages, Cambodia offers experiences for every kind of traveler.",
    purposeCopy2: 'Use this guide to find destinations, learn about Khmer culture, discover local food and plan a journey that respects the people and places you visit.',
    exploreWithPurpose: 'Explore with purpose', whatFind: 'What you can find here', heritage: 'Heritage', heritageCopy: "Find temples, landmarks and stories from Cambodia's remarkable history.",
    nature: 'Nature', natureCopy: "Explore beaches, lakes, forests and wildlife across the country's provinces.",
    localLife: 'Local life', localLifeCopy: 'Taste Khmer cuisine and learn the customs that make each visit more meaningful.',
    searchDestinations: 'Search destinations...', searchProvinces: 'Search by province name or Khmer name...',
    noResults: 'No results found', tryDifferent: 'Try a different search term or category.',
    noFavorites: 'No saved destinations yet.', saveFavorites: 'Save destinations to see them here.',
    viewDetails: 'View Details', saved: 'Saved to Favorites', addFavorite: 'Add to Favorites',
    aboutDestination: 'About This Destination', quickInfo: 'Quick Info', location: 'Location', category: 'Category',
    planVisit: 'Plan a Visit', nearby: 'Nearby in', destinationNotFound: 'Destination Not Found', backDestinations: 'Back to Destinations',
    foodTitle: 'Taste of Cambodia', foodIntro: 'Discover the bold flavors and time-honored recipes of Khmer cuisine.', drinks: 'Drinks to Try',
    cultureIntro: 'Cambodia is a country where ancient traditions live on in everyday life.', etiquette: 'Cultural Etiquette',
    travelRespect: 'Dress modestly at temples, remove your shoes before entering sacred spaces, and ask before taking photographs.',
    loading: 'Loading...', backHome: 'Back Home', footerCopy: 'Discover the Kingdom of Wonder - ancient temples, pristine beaches, rich culture, and legendary Khmer hospitality.',
    quickLinks: 'Quick Links', cuisineLink: 'Cambodian Cuisine', cultureHeritage: 'Culture & Heritage', contactHeading: 'Contact', planTrip: 'Plan Your Trip', office: 'Phnom Penh, Cambodia', messageReceived: 'Thank you. Your message has been received - we will reply within 2 business days.', fullName: 'Full Name', emailAddress: 'Email Address', subject: 'Subject', messagePlaceholder: 'Your message...', sendMessage: 'Send Message', information: 'Information', foodIntro: 'Khmer cuisine is lighter and more herbal than its neighbors, built on kroeung, coconut milk, fresh river fish, and rice at the heart of every meal.', provincesTitle: 'Provinces of Cambodia', provinceSuffix: 'Province', noProvinces: 'No provinces found', tryProvince: 'Try another province name.', notFoundCopy: 'This path leads to no temple...'
  },
  KH: {
    home: 'ទំព័រដើម', destinations: 'គោលដៅទេសចរណ៍', provinces: 'ខេត្ត', culture: 'វប្បធម៌',
    cuisine: 'ម្ហូបអាហារ', about: 'អំពីយើង', contact: 'ទំនាក់ទំនង', favorites: 'ចំណូលចិត្តរបស់ខ្ញុំ',
    darkMode: 'របៀបងងឹត', lightMode: 'របៀបភ្លឺ', english: 'ភាសាអង់គ្លេស', khmer: 'ភាសាខ្មែរ',
    kingdomStrip: 'ព្រះរាជាណាចក្រកម្ពុជា - វិបផតថលទេសចរណ៍', kingdomOfWonder: 'ព្រះរាជាណាចក្រអច្ឆរិយៈ',
    welcome: 'សូមស្វាគមន៍មកកាន់ព្រះរាជាណាចក្រអច្ឆរិយៈ', discoverCambodia: 'ស្វែងយល់ពីកម្ពុជា',
    discoverCopy: 'ចាប់ពីប្រាសាទអង្គរដ៏អស្ចារ្យ រហូតដល់ឆ្នេរខ្សាច់សក្បុសនៃកោះរ៉ុង សូមទទួលយកបទពិសោធន៍នៃប្រទេសដែលបេតិកភណ្ឌបុរាណជួបជីវិតទំនើបដ៏រស់រវើក។',
    exploreDestinations: 'ស្វែងរកគោលដៅ', popularDestinations: 'គោលដៅពេញនិយម', mustVisit: 'កន្លែងគួរទៅ', viewAll: 'មើលគោលដៅទាំងអស់',
    livingHeritage: 'បេតិកភណ្ឌរស់', cultureTitle: 'វប្បធម៌ដែលមានរាប់ពាន់ឆ្នាំ', exploreCulture: 'ស្វែងយល់ពីវប្បធម៌',
    startPlanning: 'ចាប់ផ្តើមរៀបចំដំណើររបស់អ្នក', planningCopy: 'អ្វីៗដែលអ្នកត្រូវការ - ព័ត៌មានទិដ្ឋាការ រដូវកាលល្អបំផុត ការធ្វើដំណើរ និងទំនៀមទម្លាប់វប្បធម៌។', contactUs: 'ទាក់ទងយើង',
    aboutPortal: 'អំពីវិបផតថល', aboutTitle: 'ស្វែងយល់ពីកម្ពុជា', aboutCopy: 'Cambodia Tourism ជួយអ្នកដំណើរស្វែងយល់ពីព្រះរាជាណាចក្រអច្ឆរិយៈ តាមរយៈបេតិកភណ្ឌ ទេសភាព ម្ហូបអាហារ និងវប្បធម៌រស់នៅ។',
    ourPurpose: 'គោលបំណងរបស់យើង', purposeTitle: 'មគ្គុទ្ទេសក៍ប្រកបដោយការយកចិត្តទុកដាក់សម្រាប់កម្ពុជា', purposeCopy1: 'ចាប់ពីប្រាសាទអង្គរ និងទីតាំងតាមមាត់ទន្លេក្នុងរាជធានី រហូតដល់បឹងស្ងប់ស្ងាត់ កោះត្រូពិច និងភូមិដែលមានភាពរួសរាយ កម្ពុជាផ្តល់បទពិសោធន៍សម្រាប់អ្នកដំណើរគ្រប់រូប។', purposeCopy2: 'ប្រើមគ្គុទ្ទេសក៍នេះដើម្បីស្វែងរកគោលដៅ ស្វែងយល់ពីវប្បធម៌ខ្មែរ ស្គាល់ម្ហូបក្នុងស្រុក និងរៀបចំដំណើរដែលគោរពប្រជាជននិងទីកន្លែង។',
    exploreWithPurpose: 'ស្វែងយល់ដោយមានគោលបំណង', whatFind: 'អ្វីដែលអ្នកអាចរកឃើញនៅទីនេះ', heritage: 'បេតិកភណ្ឌ', heritageCopy: 'ស្វែងរកប្រាសាទ ទីតាំងសំខាន់ៗ និងរឿងរ៉ាវពីប្រវត្តិសាស្ត្រដ៏អស្ចារ្យរបស់កម្ពុជា។', nature: 'ធម្មជាតិ', natureCopy: 'ស្វែងរកឆ្នេរ បឹង ព្រៃឈើ និងសត្វព្រៃនៅតាមខេត្តនានា។', localLife: 'ជីវិតក្នុងស្រុក', localLifeCopy: 'ភ្លក់ម្ហូបខ្មែរ និងស្វែងយល់ពីទំនៀមទម្លាប់ដែលធ្វើឱ្យដំណើររបស់អ្នកមានអត្ថន័យ។',
    searchDestinations: 'ស្វែងរកគោលដៅ...', searchProvinces: 'ស្វែងរកតាមឈ្មោះខេត្ត ឬឈ្មោះខ្មែរ...', noResults: 'រកមិនឃើញលទ្ធផល', tryDifferent: 'សូមសាកល្បងពាក្យស្វែងរក ឬប្រភេទផ្សេង។',
    noFavorites: 'មិនទាន់មានគោលដៅដែលបានរក្សាទុកទេ។', saveFavorites: 'រក្សាទុកគោលដៅ ដើម្បីឃើញវានៅទីនេះ។', viewDetails: 'មើលព័ត៌មានលម្អិត', saved: 'បានរក្សាទុក', addFavorite: 'បន្ថែមទៅចំណូលចិត្ត',
    aboutDestination: 'អំពីគោលដៅនេះ', quickInfo: 'ព័ត៌មានសង្ខេប', location: 'ទីតាំង', category: 'ប្រភេទ', planVisit: 'រៀបចំដំណើរ', nearby: 'នៅជិត', destinationNotFound: 'រកមិនឃើញគោលដៅ', backDestinations: 'ត្រឡប់ទៅគោលដៅ',
    foodTitle: 'រសជាតិកម្ពុជា', foodIntro: 'ស្វែងយល់ពីរសជាតិដ៏សម្បូរបែប និងរូបមន្តបុរាណនៃម្ហូបខ្មែរ។', drinks: 'ភេសជ្ជៈគួរសាកល្បង', cultureIntro: 'កម្ពុជាជាប្រទេសដែលប្រពៃណីបុរាណនៅតែរស់នៅក្នុងជីវិតប្រចាំថ្ងៃ។', etiquette: 'ទំនៀមទម្លាប់វប្បធម៌', travelRespect: 'ស្លៀកពាក់សមរម្យនៅប្រាសាទ ដោះស្បែកជើងមុនចូលកន្លែងសក្ការៈ និងសុំអនុញ្ញាតមុនថតរូប។', loading: 'កំពុងផ្ទុក...', backHome: 'ត្រឡប់ទៅទំព័រដើម',
    footerCopy: 'ស្វែងយល់ពីព្រះរាជាណាចក្រអច្ឆរិយៈ - ប្រាសាទបុរាណ ឆ្នេរស្អាត វប្បធម៌សម្បូរបែប និងភាពរួសរាយរបស់ប្រជាជនខ្មែរ។', quickLinks: 'តំណរហ័ស', cuisineLink: 'ម្ហូបខ្មែរ', cultureHeritage: 'វប្បធម៌ និងបេតិកភណ្ឌ', contactHeading: 'ទំនាក់ទំនង', planTrip: 'រៀបចំដំណើររបស់អ្នក', office: 'ភ្នំពេញ ប្រទេសកម្ពុជា', messageReceived: 'សូមអរគុណ។ សាររបស់អ្នកត្រូវបានទទួល - យើងនឹងឆ្លើយតបក្នុងរយៈពេល ២ ថ្ងៃធ្វើការ។', fullName: 'ឈ្មោះពេញ', emailAddress: 'អាសយដ្ឋានអ៊ីមែល', subject: 'ប្រធានបទ', messagePlaceholder: 'សាររបស់អ្នក...', sendMessage: 'ផ្ញើសារ', information: 'ព័ត៌មាន', foodIntro: 'ម្ហូបខ្មែរមានរសជាតិស្រាល និងក្លិនឱសថក្រអូប ដោយប្រើគ្រឿង កំពឹសដូង ត្រីទន្លេស្រស់ និងបាយជាអាហារសំខាន់។', provincesTitle: 'ខេត្តនៃប្រទេសកម្ពុជា', provinceSuffix: 'ខេត្ត', noProvinces: 'រកមិនឃើញខេត្ត', tryProvince: 'សូមសាកល្បងឈ្មោះខេត្តផ្សេង។', notFoundCopy: 'ផ្លូវនេះមិននាំទៅកាន់ប្រាសាទណាមួយទេ...'
  }
}

export function useLanguage() {
  const t = (key) => translations[language.value][key] || translations.EN[key] || key
  const isKhmer = computed(() => language.value === 'KH')
  const toggleLanguage = () => {
    language.value = language.value === 'EN' ? 'KH' : 'EN'
    localStorage.setItem('language', language.value)
  }
  return { language, isKhmer, t, toggleLanguage }
}
