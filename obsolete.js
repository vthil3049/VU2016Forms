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
