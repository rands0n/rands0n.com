FROM ruby:3.0.2-alpine

RUN mkdir /app

RUN apk update & apk add --no-cache build-base

ENV APP_HOME /app

WORKDIR /app

RUN gem install bundler jekyll

COPY Gemfile $APP_HOME/Gemfile
COPY Gemfile.lock $APP_HOME/Gemfile.lock

COPY . $APP_HOME

RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0"]
