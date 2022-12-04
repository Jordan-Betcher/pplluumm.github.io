

function buttonStart() 
{
  document.getElementById("section_start").style.display = "none";
  document.getElementById("section_goal").style.display = "";
}

function buttonSubmitGoal()
{
  document.getElementById("section_goal").style.display = "none";
  document.getElementById("section_mindfulness").style.display = "";
  let goal = document.getElementById("textarea_goal").value;
  document.getElementById("question_create_objective").textContent = "What is the next tactile step towards " + goal + " that is under a minute";
}

function buttonNextMindfulness()
{
  document.getElementById("section_mindfulness").style.display = "none";
  document.getElementById("section_objective").style.display = "";
}

function buttonsubmitObjective()
{
  document.getElementById("section_objective").style.display = "none";
  document.getElementById("section_done").style.display = "";

}

function buttonNextDone()
{
  alert("buttonNextDone");

}
