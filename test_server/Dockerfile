FROM python:alpine

WORKDIR /pytest/

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY *.py .

CMD ["pytest"]