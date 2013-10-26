class DiscoverController < ApplicationController

 def index
    religion = Religion.new(name: "David")
    render text: "asd"
 end

end
