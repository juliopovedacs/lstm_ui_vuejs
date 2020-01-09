# LSTM UI Vue.js

Welcome!

![LSTM Proposed Approach UI Main Page](https://raw.githubusercontent.com/japoveda10/lstm_ui_vuejs/master/IMAGE.png)

## What is it?

This is the User Interface of [GenerativeLSTM](https://github.com/AdaptiveBProcess/GenerativeLSTM), an application that builds and uses generative models from event logs using LSTM neural networks. For more information about this project, click [here](https://link.springer.com/chapter/10.1007/978-3-030-26619-6_19).

## How was it built?

The UI is built using a JavaScript framework called [Vue.js](https://vuejs.org). This project also uses [GoJS](https://gojs.net/latest/index.html) and [Chart.js](https://www.chartjs.org).

## How can I run it?

### Prerequisites

Before you run this project, make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org/es/)

### Instructions to run the project

**Important:** first, you need to download and run the [LSTM UI REST API project](https://github.com/japoveda10/lstm_ui_REST_API). Then, follow the next steps:

#### 1. Download the project

Download this GitHub repository. To do so, you can execute the following command in your cmd/terminal window:

   ```
   $ git clone https://github.com/japoveda10/lstm_ui_vuejs.git
   ```

<br />

#### 2. Install depdendencies

Unzip the repository and go inside it

   ```
   $ cd lstm_ui_vuejs/lstm_ui
   ```

Then, execute the following command (inside the same folder of the ```package.json``` file):

   ```
   $ npm install
   ```
   
The ```npm install``` command installs the project's dependencies based on the ```package.json``` file. After its execution, a ```node_modules``` directory is created.

<br />

#### 3. Install Vue CLI

Execute the following command:
   
   ```
   $ npm install -g @vue/cli
   ```

<br />

#### 4. Use Vue CLI

- 4.1 Execute the following command:
   
   ```
   $ vue ui
   ```
   
This command will open the **Vue CLI UI** in your default browser.

- 4.2 Click on **Tasks** on the left menu
- 4.3 Click on the **serve** button
- 4.4 Click on the **Execute task** button
- 4.5 After the project finishes building, click on the **Open application** button. A new tab will appear with the project running

<br />

## Questions and Suggestions

If you have questions or suggestions about this project, please contact [japoveda10](mailto:ja.poveda10@uniandes.edu.co)

## Author

[japoveda10](https://github.com/japoveda10)
