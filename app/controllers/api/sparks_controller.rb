# Respond to JSON requests about articles
class Api::SparksController < ApplicationController
    respond_to :json

    def index
        respond_with Article.order(title: :DESC)
    end

    def show
        respond_with Article.find(params[:id])
    end

    def create
        respond_with :api, Article.create(article_params)
    end

    def destroy
        respond_with Article.destroy(params[:id])
    end

    def update
        article = Article.find(params['id'])
        article.update(article_params)
        respond_with Article, json: article
    end

    private

    def article_params
        param.require(:article).permit(
            :title,
            :url
        )
    end

end
    