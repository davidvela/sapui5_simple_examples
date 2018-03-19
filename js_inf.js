
		<!-- Bootstrap the UI5 core library -->
		<script id="sap-ui-bootstrap"

				data-sap-ui-libs="sap.ushell, sap.collaboration"
				data-sap-ui-theme="sap_bluecrystal"
				data-sap-ui-compatVersion="edge"
				data-sap-ui-resourceroots='{"so.mng ": "../"}'
				data-sap-ui-frameOptions='allow'
				src='https://sapui5.netweaver.ondemand.com/resources/sap-ui-core.js'>//src="../resources/sap-ui-core.js">
				//data-sap-ui-frameOptions='allow'> // NON-SECURE setting for testing environment
		</script>
				
				// initialize the ushell sandbox component
					//sap.ushell.Container.createRenderer().placeAt("content"); - original 
	                new sap.m.Shell({
	                    app: new sap.ui.core.ComponentContainer({
	                        height : "100%",
	                        name : "so.mng "
	                    })
	                }).placeAt("content");
				});


$(document).ready(function () {
	$("#get").click(function () {
		
		//Funtion to read JSON from file. 	
		$.getJSON("day.json", function (data) {
			$.each(data, function (i, val) {
				//Create model 
				$('<li>' + val + '</li>').appendTo('#output');
			});
		});
		//Function... 
	
	});
	//Create webservice call 
	oModel = new sap.ui.model.json.JSONModel();
	oModel.loadData("/ui5/");
	oModel.loadData("/ui5",
					{ "application":"week", },
					false,
					"POST");
	The POST method can be preferred because the transfer of the parameters
	in plain text via the URL can be critical in the SAP context.
});

src="../../openui5-sdk-1.32.11/resources/sap-ui-core.js"> 
C:\Users\MyUsername\AppData\Roaming\npm

C:\Users\A604080\AppData\Roaming\npm
