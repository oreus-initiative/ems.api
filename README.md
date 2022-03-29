<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.oreus.ca/vectors/oreus_brand.svg">
    <img src="https://www.oreus.ca/vectors/oreus_brand.svg" alt="Logo">
  </a>

  <h3 align="center">Oreus's Split Backend</h3>

  <p align="center">
    An EOS-Based User Reward and Ethical Monetisation System.
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> 
    · -->
    <a href="https://github.com/oreus-initiative/split.backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/oreus-initiative/split.backend/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Free apps mostly rely on monetisation methods worsening user experience. We’re here to solve that problem by building a tool for developers to reward their users using EOS.

Our open-source solution would include two parts to make the system easily integrable and usable;

The API allows you to configure and retrieve analytics from your reward system using your favorite language. You’ll be able, using code, to import users, manage rewards, how much and when you would like to distribute the reward pool.


### Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/fr/)
* [Knex](https://knexjs.org/)


<!-- GETTING STARTED -->
## Getting Started

Here's how you can get the project running on your computer;

### Prerequisites

- Node.js 14+ is installed (along with NPM 6+)
- PostgreSQL 14+ is installed (along with PGAdmin, which is useful)

### Installation

Once prerequisites are met, you can setup your development environment;

1. Clone the repo
   ```sh
   git clone https://github.com/oreus-initiative/split.backend
   ```
2. Install Dependencies
   ```sh
   npm install
   ```
3. Create your environment file `.env` at the project's root.

```js
    # SETUP DEVELOPMENT / PRODUCTION ENVIRONMENT
    NODE_ENV=development                # development, test or production
    DEBUG_LEVEL=debug                   # See winston logging levels

    API_KEY=GENERATED_API_KEY           # You can use the generate-api-key command

    # DATABASE CONNECTION
    DB_CLIENT=YOUR_DATABASE_CLIENT      # Default: pg
    DB_HOST=YOUR_DATABASE_HOST          # Default: 127.0.0.1
    DB_PORT=YOUR_DATABASE_PORT          # Default: 5433
    DB_USER=YOUR_DATABASE_USER          # Default: postgres
    DB_PASSWORD=YOUR_DATABASE_PASSWORD  # Default: postgres
    DB_NAME=YOUR_DATABASE_NAME          # Suggested: "oreus-split-api"
```

At the root of the project, we also provide the insomnia_apidoc.json file, that can be imported into the Insomnia HTTP Client to better understand and test the API.

<!-- USAGE EXAMPLES -->
## Usage

```js
// TODO
```


<!-- ROADMAP -->
## Roadmap

Our roadmap is described using milestones associated to issues, please refer to those to understand our roadmap.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the GNUv3 License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Dominic Fournier - [@DominicF96](https://twitter.com/DominicF96) - me@dominicfournier.com

Project Link: [https://github.com/oreus-initiative/split.backend/projects/1](https://github.com/oreus-initiative/split.backend/projects/1)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Express](https://expressjs.com/)

## Special Thanks

Special thanks to all [Pomelo donors who contributed to help kickstart this project](https://pomelo.io/grants/ems.oreus) !

<p align="right">(<a href="#top">back to top</a>)</p>