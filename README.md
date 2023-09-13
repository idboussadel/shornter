# shornter
## Description:

This is a simple URL shortener application built with Express and Mongoose and EJS. It allows users to create short URLs for long URLs. The short URLs are generated using the shortid library. The application also keeps track of the number of times each short URL has been clicked.

![image](https://github.com/Devai-coding/shornter/assets/113947156/b1fa2131-2864-4533-a401-9d01d0287108)


## Installation
* Clone the repository:
 ```sh
git clone https://github.com/your-username/shortener.git
```
* Install the dependencies:
 ```sh
npm install
```
* Start the application:
 ```sh
npm start
```
The application will be running on port 3000.

Usage
To create a short URL, send a POST request to the /url endpoint with the following body:

{
  "fullUrl": "https://www.google.com"
}

The response will be the short URL.

To redirect to the long URL, send a GET request to the /:shortUrl endpoint.
