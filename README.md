# Unify Mobile App

## Getting Started

### Prerequisites

* Install Node.js
  ```sh
  npm install -g npm
  ```
    * Or if you have home-brew, install Node.js like below:
      ```sh
      brew install node
      ```

* Install Expo CLI
  ```sh
  npm install --global expo-cli
  ```
  
* Install AWS Amplify CLI
  ```sh
  npm install -g @aws-amplify/cli
  ```
  
* Install Android Simulator: https://docs.expo.dev/workflow/android-studio-emulator/


* Install iOS Simulator (macOS only): https://docs.expo.dev/workflow/ios-simulator/

### Run Project Locally

1. `cd` into the project directory `csc3032-2122-g14-mobile` (i.e. where the package.json file is located)


2. Pull backend (i.e. authentication from AWS Cognito and other AWS configurations) from the AWS Amplify app
    ```sh
    amplify pull --appId d302an3mkr3tct --envName dev
    ```
    * Use default settings when prompted
   

3. Start project
    ```sh
    expo start
    ```
    * Runs the app in the development mode.
    * Open http://localhost:19002 to view it in the browser.
    * Select options from the left-side panel (e.g. _Run on Android device/emulator_, _Run on iOS simulator_, _Run in web browser_).
    * The app will automatically reload if you make edits in the code and save.
