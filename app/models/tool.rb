class Tool
  include Mongoid::Document

  field :brand, type: String              # tool brand (Bosch, Ryobi, etc)
  field :kind, type: String               # kind of tool (miter saw, router table, etc...prob should be limited)
  field :description, type: String        # full description ('120V Corded 27x18 Benchtop Router Table')
  field :model, type: String              # model number
  field :nickname, type: String           # nickname: optional ('ol betsy')
  field :pic, type: String                # url for image (user will upload)
  field :purchase_date, type: DateTime    # when was this purchase_date
  field :purchase_location, type: String  # where'd you get it
  field :notes, type: String              # freeform notes field ('needs new blade', etc)

  belongs_to :owner, class_name: "user", inverse_of: :tools
  belongs_to :borrower, class_name: "user", inverse_of: :borrowed_tools
  recursively_embeds_many                 # accessories are tools that belong to this parent tools

end
