# ODD (On Demand Delivery)

ODD is an on-demand delivery app, where users can make request to deliver their packages from one location to another within India(for now some of the selected cities)

Most of the time what happens is, If someone wants to deliver a package to another location, they have to search nearby “Truck wala or Rrickshaw wala" with no fixed prices.
ODD tries to solve the problems by providing a platform where users can find and book the vehicle that suits their needs, and deliver packages to the destination without any extra effort and within fair price.

## Roles

- USER - A person who wants to send the package
- DRIVER - A person who is responsible for delivering a package
- ADMIN - A person who can see statistics of services and details of Users, Drivers and Orders.



## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, Socket

**Database:** Mongodb, S3 bucket

**Event Queue:** RabbitMQ

**Proxy Server:** Nginx

## Artifacts

- `Product Requirements Document:` [PRD](https://drive.google.com/file/d/1KIVEf0Sr-K_P09xhqasXgidkMhf_AvHv/view?usp=sharing)

- `High Level Design:` [HLD](https://www.figma.com/file/pHuFpzxNUNjTGn2nU0773T/ODD-HLD)

- `Wireframes:` [UI/UX](https://www.figma.com/file/rhJiTyanT7Toql18QuTcVj/UI%2FUX-On-Demand-Delivery)

## Application URLs

- `Admin App:` [https://odd-admin.netlify.app/](https://odd-admin.netlify.app/)
    - **`Email`**: ***admin@mailinator.com*** 
    - **`Password`**: ***12345678***

- `User App:` [https://odd-user.netlify.app/](https://odd-user.netlify.app/)
    - **`Phone Number`**: ***9999999999***
    - **`OTP`**: ***0000***

- `Driver App:` [https://odd-driver.netlify.app/](https://odd-driver.netlify.app/)
    - **`Phone Number`**: ***8888888888***
    - **`OTP`**: ***0000***
    
# Run locally

## Cloning Project

Use below command to clone project along with the submodules.
```
git clone https://github.com/pesto-students/odd-frontend-n10-epsilon
```
## Download Dependencies
Use below command to download dependencies.
```
yarn install
```

## `Admin App`
## Run:
Runs the app in the development mode.
```
yarn start:admin
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Build:
Builds the app for production to the `packages/admin/build` folder.
```
yarn build:admin
```
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- Your app is ready to be deployed!

## `Driver App`

## Run:
Runs the app in the development mode.
```
yarn start:driver
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Build:
Builds the app for production to the `packages/driver/build` folder.
```
yarn build:driver
```
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- Your app is ready to be deployed!

## `User App`
## Run:
Runs the app in the development mode.
```
yarn start:user
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Build:
Builds the app for production to the `packages/user/build` folder.
```
yarn build:user
```
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- Your app is ready to be deployed!