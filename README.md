# Blog Site

## Introduction
Blog Site is a web application designed to provide information on various topics through blog posts. This README provides instructions on how to clone the repository, install dependencies, and run the project.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)

## Installation
To set up the Blog Site application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Stroh-M/blog-site.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blog-site
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage
To run the application, follow these steps:

1. Start the API server:
    ```bash
    node api.ejs
    ```

2. In another terminal, start the main server:
    ```bash
    node server.js
    ```

## Dependencies
- **Node.js:** JavaScript runtime.
- **Express.js:** Web framework for Node.js.
- **EJS:** Embedded JavaScript templating.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Body-Parser:** Node.js body parsing middleware.

## Configuration
Ensure your environment is configured to run Node.js applications. No additional configuration is required for this project.

## Troubleshooting
- **Port Conflict:** Make sure there are no other applications running on the ports used by `api.ejs` and `server.js` before starting the servers.
- **Installation Issues:** Ensure Node.js and npm are installed correctly.

## Contributors
- **Stroh-M:** [GitHub Profile](https://github.com/Stroh-M)



