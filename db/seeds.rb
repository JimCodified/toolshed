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

user1 = User.find({"email":"buck.i.jim@gmail.com"})
user2 = User.find({"email":"jim.a73@gmail.com"})

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
      owner_id: user2._id
)
t2.child_tool = acc1
