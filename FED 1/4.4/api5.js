$.ajax ({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=62qFPgzqwrnNV0KLEZ7AwV7OF745F2ZJ&rating=g',
    success: function(response) {
        console.log(response)
        var originalUrl = response.data.images.original.url;
        $("body").append("<img src = '" + originalUrl + "'></img>")
    }
})