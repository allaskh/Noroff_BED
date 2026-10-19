$.ajax ({
    url: 'https://api.github.com/repos/allaskh/Noroff_BED/contents/PRO?ref=main',
    success: function(response) {
        console.log(response)
    }
})
$.ajax ({
    url: 'https://api.github.com/repos/allaskh/Noroff_BED/contents/PRO?ref=main',
    processData: false,
    success: function(response) {
        console.log(response)
        const serialized = JSON.stringify(response);
        console.log(serialized);
        const deserialized = JSON.parse(serialized);
        console.log(deserialized);
    }
})