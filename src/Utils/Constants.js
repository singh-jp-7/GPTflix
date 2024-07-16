export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const TRAILER_BASE_URL = "https://www.youtube.com/embed/";

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/original";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "Hindi", name: "हिंदी" },
  { identifier: "Spanish", name: "Español" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY