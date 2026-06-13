# Medical Device Intelligence Assistant

## Overview

 Medical Device Intelligence Assistant is an AI-powered chatbot interface designed to help users interact with medical device information through a simple and intuitive conversational experience.

The application provides a floating chat widget that can be embedded into a medical device portal or healthcare platform. Users can access device-related information such as current status, historical records, alerts, and troubleshooting assistance through natural language conversations.

---

## Features

### AI Chat Widget

* Floating chatbot button
* Expandable chat interface
* Modern healthcare-themed design
* Responsive popup window

### Quick Actions

Users can quickly access common information through predefined actions:

* Current Status
* Device History
* Active Alerts
* Troubleshooting

### Device Monitoring Overview

The assistant displays:

* Device Health Status
* Connection Status
* System Availability

### Conversational Interface

* User message bubbles
* AI response bubbles
* Medical-themed assistant avatar
* Typing indicator animation
* Auto-scrolling chat window

###

---

## Technology Stack

### Frontend

* React
* JavaScript (ES6+)
* JSX
* Tailwind CSS
* Vite

### UI Libraries

* Lucide React Icons

### Package Manager

* npm

---

## Project Structure

```text
src/
│
├── components/
│   ├── ChatButton.jsx
│   ├── ChatWidget.jsx
│   ├── ChatHeader.jsx
│   ├── ChatBody.jsx
│   ├── ChatInput.jsx
│   ├── MessageBubble.jsx
│   ├── QuickActions.jsx
│   ├── TypingIndicator.jsx
│   └── DeviceStatusMini.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd device-ai-assistant
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

---

## Current Functionality

The current version uses mock data and simulated AI responses for demonstration purposes.

Sample responses include:

* Device status information
* Device history records
* Active alert notifications
* Troubleshooting guidance

---

## Future Enhancements

### Device Data Integration

* Real-time device telemetry
* Historical device records
* Alert management system
* Maintenance tracking

### Additional Features

* Authentication and authorization
* Chat history persistence
* Report generation
* Multi-device support
* Analytics dashboard
* Export functionality

---

## Use Case

RNA is designed to assist healthcare professionals, technicians, and operators by providing quick access to medical device information through a conversational AI interface.

The assistant acts as a centralized point for:

* Monitoring device health
* Reviewing device history
* Investigating alerts
* Accessing troubleshooting guidance

---

## Status

Frontend MVP completed.

The application currently demonstrates the user interface and conversational workflow. Backend integration with AWS services is planned for future development.

---

## Author

Developed due to interest in such domain
