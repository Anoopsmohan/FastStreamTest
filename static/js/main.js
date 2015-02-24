var fs = fs || {};
var htmlBody = '';
(function(fs) {
    fs.main = {
        init : function(){
            fs.main.loadImages();
        },
        loadImages: function(){
            var oThis = this;
            $.when(
                $.ajax({
                    url: '/get-images/',
                    error: function(){
                        console.log('Something wrong');
                    }
                })
            ).done(function(images){
                    oThis.displayImage(images);
                }
            );
        },

        displayImage: function(images){
            //console.log(images.items);
            htmlBody = '<h1>Images</h1> <br><br>';
            var imageList = images.items;
            console.log(imageList)
            for (lists in imageList){
                console.log(imageList[lists].title);
                //htmlBody += imageList[lists].title;
                htmlBody += '<div><strong>'+imageList[lists].title+ '</strong><br><img src='+imageList[lists].url+'></div><br>';
            }
            $('#imageList').html(htmlBody);
        }
    }

})(fs)