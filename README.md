# LSTM UI Vue.js

Welcome!

![LSTM Proposed Approach UI Main Page](https://raw.githubusercontent.com/japoveda10/lstm_ui_vuejs/master/IMAGE.png)

## What is it?

This is the User Interface of [GenerativeLSTM](https://github.com/AdaptiveBProcess/GenerativeLSTM), an application that builds and uses generative models from event logs using LSTM neural networks. For more information about this project, click [here](https://link.springer.com/chapter/10.1007/978-3-030-26619-6_19).

## How was it built?

The UI is built using a JavaScript framework called [Vue.js](https://vuejs.org). This project also uses [GoJS](https://gojs.net/latest/index.html) and [Chart.js](https://www.chartjs.org). Implementation details are available [here](https://github.com/japoveda10/lstm_ui_vuejs/blob/master/IMPLEMENTATION_DETAILS.md)

## How can I install it?

#### 1. Install [Node.js](https://nodejs.org/es/)


#### 2. Download the project

Download this GitHub repository. To do so, you can execute the following command in your cmd/terminal window:

   ```
   $ git clone https://github.com/japoveda10/lstm_ui_vuejs.git
   ```

<br />

#### 3. Install dependencies

Unzip the project and go inside it

   ```
   $ cd lstm_ui_vuejs/lstm_ui
   ```

Then, execute the following command (inside the same folder of the ```package.json``` file):

   ```
   $ npm install
   ```
   
The ```npm install``` command installs the project's dependencies based on the ```package.json``` file. After its execution, a ```node_modules``` directory is created.

<br />

#### 4. Install Vue CLI

Execute the following command:
   
   ```
   $ npm install -g @vue/cli
   ```

<br />

#### 5. Configure Vue CLI

- 5.1 Execute the following command (inside `lstm_ui_vuejs`):
   
   ```
   $ vue ui
   ```
   
   This command will open the **Vue CLI UI** in your default browser.

- 5.2 In the **Vue Project Manager** (opened browser window), select **Import**
- 5.2 Select **lstm_ui**
- 5.3 Select **Import this folder**. This will open the lstm_ui **Project dashboard**
- 5.4 Click on **Tasks** in the left menu
- 5.5 In **Project tasks**, select **serve**
- 5.6 Click on **Run task**
- 5.7 When the project finishes compiling, click on **Open app**

<br />

## How can I run it?

***Important:*** 

*First, you need to download and run the [LSTM UI REST API project](https://github.com/japoveda10/lstm_ui_REST_API). Then, follow the next steps:*

- 1. Execute the following command (inside the `lstm_ui_vuejs` directory):
   
   <br />
   
   ```
   $ vue ui
   ```
   
   This will open the **Project dashboard**
   
- 2. Click on **Tasks** on the left menu
- 3. In **Project tasks**, select **serve**
- 4. Click on **Run task** button
- 5. When the project finishes compiling, click on the **Open app**. A new browser tab will appear with the project running

<br />

## Questions and Suggestions

If you have questions or suggestions about this project, please contact [japoveda10](mailto:ja.poveda10@uniandes.edu.co)

## Author

[japoveda10](https://github.com/japoveda10)
