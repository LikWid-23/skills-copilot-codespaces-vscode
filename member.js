function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var url = "skills.php?member=" + member + "&skills=" + skills;
  window