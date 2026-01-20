# 🎬 Netflix-GPT

Netflix-GPT is a **Netflix-inspired movie streaming UI** built with **React**, featuring **GPT-powered search**, **Firebase authentication**, and **TMDB movie data**.
It delivers a modern, responsive, and professional user experience ideal for a portfolio or client demo.

---

## 🌐 Live Preview

👉 [netflix-gpt-chi-peach.vercel.app](https://netflix-gpt-chi-peach.vercel.app)



---

## 📸 Screenshot

<p align="center">
  <img src="./src/assets/image.png" alt="Netflix-GPT Screenshot" width="100%" />
</p>

---

## 📌 Quick Summary (For Recruiters)

* **Frontend:** React.js + Tailwind CSS + Redux Toolkit.
* **Backend / API:** TMDB API, Firebase Authentication.
* **AI Features:** GPT-powered search & recommendations.
* **Deployment:** Vercel or Firebase Hosting.
* **Key Highlights:** Responsive UI, Netflix-style Browse, Multi-category movie lists (Now Playing, Popular, Top Rated, Upcoming), AI-powered search.

---

## ✨ Features

### 🔐 Authentication

* Firebase Login & Sign Up
* Form Validation & Protected Routes
* Profile Update (Name & Photo)
* Auto redirect to `/browse` after login

### 🎥 Browse Page

* Netflix-style Header & Main Movie Section

  * Trailer Background, Title & Description
* Movie Suggestions:

  * Now Playing Movies
  * Popular Movies
  * Top Rated Movies
  * Upcoming Movies
  * Multiple Movie Lists / Categories
* Optimized Images via TMDB CDN
* Fully Responsive Layout

### 🤖 GPT-Powered Movie Search

* AI-based movie recommendations
* Multi-language support
* Dynamic GPT search results

---

## 🛠️ Tech Stack & Implementation

* React.js (Create React App)
* Tailwind CSS
* Redux Toolkit (User Slice & Movie Slice)
* Firebase Authentication
* TMDB API Integration
* OpenAI GPT Integration
* Reusable Components: `MovieList`, `MovieCard`
* Custom Hooks: `useNowPlaying`, `usePopular`, `useTopRated`, `useUpcoming`
* Fully Responsive UI

---

## 🏗️ Architecture

```
Header
 ├── Main Movie
 │    ├── Trailer (Background)
 │    ├── Title & Description
 └── Movie Suggestions
      ├── Movie List (Now Playing)
      ├── Movie List (Popular)
      ├── Movie List (Top Rated)
      └── Movie List (Upcoming / Other Categories)

GPT Search
 ├── Search Bar → GPT → Movie Suggestions
```

---

## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/Netflix-Gpt.git
cd Netflix-Gpt
npm install
npm start
```

---

## 🙌 Acknowledgements

* **TMDB** – Movie Data
* **OpenAI** – GPT-powered search
* **Firebase** – Authentication

---

## ⭐ Support

If you like this project, please **star ⭐ the repository**!

---

## 👨‍💻 Author

**Shubham Gupta**
B.Tech Graduate | Frontend Developer
React • Tailwind • Redux • Firebase • MERN


