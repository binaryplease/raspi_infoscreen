$.get('http://www.koelner-studentenwerk.de/KStW/RSS/rssSPP.php?id=20', function(data) {
    var $xml = $(data);
    $xml.find("item").each(function() {
        var $this = $(this),
            item = {
                title: $this.find("title").text(),
                link: $this.find("link").text(),
                description: $this.find("description").text(),
                pubDate: $this.find("pubDate").text(),
                author: $this.find("author").text()
        }

        $('#speiseplan_h').append(item.title);
        var html = $(item.description);
        var rows = $('table tr', html);
        //rows.removeAttr('style');
        
        $('#speiseplan_p').append(rows).find("tr, td").removeAttr("style");
        $( "sup" ).empty();
        $('#speiseplan_p tr:first').remove();

	});       
});