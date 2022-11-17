$(document).ready(function(){
    $("button").hover(function(){
        $(this).css("font-size", "larger");
    }, function(){
        $(this).css("font-size", "medium");
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $(this).css("color", "black");
    });
});

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("gitBio").innerHTML = gitObject.bio;
    for (var i=0; i < gitObject.length; i++)
    if (gitObject.name[i] >=5) {
        document.getElementById("repo").value = repo;
    }
  }
};
gitHubRequest.open("POST", "https://api.github.com/users/sallen21", true);
gitHubRequest.send();
