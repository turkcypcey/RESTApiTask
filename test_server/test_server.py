import requests


def test_root(ENDPOINT):
    response = requests.get(ENDPOINT)
    assert response.status_code == 200
    assert 'text/html' in response.headers['Content-type']
    assert response.text
