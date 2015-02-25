var fs = fs || {};
(function(fs) {
    fs.main = {
        init : function(){
            fs.main.loadImages();
        },
        loadImages: function(){
            var oThis = this;
                $.ajax({
                    url: '/get-images/',
                    error: function(){
                        console.log('Something wrong');
                    },
                    success: function(images){
                         oThis.displayImage(images);
                    }
                });
        },

        displayImage: function(images){
            //console.log(images.items);
            var imageList = images.items;
            var htmlBody = "";
            console.log(imageList)
            for (lists in imageList){
                console.log(imageList[lists].title);
                //htmlBody += imageList[lists].title;
                htmlBody += [
                        '<div class="test">',
                            '<div class="fl" style="width:300px;">',
                                '<img src='+imageList[lists].url+'>',
                            '</div>',
                            '<div class="fl" style="width:400px;">',
                                '<span class="removeX" title="remove">X</span><br>',
                                '<strong>',
                                    imageList[lists].title,
                                '</strong>',
                            '</div>',
                            '<div class="clear"></div>',
                        '</div>'
                ].join("")
            }
            $('#imageList').html(htmlBody);
            $(".removeX").click(function(){
                var el = $(this).closest(".test")
                 el.fadeOut(1000, function(){
                     el.remove();
                 })

            })
        }
    }

})(fs)