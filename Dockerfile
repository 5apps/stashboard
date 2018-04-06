FROM node:8

# Set up the Chrome PPA
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

# Update the package list, and install Chrome and unzip
RUN apt-get update && apt-get install -y google-chrome-stable unzip

# Set up ChromeDriver environment variables
ENV CHROMEDRIVER_VERSION 2.37
ENV CHROMEDRIVER_DIR /chromedriver

# Download and install ChromeDriver
RUN mkdir $CHROMEDRIVER_DIR
RUN wget -q --continue -P $CHROMEDRIVER_DIR \
    "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip" && \
    unzip $CHROMEDRIVER_DIR/chromedriver* -d $CHROMEDRIVER_DIR

# Put ChromeDriver into the PATH
ENV PATH $CHROMEDRIVER_DIR:$PATH

WORKDIR /app

# see https://git.io/vdao3
ENV JOBS 1

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

