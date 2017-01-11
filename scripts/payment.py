#!/usr/bin/python
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import stripe
import json

app = Flask(__name__)
CORS(app)

stripe.api_key = "sk_test_ynArsP8pllJniBGPo63VoS4I"

@app.route("/pay", methods=["GET", "POST"])
def payment():


    data = request.form

    print json.dumps(data["id"], indent=4)

    # Create a charge: this will charge the user's card
    try:
      charge = stripe.Charge.create(
          amount=1000, # Amount in cents
          currency="usd",
          source=data,
          description="Example charge"
      )
    except stripe.error.CardError as e:
      # The card has been declined
      pass

    return "0"



# TODO DISABLE DEBUG MODE IN FLASK BECAUSE OF 1337 HAX
# TODO CHANGE API KEY TO PROD
