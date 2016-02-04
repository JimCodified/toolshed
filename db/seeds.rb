# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# "_id" : ObjectId("56a8715ca837c177dd000000"),
#	"email" : "buck.i.jim@gmail.com",
#
# "_id" : ObjectId("56aacab9a837c16e3d000001"),
#	"email" : "jim.a73@gmail.com",

# field :brand, type: String              # tool brand (Bosch, Ryobi, etc)
# field :kind, type: String               # kind of tool (miter saw, router table, etc...prob should be limited)
# field :description, type: String        # full description ('120V Corded 27x18 Benchtop Router Table')
# field :model, type: String              # model number
# field :nickname, type: String           # nickname: optional ('ol betsy')
# field :pic, type: String                # url for image (user will upload)
# field :purchase_date, type: DateTime    # when was this purchase_date
# field :purchase_location, type: String  # where'd you get it
# field :notes, type: String              # freeform notes field ('needs new blade', etc)
#
# belongs_to :owner, class: "user"
# :owner_id

# belongs_to :borrower, class: "user"
# :borrower_id
# recursively_embeds_many                 # accessories are tools that belong to this parent tools
require 'date'

user1 = User.create(
	email: "buck.i.jim@gmail.com",
#	encrypted_password: "$2a$10$vibmPbki3lXB61l4UyOL6OzNTXjFGyoAxe11X.YyAdhEKdbGbp7O2",
#  encrypted_password: "",
	sign_in_count: 2,
	failed_attempts: 2,
	name: "Jim",
	confirmation_token: "xwd9kGsrAyxSvQgJpi5v",
	confirmation_sent_at: DateTime.parse("2016-01-27T07:27:24.230Z"),
	confirmed_at: DateTime.parse("2016-01-27T07:36:54.317Z"),
	last_sign_in_at: DateTime.parse("2016-01-27T07:37:05.742Z"),
	current_sign_in_at: DateTime.parse("2016-01-29T01:33:52.949Z"),
	last_sign_in_ip: "::1",
	current_sign_in_ip: "::1"
)
user1.save

user2 = User.create(
	email: "jim.a73@gmail.com",
#	encrypted_password: "$2a$10$nC.kvzjxKbpHv7YcWs9jP.K/E3RA0LGNYgT.G2WTAdPoX4FyocUeW",
#  encrypted_password: "",
	sign_in_count: 6,
	failed_attempts: 0,
	provider: "facebook",
	uid: "10208891333140034",
	name: "Jim Armstrong",
	confirmation_token: "x4W6qUosky_ivs2wWcGD",
	confirmation_sent_at: DateTime.parse("2016-01-29T02:13:13.737Z"),
	confirmed_at: DateTime.parse("2016-01-29T02:14:53.389Z"),
	last_sign_in_at: DateTime.parse("2016-01-29T02:43:14.843Z"),
	current_sign_in_at: DateTime.parse("2016-02-04T01:17:21.995Z"),
	last_sign_in_ip: "::1",
	current_sign_in_ip: "::1",
	reset_password_token: "d55db8a366bc440ee0ba7d46282146f72161e3b28cb58c6201a07e1c678d37b7",
	reset_password_sent_at: DateTime.parse("2016-02-04T01:13:21.943Z")
)
user2.save

t1 = Tool.create(
      brand: "Bosch",
      kind: "Router Table",
      description: "120V Corded 27x18 Benchtop Router Table",
      model: "RA1181",
      pic: "http://thumbs.ebaystatic.com/images/g/2K4AAOSwL7VWjgNk/s-l225.jpg",
      purchase_location: "Home Depot",
      notes: "lost the feather guard",
      owner_id: user1._id
      )

t2 = Tool.create(
      brand: "Dewalt",
      kind: "Miter Saw",
      description: "15 Amp 12 in. Double-Bevel Compound Miter Saw",
      model: "DW716",
      notes: "haven't turned it on yet",
      owner_id: user2._id
)

acc1 = Tool.create(
      brand: "Dewalt",
      kind: "Stand/Table",
      description: "Heavy Duty Miter Saw Stand",
      model: "DWX723",
      parent_tool_id: t2._id,
      owner_id: user2._id
)
