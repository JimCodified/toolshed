class ToolsController < ApplicationController

  def new
    @tools = Tool.new
  end

  def index
    @tools = Tool.where(owner_id: current_user._id)
  end

end
