class ToolsController < ApplicationController

  def new
    @tools = Tool.new
  end

  def index
    @tools = Tool.all
  end

end
