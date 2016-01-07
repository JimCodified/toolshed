class Tool
  include Mongoid::Document

  field :kind, type: String
  field :name, type: String
  field :brand, type: String
  field :owner, type: Hash
  field :accessory, type: Hash
  field :isAccessory, type: Boolean

end
