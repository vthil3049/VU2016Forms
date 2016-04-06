<script type="text/javascript">

function item_type_changed()
{
  var performance;
  if (document.getElementsByName('form[performance_category]')[0].checked) 
  {
    performance = 'M';  //Music
  }
  else if (document.getElementsByName('form[performance_category]')[1].checked)
  {
    performance = 'D';
  }
  else if (document.getElementsByName('form[performance_category]')[2].checked)
  {
    performance = 'A';
  }

  var current_grade ;
  if (document.getElementsByName('form[grade_group]')[0].checked)
  {
    current_grade = '1'; //sub junior
  }
  else if (document.getElementsByName('form[grade_group]')[1].checked)
  {
    current_grade = '2'; //junior    
  }
  else if (document.getElementsByName('form[grade_group]')[2].checked)
  {
    current_grade = '3'; //senior   
  }  
  else if (document.getElementsByName('form[grade_group]')[3].checked)
  {
    current_grade = '4'; //Adult   
  } 
  
  var current_type = document.getElementById("item_type").value;    
  var prefix = performance + current_grade + current_type+"_";
  document.getElementById("prefix").value = prefix;
  
  var numParticipants = 0;
  
  if ((performance == 'A' ) || (current_type == 'CVS') || (current_type == 'CIS') || (current_type == 'HVS') || (current_type == 'LVS') || (current_type == 'BS') || (current_type == 'FS') || (current_type == 'CS'))
  {
     numParticipants = 1;

  }
  else
  {
      numParticipants = 2;   
    
  }
  updateNumParticipantsDropdown(numParticipants);  //Change the dropdown to show just 1 or 2+
  
  document.getElementById('num_participants').value = numParticipants.toString();
  num_part_changed();
  //If solo is selected then don't allow participant count to change
  if (numParticipants == 1)
  {
    document.getElementById('num_participants').disabled = true;
  }
  else
  {
    document.getElementById('num_participants').disabled = false;    
  }
  	  
}
function updateNumParticipantsDropdown(numParticipants)
{
  var max_parts = 14;  /* maximum number of participants */
  
  participant_dropdown = document.getElementById('num_participants');
  participant_dropdown.options.length = 0;
  if (numParticipants == 1)
  {
    addOption(participant_dropdown, 1, 1);
  }
  else
  {
    for (var i= 2; i <= max_parts; i++)
    {
      addOption(participant_dropdown, i, i);
    }
  }
}


function displayCategory()
{
  //If art is selected then disable Adults and Subjuniors
  if (document.getElementsByName('form[performance_category]')[2].checked) 
	{
    //Remove any selections for the grade group
    for (var i= 0; i < 4; i++)
    {
      document.getElementsByName('form[grade_group]')[i].checked = false;
    }
    
    document.getElementsByName('form[grade_group]')[0].disabled = true;
    document.getElementsByName('form[grade_group]')[3].disabled = true;
  }
  else
  {
    //if its music or dance enable all grade groups
    document.getElementsByName('form[grade_group]')[0].disabled = false;
    document.getElementsByName('form[grade_group]')[1].disabled = false;
    document.getElementsByName('form[grade_group]')[2].disabled = false;
    document.getElementsByName('form[grade_group]')[3].disabled = false;
  }
  //Item types need to change when category changes
  displayItemTypes();
}
function displayItemTypes()
{
  var item_box = document.getElementById("item_type");
  //first clear all the items
  item_box.options.length = 0;
  addOption(item_box, "Please select one", "0");
  
  //Get the performance type and fill out the appropriate values
    if (document.getElementsByName('form[performance_category]')[0].checked) 
    { //if music is checked
      if (document.getElementsByName('form[grade_group]')[0].checked)
      {
        //music for sub juniors
        addOption(item_box, "Carnatic Vocal Group", "CVG");
        addOption(item_box, "Hindustani Vocal Group", "HVG");
        addOption(item_box, "Non-Classical (Light) Vocal Group", "LVG");        
      }
      //juniors and seniors music
      else if ((document.getElementsByName('form[grade_group]')[1].checked) ||
      (document.getElementsByName('form[grade_group]')[2].checked) )
      {
        //music for juniors and   seniors
        addOption(item_box, "Carnatic Vocal Solo", "CVS");
        addOption(item_box, "Carnatic Vocal Group", "CVG");
        addOption(item_box, "Carnatic Instrumental Solo", "CIS");        
        addOption(item_box, "Hindustani Vocal Solo", "HVS");
        addOption(item_box, "Hindustani Vocal Group", "HVG"); 
        addOption(item_box, "Hindustani Instrumental Solo", "HIS");          
        addOption(item_box, "Non-Classical (Light) Vocal Solo", "LVS");       
        addOption(item_box, "Non-Classical (Light) Vocal Group", "LVG");
        addOption(item_box, "Non-Classical (Light) Instrumental Solo", "LIS");          
      }  
      else if (document.getElementsByName('form[grade_group]')[3].checked)
        //Adult music performer
      {
        addOption(item_box, "Non-Classical (Light) Vocal Solo", "LVS"); 
      }
    }  // end music - begin dance selections
    else if (document.getElementsByName('form[performance_category]')[1].checked) 
    {
     if (document.getElementsByName('form[grade_group]')[0].checked)
      {
        //dance for sub juniors
        addOption(item_box, "Bharathanatyam Group", "BG");
        addOption(item_box, "Folk/Film (Non-Classical) Group", "FG");
        addOption(item_box, "Non-Classical (Light) Vocal Group", "LVG");        
      }
      //juniors and seniors music
      else if ((document.getElementsByName('form[grade_group]')[1].checked) ||
      (document.getElementsByName('form[grade_group]')[2].checked))
      {
        //dance for juniors and   seniors
        addOption(item_box, "Bharathanatyam Solo", "BS");
        addOption(item_box, "Bharathanatyam Group", "BG");
        addOption(item_box, "Classical (other) Solo", "CS");
        addOption(item_box, "Classical (Other) Group ", "CG"); 
        addOption(item_box, "Folk/Film (Non-Classical) Solo", "FS");       
        addOption(item_box, "Folk/Film (Non-Classical) Group", "FG");
      }  
      else if (document.getElementsByName('form[grade_group]')[3].checked)
        //Adult dance performer
      {
        addOption(item_box, "Folk/Film (Non-Classical) Solo", "FS");       
        addOption(item_box, "Folk/Film (Non-Classical) Group", "FG");
      }      
    }
    else
    {
      addOption(item_box, "Individual artwork", "A");   
    }
  
}

function addOption(selectbox,text,value )
{
	var optn = document.createElement("option");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}


function num_part_changed()
{
	var max_parts = 14;  /* maximum number of participants */
	var num_parts = parseInt(document.getElementById('num_participants').value);
	//Get the current selection for grade group
  
	for (var i= 1; i <= max_parts ; i++ )
	{
		var element_id = i.toString();
		var first_name = "rsform-block-part-"+element_id+"-first-name";
		var last_name = "rsform-block-part-"+element_id+"-last-name";
		var grade = "rsform-block-part-"+element_id+"-grade";
		var first_name_text = document.getElementById("part_"+element_id+"_first_name");
		var last_name_text = document.getElementById("part_"+element_id+"_last_name");
    var grade_box = document.getElementById("part_"+element_id+"_grade");
    //first clear all the items
    grade_box.options.length = 0;
    addOption(grade_box, "Please select one", "0");   
    
		if (i <= num_parts)
		{
			//first_name_text.setAttribute("required", "");
			//last_name_text.setAttribute("required", "");
      first_name_text.required = true;
      last_name_text.required = true;
			/* show the field if the participant number is within the range */
			document.getElementsByClassName(first_name)[0].style.display="";
			document.getElementsByClassName(last_name)[0].style.display="";
			document.getElementsByClassName(grade)[0].style.display="";

      if (document.getElementsByName('form[grade_group]')[0].checked)
      {
        //Add K - 2
        addOption(grade_box, "K", "K");
        addOption(grade_box, "1", "1");  
        addOption(grade_box, "2", "2");         
      }
      else if (document.getElementsByName('form[grade_group]')[1].checked)
      {
        //Add 3-7
        addOption(grade_box, "3", "3");
        addOption(grade_box, "4", "4");  
        addOption(grade_box, "5", "5"); 
        addOption(grade_box, "6", "6");  
        addOption(grade_box, "7", "7");         
      }
      else if (document.getElementsByName('form[grade_group]')[2].checked)
      {
        //Add 3-7
        addOption(grade_box, "8", "8");
        addOption(grade_box, "9", "9");  
        addOption(grade_box, "10", "10"); 
        addOption(grade_box, "11", "11");  
        addOption(grade_box, "12", "12");         
      }      
      else if (document.getElementsByName('form[grade_group]')[3].checked)  
      {
        addOption(grade_box, "Adult", "Adult");
      }
		}
		else
		{
			first_name_text.removeAttribute("required");
			last_name_text.removeAttribute("required");
			/* hide the field if the participant number is not within the range */
			document.getElementsByClassName(first_name)[0].style.display="none";
			document.getElementsByClassName(last_name)[0].style.display="none";
			document.getElementsByClassName(grade)[0].style.display="none";
		}
	}
}
	
function music_required_function()
{
	var required= (document.getElementsByName('form[music_required]')[0].checked);
	var style = required ? "": "none";
	document.getElementsByClassName('rsform-block-performance-audio')[0].style.display=style;
	if (required)
	{
		document.getElementById("performance_audio").setAttribute("required", "");
	}
	else
	{
		document.getElementById("performance_audio").removeAttribute("required");
	}

}


function enable_disable_submit()
{
	if (document.getElementById('signature0').checked)
	{
		document.getElementById('submit').disabled = false;
	}
	else
	{
		document.getElementById('submit').disabled = true;	
	}
}
window.onload = function() {
   // document.getElementsByName('form[performance_category]')[0].checked=true;
	//displayField();
	num_part_changed();
	music_required_function();
	enable_disable_submit();
};
</script>

	 