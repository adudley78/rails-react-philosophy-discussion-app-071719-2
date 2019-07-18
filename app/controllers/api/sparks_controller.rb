class Api::SparksController < ApplicationController
  respond_to :json

  def index
    respond_with Spark.order(spark_date: :DESC)
  end

  def show
    respond_with Spark.find(params[:id])
  end

  def create
    respond_with :api, Spark.create(spark_params)
  end

  def destroy
    respond_with Spark.destroy(params[:id])
  end

  def update
    spark = Spark.find(params['id'])
    spark.update(spark_params)
    respond_with Spark, json: spark
  end

  private

  def spark_params
    params.require(:spark).permit(
      :id,
      :spark_type,
      :spark_date,
      :title,
      :url
    )
  end

end