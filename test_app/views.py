import requests

from django.views.decorators.cache import cache_page

from decorators import jsonify


@cache_page(60*15)
@jsonify
def get_images(request):
    res = requests.get('http://192.254.141.167/~fstech/pic.php')
    if res.ok and res.json():
        return res.json(), 200

    return {'error': 'Something went wrong'}