# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

/stock/coffee /get get the amount of stock left coffee
              /put update the amoutn of caoffee left after a customer buys a coffee
              /delete remove a coffee that isnt for sale anymore
              /post add new coffee i.e pumpkin spice lattee

/stock/dessert ^ same concepts and endpoints

/stock/drinks  ^same concets and endpoints

/stock/food    ^same concepts and endpoint

/seating/terasse  /get how many seats are availible
                  /post add the terrase to resources during the summer
                  /put modify amount of tables availible
                  /delete remove tables during winter (terasse)

/seating/bar      ^same concepts and endpoints

/seating/indoor   ^same concepts and endpoints

/customers/instore   /get list of orders pending and not paid
                     /post add customer to pending
                     /put modify the order
                     /delete remove customer form pending after theyve paid

/customers/takeout      ^ same concepts and endpoints

/customers/mobileapp    ^same concepts and endpoints

/rewards        /get the list of people who are eligible and status
                /post add a user to the list
                /put modify users points
                /delete removes a user

/sales          /get list of sales for the day
                /post adds a new sale
                /put modiies incase of refunds

/payroll        /get list of employees, name, hours, salary
                /post add an employee
                /put modify hours, salary name
                /delete remove an employee

/purchases      /get list of purchases
                /post add a purchase or item
                /put modify the purchase
                /delete remove orders in extreme cases like COVID where the store closes


