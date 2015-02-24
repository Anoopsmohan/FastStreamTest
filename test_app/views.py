import simplejson
import requests

from decorators import jsonify


@jsonify
def get_images(request):
    res = requests.get('http://192.254.141.167/~fstech/pic.php')
    if res.ok and res.json():
        return res.json(), 200

    return {'error': 'Something went wrong'}