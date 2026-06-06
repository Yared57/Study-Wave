# Study Wave

Study Wave is an intelligent, AI-powered study companion application designed to streamline student workflows, optimize revision schedules, and deliver contextual academic assistance. By integrating a large language model via the Mistral AI API, Study Wave acts as a personalized, context-aware tutor that helps students break down complex concepts, test their knowledge, and manage their study sessions efficiently.

Built with a modern full-stack architecture, Study Wave focuses on high-performance builds, clean state management, and an intuitive user interface to keep students focused on active learning.

---

## Features

* **AI Study Companion:** Integrated with the Mistral AI API using robust system prompting to provide highly accurate, subject-specific academic tutoring, concept explanations, and step-by-step problem-solving.
* **Dynamic Interactive Dashboards:** A clean, responsive workspace to organize study materials, track progress, and manage active learning sessions.
* **Context-Aware Support:** Designed to process user queries with optimized context, ensuring responses are tailored to the specific academic domain being studied.
* **Optimized Performance:** Frontend built using Vite for rapid Hot Module Replacement (HMR) and optimized production builds.

---

## Tech Stack

### Frontend
* **React (v18+)** – Component-based UI architecture.
* **Vite** – High-performance development tooling and asset bundling.
* **CSS3 / Modern UI Layouts** – Clean, responsive, distraction-free styling optimized for educational workflows.

### Backend & API
* **Node.js & Express** – Scalable, asynchronous backend architecture for routing and API orchestration.
* **Mistral AI API** – Powering the underlying intelligent tutoring system via fine-tuned system logic.

---

## Getting Started

Follow these steps to set up and run Study Wave locally on your machine.

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16.x or higher recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A Mistral AI API Key (Available via the [Mistral AI Console](https://console.mistral.ai/))

### Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/yourusername/study-wave.git](https://github.com/yourusername/study-wave.git)
   cd study-wave
   npm install
   cd client
   npm install
   cd ..
 Environment Configuration:
Create a .env file in the root of your backend directory to store your sensitive keys. Do not commit this file to source control.

Root/Backend .env  
   ```bash
   PORT=5000
   MISTRAL_API_KEY=your_mistral_api_key_here
  ```
Running the Application:

To run the backend server:

Bash


npm run start
To run the frontend client:
Bash
```
cd client
npm run dev
```
Open your browser and navigate to the local server address provided by Vite (typically http://localhost:5173).

System Prompting & Architecture
Study Wave achieves targeted educational support by configuring the Mistral AI client with specialized system personas. Instead of functioning as a generic chatbot, the model is governed by specific instructions that enforce:

Socratic Questioning: Prompting students to think through complex engineering, mathematical, or scientific problems rather than providing immediate final solutions.

Structured Markdown Layouts: Formatting solutions with clean typographic structures, clear equations, and structured lists for enhanced readability.

Step-by-Step Breakdowns: Deconstructing complex academic modules into manageable, logical components.
 

    
