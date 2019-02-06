'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
    const worksheetName = URL_ID;
   });


    // Add an event listener for the selection changed event on this sheet.
    unregisterEventHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, function (selectionEvent) {
      // When the selection changes, reload the data
      loadSelectedMarks(worksheetName);
    });
  }

  
)();
