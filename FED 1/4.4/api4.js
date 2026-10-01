$.ajax ({
    url: 'https://api.giphy.com/v1/gifs/trending/?api_key=62qFPgzqwrnNV0KLEZ7AwV7OF745F2ZJ&rating=g',
    success: function(response) {
        console.log(response)
    }
})