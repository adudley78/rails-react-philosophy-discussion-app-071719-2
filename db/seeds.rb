json = ActiveSupport::JSON.decode(File.read('db/seeds/sparks.json'))
json.each do |record|
    Spark.create!(record)
end