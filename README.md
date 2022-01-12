
# ODD (On Demand Delivery)

ODD is an on-demand delivery app, where users can make request to deliver their packages from one location to another within India(for now some of the selected cities)

Most of the time what happens is, If someone wants to deliver a package to another location, they have to search nearby “Truck wala or Rrickshaw wala" with no fixed prices. ODD tries to solve the problems by providing a platform where users can find and book the vehicle that suits their needs, and deliver packages to the destination without any extra effort and within fair price.

## Roles

- USER - A person who wants to send the package
- DRIVER - A person who is responsible for delivering a package
- ADMIN - A person who can see statistics of services and details of Users, Drivers and Orders.

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Authors](#authors)
5. [License](#license)

# Demo
- [Driver App](http://driver-app-odd.s3-website.ap-south-1.amazonaws.com/)
- [User App](http://user-app-odd.s3-website.ap-south-1.amazonaws.com/)
- [Admin App](http://admin-app-odd.s3-website.ap-south-1.amazonaws.com/)

Test Credentials:

- For Driver
  - Phone: 9999999999
  - OTP: 0000
- For User
  - Phone: 8888888888
  - OTP: 0000
- For Admin
  - Email: admin@mailinator.com
  - Password: 12345678

# Installation

- Fork or directly clone this repository to your local machine
- Use the `yarn` command to install dependencies
- Once the dependencies are finished installing, use the `yarn start` command inside the root directory of app to open the app in your local browser of choice

# Technology Stack

We tried to use a completely modern tech stack while testing out some new technologies that we had never used before. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Socket](https://socket.io/)

# Authors

- [Dharmendra Jagodana](https://github.com/JagodanaDharmendra)
- [Akash Malviya](https://github.com/Akashmalviya)

## To start with Driver app Todo

step to follow

type url in chrome

```bash
    chrome://flags/#unsafely-treat-insecure-origin-as-secure
```

Enter url in the textarea

```bash
  http://driver-app-odd.s3-website.ap-south-1.amazonaws.com
```

Choose Enabled in the select option.

# License

[MIT](https://opensource.org/licenses/MIT)
