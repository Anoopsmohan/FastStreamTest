from django.conf.urls import patterns, include, url
from django.contrib import admin

from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    url(r'^get-images/$', 'test_app.views.get_images'),
    url(r'^admin/', include(admin.site.urls)),
)
