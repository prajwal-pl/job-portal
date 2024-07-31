## Job Portal - Detailed Overview

# Tech Stack

Next.js
Tailwind CSS
Node.js
Express.js
MongoDB
Prisma
NodeMailer
JWT
UploadThing

# Workflow

There exists rolebased access in this application. Once the user reaches the webpage, they are supposed to register and login upon which they are redirected to a role page where they have to choose whether they're company or a candidate. Each of them have a different interface. This is achieved using persisting a role field in the database. And if they do not have a role, they're redirected to the role page to choose one.

The design and the UI is built using Next.js, React.js and Tailwind CSS. The server side logic and routing is built using Next whereas all the components are designed using React and tailwind.

Node.js and Express are used for building the server, where each server route is organised and configured in different files. The Frontend makes the request to the backend to fetch, create, update or delete data. Axios is used for making requests and rendering responses seamlessly.

Once the user is logged in, the userId from the database and the user email is stored in the localstorage for further access. These values are used for making requests to the backend, for example the localstorage id maybe fetched to dynamically get included in the request as params to get a specific job created by the user.

Each candidate can apply for a job, by submitting their CV and the resume, all the other details are autofilled by the data from the database, which creates smooth and quick user experience. Each company can post job listings, and also use AI to create job listings which is still under maintainence.

The UI is totally mobile responsive, and has real time toast notifications upon each action the user/company owner performs.

The app also has a applications table which the company can access can utilise to view all the applications. All the data is pulled up from the database and it redirects to a new page where all the details of the application is listed.

The company can also schedule interview which sends a mail to the applicant or reject the application which removes the application from the database. The company can perform CRUD operations of the job listing.

The user can also search for all the jobs by using the search bar under the jobs tab.

The video output of the application:
https://www.loom.com/share/63010e7ac8ee466cbfc763d7820b55ad
