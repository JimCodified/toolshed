The Toolshed

This app models a tool library.

No, not a software / developer tool library...real tools you can use to make actual stuff like chairs and bookcases and desks and stuff.

The main purpose of this app is to give me some experience writing an app in a modern framework with a fancy, shmancy NoSQL database. I chose Ruby & MongoDB because they can be run locally and on several public cloud providers without being directly So here's what I'm using to run this puppy:

* Ruby 2.3.0
* Rails 4.2.5
* MongoDB 3.2.0
* Gems (the ones I fiddle with most):
  * Mongoid
  * Devise + Omniauth
  * JQuery
  * Foundation 6
    * With some Foundation 5 stuff pasted back in

So what can you do? Glad you asked...
* You can register & login
  * Devise setup authentication so you can use an email address or Facebook
* You can see all the tools you own
  * MongoDB holds all the data
    * Mainly because I wanted to learn a NoSQL style database. I don't actually think it makes the most sense for this project but it's but fun learning, all the same.
  * Foundation & JQuery provide the framework for the interface
    * Why Foundation? Because of the block grid and pricing table components. Both of which changed in Foundation 6 so I had to add pricing tables back in from F5.

You may notice some missing functionality: for example, while you can see all your tools, you may notice there's no way to add or delete tools. In fact, of the CRUD operations right now there's only 'R' in the app. I'm working on it.

# How to Run
1. Clone the repository
2. Install [MongoDB](https://www.mongodb.org/downloads#production)
3. Run MongoDB
  * leave the default port 3000
4. `Rails s` and go!

*Note:* If you want this to send emails or do FB auth you'll need to setup environment variables for:
  * "DEVISE_MAIL_SENDER"
  * "FB_APP_ID", and
  * "FB_SECRET"

which feed in to `config/initializers/devise.rb`. It'll be really hard to authenticate without these.
