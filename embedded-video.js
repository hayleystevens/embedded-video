'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
    const worksheetName = URL_ID;
   });

            function getUnderlyingData(){
                sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get(worksheetName);
		 // If the active sheet is not a dashboard, then you can just enter:
		 // viz.getWorkbook().getActiveSheet();
                options = {
                    maxRows: 10, // Max rows to return. Use 0 to return all rows
                    ignoreAliases: false,
                    ignoreSelection: true,
                    includeAllColumns: false
                };
    // Add an event listener for the selection changed event on this sheet.
    unregisterEventHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, function (selectionEvent) {
    });
  }

  
)();
