from collections.abc import Iterable

import requests


def test_index(ENDPOINT):
    response = requests.get(ENDPOINT)
    assert response.status_code == 200
    assert 'text/html' in response.headers['Content-type']
    assert response.text


def test_GET(ENDPOINT):
    response = requests.get(f'{ENDPOINT}/attendees')
    assert isinstance(response.json(), Iterable)

def test_POST_missing_fields(ENDPOINT):
    ATTENDEE = {
        "a": 1,
    }
    response = requests.post(f'{ENDPOINT}/attendee', json=ATTENDEE)
    assert response.status_code == 405


def test_GET_cors(ENDPOINT):
    response = requests.get(f'{ENDPOINT}/attendees')
    assert response.headers['Access-Control-Allow-Origin'], 'CORS Headers must be set - preferably to * for this learning exercise'
def test_OPTIONS_cors(ENDPOINT):
    """
    Server must respond to OPTIONS request for use with real browser
    """
    response = requests.options(ENDPOINT)
    assert response.status_code == 204
    assert 'POST' in response.headers['Access-Control-Allow-Methods']
