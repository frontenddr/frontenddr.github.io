		function checkForm()
		{	
			if (document.getElementById('qiwi-input-qb').value==""){
				document.getElementById('qiwi-input-qb').style.border = '2px solid red';
				return false;
			}
			return true;
		};
