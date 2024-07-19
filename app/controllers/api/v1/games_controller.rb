module Api
  module V1

    class GamesController < ApplicationController

      def index
        @games = Game.all
        render json: @games
      end
       
      def create
        @game = Game.new(game_params)
        if @game.save
          render json: @game, status: :created
        else
          render json: @game.errors, status: :unprocessable_entity
        end
      end

      private

      def game_params
        params.require(:game).permit(:name, :description, :developer)
      end
    end
  end
end