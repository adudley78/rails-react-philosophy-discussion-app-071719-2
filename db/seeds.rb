json = ActiveSupport::JSON.decode(File.read('db/seeds/articles.json'))
json.each do |record|
    Article.create!(record)
end