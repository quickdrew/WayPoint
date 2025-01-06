# WayPoint
A dynmaic trip planner that uses OpenAI API, OpenSourceMaps, and Mapbox Directions API.

![WayPoint User Interface](/photos/WayPointUI.png)

## Overview
**WayPoint** is a web-based application that leverages OpenAI's GPT model and Mapbox Directions API to assist users in planning trips. The app dynamically suggests destinations along a route based on user preferences and displays them on an interactive map using Leaflet.js.

## Features
- **GPT-Powered Destination Suggestions**: Generates travel stops based on user input and a specified distance limit.
- **Interactive Map**: Displays destinations on a map and dynamically draws routes between stops.
- **Customizable Distance Limit**: Users can specify the maximum distance from the route for suggested destinations.
- **Dynamic Routes**: Routes are updated dynamically as new destinations are added.
- **Reset Functionality**: Clear all map markers and routes with a single click.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine.
- **API Keys**:
  - OpenAI API Key: For GPT-powered destination suggestions.
  - Mapbox API Key: For route drawing and mapping features.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/WayPoint.git
cd WayPoint
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add API Keys
- Replace the placeholders in the `map.html` and `server.js` files with your API keys:
  - **OpenAI API Key**: Add to `server.mjs` line 8:
    ```javascript
    apiKey: "your-openai-api-key"
    ```
  - **Mapbox API Key**: Add to `map.html` line 76:
    ```javascript
    const mapboxAccessToken = 'your-mapbox-api-key';
    ```

### 4. Start the Server
Run the server with the following command:
```bash
cd src
node server.js
```

### 5. Access the Application
- Open your browser and go to:
  ```
  http://localhost:3000
  ```

## Usage Instructions
1. **Specify Your Preferences**:
   - Enter a starting point, travel preferences, and any specific requirements in the provided text area.
   - Set the maximum distance for suggested destinations.

2. **Generate Suggestions**:
   - Click the **Submit** button to fetch destination suggestions from GPT.
   - The suggested stops will appear on the map with markers and route lines.

3. **Interact with the Map**:
   - Click on markers to view destination details.
   - Adjust the distance limit and re-submit for updated suggestions.

4. **Reset Map**:
   - Click the **Reset** button to clear all markers and routes from the map.

## File Structure
```
.
WAYPOINT/
├── photos/                    # Photos for README.md
├── src/
│   ├── node_modules/          # Installed dependencies
│   ├── index.html             # Frontend for the application
│   ├── server.mjs             # Backend server for handling GPT requests
│   ├── package.json           # Node.js dependencies and scripts
│   ├── package-lock.json      # Node.js lock file
├── README.md                  # Documentation for the application
```

## Troubleshooting
- **Invalid API Key Errors**:
  - Ensure you have valid API keys for both OpenAI and Mapbox.
  - Double-check that the keys are placed in the correct files.

- **No Destinations Suggested**:
  - Ensure the input prompt is specific and includes a valid starting point.
  - Increase the distance limit if no stops are returned.

- **Server Not Starting**:
  - Ensure all dependencies are installed by running `npm install`.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- [OpenAI](https://openai.com) for the GPT model.
- [Mapbox](https://mapbox.com) for the mapping and routing API.
- [Leaflet.js](https://leafletjs.com) for the interactive map interface.
