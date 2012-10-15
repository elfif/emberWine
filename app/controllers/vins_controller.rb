class VinsController < ApplicationController

  def index
    @vins = Vin.all

    respond_to do |format|
      format.html
      format.json { render json: @vins }
    end

  end

  def show
    @vin = Vin.find(params[:id])

    respond_to do |format|
      format.json { render json: @vin }
    end
  end

  def create
    @vin = Vin.new(params[:vin])

    respond_to do |format|
      if @vin.save
        format.json { render json: @vin, status: :created, location: @vin }
      else
        format.json { render json: @vin.errors, status: :unprocessable_entity }
      end
    end

  end

  def create
    @vin = Vin.find(params[:id])

    respond_to do |format|
      if @vin.update_attributes(params([:vin]))
        format.json { render json: nil, status: :ok }
      else
        format.json { render json: @vin.errors, status: :unprocessable_entity }
      end
    end

  end

  def destroy
    @vin = Vin.find(params[:id])
    @vin.destroy

    respond_to do |format|
      format.json { render json: nil, status: :ok }
    end
  end

end
