# Weather App

A simple weather application built with React that provides current weather information for a given location. This application retrieves data from a weather API and displays the information in a user-friendly format.

## Features

- Get current weather information for a specific location
- Display temperature, humidity, wind speed, and weather conditions
- Show weather forecast for the next few days
- Search for weather by city name or ZIP code
- Automatically detect user's location and display weather information

## Technologies Used

- React
- HTML
- CSS
- JavaScript
- Bootstrap (optional)
- Weather API (e.g., OpenWeatherMap)

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/your-username/weather-app.git
   ```

2. Open the project folder:

   ```
   cd weather-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Obtain an API key from the weather API provider (e.g., OpenWeatherMap).

5. Create a `.env` file in the root directory of the project and add the following code, replacing "YOUR_API_KEY" with your actual API key:

   ```
   REACT_APP_API_KEY=YOUR_API_KEY
   ```

6. Start the development server:

   ```
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to access the Weather App.

## Usage

- Enter a city name or ZIP code in the search bar and press Enter or click the "Search" button to fetch weather information for that location.
- The current weather conditions, temperature, humidity, wind speed, and an icon representing the weather conditions will be displayed.
- Scroll down to view the weather forecast for the next few days.
- Click the "Use My Location" button to automatically detect and display the weather information for your current location.

## Contributing

Contributions are welcome! If you find any issues or want to add new features to the Weather App, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make the necessary changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

## License

The Weather App is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
