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
    current_grade = '4'; //senior   
  } 
  
  var current_type = document.getElementById("item_type").value;    
  var prefix = performance + current_grade + current_type;
  document.getElementById("prefix").value = prefix;
  
}

function validate_contacts()
{
	if (document.getElementById('alt_first_name').value.toUpperCase() == document.getElementById('contact_first_name').value.toUpperCase()  )
	{
		alert("contact information cannot be identical");
		document.getElementById('alt_first_name').value = "";
	}
	else if (document.getElementById('alt_last_name').value.toUpperCase() == document.getElementById('contact_last_name').value.toUpperCase()  )
	{
		alert("contact information cannot be identical");
		document.getElementById('alt_last_name').value = "";
	}
	else if (document.getElementById('alt_email').value.toUpperCase() == document.getElementById('contact_email').value.toUpperCase()  )
	{
		alert("contact information cannot be identical");
		document.getElementById('alt_email').value = "";
	}
	else if (document.getElementById('alt_phone').value.toUpperCase() == document.getElementById('contact_phone').value.toUpperCase()  )
	{
		alert("contact information cannot be identical");
		document.getElementById('alt_phone').value = "";	
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
      addOption(item_box, "Individual artwork", "RT");   
    }
  
}

function addOption(selectbox,text,value )
{
	var optn = document.createElement("option");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function displayField()
{
	/* if category is music then display music subset only and hide details text box */
	if (document.getElementsByName('form[performance_category]')[0].checked) 
	{
	document.getElementsByClassName('rsform-block-music-type')[0].style.display="";
	document.getElementsByClassName('rsform-block-dance-type')[0].style.display="none";
	document.getElementsByClassName('rsform-block-other-type')[0].style.display="none";
	//document.getElementsByClassName('rsform-block-performance-other-detail')[0].style.display="none";
	}
 /* category is dance */
	else if (document.getElementsByName('form[performance_category]')[1].checked)
	{
	document.getElementsByClassName('rsform-block-music-type')[0].style.display="none";
	document.getElementsByClassName('rsform-block-dance-type')[0].style.display="";
	document.getElementsByClassName('rsform-block-other-type')[0].style.display="none";
	//document.getElementsByClassName('rsform-block-performance-other-detail')[0].style.display="none";
	}
	/* category is other */
	else
	{
		document.getElementsByClassName('rsform-block-music-type')[0].style.display="none";
		document.getElementsByClassName('rsform-block-dance-type')[0].style.display="none";
		document.getElementsByClassName('rsform-block-other-type')[0].style.display="";		
	//	document.getElementsByClassName('rsform-block-performance-other-detail')[0].style.display="";
	}
}

function num_part_changed()
{
	var max_parts = 14;  /* maximum number of participants */
	var num_parts = parseInt(document.getElementById('num_participants').value);
	
	for (var i= 1; i <= max_parts ; i++ )
	{
		var element_id = i.toString();
		var first_name = "rsform-block-part-"+element_id+"-first-name";
		var last_name = "rsform-block-part-"+element_id+"-last-name";
		var grade = "rsform-block-part-"+element_id+"-grade";
		var first_name_text = document.getElementById("part_"+element_id+"_first_name");
		var last_name_text = document.getElementById("part_"+element_id+"_last_name");
		if (i <= num_parts)
		{
			first_name_text.setAttribute("required", "");
			last_name_text.setAttribute("required", "");
			/* show the field if the participant number is within the range */
			document.getElementsByClassName(first_name)[0].style.display="";
			document.getElementsByClassName(last_name)[0].style.display="";
			document.getElementsByClassName(grade)[0].style.display="";
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

function same_contact_function()
{
	var teacher_same = false;
	var elem1 = document.getElementById('contacts_same0');
	var alt_same = false;
	var elem2 = document.getElementById('contacts_same1');
	if (elem1 == null || elem2 == null)
	{
		console.log("Some element is null");
	}
	else
	{
		teacher_same = elem1.checked;
		alt_same = elem2.checked;
		console.log("Element was found");
	}
	
	if (teacher_same)
	{
		//If teacher is the same as contact - then copy the contents and set it to readonly
		document.getElementById('teacher_first_name').value = document.getElementById('contact_first_name').value;
		document.getElementById('teacher_last_name').value = document.getElementById('contact_last_name').value;
		document.getElementById('teacher_email').value = document.getElementById('contact_email').value;
		document.getElementById('teacher_phone').value = document.getElementById('contact_phone').value;	
		
		document.getElementById('teacher_first_name').readOnly = true;
		document.getElementById('teacher_last_name').readOnly = true;
		document.getElementById('teacher_email').readOnly = true;
		document.getElementById('teacher_phone').readOnly = true;		
	}
	else
	{
		//Otherwise make sure the fields are editable
		document.getElementById('teacher_first_name').readOnly = false;
		document.getElementById('teacher_last_name').readOnly = false;
		document.getElementById('teacher_email').readOnly = false;
		document.getElementById('teacher_phone').readOnly = false;	
	}
	
	if (alt_same)
	{
		//If teacher is the same as contact - then copy the contents and set it to readonly
		document.getElementById('alt_first_name').value = document.getElementById('teacher_first_name').value;
		document.getElementById('alt_last_name').value = document.getElementById('teacher_last_name').value;
		document.getElementById('alt_email').value = document.getElementById('teacher_email').value;
		document.getElementById('alt_phone').value = document.getElementById('teacher_phone').value;
		
		document.getElementById('alt_first_name').readOnly = true;;
		document.getElementById('alt_last_name').readOnly = true;
		document.getElementById('alt_email').readOnly = true;
		document.getElementById('alt_phone').readOnly = true;	
	}
	else
	{
		//Otherwise make sure the fields are editable
		document.getElementById('alt_first_name').readOnly = false;
		document.getElementById('alt_last_name').readOnly = false;
		document.getElementById('alt_email').readOnly = false;
		document.getElementById('alt_phone').readOnly = false;	
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
	displayField();
	num_part_changed();
	music_required_function();
	enable_disable_submit();
};
</script>

	 