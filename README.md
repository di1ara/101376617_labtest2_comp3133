# 101376617 Lab Test 2 - COMP3133

## Project Overview
This Angular application fetches and displays SpaceX mission data, allowing users to view mission details, filter launches by year, and explore mission-specific resources. The application is built using Angular 19 and Angular Material, providing a modern and responsive UI.

## Getting Started
Follow the steps below to set up, run, and deploy the project locally.

### 1. Prerequisites
Before proceeding, ensure you have the following installed on your system:
- **Node.js** (v20.11.1 or compatible)
- **Angular CLI** (v19.2.5 or later)
- **Git** (for cloning the repository)

### 2. Clone the Repository
Clone the project from GitHub and navigate to the project directory:
```sh
git clone https://github.com/di1ara/101376617-lab-test2-comp3133.git
cd 101376617-lab-test2-comp3133
```

### 3. Install Dependencies
Run the following command to install all required packages and dependencies:
```sh
npm install
```

### 4. Start the Development Server
To run the application locally, execute:
```sh
ng serve
```
Then, open your browser and navigate to:
[http://localhost:4200](http://localhost:4200)

## Features
### Mission List Component
- Displays a list of SpaceX missions retrieved from the SpaceX Launch API.
- Shows flight number, mission name, launch year, rocket details, and mission links.

### Mission Filter Component
- Allows users to filter missions by launch year, launch/landing success.
- Implements a search feature for quick access to specific missions.

### Mission Details Component
- Provides in-depth information about a selected mission.
- Displays additional mission data such as launch site, success status, and media links.

### Additional Features
- Uses **Angular Material** for an enhanced UI and improved user experience.
- Responsive design for better accessibility on different devices.


## Technologies Used
- **Angular 19** - Frontend framework
- **TypeScript** - Typed JavaScript
- **Angular Material** - UI components
- **SpaceX REST API** - Fetch mission data

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.


---


