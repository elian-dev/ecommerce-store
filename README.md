# LDStore ![Version - 1.0.0](https://img.shields.io/badge/Version-1.0.0-2ea44f) 
![Tech](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) 

**The store's name is a fictitious name invented for educational purposes.**

## An e-commerce store consuming a SASS service

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [What I Learned](#what-i-learned)

## Overview

This store is dedicated to the marketing of custom merchandising from a brand.
This project was primarily built using Next.js, which is a fully modern and user-friendly e-commerce store. I also integrated a widely renowned international payment gateway, Stripe, and hosted it on a server using Vercel.

##TechStack

List the technologies, programming languages, and frameworks that I have used to build this project.

- Frontend: Next.js, JS, Tailwind CSS, React Hot Toast, Zustand, and others.
- Backend: API Integration, AXIOS, Stripe (For payments)
- Deployment: Vercel

## Installation
A step-by-step to run this project and test it in a local environment.

```bash
# Clone the repository
git clone https://github.com/elian-dev/ecommerce-store.git

# Navigate to the project directory
cd ecommerce-store

# Install dependencies
npm install

```


## Create the .env file (Make sure you have the admin setup first)

```bash
NEXT_PUBLIC_API_URL=
```

## Usage

```bash
# Run the project
npm run dev
```

##Features
- API Integration: This store uses an API coded by me, which is a SaaS service so the objective is just to add the endpoint of the store that you want and you will have a store working.
- Shopping cart: A Shopping cart functionality without the use of a third library was coded here,  which allowed me to learn more about the process and some special operations.
- Stripe payment checkout: A very renowned payment platform was integrated to allow buying products.

##What I Learned
- Javascript modern features: This project has allowed me to use modern features of JS, and understand more about how to use them and how they work. Additionally, has allowed me to use good practices and keep a clean code.
- Use the correct library and optimize development time: One of the main goals for this project was to code a SASS platform and the frontend app optimizing the time, and thanks to keeping a good organization of the project and using different very useful libraries those goals were achieved in the end.
- Integrate a payment platform: That was something very new for me, but it is something that always wanted to learn, and this project allowed me to do it, I have learned to set up a local environment, use special tools to do testing, and about the endpoints and events when a person buys a product.


Special thanks to @codewithantonio on YouTube.

